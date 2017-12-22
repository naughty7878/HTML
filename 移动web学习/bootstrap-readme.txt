
一、常用的类
	
布局容器	
container 响应式容器
container-fluid 流式容器

栅格系统
row	行
col-*-* 列	
	参数1：	lg	大屏 	大屏生效			1200 < 		1170
			md	中屏 	中屏及以上生效		992 < 1200  970
			sm	小屏 	小屏及以上生效		768 < 992 	750
			xs	超小屏  超小屏及以上生效	 < 768  	100%

	参数2：	默认会把一行分成12等份 取值范围1-12
			表示的是当前元素占12等份的几份

col-xs-offset-* 偏移 往右偏移几等份		
col-xs-push-* 	排序 往后推几份
col-xs-pull-*	排序 往前拉几份	

hidden-lg	控制某种屏幕下隐藏，其他屏幕下可见
hidden-md 
hidden-sm 
hidden-xs

pull-left	左浮动
pull-right 	右浮动

text-left 文字左对齐
text-right 文字右对齐
text-center 文字居中

二、js插件

collapse 折叠js插件
carousel 轮播图js插件
affix 	 固定吸附js插件