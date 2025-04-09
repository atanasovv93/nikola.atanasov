CREATE TABLE sales (
    id INTEGER,
    product_name VARCHAR(100),
    category VARCHAR(50),
    sale_date DATE,
    amount DECIMAL(8,2),
    quantity INTEGER
);
 
-- Insert sample data
INSERT INTO sales VALUES
    (1, 'Laptop', 'Electronics', '2024-01-15', 1200.00, 1),
    (2, 'Mouse', 'Electronics', '2024-01-15', 25.99, 2),
    (3, 'Desk', 'Furniture', '2024-01-16', 299.99, 1),
    (4, 'Laptop', 'Electronics', '2024-01-17', 1200.00, 2),
    (5, 'Chair', 'Furniture', '2024-01-17', 199.99, 4),
    (6, 'Mouse', 'Electronics', '2024-01-18', 25.99, 3);

	-- Basic GROUP BY 
SELECT category, COUNT(*) AS total_sales
FROM sales
GROUP BY category

	-- Multiple columns grouping
SELECT category, product_name, COUNT(*) as times_sold
FROM sales
GROUP BY category, product_name

	-- GROUP By with aggregate functions
SELECT 
	product_name,
	SUM(amount) AS total_amount,
	SUM(quantity) AS total_quantity,
	COUNT(*) AS number_of_sales,
	AVG(amount) AS average_sale,
	MAX(amount) AS highest_sale,
	MIN(amount) AS lowest_sale
FROM sales
GROUP BY product_name;

	-- GROUP BY with date
SELECT
	sale_date,
	SUM(amount) as dialy_total
FROM sales
GROUP BY sale_date;


	-- Basic HAVING

SELECT 
	category,
	COUNT(*) as sale_count
FROM sales
GROUP BY category
HAVING COUNT(*) > 2


SELECT
	product_name,
	SUM(amount) as total_sales
FROM sales
GROUP BY product_name
HAVING SUM(amount) > 1000

	-- Multiple conditions in HAVING

SELECT 
	category,
	COUNT(*) as sale_count,
	SUM(quantity) as total_items
FROM sales
GROUP BY category
HAVING COUNT(*) >= 2 AND SUM(quantity) > 5

	-- Combining WHERE and HAVING

SELECT 
	product_name,
	SUM(amount) as total_amount
FROM sales
WHERE sale_date >= '2024-01-17'
GROUP BY product_name
HAVING SUM(amount) > 100

	-- HAVINGwith multiple aggregate functions

SELECT
	category,
	COUNT(*) as sale_count,
	AVG(amount) as avg_sale
FROM sales
GROUP BY category
HAVING COUNT(*) > 2 AND AVG(amount) > 100
