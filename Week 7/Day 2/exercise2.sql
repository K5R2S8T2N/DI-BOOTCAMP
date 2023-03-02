SELECT * FROM customer

SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM customer

SELECT DISTINCT create_date FROM customer 

SELECT * FROM customer ORDER BY first_name DESC

SELECT film_id, title, description, release_year, rental_rate
FROM film
ORDER BY rental_rate ASC

SELECT address, phone FROM address WHERE district = 'Texas'

SELECT * FROM film WHERE film_id = 15 OR film_id = 150

SELECT film_id, title, description, length, rental_rate FROM film WHERE title = 'Apocalypse Flamingos'
SELECT film_id, title, description, length, rental_rate FROM film WHERE title ILIKE 'Ap%'

SELECT * FROM film ORDER BY rental_rate ASC LIMIT 10 

SELECT * FROM film ORDER BY rental_rate ASC OFFSET 10 LIMIT 10 

SELECT customer.first_name, customer.last_name, payment.amount, payment.payment_date
FROM customer
INNER JOIN payment
ON customer.customer_id = payment.customer_id
ORDER BY customer.customer_id ASC

SELECT * FROM film
LEFT OUTER JOIN inventory
ON film.film_id = inventory.film_id
WHERE inventory.inventory_id IS NULL

SELECT DISTINCT city.city, country.country FROM country
INNER JOIN city 
ON country.country_id = city.country_id

SELECT DISTINCT payment.staff_id, customer.customer_id, customer.first_name, customer.last_name, payment.amount, payment.payment_date FROM customer
INNER JOIN payment 
ON customer.customer_id = payment.customer_id
ORDER BY payment.staff_id ASC