$(function(){
	$(".must").after("<span style='color:red;font-size:1.3rem;margin-left:1rem'></span>")
	// 邮箱
	$("#email").blur(function(){
		var val=$(this).val();
		var reg=/^\w+@\w+(\.\w+)+$/;
		if(reg.test(val)){
			$(this).css("border","1px solid #ccc")
			$(this).next().html("<span style='color:green'>邮箱输入正确</span>");
		}else{
			$(this).next().text("输入错误");
			$(this).css("border","1px solid red")
		}
	})
	// 密码6--13个位，包含数字、字母、下划线
	$("#pwd").blur(function(){
		var val=$(this).val();
		var reg=/^[A-z]\w{5,12}$/;
		if(reg.test(val)){
			$(this).css("border","1px solid #ccc")
			$(this).next().html("<span style='color:green'>密码输入正确</span>");
		}else{
			$(this).next().text("密码输入错误");
			$(this).css("border","1px solid red")
		}
	})
	// 提交
	$("form[name=myform]").submit(function(){
		//邮箱
		var val=$("#email").val();
		var reg=/^\w+@\w+(\.\w+)+$/;
		if(reg.test(val)){
			$("#email").next().html("<span style='color:green'>邮箱输入正确</span>");
		}else{
			$("#email").next().text("邮箱输入错误");
			$("#email").css("border","1px solid red")
			return false;
		}
		// 密码
		var val=$("#pwd").val();
		if(val=="" || val.length<6){
			$("#pwd").next().text("密码输入错误");
			$("#pwd").css("border","1px solid red")
			return false;
		}else{
			$("#pwd").next().html("<span style='color:green'>密码输入正确</span>");
		}
	})
})