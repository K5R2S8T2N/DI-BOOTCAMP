SELECT name FROM language 

SELECT film.title, film.description, language.name
FROM language
RIGHT OUTER JOIN film
ON language.language_id = film.language_id

SELECT film.title, film.description, language.name
FROM language
LEFT OUTER JOIN film
ON language.language_id = film.language_id;

CREATE TABLE new_film(
id SERIAL PRIMARY KEY,
name VARCHAR(100)
)

INSERT INTO new_film (name)
VALUES ('Casablanca'), ('The Godfather'), ('The Wizard of Oz'), ('Titanic')

INSERT INTO new_film (name)
VALUES ('Chicago North'), ('Dinosaur Secretary'), ('Groove Fiction'), ('Masked Bubble')

CREATE TABLE customer_review(
review_id SERIAL NOT NULL,
film_id INTEGER,
language_id INTEGER,
title VARCHAR(100),
score SMALLINT,
review_text VARCHAR,
last_update DATE,
PRIMARY KEY (review_id),
FOREIGN KEY (film_id) REFERENCES new_film(id) ON DELETE CASCADE,
FOREIGN KEY (language_id) REFERENCES language(language_id)
)

INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update)
VALUES ((SELECT id FROM new_film WHERE name = 'Chicago North'), (SELECT language_id FROM language WHERE name = 'English'), 'Review of Chicago North', 5, 'I enjoyed this film.', '04/07/2021'),
((SELECT id FROM new_film WHERE name = 'Masked Bubble'), (SELECT language_id FROM language WHERE name = 'Japanese'), 'Masked Bubble Review', 8, 'This film was so good.', '11/05/2007'),
((SELECT id FROM new_film WHERE name = 'Titanic'), (SELECT language_id FROM language WHERE name = 'English'), 'My thoughts on the Titanic', 7, 'This movie was too sad.', '12/22/2015')

DELETE FROM new_film WHERE name = 'Chicago North'

SELECT * FROM customer_review

Use UPDATE to change the language of some films. Make sure that you use valid languages.

UPDATE customer_review SET language_id=(SELECT language_id FROM language WHERE name = 'Japanese') WHERE film_id = (SELECT id FROM new_film WHERE name = 'Titanic');
UPDATE customer_review SET language_id=(SELECT language_id FROM language WHERE name = 'Italian') WHERE film_id = (SELECT id FROM new_film WHERE name = 'Masked Bubble');

DROP TABLE customer_review

SELECT COUNT(rental_id) AS number_still_outstanding FROM rental WHERE return_date IS NULL

SELECT film.title
FROM rental
INNER JOIN payment ON rental.rental_id = payment.rental_id
INNER JOIN inventory ON inventory.inventory_id = rental.inventory_id
INNER JOIN film ON film.film_id = inventory.film_id
WHERE rental.return_date IS NULL
ORDER BY payment.amount DESC
LIMIT 30

SELECT film.title
FROM film
INNER JOIN film_actor ON film.film_id = film_actor.film_id
INNER JOIN actor ON actor.actor_id = film_actor.actor_id
WHERE actor.first_name = 'Penelope' AND actor.last_name = 'Monroe' AND film.description ILIKE '%sumo wrestler%'

SELECT film.title
FROM film
INNER JOIN film_category ON film.film_id = film_category.film_id
INNER JOIN category ON category.category_id = film_category.category_id
WHERE film.rating = 'R' AND film.length < 60 AND category.name = 'Documentary'

SELECT film.title
FROM film
INNER JOIN inventory ON film.film_id = inventory.film_id
INNER JOIN rental ON inventory.inventory_id = rental.inventory_id
INNER JOIN customer ON customer.customer_id = rental.customer_id
WHERE customer.first_name = 'Matthew' AND customer.last_name = 'Mahan' AND film.rental_rate > 4 AND rental.return_date between '07/28/2005' and '08/01/2005'

SELECT film.title
FROM film
INNER JOIN inventory ON film.film_id = inventory.film_id
INNER JOIN rental ON inventory.inventory_id = rental.inventory_id
INNER JOIN customer ON customer.customer_id = rental.customer_id
WHERE customer.first_name = 'Matthew' AND customer.last_name = 'Mahan' AND (film.description ILIKE '%boat%' OR film.title ILIKE '%boat%')
ORDER BY film.replacement_cost DESC
LIMIT 1



