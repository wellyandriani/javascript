//level 4
console.log("LEVEL 4");

const names1 = ["Mr. Fahri", "Mr. Abdul", "Mrs. Josephhine"];
const names2 = ["Mr. Joseph", "Mr. Paul", "Mrs. Paula", "Mr. Hakim"];

Array.prototype.push.apply(names1,names2);

console.log(names1);
console.log(names2);
