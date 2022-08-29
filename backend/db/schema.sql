
-- DROP DATABASE IF EXISTS equity_data;

-- -- Creating the database 
-- CREATE DATABASE equity_data;

-- Connect 
\c equity_data; 

DROP TABLE IF EXISTS stocks;

CREATE TABLE stocks(
   id SERIAL PRIMARY KEY,
   chart_name TEXT NOT NULL,
   equity_name TEXT NOT NULL,
   metrics TEXT NOT NULL,
   users TEXT NOT NULL
);

-- -- Users
--  CREATE TABLE users (
--    id SERIAL PRIMARY KEY,
--    username TEXT NOT NULL,
--    email TEXT NOT NULL,
--    hash_password TEXT NOT NULL
-- --     -- hash_password BYTEA,
-- --     cash NUMERIC(1000,2)
--  );




