var express = require('express');
var router = express.Router();
var formiDable = require('formidable');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/upload', (req, res)=>{

  let form = new formiDable.IncomingForm({

    uploadDir: './upload',
    keepExtensions: true 

  });

  form.parse(req, (err, fields, files)=>{

    res.json({
      files
    });

  });
});

module.exports = router;
