
const bodyParser = require('body-parser');
const express = require("express");

const app = express();

//on importe les routes Sauces-----------------------------------------------------------------------------------------------------
//const saucesRoutes = require('./Routes/sauces');---------------------------------------------------------------------------------

const userRoutes = require('./apiRouter')();

// importation pour accéder au PATH du serveur
const path = require('path'); 

//la méthode app.use() permet d'attribuer un middleware à une route spécifique 


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));




// ajoute le gestionnaire de routage 
// indique à Express qu'il faut gérer de manière statique la ressource 'images'
// à chaque fois qu'elle reçoit une requête vers la route /images
app.use('/images', express.static(path.join(__dirname, 'images')));

//nous enregistrons notre router pour toutes les demandes éffecutées 
//vers api/sauces
//app.use('/api/sauces', saucesRoutes);-----------------------------------------------------------------------------


app.use('/api', userRoutes);



// les setHeader servent à :

app.use((req, res, next) => {
  
  // accéder à notre API depuis n'importe quelle origine '*'
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    // ajouter les headers "Access-Control ect.." aux requ^tes envoyées vers notre API
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    // envoyer des req avec les méthodes mentionnées (GET, POST, ect)
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});


module.exports = app;