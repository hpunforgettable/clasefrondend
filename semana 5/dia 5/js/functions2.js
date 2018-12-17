window.onload=function()
{

var botones=document.getElementsByClassName("boton");
var menu=document.getElementsByClassName("menu");
var estados = []; //estado del menu cerrado --> oculto abierto --> desplegado


	for (var i=0; i<botones.length; i++) 
	{
		(function(indice){
			estados[indice]="cerrado";
			botones[indice].onclick=function(evento)
			{
				evento.preventDefault();
				if(estados[indice]=="cerrado")
				{
					menu[indice].className="menu";
					estados[indice]="abierto"
				}
				else
				{
					menu[indice].className="menu oculto";
					estados[indice]="cerrado"
				}
			}
		})(i);
	}




}