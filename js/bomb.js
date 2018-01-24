function CreateBomb() {
    this.xB = 0;
    this.yB = 0;
    this.momentoDeCreacion = 0;
    this.activa = false;
}

// CreateBomb.prototype.bombPlanted = function (xB, yB, date) {
//     this.xB = xB;
//     this.yB = yB;
//     this.momentoDeCreacion = date;
//     this.activa = true;
// }

// CreateBomb.prototype.render = function () {
//     if (Date.now() - this.momentoDeCreacion < 30000000000){
//         newBoard.ctx.fillStyle ="#000000";
//         newBoard.ctx.fillRect(this.y*64,this.x*64,16,16);
//     } else {
//         this.activa = false;
//     }
// }

//Rehacer cuando arregle el problema de la colision
CreateBomb.prototype.explosion = function () {
    if (Date.now() - this.momentoDeCreacion > 3000) {
        this.activa = false;
        if (newBoard.map[this.yB - 1][this.xB] == 2) {
            newBoard.map[this.yB - 1][this.xB] = 0; // original
        }
        if (newBoard.map[this.yB + 1][this.xB] == 2) {
            newBoard.map[this.yB + 1][this.xB] = 0; // original
        }
        if (newBoard.map[this.yB][this.xB - 1] == 2) {
            newBoard.map[this.yB][this.xB - 1] = 0; // original
        }
        if (newBoard.map[this.yB][this.xB + 1] == 2) {
            newBoard.map[this.yB][this.xB + 1] = 0; // original
        }
        newBoard.map[this.yB][this.xB] = 0;
        // PLAYER 1 MUERE
        if (((this.yB - 1 == Math.floor((bomberman1.y) / 64)) && (this.xB == Math.floor(bomberman1.x / 64))) ||
            ((this.yB + 1 == Math.floor((bomberman1.y) / 64)) && (this.xB == Math.floor(bomberman1.x / 64))) ||
            ((this.yB == Math.floor((bomberman1.y) / 64)) && (this.xB - 1 == Math.floor(bomberman1.x / 64))) ||
            ((this.yB == Math.floor((bomberman1.y) / 64)) && (this.xB + 1 == Math.floor(bomberman1.x / 64)))) {
            bomberman1.isAlive = false;
            console.log(bomberman1.isAlive);
        }
        // PLAYER 2 MUERE
        if (((this.yB - 1 == Math.floor((bomberman2.y) / 64)) && (this.xB == Math.floor(bomberman2.x / 64))) ||
            ((this.yB + 1 == Math.floor((bomberman2.y) / 64)) && (this.xB == Math.floor(bomberman2.x / 64))) ||
            ((this.yB == Math.floor((bomberman2.y) / 64)) && (this.xB - 1 == Math.floor(bomberman2.x / 64))) ||
            ((this.yB == Math.floor((bomberman2.y) / 64)) && (this.xB + 1 == Math.floor(bomberman2.x / 64)))) {
            bomberman2.isAlive = false;
            console.log(bomberman2.isAlive);

        }
        if (bomberman1.isAlive && !bomberman2.isAlive) {
            alert("Player 2, Has muerto!! \n Ganador -> Player 1!!");
        } 
        if (!bomberman1.isAlive && bomberman2.isAlive) {
            alert("Player 1, Has muerto!! \n Ganador -> Player 2!!");
        } 
        if (!bomberman1.isAlive && !bomberman2.isAlive) {
            alert("E M P A T E !")
        }

    }
}