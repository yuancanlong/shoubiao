$(()=>{
	$.get("php/shangpin.php").then(resData=>{
		var html="";
		for(var i=0;i<resData.length;i++){
			var p=resData[i];
			html+=`<a href=${p.href}>	
						<div class="suoyou-one">            
							<img src="${p.pci}"/> 
							<span>${p.title}</span> 
							<p>¥${p.pirce}</p>
						</div>
					</a>`
		}
		document.querySelector(".suoyou-cen").innerHTML=html;
	})
});