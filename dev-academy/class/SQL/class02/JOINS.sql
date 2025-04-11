-- Relation One to One

CREATE TABLE students (
	id SERIAL PRIMARY KEY,
	name VARCHAR(100),
	email VARCHAR(100)
);

CREATE TABLE student_details (
	id SERIAL PRIMARY KEY,
	address VARCHAR(200),
	phone VARCHAR(20),
	student_id INTEGER UNIQUE REFERENCES students(id)
);

INSERT INTO students VALUES
	(1, 'John Doe','john.doe@gmail.com'),
	(2, 'Jannye Doe','jannye.doe@gmail.com')

SELECT * FROM students


INSERT INTO student_details VALUES
	(1, 'GregorryGasse 16/2/12','+43676404040',1)
INSERT INTO student_details VALUES
	(2, 'GregorryGasse 77/2/12','+43676404040',2)
INSERT INTO student_details VALUES
	(3, 'GregorryGasse 78/2/12','+43676404040',3)


SELECT * FROM student_details

DELETE FROM student_details
WHERE student_id = 1


DELETE FROM stundet_details
WHERE id = NULL

UPDATE student_details
SET student_id = 1
WHERE id = 2

-- One to Many / Many to One

CREATE TABLE departments (
	id SERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL
);

CREATE TABLE employees (
	id SERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	department_id INTEGER REFERENCES departments(id)
);

INSERT INTO departments VALUES (1, 'DEV'), (2, 'HR'), (3, 'QA'), (4, 'DevOps');

INSERT INTO employees VALUES (1, 'John', 4), (2, 'Jane', 3), (3, 'Mike', 1), (4, 'Peter', 1);


SELECT * FROM departments

SELECT * FROM employees

CREATE TABLE courses (
	id SERIAL PRIMARY KEY,
	name VARCHAR(100)
);

CREATE TABLE students (
	id SERIAL PRIMARY KEY,
	name VARCHAR(100),
	email VARCHAR(100)
);

CREATE TABLE courses_students (
	course_id INTEGER REFERENCES courses(id),
	student_id INTEGER REFERENCES students(id),
	PRIMARY KEY (course_id, student_id)
);

SELECT * FROM courses_students

INSERT INTO courses VALUES 
	(1, 'NodeJS'),
	(2, 'SQL'),
	(3, 'NestJS')
	
SELECT * FROM courses

INSERT INTO courses_students VALUES
	(2, 1),
	(2, 2)

INSERT INTO courses_students VALUES
	(3, 1),
	(3, 2)

SELECT * FROM students

SELECT * FROM courses

SELECT * FROM courses_students

--  Joins
-- Inner JOIN

SELECT * FROM students
SELECT * FROM student_details


SELECT 
	students.name, 
	student_details.address, 
	student_details.phone
FROM students 
INNER JOIN student_details
	ON student_details.student_id = students.id

-- Above is same as the querry bellow

INSERT INTO students VALUES (4, 'Mike', 'mike@gmail.com')
INSERT INTO student_details VALUES (4, 'GregorryGasse 13', '+43676404040')

SELECT 
	s.name, 
	sd.address, 
	sd.phone
FROM students s
INNER JOIN student_details sd
	ON sd.student_id = s.id


-- OUTER JOIN
--FULL OUTER JOIN

SELECT 
	s.name, 
	sd.address, 
	sd.phone
FROM students s
FULL JOIN student_details sd
	ON sd.student_id = s.id

-- LEFT OUTER JOIN

SELECT 
	s.name, 
	sd.address, 
	sd.phone
FROM students s
LEFT JOIN student_details sd
	ON sd.student_id = s.id

-- RIGHT OUTER JOIN

SELECT 
	s.name, 
	sd.address, 
	sd.phone
FROM students s
RIGHT JOIN student_details sd
	ON sd.student_id = s.id

-- Filltering while joining
SELECT e.id, e.name as employee_name, d.name as deparment_name
FROM employees e
LEFT JOIN departments d
	ON e.department_id = d.id
WHERE e.name ILIKE 'J%'

-- Cross JOIN

SELECT *
FROM students
CROSS JOIN student_details
