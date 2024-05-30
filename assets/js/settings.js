//function DarkModeToggle() {
  //  var element = document.body;
 //   element.classList.toggle("dark-mode");
// }
 function tempselc(){
     let tempSelect = document.getElementById('temp');
     let selectedValue = tempSelect.options[tempSelect.selectedIndex].value;

     if (selectedValue === 'Celsius') {
         document.cookie = "tempUnit=Celsius; path=/";
     } else if (selectedValue === 'Fahrenheit') {
         document.cookie = "tempUnit=Fahrenheit; path=/";
     }
 }