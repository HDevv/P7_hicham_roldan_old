// inscription d'user/ connexion et deco dans ce fichier

const UserModel = require('../models/user');
const jwt = require('jsonwebtoken');


//le token est déjà dans controller/user.js


module.exports.signUp = async (req, res) => { 
  console.log(req.body);
    const {username, email, password} = req.body

    try {
      const user = await UserModel.create({username, email, password });
      res.status(201).json({ user: idUSERS});
    }
    catch(err) {
        res.status(200).send({ err })
    }

}

module.exports.signIn = async (req, res) => {
  const { email, password } = req.body 


try {
  const user = await UserModel.login(email, password);
  const token = createToken(idUSERS);
  res.cookie
} catch (err){
  
}
}


