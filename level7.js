//level 7
console.log("LEVEL 7");

let title = "wElly andriani"
function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

console.log(toTitleCase(title));