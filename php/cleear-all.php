<?php
header("Content-Type:application/json;charset=utf-8");
require("init.php");
session_start();
$uid=$_SESSION["uid"];
$sql="delete from biao_gouwu where uid=$uid";
mysqli_query($conn,$sql);

