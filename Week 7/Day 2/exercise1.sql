SELECT * FROM items 

SELECT * FROM items ORDER BY item_price ASC

SELECT * FROM items WHERE item_price >= 80

SELECT first_name, last_name
FROM customers
ORDER BY first_name ASC
LIMIT 3

SELECT last_name
FROM customers
ORDER BY last_name DESC