// 入口函数
$(function(){
	// 轮播图
	/*
		1、无缝滚动
		2、点对应该改变
		3、手势切换
	*/
	// 获取需要操作的元素
	// 大容器

	var $banner = $('.sn_banner');
	var width = $banner.width();
	// 图片容器
	var $image = $banner.find('ul:first');
	// 点盒子
	var $point = $banner.find('ul:eq(1)');
	// 所有的点
	var $points = $point.find('li');

	var animateFuc = function(){
		//4个参数 需要改变动画的属性（对象）	动画执行的时间	动画执行的速度	动画执行完成回调
		$image.animate({'transform': 'translateX('+ (-index*width) +'px)'}, 200, 'linear', function(){
			if(index >= 9)
			{
				index = 1;
				$image.css({'transform': 'translateX('+ (-index*width) +'px)'});
			}else if( index <= 0)
			{
				index = 8;
				$image.css({'transform': 'translateX('+ (-index*width) +'px)'});	
			}

			// 正常 index 1-8
			// 2、点对应该改变
			$points.removeClass('now').eq(index-1).addClass('now');

		});
	}
	
	// 1、无缝滚动
	var index = 1; // 索引
	var timer = setInterval(function(){
		
		index ++;
		// 动画的转起来
		animateFuc();
	}, 5000);

	// 3、手势切换
	// 上一张
	$image.on('swipeRight', function(){
		index--;
		animateFuc();
	});
	// 下一张
	$image.on('swipeRight', function(){
		index++;
		animateFuc();
	});

});