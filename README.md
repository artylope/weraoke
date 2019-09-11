
# unit 4 Project
General Assembly Software Engineering Immersive 19
Unit 4 Project - Weraoke

Built by - [Alicia Wong](https://github.com/aliciawongg), [Ang Yi Xin](https://github.com/artylope)

## Karaoke Platform Web App - Weraoke
Weraoke is a Karaoke Platform.

## Technologies used
- NodeJS, Express.JS, ReactJS, Webpack, Javacript, SCSS, HTML
- Lyrics API from APISeeds.com

## Approach Taken
This is a 2-person team project, we split the work equally - Alicia handles the backend, Yi Xin handles the frontend.

## Installation Instructions
1. Installs all the library using npm
```
npm install
````
2. Prepare local db

```
Create the Postgres db 'weraoke'. DB config is in db.js
Run server/tables.sql
Run server/seed.sql
````
3. Run the project

```
npm run dev
````

## Functions of App
- Search and add songs to the session's playlist
- Show the lyrics of the song
- Play and delete songs from playlist


### Credits
[Lyrics API](https://apiseeds.com) for lyrics. </br>
[React Youtube](https://www.npmjs.com/package/react-youtube) for the youtube component </br>

_______________________________________________________________________________________________

#Built With....

React boilerplate with ES2015, Express.js, and Webpack

## Technologies

- React (v16)
- Express.js (v4) as production and development server
- Webpack 4 (production and development configurations)
- SCSS support (+ sanitize.css included)
- ES2015+

## Features
- preconfigured eslint and Prettier code formatter
- React Hot Loader
- Linux/MacOS/Windows

## Usage

### Make sure you have nodemon installed globally
```
npm install -g nodemon
```

### Installation
```bash
git clone https://github.com/wdi-sg/react-express-webpack.git
cd react-express-webpack
npm install


# remove boilerplate git references
rm ./.git
```

### Scripts
```bash
# run development mode
npm run dev

# run production mode
npm run build
npm start

# run prettier
npm run prettier

# run lint
npm run lint

# run on a different port
HTTP_PORT=3001 npm run dev
```

## License
MIT License. Free use and change.
