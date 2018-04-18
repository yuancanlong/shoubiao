(()=>{
	ajax({type:"get",url:"foot.html"})
		.then(html=>{
		document.getElementById('foot').innerHTML=html;
	})
})()