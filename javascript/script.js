var animacion1= this.document.getElementById("barracontent");
var animacion2= this.document.getElementById("contenidoSobreMi");
animacion1.style.opacity = "0";
animacion2.style.opacity = "0";

//Animacion Scroll
window.addEventListener("scroll", function(){

    var posicionObj1 = animacion1.getBoundingClientRect().top;
    var posicionObj2 = animacion2.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañoDePantalla = window.innerHeight/1.7;

    if(posicionObj1< tamañoDePantalla){
        animacion1.style.opacity = "100%"
        animacion1.style.animation = "scroll 2s ease-out"
    }
    if(posicionObj2< tamañoDePantalla){
        animacion2.style.opacity = "100%"
        animacion2.style.animation = "scroll 2s ease-out"
    }
})