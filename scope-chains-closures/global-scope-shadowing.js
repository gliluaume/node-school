//'use strict';

// var, let vs global scope + shadowing : masquer une variable du outter scope dans le inner scope
function foo() {
  quux = 'global hello';
  var bar;
  function zip() {
    var quux;
  }
}
