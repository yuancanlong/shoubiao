SET NAMES UTF8;
DROP DATABASE IF EXISTS biao;
CREATE DATABASE biao CHARSET=UTF8;
USE biao;
CREATE TABLE biao_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16)
);
INSERT INTO biao_user VALUES
(NULL,'a123456', 'ding@qq.com', '13501234567'),
(NULL,'a123456', 'dang@qq.com', '13501234568'),
(NULL,'58cf703f664397ec4f0ac359b84b565c', '1092354703@qq.com', '13416499111');


create table biao_shop(
	sid int primary key auto_increment,
	title varchar(128) default Null,
	pci varchar(128) default NULL,
	pirce decimal(10,2) default NULL,
	href varchar(128) default NULL,
	xiaoliang int(11) not null
);
insert into biao_shop values(1,'商品名称1','img/q1.jpg','2800','xiangqing.html?lid=1&xiangqing_id=1',123);
insert into biao_shop values(2,'商品名称2','img/q2.jpg','2900','xiangqing.html?lid=2&xiangqing_id=1',321);
insert into biao_shop values(3,'商品名称3','img/q3.jpg','3000','xiangqing.html?lid=3&xiangqing_id=1',147);
insert into biao_shop values(4,'商品名称4','img/q4.jpg','1999','xiangqing.html?lid=4&xiangqing_id=1',741);
insert into biao_shop values(5,'商品名称5','img/q5.jpg','2200','xiangqing.html?lid=5&xiangqing_id=1',258);
insert into biao_shop values(6,'商品名称6','img/q6.jpg','2345','xiangqing.html?lid=6&xiangqing_id=1',852);
insert into biao_shop values(7,'商品名称7','img/q7.jpg','3456','xiangqing.html?lid=7&xiangqing_id=1',369);
insert into biao_shop values(8,'商品名称8','img/q8.jpg','4444','xiangqing.html?lid=8&xiangqing_id=1',963);
insert into biao_shop values(9,'商品名称9','img/q9.jpg','2800','xiangqing.html?lid=9&xiangqing_id=1',456);
insert into biao_shop values(10,'商品名称10','img/q10.jpg','2800','xiangqing.html?lid=10&xiangqing_id=1',654);
insert into biao_shop values(11,'商品名称11','img/q11.jpg','2800','xiangqing.html?lid=11&xiangqing_id=1',951);
insert into biao_shop values(12,'商品名称12','img/q12.jpg','2800','xiangqing.html?lid=12&xiangqing_id=1',159);


create table biao_xiangqing(
	xid int(11) primary key auto_increment,
	lid   int(11) NOT NULL,
	pirce decimal(10,2) default NULL,
	head varchar(128) default NUll,
	xiangqing_id int,
	guige varchar(128) default NULL	
);
insert into biao_xiangqing values(null,'1','2800','幼儿学,壮而行,上至君,下泽民',1,'官方标配');
insert into biao_xiangqing values(null,'1','2900','幼儿学,壮而行,上至君,下泽民',2,'全年保修');
insert into biao_xiangqing values(null,'2','2900','幼儿学,壮而行,上至君,下泽民',1,'官方标配');
insert into biao_xiangqing values(null,'2','3000','幼儿学,壮而行,上至君,下泽民',2,'全年保修');
insert into biao_xiangqing values(null,'3','3000','幼儿学,壮而行,上至君,下泽民',1,'官方标配');
insert into biao_xiangqing values(null,'3','3100','幼儿学,壮而行,上至君,下泽民',2,'全年保修');
insert into biao_xiangqing values(null,'4','1999','幼儿学,壮而行,上至君,下泽民',1,'官方标配');
insert into biao_xiangqing values(null,'4','2100','幼儿学,壮而行,上至君,下泽民',2,'全年保修');
insert into biao_xiangqing values(null,'5','2200','幼儿学,壮而行,上至君,下泽民',1,'官方标配');
insert into biao_xiangqing values(null,'5','2300','幼儿学,壮而行,上至君,下泽民',2,'全年保修');
insert into biao_xiangqing values(null,'6','2345','幼儿学,壮而行,上至君,下泽民',1,'官方标配');
insert into biao_xiangqing values(null,'6','2445','幼儿学,壮而行,上至君,下泽民',2,'全年保修');
insert into biao_xiangqing values(null,'7','3456','扬名声,显父母,光于前,裕于后',1,'官方标配');
insert into biao_xiangqing values(null,'7','3556','扬名声,显父母,光于前,裕于后',2,'全年保修');
insert into biao_xiangqing values(null,'8','4444','扬名声,显父母,光于前,裕于后',1,'官方标配');
insert into biao_xiangqing values(null,'8','4544','扬名声,显父母,光于前,裕于后',2,'全年保修');
insert into biao_xiangqing values(null,'9','2800','扬名声,显父母,光于前,裕于后',1,'官方标配');
insert into biao_xiangqing values(null,'9','2900','扬名声,显父母,光于前,裕于后',2,'全年保修');
insert into biao_xiangqing values(null,'10','2800','扬名声,显父母,光于前,裕于后',1,'官方标配');
insert into biao_xiangqing values(null,'10','2900','扬名声,显父母,光于前,裕于后',2,'全年保修');
insert into biao_xiangqing values(null,'11','2800','扬名声,显父母,光于前,裕于后',1,'官方标配');
insert into biao_xiangqing values(null,'11','2900','扬名声,显父母,光于前,裕于后',2,'全年保修');
insert into biao_xiangqing values(null,'12','2900','扬名声,显父母,光于前,裕于后',1,'官方标配');
insert into biao_xiangqing values(null,'12','3000','扬名声,显父母,光于前,裕于后',2,'全年保修');

create table biao_gouwu(
	gid int(11) primary key auto_increment,
	uid int(11) default NULL,
	lid int(11) default NULL,
	count int(11) default NULL,
	is_checked tinyint(1) default NULL,
	xq2 int(11) default NULL
);

insert into biao_gouwu values(null,'1','1','1','0',0);
insert into biao_gouwu values(null,'1','3','2','0',0);
insert into biao_gouwu values(null,'2','2','1','1',0);
insert into biao_gouwu values(null,'2','4','9','0',0);
insert into biao_gouwu values(null,'3','8','7','1',0);
insert into biao_gouwu values(null,'4','10','1','0',0);