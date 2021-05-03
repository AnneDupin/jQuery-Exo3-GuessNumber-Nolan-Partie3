// Limite de 3 nombres dans l'input
$('input').keypress(function() {
    if($(this).val().length >= 3) {
       $(this).val($(this).val().slice(0, 3));
       return false;
   }
});
// Settings Random Numbers
function random(){
var randomNum =  Math.floor(Math.random() * 100) +1;
   randomNum = randomNum.toString();
     while (randomNum.length < 3) {
       randomNum =  "0" + randomNum;
     } 
    return randomNum;
}

var attempt = 1;
var randomN = random();
var chances = 5;

// compare random number wiht user's input
function guessMe(inputNum){
 var str = inputNum.toString();
 input = str.split("");

 if (attempt >5){
   alert("Désolé.e ! Tu as perdu !") 
   var chan = chances--;
 } else{
 var res = [];
 var strRand = randomN.toString();
 var pok = strRand.split("");
   if(inputNum == randomN){
     alert("Tu as réussi ! Tu as deviné le nombre avec " + attempt + " tentatives !");
     res.push("BRAVO C'EST GAGNE !!!");
   } else{
     if(attempt ==5){
       alert("Dernière chance...")
     }
     for(i=0; i<pok.length; i++){
         if(pok[i] != input[i] ){
           res.push('*');
         } else{
           res.push(pok[i]);
         }
     }
     var a = res.toString().replace (/,/g, "");
     var attem = attempt++;
     var chan = chances--;
     return {
       attempt: attem,
       value: a,
       chance: chan
     }
       }
 }
}

$(document).ready(function(){
   $('#sbmt').on('click', function() {
     var input = $('#guess').val();
     result = guessMe(input);
     $('<p>'+ result.attempt + '</p>').appendTo('#result-guess');

     $('<p>'+ result.value + '</p>').appendTo("#result-result");
      $("#ch").html('<p>'+ JSON.stringify(result.chance) + '</p>');
      console.log(JSON.stringify(result.chance));
   });
});

// La méthode appendTo() insère le contenu spécifié à la fin des éléments sélectionnés (mais toujours à l'intérieur).
// Les  méthodes append()et appendTo() font la même chose. La différence est dans la syntaxe: le placement des contenus et de sélection , et que append() peut ajouter du contenu en utilisant une fonction.
// <p> Lire et affecter un champ Input en jQuery
// La méthode JSON.stringify() convertit une valeur JavaScript en chaîne JSON. Optionnellement, elle peut remplacer des valeurs ou spécifier les propriétés à inclure si un tableau de propriétés a été fourni.
//Le JavaScript Object Notation (JSON) est un format standard utilisé pour représenter des données structurées de façon semblable aux objets Javascript. Il est habituellement utilisé pour structurer et 
//transmettre des données sur des sites web (par exemple, envoyer des données depuis un serveur vers un client afin de les afficher sur une page web ou vice versa). 

////////////////////////// EXEPLICATIONS DETAILLEES DU CODE ////////////////////////////

// Limite de 3 nombres dans l'input
// $('input').keypress(function () {
//     //La méthode keydown() nous permet d’enregistrer un gestionnaire d’événements pour l’événement
//     // keydown. L’événement keydown se déclenche dès qu’un utilisateur appuie sur une touche de son
//     // clavier et, si la touche reste pressée, est renvoyé à chaque fois que le système d’opération répète la touche.
//     // L’évènement keypress est plus ou moins similaire à keydown. Les différences se trouvent dans l’ordre de déclenchement 
//     // des évènements (l’évènement keydown se déclenchera toujours avant keypress) et dans les touches qui vont pouvoir déclencher ces évènements.
//     if ($(this).val().length >= 3) {
//         //La méthode .val() est principalement utilisée pour obtenir les valeurs des éléments de formulaire comme input , select et textarea . Dans le cas des éléments <select multiple="multiple">   la méthode .val() retourne un tableau contenant chaque option choisie ;
//         // Si aucune option n'est sélectionnée, elle retourne null .
//         $(this).val($(this).val().slice(0, 3));
//         //The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
//         return false;
//     }
// });

//

