//this is 2nd function
function checkValue(val) {
  if (val <= 50 && val >= 25) {
    return "Yes";
  }
  return "No";
}

console.log(checkValue(20));

// this is 1st function
function checkEqual(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(checkEqual(3));

//this is 3rd function
function chainToSwitch(val) {
  let result = "";

  switch (val) {
    case "bob":
      result = "Marley";
      break;
    case 42:
      result = "The Answer";
      break;
    case 1:
      result = "There is no #1";
      break;
    case 99:
      result = "Missed me by this much!";
      break;
    case 7:
      result = "Ate Nine";
      break;
    default:
      result = "nothing in input";
      break;
  }

  return result;
}

console.log(chainToSwitch(99));

//arrays
//0,1,2,3,4,.........5........
const x = [1, 2, 3, 4, 5, "this is a string"];
console.log(x);
x[5] = 6;
x.push(7)
x.unshift(0)
x.shift()


console.log(x)
for (let i = 0; i < x.length; i++) {
  console.log(x[i] * 2);
}
