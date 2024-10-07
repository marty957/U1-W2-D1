/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const testo =
  " questo datatype è una stringa letterale, quindi se scrivo un numero in cifre il browser lo leggera come una sequanza letterare he forma un numero";
console.log(testo);

/* per esempio se scrivo un numero dentro gli apici è un STRINGA DI TESTO
const testoNumerico = "1253645563246"*/

const testoNumerico = "12366546652";
console.log(testoNumerico);

/*datatype numerici */

const numericoIntero = 123456789;
console.log(numericoIntero);

const numericoDecimale = 1233.213123;
console.log(numericoDecimale);

/* datatype booleani ammettono solo 2 valori true o false, di solito si utilizzano per confrontare due variabili in vario modo e servono successivamente per poter far "prendere" al codice strade diverse.*/

const booleani = "true or false";
console.log(booleani);

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const myName = "martina";
console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num1 = 12;
const num2 = 20;
console.log(num1 + num2);
const num3 = num1 + num2;
console.log(num3);

let a = "5";
let b = 10;
console.log(a + b); /* risultato 510 perchè la variabile a è una stringa, non un numero*/
a = 5;
console.log(a + b);
let c = "20";
b = "apple";
console.log(b - a); /* risultato NaN not a a number */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*const myName = "il tuo cognome";  non posso rinominare una variabile const il browser mi da un errore di sentassi che mi blocca tutto il codice */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const newVar = 4 - x;
console.log(newVar);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).


*/

/* SCRIVI QUI LA TUA RISPOSTA */

const name1 = "john";
const name2 = "John";

console.log(name1 === name2); /* false*/
console.log(name1 == name2); /*false*/
console.log(name1 !== name2); /*true*/
console.log(name1 != name); /*true*/

console.log(name1 === name2.toLowerCase());
