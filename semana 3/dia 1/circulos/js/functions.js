$ (document).ready(function(){
	
	var puntuacion = document.getElementsByClassName("circulo").length;
	var tiempo = 10;

	int();
	$(".reset").click(function(evento) {
		evento.preventDefault();
		int();
	});
	

	// Refactorizar --> optimizar

	function int () 
	{
		$(".circulo").removeClass("invisible");
		$(".timer").empty(); // vacia todo el dom que tenga timer, párrafos, div clases, id's etc.


			puntuacion = document.getElementsByClassName("circulo").length;
		

		$(".puntuacion").html(puntuacion);

		$(".circulo").click(function()
		{
			if (!$(this).hasClass("invisible"))
			{
			$(this).addClass("invisible")
			puntuacion--;

			 if (puntuacion==0) // ==$(".circulo").length
			 		{
			 			clearInterval(timer);
			 			$(".fondo_modal").show();
			 			$(".modal h3").html("You Win!"); // machacamos el texto a introducir dependiendo si ganaste o perdiste
			 		}

			$(".puntuacion").html(puntuacion)

			}

		})

		tiempo = 10;
		$(".fondo_modal").hide(); //funcion que en el momento que lo lee aparece como none
			for (var i=0; i<tiempo; i++)
			{
				var bloque=$("<div></div>").addClass("bloque_timer");
					bloque.css("width",100/tiempo-1+"%");
					$(".timer").append(bloque);
			}
		var timer = setInterval(function(){
			if (tiempo>0){
				// console.log(tiempo);
				$(".bloque_timer").eq(tiempo-1).fadeOut() //eq selecciona un valor del tiempo y fadeOut es una animacion para desvanecerse
				tiempo--;
			}
			else 
			{
					clearInterval(timer);
					$(".fondo_modal").show();
					$(".modal h3").html("Game over");
					console.log("game over");
			}

		},1000);

	}








});