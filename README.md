# Chuck Norris Joke App

Silly Chuck Norris jokes for everyone to enjoy :)

Built with React and Apollo with love from the Mother City.

# NB!!

Please make sure you have docker installed as the scripts will pull in the docker container for the prisma set up

To set up the project on the server and client run the following from then project root:

For the Server setup

1. `cd ./server`
2. `npm install`
3. `docker-compose up -d`
4. `prisma init --endpoint http://localhost:4466`
5. `prisma deploy`
6. `prisma generate`
7. `node index.js` or `nodemon index.js`

For the Client setup

1. `cd ./client`
2. `npm install`
3. `npm run start`

You will now have a working developemt version of the project
