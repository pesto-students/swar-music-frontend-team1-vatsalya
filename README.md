[![Netlify Status](https://api.netlify.com/api/v1/badges/3a60744f-678f-4f08-a360-7d2e2dcb6560/deploy-status)](https://swar-music.netlify.app/)

# SWAR MUSIC

![Logo](https://swar-app.s3.ap-south-1.amazonaws.com/SwarLogo.png)

Swar music is a music player, on which users can listen to music,poadcast and audioBooks.On other hand users can create,edit and delete their playlist.

There are two types of users:

- Admin user - Admin will able upload songs,poadcast and audiobooks to s3 bucket

- Client user - Client will able to listen to music,poadcast and audiobooks.Whereas they
  can also create,edit and delete playlist.

# Table of Contents

1. [Demo](#demo)
2. [Installation](#installation)
3. [Technology Stack](#technology-stack)
4. [Authors](#authors)
5. [License](#license)

## Demo

[Live Demo](https://swar-music.netlify.app/)

Please Note:

1. We recommend using this app in Google Chrome
2. Use the app on Laptop/desktop only as of now.

Test Credentials

- For Admin:
  - Username : SysAdmin7
  - Password: password-a
- For User:
  - Username: TestUser01
  - Password: test12345

Please Note:

## Installation

Install my-project with npm

```bash
  1.Fork or directly clone this repository to your local machine
  2.Use the npm install command to install dependencies.
  3.Once the dependencies are finished installing, use the npm start command inside the root directory to open the app in your local browser of choice
```

## Technology Stack

**Client:** React, Redux, Material UI

**Server:** Node, Express JS, [Rendor](https://swar-music.onrender.com/)

**Authentication:** JWT

**Cloud Storage:** AWS S3 bucket

## Authors

- [Himanshu Vansal](https://github.com/himanshuvansal01)
- [Shantanu Kale](https://github.com/martianshaan)

## LICENSE

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
