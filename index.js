require('dotenv').config();


const server = require('./app');


const PORT = process.env.PORT ?? 3000;


    // je lance l'écoute
    server.listen(PORT, () => {
        console.log(`Listening on ${PORT}`);
    });
;