var board = new Array();//全局二维数组
var score = 0;//全局分数
var hasConflicted = new Array();//全局碰撞二维数组

//入口
$(document).ready(function() {

    //移动端准备
    prepareMobile();
   
    //新游戏
    newgame();

    //初始化键盘事件
    initKeyEvent();

    //初始化移动端滑动事件
    initMobileSlideEvent();

    //初始化鼠标事件
    initMouseEvent();


});

//移动端准备
function prepareMobile() {

    // console.log($("#grid-container").width());
    // console.log(documentWidth);
    // console.log(window.document.body.offsetWidth);
    //; 返回当前网页宽度
    if(window.document.body.offsetWidth > 500 ) {
        gridContainerWidth = 500;
        cellSideLength = 100;
        cellSpace = 20;
    }

    $("body").css("padding", cellSpace);


    $("#grid-container").css("width", gridContainerWidth);
    $("#grid-container").css("height", gridContainerWidth);
    //$("#grid-container").css("padding", cellSpace);
    $("#grid-container").css("border-radius", 0.02*gridContainerWidth);

    $(".grid-cell").css("width", cellSideLength);
    $(".grid-cell").css("height", cellSideLength);
    $(".grid-cell").css("border-redius", 0.02 * cellSideLength);

    

}
//新游戏 
function newgame() {
    // 初始化棋盘格
    init();
    // 在随机两个各自生成数字
    generateOneNumber();
    generateOneNumber();
}

// 初始化棋盘格
function init() {

    // 初始位子
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            var gridCell = $("#grid-cell-" + i + "-" + j);
            gridCell.css("top", getPosTop(i, j));
            gridCell.css("left", getPosLeft(i, j));
        }
    }

    // 初始值
    for (var i = 0; i < 4; i++) {
        board[i] = new Array();
        hasConflicted[i] = new Array();
        for (var j = 0; j < 4; j++) {
            board[i][j] = 0;
            hasConflicted[i][j] = false;
        }
    }

    // 更新界面显示
    updateBoardView();

    score = 0;
    updateScore(score);

}

// 更新界面显示
function updateBoardView() {
    // 移除已有值的元素
    $(".number-cell").remove();

    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            $("#grid-container").append("<div class='number-cell' id='number-cell-" + i + "-" + j + "'></div>");
            var theNumberCell = $("#number-cell-" + i + "-" + j);

            theNumberCell.css("line-height", cellSideLength + "px");
            if(board[i][j] < 100) {
                theNumberCell.css("font-size", 0.6*cellSideLength + "px");
            }else if(board[i][j] < 1000 ) {
                theNumberCell.css("font-size", 0.5*cellSideLength + "px");
            }else {
                theNumberCell.css("font-size", 0.4*cellSideLength + "px");
            }


            if (board[i][j] == 0) {
                theNumberCell.css("width", "0px");
                theNumberCell.css("height", "0px");
                theNumberCell.css("top", getPosTop(i, j) + cellSideLength / 2);
                theNumberCell.css("left", getPosLeft(i, j) + cellSideLength / 2);
            } else {
                theNumberCell.css("width", cellSideLength);
                theNumberCell.css("height", cellSideLength);
                theNumberCell.css("top", getPosTop(i, j));
                theNumberCell.css("left", getPosLeft(i, j));
                theNumberCell.css("background-color", getNumberBackgroundColor(board[i][j]));
                theNumberCell.css("color", getNumberColor(board[i][j]));
                theNumberCell.text(board[i][j]);
                
                //私人定制
                //theNumberCell.text(getTextByNumber(board[i][j]));
                //theNumberCell.css("font-size", 0.2*cellSideLength + "px");//私人定制 设置字体
            }

            hasConflicted[i][j] = false;
            
        }
    }
}

// 随机在格子中生成一个数
function generateOneNumber() {

    // 判断格子空间
    if (nospace(board)) {
        return false;
    }

    // 随机一个位子
    var xArr = new Array();
    var yArr = new Array();
    for (var row = 0; row < 4; row++) {
        for (var col = 0; col < 4; col++) {
            if (board[row][col] == 0) {
                xArr.push(row);
                yArr.push(col);
            }
        } 
    }
    rand = parseInt(Math.floor(Math.random() * xArr.length));
    var randx = xArr[rand];
    var randy = yArr[rand];


    // 随机一个数
    var randNumber = Math.random() < 0.5 ? 2 : 4 ;

    // 在随机位子显示随机数
    board[randx][randy] = randNumber;
    showNumberWithAnimation(randx, randy, randNumber);

    return true;


}




function isgameover(){
	if(nospace(board) && nomove(board)) {
		gameover();
	}
}

function gameover(){
	alert("gameover");
}

