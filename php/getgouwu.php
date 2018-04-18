<?php
header("Content-Type:application/json");
require_once("init.php");
session_start();
@$uid=$_SESSION["uid"];
//@$lid=$_REQUEST["lid"];
$sql="select g.uid,g.lid,g.count,g.xq2,s.sid,s.href,s.title,s.pci,x.xiangqing_id,x.lid,x.pirce from biao_gouwu g,biao_shop s,biao_xiangqing x where g.uid=$uid and g.lid=s.sid and x.lid=g.lid and x.xiangqing_id=g.xq2";
$result=mysqli_query($conn,$sql);
echo json_encode(mysqli_fetch_all($result,1));