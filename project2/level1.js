
//level 1

console.log("LEVEL 1");

const name = [
    "Mr.Fahri",
    "Mr. Abdul",
    "Mrs. Josephhine",
    "Mr. Joseph",
    "Mr. Paul",
    "Mrs. Paula",
    "Mr. Hakim"  
];

name.forEach(list=>{
    console.log(list)
});

const displayMisterTren = function (array){
    const filtered = array.filter(function (item){
        return item.charAt(2) !== "s"
    })
}

const displayMister = (array) => {
    const filtered = array.filter(item => item.charAt(2)!== "s")
    console.log(filtered);
}
const displayMistress = (array) => {
    const filtered = array.filter(item => item.charAt(2) === "s")
    console.log(filtered);
}

displayMister(name)
displayMistress(name)
