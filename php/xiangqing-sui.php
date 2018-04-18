<?php
header("Content-Type:application/json;charset=utf-8;");
require("init.php");
#$sid=$_REQUEST["sid"];
$sql="select * from biao_shop order by xiaoliang desc  limit 4";
$result=mysqli_query($conn,$sql);
echo json_encode(mysqli_fetch_all($result,1));


