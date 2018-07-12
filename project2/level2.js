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

const displayMisterTren = function (array){
    const filtered = array.filter(function (item){
        return item.charAt(2) !== "s"
    })
}

const displaymister = (array) => {
    const filtered array.filter(item => item.charAt(2)!=="s")
    console.log(filtered);
}
const displaymistress = (array) => {
    const filtered array.filter(item => item.charAt(2) ==="s")
    console.log(filtered);
}

displaymaster(nameis)
displaymistress(nameis)


