

// Imports
var jwt = require('jsonwebtoken');

const JWT_SIGN_SECRET = 'cndosncocmdc5545dc1d5c1c5d4s5c51sss8s6s8s68d8dd3d2332s';

// Exported functions
module.exports = {
  generateTokenForUser: function(userData) {
    return jwt.sign({
      userId: userData.id,
      isAdmin: userData.isAdmin
    },
    JWT_SIGN_SECRET,
    {
      expiresIn: '1h'
    })
  },
  parseAuthorization: function(authorization) {
    return (authorization != null) ? authorization.replace('Bearer ', '') : null;
  },
  getUserId: function(authorization) {
    var userId = -1;
    var token = module.exports.parseAuthorization(authorization);
    if(token != null) {
      try {
        var jwtToken = jwt.verify(token, JWT_SIGN_SECRET);
        if(jwtToken != null)
          userId = jwtToken.userId;
      } catch(err) { }
    }
    return userId;
  }
}




// // Imports
// const jwt = require('jsonwebtoken');

// // Exportation de la fonction d'authentification
// module.exports = (req, res, next) => {
//     // Récupération du token dans les paramètres
//     const authHeader = req.headers.authorization;

//     // Si l'utilisateur possède une autorisation,
//     // on déclare le token et on le vérifie, s'il n'y a pas
//     // d'erreur, on le next, sinon on renvoie un statut 403
//     if (authHeader) {
//         const token = authHeader.split(' ')[1];

//         jwt.verify(token, 'DEVELOPMENT_TOKEN_SECRET', (err, user) => {
//             if (err) {
//                 return res.status(403);
//             }
//             next();
//         });
//     }
//     // Sinon, on renvoie le statut 401 Unauthorized
//     else {
//         res.status(401).json({error:"accès non authorisé"});
//     }
// };