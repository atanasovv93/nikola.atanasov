CREATE TABLE students (
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	email VARCHAR(100) NOT NULL,
	age SMALLINT

)

SELECT * FROM studen
ts
	-- Valid Data insert
INSERT INTO students VALUES (1, 'John', 'Doe', 'johndoe@student.mk', 20)

INSERT INTO students VALUES (2, 'Jane', NULL, 'jane@gmail.com')
INSERT INTO students VALUES (2, 'Jane', 'Doe', NULL)


CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	email VARCHAR(50) NOT NULL UNIQUE,
	username VARCHAR(50) NOT NULL UNIQUE
)

SELECT * FROM users

INSERT INTO users VALUES (1, 'johndoe1@students.mk', 'john1')
INSERT INTO users VALUES (2, 'johndoe2@students.mk', 'john2')
INSERT INTO users VALUES (3, 'johndoe3@students.mk', 'john3')


CREATE TABLE products_with_constraints(
	id SERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	price DECIMAL(8,2) CHECK (price > 0),
	stock_count INTEGER CHECK (stock_count >= 0),
	category VARCHAR(50) CHECK (category IN ('Electronics', 'Furniture', 'Appliances'))
);

SELECT * FROM products_with_constraints

INSERT INTO products_with_constraints VALUES (1, 'TV', 100, 1, 'Electronics')

INSERT INTO products_with_constraints VALUES (2, 'Playstation', 10, 2, 'Appliances')


CREATE TABLE orders (
	id SERIAL PRIMARY KEY,
	product_name VARCHAR(100) NOT NULL,
	quantity INTEGER DEFAULT 1,
	order_date DATE DEFAULT CURRENT_DATE,
	status VARCHAR(20) DEFAULT 'Pending'
)


SELECT * FROM orders

INSERT INTO orders (product_name) VALUES ('banana')