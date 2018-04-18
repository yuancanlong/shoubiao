//$(()=>{
//	$.ajax({type:'get',url:'heard.html'})
//		.then(html=>{
//		document.getElementById('heard').innerHTML=html;
//	})
//});

//登录保存信息 session	
$(()=>{
	function isdenglu(){
		$.get("php/isdenglu.php").then(data=>{

			if(data.ok===0){
				$(".zhuxiao").hide().css("display","none");
				$(".huanyin_you").hide();
				$(".dengzhu>span").show();
			}else if(data.ok===1){
					$(".huanyin_you").show();
					$(".dengzhu>span").show().html("欢迎"+data.phone+"机主").css({
						textAlign:"right",
						lineHeight:51+"px",
						color:"white",
						display:"block",
					});
						$(".zhuxiao").show();
						$(".zhuxiao").click(function(e){
							$.get("php/zhuxiao.php").then(()=>{
								location.reload(true);
								location=location.href;
							})
						})
				}
		})
	}
		isdenglu();
	
});

//搜索框
	
$(()=>{
	$("#heard").load("heard.html",()=>{
		$(document.body).on("click",".sousuo>a>img",function(){
			var $a=$(this);
			var $txtSearch=$a.parent().prev()
				if($txtSearch.val()!==""){
					location="shangpin.html?kw="+$txtSearch.val().trim()
					
				}else{
						location="shangpin.html"
					}	
		})
	})
});


$(()=>{
	var search=location.search;
	var ab=$(".sousuo>input").val()
	if(ab!==""){
	var kw=decodeURI(search.split("=")[1]);
		$.get("php/shousuo.php",{kw})
			.then(data=>{
				var html="";
				for(var p of data){
					html+=`<a href=${p.href} data-lid="${p.sid}">	
							<div class="suoyou-one">            
								<img src="${p.pci}"/> 
								<span>${p.title}</span> 
								<p>¥${p.pirce}</p>
							</div>
						</a>`		
				}
					$(".suoyou-cen").html(html);
			})
		}else{
				location="shangpin.html"
		}

		if(search.indexOf("kw")!==-1)
				$(".sousuo>input").val(kw);
})


