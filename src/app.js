
const express = require('express');
const app = express ();
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser')
require('./helpers');

const dirNode_modules = path.join(__dirname , '../node_modules')

app.use('/css', express.static(dirNode_modules + '/bootstrap/dist/css'));
app.use('/js', express.static(dirNode_modules + '/jquery/dist'));
app.use('', express.static(dirNode_modules + '/popper.js/dist'));
app.use('/js', express.static(dirNode_modules + '/bootstrap/dist/js'));

const directoriopublico = path.join(__dirname, '../public');
const directoriopartials = path.join(__dirname, '../partials');
hbs.registerPartials(directoriopartials);
app.use(express.static(directoriopublico));
app.use(bodyParser.urlencoded({extended: false}))


app.set('view engine','hbs');



app.get('/', (req, res) =>{
	res.render('index')
  });
  
  

app.get('/listacursos', (req, res) =>{
	res.render('listacursos')
  });
  


app.get('/cursos',(req,res) => {
	res.render('cursos',{
		estudiante: 'error'
	});
});

app.post('/crearcursos',(req,res) => {
	res.render('crearcursos',{
		id : req.body.id,
		nombre : req.body.nombre,
		descripcion : req.body.descripcion,
		valor : req.body.valor,
		modalidad : req.body.modalidad,
		intensidad : req.body.intensidad

	});
 
});


app.post('/estado',(req,res) => {
	res.render('estado',{
		id : req.body.id,
		estado:req.body.estado

	});
 
});


// app.post('/calculos',(req, res)=>{	
// 	res.render('calculos',{
// 		Estudiante:req.body.nombre,
// 		nota1:parseInt(req.body.nota1),
// 		nota2:parseInt(req.body.nota2),
// 		nota3:parseInt(req.body.nota3)
// 	});
	
// });





app.post('/usuarios',(req,res) => {
	res.render('usuarios',{
		nombre:req.body.nombre,
		email:req.body.email,
		cedula: req.body.cedula,
		telefono:req.body.telefono,
		curso: req.body.curso

	});
	res.redirect('listarusuario');
});

app.get('/registro',(req,res)=>{
	res.render('registro');
});

app.get('/listarusuario', (req, res) =>{
  res.render('listarusuario')
});




app.get('*', (req, res) =>{
	res.render('error',{
		Estudiante: 'error'
	})
})




app.listen(3000, () => {
  console.log(`Escuchando en el puerto 3000`);
  
});

