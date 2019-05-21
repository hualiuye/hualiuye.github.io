$(function(){
	/*固定头部*/
	$(window).scroll(function(){
		if($(document).scrollTop()>=110){
			$(".header-menu").addClass("fixed");
		}else{
			$(".header-menu").removeClass("fixed");
		}
	})
	var scrolltop=$(document).scrollTop();
	if(scrolltop>=110){
		$(".header-menu").addClass("fixed");
	}else{
		$(".header-menu").removeClass("fixed");
	}
	/*表单验证*/
	$('.form-suggest :input,.form-suggest textarea').blur(function(){
		var telreg=/^1[34578]\d{9}$/,
			emailreg=/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
		/*姓名*/
		if($(this).is('#username')){
			var val=$(this).val();
			if(!val||val==" "){
				layer.msg('姓名不能为空')
				$(this).val('')
				$(this).parent().addClass('err-style')
				$(this).parent().attr('data-err')
			}else{
				$(this).parent().removeClass('err-style')
				$(this).parent().removeAttr('data-err')
			}
		}
		/*电话*/
		if($(this).is('#usertel')){
			var val=$(this).val();
			if(!val||val==" "){
				layer.msg('电话不能为空')
				$(this).val('')
				$(this).parent().addClass('err-style')
				$(this).parent().attr('data-err')
			}else if(!telreg.test(val)){
				layer.msg('手机格式不正确')
				$(this).val('')
				$(this).parent().addClass('err-style')
				$(this).parent().attr('data-err')
			}else{
				$(this).parent().removeClass('err-style')
				$(this).parent().removeAttr('data-err')
			}
		}
		/*邮箱*/
		if($(this).is('#useremail')){
			var val=$(this).val();
			if(!val||val==" "){
				layer.msg('邮箱不能为空')
				$(this).val('')
				$(this).parent().addClass('err-style')
				$(this).parent().attr('data-err')
			}else if(!emailreg.test(val)){
				layer.msg('邮箱格式不正确')
				$(this).val('')
				$(this).parent().addClass('err-style')
				$(this).parent().attr('data-err')
			}else{
				$(this).parent().removeClass('err-style')
				$(this).parent().removeAttr('data-err')
			}
		}
		/*文本域*/
		if($(this).is('#usersuggest')){
			var val=$(this).val();
			if(!val||val==" "){
				layer.msg('需求或建议不能为空')
				$(this).val('')
				$(this).parent().addClass('err-style')
				$(this).parent().attr('data-err')
			}else{
				$(this).parent().removeClass('err-style')
				$(this).parent().removeAttr('data-err')
			}
		}
	})
	/*重置*/
	$('.reset-btn').on('click',function(){
		$('.form-suggest input,.form-suggest textarea').val('');
		$('.form-suggest div').removeClass('err-style')
	})
	/*提交*/
	$('.submit-btn').on('click',function(){
		$('.form-suggest :input,.form-suggest textarea').trigger('blur')
		var errLen=$('.form-suggest div[data-err]').length;
		if(errLen>0){
			layer.msg('您还有信息未填写完毕')
		}else{
			
		}
	})
})
