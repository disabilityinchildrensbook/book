const toggleBtn = document.getElementById("themeToggle");
const root = document.body;

// Load saved theme on page load
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    root.classList.add("dark");
    toggleBtn.textContent = "☾";
}



// Toggle theme
toggleBtn.onclick = () => {
    root.classList.toggle("dark");

    if (root.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        toggleBtn.textContent = "☾";
    } 

    else {
        localStorage.setItem("theme", "light");
        toggleBtn.textContent = "☼";
    }
};




const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (!localStorage.getItem("theme") && prefersDark) {
    rootDyslexia.classList.add("dark");
}


const dyslexiaBtn = document.getElementById("dyslexiaToggle");
const rootDyslexia = document.body;

// load saved preference
if (localStorage.getItem("dyslexia") === "on") {
    rootDyslexia.classList.add("dyslexia");
}

// toggle
dyslexiaBtn.onclick = () => {
    rootDyslexia.classList.toggle("dyslexia");

    if (rootDyslexia.classList.contains("dyslexia")) {
        localStorage.setItem("dyslexia", "on");
    } else {
        localStorage.setItem("dyslexia", "off");
    }
};