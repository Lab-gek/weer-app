 function tempselc(){
    console.log('temp')
     let tempSelect = document.getElementById('temp');
     let selectedValue = tempSelect.options[tempSelect.selectedIndex].value;

     if (selectedValue === 'Celsius') {
         document.cookie = "tempUnit=Celsius; path=/";
     } if (selectedValue === 'Fahrenheit') {
         document.cookie = "tempUnit=Fahrenheit; path=/";
     }
 }

