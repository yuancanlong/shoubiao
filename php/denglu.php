<?php
header("Content-Type:application/json");
require_once("init.php");
@$phone=$_REQUEST["phone"];
@$upwd=$_REQUEST["upwd"];
$upwd=md5($upwd);
if($phone&&$upwd){
	$sql="select uid from biao_user where phone='$phone' and upwd='$upwd'";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_row($result);//找一行 是空的吗？空的 我需要
		if($row==null){//登录如果没有找到就不能登录 如果为空 
			echo "登录失败";//找到0个 
			
		}else{
			session_start();
			$_SESSION["uid"]=$row[0];
			echo "登录成功";	//1 找到  
		}
}else{
	echo "登录失败";
}
