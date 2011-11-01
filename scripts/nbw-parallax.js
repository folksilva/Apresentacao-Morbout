function navto(slide){
	//$(window).scrollTop($("#"+slide).position().top);
	$('html,body').animate({scrollTop: $("#"+slide).position().top}, 1000);
}



$(document).ready(function() { //when the document is ready...


	//save selectors as variables to increase performance
	var $window = $(window);
	
	var slides = ['intro','about-us','morbout','cloud','crowd','porque','consumidores','empresas','infraestrutura','fluxo','provisoes','perguntas'];
	
	var $intro = $('#intro');
		var logo = $('#intro .logo');
		var txtUni = $('#intro .txt-uni');
	
	var $aboutUs = $('#about-us');
		var nome1 = $('#nome1');
		var nome2 = $('#nome2');
		var nome3 = $('#nome3');
		var nome4 = $('#nome4');
		var nome5 = $('#nome5');
		var nome6 = $('#nome6');
	
	var $morbout = $('#morbout');
		var morboutCloud1 = $("#morbout .cloud1");
		var morboutCloud2 = $("#morbout .cloud2");
		var morboutCloud3 = $("#morbout .cloud3");
		var morboutCloud4 = $("#morbout .cloud4");
	
	var $cloud = $('#cloud');
		var cloudBase = $('#cloud .base');
		var documents = $('#cloud .documents');
		var photos = $('#cloud .photos');
		var friends = $('#cloud .friends');
		var movies = $('#cloud .movies');
	
	var $crowd = $('#crowd');
		var tip = $('#crowd .tip');
	
	var $porque = $('#porque');
		var balloon1 = $('#porque .balloon1');
		var balloon2 = $('#porque .balloon2');
		var balloon3 = $('#porque .balloon3');
		var balloon4 = $('#porque .balloon4');
	
	var $consumidores = $('#consumidores');
		var consBalloon1 = $('#consumidores .balloon1');
		var consBalloon2 = $('#consumidores .balloon2');
		var consBalloon3 = $('#consumidores .balloon3');
	
	var $empresas = $('#empresas');
		var emprBalloon1 = $('#empresas .balloon1');
		var emprBalloon2 = $('#empresas .balloon2');
		var emprBalloon3 = $('#empresas .balloon3');
	
	var $infraestrutura = $('#infraestrutura');
		var diagram = $('#infraestrutura .diagram');
	
	var $fluxo = $('#fluxo');
		var globe = $('#fluxo .globe');
		var google = $('#fluxo .google');
	
	var $provisoes = $('#provisoes');
		var graph = $('#provisoes .graph');
		var tip1 = $('#provisoes .tip-1');
		var tip2 = $('#provisoes .tip-2');
		var tip3 = $('#provisoes .tip-3');
	
	var $perguntas = $('#perguntas');
		var bottom = $('#perguntas .bottom');
		var txtUni2 = $('#perguntas .txt-uni');
	
	var windowHeight = $window.height(); //get the height of the window
	var windowWidth = $window.width(); //get the width of the window
	
	var currentSlide = 0;
	
	$(window).keydown(function(e){
		switch(e.keyCode){
			case 13:
			case 32:
			case 39:
			case 40:
			case 34:
				e.preventDefault();
				currentSlide++;
				if(currentSlide==slides.length) currentSlide = 0;
				navto(slides[currentSlide]);
				break;
			case 8:
			case 37:
			case 38:
			case 33:
				e.preventDefault();
				currentSlide--;
				if(currentSlide<0) currentSlide = slides.length-1;
				navto(slides[currentSlide]);
				break;
			case 36:
				e.preventDefault();
				currentSlide = 0;
				navto(slides[currentSlide]);
				break;
			case 35:
				e.preventDefault();
				currentSlide = slides.length-1;
				navto(slides[currentSlide]);
				break;
		}
	});
	
	//apply the class "inview" to a section that is in the viewport
	$('#intro, #about-us, #morbout, #cloud, #crowd, #porque, #consumidores, #empresas, #infraestrutura, #fluxo, #provisoes, #perguntas').bind('inview', function (event, visible) {
			if (visible == true) {
				$(this).addClass("inview");
				var id = $(this).attr("id");
				var idx = 0;
				for(var i = 0; i < slides.length; i++){
					if(slides[i]==id){ idx = i; break;}
				}
				currentSlide = idx;
			} else {
				$(this).removeClass("inview");
			}
		});
	
			
	//function that places the navigation in the center of the window
	function RepositionNav(){
		windowHeight = $window.height(); //get the height of the window
		windowWidth = $window.width(); //get the width of the window
		//var navHeight = $('#nav').height() / 2;
		var navHeight = $('#nav').height();
		//var windowCenter = (windowHeight / 2); 
		var newtop = windowHeight - navHeight;
		//$('#nav').css({"top": newtop}); //set the new top position of the navigation list
	}
	
	//function that is called for every pixel the user scrolls. Determines the position of the background
	/*arguments: 
		x = horizontal position of background
		windowHeight = height of the viewport
		pos = position of the scrollbar
		adjuster = adjust the position of the background
		inertia = how fast the background moves in relation to scrolling
	*/
	function newPos(x, windowHeight, pos, adjuster, inertia){
		return x + "% " + (-((windowHeight + pos) - adjuster) * inertia)  + "px";
	}
	
	//function to be called whenever the window is scrolled or resized
	function Move(){ 
		var pos = $window.scrollTop(); //position of the scrollbar
		$("#nav").removeClass("contrast-first");
		
		if($intro.hasClass("inview")){
			$intro.css({'backgroundPosition': newPos(50, windowHeight, pos, -windowHeight, 0.05)});
			logo.css({'backgroundPosition': newPos(50,windowHeight,pos, windowHeight+(windowHeight*2), 0.1)});
			txtUni.css({'marginTop': windowHeight-(pos/1000)-50});
			$("#nav li").removeClass("li-active");
			$("#nav").removeClass("contrast-light").removeClass("contrast-dark").addClass("contrast-first");
		}
		
		if($aboutUs.hasClass("inview")){
			$aboutUs.css({'backgroundPosition': newPos(50, windowHeight, pos, 720, 0.1)});
			nome1.css({'marginTop':(((windowHeight - pos) + 100) * -0.4)});
			$("#nav li").removeClass("li-active");
			$("#li-about-us").addClass("li-active");
			$("#nav").removeClass("contrast-first").removeClass("contrast-dark").addClass("contrast-light");
			
		}
		
		if($morbout.hasClass("inview")){
			$morbout.css({'backgroundPosition': newPos(50, windowHeight, pos, 720, 0.1)});
			morboutCloud1.css({'backgroundPosition': newPos(50, windowHeight, pos, 1000, 0.2)});
			morboutCloud2.css({'backgroundPosition': newPos(3, windowHeight, pos, 2500, 0.05)});
			morboutCloud3.css({'backgroundPosition': newPos(98, windowHeight, pos, 3000, 0.1)});
			morboutCloud4.css({'backgroundPosition': newPos(80, windowHeight, pos, 3300, 0.5)});
			$("#nav li").removeClass("li-active");
			$("#li-morbout").addClass("li-active");
			$("#nav").removeClass("contrast-first").removeClass("contrast-dark").addClass("contrast-light");
		}
	
		if($cloud.hasClass("inview")){
			$cloud.css({'backgroundPosition': newPos(45, windowHeight, pos, 720, 0.1)});
			cloudBase.css({'backgroundPosition': newPos(80, windowHeight, pos, 3800, 0.6)});
			documents.css({'backgroundPosition': newPos(23, windowHeight, pos, 5000, 0.1)});
			photos.css({'backgroundPosition': newPos(32, windowHeight, pos, 5000, 0.3)});
			friends.css({'backgroundPosition': newPos(98, windowHeight, pos, 4000, 0.8)});
			movies.css({'backgroundPosition': newPos(60, windowHeight, pos, 4700, 0.5)});
			$("#nav li").removeClass("li-active");
			$("#li-cloud").addClass("li-active");
			$("#nav").removeClass("contrast-first").removeClass("contrast-dark").addClass("contrast-light");
		}
	
		if($crowd.hasClass("inview")){
			$crowd.css({'backgroundPosition': newPos(50, windowHeight, pos, 4000, 0.1)});
			tip.css({'backgroundPosition': newPos(80, windowHeight, pos, 5500, 0.3)});
			$("#nav li").removeClass("li-active");
			$("#li-crowd").addClass("li-active");
			$("#nav").removeClass("contrast-first").removeClass("contrast-dark").addClass("contrast-light");
		}
	
		if($porque.hasClass("inview")){
			$porque.css({'backgroundPosition': newPos(50, windowHeight, pos, 720, 0.1)});
			balloon1.css({'backgroundPosition': newPos(5, windowHeight, pos, 6200, 0.3)});
			balloon2.css({'backgroundPosition': newPos(50, windowHeight, pos, 5800, 0.2)});
			balloon3.css({'backgroundPosition': newPos(95, windowHeight, pos, 5900, 0.5)});
			balloon4.css({'backgroundPosition': newPos(70, windowHeight, pos, 6700, 0.4)});
			$("#nav li").removeClass("li-active");
			$("#li-porque").addClass("li-active");
			$("#nav").removeClass("contrast-first").removeClass("contrast-dark").addClass("contrast-light");
		}
	
		if($consumidores.hasClass("inview")){
			$consumidores.css({'backgroundPosition': newPos(70, windowHeight, pos, 7000, 0.1)});
			consBalloon1.css({'backgroundPosition': newPos(10, windowHeight, pos, 6760, 0.3)});
			consBalloon2.css({'backgroundPosition': newPos(95, windowHeight, pos, 6770, 0.6)});
			consBalloon3.css({'backgroundPosition': newPos(92, windowHeight, pos, 7300, 0.8)});
			$("#nav li").removeClass("li-active");
			$("#li-consumidores").addClass("li-active");
			$("#nav").removeClass("contrast-first").removeClass("contrast-dark").addClass("contrast-light");
		}
	
		if($empresas.hasClass("inview")){
			$empresas.css({'backgroundPosition': newPos(70, windowHeight, pos, 7000, 0.1)});
			emprBalloon1.css({'backgroundPosition': newPos(5, windowHeight, pos, 7800, 0.3)});
			emprBalloon2.css({'backgroundPosition': newPos(95, windowHeight, pos, 7900, 0.6)});
			emprBalloon3.css({'backgroundPosition': newPos(50, windowHeight, pos, 8400, 0.8)});
			$("#nav li").removeClass("li-active");
			$("#li-empresas").addClass("li-active");
			$("#nav").removeClass("contrast-first").removeClass("contrast-dark").addClass("contrast-light");
		}
	
		if($infraestrutura.hasClass("inview")){
			$infraestrutura.css({'backgroundPosition': newPos(50, windowHeight, pos, 8600, 0.1)});
			diagram.css({'backgroundPosition': newPos(95, windowHeight, pos, 9000, 0.6)});
			$("#nav li").removeClass("li-active");
			$("#li-infraestrutura").addClass("li-active");
			$("#nav").removeClass("contrast-first").removeClass("contrast-dark").addClass("contrast-light");
		}
	
		if($fluxo.hasClass("inview")){
			$fluxo.css({'backgroundPosition': newPos(50, windowHeight, pos, 8600, 0.1)});
			globe.css({'backgroundPosition': newPos(85, windowHeight, pos, 10000, 0.3)});
			google.css({'backgroundPosition': newPos(95, windowHeight, pos, 10400, 0.8)});
			$("#nav li").removeClass("li-active");
			$("#li-fluxo").addClass("li-active");
			$("#nav").removeClass("contrast-first").removeClass("contrast-dark").addClass("contrast-light");
		}
	
		if($provisoes.hasClass("inview")){
			$provisoes.css({'backgroundPosition': newPos(50, windowHeight, pos, 8600, 0.1)});
			graph.css({'backgroundPosition': newPos(70, windowHeight, pos, 11800, 0.3)});
			tip1.css({'backgroundPosition': newPos(40, windowHeight, pos, 11400, 0.2)});
			tip2.css({'backgroundPosition': newPos(65, windowHeight, pos, 11800, 0.5)});
			tip3.css({'backgroundPosition': newPos(80, windowHeight, pos, 11100, 0.4)});
			$("#nav li").removeClass("li-active");
			$("#li-provisoes").addClass("li-active");
			$("#nav").removeClass("contrast-first").removeClass("contrast-dark").addClass("contrast-light");
		}
	
		if($perguntas.hasClass("inview")){
			$perguntas.css({'backgroundPosition': newPos(50, windowHeight, pos, 11000, 0.1)});
			bottom.css({'backgroundPosition': newPos(5, windowHeight, pos, 11800, 0.5)});
			txtUni2.css({'marginTop': windowHeight-(pos/1000)-50});
			$("#nav li").removeClass("li-active");
			$("#li-perguntas").addClass("li-active");
			$("#nav").removeClass("contrast-first").removeClass("contrast-light").addClass("contrast-dark");
		}

	}
		
	RepositionNav(); //Reposition the Navigation to center it in the window when the script loads
	
	$window.resize(function(){ //if the user resizes the window...
		Move(); //move the background images in relation to the movement of the scrollbar
		RepositionNav(); //reposition the navigation list so it remains vertically central
	});		
	
	$window.bind('scroll', function(){ //when the user is scrolling...
		Move(); //move the background images in relation to the movement of the scrollbar
	});
	
	var bgPos = 0;
	var bgCount = 0;
	var slidesDesc = [
		"Catálogo de uma empresa",
		"Página de um produto",
		"Lista de um consumidor",
		"Página pessoal de um consumidor"
	];
	function moveSlide(){
		bgPos = bgPos < -2403 ? bgPos = 0 : bgPos;
		bgCount = bgCount > 3 ? 0 : bgCount;
		$("#perguntas .slide .picture").css("backgroundPosition",bgPos + "px 0px");
		$("#perguntas .slide .picture").html("<div class='slideDesc'>" + slidesDesc[bgCount] + "</div>");
		bgPos -= 601;
		bgCount++;
	}
	moveSlide();
	setInterval(moveSlide,5*1000);
	
});
