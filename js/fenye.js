function fenye(pno,pagesize){
	$.ajax({
		type:"get",
		url:"php/fenye.php",
		data:{pno:pno,pagesize:pagesize},
			success:function(data){
			 var html="";
			 for(var p of data.data){
			html+=`<a href=${p.href}>	
						<div class="suoyou-one">            
							<img src="${p.pci}"/> 
							<span>${p.title}</span> 
							<p>¥${p.pirce}</p>
						</div>
					</a>`		
			}	
			 

			$(".suoyou-cen").html(html);
	
		//	console.log(data.pno);  
			 data.pno=parseInt(data.pno);
			 data.pagecount=parseInt(data.pagecount);
			
			//console.log(data.pno);   //当前页码
           //console.log(data.pagecount);//总页数
			
			

			var html="";

			$(()=>{
				if(data.pno==1){
					$(".shang").hide();
				}else if(data.pno>1){
					html+=`<li><a href="javascript:;" class="shang">上一页</a></li>`
					$(".shang").show();
				}
			})	
			
			$(".ye").on("click",".shang",e=>{
				if(data.pno>0){
					data.pno=parseInt(data.pno-1);
					fenye(data.pno,4);	
				}
			})

			if(data.pno-1>0){
				html+=`<li><a href="javascript:;" class="yee">${data.pno-1}</a></li>`                    //上一页
			}
			 
				html+=`<li ><a href="javascript:;" class="yee hover">${data.pno}</a></li>`;               //当前页                      
			
			if(data.pno+1<=data.pagecount){
				html+=`<li><a href="javascript:;" class="yee">${data.pno+1}</a>`                           //下一页                             
			}
			                             
			
//			for(var abc=1;abc<=data.pagecount;abc++){
//				html+=`<li ><a href="javascript:;" class="yee">${abc}</a></li>`;   不要
//			}
			
			//html+=`<li><a href="javascript:;" class="xia">下一页</a></li>`

			$(()=>{
				if(data.pno==data.pagecount){
					$(".xia").hide();
				}else if(data.pno<data.pagecount){
					html+=`<li><a href="javascript:;" class="xia">下一页</a></li>`
					$(".xia").show();
				}
			})
			
			$(".ye").on("click",".xia",e=>{
				if(data.pno<data.pagecount){
				data.pno=parseInt(data.pno+1);
				
					fenye(data.pno,4);}
			})

			$(".ye").html(html);

		},
			error:function(){
			alert("网络故障请检查");
		}
	});
}
fenye(1,4);

$(".ye").on("click",".yee",
function(e){
  //1:阻止事件默认行为  a button submit
  e.preventDefault();
  var $tar=$(e.target);
   var a=$(this);
  //2:获取当前页码
 var pno = a.text();//0 1 2

  //3:调用上面分页函数
fenye(pno,4);

});


