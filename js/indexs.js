//轮播
$(()=>{
	var widths=innerWidth,
	tutime=400,
	lefttime=3500,
	moved=0;
	setInterval(()=>{
		moved++;
		$('.sui').animate({
			left:-widths*moved
			},tutime,function(){
				if(moved==2){					
					moved=0;
					$('.sui').css('left',0)
				}
			})
		},tutime+lefttime)
});

//楼层
$(()=>{
	$(window).scroll(()=>{
		var scrollTop=$(window).scrollTop();
		var offsetTop=$(".wangdian").offset().top;
		if(scrollTop+innerHeight/2>offsetTop){
			$(".louceng").show();
		}else{
			$(".louceng").hide();
		}

		var $floors=$(".floors")
			for(var i=0;i<$floors.length;i++){
				var $f=$($floors[i]);
				if($f.offset().top>scrollTop+innerHeight/2){
					break;
				}
					
		}
		$(`.ceng:eq(${i-1})`).addClass("ceng_on")
			.siblings().removeClass("ceng_on");		
	})
	$(".ceng").on("click",".ceng_lian",function(){
			console.log($("html"))
			console.log($("body"))
		var $a=$(this);
		var i=$a.parent().index();
		var offsetTop=$(`.floors:eq(${i})`).offset().top;
		$("html").stop(true).animate({
			'scrollTop':offsetTop				
		},1000)
		$("body").stop(true).animate({
			'scrollTop':offsetTop				
		},1000)
	
	})
});

//动态加载商品列表

$(()=>{
	$.get("php/getshangpin.php").then(resData=>{
		var html=""; 
		for(var i=0;i<resData.length;i++){
			var p=resData[i];		
			html+=`
				<a href=${p.href}>	
					<div class="shangpin-one">		
						<img src="${p.pci}"/>
						<span>${p.title}</span>
						<div class="zuoyou"></div>
						<p>¥${p.pirce}</p>
					</div>
				</a>`
		}
		document.querySelector(".shangpin-down").innerHTML=html;
	})
});
