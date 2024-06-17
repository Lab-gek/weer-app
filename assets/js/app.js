buienradar.load(function () {
    const parent = document.getElementById('fivedParrent')

    for (let loop = 1; loop < 6; loop++) {
        const divi = document.createElement('div');
        // Hier mee kan je de verschillende dagen in css met Idag[dag] een nieuwe posite geven als nodig is
        divi.classList.add(`Adag${loop}`);
        divi.classList.add('Alines')

        const day  = document.createElement('h4');
        day.innerText = `Weer voor ${ buienradar.date.name(buienradar.forecast.fiveDays.date(loop))}`;

        const rain = document.createElement('p');
        rain.innerText = `Regen min ${buienradar.forecast.fiveDays.rain.mmMin(loop)} mm max ${buienradar.forecast.fiveDays.rain.mmMax(loop)} mm`;

        //cookie reading
        const tempc = document.cookie
            .split("; ")
            .find((row) => row.startsWith("tempUnit="))
            ?.split("=")[1];

        const temp = document.createElement('p');
        if (tempc === "Fahrenheit"){

            temp.innerText = `Temp min ${celciusToFahrenheit(buienradar.forecast.fiveDays.temperature.min(loop))} °F max ${celciusToFahrenheit(buienradar.forecast.fiveDays.temperature.max(loop))}°F`;
        } else{
            temp.innerText = `Temp min ${buienradar.forecast.fiveDays.temperature.min(loop)}°C max ${buienradar.forecast.fiveDays.temperature.max(loop)}°C`;
        }
        
        const windsp = document.createElement('p');
        windsp.innerText = `Wind snelheid ${buienradar.forecast.fiveDays.wind.speed(loop)} richting  ${buienradar.forecast.fiveDays.wind.direction(loop)}`;

        const sun = document.createElement('p');
        sun.innerText = `Zonnen kans ${buienradar.forecast.fiveDays.sunChance(loop)}%`;

        const icon = document.createElement('img');
        icon.src = buienradar.forecast.fiveDays.icon(loop);

        divi.appendChild(day);
        divi.appendChild(temp);
        divi.appendChild(rain);
        divi.appendChild(sun);
        divi.appendChild(windsp);
        divi.appendChild(icon);
    
        parent.appendChild(divi);
    }
}
)
function  celciusToFahrenheit(celcius) {
    return celcius *9 /5 +32;
}

