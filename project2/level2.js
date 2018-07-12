//level 2

console.log("LEVEL 2");

const nameis = [
    "Mr.Fahri",
    "Mr. Abdul",
    "Mrs. Josephhine",
    "Mr. Joseph",
    "Mr. Paul",
    "Mrs. Paula",
    "Mr. Hakim"
];

nameis.forEach(function (element) {
    if (element.charAt(2) === "s") {
        console.log(element + " Female");
    } else {
        console.log(element + " male");
    }
});