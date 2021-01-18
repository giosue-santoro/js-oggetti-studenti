//Selettori
// var print = document.getElementById('el');

//Creazione oggetto con display delle proprietà
console.log('PROPRIETA\' DEL PRIMO STUDENTE');
var studente = {
    nome : "Pinco",
    cognome : "Pallino",
    età : 60
};

for (var key in studente) {
    console.log(studente[key]);
}

//Array di oggetti con display nome e cognome di ogni oggetto

var studenteX = {
    nome : "Marco",
    cognome : "Marchi",
    età : 15
}

var studenteY = {
    nome : "Filippo",
    cognome : "Filippi",
    età : 30
}

var studenteZ = {
    nome : "Guido",
    cognome : "Guidi",
    età : 45
}

var studenti = [studente, studenteX, studenteY, studenteZ]

//Stampo nome e cognome degli studenti nell'array
console.log('NOME E COGNOME DEL RESTO DEGLI STUDENTI');

for ( var i = 0; studenti.length > i; i++) {
    var singoloOggetto = studenti[i];
    console.log(singoloOggetto.nome);
    console.log(singoloOggetto.cognome);    
}