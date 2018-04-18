<?php
header("Content-Type:application/json;charset=utf-8;");
require_once("init.php");
$kw=$_REQUEST["kw"];
$sql="select * from biao_shop";
if($kw){
	$kws=explode(" ",$kw);
	for($i=0;$i<count($kws);$i++){
		$kws[$i]=" title like '%$kws[$i]%' ";
	}
	$where=implode(" and ",$kws);
	$sql.=" where $where ";
}
$result=mysqli_query($conn,$sql);
echo json_encode(mysqli_fetch_all($result,1));
