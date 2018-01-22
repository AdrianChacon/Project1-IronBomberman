var newBoard, bomberman, numObs = 25, newObs, newBomb;

$(document).keydown(function (e) {
    bomberman.action(e);
});

function gameStart() {
    newBoard.render();
    newObs.render(newBoard);
    bomberman.render(newBoard);
    // bomberman.nBomb[0].render();
    requestAnimationFrame(gameStart)
}

$(document).ready(function () {
    newBoard = new BoardCreator();
    bomberman = new BombermanCreator();
    newObs = new ObstacleCreator();
    newObs.createObs(newBoard, numObs);
    bomberman.win();
    gameStart();
});