$(function () {
    /* Banners */
    $('.banners').each(function(index,element){
            var delay = 7 * 1000;
            var curIndex = 0;
            var container = $(this);
            var banners = container.find('.banner');
            if (banners.length == 0){ return; }
            container.removeClass('empty');
            
			banners.each(function(index,element){
				var img = $('img', this).hide();
				$(this).css('background-image','url(' + img.attr('src') + ')');
            });
			
            if (banners.length == 1){ return; /* Skip nav and slide features if only one slide */ }
            
            banners.hide();
            
            var nav = ['<div class="nav"><div class="content">'];
            banners.each(function(index,element){
                    nav.push('<a href="#">'+ index +'</a>');
            });
            nav.push('</div></div>');
            container.append(nav.join(''));
            
            var links = $('.nav a', container);
            container.on('click','.nav a', function(e){
				e.preventDefault();
				curIndex = links.index(this);
				changeSlide();
				start();
            });
            
            var interval = null; 
            
            function start(){
                    window.clearInterval(interval);
                    interval = window.setInterval(function(){
                            curIndex++;
                            if (curIndex >= links.length){ curIndex = 0; }
                            changeSlide();
                    }, delay);
            }
            
            
            
            changeSlide();
            start();
            
            function changeSlide(){
                    banners.fadeOut().eq(curIndex).fadeIn();
                    links.removeClass('active').eq(curIndex).addClass('active');			
            }
            
    });
	
	$('.countdown').each(function(index, element) {
		var container = $(this);
		var date = container.attr('data-date');
		container.find('.time').countdown(date, function(e){
			//$(this).html(e.strftime('%D : %H : %M : %S'));
			$(this).html(e.strftime('<span class="days">%D</span>:<span class="hours">%H</span>:<span class="minutes">%M</span>'));
		});
		container.find('.title').each(function(index, element) {
			var html = $(this).html();
            $(this).html(date.split('/')[0] +' '+ html);
        });
		container.on('click', function(e){ e.preventDefault(); $(this).toggleClass('open'); });
	});
	
	
	
	$('.partners').slick({
		centerMode: true,
		variableWidth: true,
		centerPadding: '60px',
		slidesToShow: 3
	});

});