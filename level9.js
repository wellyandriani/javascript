//level 9
console.log("LEVEL 9");

function test(old) {
    if (old <= 16) {
      return "You are still a teenager";
    } else if (old <= 20) {
      return "You're an adult";
    }else{
        return "you are elderly"
    }
  }
  
  console.log(test(18));
  