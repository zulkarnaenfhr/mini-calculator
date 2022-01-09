class Calculator {
    previousNumber = "";
    currentNumber = "";
    currentOperand = null;
    tempPrviousScreenAppear = "";
    result = "";

    updateCurrentScreen(number) {
        this.currentNumber += number;
        screenCurrent.innerText = this.currentNumber;
    }

    setOperand(tempCurrentOperand) {
        if (this.currentNumber == "" && this.currentOperand == "") {
            return;
        }
        if (this.previousNumber == "") {
            this.currentOperand = tempCurrentOperand;
            this.previousNumber = this.currentNumber;
            this.tempPrviousScreenAppear = this.previousNumber + " " + this.currentOperand;
            screenPrevious.innerText = this.tempPrviousScreenAppear;
            this.currentNumber = "";
            screenCurrent.innerText = this.currentNumber;
        } else if (this.result != "" && this.currentOperand == null) {
            this.previousNumber = this.result;
            this.currentOperand = tempCurrentOperand;
            this.tempPrviousScreenAppear = this.previousNumber + " " + this.currentOperand;
            screenPrevious.innerText = this.tempPrviousScreenAppear;
            this.currentNumber = "";
            screenCurrent.innerText = this.currentNumber;
        } else if (this.previousNumber != "" && this.currentOperand != null && this.currentNumber == "") {
            this.currentOperand = tempCurrentOperand;
            this.tempPrviousScreenAppear = this.previousNumber + " " + this.currentOperand;
            screenPrevious.innerText = this.tempPrviousScreenAppear;
            this.currentNumber = "";
            screenCurrent.innerText = this.currentNumber;
        } else if (this.previousNumber != "" && this.currentOperand != null && this.currentNumber != "") {
            this.mathematicsOperation2(tempCurrentOperand);
        }
    }
    mathematicsOperation() {
        if (this.currentNumber == "") {
            return;
        }
        if (this.currentOperand == "+") {
            this.result = parseFloat(this.previousNumber) + parseFloat(this.currentNumber);
            screenCurrent.innerText = this.result;
            this.previousNumber = this.result;
            screenPrevious.innerText = "";
            this.currentOperand = null;
            this.currentNumber = "";
            this.tempPrviousScreenAppear = "";
        }
        if (this.currentOperand == "-") {
            this.result = parseFloat(this.previousNumber) - parseFloat(this.currentNumber);
            screenCurrent.innerText = this.result;
            this.previousNumber = this.result;
            screenPrevious.innerText = "";
            this.currentOperand = null;
            this.currentNumber = "";
            this.tempPrviousScreenAppear = "";
        }
        if (this.currentOperand == "x") {
            this.result = parseFloat(this.previousNumber) * parseFloat(this.currentNumber);
            screenCurrent.innerText = this.result;
            this.previousNumber = this.result;
            screenPrevious.innerText = "";
            this.currentOperand = null;
            this.currentNumber = "";
            this.tempPrviousScreenAppear = "";
        }
        if (this.currentOperand == "÷") {
            this.result = parseFloat(this.previousNumber) / parseFloat(this.currentNumber);
            screenCurrent.innerText = this.result;
            this.previousNumber = this.result;
            screenPrevious.innerText = "";
            this.currentOperand = null;
            this.currentNumber = "";
            this.tempPrviousScreenAppear = "";
        }
    }
    mathematicsOperation2(tempCurrentOperand) {
        if (this.currentNumber == "") {
            return;
        }
        if (this.currentOperand == "+") {
            this.result = parseFloat(this.previousNumber) + parseFloat(this.currentNumber);
            this.previousNumber = this.result;
            this.currentOperand = tempCurrentOperand;
            this.tempPrviousScreenAppear = this.previousNumber + " " + this.currentOperand;
            screenPrevious.innerText = this.tempPrviousScreenAppear;
            this.currentNumber = "";
            screenCurrent.innerText = this.currentNumber;
        }
        if (this.currentOperand == "-") {
            this.result = parseFloat(this.previousNumber) - parseFloat(this.currentNumber);
            this.previousNumber = this.result;
            this.currentOperand = tempCurrentOperand;
            this.tempPrviousScreenAppear = this.previousNumber + " " + this.currentOperand;
            screenPrevious.innerText = this.tempPrviousScreenAppear;
            this.currentNumber = "";
            screenCurrent.innerText = this.currentNumber;
        }
        if (this.currentOperand == "x") {
            this.result = parseFloat(this.previousNumber) * parseFloat(this.currentNumber);
            this.previousNumber = this.result;
            this.currentOperand = tempCurrentOperand;
            this.tempPrviousScreenAppear = this.previousNumber + " " + this.currentOperand;
            screenPrevious.innerText = this.tempPrviousScreenAppear;
            this.currentNumber = "";
            screenCurrent.innerText = this.currentNumber;
        }
        if (this.currentOperand == "÷") {
            this.result = parseFloat(this.previousNumber) / parseFloat(this.currentNumber);
            this.previousNumber = this.result;
            this.currentOperand = tempCurrentOperand;
            this.tempPrviousScreenAppear = this.previousNumber + " " + this.currentOperand;
            screenPrevious.innerText = this.tempPrviousScreenAppear;
            this.currentNumber = "";
            screenCurrent.innerText = this.currentNumber;
        }
    }
    allClear() {
        this.previousNumber = "";
        this.currentNumber = "";
        this.currentOperand = null;
        this.tempPrviousScreenAppear = "";
        this.result = "";
        screenCurrent.innerText = "";
        screenPrevious.innerText = "";
    }
    deleteLastNumber() {
        this.currentNumber = this.currentNumber.substring(0, this.currentNumber.length - 1);
        screenCurrent.innerText = this.currentNumber;
    }
    cekDot(dot) {
        if (this.currentNumber.includes(dot)) {
            return;
        } else {
            this.updateCurrentScreen(dot);
        }
    }
    cekAwal() {
        if (this.result != "") {
            this.currentNumber = this.previousNumber;
            this.previousNumber = "";
            this.result = "";
        }
    }
}

// screen
const screenCurrent = document.querySelector("[currentOperand]");
const screenPrevious = document.querySelector("[previousOperand]");

//button
const numberButton = document.querySelectorAll("[buttonNumber]");
const buttonOperand = document.querySelectorAll("[buttonOperand]");
const buttonEquals = document.querySelector("[buttonEquals]");
const buttonAllClear = document.querySelector("[buttonAllClear]");
const buttonDelete = document.querySelector("[buttonDelete]");
const buttonDot = document.querySelector("[buttonDot]");

const calculator = new Calculator();

numberButton.forEach((button) => {
    button.addEventListener("click", () => {
        const tempButton = button.innerText;
        calculator.updateCurrentScreen(tempButton);
    });
});

buttonOperand.forEach((button) => {
    button.addEventListener("click", () => {
        const tempButton = button.innerText;
        calculator.setOperand(tempButton);
    });
});

buttonEquals.addEventListener("click", (button) => {
    calculator.mathematicsOperation();
    calculator.cekAwal();
});

buttonAllClear.addEventListener("click", (button) => {
    calculator.allClear();
});

buttonDelete.addEventListener("click", (button) => {
    calculator.deleteLastNumber();
});

buttonDot.addEventListener("click", (button) => {
    calculator.cekDot(".");
});
