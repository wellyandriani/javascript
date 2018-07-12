//level 3

console.log("LEVEL 3");

const namelist = [
    "Mr.Fahri",
    "Mr. Abdul",
    "Mrs. Josephhine",
    "Mr. Joseph",
    "Mr. Paul",
    "Mrs. Paula",
    "Mr. Hakim"  
];
const displayName = (query) => {
    return namelist.filter((name)=>
    name.toLowerCase().indexOf(query.toLowerCase())> -1
);
}

console.log(displayName("pa"));
console.log(displayName("ep"));