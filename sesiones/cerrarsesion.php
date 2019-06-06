<?php
//iniciamos la sesi�n 
session_name("loginUsuario"); 
session_start(); 

session_unset();
		session_destroy(); // destruyo la sesi�n 
?>
<script>
	 window.location="../login/index.php";
</script>