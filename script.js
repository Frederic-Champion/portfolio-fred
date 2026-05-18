const sections = document.querySelectorAll("section");

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