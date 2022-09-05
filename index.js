const inquirer = require("inquirer")
const db = require("./config/connection")
require("console.table")

db.connect(() => {
    menu()
})
/*
view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
*/
const menuQuestion = [
    {
        type: "list",
        name: "menu",
        message: "choose the following option:",
        choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee"]

    }

]
const employeeAddQuestions = [
    {
        type: "input",
        name: "first_name",
        message: "What is your first name?"
    },
    {
        type: "input",
        name: "last_name",
        message: "What is your last name?"
    },

]

function menu() {
    inquirer.createPromptModule(menuQuestion)
        .then(response => {
            if (response === "view all employees") {
                viewEmployees()
            }
            else if (response === "view all roles") {
                viewRoles()
            }
            else if (response === "view all departments") {
                viewDepartment()
            }
            else if (response === "add a department") {
                addDepartment()
            }
            else if (response === "add a role") {
                addRole()
            }
            else if (response === "add a employee") {
                addEmployee()
            }
            else {
                updateEmployee()
            }
        })

}

function viewEmployees() {
    db.query(`
SELECT employee.id, employee.first_name, employee.last_name, 
role.title, department.name, role.salary, 
CONCAT(mgr.first_name," ", mgr.last_name) as manager
FROM employee
LEFT JOIN role ON role.id= employee.role_id
LEFT JOIN department ON role.department_id=department_id
LEFT JOIN employee as mgr ON employee.id- mgr.manager_id
`, (err, data) => {
 
    console.table(data)
 
        menu()
 
    })
}

function viewRoles() {

}

function viewDepartment() {

}

function addEmployee() {

}

function addRole() {

}
function addDepartment() {

}

function updateEmployee() {

}