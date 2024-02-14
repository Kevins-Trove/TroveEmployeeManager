// let employeesArray = [];

// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
 /*
  
  let result = new Map();
  result.set("lastName", "")
  result.set("firstName", "")
  result.set("salary", 0)
  let lastName = "", firstName = "", salary = 0;

  // Get user last name and prompt for 
  //while (result.lastName.length == 0){
    result.lastName = prompt("Last name", "");
    
  //}
  
  //while (firstName.length == 0){
    result.firstName = prompt("First name", "");
  //}

  //while (salary <= 0){
    result.salary = prompt("Employee salary", "");
  //}

  return result;
  */
  let item = new Map();
  let array = [];
  
  item.set("lastName", "Roper");
  item.set("firstName", "Kevin");
  item.set("salary", 100000);
  array.push(item);

  item.lastName = "Smith";
  item.firstName = "Jane";
  item.salary = 80000;
  array.push(item);

  item.lastName = "Relic";
  item.firstName = "The";
  item.salary = 75000;
  array.push(item);

  return array;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let total = 0;

  for(let i = 0; i <employeesArray.length; i++){
    total += employeesArray[i].salary;
  }

  return total / employeesArray.length;


}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const rnd = Math.floor(Math.random() * employeesArray.length -1);
  return employeesArray[rnd];
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
