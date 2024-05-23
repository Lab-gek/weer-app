Regengrafiek = document.getElementById('Regengrafiek');
TitleVoorspel = document.getElementById('TitleVoorspel');
Voorspeltxt = document.getElementById('Voorspeltxt');
Neerslagimg = document.getElementById('Neerslagimg');

buienradar.load(function () {
    buienradar.showRainChart('Regengrafiek');
    buienradar.forecast.report.title('TitleVoorspel')
    buienradar.forecast.report.text('Voorspeltxt')
    buienradar.map('Neerslagimg')
    //dag info in variablen
    for (let i = 0; i < 5; i++) {
        // maak de variablen aan
        tempmd[i] = document.getElementById('tempmd'+i);
        //tempmd[i] = document.getElementById(`tempmx${i}`);
        //rainch[i] = document.getElementById(`rainch${i}`);
        //rainmmMin[i] = document.getElementById(`rainmmMin${i}`);
        //rainmmMax[i] = document.getElementById(`rainmmMax${i}`);
        //sunch[i] = document.getElementById(`sunch${i}`);
        //winddir[i] = document.getElementById(`winddir${i}`);
        //windspeed[i] = document.getElementById(`windspeed${i}`);
        //icon[i] = document.getElementById(`icon${i}`);
        //vul in de variablen
        buienradar.forecast.fiveDays.temperature.min(`tempmd${i}` , i)
        buienradar.forecast.fiveDays.temperature.max(`tempmx${i}` , i)
        buienradar.forecast.fiveDays.rain.chance(`rainch${i}` , i)
        buienradar.forecast.fivedays.rain.mmMin(`rainmmMin${i}` , i)
        buienradar.forecast.fivedays.rain.mmMax(`rainmmMax${i}` , i)
        buienradar.forecast.fiveDays.sunChance(`sunch${i}` , i)    
        buienradar.forecast.fiveDays.wind.direction(`winddir${i}` , i)
        buienradar.forecast.fiveDays.wind.speed(`windspeed${i}` , i)
        buienradar.forecast.fiveDays.icon(`icon${i}` , i)
    }
}
)