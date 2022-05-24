const multer = require('multer');

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
};

// cette const passe MULTER comme config et contient la loogique nécéssaire 
// pour indiquer à MULTER où enregistrer les fichiers entrants
const storage = multer.diskStorage({

  // la f° destination indique à M d'enr les fichiers dans le doss Images
  destination: (req, file, callback) => {
    callback(null, 'images');
  },

  // la f° FILENAME indique à M d'utiliser le nom d'origne (.originalname)
  // de remplacer les espaces par des underscores '_' 
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype];

    // et d'ajouter un timestamp Date.now() comme nom de fichier
    callback(null, name + Date.now() + '.' + extension);
  }
});


// on exporte Multer entièrement configuré, on lui passe la const storage 
// et indiquons que nous gérerons uniquement les téléchargments de fichiers images 
module.exports = multer({storage: storage}).single('image');