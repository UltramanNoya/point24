<%@ page import="java.sql.*" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
    <title>welcome</title>
    <link rel="stylesheet" href="../css/login.css">
</head>
<body>
<div class="container">
    <h1>Welcome</h1>
    <div class="form-login">
        <input type="text" placeholder="您的账号" id="login_username" value="">
        <input type="password" placeholder="您的密码" id="login_password" value="">
        <button class="btn-login" >登录</button>
        <br>
        <span class="link-to-register">尚未拥有账号？去注册</span>
    </div>
    <div class="form-register">
        <input type="text" placeholder="您的账号" id="register_username" value="">
        <input type="password" placeholder="您的密码" id="register_password" value="">
        <button class="btn-register">注册</button>
        <br>
        <span class="link-to-login">已有账号？去登录</span>
    </div>
</div>
<ul class="bg-squares">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>

</body>
<script src="../js/login.js"></script>
</html>


