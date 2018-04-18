<?php
header("Content-Type:application/json;charset=utf-8");
require("init.php");
$lid=$_REQUEST['lid'];
$xiangqing_id=$_REQUEST["xiangqing_id"];

$output=[];
if($lid){
	$sql=" select s.sid,s.pci,s.href,s.pirce,s.title,x.head,x.pirce,x.guige,x.lid,x.xiangqing_id,x.xid from biao_shop s,biao_xiangqing x where s.sid=x.lid and s.sid=$lid and xiangqing_id=$xiangqing_id";
	$result=mysqli_query($conn,$sql);
	$prodult=mysqli_fetch_all($result,1)[0];
	$output["prodult"]=$prodult;
	$xiangqing_id=$prodult["xiangqing_id"];
	$sql="select lid, guige,pirce,xiangqing_id from biao_xiangqing where lid=$lid";
	$result=mysqli_query($conn,$sql);
	$output["guiges"]=mysqli_fetch_all($result,1); 
	//$output["id"]=$xiangqing_id; 
};
echo json_encode($output);



//	$sql=" select s.lid,s.pci,s.price,s.title,x.head,x.xid,x.ce,x.guige,x.lid,x.xiangqing_id from biao_shop s,biao_xiangqing x where s.lid=x.lid ";
//	$result=mysqli_query($conn,$sql);
//	$rows=mysqli_fetch_all($result,1);
//	echo json_encode($rows);