const hbs = require('hbs');
const express = require('express');
const app = express();
//file system
const fs = require('fs');

listaCursos = [];

hbs.registerHelper('crear', (id, nombre, descripcion, valor, modalidad, intensidad) => {
	listar();
	let curso = {
		idC: id,
		nombreC: nombre,
		descripcionC: descripcion,
		valorC: valor,
		modalidadC: modalidad,
		instensidadC:intensidad,
		estado: "disponible"
	};
	let replica = listaCursos.find(ced => ced.idC == id)
	if (!replica) {
		listaCursos.push(curso);
		console.log(listaCursos);
		guardar();
		Console.log("Registro ralizado con exito");
	
	}
	else
	console.log("Verifica, Ya existe un curso con este id.");


});



const listar = () => {
	try {
	listaCursos = require('../listaCursos.json');
	} catch (error) {
		listaCursos = [];
	}
}

	const guardar = () => {
		//guardamos el array en el archivo json
		let datos = JSON.stringify(listaCursos);
		fs.writeFile('../listaCursos.json', datos, (err) => {
			if (err) throw (err);
			console.log("Registro ralizado con exito");
		 
		})
	}


hbs.registerHelper('listarC', () => {
    listaCursos = require('../listaCursos.json')
    let texto = `<table class="table table-dark table-striped">\
	<thead>\
	  <tr>\
		<th scope="col">Id</th>\
		<th scope="col">Nombre</th>\
		<th scope="col">Descripcion</th>\
		<th scope="col">Valor</th>\
   	<th scope="col">Modalidad</th>\
		<th scope="col">Intensidad</th>\
		<th scope="col">Estado</th>\
	  </tr>\
	</thead>\
	<tbody>`

    listaCursos.forEach(curso => {
		texto = `${texto}
        <tr>
        <td> ${curso.idC}</td>
        <td> ${curso.nombreC}</td>
        <td> ${curso.descripcionC}</td>
		<td>$:${curso.valorC}</td>
		<td> ${curso.modalidadC}</td>
		<td> ${curso.instensidadC}</td>
		<td> ${curso.estado}</td>
    </tr>`
    });
    texto = `${texto}</tbody></table> `
    return texto;
});


hbs.registerHelper('estadoC',(estado)=>{

		listar()
		let estadoC = listaEstudiantes.find(buscar => buscar.esta == cerrado)
			if(!estadoC){
				console.log(`El curso se encuentra cerrado`);
			}else{
				
				stadoC[estado] = cerrado
				guardar()
			}
				
	
	
}

)

hbs.registerHelper('listarCI', () => {
	listaCursos = require('../listaCursos.json')
	
	let texto = `  <div class="col-lg-10 col-12">\
	<div class="accordion mb-3" id="accordionExample">`
	
	   i=1
    listaCursos.forEach(curso => {
		texto = `${texto}<div class="card">\
		<div class="card-header" id="heading${i}">
		<h2 class="mb-0">\
		  <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
			 <strong><p>${curso.nombreC}</strong></p>
		  </button>
		</h2>
	  </div>
       <div id="collapse${i}" class="collapse" aria-labelledby="heading${i}" data-parent="#accordionExample">\
		<div class="card-body">
		<p>Nombre del Curso:  ${curso.nombreC}</p><br><br>\
		<p>Valor:  ${curso.valorC}</p><br><br>\
        <p>Descrpicion:  ${curso.descripcionC}</p><br><br>\
		<p>Modalidad:  ${curso.modalidadC}</p><br><br>\
		<p>INtensidad horaria:  ${curso.instensidadC}</p><br><br>\
		</div>\
		</div>\
		</div>
	  `
	  i = i+ 1
	});	
	texto=`${texto}
	</div>\ </div> `
	return texto;
 
});




listarUsuarios = [];

hbs.registerHelper('crearU', ( nombre, email, cedula,  telefono, curso) => {
	listarU();
	let usuario = {
		nombreu: nombre,
		emailu: email,
		cedulau: cedula,
		telefonou: telefono,
		cursou: curso,
		tipo: "aspirante"
		
	};
	let replica = listarUsuarios.find(ced => ced.cedulau == cedula)
	if (!replica) {
		listarUsuarios.push(usuario);
		console.log(listarUsuarios);
		guardarU();
		console.log('Usuario registrado con exito');
	}
	else
		console.log(`Ya Existe otro Usuario con esa cedula`);


});




hbs.registerHelper('listarU', () => {
	listarUsuarios = require('../listaUsuarios.json')
	let texto = `<table class="table table-sm table-dark">\
<thead>\
	<tr>\
	<th scope="col">Nombre</th>\
	<th scope="col">Email</th>\
	<th scope="col">Cedula</th>\
	<th scope="col">Telefono</th>\
	<th scope="col">Curso</th>\
	 <th scope="col">Tipo</th>\
	 
	</tr>\
</thead>\
<tbody>`

	listarUsuarios.forEach(curso => {
	texto = `${texto}
			
			<td> ${curso.nombreu}</td>
			<td> ${curso.emailu}</td>
			<td> ${curso.cedulau}</td>
	        <td> ${curso.telefonou}</td>
            <td> ${curso.cursou}</td>
	        <td> ${curso.tipo}</td>

	</tr>`
	});
	texto = `${texto}</tbody></table> `
	return texto;
});


const listarU = () => {
	try {
		listarUsuarios = require('../listaUsuarios.json');
	} catch (error) {
		listarUsuarios = [];
	}
}

	const guardarU = () => {
		//guardamos el array en el archivo json
		let datos = JSON.stringify(listarUsuarios);
		fs.writeFile('listaUsuarios.json', datos, (err) => {
			if (err) throw (err);
			console.log(`Archivo de cursos creado con exito`);
		})
	}
	
	









































// hbs.registerHelper('obtenerPromedio', (nota1 , nota2, nota3)=>{
//     return (nota1+nota2+nota3)/3
// });

// hbs.registerHelper('listar',() =>{
//     listaEstudiantes = require('./Listado.json')

//     let texto = "<table class='table  table-striped table-hover'> \
//                 <thead class='thead-dark'> \
//                 <th> Nombre </th> \
//                 <th> Matematicas </th> \
//                 <th> Ingles </th> \
//                 <th> Programacion </th>"; 
//               texto = texto +  "</thead>\
//                 <tbody>";

//     listaEstudiantes.forEach(estudiante => {
//         texto = texto +
//                 '<tr>'+
//                 '<td>' + estudiante.nombre + '</td>'+
//                 '<td>'+ estudiante.matematicas +'</td>'+
//                 '<td>'+ estudiante.ingles +'</td>'+
//                 '<td>'+ estudiante.programacion+'</td></tr>'
                
//     });
    
//     texto = texto + '</tbody></table>';
//     return texto;
// });


       
   