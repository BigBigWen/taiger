define( function( require,exports,module){
	var slideImg2 = require('./slideImg.js');
	var indexJs = {
		init:function(){
			this.htmlFn();
			slideImg2.init();
			this.nav();
		    this.map();
		    this.people();
		    this.scrollFn();
		    
		},
		htmlFn:function(){
			var header = require('view/header');
			var footer = require('view/footer');
			$(".header").html( header );
			$(".footer").html( footer );
		},
		nav:function(){
			//nav 特效
			$(".chioceLanguage").hover(function(){
				$(this).css({display:"block"});
			},function(){
				$(this).slideUp();
			})
			$('header>.container ul li a.language').hover(function() {
				$('header>.container ul li.chioceLanguage').slideDown();
			});
		},
		map:function(){
			//map 特效
			var indicatorIndex = 0;
			var timerMap = setInterval(showPlace,2000);
			function showPlace(){
				$('.map>.container>.indicator').eq(indicatorIndex).fadeIn().siblings('div').fadeOut();
				indicatorIndex++;
				if (indicatorIndex == 3) {
					indicatorIndex = 0;
				}
			};
		},
		people:function(){
			var ulLeft = 242;
			$('.people .left').click(function() {
				$('.people>.p-show>ul').animate({
					'left': '14px'});
			});
			$('.people .right').click(function(){
				$('.people>.p-show>ul').animate({
					'left':-ulLeft+'px'
				})
			});
		},
		scrollFn:function(){
		    // 触发动画
		    function scrollnumber(element,cssname,offset){  
		    	var a,b,c,d;  
		    	d=$(element).offset().top;  
		    	a=eval(d + offset);  
		    	b=$(window).scrollTop();   
		    	c=$(window).height();  
		    	if(b+c>a){  
		    		$((element)).addClass((cssname));  
		    	}  
		    }  
		    function scrollfun(){  
		    	scrollnumber("#bigphone",'fadeInDown1 animated',0);  
		    	scrollnumber('#mapText','fadeInDown1 animated',0);
		    	scrollnumber('.goodness>.container .good1','fadeInDown1 animated',0);
		       // scrollnumber('.choice .c-block>.choice1','fadeInDown animated',0);
		   }  
		   scrollfun();  
		   $(window).scroll(function(){  
		   	scrollfun();  
		   }); 
		}
	}
	module.exports = indexJs;
})