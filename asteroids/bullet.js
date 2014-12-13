var Asteroids = window.Asteroids || {};

Asteroids.Bullet = function (shipPos, game, shipVel, shipRad) {
	var angle = Asteroids.Bullet.angle(shipVel)
	var startPos = Asteroids.Bullet.startPos(shipPos, angle, shipRad)
	var vel = Asteroids.Bullet.velocity(shipVel, angle, 10)
	
  Asteroids.MovingObject.call(this, { pos: startPos,
                                      vel: vel,
                                      radius: Asteroids.Bullet.RADIUS,
                                      color: Asteroids.Util.randomColor(),
                                      game: game });
  this.isWrappable = false;
};

Asteroids.Util.inherits(Asteroids.Bullet, Asteroids.MovingObject);

Asteroids.Bullet.RADIUS = 2;

Asteroids.Bullet.angle = function(vec) {
	return Math.atan2(vec[0], vec[1]);
}

Asteroids.Bullet.startPos = function(pos, angle, dis) {
	return [pos[0] + Math.sin(angle) * dis, pos[1] + Math.cos(angle) * dis];
}

Asteroids.Bullet.velocity = function(shipVel, angle, speed) {
	return [shipVel[0] + Math.sin(angle) * speed, shipVel[1] + Math.cos(angle) * speed]
}