$(document).click(function () {

       $('.navbar-collapse').collapse('hide');
    
  });
$("#navbar a , #roadlink").click(function() {
link = $(this).attr("href");

$("html, body").animate({ scrollTop: $(link).offset().top - 100}, 1000);
 });
$(document).ready(function(){
    $('.nftcard').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
				slidesToScroll: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 2,
				slidesToScroll: 2
            }
        }]
    });
});






$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
$("#navbar a").click(function() {
link = $(this).attr("href");

$("html, body").animate({ scrollTop: $(link).offset().top - 100}, 1000);
 });


$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 30) {
        $('.menugr').addClass('lacivert');
    } else {
        $('.menugr').removeClass('lacivert');
	
    }
});
    var swiper = new Swiper('.minislide .swiper-container', {
 centeredSlides: false,
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },autoplay: {
    delay: 5000,
  }
    });



var scroll = window.requestAnimationFrame ||
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 


function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){

      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
        element.classList.add('animate__zoomIn');
	
      } else {
        element.classList.remove('is-visible');
        element.classList.remove('animate__zoomIn');
      }
    });

    scroll(loop);
}


loop();



function isElementInViewport(el) {

  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

(function($) {
	'use strict';
	
	jQuery(document).on('ready', function(){
	
			$('a.page-scroll').on('click', function(e){
				var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 50
				}, 1500);
				e.preventDefault();
			});		

	}); 	

				
})(jQuery);

var dataset = [
        { name: 'Pre Sale', count: 3300 },
        { name: 'Pancake', count: 2600 },
        { name: 'Private Sale', count: 1000 },
        { name: 'CEX Liq', count: 900 },
        { name: 'Marketing', count: 600 },
        { name: 'Project', count: 500 },
        { name: 'Partnership', count: 500 },
        { name: 'Team', count: 400 },
        { name: 'Sub-Team', count: 200 }
    ];

    var total=0;

    dataset.forEach(function(d){
        total+= d.count;
    });

    var pie=d3.layout.pie()
            .value(function(d){return d.count})
            .sort(null);
	var genislik = screen.width;

	if(genislik<420) {
    var w=300,h=300;
	} else if (genislik<360) { 
	var w=150,h=150;
	} else {
	var w=400,h=400;
	}

    var outerRadiusArc=w/2;
    var innerRadiusArc=100;
    var shadowWidth=20;

    var outerRadiusArcShadow=innerRadiusArc+1;
    var innerRadiusArcShadow=innerRadiusArc-shadowWidth;

    var color = d3.scale.ordinal()
     .range(['#6c47ff', '#f72585', '#ffbe0b', '#fb5607', '#7209b7','#a8fc17','#00bbf9','#dad873','#00fddc']);

    var svg=d3.select("#chart")
            .append("svg")
            .attr({
                width:w,
                height:h,
                class:'shadow'
            }).append('g')
            .attr({
                transform:'translate('+w/2+','+h/2+')'
            });


    var createChart=function(svg,outerRadius,innerRadius,fillFunction,className){

        var arc=d3.svg.arc()
                .innerRadius(outerRadius)
                .outerRadius(innerRadius);

        var path=svg.selectAll('.'+className)
                .data(pie(dataset))
                .enter()
                .append('path')
                .attr({
                    class:className,
                    d:arc,
                    fill:fillFunction
                });

        path.transition()
                .duration(1000)
                .attrTween('d', function(d) {
                    var interpolate = d3.interpolate({startAngle: 0, endAngle: 0}, d);
                    return function(t) {
                        return arc(interpolate(t));
                    };
                });
    };

    createChart(svg,outerRadiusArc,innerRadiusArc,function(d,i){
        return color(d.data.name);
    },'path1');

    createChart(svg,outerRadiusArcShadow,innerRadiusArcShadow,function(d,i){
        var c=d3.hsl(color(d.data.name));
        return d3.hsl((c.h+5), (c.s -.07), (c.l -.15));
    },'path2');






    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }