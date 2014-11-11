var Asteroids = window.Asteroids || {};

Asteroids.Asteroid = function (pos, game) {
  Asteroids.MovingObject.call(this, { pos: pos,
                                      vel: Asteroids.Util.randomVec(3),
                                      radius: Asteroids.Asteroid.RADIUS,
                                      color: Asteroids.Util.randomColor(),
                                      game: game })
};

Asteroids.Util.inherits(Asteroids.Asteroid, Asteroids.MovingObject);

Asteroids.Asteroid.RADIUS = 30;

Asteroids.Asteroid.prototype.collideWith = function (otherObject) {
  if (otherObject instanceof Asteroids.Ship) {
    otherObject.relocate();
  } else if (otherObject instanceof Asteroids.Bullet) {
    game = this.game;
    game.remove(this);
    game.remove(otherObject);
  }
};
