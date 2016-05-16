function iniciar(){
var elemento=document.getElementById('lienzo');
lienzo=elemento.getContext('2d');
var imagen=new Image();
imagen.src="img/giro,jpg";
imagen.addEventListener("load", function(){
lienzo.drawImage(imagen,135,30,50,50,0,0,200,200)
}, false);
} window.addEventListener("load", iniciar, false);