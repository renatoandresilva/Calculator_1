class Calculator {
    
    constructor() {
        this.upperValue = document.querySelector("#upper-number");
        this.resultValue = document.querySelector("#result-number");
        this.reset = 0;

        console.log(this.upperValue);
    }
       
    checkLastDigitis(input, upperValue, reg) {
       if(( !reg.test(input) && !reg.test(upperValue.substr(upperValue.length - 1))))  return true;
      
       return false
    }

    btnPress() {
        let input = this.textContent;
        let upperValue = calc.upperValue.textContent;

        // verifica se tem só números
        var reg= new RegExp('^\\d+$');

        // Checa se precisar adicionar ou não
        if(calc.checkLastDigitis(input, upperValue, reg)) {
            return false
        }

        if(upperValue === "0") {
            calc.upperValue.textContent = input;
        }else {
            calc.upperValue.textContent += input;
        }    
        
    }
}

// start obj
let calc = new Calculator;

// start btns
let buttons = document.querySelectorAll(".btn");

for(let i = 0; buttons.length > i; i++) {
    buttons[i].addEventListener("click", calc.btnPress);
}