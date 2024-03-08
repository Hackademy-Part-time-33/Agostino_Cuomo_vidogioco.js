/* TRACCIA 1 */
let num =2;

for( i =1; i<20; i+=2){
    console.log(num);
    num += 2;
};

/* TRACCIA 2 */
console.log("traccia 2");
let secondo =0;
let resto= secondo%2;
let numeri_dispari=[];
let media=0;
for(let i=0; i<=20; i++){
    if(secondo % 2== 0){
    console.log(secondo);
    } else{numeri_dispari.push(secondo);
   media += secondo;
    }
    secondo++;
}
console.log(numeri_dispari);
console.log(`QUESTA è LA MEDIA DEI NUMERI DISPARI: ${media / 20}`);



/* TRACCIA 3 */
Bibita= prompt("Che bibita scegli? \n (1) Acqua\n (2) Coca-cola \n(3)Birra");
while (Bibita != '1' && Bibita != '2' && Bibita != "3") {
    Bibita= prompt("Che bibita scegli? \n (1) Acqua\n (2) Coca-Cola \n(3)Birra");
}
switch (Bibita) {
    case "1":
        console.log("Hai selezionato l'acqua");
        break;
case "2":
    console.log("Hai selezionato la Coca-Cola");
    break;
case "3":
    console.log("Hai selezionato la Birra");   
    break; 
    
    default:
        break;
}

/* TRACCIA 4 */
let startGame = prompt ("Sei pronto? \n(1)Inizia la partita \n(2)Esci dal Gioco");

let vita = 1;
let fuga =0;


while (startGame != '1' && startGame != '2') {
    startGame = prompt("Sei pronto? \n (1) Inizia la partita \n (2) Esci dal gioco");
}
console.log(startGame);

if(startGame== "1" && vita == "1"){
    alert("incomincia la partita");
   

    while(vita =="1"){
        let probabilità = Math.random();
        let ProbTubo= Math.round(probabilità * 3);
    let ostacolo = prompt("Ci sono 3 tubi in cui saltare , in quale ti vuoi buttare per scappare nal nemico 1\n ");
 console.log(ostacolo);
 console.log(ProbTubo);
     if(ostacolo== "2" && ProbTubo== "2" ){
           alert("Sei scappato in Tempo, numero fuga: " + fuga);
            fuga +=1;
       }else if (ostacolo == "1" && ProbTubo== "1"){
    alert("Sei scappato in Tempo, numero fuga: " + fuga);
    fuga +=1;
  }else if (ostacolo =="3" && ProbTubo== "3"){
        alert("Sei scappato in Tempo, numero fuga: " + fuga);
        fuga +=1;
      } else {
                 alert("ti hanno preso, riprova!");
                 vita=0;
               
      }
    }
    alert("Ti hanno preso dopo essere scappato " + fuga +" volta");
    startGame=1;
    vita =1;
}  
        
  