

# Introduction

The repo is to learn uses scraped data to create perform crud operation with nodejs and postgresql

---

> Be sure to add that lovely star 😀 and fork it for your own copy

---

# Objectives

-  Using scraped data from a table(historical_data) create charts table to use it in frontend for charting purposes

---

# Who is this for?

- It's for anyone who wants to use info from scraping a website to perfom crud operation and view the chart info

---

## Lessons Learnt

- scraping a website can be done in nodejs using request,axios and cheerio.

- Some websites use wesockets so cheerio did not work as expected and I had no understanding of it.
  Due to time limitations I had to go the obvious choice.

- The only easy way to get data was to use beautifulSoup provided by python

- Python needs indentation and is not forgiving

- Heroku addons are really easy to attach to more than one app. Figuring out for the first time
  was harder.

- Tried to incorporate python module in the nodejs but I could not deploy on the backend and encountered so many errors. The solution was to make another repo for python and create a virtual environment

- Need a `requirements.txt` for heroku deployment which contains all the modules used in the program. The command `pip freeze > requirements.txt` does the job without the need to add manually.

- A little different setup steps for nodejs and python during heroku deployment but finally got
  it to deploy with a little googling and devcenter.

- Need to scale the dynos using heroku ps:scale web=1 which will start the app. By mistake, when 
  I scaled it 0 my app crashed and there was error H14

- Postgres column names are case sensitive

## Local Setup

### Backend Setup

- LocalVersion

- Backend routes

- https://localhost:<your_port_number>/charts

- https://localhost:<your_port_number>/equities