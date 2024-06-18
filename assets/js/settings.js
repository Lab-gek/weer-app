function tempselc() {
    const tempRadios = document.getElementsByName('temprature');
    const selectedValue = Array.from(tempRadios).find(radio => radio.checked)?.value;
    console.log('d')
    if (['Celsius', 'Fahrenheit'].includes(selectedValue)) {
        document.cookie = `tempUnit=${selectedValue}; path=/`;
    }
}



function contact(){
    console.log('test')
    var title = document.getElementById("Question").value
    var beschrijving = document.getElementById("Beschrijving").value
    var baseurl = 'https://github.com/skelter-studio-s/weer-app/issues/new?'
    var link = baseurl + "title=" + title + "&body=" + beschrijving
    console.log(link)
    window.open(link, '_blank')
}


function githubic(){ 
    setTimeout(210)
    console.log('test')
    const darkm = document.cookie.split("; ").find((row) =>row.startsWith("darkMode"))?.split("=")[1];
    if(darkm ==="enabled"){
        document.getElementById("githubic").src = 'assets/icons/github-light.svg'
        console.log("dark")
    } else {
        document.getElementById("githubic").src = 'assets/icons/github-dark.svg'
        console.log("light")
    }
}
window.load = githubic()
