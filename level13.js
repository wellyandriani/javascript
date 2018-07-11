// level 13
console.log("LEVEL 13");

var min = 10;
var max = 50;

function getrandomnumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getrandomnumber(min, max));