// 左移
function moveLeft() {
	// 判断能否左移
	if(!canMoveLeft(board)) {
		return false;
	}

	for (var row = 0; row < 4; row++) {
        for (var col = 1; col < 4; col++) {
        	if(board[row][col] != 0) {
        		
        		for (var k = 0; k < col; k++) {
        			// 左侧为0
        			if(board[row][k] == 0 && noBlockHorizontal(row, k, col, board)){
        				// move
        				showMoveAnimation(row, col, row, k);
        				board[row][k] = board[row][col];
        				board[row][col] = 0;
        				continue;
        			}
        			// 左侧等于自己
        			else if (board[row][ k] == board[row][col] && noBlockHorizontal(row, k, col, board) && !hasConflicted[row][k])
        			{
        				// move
        				showMoveAnimation(row, col, row, k);

        				// add
        				board[row][k] += board[row][col];
        				board[row][col] = 0;

        				score += board[row][k];
        				updateScore(score);

                        hasConflicted[row][k] = true;

        				continue;
        			}
        		}
        	}
        }
    }
    
    setTimeout("updateBoardView()", 200);
    return true;
}


// 右移
function moveRight() {
    // 判断能否右移
    if(!canMoveRight(board)) {
        return false;
    }

    for (var row = 0; row < 4; row++) {
        for (var col = 2; col >= 0; col--) {
            if(board[row][col] != 0) {
                
                for (var k = 3;  k > col; k--) {
                    
                    if(board[row][k] == 0 && noBlockHorizontal(row, col, k, board)){
                        // move
                        showMoveAnimation(row, col, row, k);
                        board[row][k] = board[row][col];
                        board[row][col] = 0;
                        continue;
                    }
                    
                    else if (board[row][k] == board[row][col] && noBlockHorizontal(row, col, k, board) && !hasConflicted[row][k])
                    {
                        // move
                        showMoveAnimation(row, col, row, k);

                        // add
                        board[row][k] += board[row][col];
                        board[row][col] = 0;

                        score += board[row][k];
                        updateScore(score);

                        hasConflicted[row][k] = true;

                        continue;
                    }
                }
            }
        }
    }
    
    setTimeout("updateBoardView()", 200);
    return true;
}



// 上移
function moveUp() {
	// 判断能否上移
	if(!canMoveUp(board)) {
		return false;
	}

	for (var col = 0; col < 4; col++) {
		for (var row = 1; row < 4; row++) {
        
        	if(board[row][col] != 0) {
        		
        		for (var k = 0; k < row; k++) {
        			
        			if(board[k][col] == 0 && noBlockVertical(col, k, row, board)){
        				// move
        				showMoveAnimation(row, col, k, col);
        				board[k][col] = board[row][col];
        				board[row][col] = 0;
        				continue;
        			}
        			
        			else if (board[k][col] == board[row][col] && noBlockVertical(col, k, row, board) && !hasConflicted[k][col])
        			{
        				// move
        				showMoveAnimation(row, col, k, col);

        				// add
        				board[k][col] += board[row][col];
                        board[row][col] = 0;

        				score += board[k][col];
        				updateScore(score);

                        hasConflicted[k][col] = true;

        				continue;
        			}
        		}
        	}
        }
    }
    
    setTimeout("updateBoardView()", 200);
    return true;
}




// 下移
function moveDown() {
	// 判断能否下移
	if(!canMoveDown(board)) {
		return false;
	}

	for (var col = 0; col < 4; col++) {
	
        for (var row = 2; row >= 0; row--) {
        	if(board[row][col] != 0) {
        		
        		for (var k = 3;  k > row; k--) {
        			
        			if(board[k][col] == 0 && noBlockVertical(col, row, k, board)){
        				// move
        				showMoveAnimation(row, col, k, col);
        				board[k][col] = board[row][col];
        				board[row][col] = 0;
        				continue;
        			}
        			
        			else if (board[k][col] == board[row][col] && noBlockVertical(col, row, k, board) && !hasConflicted[k][col])
        			{
        				// move
        				showMoveAnimation(row, col, k, col);

        				// add
        				board[k][col] += board[row][col];
        				board[row][col] = 0;

        				score += board[k][col]
        				updateScore(score);

                        hasConflicted[k][col] = true;
        				continue;
        			}
        		}
        	}
        }
    }
    
    setTimeout("updateBoardView()", 200);
    return true;
}

// 添加键盘操作事件
function initKeyEvent(){
    $(document).keydown(function(event){

        switch(event.keyCode) {
            case 37: // left
                //阻止默认行为
                
                if(moveLeft()) {
                    setTimeout("generateOneNumber()", 210);
                    setTimeout("isgameover()", 300);
                }
                
                break;
            case 38: // up
                //阻止默认行为
                
                if(moveUp()) {
                    setTimeout("generateOneNumber()", 210);
                    setTimeout("isgameover()", 300);
                }
                break;
            case 39: // right
                //阻止默认行为
                
                if(moveRight()) {
                    setTimeout("generateOneNumber()", 210);
                    setTimeout("isgameover()", 300);
                }
                break;
            case 40: // down
                //阻止默认行为
                
                if(moveDown()) {
                    setTimeout("generateOneNumber()", 210);
                    setTimeout("isgameover()", 300);
                }
                break;
            default: break;
        }
        return true;
    });

}




