Regengrafiek = document.getElementById('Regengrafiek');
TitleVoorspel = document.getElementById('TitleVoorspel');
Voorspeltxt = document.getElementById('Voorspeltxt');
Neerslagimg = document.getElementById('Neerslagimg');
Weericonnav = document.getElementById('Weericonnav');
legal= document.getElementById('legal');
zonop = document.getElementById('zonop');

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
    let tempmd = {};
    let rainmmMax = {};
    let sunch = {};
    let winddir = {};
    let windspeed = {};
    let icon = {};
    
    for(let i = 0; i < 5; i++) {
        tempmd[`tempmd`+i] = buienradar.forecast.fiveDays.temperature.min(i);
        document.getElementById(`tempmd`+i).innerText = tempmd[`tempmd`+i];

        console.log(tempmd[`tempmd`+i]);
        rainmmMax[`rainmmMax`+i] = buienradar.forecast.fiveDays.rain.mmMax(i);
        document.getElementById(`rainmmMax`+i).innerText = rainmmMax[`rainmmMax`+i];
    
        sunch[`sunch`+i] = buienradar.forecast.fiveDays.sunchance(i);
        document.getElementById(`sunch`+i).innerText = sunch[`sunch`+i];
    
        winddir[`winddir`+i] = buienradar.forecast.fiveDays.wind.direction(i);
        document.getElementById(`winddir`+i).innerText = winddir[`winddir`+i];
    
        windspeed[`windspeed`+i] = buienradar.forecast.fiveDays.wind.speed(i);
        document.getElementById(`windspeed`+i).innerText = windspeed[`windspeed`+i];
    
        icon[`icon`+i] = buienradar.forecast.fiveDays.icon(i);
        document.getElementById(`icon`+i).src = icon[`icon`+i];
    }
    }
,
)