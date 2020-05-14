function subscripcion() {
	alert("Gracias!!! seras añadido al grupo de Whatsapp de Asher Ayma!!! ");
}


function whatsapp() {
	alert("Para ser añadido al grupo de whatsapp y recibir el menu diario subscribase en el formulario mas abajo, gracias!");
}

function gracias() {
	alert("Gracias por registrarse, te añadiremos al grupo de whatsapp!");
}


function validar(){ 
	var valorNombre = document.getElementById('nombre').value; 
	var valorTelefono = document.getElementById('telefono').value;
 	if((valorNombre == '') || (valorTelefono == ''))
 		alert('Completar los dos campos')

}
