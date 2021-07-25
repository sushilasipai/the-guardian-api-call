# the-guardian-api-call

This project is a server-side application to expose RSS feeds corresponding to the categories(sections) of The Guardian, a leading UK newspaper. It takes section name as an input and returns 20 latest data of that section as RSS feeds.

## Initial Setup

1. Firstly, setup all the environment variables on .env file in the root path as shown in the example on .env.example file.
2. Run `npm install` to install all the project dependencies.

## Run project

1. Run `npm start` to start the project.
2. Navigate to `http://localhost:[port]/api/section/[section-name]`
   where [port] is the port number set on PORT of .env file with the default value of 3000 and [section-name] is the section name or category name which must be indicated using only lowercase letters and hyphens.

## Running tests

Run `npm run test` to execute the unit and integration tests via [Jest](https://www.npmjs.com/package/jest).
