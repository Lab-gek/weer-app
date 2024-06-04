 function tempselc(){
     let tempSelect = document.getElementById('temp');
     let selectedValue = tempSelect.options[tempSelect.selectedIndex].value;

     if (selectedValue === 'Celsius') {
         document.cookie = "tempUnit=Celsius; path=/";
     } if (selectedValue === 'Fahrenheit') {
         document.cookie = "tempUnit=Fahrenheit; path=/";
     }
 }
 
 let darkMode = false; 

 function DarkmMode() {
     darkMode = !darkMode; 
 
     if (darkMode) {
         document.body.classList.add('dark-mode'); 
         document.cookie = "darkMode=enabled; path=/";
     } else {
         document.body.classList.remove('dark-mode'); 
         document.cookie = "darkMode=disabled; path=/"
     }
 }
 

 document.getElementById('toggle-mode').addEventListener('click', DarkmMode);
