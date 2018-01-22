//Obstaculos que se romperan con las bombas que ponga bomberman.

function ObstacleCreator() {
    this.obsX = [];
    this.obsY = [];
    this.esPuerta = 0;
}

ObstacleCreator.prototype.createObs = function (board, num) {
    var t = 0;
    var tempX, tempY;
    this.esPuerta = this.rand(num);
    while (t < num) {
        tempX = this.rand(board.mapSizeX);
        tempY = this.rand(board.mapSizeY);
        if (board.map[tempY][tempX] != 1) {
            if (!((tempX == 1 && tempY == 1) || (tempX == 2 && tempY == 1) || (tempX == 1 && tempY == 2))) {
                // if 
                // (t == puerta) {
                //    this.createDoor(tempX,tempY);
                // } else 
                // {
                    board.map[tempY][tempX] = 2;
                    this.obsX.push(tempX);
                    this.obsY.push(tempY);
                // }
                t++;
            }
        }
    }
    console.log(newObs)
    }

ObstacleCreator.prototype.rand = function (max) {
    return Math.floor(Math.random() * max);
}

ObstacleCreator.prototype.render = function (board) {
    for (var x = 0; x < board.mapSizeY; x++) {
        for (var y = 0; y < board.mapSizeX; y++) {
            if (board.map[x][y] == 2) {
                board.ctx.fillStyle = "#8b4513";
                board.ctx.fillRect(y * 64, x * 64, 64, 64);
            }
        }
    }
}


