// de Buienradar code in de darkmode.js omdat deze overal word geladen
zonop = document.getElementById('zonop');
Weericonnav = document.getElementById('Weericonnav');
buienradar.load(function(){
        buienradar.date.time('zonop', buienradar.sunrise());
        buienradar.date.time('zonon', buienradar.sunset());
        buienradar.currentLocation.icon('Weericonnav')
    }
)

function modec(){
    const mode = document.cookie.split("; ").find((row) => row.startsWith("darkMode="))?.split("=")[1];
    if (mode === "enabled") {
        document.body.classList.add('dark-mode');
        console.log('aan')
    } else if (mode === "disabled") {
        document.body.classList.remove('dark-mode');
        console.log('uit')
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
        document.cookie = "darkMode=enabled; path=/";
        console.log('cookie t78')
    } else {
        document.body.classList.remove('dark-mode');
        document.cookie = "darkMode=disabled; path=/"
        console.log('cookie f86')
    }
}
window.onload = modec;
let darkMode = true;

function DarkmMode() {
    darkMode = !darkMode;

    if (!darkMode) {
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

