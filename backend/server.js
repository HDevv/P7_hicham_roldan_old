const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

// const userRoutes = require('./routes/user.routes.js');
// const postRoutes = require('./routes/post.routes.js');

//Video
const apiRouter = require('./apiRouter').router;

// require('dotenv').config({path: './config/.env'});
// require('./config/config.json');
const app = express(); 

//Body parser config

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Body Parser Config
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

console.log('coucou');


app.use(cors());


// Configure routes
app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send('<h1>Bonjour sur mon super server</h1>');
});

//VIDEO
app.use('/api/', apiRouter);



app.listen(5000, function() {
  console.log('Server en écoute :)');
});




// routes
//entre '' c'est l'url !


// // on implémente CORS pour assurer que le front puisse effectuer 
// // des appels vers l'API en toute sécurité
// app.use(cors({origin: '*'}));

// app.use((req, res, next) => {
  
//     // accéder à notre API depuis n'importe quelle origine '*'
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader(
//       // ajouter les headers "Access-Control ect.." aux requ^tes envoyées vers notre API
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
//     );
//     res.setHeader(
//       "Access-Control-Allow-Methods",
//       // envoyer des req avec les méthodes mentionnées (GET, POST, ect)
//       "GET, POST, PUT, DELETE, PATCH, OPTIONS"
//     );
//     next();
//   });
  
// app.use('/api/post', postRoutes);

// app.use('/api/user', userRoutes);

// server
// app.listen(process.env.PORT, () => {
//     console.log(`Listening on port ${process.env.PORT}`);
// }); 



