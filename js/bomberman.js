//creación del personaje
function BombermanCreator() {
    //Mi idea es crear un array de objetos bomba, para así saber su posición y cuando se puso.
    this.nBomb = [];
    this.nFire = 1;
    this.x = 1;
    this.y = 1;
    this.maxSpeed = 8;
    this.speedX = 0;
    this.speedY = 0;
    newBomb = new CreateBomb()
    this.nBomb.push(newBomb);
    this.width = 64;
    this.height = 64;
    // newBoard.map[this.x][this.y] = 4;
}
//habilidades del personaje
BombermanCreator.prototype.action = function (e) {
    switch (e.which) {
        case 32:
            for (var i = 0; i < this.nBomb.length; i++) {
                if (this.nBomb[i].activa == false) {
                    this.nBomb[i].xB = this.x;
                    this.nBomb[i].yB = this.y;
                    this.nBomb[i].momentoDeCreacion = Date.now();
                    this.nBomb[i].activa = true;
                    // console.log(this.x + "," + this.y)
                    newBoard.map[this.y][this.x] = 3;
                    // console.log(newBoard.map)
                }
            }
            break;
        case 37: // left
            // if (newBoard.map[Math.floor(this.y)][Math.floor(this.x - 1)] == 0) {
            // if (newBoard.map[Math.floor(this.y)][Math.floor(this.x - speedX)] == 0){ 
            // if (this.collisionDetector()) {
                // console.log([Math.floor(this.y)]+' '+[Math.floor(this.x)]) 
            //     {
                // if(this.x + this.speedX;

            this.moveX(-1);

            // this.stop()
            //     } else {
            //         this.stop();
            //     }
            // console.log(this.y + " " + (this.x));
            // }
            //console.log(newBoard.map[Math.floor(this.y)][Math.floor(this.x-1)])
            //  } 
            //   }
            break;
        case 38: // up
            // if (newBoard.map[this.y - 1][this.x] == 0) {
            this.moveY(-1);
            // console.log(this.y + " " + (this.x));
            // }
            break;
        case 39: // right
            // if (newBoard.map[this.y][this.x + 1] == 0) {
            this.moveX(1);
            // console.log(this.y + " " + (this.x));
            // }
            break;
        case 40: //down
            // if (newBoard.map[this.y + 1][this.x] == 0) {
            this.moveY(1);
            // console.log(this.y + " " + (this.x));
            // }
            break;
    }
    console.log(((64 * this.x) + 16) + '-' + ((64 * this.y) + 16))
//     if((newBoard.map[Math.floor(this.y)][Math.floor(this.x)])!=0)
//     {
//         this.stop();
//     }
}
BombermanCreator.prototype.collisionDetector = function () {
        this.stop()


    //    if (this.y)
    // for (var i = 0; i < newObs.obsX.length; i++) {
    //     console.log()
    //     console.log(bomberman.x + ' ' + newObs.obsX[i] + ' ' + newObs.width)
    //     if (
    //         ((64 * bomberman.x) < (64 * newObs.obsX[i] + newObs.width)) &&
    //         ((64 * bomberman.x + bomberman.width) > (64 * newObs.obsX[i])) &&
    //         ((64 * bomberman.y) < (64 * newObs.obsY[i] + newObs.height)) &&
    //         ((64 * bomberman.y + bomberman.height) > (64 * newObs.obsY[i]))
    //     ) {
    //         return false;
    //         console.log("hola")
    //         // The objects are touching
    //     }
    //     return true;
    // }
}
BombermanCreator.prototype.stop = function () {
    this.speedX = 0;
    this.speedY = 0;
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
    
    // console.log('x ' + this.x)
    // console.log('y ' + this.y)
    //AQUI PONGO EL COLISION DETECTOR
    board.ctx.fillStyle = "#ff8000";
    board.ctx.fillRect(this.x * 64 + 16, this.y * 64 + 16, 32, 32);
    // board.ctx.fillRect(this.x * 64 , this.y * 64, 64, 64);

    for (var i = 0; i < this.nBomb.length; i++) {
        if (this.nBomb[i].activa) {
            // this.nBomb[i].render();
            board.ctx.fillStyle = "#000000";
            board.ctx.fillRect((this.nBomb[i].xB) * 64 + 16, (this.nBomb[i].yB) * 64 + 16, 32, 32);
            this.nBomb[i].explosion();
        }
    }
}

BombermanCreator.prototype.win = function () {
    if (newBoard.map[this.y][this.x] == 4) {
        alert("You win! :D");
    }
}
