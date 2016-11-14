define(function(require,exports,module){
	var helpObj = {
		init:function(){
			this.htmlFn(),
			this.newsFn(),
			this.scrollFn()
		},
		htmlFn:function(){
			var header = require('static/view/header');
			var footer = require('static/view/footer');

			$('.header').html( header );
			$('.footer').html( footer );
		},
		newsFn:function(){
			$(".content ul li b").click(function(e) {
				$(this).siblings('p').slideDown();
			});
			$(".content ul li p").click(function(e){
				$(this).slideUp();
			})
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

		    	scrollnumber("#helpUl",'fadeInDown1 animated',0);  
		    	scrollnumber('#helpTitle','fadeInDown1 animated',0);
		    	// scrollnumber('.goodness>.container .good1','fadeInDown1 animated',0);
		       // scrollnumber('.choice .c-block>.choice1','fadeInDown animated',0);
		   }  
		   scrollfun();  
		   $(window).scroll(function(){  
		   	scrollfun();  
		   }); 
		}


	}
	module.exports = helpObj;
})