// level 16
console.log("LEVEL 16")
 
var bb = 9;
var cc = 8;

    function add(bb, cc){
        return bb + cc;
  }
  function subtract(bb, cc){
        return bb - cc;
  }
  function multiply(bb, cc){
      return bb * cc;
  }
  function divide(bb, cc){
      return bb / cc;
  }
  function modulo(bb, cc){
      return bb % cc;
  }

  add(substract(2,1), divide(4,3))

console.log(add(bb, cc));
console.log(subtract(bb, cc));
console.log(multiply(bb, cc));
console.log(divide(bb, cc));
console.log(modulo(bb, cc));