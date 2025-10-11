document.addEventListener('DOMContentLoaded',(event)=>{
    //DOM elements
    const btnNumbers=document.querySelectorAll("[id^='number']");
    const operatorBtn=document.querySelectorAll("[id^='operator']");
    const dotBtn=document.querySelector(".calculatorKeyDot");
    const clearBtn=document.querySelector(".calculatorKeyAC");
    const backspaceBtn=document.querySelector(".material-icons");
    const equalBtn=document.querySelector(".calculatorKeyOperatorEqual");
    const currentOperandDisplay=document.getElementById('currentOperand');
    const previousOperandDisplay=document.getElementById('previousOperand');

    //create variables that stores users input
    let currentOperand='';
    let previousOperand='';
    let operation=''

    //functions to perform the operations

    function plus(num1,num2) {
       
        let sum=parseFloat(num1+num2);
        return sum;

    }

    console.log(plus(23.4,45.67))

    function minus(num1,num2) {
        
        let difference=parseFloat(num1-num2);
        return difference
        
    }
    console.log(minus(133,34.89))

    function multiply(num1,num2) {
       let multi=parseFloat(num1*num2);
       return multi;
    }
    console.log(multiply(23,562))

    function division(num1,num2) {
        if(num2===0){
            return Error;
        }else{
            return (num1/num2);
        }
       
        
    }
    console.log(division(44,4))

    //A function that accepts 2 operands and an operator
    function calculate(num1,num2,operator){
        
        switch (operator) {
            case '+':
                return plus(num1,num2);
                break;
            case '-':
                return minus(num1,num2);
                break;
            case '*':
                return multiply(num1,num2);
                break;
            case '/':
                return division(num1,num2);
                break;
            default:
                break;
        }
    }

    //A function that update display
    function updateDisplay(){
        currentOperandDisplay.textContent=currentOperand||"0";
        if(previousOperand&&operation){
            previousOperandDisplay.textContent=`${previousOperand}${operation}`;
        }else{
            previousOperandDisplay.textContent='';
        }
    }
    btnNumbers.forEach(button=>{
        button.addEventListener('click',()=>{
            const number=button.dataset.number;
            currentOperand+=number;

            updateDisplay();

            console.log('currentoperant',currentOperand);

        })
    })
    operatorBtn.forEach(button=>{
        button.addEventListener('click',()=>{
            if(currentOperand==='') return;

            if(previousOperand !=''&&operation!=""){
                const result=calculate(previousOperand,currentOperand,operation);
                currentOperand=result;
            }
            //store the currentoprand
            operation=button.dataset.operator
            previousOperand=currentOperand
            currentOperand=''

            updateDisplay();
             console.log('Previous:', previousOperand, 'Operation:', operation);
        })
    })
    equalBtn.addEventListener('click',()=>{
        if(previousOperand===''||currentOperand===''||operation==='') return;
        const result=calculate(previousOperand,currentOperand,operation);
        previousOperandDisplay.textContent=`${previousOperand}${operation}${currentOperand}=`;

        currentOperand=result;
        currentOperandDisplay.textContent=currentOperand

        previousOperand=''
        operation=''

        console.log('result',result);
    })
    //clear button
    clearBtn.addEventListener('click',()=>{
        previousOperand=''
        currentOperand=''
        operation=''
        updateDisplay()
    })

    //backspace button
    backspaceBtn.addEventListener('click',()=>{
        currentOperand=currentOperand.slice(0,-1);
        updateDisplay();
    })

    //dot operations
    dotBtn.addEventListener('click',()=>{
        if(!currentOperand.includes('.')){
            currentOperand+='.';
            updateDisplay();
        }
    }) 
})

