
// 图片滑动
var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

$(function(){
	// 顶部导航
	document.onscroll=function(){
		var h=document.body.scrollTop || document.documentElement.scrollTop;
		if(h>=20){
			$(".tp-hd").css("visibility","visible");
		}else{
			$("header").hide();
		}
	}
})


// 点击跳转到相关内容
 $(window).scroll(function(event){
    checkscroll()
});
function checkscroll(){
	var winPos = $(window).scrollTop(); //屏幕位置
	var NodePos = [$('#a').offset().top,$('#b').offset().top,$('#c').offset().top],//提前获取好元素位置
			length = NodePos .length; 
 //console.log(NodePos)
	if(winPos<=NodePos[1]){
		$('#a').removeClass('active');
		$('#a:nth-child(1)').addClass('active');
	}else{
		for(var i = 1;i<length; i++){
			if(winPos<=NodePos[i+1]&&winPos>NodePos[i]){
				$('#a').removeClass('active');
				$('#a:nth-child('+(i+1)+')').addClass('active');
				break;
			}
		}
	}
}