

Function.prototype.inherits = function (superClass) {
  function Surrogate() {};
  Surrogate.prototype = superClass.prototype;
  this.prototype = new Surrogate();
};

function MovingObject () {};

function Ship () {};
Ship.inherits(MovingObject);

function Asteroid () {};
Asteroid.inherits(MovingObject);
