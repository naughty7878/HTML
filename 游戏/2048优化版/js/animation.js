
// 显示随机数字
function showNumberWithAnimation(randx, randy, randNumber) {
    var numberCell = $("#number-cell-" + randx + "-" + randy);
    numberCell.css("background-color", getNumberBackgroundColor(randNumber));
    numberCell.css("color", getNumberColor(randNumber));
    numberCell.text(randNumber);

    //私人定制
    //numberCell.text(getTextByNumber(randNumber));
    //numberCell.css("font-size", 0.2*cellSideLength + "px");//私人定制 设置字体

    numberCell.animate({
        width: cellSideLength,
        height: cellSideLength,
        top: getPosTop(randx, randy),
        left: getPosLeft(randx, randy)
    }, 50);
}


// 显示移动动画
function showMoveAnimation(fromx, fromy, tox, toy){
	var numberCell = $("#number-cell-" + fromx + "-" + fromy);
	numberCell.animate({
		top: getPosTop(tox, toy),
		left: getPosLeft(tox, toy)
	},200);
}



function updateScore(score) {
	$("#score").text(score);
}