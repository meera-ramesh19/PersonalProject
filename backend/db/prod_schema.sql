\c d5lnc39e4vsj00;

DROP TABLE IF EXISTS charts;
CREATE TABLE charts(
   id SERIAL PRIMARY KEY,
   chart_name TEXT NOT NULL,
   equity_name TEXT NOT NULL,
   metrics TEXT NOT NULL,
   users TEXT NOT NULL
);

