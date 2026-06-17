// ===== EFECTO TYPING =====

const text =
"Angular • Ionic • Node.js • QA Testing • SQL Server • MySQL";

let i = 0;

function typing() {

    if (i < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typing, 70);

    }

}

typing();


// ===== BOTÓN VOLVER ARRIBA =====

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ===== ANIMACIONES DE ENTRADA =====

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".card").forEach(card => {
    observer.observe(card);
});


// ===== RESALTAR MENÚ ACTIVO =====

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});