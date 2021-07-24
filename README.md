# the-guardian-api-call

This project is a server-side application to expose RSS feeds corresponding to the categories(sections) of The Guardian, a leading UK newspaper.

## Initial Setup

Firstly, setup all the environment variables on .env file as shown in the example on .env.example file.

## Run project

1. Run `npm start` to start the project.
2. Navigate to `http://localhost:[port]/api/section/[section-name]`
   where [port] is the port number set on PORT of .env file with the default value of 3000 and [section-name] is the section name or category name which must be indicated using only lowercase letters and hyphens.

## Running tests

Run `npm run test` to execute the unit and integration tests via [Jest](https://www.npmjs.com/package/jest).
