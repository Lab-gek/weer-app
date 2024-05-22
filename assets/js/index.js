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
         buienradar.forecast.fiveDays.temperature.min(`tempmd${i}` , i)
         buienradar.forecast.fiveDays.temperature.max(`tempmx${i}` , i)
         buienradar.forecast.fiveDays.rain.chance(`rainch${i}` , i)
         buienradar.forecast.fivedays.rain.mmMin(`rainmmMin${i}` , i)
         buienradar.forecast.fivedays.rain.mmMax(`rainmmMax${i}` , i)
         buienradar.forecast.fiveDays.sunChance(`sunch${i}` , i)    
         buienradar.forecast.fiveDays.wind.direction(`winddir${i}` , i)
         buienradar.forecast.fiveDays.wind.speed(`windspeed${i}` , i)
         buienradar.forecast.fiveDays.icon(`icon${i}` , i)
});