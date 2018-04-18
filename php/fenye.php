<?php
header("Content-Type:application/json;charset=utf-8");
require("init.php");
$pno=$_REQUEST["pno"];//页码
$pagesize=$_REQUEST["pagesize"];//页面大小 一个页面多少个
$reg ='/^[0-9]{1,5}$/';
if(!preg_match($reg,$pno)){    //判断用户输入格式
   echo '{"code":-1,"msg":"页码格式不正确"}';
   exit; //停止php执行
}
if($pno<1){
 $pno = 1;
}
if(!preg_match($reg,$pagesize)){    //判断用户输入格式
   echo '{"code":-2,"msg":"页大小格式不正确"}';
   exit; //停止php执行
}
//echo "3";
if($pagesize<1){
 $pagesize = 4;
}
$sql1="select count(sid) as c from biao_shop";
$result=mysqli_query($conn,$sql1);
$row=mysqli_fetch_row($result);//查找有多少商品 lid为条件
$pagecount = ceil($row[0]/$pagesize);
$offset=($pno-1)*$pagesize;//获取当前内容
$sql2 = "select sid,title,href,pci,pirce from biao_shop order by sid  limit $offset,$pagesize";
$result=mysqli_query($conn,$sql2);
$rows=mysqli_fetch_all($result,MYSQLI_ASSOC);

$output=[
	"pno"=>$pno,
	"pagesize"=>$pagesize,
	"pagecount"=>$pagecount,
	"data"=>$rows
];
echo json_encode($output);