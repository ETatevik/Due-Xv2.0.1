jQuery(document).ready(function($){

	// scroll
	{
		$("html").easeScroll({
            frameRate: 60,
            animationTime: 3000,
            stepSize: 120,
            pulseAlgorithm: 1,
            pulseScale: 8,
            pulseNormalize: 1,
            accelerationDelta: 20,
            accelerationMax: 1,
            keyboardSupport: true,
            arrowScroll: 50,
            touchpadSupport: true,
            fixedBackground: true
        });
	}

    //Header slider-------------------------------------------------------
    {
        let i = 0, j = 0;

        let intervalForSilder =  startSlider();

        //Header slider buttons click
        $('#arrow-next').on('click', function () {
            if(j == $('#front-box-slider li').length - 1){
                j = -1; 
            }
            $('#front-box-slider li').eq(j).fadeOut(0);
            $('#front-box-slider li').eq(j).removeClass('active'); 
            
            j++;
            $('#front-box-slider li').eq(j).fadeIn(500, function() {
                $('#front-box-slider li').eq(j).addClass('active');
            });


            $('.main-header-slider-img > div').eq(i).removeClass('active');
            i++;
            if(i >= $('.main-header-slider-img > div').length){
                i = 0;
            }
            $('.main-header-slider-img > div').eq(i).addClass('active');


            $('#slider-count').html("0" + (i + 1));
            $('#slider-size').html("0" + $('#front-box-slider li').length);
            clearInterval(intervalForSilder);
            intervalForSilder =  startSlider();
        });

        $('#arrow-prev').on('click', function () {
            $('#front-box-slider li').eq(j).fadeOut(0);
            $('#front-box-slider li').eq(j).removeClass('active'); 
            if(j <= 0 ){
                j = $('#front-box-slider li').length - 1; 
            }else{
                j--;
            }
            
            $('#front-box-slider li').eq(j).fadeIn(500, function() {
                $('#front-box-slider li').eq(j).addClass('active');
            });


            $('.main-header-slider-img > div').eq(i).removeClass('active');
            if(i !== 0){
                i--;
            }
            else {
                i = $('.main-header-slider-img > div').length - 1;
            }

            $('.main-header-slider-img > div').eq(i).addClass('active');


            $('#slider-count').html("0" + (i + 1));
            $('#slider-size').html("0" + $('#front-box-slider li').length);

            clearInterval(intervalForSilder);
            intervalForSilder =  startSlider();

        });

        function startSlider(){
            return setInterval( function() {
            if(j == $('#front-box-slider li').length - 1){
                j = -1; 
            }
            $('#front-box-slider li').eq(j).fadeOut(0);
            $('#front-box-slider li').eq(j).removeClass('active'); 
            
            j++;
            $('#front-box-slider li').eq(j).fadeIn(500, function() {
                $('#front-box-slider li').eq(j).addClass('active');
            });

            $('.main-header-slider-img > div').eq(i).removeClass('active');

            i++;
            if(i >= $('.main-header-slider-img > div').length){
                i = 0;
            }
            $('.main-header-slider-img > div').eq(i).addClass('active');
            
            //Slider count
            $('#slider-count').html("0" + (i + 1));
            $('#slider-size').html("0" + $('#front-box-slider li').length);

        },5000);
        }
    }

    {
        //Team section slider

        try {
            $('section.team-section .owl-carousel').owlCarousel({
                loop: true,
                margin: 15,
                responsiveClass: true,
                nav: false,
                autoplay:true,
                autoplayTimeout: 3500,
                autoplayHoverPause:true,
                loop: true,
                nav: false,
                responsive: {
                0: {
                   	items: 1
                },
                456:{
                	items: 1.5
                },
                576: {
                  	items: 2
                },
                756: {
                  	items: 2.5
                },
                856: {
                  	items: 3
                },
                976: {
                  	items: 3.5
                },
                1100:{
                	items: 4
                },
                1300:{
                	items: 4.2
                },
                1400:{
                	items: 4.5
                },
                1500:{
                	items: 5
                }
              }
            });
            $('section.team-section .owl-next').click(function() {
                $('section.team-section .owl-carousel').trigger('next.owl.carousel');
            })
            $('section.team-section .owl-prev').click(function() {
                $('section.team-section .owl-carousel').trigger('prev.owl.carousel');
            })
        } catch(e) {
            // statements
            console.log(e);
        }
	}
	{
		//Partners slider
		
		try {
            $('section.partners-section .owl-carousel').owlCarousel({
                loop: true,
                margin: 15,
                responsiveClass: true,
                nav: false,
                autoplay:true,
                autoplayTimeout: 4500,
                autoplayHoverPause:true,
                loop: true,
                nav: false,
                responsive: {
                0: {
                   	items: 2
                },
                456:{
                	items: 3
                },
                576: {
                  	items: 4
                },
                856: {
                  	items: 5
                },
                1100:{
                	items: 6
                },
                1500:{
                	items: 8
                }
              }
            });
        } catch(e) {
            // statements
            console.log(e);
        }
	}
	{
		//Feature slider
		try {
            $('section.feature-section .owl-carousel').owlCarousel({
                loop: true,
                margin: 15,
                nav: false,
                autoplay:true,
                autoplayTimeout: 3500,
                autoplayHoverPause:true,
                loop: true,
                nav: false,
                items: 1
            });
             $('section.feature-section  .owl-next').click(function() {
                $('section.feature-section .owl-carousel').trigger('next.owl.carousel');
            })
            $('section.feature-section  .owl-prev').click(function() {
                $('section.feature-section  .owl-carousel').trigger('prev.owl.carousel');
            })
        } catch(e) {
            // statements
            console.log(e);
        }
	}
	{
		//Mission box hover effect
		// $('.mission-box-parent:not(:first-child) .mission-box-child').hover(function() {
		// 		$('.mission-box-child').removeClass('mission-active');
		// })
	}
})




