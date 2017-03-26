define( function( require,exports,module){
	var signupObj = {
		init:function(){
			this.htmlFn();
		},
		htmlFn:function(){
            var header = require('view/header');
            var footer = require('view/footer');
            $('.header').html( header );
            $('.footer').html( footer );
		}

	}
	module.exports = signupObj;
})