$(document).ready(function(){
	
	$(".navbar a, footer a[href='#myPage']").on('click', function(event) { 		// przewijanie nawigacja
		if (this.hash !== "") {
		
			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({ 		// animate - klucz do przewijania
				scrollTop: $(hash).offset().top
			}, 
		
			900, function(){				//czas przewijania w milisekundach 
   
			window.location.hash = hash; //dodaj # do url
			});
		} 
	});
  
	$(window).scroll(function() {		//wejście od dołu
		$(".divslideanim").each(function(){ // każda klasa slideanim
			var pos = $(this).offset().top;

			var winTop = $(window).scrollTop();
			if (pos < winTop + 800) {
				$(this).addClass("divslide"); //dodaj klase slide
			}
		});
	});
  
	$('.carousel').carousel({
		interval: 5000
	})
	
})