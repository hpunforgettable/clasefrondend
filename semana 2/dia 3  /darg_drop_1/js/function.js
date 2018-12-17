window.onload=function ()

	{

		var imagen = document.getElementsByClassName("imagen")[0]; //[0] porque solo queremos coger ese objeto y no todos del div
		var iniciaX = 498/2-50;
		var iniciaY = 498/2-50;

				// imagen.style.top=498/2-50+"px"; // 498/2 --> 249 -50 para que sea el centro de la imagen (img)
		imagen.style.top=iniciaY+"px";
		imagen.style.left=iniciaX+"px";

			var contenedor = document.getElementsByClassName("contenedor")[0];
			var offsetY=100; 
				// var offsetY = evento.clientY-100; //desde el margen de la pagina menos el margin (100)
				// el valor y se nos queda a 100 del borde 
			var offsetX=(window.innerWidth-500)/2; 
				/* (innerWith) nos devuelve el ancho del navegador en el momento que le pregunte -500 que
				es el valor del contenedor /2 para que nos saque uno de los lados */
			var mouseX=0;
			var mouseY=0;
			var mouseOffsetX=0;
			var mouseOffsetY=0;


			contenedor.onmousedown=function(pinchar) // al pinchar 
				{
					mouseX=pinchar.clientY;
					mouseY=pinchar.clientX;
					contenedor.addEventListener("mousemove",mover);
				}	

			contenedor.onmouseup=function(soltar) // al soltar
				{
					
					contenedor.removeEventListener("mousemove",mover); //cuando soltamos ya no nos pone moviendo
				}
						function mover(emovimiento) 
						{	
							var puedomover=false;

							if(emovimiento.clientX-offsetX>iniciaX && emovimiento.clientX-offsetX<iniciaX+100 && emovimiento.clientY-offsetY>iniciaY && emovimiento.clientY-offsetY<iniciaY+100) 
								
								{
									console.log (puedomover=true);
								}
							if (puedomover)
								{
									mouseOffsetX=emovimiento.clientX-mouseX;
									mouseOffsetY=emovimiento.clientY-mouseY;
									mouseX=emovimiento.clientX;
									mouseY=emovimiento.clientY;
									iniciaX+=mouseOffsetX;
									iniciaX+=mouseOffsetY;

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



					
						/* contenedor.onclick=function(econtenedor)
							{
								
								console.log("contenedor");	
							}

							imagen.addEventListener("mousemove",mover);
							imagen.onclick=function(eimagen)
							{
								eimagen.stopPropagation();
								console.log("imagen");	
							}

						*/



					 // añadimos escuchador de eventos addEventListener ( mínimo 2 parametros, máximo 3 ); 
					/* if(evento.clientX-offsetX>iniciaX && evento.clientX-offsetX<iniciaX+100 && 
					   evento.clientY-offsetY>iniciaY && evento.clientY-offsetY<iniciaY+100) 
						{
							console.log ("SI");
						}

							else 
							{
								console.log ("NO");
							}

					 //console.log("x:"+evento.layerX+",y:"+evento.layerY); //imprimirnos el valor de X e Y cuando pinchemos en la pantalla
					 console.log("x:"+evento.clientX+",y:"+evento.clientY); */


	}	