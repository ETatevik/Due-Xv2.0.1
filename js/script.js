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
        let sliderImgages = [
            "1.png",
            "2.jpg",
            "3.jpg",
            "4.jpg",
        ];

        let i = 0, j = 0;

        setInterval( function() {
        	$('header.main-header-top').removeClass('moveIn');
            if(j == $('#front-box-slider li').length - 1){
				j = -1;
				
                $('#front-box-slider li').eq(j).removeClass('active');
            }
            $('#front-box-slider li').eq(j).removeClass('active');
			j++;
			
            $('#front-box-slider li').eq(j).addClass('active');

            $('header.main-header-top').addClass('move');
            i++;
            if(i >= sliderImgages.length){
                i = 0;
            }
            setTimeout(()=>{
            	$('header.main-header-top').removeClass('move').addClass('moveIn');
            	$('header.main-header-top').css({
	                backgroundImage: `url(img/${sliderImgages[i]})`
	            });
            }, 50);

			//Header slider buttons click
			$('#arrow-next').on('click', function () {
				i += 1;

				if(i >= sliderImgages.length){
					i = 0;
				}
                $('header.main-header-top').css({
					backgroundImage: `url(img/${sliderImgages[i]})`
				});
			});

            $('#arrow-prev').on('click', function () {
				if(i !== 0){
					i -= 1;
				}
				else {
					i = sliderImgages.length - 1;
				}

                $('header.main-header-top').css({
					backgroundImage: `url(img/${sliderImgages[i]})`
				});
			});
		
			
			//Slider count
            $('#slider-count').html("0" + (i + 1));
            $('#slider-size').html("0" + $('#front-box-slider li').length);

        },5000);
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




