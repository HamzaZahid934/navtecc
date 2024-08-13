function Calculator(num1, num2, operation) {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return "Error: Division by zero!";
      }
    default:
      return "Invalid operation!";
  }
}

function calculateAge(birthYear) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;

  let ageCategory;

  switch (true) {
    case age < 0:
      return "Error: Future birth year is not valid!";
    case age >= 0 && age <= 12:
      ageCategory = "Child";
      break;
    case age >= 13 && age <= 17:
      ageCategory = "Teenager";
      break;
    case age >= 18 && age <= 64:
      ageCategory = "Adult";
      break;
    case age >= 65:
      ageCategory = "Senior";
      break;
    default:
      return "Invalid input!";
  }

  return `You are ${age} years old, categorized as a ${ageCategory}.`;
}

function calculateBMI(weight, height) {
  const bmi = weight / (height * height);

  switch (true) {
    case bmi < 18.5:
      return `BMI: ${bmi.toFixed(2)} - Underweight`;
    case bmi >= 18.5 && bmi < 24.9:
      return `BMI: ${bmi.toFixed(2)} - Normal weight`;
    case bmi >= 25 && bmi < 29.9:
      return `BMI: ${bmi.toFixed(2)} - Overweight`;
    case bmi >= 30:
      return `BMI: ${bmi.toFixed(2)} - Obesity`;
    default:
      return "Invalid input!";
  }
}

function factorialIterative(n) {
  if (n <= 0) {
    return "Error: Factorial of a negative number and zero doesn't exist!";
  }

  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}