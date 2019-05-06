# iReporter Application
[![Build Status](https://travis-ci.com/blackdevelopa/ireporter234.svg?branch=develop)](https://travis-ci.com/blackdevelopa/ireporter234)
[![Coverage Status](https://coveralls.io/repos/github/blackdevelopa/ireporter234/badge.svg?branch=develop)](https://coveralls.io/github/blackdevelopa/ireporter234?branch=develop)

iReporter is a reporting application for users/citizens to communicate any form of corruption to the notice of the appropriate authorities. Users can also report on things that needs government intervention.


## Features
* There are two types of users; an admin and a regular user
* Users can register if they have no account or login otherwise
* Users can create a red-flag/intervention incident when it is corruption/government intervention related
* Users can update the incident's location as well as comment
* Users can view and delete the incident they created
* Admin can only update the status of an incident


## Technologies Used

React: An open source library for building user interfaces.
Redux: A state management library

## Link to deployed app

http://ireporterng.herokuapp.com


## Link to API endpoints

Register new user: /api/v1/create

Login existing user: /api/v1/login

View all red-flags: /api/v1/red-flags

View all interventions: /api/v1/interventions

Add new red-flag: /api/v1/new-red-flag

Add new interventiion: /api/v1/new-intervention

Edit incident: /api/v1/[^(red-flags|intervention)]$/:id

Delete incident: /api/v1/[^(red-flags|intervention)]$/:id


## How to clone the project:

To clone this repository:

Ensure you have git installed

git clone https://github.com/blackdevelopa/ireporter234.git

Run npm install on your terminal

Run npm dev to start the server


## Author

Sylva Elenu - https://github.com/blackdevelopa/
