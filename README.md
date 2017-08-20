# Pixel Painting

Pixel Painting is a simple drawing app implemented with React to demonstrate
basic React principles, concepts, and features.

## Dependencies

```
npm@4.2.0 or yarn@0.24.5
redis@3.2.7
```

This project isn't doing anything particularly fancy with any of these, so other versions are probably
pretty well supported, but I developed locally with them.

## Install

This app was bootstrapped with [create-react-app](https://github.com/facebookincubator/create-react-app),
but assuming you have either `npm` or `yarn` installed (preferably `yarn`) the app can be started with

```
yarn install
yarn start
```

## Running the Server

In addition to allowing local drawing, the app can be connected to a simple websocket server to allow
for collaborative drawing. To start the websocket server

```
cd server
npm install
node index.js
```

The client -> server connection assumes that the server is running at `localhost:8000` and the client
at `localhost:3000`

