// Setup
function phoneticLookup(val) {
  let result = "";

  const lookup = {
    "alpha": "Adams", 
    "bravo": "Boston", 
    "charlie": "Chicago", 
    "delta": "Denver", 
    "echo": "Easy", 
    "foxtrot": "Frank"
  }

  const valLookup = lookup[val];

  result = valLookup;

  return result;


  // Only change code below this line
  // switch(val) {
  //   case "alpha":
  //     result = "Adams";
  //     break;
  //   case "bravo":
  //     result = "Boston";
  //     break;
  //   case "charlie":
  //     result = "Chicago";
  //     break;
  //   case "delta":
  //     result = "Denver";
  //     break;
  //   case "echo":
  //     result = "Easy";
  //     break;
  //   case "foxtrot":
  //     result = "Frank";
  // }

  // Only change code above this line
  // return result;
}

phoneticLookup("charlie");