// 添加鼠标操作事件
function initMouseEvent() {

    // 添加画板
    $("#grid-container").prepend("<canvas id='mycanvas' ></canvas>")
    var canvas = document.getElementById("mycanvas");
    var context = canvas.getContext("2d");
    
    canvas.width=$("#mycanvas").width();//注意：没有单位
    canvas.height=$("#mycanvas").height();//注意：没有单位

    //清空画板
    context.clearRect(0,0, canvas.width, canvas.height); 
    //重新开启一条路径
    context.beginPath();

    // 画笔属性
    context.lineWidth="5";
    context.strokeStyle = "#93c";

    var ox = $("section").offset().left;
    var oy = $("section").offset().top;

    var startX = 0; // 记录开始的X坐标
    var startY = 0;
    var distanceX = 0; // 记录坐标轴的改变
    var distanceY = 0;
    var isMove = false;// 是否移动过
    var isDown = false;// 鼠标是否按下

    
    $("section").mousedown(function(e){
        //console.log(e);

        startX = e.originalEvent.clientX;
        startY = e.originalEvent.clientY;
        isDown = true;
    });
    $(document).mousemove (function(e){
        
        if(isDown) {
            var moveX = e.originalEvent.clientX;
            var moveY = e.originalEvent.clientY;
            distanceX = moveX - startX;
            distanceY = moveY - startY;
            isMove = true;


            var x = e.originalEvent.clientX - ox;  //移动过程中的x坐标
            var y = e.originalEvent.clientY - oy;   //移动过程中的y坐标
            context.lineTo(x,y);
            context.stroke();
        }
    });
    $(document).mouseup(function(e){
         if(isMove && (Math.abs(distanceX)  >= 50 || Math.abs(distanceY) >= 50) )
        {
            
            if(Math.abs(distanceX) >= Math.abs(distanceY))
            {
                if(distanceX > 0)
                {
                    //console.log('右滑事件');
                    if(moveRight()) {
                        setTimeout("generateOneNumber()", 210);
                        setTimeout("isgameover()", 300);
                    }
                }else{
                    //console.log('左滑事件');
                    if(moveLeft()) {
                        setTimeout("generateOneNumber()", 210);
                        setTimeout("isgameover()", 300);
                    }
                }
            }else {
                if(distanceY > 0)
                {
                    //console.log('下滑事件');
                    if(moveDown()) {
                        setTimeout("generateOneNumber()", 210);
                        setTimeout("isgameover()", 300);
                    }
                }else{
                    //console.log('上滑事件');
                    if(moveUp()) {
                        setTimeout("generateOneNumber()", 210);
                        setTimeout("isgameover()", 300);
                    }
                }
            }
        }
        
        // 重置参数
        startX = 0;
        startY = 0;
        distanceX = 0;
        distanceY = 0;
        isMove = false;
        isDown = false;

        //清空画板
        context.clearRect(0,0, canvas.width, canvas.height); 
        context.beginPath();
    });
}



//移动端事件
function initMobileSlideEvent(){
    var startX = 0; // 记录开始的X坐标
    var startY = 0;
    var distanceX = 0; // 记录坐标轴的改变
    var distanceY = 0;
    var isMove = false;// 是否移动过
    var dom = document.querySelector('section');

    dom.addEventListener('touchstart', function(e){
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });
    dom.addEventListener('touchmove', function(e){
        var moveX = e.touches[0].clientX;
        var moveY = e.touches[0].clientY;
        distanceX = moveX - startX;
        distanceY = moveY - startY;
        isMove = true;
       
    });
    dom.addEventListener("touchend", function(e){
        //console.log("touchend" + e);
        //console.log("touchend" + isMove);
        //console.log("touchend" + distanceX);
        //console.log("touchend" + distanceY);
        // 1、必须滑动过
        // 2、滑动的距离超过50px
        if(isMove && (Math.abs(distanceX)  >= 50 || Math.abs(distanceY) >= 50) )
        {
            
            if(Math.abs(distanceX) >= Math.abs(distanceY))
            {
                if(distanceX > 0)
                {
                    //console.log('右滑事件');
                    if(moveRight()) {
                        setTimeout("generateOneNumber()", 210);
                        setTimeout("isgameover()", 300);
                    }
                }else{
                    //console.log('左滑事件');
                    if(moveLeft()) {
                        setTimeout("generateOneNumber()", 210);
                        setTimeout("isgameover()", 300);
                    }
                }
            }else {
                if(distanceY > 0)
                {
                    //console.log('下滑事件');
                    if(moveDown()) {
                        setTimeout("generateOneNumber()", 210);
                        setTimeout("isgameover()", 300);
                    }
                }else{
                    //console.log('上滑事件');
                    if(moveUp()) {
                        setTimeout("generateOneNumber()", 210);
                        setTimeout("isgameover()", 300);
                    }
                }
            }
        }
        
        // 重置参数
        startX = 0;
        startY = 0;
        distanceX = 0;
        distanceY = 0;
        isMove = false;
    });

}

