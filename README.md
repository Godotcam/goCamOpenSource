![image](https://github.com/Godotcam/goCamOpenSource/assets/169826477/881f387a-a09d-417e-a1fb-67dab35c5072)


# Go.cam - Age verification system

[GO.cam](https://go.cam/) offers a simple, easy-to-use application for verifying age online.
With just a few clicks, it allows to verify the age of the person who wishes to access certain sites restricted to minors.

Two methods of age verification are available : facial recognition (selfie) and ID documents verification (ID card, passport, or driver's license).

For the selfie verification, GO.cam utilizes the smartphone camera or computer webcam to assess the user's age through artificial intelligence. If the detected age is too close to the legal age, another verification method is suggested.

### GO.cam is certified 🏅

We are constantly working closely with regulators from many countries to certify GO.cam.

Authorities that already certified us:

* [Central Authority for the Supervision and Protection of Minors on the Internet in Germany](https://www.kjm-online.de/pressemitteilungen/altersverifikation-persona-gocam/)
* [Age Check Certification Scheme](https://accscheme.com/registry/age-estimation/gsi-development-sas/)

[ASACP](https://www.asacp.org/) recommends Go.cam as a solution for protecting minors online by guaranteeing secure access to adult content.

## Install

This project was developed using Nodejs v20, we recommend using a compatible version.

Clone this repository and install the required packages by running on the root the of the project the following command:

`npm install`

## Run

After the installation of the packages you should be able to run the project in development or production mode.
The only difference between them is the `watch` parameter (watches for any file changes on the backend and restart the nodejs process when a detection is made) which is enabled for the development version.

To run the project in development mode run:

`npm run startDev`

To run the project in production mode run:

`npm run startProd`

By default the project will run on `http://localhost:3300`. Due to the fact that this project requires access to some features that are restricted to https (e.g. webcam access), we recommend you running it on `localhost` on your first run.

## Example implementation

By running this project you will be able to go through both types of verification flows: using a redirect or a iframe overlay.

Additionally, we provide a standalone implementation of go.cam in various programming languages. Please check the `example` folder for more information about this.

## Project structure

This project is using typescript for both frontend and backend (express js) scripts, sass for the styling part and twig for the template part.

### Views

The views folder is located under `app/frontend/views`.

### Styling

The sass folder is located under `source/frontend/css` and it is compiled and merged to `app/frontend/static/css/main.css`.

### Backend scripts

The backend scripts are located under `source/backend/app` and are compiled to `app/backend/`.

### Frontend scripts

The frontend scripts are located under `source/frontend/js/app` and are compiled and merged to `app/frontent/static/js/app`.

### Build and run scripts

The build and run scripts are located under `script/gulpfile.js`.

## Develop

If you wish to develop the project further you might find the following commands useful.

### Build the whole project (frontend, backend and styling):

`npm run build`

### Build only the backend:

`npm run buildJsBackend`

### Build only the frontend:

`npm run buildJsFrontend`

### Build only the styling:

`npm run buildCssFrontend`

### Watch the file changes on all the project and automatically rebuild (frontend, backend and styling):

`npm run watch`

### Watch only the backend:

`npm run watchJsBackend`

### Watch only the frontend:

`npm run watchJsFrontend`

### Watch only the styling:

`npm run watchCssFrontend`

