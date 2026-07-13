const root = document.documentElement;
const themeButton = document.querySelector(".theme-toggle");
const navLinks = Array.from(document.querySelectorAll(".site-nav a[href^='#']"));
const sections = Array.from(document.querySelectorAll("main section[id]"));

const storedTheme = localStorage.getItem("cv-theme");
const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

function setTheme(theme) {
    const isDark = theme === "dark";
    root.setAttribute("data-theme", theme);

    if (themeButton) {
        themeButton.setAttribute("aria-pressed", String(isDark));
        themeButton.setAttribute("aria-label", isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro");
    }
}

setTheme(storedTheme || preferredTheme);

if (themeButton) {
    themeButton.addEventListener("click", () => {
        const nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
        localStorage.setItem("cv-theme", nextTheme);
        setTheme(nextTheme);
    });
}

function updateCurrentSection() {
    const activeSection = sections.reduce((current, section) => {
        const top = section.getBoundingClientRect().top;
        return top <= 120 ? section : current;
    }, sections[0]);

    navLinks.forEach((link) => {
        const isCurrent = activeSection && link.getAttribute("href") === `#${activeSection.id}`;
        if (isCurrent) {
            link.setAttribute("aria-current", "true");
        } else {
            link.removeAttribute("aria-current");
        }
    });
}

if (sections.length > 0) {
    updateCurrentSection();
    window.addEventListener("scroll", updateCurrentSection, { passive: true });
}
