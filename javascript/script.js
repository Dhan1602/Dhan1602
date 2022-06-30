AOS.init();
const igmail = document.querySelector("#gmail");

igmail.addEventListener("click", function(e){
    e.preventDefault();
    var sLink = "mailto:" + escape("danielesteban2004@gmail.com")
     + "?subject=" + escape("Saludo")
     + "&body=" + "Hola Dani!";
    window.location.href = sLink;
})

// Funcion boton hamburguesa
const but = document.querySelector("#navToggle")
const navMenu = document.querySelector(".navMenu")

but.addEventListener("click", ()=>{
    navMenu.classList.toggle("navVisible")
})
