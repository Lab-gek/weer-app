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
    buienradar.date.time('zonop', buienradar.sunrise());
    buienradar.date.time('zonon', buienradar.sunset());
}
)