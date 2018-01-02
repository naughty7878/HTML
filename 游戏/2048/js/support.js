/* 底层支持js */

//获取格子距离顶部的距离
function getPosTop(i, j) {
    return 20 + i * 120;
}
//获取格子距离左边的距离
function getPosLeft(i, j) {
    return 20 + j * 120;
}

//获取格子背景色
function getNumberBackgroundColor(number) {
    switch (number) {
        case 2:
            return "#eee4da";
            break;
        case 4:
            return "#ede0c8";
            break;
        case 8:
            return "#f2b179";
            break;
        case 16:
            return "#f59563";
            break;
        case 32:
            return "#f67c5f";
            break;
        case 64:
            return "#f65e3b";
            break;
        case 128:
            return "#edcf72";
            break;
        case 256:
            return "#edcc61";
            break;
        case 512:
            return "#9c0";
            break;
        case 1024:
            return "#33b5e5";
            break;
        case 2048:
            return "#09c";
            break;
        case 4096:
            return "#s6c";
            break;
        case 8192:
            return "#93c";
            break;
    }
    return "black";
}

//获取格子文字色
function getNumberColor(number) {
    if (number <= 4) {
        return "#776e65";
    }
    return "white";
}

// 判断格子是否有无空余
function nospace(board) {
    for (var row = 0; row < 4; row++) {
        for (var col = 0; col < 4; col++) {
            if (board[row][col] == 0) {
                return false;
            }
        }
    }
    return true;
}



//判断能否左移
function canMoveLeft(board) {
    for (var i = 0; i < 4; i++) {
    	
        for (var j = 1; j < 4; j++) {
            if (board[i][j] != 0) {

                if (board[i][j-1] == 0 || board[i][j-1] == board[i][j]) {
                	// 左侧格子空 或 左侧盒子等于自己
                	return true;
                }
            }
        }
    }
    return false;
}

function canMoveRight(board) {
    for (var i = 0; i < 4; i++) {
        for (var j = 2; j >= 0; j--) {
            if (board[i][j] != 0) {
                if (board[i][j+1] == 0 || board[i][j+1] == board[i][j]) {
                	
                	return true;
                }
            }
        }
    }
    return false;
}

//判断能否上移
function canMoveUp(board) {
    for (var j = 0; j < 4; j++) {
        for (var i = 1; i < 4; i++) {
            if (board[i][j] != 0) {
                if (board[i-1][j] == 0 || board[i-1][j] == board[i][j]) {
                	
                	return true;
                }
            }
        }
    }
    return false;
}




function canMoveDown(board) {
	for (var j = 0; j < 4; j++) {
    	for (var i = 2; i >= 0; i--) {
            if (board[i][j] != 0) {
                if (board[i+1][j] == 0 || board[i+1][j] == board[i][j]) {
         
                	return true;
                }
            }
        }
    }
    return false;
}




// 判断水平方向上是否有障碍物
function noBlockHorizontal(row, col1, col2, board) {
	for (var i = col1 + 1; i < col2; i++) {
		if(board[row][i] != 0){
			return false;
		}
	}
	return true;
}

// 判断垂直方向是否有障碍物
function noBlockVertical(col, row1, row2, board) {
	for (var i = row1 + 1; i < row2; i++) {
		if(board[i][col] != 0){
			return false;
		}
	}
	return true;
}


function nomove(board) {
	if(canMoveLeft(board) 
		|| canMoveRight(board)
		|| canMoveUp(board)
		|| canMoveDown(board))
		return false;
	return true;
}