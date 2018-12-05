(function() {
	


	$('a[href^="#"]').click(function() {
		elementClick = $(this).attr('href');
		destination  = $(elementClick).offset().top-50;
		$('html').animate({ scrollTop : destination}, 1000);
		if($(window).width() < 769) {
        $('.list').slideToggle(750); // При клике на пункт меню, меню закрывается
    	}
    	$('.not-active').toggleClass('active');
		return false;
	window.onload = function() {
		$('.css-loader').css({
			'display' : 'none'
		})
	}
	
	})

    $(window).resize(function() {
        var $width = $(window).width();
        if ($width > 769) { // Когда разрешение экрана больше чем 769
            $('.not-acitve').toggleClass('active');
            $('.list').slideDown(100);  // Тогда мы наше меню раскрываем
            $('.list').show(); // и показываем

        }
        if ($width < 769 && $width > 669) { // Когда экран меньше чем 769 тогда мы
                $('.list').hide();  // прячем наше меню(так надо)
                 $('.not-acitve').toggleClass('active');
                
                
         }
    });

    
 


    $('#btn-menu').click(function() {
  
        $('.list').slideToggle(750);
        $('.not-active').toggleClass('active');
    });
    $(window).scroll(function() {  // При скроле
    	let st = $(window).scrollTop(); // в переменную st помещается расположение окна
   
    	$('.company').css({
    		'transform' : 'translate(0%, ' + -st/5 + '%)'  // паралакс блока компании(заголовок+абаут)
    	})
    	$('.preview').css({
    		'filter' : 'blur(' + st/400 +'px)' // блюрит фон preview
    	})
    
    	if(st < 50) { // если положение окна больше чем 50 ( то есть мы чуть чуть опустились)
    		$('header').addClass('scrolling'); // Класс scrolling нужен для анимции в css что бы меняемое ниже свойство css протикало не резко а с анимацией
    		$('header').css({ 
    			'background' : 'rgba(0,0,0,.0)' // rgba - red green blue alpha()

    		})
    		$('.navigation').css('color','white'); // так же ставим цвет на меню черный ( так как рамка черная пропала)
    		
    
    	}
    	else {
    		$('header').css({
    			'background' : 'rgba(0,0,0,1)' // Если мы на самом верху странице то опять рамка появляеться

    		})
    		$('.navigation').css('color','white'); // Цвет тогда опять становиться белый так как на фоне черной рамки
    		$('header').removeClass('scrolling'); // мы опять делаем махинации с классом scrolling для свойства transition
   
    	}
    	
    	
 

    })
})();





