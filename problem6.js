/** Problem 06 :  (Current Salary )  */
var experience = 40;
var startingSalary = 30000;
//write your code here
var increasePerYear = 0.05;

var currentSalary = startingSalary * (1 + increasePerYear) ** experience;

console.log(currentSalary.toFixed(2));