<?php
header("Content-Type:application/json;charset=utf-8");
require("init.php");
$lid=$_REQUEST["lid"];
$count=$_REQUEST["count"];
$xq=$_REQUEST["xq2"];
//$total=$_REQUEST["total"];
if($lid!=null&&$count!=null){
		$sql="update biao_gouwu set count=$count where lid=$lid and xq2=$xq";
		$result=mysqli_query($conn,$sql);
		echo '{"msg":"success"}';
};
