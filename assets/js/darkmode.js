window.onload = function modec(){
    const mode = document.cookie.split("; ").find((row) => row.startsWith("darkMode="))?.split("=")[1];
    if (mode === "enabled") {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

function modec(){
    const mode = document.cookie.split("; ").find((row) => row.startsWith("darkMode="))?.split("=")[1];
    if (mode === "enabled") {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

let darkMode = false;

function DarkmMode() {
    darkMode = !darkMode;

    if (window.matchMedia('(prefers-color-scheme: dark)').matches && !darkMode) {
        document.body.classList.add('dark-mode');
        document.cookie = "darkMode=enabled; path=/";
        modec()
    } else {
        document.body.classList.remove('dark-mode');
        document.cookie = "darkMode=disabled; path=/"
    }
}


document.getElementById('toggle-mode').addEventListener('click', DarkmMode);
