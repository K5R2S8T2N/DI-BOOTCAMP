SELECT first_name AS First, last_name AS Last FROM employees

SELECT DISTINCT department_id FROM employees

SELECT * FROM employees ORDER BY first_name DESC

SELECT first_name, last_name, salary, (salary * 0.15) AS PF FROM employees

SELECT employee_id, first_name, last_name, salary FROM employees ORDER BY salary

Write a query to get the total sum of all salaries paid to the employees.
