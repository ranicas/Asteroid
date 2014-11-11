var Asteroids = window.Asteroids || {};

Asteroids.Asteroid = function (pos, game) {
  Asteroids.MovingObject.call(this, { pos: pos,
                                      vel: Asteroids.Util.randomVec(3),
                                      radius: Asteroids.Asteroid.RADIUS,
                                      color: Asteroids.Util.randomColor(),
                                      game: game })
};

Asteroids.Util.inherits(Asteroids.Asteroid, Asteroids.MovingObject);

Asteroids.Asteroid.RADIUS = 30
