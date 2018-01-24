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
            console.log(newObs);

            if ((newObs.puertaX == this.xB) && (newObs.puertaY == this.yB - 1)) {
                newBoard.map[this.yB - 1][this.xB] = 4;
            }
        }
        if (newBoard.map[this.yB + 1][this.xB] == 2) {
            newBoard.map[this.yB + 1][this.xB] = 0; // original
            console.log(newObs);
            if ((newObs.puertaX == this.xB) && (newObs.puertaY == this.yB + 1)) {
                newBoard.map[this.yB + 1][this.xB] = 4;
            }
        }
        if (newBoard.map[this.yB][this.xB - 1] == 2) {
            newBoard.map[this.yB][this.xB - 1] = 0; // original
            console.log(newObs);

            if ((newObs.puertaX == this.xB - 1) && (newObs.puertaY == this.yB)) {
                newBoard.map[this.yB][this.xB - 1] = 4;
            }
        }
        if (newBoard.map[this.yB][this.xB + 1] == 2) {
            newBoard.map[this.yB][this.xB + 1] = 0; // original
            console.log(newObs);

            if ((newObs.puertaX == this.xB + 1) && (newObs.puertaY == this.yB)) {
                newBoard.map[this.yB][this.xB + 1] = 4;
            }
        }
        newBoard.map[this.yB][this.xB] = 0;
        // arreglar con 2 Players!!
        // if ((this.yB - 1 == Math.floor((bomberman.y)/64)) && (this.xB == Math.floor(bomberman.x/64))) {
        //     alert("Has muerto :(");
        // }
        // if ((this.yB + 1 == Math.floor((bomberman.y)/64)) && (this.xB == Math.floor(bomberman.x/64))) {
        //     alert("Has muerto :(");
        // }
        // if ((this.yB == Math.floor((bomberman.y)/64)) && (this.xB - 1 == Math.floor(bomberman.x/64))) {
        //     alert("Has muerto :(");
        // }
        // if ((this.yB == Math.floor((bomberman.y)/64)) && (this.xB + 1 == Math.floor(bomberman.x/64))) {
        //     alert("Has muerto :(");
        // }
    }
}