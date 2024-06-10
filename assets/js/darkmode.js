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
        console.log('cookie q')
        document.body.classList.add('dark-mode');
  
    } else {
        document.body.classList.remove('dark-mode');
        console.log('cookie w')
    }
}

let darkMode = false;

function DarkmMode() {
    darkMode = !darkMode;

    if (window.matchMedia('(prefers-color-scheme: dark)').matches || !darkMode) {
        document.body.classList.add('dark-mode');
        document.cookie = "darkMode=enabled; path=/";
        console.log('cookie t')
        modec()
        
    } else {
        document.body.classList.remove('dark-mode');
		document.cookie = "darkMode=disabled; path=/"
        console.log('cookie f')
    }
}
document.getElementById('toggle-mode').addEventListener('click', DarkmMode)