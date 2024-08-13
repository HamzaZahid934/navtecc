const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];

//concat
const array3 = array1.concat(array2);
console.log(array3);

//join
console.log(array1.join("+"));

//index of
console.log(array1.indexOf(3));

//pop and push
console.log(array2.pop());
console.log(array2.push(15));

//reversed
console.log(array1.reverse());

//shift and unshift
console.log(array1.shift());
console.log(array1.unshift());

//slice
const animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log(animals.slice(2, 5));

//sort
const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);

//splice
const month = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
console.log(month);

//to string
console.log(array1.toString());

//flat
const arr2 = [0, 1, [2, [3, [4, 5]]]];
console.log(arr2.flat());

//filter
const words = ["spray", "elite", "exuberant", "destruction", "present"];
const result = words.filter((word) => word.length > 6);
console.log(result);

const arr3 = ["a", "b", "c", "d", "e"];
arr3.map((value, index, wholearray) => {
  console.log(`this is index${index}:${value}`);
  console.log(wholearray);
});
//destructuring
const object = {
  username: "hamza",
  email: "zahidhamza999@gmail.com",
  website: "www.w3school.com",
  phone: { network: "zong", cellnum: "+92 333-1111111" },
  Age: { number: "25", agegroup: "adult" },
  address: { city: "LAhore", street: "abc,lahore,pkr." },
};

const {
  username,
  email,
  website,
  phone: { network, cellnum },
  address: { city, street },
  Age: { number, agegroup },
} = object;
console.log(
  username,
  email,
  website,
  city,
  street,
  number,
  agegroup,
  network,
  cellnum
);
//spread
const array5 = [4, 5, 6];
const array4 = [1, 2, 3, ...array5];
console.log(array4);

const array6 = [...array4, ...array5];
console.log(array6);

function add(...number) {
  let result = 0;
  for (let i = 0; i < number.length; i++) {
    result += number[i];
  }
  return result;
}
console.log(add(1, 2, 3));
//reduce
const array7 = [5, 6, "9", 8, 9];
const initialvalue = 0;
const reducevalue = array7.reduce((accumlator, currentvalue) => {
  console.log("acc:", accumlator, "cv:", currentvalue);
  return accumlator + currentvalue;
}, initialvalue);
console.log(reducevalue);
