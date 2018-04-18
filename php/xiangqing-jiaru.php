<?php
header("Content-Type:application/json;charset=utf-8");
require("init.php");
session_start();
@$uid=$_SESSION["uid"];
@$lid=$_REQUEST["lid"];
@$count=$_REQUEST["count"];
@$xq=$_REQUEST["xq2"];
$sql="select g.gid,g.uid,g.lid,g.count,g.is_checked,x.xiangqing_id from biao_gouwu g,biao_xiangqing x where g.uid=$uid and g.lid=$lid and g.xq2=$xq and x.xiangqing_id=$xq";

$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_row($result);
if($row==null){
	$sql="insert into biao_gouwu (uid, lid, count, is_checked,xq2) values ($uid,$lid,$count,0,$xq)";
}else{
	
	$sql="update biao_gouwu set count=count+$count where uid=$uid and lid=$lid and xq2=$xq";
}
$result=mysqli_query($conn,$sql);
if($result==true){
	echo '{"code":1,"msg":"添加成功"}';
}else{
	echo '{"code":-1,"msg":"添加失败"}';
}