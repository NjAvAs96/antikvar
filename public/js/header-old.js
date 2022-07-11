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
            $('.slider').bxSlider({
                controls: false,
                auto: true,
                speed: 1500,
                pause: 5000,
                pager: false,
                infiniteLoop: true
            });
        });


$(document).ready(function() {
            $('.hero').animate({
                opacity: 1
            }, 1000);
            $('.logo').delay(1000).animate({
                opacity: 1
            }, 1000);
            $('.mainMenu').delay(2000).animate({
                opacity: 1
            }, 1000);
            $('.toggle').delay(2000).animate({
                opacity: 1
            }, 1000);

            $('.over').delay(4000).animate({
                opacity: 0.95
            }, 3000);
            $({
                sat: 1
            }).delay(6000).animate({
                sat: 3
            }, {
                duration: 1000,
                easing: 'swing', // or "linear"
                // use jQuery UI or Easing plugin for more options
                step: function() {

                    $('.bgVideo').css({
                        "-webkit-filter": "saturate(" + this.sat + ")",
                        "filter": "saturate(" + this.sat + ")"
                    });
                }
            });


        $(document).ready(function() {


            $('.menu').click(function() {
                $('ul').slideToggle(1000);
            })

            $(window).resize(function() {
                if ($(window).width() > 768) {
                    $('ul').css("display", "grid");
                } else {
                    $('ul').css("display", "none");
                }
                
                
            })
            
            
        })
$(window).ready(function() {
    });







        })


