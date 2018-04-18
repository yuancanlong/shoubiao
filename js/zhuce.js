$(()=>{
	$.ajax({type:'get',url:'heard.html'})
		.then(html=>{
		document.getElementById('heard').innerHTML=html;
	})
});

	var  zhuce=true;
//$(()=>{
	$("#phone").blur(function(e){    /*手机号码验证*/
		var reg=/^1[3578]\d{9}$/;
		var phone=$("#phone").val();
		if(phone==""){
			$("#phone").next().html("必填项").css({fontSize:12,color:"red"});	
				e.preventDefault();
				zhuce=false;
		
		}else if(!reg.test(phone)){
			$("#phone").next().html("请填写正确的手机号码").css({fontSize:12,color:"red"});
				e.preventDefault();
				zhuce=false;
		}else{
			$("#phone").next().html("通过").css({fontSize:12,color:"green"});
			zhuce=true;
		}		 
	});
//});

//$(()=>{
	$("#email").blur(function(e){     /*邮箱验证*/
		var emreg=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		var email=$("#email").val();
		if(email==""){
			$("#email").next().html("必填项").css({fontSize:12,color:"red"});
				e.preventDefault();
				zhuce=false;
		
		}else if(!emreg.test(email)){
				$("#email").next().html("请填写正确的邮箱地址").css({fontSize:12,color:"red"});
				e.preventDefault();
				zhuce=false;
		}else{
			$("#email").next().html("通过").css({fontSize:12,color:"green"});
			zhuce=true;
		}				
	});
//});

//$(()=>{
	$("#upwd").blur(function(e){       /*密码验证*/
		var upreg=/^[a-zA-Z]\w{6,17}$/;
		var upwd=$("#upwd").val();
		if(upwd==""){
			$("#upwd").next().html("必填项").css({fontSize:12,color:"red"});
				e.preventDefault();
				zhuce=false;
		
		}else if(!upreg.test(upwd)){
			$("#upwd").next().html("密码不能含有非法字符").css({fontSize:12,color:"red"});
				e.preventDefault();
				zhuce=false;
		}
		else{
			$("#upwd").next().html("通过").css({fontSize:12,color:"green"});
			zhuce=true;
		}		
	});
//});


//$(()=>{
	$("#cpwd").blur(function(e){       /*再次输入密码验证*/	
		var upwd=$("#upwd").val();
		var cpwd=$("#cpwd").val();
		if(upwd!==cpwd){
			$("#cpwd").next().html("密码不正确").css({fontSize:12,color:"red"});
			e.preventDefault();
			zhuce=false;
		}else{
			$("#cpwd").next().html("通过").css({fontSize:12,color:"green"});
			zhuce=true;
		}		
	});	
//});

//$(()=>{
	$("#btn1").click(function(){
		console.log(zhuce)
		if(zhuce=true){
			ajax({
				type:'get',
				url:'php/zhuce.php',
				data:"phone="+$("#phone").val()+"&"+"email="+$("#email").val()+"&"+"upwd="+$("#upwd").val()
			}).then(function(data){

					if(data=="成功"){
						alert("注册成功")
							location="denglu.html";	
					}
				});
		}
	});
//})



$(()=>{  /*input获取焦点颜色*/
	$("#phone").focus(function(){
		$("#phone").css({backgroundColor:"#fff",transition:"all 1s linear"});
	});
	$("#email").focus(function(){
		$("#email").css({backgroundColor:"#fff",transition:"all 1s linear"});
	});
	$("#upwd").focus(function(){
		$("#upwd").css({backgroundColor:"#fff",transition:"all 1s linear"});
	});
	$("#cpwd").focus(function(){
		$("#cpwd").css({backgroundColor:"#fff",transition:"all 1s linear"});
	});
})