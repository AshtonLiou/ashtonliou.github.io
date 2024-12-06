document.addEventListener("DOMContentLoaded", () => {
    const themeSwitch = document.getElementById("theme-switch")
    themeSwitch.checked = localStorage.getItem("theme") == "light" ? false : true;
    themeSwitch.onchange = () => {
        const newTheme = themeSwitch.checked ? "dark" : "light";
        document.querySelector("html").setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };
});