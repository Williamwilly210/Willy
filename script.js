/* =========================
   LOADER
========================= */
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
});


/* =========================
   MOBILE MENU
========================= */
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


/* =========================
   CLOSE MENU AFTER CLICK
========================= */
document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});


/* =========================
   HEADER SCROLL EFFECT
========================= */
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.style.background = "rgba(5,8,22,0.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";
    } else {
        header.style.background = "rgba(0,0,0,.25)";
        header.style.boxShadow = "none";
    }
});


/* =========================
   SMOOTH ACTIVE LINK
========================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
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


/* =========================
   SCROLL REVEAL ANIMATION
========================= */
const revealElements = document.querySelectorAll(
    ".about-card, .timeline-item, .project-card, .skill-box, .contact-info, .contact-form"
);

function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < triggerBottom) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
}

revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = ".7s ease";
});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


/* =========================
   TYPING EFFECT
========================= */
const typingText = document.querySelector(".hero h3");

const words = [
    "Informatics Student",
    "Web Developer",
    "Backend Learner",
    "Tech Enthusiast",
    "Future Software Engineer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (!deleting) {
        typingText.textContent = currentWord.substring(0, charIndex++);
    } else {
        typingText.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = deleting ? 60 : 120;

    if (!deleting && charIndex === currentWord.length + 1) {
        speed = 1200;
        deleting = true;
    }

    if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


/* =========================
   PARALLAX HERO
========================= */
window.addEventListener("mousemove", (e) => {
    const profile = document.querySelector(".profile-card");

    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;

    profile.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;
});


/* =========================
   CONTACT FORM VALIDATION
========================= */
const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {
    const name = form.querySelector('input[name="name"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const message = form.querySelector('textarea[name="message"]').value.trim();

    if (name === "" || email === "" || message === "") {
        e.preventDefault();
        alert("Semua field wajib diisi.");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        e.preventDefault();
        alert("Format email tidak valid.");
        return;
    }

    alert("Pesan berhasil dikirim!");
});


/* =========================
   CONSOLE BRANDING
========================= */
console.log(`
========================================
 William Tahan Sio Marpaung Portfolio
 Informatika | Politeknik Negeri Batam
 GitHub : Williamwilly210
========================================
`);
