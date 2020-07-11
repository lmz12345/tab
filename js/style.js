 // 轮播图
 var mySwiper = new Swiper ('.swiper-container', {
	direction: 'horizontal', // 垂直切换选项
	loop: true, // 循环模式选项
	
})    
	var swiper = new Swiper(".swiper-container", {
		loop: true,
		slidesPerView: "auto",
		// loopedSlides: _this.bannerList.length,
		speed: 300,
		autoplay: {
			disableOnInteraction: false, //手动滑动之后不打断播放
			delay: 2000
	},
		observer: true, //监听，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
	pagination: {
		el: ".swiper-pagination"
	}
});




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
})