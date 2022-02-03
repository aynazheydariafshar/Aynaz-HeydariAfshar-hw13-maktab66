$(document).ready(function(){
    $(' ul.ul-first > li').click(function(){
        $(this).find('ul.ul-second').show(400)
    },function(){
        $(this).find('ul.ul-second').hide()
    });
});