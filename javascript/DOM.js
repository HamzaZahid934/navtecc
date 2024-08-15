// const newdiv = document.createElement("div");
// newDiv.id = "newDiv";
// newDiv.className = "new-class";
// newDiv.textContent = "This is a new div element created by JavaScript.";
// document.body.appendChild(newdiv);

// const heading = document.createElement("h1");
// heading.innerText = ""

let closurefunc = () => {
  let count = 0;
  let increament = () => {
    count += 1;
    console.log(count);
  };
  let decreament = () => {
    count -= 1;
    console.log(count);
  };

  return { increament, decreament };
};

let counterfun = closurefunc();
counterfun.increament();

// callback 
let func = (a, b, callback) => {
  console.log(callback(a, b));
};
let func2 = (a, b) => a + b;
func(1, 2, func2);

((a,b)=>{
 console.log(a*b);
    
})(3,4)