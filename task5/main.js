
function curry(fx) {
  debugger
  var arity = fx.length;
  console.log(arity)
  return function f1() {
    var args = Array.prototype.slice.call(arguments, 0);
    console.log(args.length)
    if (args.length >= arity) {
      return fx.apply(null, args);
    }
    else {
      return function f2() {
        var args2 = Array.prototype.slice.call(arguments, 0);
        return f1.apply(null, args.concat(args2)); 
      }
    }
  };
}

var multiply = curry(function(w, x, y, z) {
    return w*x*y*z;
  });

 console.log(sumFour(1)(3)(3)(3));