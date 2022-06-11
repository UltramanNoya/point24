// 要操作的元素
const container = document.querySelector('.container');
container.classList.add('toLogin');

// 登录按钮点击事件
const btn_login = document.querySelector('.btn-login');
btn_login.addEventListener('click', function () {
    let login_username = document.getElementById("login_username");
    let login_password = document.getElementById("login_password");
    let username = login_username.value.trim();
    let password = login_password.value.trim();
    if (username == "" || password == "")
        alert("请输入用户名和密码！");
    else {
        let xhttp;
        if (window.XMLHttpRequest) {
            xhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if(this.responseText.trim()=="true") {
                    console.log("登录成功");
                    container.classList.add('success');
                    setTimeout(function(){
                        window.location.href="../index.jsp";
                    }, 2000);
                }else{
                    alert("用户名或密码错误");
                }
            }
        };
        xhttp.open("GET", "/LoginServlet?username=" + username + "&password=" + password, true); //发送异步请求
        xhttp.send();
    }
})

// 注册按钮点击事件
const btn_register = document.querySelector('.btn-register');
btn_register.addEventListener('click', function () {
    let register_username = document.getElementById("register_username");
    let register_password = document.getElementById("register_password");
    let username = register_username.value.trim();
    let password = register_password.value.trim();
    if (username == "" || password == "")
        alert("请输入用户名和密码！");
    else {
        let xhttp;
        if (window.XMLHttpRequest) {
            xhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if(this.responseText.trim()=="true") {
                    console.log("注册成功");
                    container.classList.add('success');
                    setTimeout(function(){
                        window.location.href="../index.jsp";
                    }, 2000);
                }else{
                    alert("用户名已存在");
                }
            }
        };
        xhttp.open("GET", "/RegisterServlet?username=" + username + "&password=" + password, true); //发送异步请求
        xhttp.send();
    }
})


//去注册页面
const link_register = document.querySelector('.link-to-register');
link_register.addEventListener('click', function () {
    chage_page(container, 'toLogin', 'toRegister')
})

//去登陆页面
const link_login = document.querySelector('.link-to-login');
link_login.addEventListener('click', function () {
    chage_page(container, 'toRegister', 'toLogin')
})

function chage_page(container, now, target) {
    container.classList.remove(now);
    container.classList.add(target);
}
