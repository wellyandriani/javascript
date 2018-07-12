//level 5
console.log("LEVEL 5");

const namee = [
    "Mr. Fahri",
    null,
    undefined,
    "Mr. Abdul",
    24,
    "Mrs. Josephhine",
    "Mr. Joseph",
    "Mr. Paul",
    32,
    "Mrs. Paula",
    7,
    22,
    "Mr. Hakim"
];

function remove(array) {
    array.forEach(element => {
        if (typeof element === 'number') {
            console.log(element)
        }
    });
}

remove(namee)