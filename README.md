# Agostino_Cuomo_vidogioco.js
Traccia 1:
Scrivi un programma che dato un numero, let num = 2, stampi la rispettiva tabellina corrispondente.

Traccia 2:
Scrivi un programma che stampi dei numeri da 1 a 20 ma solo quelli pari. Di tutti i numeri dispari, invece, calcola anche la media e stampala a schermo.

Traccia 3:
Scrivi un programma che simuli un distributore di bevande e che rispetti i seguenti passaggi:
l’utente deve poter inserire un numero
in console dev’essere stampato il messaggio del distributore
se inserisce 1, seleziona acqua e quindi stampare in console: “E’ stata selezionata l’acqua”
se inserisce 2, seleziona coca cola e quindi stampare in console: “E’ stata selezionata coca cola”
se inserisce 3, seleziona birra e quindi stampare in console: “E’ stata selezionata birra”
se inserisce qualcosa di diverso, il programma dovra’ riproporre automaticamente la domanda di partenza

Traccia  4:
Sviluppare un programma che simuli il gioco di Mario Bros! Usate un po' di immaginazione! 
let startGame = prompt(Sei pronto? \n (1) Inizia la partita \n (2) Esci dal gioco);
let life = 3;

while (startGame != '1' && startGame != '2') {
    startGame = prompt(Sei pronto? \n (1) Inizia la partita \n (2) Esci dal gioco);
}

// Preme tasto 1
if (startGame == '1') {
    alert(Buona partita);
    let enemy = prompt(Attento c'e' un nemico! Premi: \n (1) Salta e corri \n (2) Salta sopra al nemico ed eliminalo );
    switch (enemy) {
        case '1':
            alert(C'e' mancato poco! Sei riuscito a schivare il primo nemico.);
            break;
        case '2':
            alert(WOW! Bravissimo! L'hai fatto fuori! Continua cosi');
            break;    
        default:
            alert(Peccato sei troppo lento... GAME OVER!)
            break;
    }
} else { // Preme 2
    alert(Sei uscito dal gioco! Mi spiace che tu non voglia giocare oggi!);
