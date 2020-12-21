// On déclare 3 variables pour pouvoir tester notre fonction, et le tableau spécifiquement pour tester le "for" (loop)
let text1 = "Bonjour";
let text2 = "Aurevoir";
let tableau = ["mot1", "mot2", "mot3", "mot4", "mot5", "mot6"]; 

// Fonction:
function create_div(nabil) { 
    let new_div = document.createElement("div"); 
    new_div.textContent = nabil;
    return new_div; 
}

document.write("<br>Exemples 1, 2 et 3 écrits avec la fonction : <br>"); 
// Exemples:
document.body.append(create_div(text1, "testo"));
document.body.append(create_div(text2));
document.body.append(create_div("On peut aussi écrire directement dans le paramètre"))


document.write("<br>Boucle sur le tableau simple : <br>");  
// Boucle:
for (let i = 0; i < 6; i++) { 
    document.body.append(create_div(tableau[i]));
}

document.write("<br>Boucle sur le tableau qui liste les étudiants : <br>");
// Declaration tableau 24 etudiants:
let tab_etudiants = ["Numa",
    "Nabil",
    "Rudy",
    "Kheira",
    "Clara",
    "Romain",       
    "Pierre",   
    "Mohammed",      
    "Romain2",     
    "Stephane",     
    "Sonia",   
    "Loic",      
    "Priscille",
    "Bryan",
    "Tiffany",
    "Khalil",
    "Straydine",
    "Nicolas",
    "Veronica",
    "Francisco",
    "Nawal",
    "Colin",
    "Thomas"];

// Boucle etudiants:
for (i = 0; i < tab_etudiants.length; i++) {
    document.body.append(create_div("*..* " + tab_etudiants[i] + " \\o/", "students"));
}

// Selection d'elements du tableau et modifications de style
let test = document.getElementsByClassName('students')[1];
test.style.color = "white";
test.style.fontSize = "1.5em";
let test1 = document.getElementsByClassName('students')[13];
test1.style.fontSize = "0.35em";