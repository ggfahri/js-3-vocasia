class Employee {
  // your solution here
}

class Manager extends Employee {
  // your solution here
}

const employee1 = new Employee('Angela', 5000);
const employee2 = new Employee('Luca', 5500);
const employee3 = new Manager('Jonelle', 6500);
const employee4 = new Manager('Rozaliya', 8000);

console.log(employee1.calculateAnnualSalary()); // 60000
console.log(employee2.calculateAnnualSalary()); // 66000
console.log(employee3.calculateAnnualSalary()); // 85800
console.log(employee4.calculateAnnualSalary()); // 105600
