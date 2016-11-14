//  此文件只处理轮播图
define(function( require,exports,module){
	var slideImg = {
		init:function(){
			$img = $('#banner>.page');
			$pointer = $('#banner>p span');
			var curIndex = 0;
			var timer = setInterval( function(){
				$img.eq(curIndex).stop(true, true).fadeIn().siblings('.page').stop(true,true).fadeOut();
				$pointer.eq(curIndex).addClass('active').siblings('span').removeClass('active');
				curIndex++;
				if( curIndex == 4){
					curIndex = 0;
				}

			},2500);
			$pointer.on('click',function(e){
				clearInterval(timer);
				curIndex =  $(this).index();
				$img.eq(curIndex).stop(true, true).fadeIn().siblings('.page').stop(true,true).fadeOut();
				$pointer.eq(curIndex).addClass('active').siblings('span').removeClass('active');
				timer = setInterval( function(){
					$img.eq(curIndex).stop(true, true).fadeIn().siblings('.page').stop(true,true).fadeOut();
					$pointer.eq(curIndex).addClass('active').siblings('span').removeClass('active');
					curIndex++;
					if( curIndex == 4){
						curIndex = 0;
					}
				},2500);
			});
		}
	}
	module.exports = slideImg;

})