const great = (a,b,c) => {
  if(a>b && a>c){
    console.log("a is greater");
   
  } else if(b>a && b>c){
       console.log("b is graeter");
       
  } else if(c>a && c>b){
        console.log("c is greater");
  }
}

great(2,8,6);



const oe = function(num){
      if(num%2 === 0){
            console.log("even");
        
          } else{
                console.log("odd");
            
              }
            }
            
            oe(4);

      
const checkEvenOdd = (num) => {
  console.log(num % 2 === 0 ? "even" : "odd");
};

checkEvenOdd(4);


function calculate(num1, num2, op) {
  switch (op) {
    case '+':
      console.log(`Result: ${num1 + num2}`);
      break;
    case '-':
      console.log(`Result: ${num1 - num2}`);
      break;
    case '*':
      console.log(`Result: ${num1 * num2}`);
      break;
    case '/':
      console.log(`Result: ${num1 / num2}`);
      break;
    case '%':
      console.log(`Result: ${num1 % num2}`);
      break;
    case '**':
      console.log(`Result: ${num1 ** num2}`);
      break;
    default:
      console.log(" Invalid operator");
  }
}

calculate(2, 4, "**");
calculate(2, 4, "*");
calculate(2, 4, "+");
calculate(2, 4, "-");
calculate(2, 4, "%");
calculate(2, 4, "/");

            

const swap = (num1,num2) => {
   console.log("Before swaping : ", num1,num2);
   num1 = num1 + num2;
   num2 = num1 - num2;
   num1 = num1 - num2;
   console.log(num1, num2);
   
}

swap(2,1);

const getpi = () => {
    console.log("3.14");
}
getpi();


// function declaration - substraction
// function expression - addition
// arrow implicit - multiplication
// arrow explicit - division


// Function Declaration - Subtraction
function sub(num1, num2) {
  if (num1 > num2) {
    console.log(num1 - num2);
  } else if (num2 > num1) {
    console.log(num2 - num1);
  } else {
    console.log(0);
  }
}
sub(2, 3);

// Function Expression - Addition
const add = function(a, b) {
  return a + b;
};
console.log(add(3, 2));

//  Arrow Function (Implicit Return) - Multiplication
const mul = (a, b) => a * b;
console.log(mul(2, 2));

// Arrow Function (Explicit Return) - Division
const div = (a, b) => {
  if (b === 0) {
    console.log(" Cannot divide by zero");
  } else {
    console.log(a / b);
  }
};
div(6, 2);

