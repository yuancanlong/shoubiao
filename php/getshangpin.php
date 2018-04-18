<?php
header("Content-Type:application/json");
require_once("init.php");
$sql="select * from biao_shop where sid!=0 order by sid limit 8";
$result=mysqli_query($conn,$sql);
echo json_encode(mysqli_fetch_all($result,1));