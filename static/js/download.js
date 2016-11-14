define( function(require,exports,module){
	var downloadObj = {
		init:function(){
			this.htmlFn();
			this.scrollFn()

		},
		htmlFn:function(){
			var header = require('static/view/header');
			var footer = require('static/view/footer');

			$('header').html( header );
			$('footer').html( footer );
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

		    	scrollnumber("#dlHeaderTitle",'fadeInDown1 animated',0);  
		    	scrollnumber("#dlHeaderImg",'fadeInUp animated',0);  
		    	scrollnumber('#dlContentUl','fadeInDown1 animated',0);
		    	// scrollnumber('.goodness>.container .good1','fadeInDown1 animated',0);
		       // scrollnumber('.choice .c-block>.choice1','fadeInDown animated',0);
		   }  
		   scrollfun();  
		   $(window).scroll(function(){  
		   	scrollfun();  
		   }); 
		}

	}
	module.exports = downloadObj;
})