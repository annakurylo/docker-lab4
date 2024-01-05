-- DROP DATABASE IF EXISTS lab4;
-- CREATE USER username WITH "postgres" PASSWORD 'root';

-- create database lab4;

create TABLE person (
    id SERIAL PRIMARY KEY,
    name VARCHAR(225),
    surname VARCHAR(225)
);

create TABLE post (
    id SERIAL PRIMARY KEY,
    title VARCHAR(225),
    content VARCHAR(225),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person (id)
);
