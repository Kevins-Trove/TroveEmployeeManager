// Employee storage array
let employeesArray = [];

// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  var result;
  var max = 3;
  var msgPrompt;

  var employee ={
    firstName: "",
    lastName: "",
    salary: 0
  }
  
  for (var i=0; i < max; i++){
    msgPrompt = `Employee #${i+1} `;
    
    employee = {
      firstName: "",
      lastName: "",
      salary: 0
    }
    // Get user last name, force input of string
    while (employee.lastName.length == 0){
        result =  prompt(msgPrompt + "Last name", "");
        if (result != null) {
          employee.lastName = result.toLowerCase().charAt(0).toUpperCase() + result.slice(1);
        } else {
          confirm("You must enter a string value");
        }
    }

    // Get user first name, force input of string
    while (employee.firstName.length == 0){
        result =  prompt(msgPrompt + "First name", "");
        if (result != null ) {
          employee.firstName = result.toLowerCase().charAt(0).toUpperCase() + result.slice(1);
          
        } else {
          confirm("You must enter a string value");
        }
    }

    // Get salary, force to value greater than zero.
    while (employee.salary <= 0){
        result =  prompt(msgPrompt + "Employee salary", "");
        if (result != null && !isNaN(result) && result > 0) {
          employee.salary = new Number(result);
        } else {
          confirm("You must enter a value greater than zero.");
        }
    }

    // Add to array 
    employeesArray.push (employee);
  }

    // Sort by last name
  employeesArray.sort(
    function(a, b){
      return a.lastName-b.lastName;
    }
  );

  return employeesArray;
  
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
    let total = 0;
    let average = 0;

    for(let i = 0; i <employeesArray.length; i++){
      total += employeesArray[i].salary;
    }

    average = total / employeesArray.length;
  
    alert("Averge employee salary is " + average.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    }));
  
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
    const rnd = Math.floor(Math.random() * (employeesArray.length -1));

    alert("Random employee of today is: " + employeesArray[rnd].lastName + ",  " + employeesArray[rnd].firstName);
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
