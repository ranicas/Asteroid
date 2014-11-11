var Asteroids = window.Asteroids || {};

Asteroids.MovingObject = function (newMovingObject) {
  this.pos = newMovingObject.pos,
  this.vel = newMovingObject.vel,
  this.radius = newMovingObject.radius,
  this.color = newMovingObject.color,
  this.game = newMovingObject.game;
};

Asteroids.MovingObject.prototype.draw = function (ctx) {
  ctx.beginPath();
  ctx.arc(this.pos[1], this.pos[0], this.radius, 0, 2 * Math.PI);
  ctx.fillStyle = this.color;
  ctx.fill();
};

Asteroids.MovingObject.prototype.move = function () {
  this.pos = this.game.wrap([this.pos[0] + this.vel[0],
                                  this.pos[1] + this.vel[1]]);
};

Asteroids.MovingObject.prototype.isCollidedWith = function (otherObject) {
  var distance = Asteroids.Util.distanceBetween(this.pos, otherObject.pos);
  var radii = this.radius + otherObject.radius;
  if (distance <= radii) {
    return true;
  } else {
    return false;
  }
};
