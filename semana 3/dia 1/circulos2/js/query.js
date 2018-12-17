$ (document).ready(function(){
	var puntuacion_uno= document.getElementsByClassName("uno").length;
	var puntuacion_dos= document.getElementsByClassName("dos").length;
	var puntuacion_total=puntuacion_uno+puntuacion_dos;
	
	$(".puntuacion").html(puntuacion_total)






		$(".uno,.dos").click(function(){
		if (!$(this).hasClass("invisible"))
		{
			$(this).addClass("invisible")
			puntuacion_total--;
			$(".puntuacion").html(puntuacion_total)

		}

	})

});