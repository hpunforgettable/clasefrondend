window.onload=function() 
{
	var menu = document.getElementsByTagName("nav")[0];
	var burger = document.getElementsByClassName("burger")[0];
	var cierro_menu = document.getElementsByClassName("close_nav")[0];
	
	console.log (menu);


	burger.onclick=function(evento) {
		evento.preventDefault();
		menu.className="nav_visible nav_abrir";
	}

	cierro_menu.onclick=function(evento) {
		evento.preventDefault(); // para no hacer su comportamiento normal //
		menu.className="nav_cerrar";


	}
}