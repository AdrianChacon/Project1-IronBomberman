var newBoard, bomberman, numObs = 25, newObs, newBomb, fps = 60;
var now = Date.now(), delta = 0, then;

$(document).keydown(function (e) {
    bomberman.action(e);
});
$(document).keyup(function (e) {
    bomberman.stop(e);
});

function gameStart() {
    then = now;
    now = Date.now();
    delta = now - then;
    newBoard.render();
    newObs.render(newBoard);
    bomberman.render(newBoard,delta);
    // bomberman.nBomb[0].render();
   // bomberman.win();
    requestAnimationFrame(gameStart)
}

$(document).ready(function () {
    newBoard = new BoardCreator();
    bomberman = new BombermanCreator();
    newObs = new ObstacleCreator();
    newObs.createObs(newBoard, numObs);
    gameStart();
});