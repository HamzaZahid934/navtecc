//for in
const person = {
  name: "Hamza",
  age: 25,
  city: "Lahore",
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}

//for of
const colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}

//spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArray = [...arr1, ...arr2];
console.log(combinedArray);

//rest
function sum(first, second, ...others) {
  let total = first + second;
  for (let num of others) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5));

//map
const numbers = [1, 2, 3, 4];
const squares = numbers.map((num) => num * num);

console.log(squares);

//recursive
const nestedObject = {
  name: "Alice",
  age: 25,
  address: {
    city: "Wonderland",
    zip: "12345",
  },
  hobbies: ["reading", "coding"],
};

function flattenObjectValues(obj) {
  let result = [];
//recursive function
  function recurse(current) {
    if (typeof current === "object" && current !== null) {
      const values = Object.values(current);
      for (const value of values) {
        if (typeof value === "object" && value !== null) {
          recurse(value); //recursive function called here
        } else {
          result.push(value);
        }
      }
    }
  }

  recurse(obj);
  return result;
}
const flatvalues = flattenObjectValues(nestedObject);
console.log(flatvalues);
