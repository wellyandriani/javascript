//level 1

console.log("LEVEL 1");

const names = [
    "Mr.Fahri",
    "Mr. Abdul",
    "Mrs. Josephhine",
    "Mr. Joseph",
    "Mr. Paul",
    "Mrs. Paula",
    "Mr. Hakim"
];

const displayMisterTren = function (array) {
    const filtered = array.filter(function (item) {
        return item.charAt(2) !== "s"
    })
}

const displayMister = (array) => {
    const filtered = array.filter(item => item.charAt(2) !== "s")
    console.log(filtered);
}
const displayMistress = (array) => {
    const filtered = array.filter(item => item.charAt(2) === "s")
    console.log(filtered);
}

displayMister(names)
displayMistress(names)