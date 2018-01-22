//creación del personaje
function BombermanCreator() {
    //Mi idea es crear un array de objetos bomba, para así saber su posición y cuando se puso.
    this.nBomb = [];
    this.nFire = 1;
    this.x = 1;
    this.y = 1;
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
                    this.nBomb[i].xB = this.x;
                    this.nBomb[i].yB = this.y;
                    this.nBomb[i].momentoDeCreacion = Date.now();
                    this.nBomb[i].activa = true;
                    console.log(this.x+","+this.y)
                    newBoard.map[this.y][this.x] = 3;
                    console.log(newBoard.map)
                }
            }
            break;
        case 37: // left
            if (newBoard.map[this.y][this.x - 1] == 0) {
                this.x--;
            }
            break;
        case 38: // up
            if (newBoard.map[this.y - 1][this.x] == 0) {
                this.y--;
            }
            console.log(this.y);
            break;
        case 39: // right
            if (newBoard.map[this.y][this.x + 1] == 0) {
                this.x++;
            }
            console.log(this.x);
            break;
        case 40: //down
            if (newBoard.map[this.y + 1][this.x] == 0) {
                this.y++;
            }
            console.log(this.y);
            break;
    }
}

BombermanCreator.prototype.render = function (board) {
    board.ctx.fillStyle = "#ff8000";
    board.ctx.fillRect(this.x * 64 + 16, this.y * 64 + 16, 32, 32);
    board.ctx.fillStyle = "#000000";
    for (var i = 0; i < this.nBomb.length; i++) {
        if (this.nBomb[i].activa) {
            // this.nBomb[i].render();
            board.ctx.fillRect((this.nBomb[i].xB) * 64 + 16, (this.nBomb[i].yB) * 64 + 16, 32, 32);
            this.nBomb[i].explosion();
        }
    }
}

BombermanCreator.prototype.win = function () {
    if (newBoard.map[this.y][this.x] == 4){
        alert("You win! :D");
    }
}