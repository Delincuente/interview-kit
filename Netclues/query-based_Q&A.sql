--> 1. SQL -> Get the second highest salary for all employees
SELECT id, name, salary
	FROM (
		SELECT id, name, salary,
		DENSE_RANK() OVER (ORDER BY salary DESC) AS salary_rank
		FROM employee
	) AS ranked
    WHERE salary_rank = 2;

--> SELECT id, name, salary
	FROM employee
	WHERE salary = (
		SELECT MAX(salary) 
		FROM employee
		WHERE salary < (SELECT MAX(salary) FROM employee)
	);