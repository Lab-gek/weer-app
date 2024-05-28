Regengrafiek = document.getElementById('Regengrafiek');
TitleVoorspel = document.getElementById('TitleVoorspel');
Voorspeltxt = document.getElementById('Voorspeltxt');
Neerslagimg = document.getElementById('Neerslagimg');
Weericonnav = document.getElementById('Weericonnav');
legal= document.getElementById('legal');
zonop = document.getElementById('zonop');
function celciusToFahrenheit(celcius) {
    return celcius * 9 / 5 + 32;
}
buienradar.load(function () {
    buienradar.showRainChart('Regengrafiek');
    buienradar.forecast.report.title('TitleVoorspel')
    buienradar.forecast.report.text('Voorspeltxt')
    buienradar.map('Neerslagimg')
    buienradar.currentLocation.icon('Weericonnav')
    buienradar.buienradar.copyright('legal');
    buienradar.sunrise('zonop');
    console.log(zonop)
    //dag info in variablen
    const parent = document.getElementById('fivedParrent')

    for (let loop = 1; loop < 6; loop++) {
        const divi = document.createElement('div');
        // Hier mee kan je de verschillende dagen in css met Idag[dag] een nieuwe posite geven als nodig is
        divi.classList.add(`Idag${loop}`);

        const day  = document.createElement('h4');
        day.innerText = `Dag ${loop}`;

        const rain = document.createElement('p');
        rain.innerText = `Rain min ${buienradar.forecast.fiveDays.rain.mmMin(loop)} max ${buienradar.forecast.fiveDays.rain.mmMax(loop)}`;

        const temp = document.createElement('p');
        temp.innerText = `Temp min ${buienradar.forecast.fiveDays.temperature.min(loop)} max ${buienradar.forecast.fiveDays.temperature.max(loop)}`;

        const wind = document.createElement('h5');
        wind.innerText = 'Wind info';

        const windsp = document.createElement('p');
        windsp.innerText = ` snelheid ${buienradar.forecast.fiveDays.wind.speed(loop)} richting  ${buienradar.forecast.fiveDays.wind.direction(loop)}`;

        const sun = document.createElement('p');
        sun.innerText = `zon kans ${buienradar.forecast.fiveDays.sunChance(loop)}%`;

        const icon = document.createElement('img');
        icon.src = buienradar.forecast.fiveDays.icon(loop);

        divi.appendChild(day);
        divi.appendChild(temp);
        divi.appendChild(rain);
        divi.appendChild(wind);
        divi.appendChild(windsp);
        divi.appendChild(sun);
        divi.appendChild(icon);

        // Append the divi to the parent
        parent.appendChild(divi);
    }
}
)