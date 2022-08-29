\c d5lnc39e4vsj00;

DROP TABLE IF EXISTS stocks;
CREATE TABLE stocks(
   id SERIAL PRIMARY KEY,
   chart_name TEXT NOT NULL,
   equity_name TEXT NOT NULL,
   metrics TEXT NOT NULL,
   users TEXT NOT NULL
);

