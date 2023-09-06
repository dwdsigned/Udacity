/*
 * Programming Quiz: Back to School
 *
 * Write a switch statement to set the average salary of a person based on their type of completed education.
 *
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `education`, and `salary`
 * - Your code should include a switch statement
 * - Your code should produce the expected output
 */
 
// change the value of `education` to test your code
const education = "no high school diploma";

// set the value of this based on a person's education
let salary = 0;

// your code goes here

switch (education) {
  case "no high school diploma":
    salary = 25636;
  case "high school diploma":
    salary = 35256;
  case "Associate's degree":
    salary = 41496;
  case "Bachelor's degree":
    salary = 59124;
  case "Master's degree":
    salary = 69732;
  case "Professional degree":
    salary = 89960;
  case "Doctoral degree":
    salary = 84396;
}

console.log("In 2015, a person with a(n) "+education+" earned an average of $"+salary.toLocaleString("en-US")"+/year."
