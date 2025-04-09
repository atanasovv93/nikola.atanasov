--  Creating Tables

CREATE TABLE IF NOT EXISTS users (
	id  INTEGER,
	username VARCHAR(50),
	email VARCHAR(40)
);

CREATE TABLE IF NOT EXISTS products (
	id INTEGER,
	name VARCHAR(100),
	price DECIMAL(10, 2)
);

-- Selecting table data

SELECT * FROM users;
SELECT * FROM customers;
SELECT * FROM products;

-- Updating table data

ALTER TABLE users
ADD COLUMN phone VARCHAR(15);

ALTER TABLE users
DROP COLUMN phone;

ALTER TABLE users
RENAME COLUMN username TO user_name;

ALTER TABLE users
RENAME TO customers;

-- Deleting tables
DROP TABLE IF EXISTS customers;

DROP TABLE IF EXISTS
	products,
	users;

-- Inserting Data

CREATE TABLE books (
	id INTEGER,
	title VARCHAR(100),
	description TEXT,
	price DECIMAL(6,2),
	page_count INTEGER,
	is_hardcover BOOLEAN,
	publication_date DATE
)

INSERT INTO books VALUES 
	(1, 'Book 1', 'Nice Book', 19.99, 120, true, '2025-02-04');


SELECT * FROM books;

INSERT INTO books VALUES 
	(2, 'Book 2', 'GOOD Book', 29.99, 120, true, '2025-02-04'),
	(3, 'Book 3', 'VERY GOOD BOOKS', 49.99, 120, true, '2025-02-04');

INSERT INTO books (id, title, price)
			VALUES (4, 'Book 4', 12.30);


INSERT INTO books (id, title, description, price)
			VALUES (5, 'Book 4', 'some desc', 12.30),
				   (6, 'Book 5', NULL, 12.30);


INSERT INTO books (id, title) VALUES ('dsdas', 12312)
INSERT INTO books (id, price) VALUES (321, 12.83)

-- Update Data

UPDATE books
SET descriptions = 'fixed'
WHERE id = 4

UPDATE books
set
	price = 10.99,
	page_count = 100
WHERE id = 2


UPDATE books
SET description = 'cheap book'
WHERE price < 13

-- Delete Value

DELETE FROM books 
WHERE id = 321;

-- AUTOINCREMENT ID

CREATE TABLE products (
	id SERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL
)

DROP TABLE products

INSERT INTO products (name) VALUES ('t-shirt'), ('book'), ('blanked');
INSERT INTO products (name) VALUES ('car');
INSERT INTO products (name) VALUES ('test');


SELECT * FROM products

