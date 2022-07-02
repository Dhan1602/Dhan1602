AOS.init();
const igmail = document.querySelector("#gmail");

igmail.addEventListener("click", function (e) {
    e.preventDefault();
    var sLink = "mailto:" + escape("danielesteban2004@gmail.com")
        + "?subject=" + escape("Saludo")
        + "&body=" + "Hola Dani!";
    window.location.href = sLink;
})

// Funcion boton hamburguesa
const but = document.querySelector("#navToggle")
const navMenu = document.querySelector(".navMenu")

but.addEventListener("click", () => {
    navMenu.classList.toggle("navVisible")
})

// Funcion de scroll

function navScroll(a, b, c, d) {
    a.classList.add("active")
    b.classList.remove("active")
    c.classList.remove("active")
    d.classList.remove("active")
}
function navRScroll(a, b, c) {
    a.style.setProperty("font-size", "10vw")
    a.style.setProperty("text-decoration", "none")
    b.style.setProperty("font-size", "8vw")
    b.style.setProperty("text-decoration", "underline #fff")
    c.style.setProperty("font-size", "8vw")
    c.style.setProperty("text-decoration", "underline #fff")
}

function flechita(a, b, c) {
    a.style.setProperty("opacity", "100%")
    b.style.setProperty("opacity", "0%")
    c.style.setProperty("opacity", "0%")
}

const barra = document.querySelectorAll(".barra");
const menuR = document.querySelectorAll(".aResponsive")
const flechas = document.querySelectorAll(".arrow")

const misElementos = document.querySelectorAll(".observar");

const observer = new IntersectionObserver(secciones => {
    secciones.forEach((section) => {
        if (section.isIntersecting) {
            if (section.target.getAttribute("id") == "about") {
                navScroll(barra[0], barra[1], barra[2], barra[3]);
                navRScroll(menuR[0], menuR[1], menuR[2]);
                flechita(flechas[0], flechas[1], flechas[2]);
            } else if (section.target.getAttribute("id") == "abilities") {
                navScroll(barra[1], barra[2], barra[3], barra[0]);
                navRScroll(menuR[1], menuR[2], menuR[0]);
                flechita(flechas[1], flechas[2], flechas[0]);
            }
            else if (section.target.getAttribute("id") == "contenidoProyectos") {
                navScroll(barra[2], barra[0], barra[1], barra[3]);
                navRScroll(menuR[2], menuR[0], menuR[1]);
                flechita(flechas[2], flechas[0], flechas[1]);
            } else if (section.target.getAttribute("id") == "footer") {
                navScroll(barra[3], barra[0], barra[1], barra[2]);
            }
        }
    });
}, {
    rootMargin: "0px",
    threshold: .1
});

misElementos.forEach(elem => observer.observe(elem));