
//При ширине экрана <500px показывает расписание соответствующей школы

//Показать расписание "Школа разработки интерфейсов"
showColDevelpInterface = function (){
		$('.dev').css("display","table");
		$('.mob-dev').css("display","none");
		$('.mob-des').css("display","none");
		$('.empty').css("display","none");
}
//Показать расписание "Школа мобильной разработки"
showColMobDevelp = function (){
		$('.dev').css("display","none");
		$('.mob-dev').css("display","table");
		$('.mob-des').css("display","none");
		$('.empty').css("display","none");
}
//Показать расписание "Школа мобильного дизайна"
showColMobDesign = function (){
		$('.dev').css("display","none");
		$('.mob-dev').css("display","none");
		$('.mob-des').css("display","table");
		$('.empty').css("display","none");
}

$(document).ready(function() {

	// $('.portfolio-slider').slick({
	// 	centerMode: true,
	// 	centerPadding: '60px',
	// 	slidesToShow: 2,
	// 	responsive: [
	// 		{
	// 			breakpoint: 768,
	// 			settings: {
	// 				arrows: false,
	// 				centerMode: true,
	// 				centerPadding: '40px',
	// 				slidesToShow: 3
	//   			}
	// 		},
	// 		{
	// 			breakpoint: 480,
	// 			settings: {
	// 				arrows: false,
	// 				centerMode: true,
	// 				centerPadding: '40px',
	// 				slidesToShow: 1
	//   			}
	// 		}
 //  		]
	// });

	$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});

	//Скролл до выбранного элемента при клике в шапке страницы
	$('.scrollTo-about').click(function(){
		$("html, body").animate({ scrollTop: $('#about').offset().top-141}, 1000);
		$('#popup-menu-toggle').prop("checked", false);
	});

	$('.scrollTo-service').click(function(){
		$("html, body").animate({ scrollTop: $('#service').offset().top-141}, 1000);
		$('#popup-menu-toggle').prop("checked", false);
	});

	$('.scrollTo-price').click(function(){
		$("html, body").animate({ scrollTop: $('#price').offset().top-141}, 1000);
		$('#popup-menu-toggle').prop("checked", false);
	});

	$('.scrollTo-portfolio').click(function(){
		$("html, body").animate({ scrollTop: $('#portfolio').offset().top-141}, 1000);
		$('#popup-menu-toggle').prop("checked", false);
	});

	//При ширине экрана <500px, при клике в списке школ на элемент, показать соответствующюю школу
	$('.schools-list .develp-intreface').click(function(){
		showColDevelpInterface();
		$('#schools-list-toggle').prop("checked", false);
	});

	$('.schools-list .mob-develp').click(function(){
		showColMobDevelp();
		$('#schools-list-toggle').prop("checked", false);
	});

	$('.schools-list .mob-design').click(function(){
		showColMobDesign();
		$('#schools-list-toggle').prop("checked", false);
	});

	//___________media запросы___________
	$(window).resize(function(){
		var windowwidth = $(window).width();

		if(windowwidth>500){

			//скрыть меню списка школ при экране в >500px
			$('#schools-list-toggle').prop("checked", false);

			$('.dev').css("display","");
			$('.mob-dev').css("display","");
			$('.mob-des').css("display","");
			$('.empty').css("display","");
		}
	//При выборе расписания школы, при ресайзе сначала >500px потом обратно <500px, показывать расписание выбранной школы
		else{
			if($('#develp-intreface').is(':checked')==true){
				showColDevelpInterface();
			}
			if($('#mob-develp').is(':checked')==true){
				showColMobDevelp();
			}
			if($('#mob-design').is(':checked')==true){
				showColMobDesign();
			}
		}
	});
});

