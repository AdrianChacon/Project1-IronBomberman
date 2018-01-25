//creación del personaje
function BombermanCreator(x, y) {
    //Mi idea es crear un array de objetos bomba, para así saber su posición y cuando se puso.
    this.x = x;
    this.y = y;
    this.isAlive = true;
    this.width = 32;
    this.height = 32;
    this.maxSpeed = 128;
    this.speedX = 0;
    this.speedY = 0;
    this.collisionDirX = 0;
    this.collisionDirY = 0;
    this.nBomb = [];
    newBomb = new CreateBomb()
    this.nBomb.push(newBomb);
    this.bombimg = new Image();
    this.bombimg.src = "./images/bomb.jpg"
    // this.bombermanimg = new Image();
    // this.bombermanimg.src = img;
}

BombermanCreator.prototype.dropTheBomb = function () {
    var puesta = false;
    var i = 0;

    while (!(puesta) && (i < this.nBomb.length)) {
        if (this.nBomb[i].activa == false) {
            this.nBomb[i].xB = Math.floor(this.x / 64);
            this.nBomb[i].xB = Math.floor(this.x / 64);
            this.nBomb[i].yB = Math.floor(this.y / 64);
            this.nBomb[i].momentoDeCreacion = Date.now();
            this.nBomb[i].activa = true;
            puesta = true;
        }
        i++;
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
            // Recoger el power up
            if (newBoard.map[i][j] == 4) {
                if (
                    ((this.x) < ((64 * j) + newObs.width)) &&
                    ((this.x + this.width) > (64 * j)) &&
                    ((this.y) < ((64 * i) + newObs.height)) &&
                    ((this.y + this.height) > (64 * i))
                ) {
                    newBomb = new CreateBomb()
                    this.nBomb.push(newBomb);
                    console.log(this.nBomb);
                    newBoard.map[i][j] = 0;
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
    for (var i = 0; i < this.nBomb.length; i++) {
        if (this.nBomb[i].activa) {
            board.ctx.drawImage(this.bombimg, (this.nBomb[i].xB) * 64, (this.nBomb[i].yB) * 64, 64, 64);
            this.nBomb[i].explosion();
        }
    }
    if (this.isAlive) {
        board.ctx.fillStyle = "#ff8000";
        board.ctx.fillRect(this.x, this.y, 32, 32);
    }

}

