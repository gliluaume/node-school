'use strict';

function foo() {
  quux = 'global hello';
  var bar;
  
  function zip() {
    var quux;
    bar = true; // closure : close over "bar" variable
  }

  return zip;
}
