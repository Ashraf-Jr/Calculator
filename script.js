


// class Calculator {
//     constructor(previousNumTextElement, currentNumTextElement) {
//         this.previousNumTextElement = previousNumTextElement;
//         this.currentNumTextElement = currentNumTextElement;
//         this.clear();
//     }

//     clear() {
//         this.currentnumber = '';
//         this.previousnumber = '';
//         this.operation = undefined;
//         this.updateDisplay();
//     }

//     delete() {
//         this.currentnumber = this.currentnumber.toString().slice(0, -1);
//         this.updateDisplay();
//     }

//     appendNumber(number) {
//         if (number === '.' && this.currentnumber.includes('.')) return;
//         this.currentnumber = this.currentnumber.toString() + number.toString();
//         this.updateDisplay();
//     }

//     chooseOperation(operation) {
//         if (this.currentnumber === '') return;
//         if (this.previousnumber !== '') {
//             this.compute();
//         }
//         this.operation = operation;
//         this.previousnumber = this.currentnumber;
//         this.currentnumber = '';
//         this.updateDisplay();
//     }

//     compute() {
//         let computation;
//         const prev = parseFloat(this.previousnumber);
//         const curr = parseFloat(this.currentnumber);
//         if (isNaN(prev) || isNaN(curr)) return;

//         switch (this.operation) {
//             case '+':
//                 computation = prev + curr;
//                 break;
//             case '-':
//                 computation = prev - curr;
//                 break;
//             case '/':
//                 computation = prev / curr;
//                 break;
//             case '*':
//                 computation = prev * curr;
//                 break;
//             default:
//                 return;
//         }
//         this.currentnumber = computation;
//         this.operation = undefined;
//         this.previousnumber = '';
//         this.updateDisplay();
//     }

//     updateDisplay() {
//         this.currentNumTextElement.innerText = this.currentnumber;
//         this.previousNumTextElement.innerText = `${this.previousnumber} ${this.operation ? this.operation : ''}`;
//     }
// }

// const numberButtons = document.querySelectorAll('[data-number]');
// const operationsButtons = document.querySelectorAll('[data-operation]');
// const equalButtons = document.querySelector('[data-equal]');
// const deleteButtons = document.querySelector('[data-delete]');
// const clearButtons = document.querySelector('[data-clear]');
// const previousNumTextElement = document.querySelector('[data-previous-number]');
// const currentNumTextElement = document.querySelector('[data-current-number]');

// const calculator = new Calculator(previousNumTextElement, currentNumTextElement);

// numberButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         calculator.appendNumber(button.innerText);
//     });
// });

// operationsButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         calculator.chooseOperation(button.innerText);
//     });
// });

// equalButtons.addEventListener('click', () => {
//     calculator.compute();
// });

// clearButtons.addEventListener('click', () => {
//     calculator.clear();
// });

// deleteButtons.addEventListener('click', () => {
//     calculator.delete();
// });

// // Add event listener for keydown events on the document
// document.addEventListener('keydown', event => {
//     // Get the key that was pressed
//     const key = event.key;
    
//     // Match the key to the corresponding button and trigger its click event
//     switch (key) {
//         case '0':
//         case '1':
//         case '2':
//         case '3':
//         case '4':
//         case '5':
//         case '6':
//         case '7':
//         case '8':
//         case '9':
//             // Find the corresponding button with data-number attribute equal to the pressed key
//             const numberButton = document.querySelector(`button[data-number="${key}"]`);
//             if (numberButton) {
//                 numberButton.click(); // Trigger click event
//             }
//             break;
//         case '+':
//         case '-':
//         case '*':
//         case '/':
//             // Find the corresponding button with data-operation attribute equal to the pressed key
//             const operationButton = document.querySelector(`button[data-operation="${key}"]`);
//             if (operationButton) {
//                 operationButton.click(); // Trigger click event
//             }
//             break;
//         case '.':
//             // Find the corresponding button with data-number attribute equal to the pressed key
//             const dotButton = document.querySelector(`button[data-number="."]`);
//             if (dotButton) {
//                 dotButton.click(); // Trigger click event
//             }
//             break;
//         case 'Enter':
//             // Find the equal button and trigger its click event
//             const equalButton = document.querySelector('button[data-equal]');
//             if (equalButton) {
//                 equalButton.click(); // Trigger click event
//             }
//             break;
//         case 'Backspace':
//             // Find the delete button and trigger its click event
//             const deleteButton = document.querySelector('button[data-delete]');
//             if (deleteButton) {
//                 deleteButton.click(); // Trigger click event
//             }
//             break;
//         case 'Escape':
//             // Find the clear button and trigger its click event
//             const clearButton = document.querySelector('button[data-clear]');
//             if (clearButton) {
//                 clearButton.click(); // Trigger click event
//             }
//             break;
//         default:
//             // Ignore other keys
//             break;
//     }
// });







