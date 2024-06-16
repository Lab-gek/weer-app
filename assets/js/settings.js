function tempselc() {
    const tempRadios = document.getElementsByName('temprature');
    const selectedValue = Array.from(tempRadios).find(radio => radio.checked)?.value;
    console.log('d')
    if (['Celsius', 'Fahrenheit'].includes(selectedValue)) {
        document.cookie = `tempUnit=${selectedValue}; path=/`;
    }
}

