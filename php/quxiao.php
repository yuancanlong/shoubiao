<?php
header("Content-Type:application/json;charset=utf-8");
require_once("init.php");
session_start();
$uid=$_SESSION['uid'];
$gid=$_REQUEST['gid'];
$is=$_REQUEST['is'];
$sql="update biao_gouwu set is_checked=$is where gid=$gid and uid=$uid";
if($gid!=null && $uid!=null){
    $result=mysqli_query($conn,$sql);
    echo '{"msg":"success"}';
};
