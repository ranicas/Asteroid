function sum() {
  var nums = Array.prototype.slice.call(arguments);
  var result = 0;
  nums.forEach(function (num) {
    result += num;
  });
  return result;
}


Function.prototype.myBind = function (obj) {
  var funct = this;
  var args = Array.prototype.slice.call(arguments, 1);
  return (function () {
    funct.apply(obj, args);
  });
}

function curriedSum(numArgs) {
  var numbers = [];
  var fun = function(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      var result = 0;
      numbers.forEach(function(num) {
        result += num;
      })
      return result;
    } else {
      return fun;
    }
  }

  return fun;
}

Function.prototype.curry = function (numArgs) {
  var args = []
  var func = this
  var obj = this.caller
  var _curry = function (arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return func.apply(obj, args);
    } else {
      return _curry;
    }
  };

  return _curry;
};
