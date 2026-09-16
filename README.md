# Click Fit

A responsive one-page fitness and sports website built as a Full Stack Developer assessment project.

## Features

- Responsive design using Bootstrap
- Fitness and sports sections
- jQuery AJAX integration
- REST API data display
- Drag and drop image upload
- Image preview
- Node.js image upload backend
- Local image storage
- MySQL users table
- MySQL `addUser` stored procedure

## Technologies Used

### Frontend
- HTML5
- CSS3
- Bootstrap 5
- JavaScript
- jQuery

### Backend
- Node.js
- Express.js
- Multer

### Database
- MySQL
- Stored Procedure

## API

The project fetches data from:

https://api.restful-api.dev/objects

The API request is made using jQuery AJAX when the page loads.

## Image Upload

Uploaded images are stored locally in:

```text
upload_images/

Run the Project

Install dependencies:

npm install

npm install multer

Start the server:

node server.js

Or using nodemon:

nodemon server.js

Open:

http://localhost:3001
Project Structure
click-fit/
├── public/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── app.js
│   └── images/
├── upload_images/
├── database/
│   └── database.sql
├── server.js
├── package.json
├── .gitignore
└── README.md