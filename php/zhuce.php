<?php
header("Content-Type:application/json;charset=utf8");
require_once("init.php");
@$phone=$_REQUEST["phone"];
@$email=$_REQUEST["email"];
@$upwd=$_REQUEST["upwd"];
$upwd=md5(md5($upwd));
if($phone!=null&&$email!=null&&$upwd!=null){
	$sql="insert into biao_user (phone,email,upwd) values ('$phone','$email','$upwd')";
	$sum=mysqli_query($conn,$sql);
	if(!$sum==true){
		echo "失败";
	}else{
		echo "成功";
	}
}else{
	echo "失败";
}