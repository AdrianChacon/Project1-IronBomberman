//creación del personaje
function BombermanCreator(x,y) {
    //Mi idea es crear un array de objetos bomba, para así saber su posición y cuando se puso.
    this.x = x;
    this.y = y;
    this.width = 32;
    this.height = 32;
    this.maxSpeed = 128;
    this.speedX = 0;
    this.speedY = 0;
    this.collisionDirX = 0;
    this.collisionDirY = 0;
    this.nFire = 1;
    this.nBomb = [];
    newBomb = new CreateBomb()
    this.nBomb.push(newBomb);
    // newBoard.map[this.x][this.y] = 4;
}
//habilidades del personaje
// BombermanCreator.prototype.action = function (e) {
//     switch (e.which) {
//         case 32:
//             for (var i = 0; i < this.nBomb.length; i++) {
//                 if (this.nBomb[i].activa == false) {
//                     this.nBomb[i].xB = Math.floor(this.x / 64);
//                     console.log(this.nBomb[i].xB)
//                     this.nBomb[i].yB = Math.floor(this.y / 64);
//                     console.log(this.nBomb[i].yB)
//                     this.nBomb[i].momentoDeCreacion = Date.now();
//                     this.nBomb[i].activa = true;
//                     // console.log(this.x + "," + this.y)
//                     newBoard.map[this.nBomb[i].yB][this.nBomb[i].xB] = 3;
//                     // console.log(newBoard.map)
//                 }
//             }
//             break;
//         case 37: // left
//             this.moveX(-1);
//             this.collisionDirX = -1
//             break;
//         case 38: // up
//             this.moveY(-1);
//             this.collisionDirY = -1
//             break;
//         case 39: // right
//             this.moveX(1);
//             this.collisionDirX = 1
//             break;
//         case 40: //down
//             this.moveY(1);
//             this.collisionDirY = 1
//             break;
//     }
// }

BombermanCreator.prototype.dropTheBomb = function () {
    for (var i = 0; i < this.nBomb.length; i++) {
        if (this.nBomb[i].activa == false) {
            this.nBomb[i].xB = Math.floor(this.x / 64);
            console.log(this.nBomb[i].xB)
            this.nBomb[i].yB = Math.floor(this.y / 64);
            console.log(this.nBomb[i].yB)
            this.nBomb[i].momentoDeCreacion = Date.now();
            this.nBomb[i].activa = true;
            newBoard.map[this.nBomb[i].yB][this.nBomb[i].xB] = 3;
        }
    }
}

BombermanCreator.prototype.collisionDetector = function () {
    //primero compruebo que no me he salido de los bordes
    if (this.x < 64) {
        this.x = 65;
    }
    if (this.x > 866) {
        this.x = 865
    }
    if (this.y < 64) {
        this.y = 65
    }
    if (this.y > 610) {
        this.y = 610
    }
    //luego compruebo colision
    for (var i = 1; i < newBoard.mapSizeY - 1; i++) {
        for (var j = 1; j < newBoard.mapSizeX - 1; j++) {
            if ((newBoard.map[i][j] > 0) && (newBoard.map[i][j] < 3)) {
                if (
                    ((this.x) < ((64 * j) + newObs.width)) &&
                    ((this.x + this.width) > (64 * j)) &&
                    ((this.y) < ((64 * i) + newObs.height)) &&
                    ((this.y + this.height) > (64 * i))
                ) {
                    if (this.collisionDirX == -1) {
                        this.x = (j + 1) * 64;
                    }
                    if (this.collisionDirX == 1) {
                        this.x = (j - 1) * 64 + 32
                    }
                    if (this.collisionDirY == -1) {
                        this.y = (i + 1) * 64
                    }
                    if (this.collisionDirY == 1) {
                        this.y = i * 64 - 32
                    }
                }
            }
        }
    }
}
BombermanCreator.prototype.stop = function () {
    this.speedX = 0;
    this.speedY = 0;
    this.collisionDirX = 0;
    this.collisionDirY = 0;
}
BombermanCreator.prototype.moveX = function (direction) {
    this.speedX = this.maxSpeed * direction;
}
BombermanCreator.prototype.moveY = function (direction) {
    this.speedY = this.maxSpeed * direction;
}
BombermanCreator.prototype.render = function (board, delta) {
    this.x += ((this.speedX / 1000) * delta);
    this.y += ((this.speedY / 1000) * delta);
    this.collisionDetector();
    board.ctx.fillStyle = "#ff8000";
    board.ctx.fillRect(this.x, this.y, 32, 32);
    for (var i = 0; i < this.nBomb.length; i++) {
        if (this.nBomb[i].activa) {
            board.ctx.fillStyle = "#000000";
            board.ctx.fillRect((this.nBomb[i].xB) * 64 + 16, (this.nBomb[i].yB) * 64 + 16, 32, 32);
            this.nBomb[i].explosion();
        }
    }
}
BombermanCreator.prototype.win = function () {

}
