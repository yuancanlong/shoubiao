
$("#phone").blur(()=>{/*失去焦点用户不为空*/
	var myVal=$("#phone").val()
		if(myVal==""){
			$(".denglu_msg2>#uname-msg").css({color:"red",fontSize:12+"px"})
			.html("手机不能为空")
		
		}else if(myVal!=""){
				ajax({
				type:'get',
				url:'php/denglu.php',
				data:"phone="+$("#phone").val()
			}).then()
			return true
		}else{
				$("form").submit(function(e){
				e.preventDefault();
				})
			}
 })


$("#upwd").blur(()=>{/*失去焦点密码不为空*/
	var mypwd=$("#upwd").val()
		if(mypwd==""){
			$(".denglu_msg2>#upwd-msg").css({color:"red",fontSize:12+"px"})
			.html("用密码不能为空")
			
		}else if(mypwd!==""){
				ajax({
				type:'get',
				url:'php/denglu.php',
				data:"upwd="+$("#upwd").val()
			}).then()
			return true
		}else{
				$("form").submit(e=>{
				e.preventDefault();
				})
			}
 })



$(".input1").click(function(){/*点击文本框变颜色*/
	$div=$(this)
	$div.css({backgroundColor:"#fff",
			transition:"all 1s linear"	});
})
$(".input1").focusout(function(){/*失去焦点文本框变颜色 focusout失去焦点设置input父元素*/
	$(this).css({backgroundColor:"#F5F5F5",
			transition:"all 1s linear"	});
})




$("#denglu").click(function(e){//登录时发生的事情
	if($("#phone").val()=="" && $("#upwd").val()==""){	
		$("#uname-msg").css({color:"red",fontSize:12+"px"})
			.html("手机号不能为空")
			e.preventDefault();
		$("#upwd-msg").css({color:"red",fontSize:12+"px"})
			.html("用密码不能为空")
			e.preventDefault();      
	}else if($("#phone") && $("#upwd")){
			ajax({
				type:'get',
				url:'php/denglu.php',
				data:"phone="+$("#phone").val()+"&"+"upwd="+$("#upwd").val()
			}).then(function(data){
					
					if(data=="登录成功"){
						alert("登录成功")
						
						var href=location.href;
						href=href.slice(0,href.lastIndexOf('/'))+"/zhuce.html"
						
						if(href==document.referrer){
							location='indexs.html'
						}else{
							window.history.back(-1)
						}

					}else{
						alert("手机号或密码错误")
					}
				});
	}	
})
