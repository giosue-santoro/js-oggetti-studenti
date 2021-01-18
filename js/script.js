//Selettori
// var print = document.getElementById('el');

//Creazione oggetto con display delle proprietà
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