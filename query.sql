SELECT * FROM role, department
JOIN department ON role.department = department_id;

SELECT * FROM employee, role
JOIN role ON employee.role = role_id;

SELECT employee.id, x.manager_id FROM employee
INNER JOIN employee AS x
ON employee.manager_id = x.id;
