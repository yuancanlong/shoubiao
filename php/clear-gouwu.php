<?php
header("Content-Type:application/json;charset=utf-8");
require("init.php");

$lid=$_REQUEST["lid"];
$sql="delete from biao_gouwu where lid=$lid";
mysqli_query($conn,$sql);
echo '{"msg":"success"}';