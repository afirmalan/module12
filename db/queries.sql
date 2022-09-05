USE employee_db;
select *
from department;
select *
from role;
SELECT employee.id,
    employee.first_name,
    employee.last_name,
    role.title,
    department.name,
    role.salary,
    CONCAT(mgr.first_name, " ", mgr.last_name) as manager
FROM employee
    LEFT JOIN role ON role.id = employee.role_id
    LEFT JOIN department ON role.department_id = department_id
    LEFT JOIN employee as mgr ON employee.id - mgr.manager_id