// 价格数量
$(function(){
	var count=0;
	$(".b1").click(function(){
		count ++;
		var a=$(".jiage").html();
		$(".count").html(count);
		var money =a*count;
		$(".money").html(money);
	});
	$(".b2").click(function(){
		if(count==0){
		}else{
			count --;
			var a=$(".jiage").html();
			$(".count").html(count);
			var money =a*count;
			$(".money").html(money);
		}
	});
		
})
$(function(){
	var count=0;
	$(".b3").click(function(){
		count ++;
		var a=$(".jiage2").html();
		$(".count2").html(count);
		var money =a*count;
		$(".money2").html(money);
	});
	$(".b4").click(function(){
		if(count==0){
		}else{
			count --;
			var a=$(".jiage2").html();
			$(".count2").html(count);
			var money =a*count;
			$(".money2").html(money);
		}
	});
		
})
$(function(){
	var count=0;
	$(".b5").click(function(){
		count ++;
		var a=$(".jiage3").html();
		$(".count3").html(count);
		var money =a*count;
		$(".money3").html(money);
	});
	$(".b6").click(function(){
		if(count==0){
		}else{
			count --;
			var a=$(".jiage3").html();
			$(".count3").html(count);
			var money =a*count;
			$(".money3").html(money);
		}
	});
		
})
$(function(){
	var count=0;
	$(".b7").click(function(){
		count ++;
		var a=$(".jiage4").html();
		$(".count4").html(count);
		var money =a*count;
		$(".money4").html(money);
	});
	$(".b8").click(function(){
		if(count==0){
		}else{
			count --;
			var a=$(".jiage4").html();
			$(".count4").html(count);
			var money =a*count;
			$(".money4").html(money);
		}
	});
		
})
/*全选*/
function checkAll(){
	var all=document.getElementById("all");
	var one=document.getElementsByName("checkname[]");
// 	if(all.checkd=true){
// 		for(var i=0;i<one.length;i++){
// 			one[i].checked=true;
// 		}
// 	}else{
// 		for(var j=0;j<one.length;j++){
// 			one[j].checked=false;
// 		}
// 	}
	for(var i=0;i<one.length;i++){
		one[i].checked=all.checked;
	}
}
$(function(){
	$("#all").click(function(){
		$(".zo").toggle();
	})
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
})