const buildDepartment = require("./departmentC");
const buildEmployee = require("./employeeC");
const buildRole = require("./roleC");



const departmentsArray = require("../db/departments");
const employeesArray = require("../db/employees");
const rolesArray = require("../db/roles");

function selection (answer){

    if (answer.action == "view all departments"){
        console.table(departmentsArray);
    }else if(answer.action == "view all employees"){
        console.table(employeesArray);
    }else if(answer.action == "view all roles"){
        console.table(rolesArray);
    }else if(answers.action == "add a department"){

        var department_id = departmentsArray.length + 1;
        var department_name = answers.addDepartment.name;

        var newDepartment = new buildDepartment(department_id,  department_name);

        var deptTempArray = departmentsArray;
        deptTempArray = deptTempArray.push(Object.entries(newDepartment));
        
    }
}
