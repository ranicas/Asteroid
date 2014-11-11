var Asteroids = window.Asteroids || {};

Asteroids.Util = function () {};

Asteroids.Util.inherits = function (subClass, superClass) {
  function Surrogate() {};
  Surrogate.prototype = superClass.prototype;
  subClass.prototype = new Surrogate();
};

Asteroids.Util.randomVec = function (length) {
  return [Asteroids.Util.randomGen(length, .5),
          Asteroids.Util.randomGen(length, .5)];
};

Asteroids.Util.randomGen = function (max, scale) {
  var scale = scale || 0
  return Math.floor((Math.random() - scale) * max);
};

Asteroids.Util.randomColor = function () {
  return '#' + (Math.floor(Math.random() * 16777215)).toString(16);
};

Asteroids.Util.distanceBetween = function (pos1, pos2) {
  return Math.sqrt((pos1[0] - pos2[0]) * (pos1[0] - pos2[0]) + (pos1[1] - pos2[1]) * (pos1[1] - pos2[1]))
}