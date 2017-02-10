'use strict';

// lexical scope chain

function foo() {
  var bar;
  function zip() {
    var quux;
  }
}
