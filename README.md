# PersonalProject App

---

## Important Links

- [Deplayed API server](https://fathomless-forest-50934.herokuapp.com/charts)

- [Deplayed Frontend]()

- [ERD](https://miro.com/app/board/uXjVPdchovw=/)

- [Wireframe](https://wireframe.cc/VCDK4j)

- [TrelloBoard](https://trello.com/b/Rh68ZBTL/stock-info)

---

# Introduction

The repo is to learn use scraped data to create perform crud operation and make charts

---

> Be sure to add that lovely star 😀 and fork it for your own copy

---

# Objectives

- Perform a CRUD operation using scraped data into a table and display the charts for the data

---

# Who is this for?

- It's for anyone who wants to use info from scraping a website to perfom crud operation and view the chart info

---

## Local Setup

### Frontend Setup

---

### Backend Setup

- LocalVersion

- [Backend for Nodeapp to do CRUD ](https://localhost:3013/charts)

- [Backend route for Nodeapp to access company name ](https://localhost:3013/equities)

# Packages/Dependencies used

dotenv, cors, express, pg-promise

---

# Install all the dependencies or node packages used for development via Terminal

npm install

---

# Things to add

- Create a .env file and add the following as key: value
- PORT=<your_specified-port_number>
  PG_HOST=localhost
  PG_PORT=5432
  PG_DATABASE=<database_name>
  PG_USER=postgres

# Deployment

# To Deploy Backend to Heroku

- Make sure app works locally

- npm run db:init & npm run db:seed

- Follow these instructions [link](https://devcenter.heroku.com/articles/deploying-nodejs)

- Check if the deployed version is working

- To add to a postgres database to aa deployed app

  - Navigate to the resources tab in your app on heroku.com and type Heroku Postgres into the Add-ons search field.select the suggested Heroku Postgres add-on from the dropdown:

  - For the pricing plan ,Select the Hobby Dev - Free plan and click Provision:

- Access the database credentials

  - navigate to the Resources tab in your app's dashboard again and select the Heroku Postgres
    resource

  - select the Settings tab in the header of configuration screen of your database

  - click the View Credentials button to see the credentials of your PostgreSQL database

- use the database name in the prod_shema.sql and prod_seed.sql to connect

- To connect in the terminal

  - heroku pg:psql <postgres_instance_name> -a <deployed_app_name>

  - \i [file path]/db/prod_schema.sql

  - \i [file path]/db/prod_seed.sql

- Check for routes in the deployed version

Have fun testing and improving it! 😎
