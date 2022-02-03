$(".ul-first > li  a").click(function(){

	if(false == $(this).next().is(':visible')) {
		$('.ul-first ul').slideUp(300);
	}
	$(this).next().slideToggle(300);
});

$('.ul-first ul:eq(0)').show();
