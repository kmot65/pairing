#  Olympics Medal Explorer

## Background

This project is designed to be used during an interview for a front end, back end (Node) or full stack engineering role. 

It isn't designed to represent 'perfect' code!

During the interview, we'll ask you to build on this basic app and add a few new features, along with a little bit of refactoring.

Prep required: 
- Clone the repo onto the device you'll be bringing to the interview. (If you're not able to bring a laptop to the interview, it isn't a problem - just let us know and we'll make arrangements for you to borrow a MacBook).
- Follow the instructions below to spin up the app.
- Make sure you understand the basics of the core technologies used: particularly React for FE, Koa for BE. 
- Have a look through the code and gain an understanding of how the app hangs together. 
- Have a think about code quality: what does this skeleton app get right, and what would you be been to refactor if you inherited the project in real life? 

## About the App

- Skeleton application for a service designed to search Olympics medal data since 1945. Currently just gives first 10 entries
- Front and back end are tightly coupled (although can be tested independently). Located in subdirectories: `/frontend` and `/backend`.
- Node 12.14.0 used
- Prettier script defined at top level, to run: `npm run prettify`
- Package lock files are not committed as we've found these can cause issues with moving in and out of the work boundary. The app is simple enough not to need them

### Frontend

- Built with create-react-app
- To set up: `cd frontend`, `npm i`
- To run: `npm start`. Runs on `localhost:3000`
- To test: `npm run test`

### Backend

- Koa/Koa-router used
- To set up: `cd backend`, `npm i`
- To run: `npm run dev`. Runs on `localhost:4000`
- To test: `npm run test` (nb - no proper tests at the moment, framework stubbed out)
- Single endpoint defined: `/medals`
  - Returns an array of medal winners
  - No auth requirements yet
  - Pagination is support via `limit` and `offset` query parameters