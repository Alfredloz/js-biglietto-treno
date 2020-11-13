//messaggio di benvenuto
alert('BENVENUTO! prima di continuare inserisci i seguenti dati!');

// compilazione dati
var userName = prompt('Inserisci nome e cognome');
var userAge = prompt('inserisci età');
var userDistance = Number(prompt('Inserisci la distanza che vuoi percorrere'));
// calcoli dei km

var totalKm = Number(userDistance * 0.21);

// calcolo sconto a seconda della fascia d'età
//sconto minorenni
if (userAge < 18) {
  var scontoMinorenni = Number ((totalKm * 20) / 100);
  document.getElementById('total_price').innerHTML= totalKm - scontoMinorenni;
}
if (userAge > 65) {
  var anziani = Number((totalKm * 40) / 100);
  document.getElementById('total_price').innerHTML= totalKm - anziani;
}
//condizioni di inserimento dei dati
if (isNaN(userAge)) {
  alert('attenzione!');
} else {
  document.getElementById('user_age').innerHTML= userDistance;
}
if (isNaN(userDistance)) {
  alert('attenzione!');
} else {
  document.getElementById('user_km').innerHTML= userDistance;
}

// prove console.log
console.log(totalKm);
console.log(isNaN(userDistance));
console.log(scontoMinorenni);
