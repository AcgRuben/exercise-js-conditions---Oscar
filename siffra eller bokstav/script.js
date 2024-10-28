let input = prompt("Skriv in 1 tecken");

if (input.match(/[a-zA-Z]/)){
    alert("Ditt tecken är en bokstav");
}
else if (input.match(/[0-9]/)){
    alert("Ditt tecken är ett tal");
}
else  {
    alert("Ditt tecken är en symbol");

}
