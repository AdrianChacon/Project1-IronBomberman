//Creación del tablero del bomberman, solo será pintado una vez, los obstaculos serán pintados en el momento de colocarlos
function BoardCreator() {
  this.canvas = document.getElementById("myCanvas");
  this.ctx = document.getElementById("myCanvas").getContext("2d");
  this.mapSizeX = 15;
  this.mapSizeY = 11;
  this.map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ] // 0 libre 1 pared 2 obst 3 bomb 4 pu
}

BoardCreator.prototype.render = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  for (var x = 0; x < this.mapSizeY; x++) {
    for (var y = 0; y < this.mapSizeX; y++) {
      if (this.map[x][y] == 1) {
        this.ctx.fillStyle = "#666F88";
        this.ctx.fillRect(y * 64, x * 64, 64, 64);
      }
    }
  }
}
