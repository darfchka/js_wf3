document.write("<h2> commentaire ,affichage ,concatenation</h2>");
console.log("hello world");

document.write("bonjour" + "tout le monde");


document.write("<h2> variable ,constantes et type de donnée</h2>");


/*une variable est un espace nommé ,appelé mémoire qui permet de conserver une valeur*/

var age = 15;
var monText = "hello";
var monTableau = [1, 2, 3];

var nom = "bilny", prenom = "david";

var fruits = "pomme";

document.write(fruits); //pomme

fruits += "fraise";

document.write(fruits); //pommefraise

//CONSTANTE
const MA_VARIABLE = 20;
const MAX = 199;



document.write(MAX);


/*type de variable*/

console.log(typeof age);

//OPERATEUR

var result = 10 + 5;

var result = 10 - 5;

var result = 10 * 5;

document.write(result);

var result = 10 / 5;

document.write(result);

var a = 5;

 a += 5; // 10


 //operateurs comparaison

 //!= different de.

 //CONDITIONS
var a = 99, b = 43, c = 22;

 if(a > b);{
//INSTRUCTION
    document.write("oui a est superieur a b");

 }


 if(a > b && b > c){
     document.write("vrai");
 }


 if(a > b && b < c){
     document.write("vrai");
 }

 if(a > b || b < c){
     document.write("vrai");
 }
else {
    document.write("faux");
}

var maVariable = 1, maVariable2 = "1";

if(maVariable === maVariable2){
    document.write("vrai");
}

else {
    document.write("faux");
}

//CONDITION TERNAIRE

var voiture = "bmw";

document.write((voiture == 'bmw') ? 'oui' : 'non');


var nombre = "toto";

resultat = parseInt(nombre) + age; //ADDITION FORCER PARSEINT

if(!isNaN(nombre)){// ! negation
    document.write('vrai');

}
else {
    document.write('faux');
}

// DECLARER UNE VARIABLE AGE ENSUITE VERIFIER SI LAGE SAISI DE LUTILISATEUR EST MAJEUR OU MINEUR

document.write('<br>');
var age = 20

if(age > 18){
    document.write("majeur");
}
else{
    document.write("mineur");
}

//declarer une constante

const NOMBRE = 20;

//type

console.log(typeof age);


//ternaire
var a = 2;

document.write((a < 4) ? "ok" : 'non' );


//ps4

var ps4 = 499.99;


var result = [ps4 * 19.6] / 100;
    document.write(resultat = 597.98);



    //CONDITION SWITCH

    var couleur = "jaune"

    switch(couleur)
    {
        case 'bleu': document.write('vous aimez le bleu');
        break;
        case'rouge':
        document.write('vous aimez le rouge')
        break;
        case'rose':
        document.write('vous aimez le rose')
        break;
        defautl:
        document.write('vous aimez aucune couleur')
        break;

    }

    var age = parseInt (prompt("veuillez saisir un age"));
    //verifier SI LUTILISATEUR SAISIE UN NOMBRE
    //SI LE NOMBRE SAISI EST BIEN UN NUMBER
    //VERIFIER SI LUTILISATEUR EST MAJEUR OU MINEUR

    if(isNaN(age)){
        if(age <= 18 ){
            document.write(majeur)
        }else{
            document.write(mineur)
        }

    }

    prompt( "saisi un nombre");
    prompt("saisi un nombre");

    parseInt (prompt("saisi un nombre"));