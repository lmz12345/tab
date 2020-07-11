$(function(){
	// 回到顶部
	document.onscroll=function(){
		var h=document.body.scrollTop || document.documentElement.scrollTop;
		if(h>=20){
			$(".top0").css("display","block");
		}else{
			$(".top0").css("display","none");
		}
	}
	$(".top0").click(function(){
		$("html,body").animate({
			scrollTop:"0px"
		},500)
	})
	//滑入滑出
	$(".s1").click(function(){
		$(".overlay").css("display","block");
		$(".huadong").slideDown();
		$("footer").hide();
	})
	$(".overlay").click(function(){
		$(".overlay").css("display","none");
		$(".huadong").slideUp();
		$("footer").show();
	})
	$(".tans").click(function(){
		$(".jia").fadeToggle();
	})
})



