function ajax({type,url,data,dataType}){/*callback 回调地狱 加 promise解决 data是uname之类的*/
		return new Promise(callback=>{
		var xhr=new XMLHttpRequest();
		if(type.toLowerCase()=='get'&&data!==undefined)
			url+='?'+data;
		xhr.open(type,url,true);
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4){
				if(xhr.status==200){
				var resData=xhr.responseText;
					if(dataType!==undefined && dataType.toLowerCase()=='json'){/*判断是不是json自动的 json是字符串要加parse*/
						var resData=JSON.parse(resData);
					}
					callback(resData);
				}
			}
		}
		if(type.toLowerCase()==='post'){
		xhr.setRequestHeader(
			'Content-Type','application/x-www-form-urlencoded')
		}
			xhr.send(type.toLowerCase()=='get'?null:data);
		})
	}
