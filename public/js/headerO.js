window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
});
$(document).ready(function(){
	
	$(window).resize( function()
	{
        var w=$(window).width();
    var h=$(window).height()*2;
                if(h<=w){ 
                    $('.ind').css("background-size","cover");
                }else{
                    $('.ind').css("background-size","contain");
                }
		
	
	
    });});

$(document).ready(function() {
            $('.hero').animate({
                opacity: 1
            }, 2000);
            $('.logo').delay(1000).animate({
                opacity: 1
            }, 1000);
            $('.mainMenu').delay(2000).animate({
                opacity: 1
            }, 1000);
            $('.toggle').delay(2000).animate({
                opacity: 1
            }, 1000);

            $('.overO').delay(2000).animate({
                opacity: 0.85
            }, 1000);


        })






$(document).ready(function() {


            $('.menu').click(function() {
                $('ul').slideToggle(1000);
            });

            $(window).resize(function() {
                if ($(window).width() > 768) {
                    $('ul').css("display", "grid");
                } else {
                    $('ul').css("display", "none");
                }
            });
        });