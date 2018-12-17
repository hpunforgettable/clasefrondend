window.onload= function()
{
	var imagenes=[];
	var letras=["A","B","C","D"];
	var colores=["FF0000","00FF00","00000FF","FF00FF","FFFF00","00FFFF"];
      var cartas=[];
	
      for(var i=0; i<4 ; i++)
      {

		imagenes[i]="http://placehold.it/200x300/"+ colores[Math.floor(Math.random()*colores.length)]+"/FFFFFF?text="+letras[i]
	/* colores[i] ( me genera 6 colores) en este caso queremos que nos saque los 6 colores aleatorios
       y redondear hacia abajo Math.random no saca del 0 a 0,9999999 y math.floot multiplica por 6 (debido a que nuestro array tiene 6 elementos)*/
        // math.floor redondea el numero hacia abajo (eje 8,7 = 8)
      }

      var preseleccion=[];

      for ( var i=0; i<6; i++)
      {
            var indice=Math.floor(Math.random()*imagenes.length); // lenght de imagenes = a 3 (se genera un valor aleatorio entre 0 y 3)
            preseleccion[i]={ img: imagenes[indice],carta:indice} // nos genera una carta aleatoria y nos guardamos el indice
      }


      for (var i=0; i<6; i++)
      {
            
            if (i<3)
            {
            cartas[i]=preseleccion[i];
            cartas[i+3]=preseleccion[i];
            }
            else
            {
            cartas[i+3]=preseleccion[i];
            cartas[i+6]=preseleccion[i];
            }

      }
            console.log(cartas);



      var cartasDom=[];
      var fase_juego= 0;
      var ultimo_click= cartas.length; // el ultimo click echo

      for (var i=0; i<cartas.length; i++)
      {  

            (function(indice)
            {

            addCarta(indice);

                  cartasDom[indice].onclick=function() // estan las cartas creadas y al hacer clic seleccionamos la posicion de la carta 
                  {
                        if (indice!=ultimo_click)
                        {
                              if (fase_juego<1)
                              {
                                    this.childNodes[1].className= "mascara mostrar";
                                    ultimo_click=indice;
                                    fase_juego=1;
                              }
                              else
                              {

                                    this.childNodes[1].className= "mascara mostrar";
                                    setTimeout(function(){
                                          if (cartas[indice].carta==cartas[ultimo_click].carta) // si la carta en la que pinchamos es igual que la anterior pinchadas
                                          {
                                                cartasDom[indice].className="carta invisible";
                                                cartasDom[ultimo_click].className="carta invisible";
                                          }
                                          else
                                          {
                                                cartasDom[indice].childNodes[1].className="mascara";
                                                cartasDom[ultimo_click].childNodes[1].className="mascara";

                                          }
                                          fase_juego=0;
                                    },500);   
                              }
                        }

                        //this.childNodes[1].className= "mascara mostrar";
                        // console.log(indice); // muestra la posición de la carta seleccionada
                  }

                  })(i);

      }


      function addCarta(indice)
      {
      	var carta = document.createElement("div");
      	carta.className= "carta" ;
      	var imagen = document.createElement("img");
      	imagen.src = cartas[indice].img;
      	var mascara = document.createElement("div");
            mascara.className = "mascara";
      	carta.appendChild(imagen);
      	carta.appendChild(mascara);
      	document.getElementsByClassName("tablero")[0].appendChild(carta);
            cartasDom.push(carta);

        
      }


}      
