const sections = document.querySelectorAll("section:not(#hero)");

for (let section of sections) {
    section.classList.add("hidden-section");
}

const option = {threshold: 0.2};
const callback = function(entries) {
    for (let entry of entries) {
        if (entry.isIntersecting) {
            entry.target.classList.remove("hidden-section");
            entry.target.classList.add("visible-section");
        }
    }
}

const observer = new IntersectionObserver(callback, option);

for (let section of sections) {
    observer.observe(section);
}

const navbar = document.querySelector("#navbar");
const header = document.querySelector("header");

let scrollInitial = 0;
window.addEventListener("scroll", () => {
    let scrollActuel = window.scrollY;
    if (window.scrollY >= scrollInitial) {
        header.classList.add("navbarCache");
    }else {
        header.classList.remove("navbarCache");
    }
    scrollInitial = window.scrollY
    if (window.scrollY > 50) {
        navbar.classList.add('navbarScrolled');
        navbar.classList.remove('bg-[#181f30]');
    }else {
        navbar.classList.remove('navbarScrolled');
        navbar.classList.add('bg-[#181f30]');
    }
});

const burger = document.querySelector("#burger");

burger.addEventListener("click", () => {
navbar.classList.toggle("menuOuvert");
navbar.classList.toggle("hidden")
});

const navLien = document.querySelectorAll("nav a");
for (let lien of navLien) {
    lien.addEventListener('click', () => {
        navbar.classList.remove("menuOuvert");
        navbar.classList.add("hidden")
    });
}
document.addEventListener("click", (event) => {
    if (!navbar.contains(event.target) && !burger.contains(event.target)) {
        navbar.classList.remove("menuOuvert");
        navbar.classList.add("hidden")
    }
});

/*  ==> Darkmode en Tailwind, à faire plus tard en React.
const darkButton = document.querySelectorAll(".darkButton");
for (let button of darkButton) {
    button.addEventListener("click", () => {
        document.querySelector("html").classList.toggle('dark');
    })
}
    */