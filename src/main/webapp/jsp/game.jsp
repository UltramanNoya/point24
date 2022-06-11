<%@ page import="java.util.Vector" %>
<%@ page import="com.example.point24.bean.UserBean" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>24点游戏</title>
    <link rel="stylesheet" href="../css/game.css">
</head>

<body>
<%--<%!--%>
<%--    int score=0;--%>
<%--%>--%>

<%--<div class="card num1">--%>
<%--    <img id="numb1" src="/img/bg.png" alt="2" width="100%" height="100%">--%>
<%--</div>--%>
<%--<div class="card num2">--%>
<%--    <img id="numb2" src="/img/bg.png" alt="4" width="100%" height="100%">--%>
<%--</div>--%>
<%--<div class="card num3">--%>
<%--    <img id="numb3" src="/img/bg.png" alt="13" width="100%" height="100%">--%>
<%--</div>--%>
<%--<div class="card num4">--%>
<%--    <img id="numb4" src="/img/bg.png" alt="6" width="100%" height="100%">--%>
<%--</div>--%>

<div class="card num1">
    <span>24</span>
</div>
<div class="card num2">
    <span>点</span>
</div>
<div class="card num3">
    <span>游</span>
</div>
<div class="card num4">
    <span>戏</span>
</div>

<div class="btn-group">
    <div class="btn-operator add"><span>+</span></div>
    <div class="btn-operator minus"><span>-</span></div>
    <div class="btn-operator times"><span>*</span></div>
    <div class="btn-operator divide"><span>/</span></div>
    <div class="btn-operator left-bracket"><span>(</span></div>
    <div class="btn-operator right-bracket"><span>)</span></div>
    <div class="btn-operator clear"><span>C</span></div>
    <div class="btn-operator backspace"><span>B</span></div>
</div>
<form action="/caculator" method="post">
    <div class="btn-tool start-game" id="begin"><span>开 始</span></div>
    <div class="btn-tool tips" id="tips"><span>Tips</span></div>
    <a href="../index.jsp">
        <div class="btn-tool home"><span>Home</span></div>
    </a>
    <div class="btn-tool submit"><span>提 交</span></div>


    <h2 class="time">时 间：<span id="use-time">0</span></h2>

    <h2 class="score">
        <%
            if (session.getAttribute("user") != null) {
                UserBean user = (UserBean) session.getAttribute("user");
                out.print("分 数：<span id='user-score'>"+user.getScore()+"</span>");
            } else {
                out.print("");
            }
        %>
    </h2>




    <input class="input-result" placeholder=" 请输入算式："  type="text" name="expression" value="" />
</form>

<%--<%--%>
<%--    if(session.getAttribute("caculRes")!=null){--%>
<%--        String yourRes= (String) session.getAttribute("caculRes");--%>
<%--        if(yourRes.equals("24")){--%>
<%--            score+=10;--%>
<%--            out.println("你的答案为："+yourRes+"回答正确！");--%>
<%--        }else{--%>
<%--            out.println("你的答案为："+yourRes+"回答错误！");--%>
<%--        }--%>

<%--    }--%>
<%--%>--%>

</body>
<script src="../js/game.js"></script>


<%--<script>--%>
<%--    let imgs=document.getElementsByTagName("img");--%>
<%--    function handleClick(id){--%>
<%--        switch (id){--%>
<%--            case 'begin':--%>
<%--                for(let i=0;i<imgs.length;i++){--%>
<%--                    let rand=Math.floor(Math.random()*52);   //生成下标随机数（1-52.png）--%>
<%--                    let numb=rand%13==0 ?13:rand%13;  //  value = (int)((num % 13 == 0 ? 13 : num % 13));--%>
<%--                    let url="/img/"+rand+".png";--%>
<%--                    imgs[i].setAttribute("src",url);--%>
<%--                    imgs[i].setAttribute("alt",numb);--%>
<%--                }--%>
<%--        }--%>
<%--    }--%>
<%--</script>--%>
</html>
