 window.onload=function(){
	var screen=document.getElementById('screen');
	var btn=document.getElementsByTagName('button');
	for(i=0;i<btn.length;i++){ 
	    btn[i].onclick=function(){
	    	var id=this.getAttribute('id');
	       // var id=this.attributes["id"].value;  
	    	if (id=='clear') {
	    		screen.value="";
	    	}else if(id=='calc'){
	    		screen.value=eval(screen.value);
	    	}else{
	    		screen.value+=this.innerHTML;
             }
		
		}
	}
	var calIcon=document.getElementById('cal-icon');
	var calContainer=document.getElementById('cal-container');
     calIcon.onmouseover=function(){
           calContainer.style.display="block";
     }
     calContainer.onmouseover=function(){
     	   calContainer.style.display="block";
     }
     calIcon.onmouseout=function(){
     	calContainer.style.display="none";
     }
	}