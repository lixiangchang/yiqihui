$(function(){
	$(window).resize(function(){
		change();	
	})
	change();
	function change(){
		var fontSi= $(window).width()/(414/12);
		$("html").css("font-size",fontSi+"px");
	}
	
	
	$("#lunbo").css("height",$("#lunbo img").height()+"px");
	
	
	var n=0;
	var m=0;
	var timer=null;
	timer=setInterval(function(){
		lunbo();
	},3000);
	function lunbo(){
		n++;
		if(n>3)n=0;
		if(n<0)n=3;
		$("#lunbo ul").css("left",-$("#lunbo ul li").width()*n+"px");
		$("#lunbo ol li").eq(n).addClass("active").siblings().removeClass("active");
	}
	$("#lunbo").swipeLeft(function(){
		clearInterval(timer);
		lunbo();
		timer=setInterval(function(){
			lunbo();
		},3000);
	})
	$("#lunbo").swipeRight(function(){
		n-=2;
		clearInterval(timer);
		lunbo();
		timer=setInterval(function(){
			lunbo();
		},3000);
	})
})