class Calculator {
    constructor(previousNumTextElement, currentNumTextElement) {
        this.previousNumTextElement = previousNumTextElement;
        this.currentNumTextElement = currentNumTextElement;
        this.clear();
    }

    clear() {
        /* 3shan nefady el calculator*/ 
        this.currentnumber = '';
        this.previousnumber = '';
        this.operation = undefined;
        this.updateDisplay();
    }

    delete() {
        /*ba7wel le string 3shan javascript e3raf e2semha */
        this.currentnumber = this.currentnumber.toString().slice(0, -1);
        this.updateDisplay();
    }

    appendNumber(number) {
        
        /*ba7wel le string 3shan javascript e3raf e2semha */
        if (number === '.' && this.currentnumber.includes('.')) return;
        this.currentnumber = this.currentnumber.toString() + number.toString();
        this.updateDisplay();
    }

    chooseOperation(operation) {
        if (this.currentnumber === '') return;
        if (this.previousnumber !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousnumber = this.currentnumber;
        this.currentnumber = '';
        this.updateDisplay();
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousnumber);
        const curr = parseFloat(this.currentnumber);
        if (isNaN(prev) || isNaN(curr)) return;

        switch (this.operation) {
            case '+':
                computation = prev + curr;
                break;
            case '-':
                computation = prev - curr;
                break;
            case '/':
                computation = prev / curr;
                break;
            case '*':
                computation = prev * curr;
                break;
            default:
                return;
        }
        this.currentnumber = computation;
        this.operation = undefined;
        this.previousnumber = '';
        this.updateDisplay();
    }

    updateDisplay() {
        this.currentNumTextElement.innerText = this.currentnumber;
        this.previousNumTextElement.innerText = `${this.previousnumber} ${this.operation ? this.operation : ''}`;
    }
}

/*e5tar mn el HTML */
const numberButtons = document.querySelectorAll('[data-number]');
const operationsButtons = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('[data-equal]');
const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-clear]');
const previousNumTextElement = document.querySelector('[data-previous-number]');
const currentNumTextElement = document.querySelector('[data-current-number]');

const calculator = new Calculator(previousNumTextElement, currentNumTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
    });
});

operationsButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
    });
});

equalButton.addEventListener('click', () => {
    calculator.compute();
});

clearButton.addEventListener('click', () => {
    calculator.clear();
});

deleteButton.addEventListener('click', () => {
    calculator.delete();
});

// Add event listener for keydown events on the document
document.addEventListener('keydown', event => {
    // Get the key that was pressed
    const key = event.key;
    
    // Match the key to the corresponding button and trigger its click event
    switch (key) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            // Find the corresponding button with data-number attribute equal to the pressed key
            const numberButton = document.querySelector(`[data-number="${key}"]`);
            if (numberButton) {
                numberButton.click(); // Trigger click event
            }
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            // Find the corresponding button with data-operation attribute equal to the pressed key
            const operationButton = document.querySelector(`[data-operation="${key}"]`);
            if (operationButton) {
                operationButton.click(); // Trigger click event
            }
            break;
        case '.':
            // Find the corresponding button with data-number attribute equal to the pressed key
            const dotButton = document.querySelector(`[data-number="."]`);
            if (dotButton) {
                dotButton.click(); // Trigger click event
            }
            break;
        case 'Enter':
            // Find the equal button and trigger its click event
            if (equalButton) {
                equalButton.click(); // Trigger click event
            }
            break;
        case 'Backspace':
            // Find the delete button and trigger its click event
            if (deleteButton) {
                deleteButton.click(); // Trigger click event
            }
            break;
        case 'Escape':
            // Find the clear button and trigger its click event
            if (clearButton) {
                clearButton.click(); // Trigger click event
            }
            break;
        default:
            // Ignore other keys
            break;
    }
});
