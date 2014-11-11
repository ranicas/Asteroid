var Asteroids = window.Asteroids || {};

Asteroids.Bullet = function (pos, game, vel) {
  Asteroids.MovingObject.call(this, { pos: pos,
                                      vel: vel,
                                      radius: Asteroids.Bullet.RADIUS,
                                      color: Asteroids.Util.randomColor(),
                                      game: game });
  this.isWrappable = false;
};

Asteroids.Util.inherits(Asteroids.Bullet, Asteroids.MovingObject);

Asteroids.Bullet.RADIUS = 2;
