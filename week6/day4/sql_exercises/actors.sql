DROP TABLE IF EXISTS actors;
CREATE TABLE actors (
    id SERIAL primary key,
    name VARCHAR(255) NOT NULL,
    age INT,
    number_oscars INT
);

INSERT INTO actors (name, age, number_oscars)
VALUES ('Leonardo DiCaprio', 41, 1);
INSERT INTO actors (name, age, number_oscars)
VALUES ('Jennifer Lawrence', 25, 1);
INSERT INTO actors (name, age, number_oscars)
VALUES ('Samuel L. Jackson', 61, 0);
INSERT INTO actors (name, age, number_oscars)
VALUES ('Meryl Streep', 66, 3);
INSERT INTO actors (name, age, number_oscars)
VALUES ('John Cho', 43, 0);

-- 1. Which actors have more than one oscar?
-- SELECT * FROM actors WHERE number_oscars > 1;

-- 2. Which actors are older than 30 years old?
-- SELECT * FROM actors WHERE age > 30;