// function random() {
//     var randomNum = Math.floor(Math.random() * 9999);
//     // La fonction Math.random() renvoie un nombre flottant pseudo-aléatoire compris dans l'intervalle 
//     // [0, 1[ (ce qui signifie que 0 est compris dans l'intervalle mais que 1 en est exclu) selon une
//     // distribution approximativement uniforme sur cet intervalle. 
//     // La classe Math contient toutes les méthodes liées au nombre dans le langage JavaScript. On peut générer un nombre aléatoire
//     // en JavaScript avec la méthode Math.rand() mais ce nombre est systématiquement compris entre 0 et 1. Il faut ensuite multiplier 
//     // le nombre aléatoire généré par la différence entre les deux nombres qui sont les limites et ajouter 1. 
//     // On obtient ainsi un nombre à virgule. La méthode Math.floor() va récupérer la partie entière de ce nombre. 
//     // Après ce calcul, il ne reste plus qu'à ajouter le nombre inférieur de l'intervalle pour obtenir un nombre aléatoire compris dans l'intervalle.   

//     randomNum = randomNum.toString();
//     //La méthode toString() renvoie une chaine de caractères représentant l'objet renseigné.
//     while (randomNum.length < 3) {
//         console.log('randomNum.length()');
//         randomNum = "0" + randomNum;
//     }
//     return randomNum;
// }

// var attempt = 1;
// // attempt = tenter/tentatives
// var randomN = random();
// var chances = 5;

// function guessMe(inputNum) {
//     var str = inputNum.toString();
//     input = str.split("");

//     //The split() method is used to split a string into an array of substrings, and returns the new array.
//     // If an empty string ("") is used as the separator, the string is split between each character.

//     if (attempt > 5) {
//         alert("Désolée ! tu as perdu !")
//         var chan = chances--; // Decrementer sur le bouton
//     } else {
//         var res = []; // Resultat
//         var strRand = randomN.toString(); // String Random
//         var pok = strRand.split("");
//         console.log('pok');
//         if (inputNum == randomN) {
//             alert("Tu as réussi ! Tu as deviné le nombre avec " + attempt + " tentatives !");
//             res.push("HELL YEAH ! C'est dans la poche !!");
//         } else {
//             if (attempt == 5) {
//                 alert("Dernière chance ! ")
//             }
//             for (i = 0; i < pok.length; i++) {
//                 //L'instruction for crée une boucle composée de trois expressions optionnelles séparées 
//                 // par des points-virgules et encadrées entre des parenthèses qui sont suivies par une 
//                 // instruction (généralement une instruction de bloc) à exécuter dans la boucle.
//                 // L'instruction for qui suit débute en déclarant la variable i et en l'initialisant à 0. 
//                 // Elle vérifie que i est inférieur (strictement) à 9 et exécute ensuite les deux instructions 
//                 // contenues dans la boucle, ensuite elle incrémente i de 1, ce qui sera fait à chaque passage dans la boucle.
//                 if (pok[i] != input[i]) { // pok = poke = enfoncer // si le chiffre est inégal à l'input
//                     console.log('i');// Limite de 3 nombres dans l'input
//                     $('input').keypress(function() {
//                         //La méthode keydown() nous permet d’enregistrer un gestionnaire d’événements pour l’événement
//                         // keydown. L’événement keydown se déclenche dès qu’un utilisateur appuie sur une touche de son
//                         // clavier et, si la touche reste pressée, est renvoyé à chaque fois que le système d’opération répète la touche.
//                         // L’évènement keypress est plus ou moins similaire à keydown. Les différences se trouvent dans l’ordre de déclenchement 
//                         // des évènements (l’évènement keydown se déclenchera toujours avant keypress) et dans les touches qui vont pouvoir déclencher ces évènements.
//                         if($(this).val().length >= 3) {
//                             //La méthode .val() est principalement utilisée pour obtenir les valeurs des éléments de formulaire comme input , select et textarea . Dans le cas des éléments <select multiple="multiple">   la méthode .val() retourne un tableau contenant chaque option choisie ;
//                             // Si aucune option n'est sélectionnée, elle retourne null .
//                            $(this).val($(this).val().slice(0, 3));
//                            //The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
//                            return false;
//                        }
//                     });
                    
//                     // Settings Random Numbers
                    
