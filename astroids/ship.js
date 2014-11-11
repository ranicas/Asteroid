var Asteroids = window.Asteroids || {};

Asteroids.Ship = function (pos, game) {
  Asteroids.MovingObject.call(this, { pos: pos,
                                      vel: [0, 0],
                                      radius: Asteroids.Ship.RADIUS,
                                      color: Asteroids.Util.randomColor(),
                                      game: game })
};

Asteroids.Util.inherits(Asteroids.Ship, Asteroids.MovingObject);

Asteroids.Ship.RADIUS = 20

Asteroids.Ship.prototype.relocate = function () {
  this.pos = Asteroids.Game.randomPosition();
  this.vel = [0, 0]
};

Asteroids.Ship.prototype.power = function(impulse) {
  this.vel[0] += impulse[0];
  this.vel[1] += impulse[1];
};

Asteroids.Ship.prototype.draw = function (ctx) {
  ctx.beginPath();
  ctx.arc(this.pos[1], this.pos[0], this.radius, 0, 2 * Math.PI);
  ctx.fillStyle = Asteroids.Util.randomColor();
  ctx.fill();
  // ctx.lineWidth = 5;
 //  ctx.strokeStyle = Asteroids.Util.randomColor();
 //  ctx.stroke();
};

Asteroids.Ship.prototype.fireBullet = function() {
  var bulletVel = [this.vel[0] + 15, this.vel[1] + 15]
  var bullet = new Asteroids.Bullet(this.pos, this.game, bulletVel);
  this.game.bullets.push(bullet);
}
