var Asteroids = window.Asteroids || {};

Asteroids.GameView = function(game, ctx) {
  this.game = game,
  this.ctx = ctx;
}

Asteroids.GameView.prototype.start = function () {
  var gameView = this
  setInterval(function(){
    gameView.game.addAsteroids();
    gameView.game.step();
    gameView.game.draw(gameView.ctx);
  }, 20);
};


