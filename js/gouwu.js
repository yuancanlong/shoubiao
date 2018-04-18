//动态加载购物车页页面	

function chongxin(){	
	$.get("php/isdenglu.php").then(data=>{
		if(data.ok==0)
			location="denglu.html?back="+location.href;
		else{
			//var lid=location.href.split("=")[1]
			$.get("php/getgouwu.php").then(data=>{
				var html="",total=0,zong=0;
				console.log(data)
				for(var p of data){
					html+=`
					<tr class="gouwu-tr2" data-lid="${p.sid}">
								<td><img src="img/dele.png"/></td>
								<td><img src="${p.pci}"/></td>
								<td>${p.title}</td>
								<td class="fan">¥${p.pirce}</td>
								<td class="jiajian" data-lid="${p.sid}" data-xq="${p.xq2}">
									<input type="button" value="-" class="jian"><input type="text" value="${p.count}"><input type="button" value="+" class="jia"/>
								</td>
								<td class="zongjia">¥${(p.pirce*p.count).toFixed(2)}</td>
							</tr>`;	
					zong+=p.pirce*p.count
				}
				
				$(".gouwu-tr2").html(html);
				$(".you-tr1>td").html("¥"+zong)
				$(".you-tr3>td").html("¥"+zong)

/////////////////////////////////按钮加减//////////////////
	$(()=>{
		$(".jiajian").on("click",".jia,.jian",e=>{
			
			var $tar=$(e.target)
			 count=$tar.parent().children(":eq(1)").val();
				if($tar.is(".jia")){
					count++;
					chongxin()
					}
				else if(count>1){
					count--;
					chongxin()
				}

				var lid=$tar.parent().data("lid");
				
				var xq2=$tar.parent().data("xq");
				var inner=$tar.parent().prev().html();				
				if(inner=="¥2100.00") xq2=2
				console.log(xq2)
				$.get("php/upda-gouwu.php",{lid,count,xq2})
				.then(data=>{
						
						total=p.pirce*count;
						chongxin()						
				})
				$tar.parent().children(":eq(1)").val(count);			
		})
			
	})
////////////////////////////////////////////////
			});
		}
	});
};
//重新加载
$(()=>{	
	chongxin();
});


////////////////////////删除键//////////////////////////////
$(()=>{
	$(".gouwu-tr2").on("click","td:first-child",e=>{
		$tar=$(e.target);
		var title=$tar.parent().next().next().html()
			var lid=$tar.parent().parent().data("lid");
		if(confirm("是否继续删除 "+title+" 吗?"))
		$.get("php/clear-gouwu.php",{lid}).then(chongxin)
	})	
});
//////////////////////////////////////////////////////////////////