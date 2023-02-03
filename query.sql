SELECT role.department_id

SELECT employee.id, x.manager_id FROM employee
INNER JOIN employee AS x
ON employee.manager_id = x.id;
