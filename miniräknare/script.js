
  
    
function calculator() {
    let runCalc = true;
    
    while (runCalc) {

  
    let number1 = parseInt(prompt("Skriv in ditt första tal"));
    let number2 = parseInt(prompt("Skriv in ditt andra tal")); 
    let operator = prompt("Vilket räknesätt vill du använda? Du kan välja mellan +, -, /, *.")

    if(operator == "*") {
        let resultat = number1*number2
        alert("Resultatet är: " + resultat);
    }

    else if (operator == "/") {
        let resultat = number1/number2
        alert("Resultatet är: " + resultat);
    }

    else if (operator == "+") {
        let resultat = number1+number2
        alert("Resultatet är: " + resultat);
    }

    else if (operator == "-") {
        let resultat = number1-number2
        alert("Resultatet är: " + resultat);
    }

    else if (operator != "-", "+", "/", "*")
    {
        alert("Var vänlig välj räknesätt");
    }
   
    
        
    runCalc = confirm("Vill du fortsätta räkna?")
    
}
}

    calculator();

