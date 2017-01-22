var submit=document.getElementById('submit');
submit.onclick=function () {
	var count=document.getElementById('count').value;
	var password=document.getElementById('password').value;
	var info=document.getElementById('info');
	if (count==''||password=='') {
          info.className='warm';
          info.innerHTML='请输入完整的账号或密码'
          return false;
	} 
	if(count=='admin' && password=='123456'){
		alert("Welcome  "+count);
		return false;
	}else{
		info.className='warm';
		info.innerHTML='用户名或密码错误'
		return false;
	}
}