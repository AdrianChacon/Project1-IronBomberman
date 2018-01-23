var newBoard, bomberman, numObs = 25, newObs, newBomb, fps = 60;
var now = Date.now(), delta = 0, then;
//Prueba collision detector
var collisionDirX = 0, collisionDirY = 0;

$(document).keydown(function (e) {
    bomberman.action(e);
});
$(document).keyup(function (e) {
    bomberman.stop(e);
    okXder = true;
    okXizq = true;
    okYabajo = true;
    okYarriba = true;
});

function gameStart() {
    then = now;
    now = Date.now();
    delta = now - then;
    newBoard.render();
    newObs.render(newBoard);
    bomberman.render(newBoard, delta);
    // bomberman.collisionDetector();
    // bomberman.nBomb[0].render();
    // bomberman.win();
    requestAnimationFrame(gameStart)
}

$(document).ready(function () {
    newBoard = new BoardCreator();
    bomberman = new BombermanCreator();
    newObs = new ObstacleCreator();
    newObs.createObs(newBoard, numObs);
    console.log(newBoard.map)
    gameStart();
});