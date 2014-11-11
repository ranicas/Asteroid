var Asteroids = window.Asteroids || {};

Asteroids.Game = function () {
  this.asteroids = [];
};

Asteroids.Game.DIM_X = window.innerWidth;

Asteroids.Game.DIM_Y = window.innerHeight;

Asteroids.Game.NUM_ASTEROIDS = 10;

Asteroids.Game.prototype.addAsteroids = function () {
  for(var i = this.asteroids.length; i < Asteroids.Game.NUM_ASTEROIDS; i++) {
    this.asteroids.push(new Asteroids.Asteroid(Asteroids.Game.randomPosition(), this));
  }
};

Asteroids.Game.randomPosition = function() {
  return [Asteroids.Util.randomGen(Asteroids.Game.DIM_Y),
          Asteroids.Util.randomGen(Asteroids.Game.DIM_X)];
};

Asteroids.Game.prototype.draw = function (ctx) {
  ctx.clearRect(0, 0, Asteroids.Game.DIM_X, Asteroids.Game.DIM_Y);
  this.asteroids.forEach(function (el) { el.draw(ctx); });
};

Asteroids.Game.prototype.moveObjects = function() {
  this.asteroids.forEach(function(el) { el.move(); });
};

Asteroids.Game.prototype.wrap = function (pos) {
  var newPos = pos;
  if (pos[0] < 0 || pos[0] > Asteroids.Game.DIM_Y) {
    newPos[0] = Math.abs(pos[0] - Asteroids.Game.DIM_Y);
  }
  if (pos[1] < 0 || pos[1] > Asteroids.Game.DIM_X) {
    newPos[1] = Math.abs(pos[1] - Asteroids.Game.DIM_X);
  }
  return newPos;
};

Asteroids.Game.prototype.checkCollisions = function () {
  for(var i = 0; i < this.asteroids.length; i++) {
    for(var j = i + 1; j < this.asteroids.length; j++) {
      if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {
        this.remove(j);
        this.remove(i);
      }
    }
  }
};

Asteroids.Game.prototype.step = function () {
  this.moveObjects();
  this.checkCollisions();
};

Asteroids.Game.prototype.remove = function (asteroidIndex) {
  this.asteroids.splice(asteroidIndex, 1)
}
