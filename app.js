"use strict";
alert("Try-Catch Example");

// ----------------------------try catch 1 --------------------------//

function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division by zero");
    }
    return a / b;
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    console.log("Division operation attempted.");
  }
}
divide(10, 2);
divide(10, 0);

// ---------------------------try catch 2----------------------------------//

const indexValue = parseInt(prompt("Enter The Index Value : "));
let arrayValue = [15, 20, 25, 30, 35, 40, 45, 50, 55, 60];
function getElement(arrayValue, indexValue) {
  try {
    if (indexValue < 0 || indexValue >= arrayValue.length) {
      throw new Error("Index Value Is Not Correct");
    }
    const value = arrayValue[indexValue];
    alert(`The Value is : ${value}`);
    return value;
  } catch (error) {
    alert(error.message);
  }
}
console.log(getElement(arrayValue, indexValue));

// ------------------------------- method function -------------------------//
alert("Method Function Start From Here");
const myData = {
  name: prompt("Enter Your Name :  "),
  birthYear: parseInt(prompt("Enter Your Birth Year :  ")),
  birthMonth: parseInt(prompt("Enter Your Birth Month :  ")),
  calcAge: function () {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;

    let ageYear = currentYear - this.birthYear;
    let ageMonth = currentMonth - this.birthMonth;

    if (ageMonth < 0) {
      ageYear--;
      ageMonth += 12;
    }

    return `${this.name} birth year : ${this.birthYear} and current age : ${ageYear} years, ${ageMonth} months`;
  },
};

console.log(myData.calcAge());
