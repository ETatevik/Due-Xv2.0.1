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
            if(j == $('#front-box-slider li').length - 1){
				j = -1;
				
                $('#front-box-slider li').eq(j).removeClass('active');
            }
            $('#front-box-slider li').eq(j).removeClass('active');
			j++;
			
            $('#front-box-slider li').eq(j).addClass('active');

            i++;
            if(i >= sliderImgages.length){
                i = 0;
            }
            $('header.main-header-top').css({
                backgroundImage: `url(img/${sliderImgages[i]})`
            });

			
            


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

        // $(window).resize(function() {
		// 	if ($(window).width() > 995) {
		// 		$('.container').children('.our-stuff').css({
		// 			width: `${4 * $('.stuff-box').width()}px`
		// 		});
		// 	}
		// 	else if ($(window).width() <= 995 && $(window).width() > 500) {
		// 		$('.container').children('.our-stuff').css({
		// 			width: `${2 * $('.stuff-box').width()}px`
		// 		});
		// 	}
		// 	else {
		// 		$('.container').children('.our-stuff').css({
		// 			width: `${$('.stuff-box').width()}px`
		// 		});
		// 	} 
        // });
		{
			let start;
            let left = 0;
            
			if ($(window).width() > 995) {
				start = 4 * $('.stuff-box').width();
            }
            else if ($(window).width() <= 995 && $(window).width() > 500){
				start = 2 * $('.stuff-box').width();
            }
            else {
				start = $('.stuff-box').width();
			}

			$('.team-arrow-next').click(function(event) {

				if ($(window).width() > 995){
					start += $('.stuff-box').width();

					if (start > $('.stuff-container').width()){
						left = 0;
						start = 4 * $('.stuff-box').width();
                    }
                    else {
						left += $('.stuff-box').width();
					}
					
					$('.stuff-container').css('left', `${-left}px`);
				}
				else if ($(window).width() <= 995 && $(window).width() > 500){
					start += $('.stuff-box').width();

					if (start > $('.stuff-container').width()){
						left = 0;
						start = 2 * $('.stuff-box').width();
                    }
                    else{
						left += $('.stuff-box').width();
					}
					
					$('.stuff-container').css('left', `${-left}px`);
                }
                else {
					start += $('.stuff-box').width();

					if (start > $('.stuff-container').width()){
						left = 0;
						start = $('.stuff-box').width();
                    }
                    else {
						left += $('.stuff-box').width();
					}
					
					$('.stuff-container').css('left', `${-left}px`);
				}
				
			});
			

			$('.team-arrow-perv').click(function(event) {
				if ($(window).width() > 995){
					start += $('.stuff-box').width();

					if (left == 0){
						left = $('.stuff-container').width() - 4 * $('.stuff-box').width();
						start = $('.our-stuff').width();
                    }
                    else {
						left  -= $('.stuff-box').width();
					}
					$('.stuff-container').css('left', `${-left}px`);
                }
                else if ($(window).width() <= 995 && $(window).width() > 500){
					start += $('.stuff-box').width();

					if (left == 0){
						left = $('.stuff-container').width() - 2 * $('.stuff-box').width();
						start = $('.our-stuff').width();
                    }
                    else {
						left  -= $('.stuff-box').width();
					}
					$('.stuff-container').css('left', `${-left}px`);
                }
                else {
					start += $('.stuff-box').width();
					if (left == 0){
						left = $('.stuff-container').width() - $('.stuff-box').width();
						start = $('.our-stuff').width();
                    }
                    else {
						left  -= $('.stuff-box').width();
					}
					$('.stuff-container').css('left', `${-left}px`);
				}
				
			});

			
		}
	}
	{
		//Partners slider
		$('.partners-logo-container').slick({
			slidesToShow: 6,
			slidesToScroll: 1,
			arrows: false,
			dots: false,
				pauseOnHover: false,
				responsive: [{
				breakpoint: 768,
				settings: {
					slidesToShow: 4
				}
			}, {
				breakpoint: 520,
				settings: {
					slidesToShow: 3
				}
			}]
		});
	}
	{
		//Feature slider
		$('.feature-slider').slick({
			arrows: false,
			autoplay: true,
			autoplaySpeed: 3000,
		});

		$('.feature-button-container button:nth-child(1)').click(function(){
			$('.feature-slider').slick('slickPrev');
		})
		  
		$('.feature-button-container button:nth-child(2)').click(function(){
			$('.feature-slider').slick('slickNext');
		})
	}
	{
		//Mission box hover effect
		$('.mission-box-parent:not(:first-child) .mission-box-child').hover(function() {
				$('.mission-box-child').removeClass('mission-active');
		})
	}
})




