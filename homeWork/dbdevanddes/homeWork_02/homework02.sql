-- HomeWork 02

SELECT * 
FROM movies 
WHERE EXTRACT(YEAR FROM release_date) = 2019;

SELECT * 
FROM actors 
WHERE nationality = 'British';

SELECT * 
FROM movies 
WHERE rating = 'PG-13';

SELECT * 
FROM directors 
WHERE nationality = 'American';

SELECT * 
FROM movies 
WHERE duration_minutes > 150;

SELECT * 
FROM actors 
WHERE last_name = 'Pitt';

SELECT * 
FROM movies 
WHERE budget > 100000000;

SELECT * 
FROM reviews 
WHERE rating = 5;

SELECT * 
FROM movies 
WHERE language = 'English';

SELECT * 
FROM production_companies 
WHERE headquarters LIKE '%California%';

-- 2/2

SELECT m.title, d.first_name, d.last_name
FROM movies m
JOIN directors d ON m.director_id = d.director_id;

SELECT a.first_name, a.last_name, m.title
FROM actors a
JOIN cast_members cm ON a.actor_id = cm.actor_id
JOIN movies m ON cm.movie_id = m.movie_id;

SELECT m.title, g.name AS genre
FROM movies m
JOIN movie_genres mg ON m.movie_id = mg.movie_id
JOIN genres g ON mg.genre_id = g.genre_id;

SELECT u.username, m.title, r.rating, r.review_text
FROM users u
JOIN reviews r ON u.user_id = r.user_id
JOIN movies m ON r.movie_id = m.movie_id;

SELECT m.title, ml.city, ml.country, ml.specific_location
FROM movies m
JOIN movie_locations ml ON m.movie_id = ml.movie_id;

SELECT m.title, pc.name AS production_company
FROM movies m
JOIN movie_production_companies mpc ON m.movie_id = mpc.movie_id
JOIN production_companies pc ON mpc.company_id = pc.company_id;

SELECT a.first_name, a.last_name, aw.name AS award_name
FROM actors a
JOIN actor_awards aa ON a.actor_id = aa.actor_id
JOIN awards aw ON aa.award_id = aw.award_id;

SELECT m.title, aw.name AS award_name
FROM movies m
JOIN movie_awards ma ON m.movie_id = ma.movie_id
JOIN awards aw ON ma.award_id = aw.award_id;

SELECT u.username, m.title
FROM users u
JOIN user_watchlist uw ON u.user_id = uw.user_id
JOIN movies m ON uw.movie_id = m.movie_id;

SELECT m.title, mr.domestic_revenue, mr.international_revenue
FROM movies m
JOIN movie_revenues mr ON m.movie_id = mr.movie_id;

-- 3/3

SELECT m.title, d.first_name, d.last_name
FROM movies m
JOIN directors d ON m.director_id = d.director_id
WHERE m.rating = 'R';

SELECT m.title, g.name AS genre
FROM movies m
JOIN movie_genres mg ON m.movie_id = mg.movie_id
JOIN genres g ON mg.genre_id = g.genre_id
WHERE EXTRACT(YEAR FROM m.release_date) = 2019;

SELECT a.first_name, a.last_name, m.title
FROM actors a
JOIN cast_members cm ON a.actor_id = cm.actor_id
JOIN movies m ON cm.movie_id = m.movie_id
WHERE a.nationality = 'American';

SELECT m.title, pc.name AS production_company
FROM movies m
JOIN movie_production_companies mpc ON m.movie_id = mpc.movie_id
JOIN production_companies pc ON mpc.company_id = pc.company_id
WHERE m.budget > 100000000;

SELECT m.title, d.first_name, d.last_name
FROM movies m
JOIN movie_locations ml ON m.movie_id = ml.movie_id
JOIN directors d ON m.director_id = d.director_id
WHERE ml.city = 'London';

SELECT m.title, a.first_name, a.last_name
FROM movies m
JOIN movie_genres mg ON m.movie_id = mg.movie_id
JOIN genres g ON mg.genre_id = g.genre_id
JOIN cast_members cm ON m.movie_id = cm.movie_id
JOIN actors a ON cm.actor_id = a.actor_id
WHERE g.name = 'Horror';

SELECT m.title, u.username, r.review_text
FROM movies m
JOIN reviews r ON m.movie_id = r.movie_id
JOIN users u ON r.user_id = u.user_id
WHERE r.rating = 5;

SELECT d.first_name, d.last_name, m.title
FROM directors d
JOIN movies m ON m.director_id = d.director_id
WHERE d.nationality = 'British';

SELECT m.title, g.name AS genre
FROM movies m
JOIN movie_genres mg ON m.movie_id = mg.movie_id
JOIN genres g ON mg.genre_id = g.genre_id
WHERE m.duration_minutes > 180;

SELECT m.title, d.first_name, d.last_name
FROM movies m
JOIN movie_awards ma ON m.movie_id = ma.movie_id
JOIN awards aw ON ma.award_id = aw.award_id
JOIN directors d ON m.director_id = d.director_id
WHERE aw.name = 'Oscar';