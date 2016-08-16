var randomNum = function() {
  var seed = Math.floor(Math.random()*500);
  return (seed % 2 == 0) ? seed : -seed;
};
var times = function(n, iterator) {
    var accum = Array(Math.max(0, n));
      for (var i = 0; i < n; i++) accum[i] = iterator.call();
        return accum;
};
var randomArray = function(num) {
  return times(num, randomNum);
};
console.log(['[', randomArray(10000).join(', '), ']'].join(''));
