window.onload=function ()

	{

		var imagen = document.getElementsByClassName("imagen")[0];
		var iniciaX = 498/2-50;
		var iniciaY = 498/2-50;

			imagen.style.top=iniciaY+"px";
			imagen.style.left=iniciaX+"px";

		var contenedor = document.getElementsByClassName("contenedor")[0];
		var offsetY=100; 
		var offsetX=(window.innerWidth-500)/2; 
		var mouseX=0;
		var mouseY=0;
		var mouseOffsetX=0;
		var mouseOffsetY=0;


		contenedor.onmousedown=function(pinchar)
			{
				mouseX=pinchar.clientX;
				mouseY=pinchar.clientY;
				contenedor.addEventListener("mousemove",mover);
			}	
		contenedor.onmouseup=function(soltar)
			{
				
				contenedor.removeEventListener("mousemove",mover);
			}

		function mover(emovimiento) 
			{	
				 var puedomover=false;

					if(emovimiento.clientX-offsetX>iniciaX && emovimiento.clientX-offsetX<iniciaX+100 && emovimiento.clientY-offsetY>iniciaY && emovimiento.clientY-offsetY<iniciaY+100) 		
						{
							puedomover=true;
						}
					if (puedomover)
						{
							mouseOffsetX=emovimiento.clientX-mouseX;
							mouseOffsetY=emovimiento.clientY-mouseY;
							mouseX=emovimiento.clientX;
							mouseY=emovimiento.clientY;
							iniciaX+=mouseOffsetX;
							iniciaY+=mouseOffsetY;
							if (iniciaX < 0)
								{
									iniciaX=0;
								}
							if (iniciaX>398)
								{
									iniciaX=398;
								}

							if (iniciaY<0)
								{
									iniciaY=0;
								}
							if (iniciaY>398)
								{
									iniciaY=398;
								}
							imagen.style.top=iniciaY+"px";
							imagen.style.left=iniciaX+"px";
						}

							console.log("moviendo");
						}

	}	