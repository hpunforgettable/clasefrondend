window.onload=function()
{


	var slider = document.getElementsByClassName("slider")[0];
	var imagenes = document.getElementsByClassName("imagen");
	var proporcion = imagenes[0].naturalHeight/imagenes[0].naturalWidth;	// es el numero que tenemos que multiplicar el ancho por el alto para escalar la imagen cuando cambiamos de dispositivo
	// console.log(proporcion);
	slider.style.height=window.innerWidth*proporcion+"px"; // para que se escale la imagen cuando cambiamos el ancho

	window.onresize=function()
	{
	var proporcion = imagenes[0].naturalHeight/imagenes[0].naturalWidth;	
	slider.style.height=window.innerWidth*proporcion+"px";

	}
}