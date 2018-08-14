function multiple(a) {

  var currentSum = a;

  function f(b) {
    
    currentSum *= b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}
console.log(multiple(2)); 
console.log(multiple(2)(3)); 
console.log(multiple(7)(2)(3)); 
console.log(multiple(1)(2)(3)(4)); 
console.log(multiple(0)(1)(2)(3)(4)(5));
console.log(multiple(1)(3)(3)(3));
