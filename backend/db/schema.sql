
-- DROP DATABASE IF EXISTS equity_data;

-- -- Creating the database 
-- CREATE DATABASE equity_data;

-- Connect 
\c  equity_data; 

DROP TABLE IF EXISTS charts;

CREATE TABLE charts(
   id SERIAL PRIMARY KEY,
   chart_name TEXT NOT NULL,
   equity_name TEXT NOT NULL,
   metrics TEXT NOT NULL,
   users TEXT NOT NULL
);





