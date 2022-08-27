
\c d6sruls945nt9o;

DROP TABLE IF EXISTS stocks;
CREATE TABLE stocks(
   id SERIAL PRIMARY KEY,
   chart_name TEXT NOT NULL,
   equity_name TEXT NOT NULL,
   metrics TEXT NOT NULL,
   users TEXT NOT NULL
);

-- -- Users
 CREATE TABLE users (
   id SERIAL PRIMARY KEY,
   username TEXT NOT NULL,
   email TEXT NOT NULL
   hash_password TEXT NOT NULL,
--     -- hash_password BYTEA,
--     cash NUMERIC(1000,2)
 );