# Model-View-Controller (MVC) Challenge: Tech Blog

## Description

This is a basic CMS-style blog site developed using the Model, View, Controller (MVC) paradigm.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [Questions](#questions)

## Installation

1. `git clone`

2. This app requires Node.js and the required Node modules for local operation, edits, and running the server. Make sure it's installed. `npm install`

3. `npm start`

## Usage

Users can view the homepage and current blog posts without signing in. However, to create or interact with blog posts, users need to sign in. Click on the "login" button on the navbar to access the login page where you can log in or create a new user account. Once signed in, you can create, edit your own posts, and leave comments on posts. The sign-in session will last for 2 hours, after which the user will be automatically logged out.

To run the server locally, first, create and seed your MySQL database. Create a .env file in the root directory with the following information:

DB_NAME=tech_blog_db

DB_USER=\<your mysql username\>

DB_PW=\<your mysql password\>

To seed the database with mock data, run the command "npm run seed" in the terminal while in the root directory.

Finally, to start the server, type `npm start` into your terminal and navigate to http://localhost:3001/ in your browser to access the homepage.

## Demo



## Questions

You can ask questions by contacting me at:

Github [Tehila03](https://github.com/Tehila03)

Email tehilabootcamp@gmail.com
