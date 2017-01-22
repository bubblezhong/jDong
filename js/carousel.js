$(function(){
      var picList=$(".slideBar ul li"),
          olList=$(".slideBar ol li"),
          ul=$(".slideBar ul"),
          iNow=1,
          timer=null;
          nowList=1,
          next=$(".slideBar #next"),
          imageWidth=picList.outerWidth();
          prev=$(".slideBar #prev");
          olList.on('mouseover',function(){
          	var index=$(this).index();
            iNow=index+1;
            clearInterval(timer);
            $(this).addClass('active').siblings().removeClass('active');
            ul.stop(true,true).animate({left:-iNow*imageWidth+'px'},300);
          })
          function doRun(){
          	iNow=iNow+1;
          	if (iNow==picList.length) {
          		iNow=1;
          		ul.css({left:-iNow*imageWidth+'px'});
          		iNow=2
          	}
          	ul.animate({left:-iNow*imageWidth+'px'},300);
          	if (iNow==7) {
          		nowList=1;
          	}else{
          		nowList=iNow;
          	}
          	olList.eq(nowList-1).addClass('active').siblings().removeClass('active');
          };
          //页面载入自动轮播
          var timer=setInterval(doRun,1000);
           ul.on("mouseover",function(){
           	console.log("clearInterval")
           	  clearInterval(timer);
           });
           ul.on("mouseleave",function(){
           	console.log("setInterval")
           	  timer = setInterval(doRun,1000)
           });
           next.on("click",function(){
           	 doRun();
           });
           next.on("mouseover",function(){
           	console.log("next clearInterval")
           	    clearInterval(timer);
           });
           prev.on("click",function(){
                iNow=iNow-1;
                if (iNow==-1) {
                	iNow=6;
                	ul.css({left:-iNow*imageWidth+'px'});
                    iNow=5
                } 
                ul.animate({left:-iNow*imageWidth+'px'},300)
                if (iNow==0) {
                	nowList=6;
                }else{
                	nowList=iNow;
                }
                olList.eq(nowList-1).addClass('active').siblings('').removeClass("active");
           });
           prev.on("mouseover",function(){
           	clearInterval(timer);
           })
})