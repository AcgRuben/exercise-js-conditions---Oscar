let word1 = prompt("Skriv in ditt första ord:");
let word2 = prompt("Skriv in ditt andra ord:");
let word3 = prompt("Skriv in ditt trejde ord:"); 

if (word1.length > word2.length && word1.length > word3.length) {
    alert(word1 + " är det längst ord!"); 

}

if (word2.length > word1.length && word2.length > word3.length) {
    alert(word2 + " är det längst ord!"); 

}

if (word3.length > word2.length && word3.length > word1.length) {
    alert(word3 + " är det längst ord!"); 

}