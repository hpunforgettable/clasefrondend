window.onload=function()
{

var menu = document.getElementsByClassName("ul_oculto")[0];
var desplegar_categoria = document.getElementsByClassName("desplegar")[0];
console.log(menu);

		desplegar_categoria.onclick=function(evento) {
		evento.preventDefault();
		menu.className="ul_oculto ul_visible";
		
		
		

	}






}