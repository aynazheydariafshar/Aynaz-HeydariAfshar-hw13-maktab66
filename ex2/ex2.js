$("#accordion > li > div").click(function(){

	if(false == $(this).next().is(':visible')) {
		$('#accordion ul').slideUp(700);
	}
	$(this).next().slideToggle(700);
});

$('#accordion ul:eq(0)').show();
