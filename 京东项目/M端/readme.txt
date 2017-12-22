移动端为什么最好不使用jquery 
	a、jquery体积大
	b、jquery做了大量的兼容，实现效率就会减慢， 没有必要，移动端都是高版本浏览器

1、搜索效果

2、touch事件
	touch事件：移动端特有的事件，触屏设备特有的事件（ios和android，windows没有）
	touchstart：手指刚刚触摸到屏幕的时候，触发的事件
	touchmove：手指在屏幕上，滑动的时候，会不停的触发
	touchend：手指离开屏幕的时候，触发的事件
	touchcancel：被迫终止（来电）滑动 触发的事件

	Event对象中
	changedTouches ：记录当前最新改变的触摸点集合		整个事件都可以记录触摸点集合
	targettouches ：记录当前元素上面的所有触摸点集合 	touchend没有记录
	touches ：记录页面上所有的触摸点集合 				touchend没有记录

	获取坐标
		clientX
		clientY
		基于当前视口触摸点的坐标

		pageX
		pageY
		基于当前页面触摸点的坐标

		screenX
		screenY
		基于当前屏幕触摸点的坐标

3、轮播图
	


4、倒计时


5、移动端滑动效果
	滑动效果分析
	依靠touch相关事件，根据触摸位置的改变，改变对应元素的位移translate;

	1、监听位置的改变
	2、获取当前的坐标
	3、计算位移，在设置滑动
	
6、移动端轻触效果
	
	tap 轻触
	移动端的click事件有关系

	click事件在移动端的特点：300ms左右延迟;

	解决方案一 ：tap事件（是比click事件响应更快的），通过touch事件衍生出来的
				 zepto 移动端的js库 包含了 tap 事件
	解决方案二 ：插件 fastclick  FastClick是一个非常方便的库,在移动浏览器上发生介于轻敲及点击之间的指令时,能够让你摆脱300毫秒的延迟

7、移动端手势事件


8、区域滚动插件