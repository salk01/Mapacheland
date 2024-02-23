const express = require('express');
//const moongose = requiere('moongose');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const path = require('path');
const { METHODS } = require('http');
const acciones = require('./router.js')
const cors = require('cors')


const mapache = require('./index/resources/mapache.json');
const app = express();
const PORT = 8080;
//const mySchema = z.string();

//path.basename = "index/"

//parse request query url
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors())
app.use((req, res, next) => {
  //allow access to current url. work for https as well
  res.setHeader('Access-Control-Allow-Origin',req.header('Origin'));
  res.removeHeader('x-powered-by');
  //allow access to current method
  res.setHeader('Access-Control-Allow-Methods',req.method);
  res.setHeader('Access-Control-Allow-Headers','Content-Type');
  next();
})
//favicon icon
app.use(favicon(path.join(__dirname,'index/resources','favicon','favicon.png')));


app.get('/index', (req, res)=>{
	
	res.sendFile (path.join(__dirname, '/index/index.html'), function (err) {
        if(err){
            console.error('ERROR al cargar la pagina!!!!!!');
        } else {
            console.log(__dirname + '/index/index.html');
        }
    });
    res.status(200);
});

app.get('/foto', (req, res)=>{ 
	const image = req.query.nombre;
	res.status(200);
	let pathFile = 'index/'+ 'resources/' + image;
	res.sendFile (path.join(__dirname, pathFile), function (err) {
        if(err){
            console.error('ERROR al cargar la foto!!!!!!');
        } else {
            console.log(__dirname + '__foto');
            res.json(req.body.json)
        }
    });
});

app.use('/test', acciones)

app.listen(PORT, (error) =>{ 
	if(!error) 
		console.log("Server is Successfully Running, and App is listening on port "+ PORT) 
	else
		console.log("Error occurred, server can't start", error); 
	} 
);


/*mongoose.connect("mongodb://localhost/mapaches", function (err, res) {
  if (err) {
    console.log("ERROR: connecting to Database. " + err);
  }
  app.listen(PORT, function () {
    console.log("Node server running on http://localhost:3000");
  });
});*/