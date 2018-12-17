$(document).ready(function(){

var array_grafico = [];
var izquerda = $('<div class="corchete corchete-izquerda"</div>');
var derecha	= $('<div class="corchete corchete-derecha"</div>');
	
	$(".insertar").submit(function(evento){
		evento.preventDefault();
		// console.log("funciona");

		if ($("#entrada").val()!="")     /* val equivalente a value en java */
			{
				//console.log($(".seleccion")); 
				// seleccion me imprime los elementos que hay con este clase y en *checked* imprime true en el seleccionr y en el no seleccionado false
				var enviar = false;
				var posicion = 1; /* o también podriamos ponerle null */

					$(".seleccion").each(function(indice) // each recorre el array de seleccion 
					{  

						if ($(".seleccion")[indice].checked) // si uno de los selectores esta marcado, cambia la variable a true
						{

							enviar=true;
							posicion=indice; // por lo tanto el indice es 0 o 1 dependiendo del boton seleccionado
						}

					});

					if (enviar) // por defecto ya es true
						{		
							if (posicion>0)
							{
								array_grafico.push($("#entrada").val()); // push ()inserta valores al final del array

							}
							else
							{
								array_grafico.unshift($("#entrada").val()); // unshift() inserta valores al principio del array
							}

							$(".contenedor-array").empty();
								$(".contenedor-array").append(izquerda);
									for (var i=0; i<array_grafico.length; i++) 
									{
										var elemento = $ ("<p></p>").addClass("elemento");
										var add = "";
											if (array_grafico.length>1 && i<array_grafico.length-1) /* al primer elemento no le ponemos coma ni al ultimo */
												{
													add=",";
												}
													elemento.html(array_grafico[i]+add);
														var eliminar = $('<a href="#" data-indice="'+i+'">x</a>').addClass("close");
														elemento.prepend(eliminar);


															$(".contenedor-array").append(elemento);

									}
									$(".contenedor-array").append(derecha);

						}

					console.log(array_grafico);
			} 


	});


	$(".close").click(function (evento){
		evento.preventDefault();
		console.log("holi");

	})

});