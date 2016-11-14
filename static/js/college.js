define( function( require,exports,module){
	var collegeObj = {
		init:function(){
			this.htmlFn();
		},
		htmlFn:function(){
            var header = require('static/view/header');
            var footer = require('static/view/footer');

           

            $('.header').html( header );
            $('.footer').html( footer );
		}

	}
	module.exports = collegeObj;
})