//                     function random(){
//                     var randomNum =  Math.floor(Math.random() * 9999);
//                     // La fonction Math.random() renvoie un nombre flottant pseudo-aléatoire compris dans l'intervalle 
//                     // [0, 1[ (ce qui signifie que 0 est compris dans l'intervalle mais que 1 en est exclu) selon une
//                     // distribution approximativement uniforme sur cet intervalle. 
//                     // La classe Math contient toutes les méthodes liées au nombre dans le langage JavaScript. On peut générer un nombre aléatoire
//                     // en JavaScript avec la méthode Math.rand() mais ce nombre est systématiquement compris entre 0 et 1. Il faut ensuite multiplier 
//                     // le nombre aléatoire généré par la différence entre les deux nombres qui sont les limites et ajouter 1. 
//                     // On obtient ainsi un nombre à virgule. La méthode Math.floor() va récupérer la partie entière de ce nombre. 
//                     // Après ce calcul, il ne reste plus qu'à ajouter le nombre inférieur de l'intervalle pour obtenir un nombre aléatoire compris dans l'intervalle.   
                    
//                     randomNum = randomNum.toString();
//                        //La méthode toString() renvoie une chaine de caractères représentant l'objet renseigné.
//                          while (randomNum.length < 3) {
//                             console.log('randomNum.length()');
//                            randomNum =  "0" + randomNum;
//                          } 
//                         return randomNum;
//                     }
                    
//                     var attempt = 1;
//                     // attempt = tenter/tentatives
//                     var randomN = random();
//                     var chances = 5;
                    
//                     function guessMe(inputNum){
//                         var str = inputNum.toString();
//                         input = str.split("");
                    
//                         //The split() method is used to split a string into an array of substrings, and returns the new array.
//                     // If an empty string ("") is used as the separator, the string is split between each character.
                    
//                      if (attempt >6){
//                        alert("Désolée ! C'est perdu !") 
//                        var chan = chances--; // Decrementer sur le bouton
//                      } else{
//                      var res = []; // Resultat
//                      var strRand = randomN.toString(); // String Random
//                      var pok = strRand.split("");
//                      console.log('pok');
//                        if(inputNum == randomN){
//                          alert( "Tu as réussi ! Tu as deviné le nombre avec "+ attempt +" tentatives !");
//                          res.push("HELL YEAH ! C'est dans la poche !!");
//                        } else{
//                          if(attempt ==5){
//                            alert("Dernière chance ! ") 
//                          }
//                          for(i=0; i<pok.length; i++){
//                              //L'instruction for crée une boucle composée de trois expressions optionnelles séparées 
//                              // par des points-virgules et encadrées entre des parenthèses qui sont suivies par une 
//                              // instruction (généralement une instruction de bloc) à exécuter dans la boucle.
//                              // L'instruction for qui suit débute en déclarant la variable i et en l'initialisant à 0. 
//                              // Elle vérifie que i est inférieur (strictement) à 9 et exécute ensuite les deux instructions 
//                              // contenues dans la boucle, ensuite elle incrémente i de 1, ce qui sera fait à chaque passage dans la boucle.
//                              if(pok[i] != input[i] ){ // pok = poke = enfoncer // si le chiffre est inégal à l'input
//                                  console.log('i');
//                                res.push('*'); // * = element caché
//                                // Ajoute de nouveaux éléments en fin de tableau
                    
//                              } else{
//                                res.push(pok[i]); // Résultat ajouté en fin de tableau sur la var de nombres random splittés
//                              }
//                          }
//                          var a = res.toString().replace (/,/g, "");
//                          var attem = attempt++; // Same mais avec ++
//                          var chan = chances--; //The decrement operator (--) decrements (subtracts one from) its operand and returns a value.
//                          // Chances équivaut au nombre de "vies" dans un jeu vidéo
//                          return {
//                            attempt: attem,
//                            value: a,
//                            chance: chan
//                          }
//                            }
//                      }
//                     }
                    
                    
//                     $(document).ready(function(){
//                        $('#sbmt').on('click', function() {
//                          var input = $('#guess').val();
//                          result = guessMe(input);
//                          $('<p>'+ result.attempt + '</p>').appendTo('#result-guess');
                    
//                          $('<p>'+ result.value + '</p>').appendTo("#result-result");
//                           $("#ch").html('<p>'+ JSON.stringify(result.chance) + '</p>');
//                        });
//                     });
                    
                

