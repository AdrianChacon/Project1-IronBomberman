//creación del personaje
function BombermanCreator() {
    //Mi idea es crear un array de objetos bomba, para así saber su posición y cuando se puso.
    this.x = 80;
    this.y = 80;
    this.width = 32;
    this.height = 32;
    this.maxSpeed = 128;
    this.speedX = 0;
    this.speedY = 0;
    this.nFire = 1;
    this.nBomb = [];
    newBomb = new CreateBomb()
    this.nBomb.push(newBomb);
    // newBoard.map[this.x][this.y] = 4;
}
//habilidades del personaje
BombermanCreator.prototype.action = function (e) {
    switch (e.which) {
        case 32:
            for (var i = 0; i < this.nBomb.length; i++) {
                if (this.nBomb[i].activa == false) {
                    this.nBomb[i].xB = Math.floor(this.x/64);
                    console.log(this.nBomb[i].xB)
                    this.nBomb[i].yB = Math.floor(this.y/64);
                    console.log(this.nBomb[i].yB)
                    this.nBomb[i].momentoDeCreacion = Date.now();
                    this.nBomb[i].activa = true;
                    // console.log(this.x + "," + this.y)
                    newBoard.map[this.nBomb[i].yB][this.nBomb[i].xB] = 3;
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
            // if (newBoard.map[Math.floor(this.y)][Math.floor(this.x - (this.speedX / 64))] == 0) {
            if (okXizq) {
                this.moveX(-1);
                // } else {this.moveX(1)}
                // this.stop()
                //     } else {
                //         this.stop();
            }
            // console.log(this.y + " " + (this.x));
            // }
            //console.log(newBoard.map[Math.floor(this.y)][Math.floor(this.x-1)])
            //  } 
            //   }
            break;
        case 38: // up
            // if (newBoard.map[this.y - 1][this.x] == 0) {
            // if (newBoard.map[Math.floor(this.y - (this.speedY / 64))][Math.floor(this.x)] == 0) {
            if (okYarriba) {
                this.moveY(-1);
                // } else {
                //     this.moveY(1);
            }
            // console.log(this.y + " " + (this.x));
            // }
            break;
        case 39: // right
            // if (newBoard.map[this.y][this.x + 1] == 0) {
            // if (newBoard.map[Math.floor(this.y)][Math.floor(this.x + (this.speedX / 64))] == 0) {
            if (okXder) {
                this.moveX(1);
                // } else {this.moveX(-1)}
                // console.log(this.y + " " + (this.x));
            }
            break;
        case 40: //down
            // if (newBoard.map[this.y + 1][this.x] == 0) {
            // if (newBoard.map[Math.floor(this.y + (this.speedX / 64))][Math.floor(this.x)] == 0) {
            if (okYabajo) {
                this.moveY(1);
                // } else {
                //     this.moveY(-1);
            }
            // console.log(this.y + " " + (this.x));
            // }
            break;
    }
    // console.log(((64 * this.x) + 16) + '-' + ((64 * this.y) + 16))
    //     if((newBoard.map[Math.floor(this.y)][Math.floor(this.x)])!=0)
    //     {
    //         this.stop();
    //     }
}
BombermanCreator.prototype.collisionDetector = function () {
    //primero compruebo que no me he salido de los bordes
    if (this.x < 64) {
      this.x = 65;
        // okXizq = false;
        // this.stop();
    }
    if (this.x > 866) {
     this.x = 865
        // okXder = false;
        // this.stop();
    }
    if (this.y < 64) {
       this.y = 65
        // okYarriba = false;
        // this.stop();
    }
    if (this.y > 610) {
        this.y = 610
        // okYabajo = false;
        // this.stop();
    }
    for (var i = 1; i < newBoard.mapSizeY - 1; i++) {
        for (var j = 1; j < newBoard.mapSizeX - 1; j++) {
            // console.log()
            // console.log(bomberman.x + ' ' + newObs.obsX[i] + ' ' + newObs.width)
            if ((newBoard.map[i][j] > 0 ) && (newBoard.map[i][j] < 3  )) {
                if (
                    ((this.x) < ((64 * j) + newObs.width)) &&
                    ((this.x + this.width) > (64 * j)) &&
                    ((this.y) < ((64 * i) + newObs.height)) &&
                    ((this.y + this.height) > (64 * i))
                ) {

                    
                    // console.log(this.x+'-'+ i )
                    // console.log(this.y +'-'+ j)
                    
                    this.stop();
                    // bomberman.x = 64 * j + (bomberman.width);
                    // bomberman.y = 64 * i + (bomberman.height);
                }
                // return false;
                // The objects are touching
            }
        }
    }
    //     //     return true;
    // }
    // }
    // return true;
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
    this.collisionDetector();
    board.ctx.fillStyle = "#ff8000";
    board.ctx.fillRect(this.x, this.y, 32, 32);
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
