<?php
	$nombre = $_POST['nombre'];   //aca recibimos los datos enviados desde el formulario
	$telefono = $_POST["telefono"];   //aca recibimos los datos enviados desde el formulario
	


	echo "GRACIAS POR REGISTRARSE!!!";

	
	 
	mail("marsinformatica@gmail.com","Cliente nuevo","Nombre:  $nombre          Telefono:  $telefono") 

?>

