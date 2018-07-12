//level 9
console.log("LEVEL 9");

function test(age) {
    if (age <= 16) {
      return "You are still a teenager";
    } else if (age <= 20) {
      return "You're an adult";
    }else{
        return "you are elderly"
    }
  }
  
  console.log(test(18));
  