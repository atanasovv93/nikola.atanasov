-- HomeWork 03

SELECT g.name, COUNT(m.movie_id) AS r_rated_movies
FROM genres g
JOIN movie_genres mg ON g.genre_id = mg.genre_id
JOIN movies m ON mg.movie_id = m.movie_id
WHERE m.rating = 'R'
GROUP BY g.genre_id, g.name
HAVING COUNT(m.movie_id) > 3;


SELECT d.first_name, d.last_name, COUNT(m.movie_id) AS movie_count, SUM(mr.domestic_revenue + mr.international_revenue) AS total_revenue
FROM directors d
JOIN movies m ON d.director_id = m.director_id
JOIN movie_revenues mr ON m.movie_id = mr.movie_id
GROUP BY d.director_id, d.first_name, d.last_name
HAVING COUNT(m.movie_id) >= 2
   AND SUM(mr.domestic_revenue + mr.international_revenue) > 500000000;


SELECT a.first_name, a.last_name, COUNT(DISTINCT g.genre_id) AS genre_count
FROM actors a
JOIN cast_members cm ON a.actor_id = cm.actor_id
JOIN movies m ON cm.movie_id = m.movie_id
JOIN movie_genres mg ON m.movie_id = mg.movie_id
JOIN genres g ON mg.genre_id = g.genre_id
WHERE a.actor_id IN (
    SELECT actor_id
    FROM actor_awards
    GROUP BY actor_id
    HAVING COUNT(*) >= 1)


GROUP BY a.actor_id, a.first_name, a.last_name
HAVING COUNT(DISTINCT g.genre_id) > 2;


SELECT m.title, COUNT(r.review_id) AS review_count, AVG(r.rating) AS avg_rating
FROM movies m
JOIN reviews r ON m.movie_id = r.movie_id
GROUP BY m.movie_id, m.title
HAVING COUNT(r.review_id) > 3 AND AVG(r.rating) > 7;


SELECT pc.name, SUM(mpc.investment_amount) AS total_investment
FROM production_companies pc
JOIN movie_production_companies mpc ON pc.company_id = mpc.company_id
JOIN movies m ON mpc.movie_id = m.movie_id
WHERE EXTRACT(YEAR FROM m.release_date) > 2015
GROUP BY pc.company_id, pc.name
HAVING SUM(mpc.investment_amount) > 100000000;


SELECT ml.country, COUNT(DISTINCT m.movie_id) AS movie_count, SUM(m.budget) AS total_budget
FROM movie_locations ml
JOIN movies m ON ml.movie_id = m.movie_id
GROUP BY ml.country
HAVING COUNT(DISTINCT m.movie_id) > 2 AND SUM(m.budget) > 150000000;

SELECT g.name, AVG(m.duration_minutes) AS avg_duration
FROM genres g
JOIN movie_genres mg ON g.genre_id = mg.genre_id
JOIN movies m ON mg.movie_id = m.movie_id
WHERE EXISTS (
    SELECT 1
    FROM movie_awards ma
    JOIN awards aw ON ma.award_id = aw.award_id
    WHERE ma.movie_id = m.movie_id AND aw.name = 'Oscar')

GROUP BY g.genre_id, g.name
HAVING AVG(m.duration_minutes) > 120;


SELECT EXTRACT(YEAR FROM release_date) AS year, COUNT(*) AS movie_count, AVG(budget) AS avg_budget
FROM movies
GROUP BY EXTRACT(YEAR FROM release_date)
HAVING COUNT(*) > 3 AND AVG(budget) > 50000000;


SELECT a.first_name, a.last_name, COUNT(DISTINCT m.movie_id) AS movie_count, 
       SUM(mr.domestic_revenue + mr.international_revenue) AS total_revenue
FROM actors a
JOIN cast_members cm ON a.actor_id = cm.actor_id
JOIN movies m ON cm.movie_id = m.movie_id
JOIN movie_revenues mr ON m.movie_id = mr.movie_id
GROUP BY a.actor_id, a.first_name, a.last_name
HAVING COUNT(DISTINCT m.movie_id) > 2 
   AND SUM(mr.domestic_revenue + mr.international_revenue) > 200000000;

-- 2/2

CREATE VIEW top_rated_movies AS
SELECT 
    m.title,
    TRUNC(AVG(r.rating), 2) AS average_rating,
    COUNT(r.review_id) AS review_count,
    d.first_name || ' ' || d.last_name AS director
FROM movies m
JOIN reviews r ON m.movie_id = r.movie_id
JOIN directors d ON m.director_id = d.director_id
GROUP BY m.movie_id, m.title, d.first_name, d.last_name;


CREATE VIEW movie_financials AS
SELECT 
    m.title,
    m.budget,
    (mr.domestic_revenue + mr.international_revenue) AS total_revenue,
    (mr.domestic_revenue + mr.international_revenue - m.budget) AS profit,
    ROUND((mr.domestic_revenue + mr.international_revenue - m.budget) * 100.0 / NULLIF(m.budget, 0), 2) AS ROI
FROM movies m
JOIN movie_revenues mr ON m.movie_id = mr.movie_id;


CREATE VIEW actor_filmography AS
SELECT 
    a.first_name || ' ' || a.last_name AS actor,
    COUNT(DISTINCT m.movie_id) AS movie_count,
    STRING_AGG(DISTINCT g.name, ', ') AS genres,
    SUM(mr.domestic_revenue + mr.international_revenue) AS total_revenue
FROM actors a
JOIN cast_members cm ON a.actor_id = cm.actor_id
JOIN movies m ON cm.movie_id = m.movie_id
JOIN movie_genres mg ON m.movie_id = mg.movie_id
JOIN genres g ON mg.genre_id = g.genre_id
JOIN movie_revenues mr ON m.movie_id = mr.movie_id
GROUP BY a.actor_id, a.first_name, a.last_name;


CREATE VIEW genre_stats AS
SELECT 
    g.name AS genre,
    COUNT(DISTINCT m.movie_id) AS movie_count,
    TRUNC(AVG(r.rating), 2) AS average_rating,
    SUM(mr.domestic_revenue + mr.international_revenue) AS total_revenue
FROM genres g
JOIN movie_genres mg ON g.genre_id = mg.genre_id
JOIN movies m ON mg.movie_id = m.movie_id
LEFT JOIN reviews r ON m.movie_id = r.movie_id
LEFT JOIN movie_revenues mr ON m.movie_id = mr.movie_id
GROUP BY g.genre_id, g.name;


CREATE VIEW company_performance AS
SELECT 
    pc.name AS company,
    COUNT(DISTINCT m.movie_id) AS movie_count,
    SUM(mpc.investment_amount) AS total_investment,
    SUM(mr.domestic_revenue + mr.international_revenue) AS total_revenue
FROM production_companies pc
JOIN movie_production_companies mpc ON pc.company_id = mpc.company_id
JOIN movies m ON mpc.movie_id = m.movie_id
JOIN movie_revenues mr ON m.movie_id = mr.movie_id
GROUP BY pc.company_id, pc.name;


SELECT * FROM top_rated_movies
ORDER BY average_rating DESC
LIMIT 10;




   



