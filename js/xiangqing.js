			var p=location.search.split("=");
			var lid=p[1].split("&")[0]
				var xq=p[2]
				var qian=[]
function chongxin(xq){
	(()=>{
			
			//var xq=location.search.split("=")[2];console.log(xq)
		ajax({
			type:"get",
			url:"php/xiangqing.php",
			data:"lid="+lid+"&xiangqing_id="+xq,
			dataType:"json"
		}).then(output=>{
			/*console.log(output);*/
			var product=output.prodult
			document.querySelector(".title").innerHTML=product.title;
			document.querySelector(".xiangqing-you>p:first-child").innerHTML=product.title;	
			document.querySelector(".xiangqing-you>p:nth-child(3)").innerHTML="¥"+product.pirce;
			document.querySelector(".xiangqing-you>span").innerHTML=product.head;

			var html="";
					//d3.dataset.lid=product.lid;
					d3.setAttribute('data-lid',product.lid)
				var gui=output.guiges
					/*console.log(gui)*/
				//规格
				
				for (var i of gui){						
					qian.push(i.pirce)					
					/*console.log(qian)		*/														
				 html+=		
					`<a href="javascript:;"  style="color:#000;"
					><div class="guige " data-class="${i.lid}" data-xq="${i.xiangqing_id}">${i.guige}</div></a>`
					$(".xiangqing-guige").html(html)
				}





					


		//放大镜部分
		var html=`	
			<img src=${product.pci}>
			<div class="huang"></div>
			<div class='fangda'></div>`
			
			$(".xiangqing-img").html(html)
			var $fangda=$(".fangda")[0].style.backgroundImage=`url(${product.pci})`;
			var $fangda=$(".fangda")[0].style.backgroundSize=800+"px";
		})
	})()
}

//重新加载
$(()=>{
	chongxin(xq);
});

//点击规格重新加载新规格的内容		
$(()=>{		
	$(".xiangqing-guige").on("click",".guige",e=>{
		/*console.log(1);*/
		$tar=$(e.target)
			var lid=$tar.data("class");
		var xq=$tar.data("xq")
			//console.log(e.data("class"));
			//location="xiangqing.html?lid="+lid+"&xiangqing_id="+xq;			
		chongxin(xq)
	})		
})


/*点击购物*/
$(".shop").click(e=>{		
	$tar=$(e.target)	
//		console.log(qian[1])
		var qianall='¥'+qian[1]
	var xq2=1
	var inner=document.querySelector(".xiangqing-you>p:nth-child(3)").innerHTML	
//		console.log(inner)
	if(qianall==inner) xq2=2;		
//		console.log(xq2)
	$.get("php/isdenglu.php").then(data=>{
		if(data.ok==0){
			location="denglu.html?back="+location.href;
				alert("请先登录")
		}else if(data.ok==1){
			$(".tianjia")[0].style.transition='all 0.3s linear';
			$(".tianjia")[0].style.top='318px';						
				var lid=$tar.data("lid");
				/*console.log(lid)*/
				var count=$(".jiajian").children(":eq(1)").val();	
			$.get("php/xiangqing-jiaru.php",{lid,count,xq2})
				.then(()=>{
					console.log(count)
					$(".tianjia>p").html("成功添加"+count+"件商品");
						/*chongxin(xq)*/	
				})	
		}
	})	
})


				//放大镜
$(()=>{	
	
	$(".xiande").mousemove(()=>{
		/*console.log(1)*/
		$(".xiangqing-img>.huang,.xiangqing-img>.fangda")
			.css("display","block");	
	});
	$(".xiande").mouseout(()=>{	
		$(".xiangqing-img>.huang,.xiangqing-img>.fangda")
			.css("display","none");			
	})
	$(".xiande").mousemove(e=>{
		var offsetX=e.offsetX, offsetY=e.offsetY;
		var top=offsetY-175/2,
			  left=offsetX-175/2;
		top=top<0?0:top>175?175:top;
		left=left<0?0:left>175?175:left;
		$(".huang")[0].style.top=top+"px";
		$(".huang")[0].style.left=left+"px";
		$(".fangda")[0].style.backgroundPosition=
			-left*16/7+"px "+(-top*16/7)+"px";
	})
});

//热搜商品
$(()=>{
	$.get("php/xiangqing-sui.php").then(reg=>{
		var html="";
		html+="<p>热销商品</p>";
		for(p of reg){
			html+=`
				<a href="${p.href}">
					<div class="xiangqing-ab-img">
					<img src="${p.pci}" alt="" />  
						<p>${p.title}</p>  
						<p>¥${p.pirce}</p>
					</div>
				</a>`
		}
			$(".xiangqing-about").html(html)
	})
});

//加减按钮
$(()=>{
	$(".jiajian").on("click",".jia,.jian",e=>{
		var $tar=$(e.target);
		
		var $input=$tar.parent().children(":eq(1)");
		var n=parseInt($input.val());
		if($tar.is(".jia")){
			n++;
			$(".jia").addClass("jiajianbian").siblings().removeClass("jiajianbian")
		}else if(n>1){
			n--;	
			$(".jian").addClass("jiajianbian").siblings().removeClass("jiajianbian")
		}else{
				$tar.removeClass("jiajianbian")
			}
			
		$input.val(n);
	})
});



	

