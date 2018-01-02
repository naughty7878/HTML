var board = new Array();//全局二维数组
var score = 0;//全局分数
var hasConflicted = new Array();//全局碰撞二维数组

//入口
$(document).ready(function() {
    newgame();
});


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

            if (board[i][j] == 0) {
                theNumberCell.css("width", "0px");
                theNumberCell.css("height", "0px");
                theNumberCell.css("top", getPosTop(i, j) + 50);
                theNumberCell.css("left", getPosLeft(i, j) + 50);
            } else {
                theNumberCell.css("width", "100px");
                theNumberCell.css("height", "100px");
                theNumberCell.css("top", getPosTop(i, j));
                theNumberCell.css("left", getPosLeft(i, j));
                theNumberCell.css("background-color", getNumberBackgroundColor(board[i][j]));
                theNumberCell.css("color", getNumberColor(board[i][j]));
                theNumberCell.text(board[i][j]);
                
                
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

    var randx = 0;
    var randy = 0;
    do {
        randx = parseInt(Math.floor(Math.random() * 4));
        randy = parseInt(Math.floor(Math.random() * 4));
        if (board[randx][randy] == 0) break;
    }
    while(true);

    // 随机一个数
    var randNumber = Math.random() < 0.5 ? 2 : 4 ;

    // 在随机位子显示随机数
    board[randx][randy] = randNumber;
    showNumberWithAnimation(randx, randy, randNumber);

    return true;


}



// 添加操作事件
$(document).keydown(function(event){
	switch(event.keyCode) {
		case 37: // left
			if(moveLeft()) {
				setTimeout("generateOneNumber()", 210);
				setTimeout("isgameover()", 300);
			}
			console.log(board);
			break;
		case 38: // up
			if(moveUp()) {
				setTimeout("generateOneNumber()", 210);
				setTimeout("isgameover()", 300);
			}
			break;
		case 39: // right
			if(moveRight()) {
				setTimeout("generateOneNumber()", 210);
				setTimeout("isgameover()", 300);
			}
			break;
		case 40: // down
			if(moveDown()) {
				setTimeout("generateOneNumber()", 210);
				setTimeout("isgameover()", 300);
			}
			break;
		default: break;
	}
    return false;
});

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