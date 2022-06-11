<%@ page import="java.sql.*" %>
<%@ page import="com.example.point24.bean.UserBean" %>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/index.css">
</head>

<body>

<div class="rank">
    <button class="btn-rank-show" isshow="true">显示排行&lt;</button>
    <table class="rank-table">
        <tr>
            <th>排名</th>
            <th>用户</th>
            <th>做题数</th>
            <th>正确率</th>
            <th>总分</th>
        </tr>
        <%  //获取排名信息
            try{
                Class.forName("com.mysql.cj.jdbc.Driver");  //加载驱动
                String url = "jdbc:mysql://127.0.0.1:3306/pointgame24?useSSL=false&serverTimezone=GMT";
                Connection con = DriverManager.getConnection(url, "root", "123456"); //连接代码
                String sql="select * from user order by score desc limit 10";
                PreparedStatement pre=con.prepareStatement(sql);  //预处理
                ResultSet rs=pre.executeQuery();
                int i=1;
                while(rs.next()&&i<=10) {
                    out.print("<tr>" +
                            "<td>" + i + "</td>" +
                            "<td>" + rs.getString(1) + "</td>" +
                            "<td>" + rs.getInt(3) + "</td>" +
                            "<td>" + rs.getInt(5) + "%" + "</td>" +
                            "<td>" + rs.getInt(4) + "</td>" +
                            "</tr>");
                    i++;
                }
                con.close();
            }catch (Exception e){
                System.out.println(e.getMessage());
            }
        %>
    </table>
</div>

<div class="outer">
    <h1>2 4 点 游 戏</h1>
    <a href="jsp/game.jsp">
        <button class="btn-start">开始游戏</button>
    </a>



    <%
        if(session.getAttribute("user")==null)
            out.print("<a href=\"jsp/login.jsp\">\n" +
                        "<button class=\"btn-to-login\">立即登录</button>\n" +
                      "</a>");
        else {
            UserBean user= (UserBean) session.getAttribute("user");
            out.print("<div class=\"user-info\">\n" +
                    "<p>您好, "+user.getUsername()+"</p>\n" +
                    "<p>您一共做了 <span>"+user.getSolvenumber()+"</span> 道题</p>\n" +
                    "<p>正确率为 <span>"+user.getCorrect()+"%</span></p>\n" +
                    "<p>总分为 <span>"+user.getScore()+"</span></p>\n" +
                    "</div>");
        }
    %>

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
<script src="js/index.js"></script>
</html>