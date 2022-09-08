# Introduction

The repo specifies the frontend part of the project

---

> Be sure to add that lovely star 😀 and fork it for your own copy

---

# Objectives

- Use charts table to perform CRUD operations to the backend and chart the data values using d3.js

---

# Who is this for?

- Perform CRUD operations using React and to chart table data using d3.js

---

# Packages need to be installed to run the forked repo

- npm i axios bootstrap react-bootstrap d3 framer-motion react-icons react-pagination --save

## Lessons Learnt

- Biggest mistake made was not cleaning the data in the backend so the frontend can work seamlessly

- The entire project was a concept so figuring out on how to proceed was a dilemma due to time  
  constraints

- Making it responsive has been one of the challenges I am facing due to charts, tables

- Sending mutiple queries from one Component to the other was quite a bit of struggle.For some
  reason backend was not performing the queries sent.

- Each time there was a problem with data the frontend would not display the results because of
  the format of the fields in the data

- The header columns being CamelCase in the backend caused a lot of problems with data not
  not bieng displayed resulting in a lot of errors.

- Had to add and drop database in the backend and the python repo quite a number of times for it
  to work properly. Dropping database in local and production schema in this repo and python repo
  came with lot of struggles and confusion in figuring out where the error is exactly coming from.

- Learning d3.js was fun but figuring out the data axis was quite a challenge along with trying to
  scale the axis.

## Local Setup

### Frontend Setup

- LocalVersion npm start to start the app

-Frontendroutes

- https://localhost:3000/charts

- https://localhost:3000/equities

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
