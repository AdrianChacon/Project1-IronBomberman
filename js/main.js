var newBoard, bomberman1, bomberman2, numObs = 35, newObs, newBomb, fps = 60;
var now = Date.now(), delta = 0, then;
//Prueba collision detector
var collisionDirX = 0, collisionDirY = 0;

$(document).keydown(function (e) {
    bomberman1.action(e);
    bomberman2.action(e);

});
$(document).keyup(function (e) {
    bomberman1.stop(e);
    bomberman2.action(e);

});

function gameStart() {
    then = now;
    now = Date.now();
    delta = now - then;
    newBoard.render();
    newObs.render(newBoard);
    bomberman1.render(newBoard, delta);
    bomberman2.render(newBoard, delta);
    requestAnimationFrame(gameStart)
}

$(document).ready(function () {
    newBoard = new BoardCreator();
    bomberman1 = new BombermanCreator();
    bomberman2 = new BombermanCreator();
    newObs = new ObstacleCreator();
    newObs.createObs(newBoard, numObs);
    console.log(newBoard.map)
    gameStart();
});