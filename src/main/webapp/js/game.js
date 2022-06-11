let cards=document.getElementsByClassName("card");
let operators=document.getElementsByClassName("btn-operator");
let result=document.getElementsByClassName("input-result")[0];

for(let i=0;i<cards.length;i++){  //实现点击卡片输入数字
    cards[i].onclick=function(){
        //let str=this.children[0].getAttribute("alt").trim();
        let str=this.children[0].innerHTML.trim();
        let startPos = result.selectionStart;
        let endPos = result.selectionEnd;
        if (startPos === undefined || endPos === undefined)
            result.value= result.value.trim()+str;
        else{
            result.value= result.value.substring(0, startPos) + str + result.value.substring(endPos);
        }
        result.focus();
    }
}
for(let i=0;i<operators.length;i++){  //实现点击按钮输入符号
    operators[i].onclick=function(){
        let str=this.children[0].innerHTML.trim();
        let startPos = result.selectionStart;
        let endPos = result.selectionEnd;
        if(str=='C'){
            result.value="";
        }else if(str=='B'){
            if(startPos!=undefined&&endPos!=undefined){
                if (startPos==endPos)
                    result.value=result.value.substring(0, startPos-1)+result.value.substring(endPos);
                else
                    result.value=result.value.substring(0, startPos)+result.value.substring(endPos);
            } else if(result.value.length>0)
                result.value=result.value.substring(0,result.value.length-1);
        }else if (startPos === undefined || endPos === undefined)
            result.value= result.value.trim()+str;
        else
            result.value=result.value.substring(0, startPos) + str + result.value.substring(endPos);
        result.focus();
    }
}

let btn_start_game=document.getElementsByClassName("start-game")[0];
let use_time=document.getElementById("use-time");
var timer;
btn_start_game.onclick=changeProblem;
function changeProblem(){  //换题
    let xhttp;
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let a=this.responseText.trim().split(",")
            for (let i = 0; i < a.length; i++) {
                if(a[i]!=""){
                    cards[i].children[0].innerHTML=a[i].trim();
                }
            }
            result.value="";
            clearInterval(timer);
            use_time.innerHTML=0;
            timer=setInterval(setTime,1000);
            btn_start_game.children[0].innerHTML="换 题";
        }
    };
    xhttp.open("GET", "/GetProblemServlet", true); //发送异步请求
    xhttp.send();
}

function setTime(){
    use_time.innerHTML=parseInt(use_time.innerHTML)+1;
}

let btn_submit=document.getElementsByClassName("submit")[0];
btn_submit.onclick=function (){  //提交按钮点击事件
    let input_result=document.getElementsByClassName("input-result")[0];
    let express=input_result.value.trim();
    let problem="";

    if(cards[0].children[0].innerHTML.trim()=="24"){
        alert("请先开始游戏！");
        return;
    }
    if(express=="24"||express.length<7||express.length>16){
        alert("您的计算有误!");
        return;
    }
    for(let i=0;i<cards.length;i++){  //实现点击卡片输入数字
        let str=cards[i].children[0].innerHTML.trim();
        if(express.search(str)==-1){
            alert("您的计算有误!");
            return;
        }
        problem+=str+",";
    }
    let xhttp;
    let h2_score=document.getElementsByClassName("score")[0];
    let has_login=h2_score.innerHTML.trim()!="";
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if(this.responseText=="true"){
                alert("恭喜，计算正确");
                let score=document.getElementById("user-score");
                score.innerHTML=parseInt(score.innerHTML)+1;
                changeProblem();

            }else {
                alert("您的计算有误!")
            }
        }
    };
    express = express.replaceAll(/\+/g, "%2B");  //对"+"编码，否则会变成空格
    let usetime=use_time.innerHTML;
    xhttp.open("GET", "/CalculatorServlet?expression="+express+"&has_login="+has_login
        +"&problem="+problem+"&usetime="+usetime, true); //发送异步请求
    xhttp.send();

}

let btn_tips=document.getElementById("tips");
btn_tips.onclick=function (){  //提示按钮点击事件
    let num1=cards[0].children[0].innerHTML.trim();
    let num2=cards[1].children[0].innerHTML.trim();
    let num3=cards[2].children[0].innerHTML.trim();
    let num4=cards[3].children[0].innerHTML.trim();
    if(num1=="24"){
        alert("请先开始游戏！");
        return;
    }
    let xhttp;
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);
        }
    };

    xhttp.open("GET", "/GetAnswerServlet?num1="+num1+"&num2="+num2+"&num3="+num3+"&num4="+num4, true); //发送异步请求
    xhttp.send();
}