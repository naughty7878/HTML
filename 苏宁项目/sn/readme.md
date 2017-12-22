

### less适配维护

lessJS js插件让less能在浏览器直接运行解析
<link rel="stylesheet/less" type="text/css" href="less/test.less">
<script src="lib/less/less.js" type="text/javascript"></script>
<!-- 
1、和css引入一样 引入less文件
2、在less中加入一个属性 rel="stylesheet/less"
3、在less引入的下面引入less.js插件 解析less的插件
4、lessjs会把less的内容加载过来
5、解析成css 字符串 然后追加到head当中 在style标签当中
6、本质在浏览器上运行的还是css 
-->

less适配：
@charset "utf-8";

// 适配主流设备
// 640px 750px 设计稿
// 需要设置对应的基准值
// 750px的设计稿 假设100px 
// 在psd图量取的尺寸px 通过基准值转换成rem

// 设备的尺寸  320px 360px 375px 384px 400px 414px 424px 480px 540px 720px 750px
// 每一种设备有对应的fontSize大小


// adapter边变量
// 设计稿宽度
@psdWidth: 750;
// 基准值
@baseSize: 100;
// 需要适配的所有设备
@deviceWidthList: 320px,360px,375px,384px,400px,414px,424px,450px,480px,540px,720px,750px;



// adapter mixin 
// .adapterFun(@deviceWidth) {
// 	@media (min-width: @deviceWidth) {
// 	html {
// 			font-size: @deviceWidth/@psdWidth*@baseSize;
// 		}
// 	}
// }
// .adapterFun(320px);

// length(@deviceWidthList) 内置行数获取数组的长度
// extract(@deviceWidthList, 1) 从数组中取值,序号从1开始

// body {
// 	height: extract(@deviceWidthList, 1);
// }

// @index 指的是数组的序号 when 满足这个条件 当前序号要小于等于数组长度
.adapterFun(@index) when (@index <= length(@deviceWidthList)){
	@media (min-width: extract(@deviceWidthList, @index)) {
		html {
			font-size: extract(@deviceWidthList, @index)/@psdWidth*@baseSize;
		}
	}

	// 自调用
	.adapterFun(@index+1);
}
.adapterFun(1);



### 移动端适配方案

1、伸缩容器的适配 	flex
2、流式布局的适配 	百分比
3、响应式布局		媒体查询 （超小屏幕的时候使用的还是流式布局）
4、rem适配方式		rem单位 用在内容的高宽自适应 可以结合 流式布局 和伸缩布局 做移动端的整体适配

### 使用zepto完成轮播图

zepto：js库	类似jquery的js库 适用于移动端开发

中文文档地址：http://www.css88.com/doc/zeptojs_api/

源码下载地址：https://github.com/madrobby/zepto