var contproyectos = this.document.getElementById("contenidoProyectos");
var contcontactos = this.document.getElementById("contenidoContacto");
var contSobreMi = this.document.getElementById("contenidoSobreMi");


//Animaciones

var animacion1 = this.document.getElementById("barracontent");
var bajar = this.document.getElementById("bajar");
animacion1.style.opacity = "0";
contSobreMi.style.opacity = "0";
contcontactos.style.opacity = "0";
contproyectos.style.opacity = "0";


//Animacion Scroll
window.addEventListener("scroll", function () {

    var posicionObj1 = animacion1.getBoundingClientRect().top;
    var posicionObj2 = contSobreMi.getBoundingClientRect().top;
    let tamañoDePantalla = window.innerHeight / 1.7;
    let tamañoDePantalla2 = window.innerHeight / 2.3;

    if (posicionObj1 < tamañoDePantalla) {
        animacion1.style.opacity = "100%"
        bajar.style.opacity = "0%"
    } else {
        animacion1.style.opacity = "0%"
        bajar.style.opacity = "100%"
        contSobreMi.style.opacity = "0%"
    }
    if (posicionObj2 < tamañoDePantalla2) {
        contSobreMi.style.opacity = "100%"
    } else {
        contSobreMi.style.opacity = "0%"
    }

})

//Que contenido es visible

var yo = this.document.getElementById("sm");
var proyectos = this.document.getElementById("pr");
var contacto = this.document.getElementById("cnt");
activauno(yo, proyectos, contacto);
var b1 = true;
var b2 = false;
var b3 = false;

contproyectos.style.display = "none";
contcontactos.style.display = "none";

function activauno(a, b, c) {
    a.classList.add("active");
    b.classList.remove("active");
    c.classList.remove("active");
}

yo.addEventListener("click", function () {
    if (b1 == false) {
        contSobreMi.style.display = "block";
        contproyectos.style.display = "none";
        contcontactos.style.display = "none";
        b1 = true;
        b2 = false;
        b3 = false;
        activauno(yo, proyectos, contacto);
        aparecer(contSobreMi);
    }
})

proyectos.addEventListener("click", function () {
    if (b2 == false) {
        contSobreMi.style.display = "none";
        contproyectos.style.display = "block";
        contcontactos.style.display = "none";
        b1 = false;
        b2 = true;
        b3 = false;
        activauno(proyectos, yo, contacto);
        aparecer(contproyectos);
    }
})

contacto.addEventListener("click", function () {
    if (b3 == false) {
        contSobreMi.style.display = "none";
        contproyectos.style.display = "none";
        contcontactos.style.display = "block";
        b1 = false;
        b2 = false;
        b3 = true;
        activauno(contacto, yo, proyectos);
        aparecer(contcontactos);
    }
})


//animaciones aparecer
function aparecer(a) {
    a.style.opacity = "100%"
}

//link a mis redes sociales

const igmail = document.querySelector("#gmail");
const ilinkedin = document.querySelector("#linkedin");
const iinstagram = document.querySelector("#instagram");

igmail.addEventListener("click", function(){
    var sLink = "mailto:" + escape("danielesteban2004@gmail.com")
	 + "?subject=" + escape("Saludo")
	 + "&body=" + "Hola Dani!";
	window.location.href = sLink;
})

ilinkedin.addEventListener("click", function(){
    window.location="https://www.linkedin.com/in/daniel-velasquez-9523411b2/"
})

iinstagram.addEventListener("click", function(){
    window.location="https://www.instagram.com/dhan_music25/"
})