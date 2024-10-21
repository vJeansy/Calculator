import React from "react";
import { useState } from "react";

const buttonsValue = ['%', 'CE', 'Back', '/', 7, 8, 9, 'X', 4, 5, 6, '-', 1, 2, 3, '+', ',', 0, '.', '='];

function ButtonsCalculator(){
        // State variables to keep track of the current value, previous value, and operator
        const [currentValue, setCurrentValue] = useState('');
        const [previousValue, setPreviousValue] = useState('');
        const [operator, setOperator] = useState(null);

        // Function to handle button click
        const handleClick = (value) => {
           if(typeof value === 'number' || value === '.') { //console.log(value); // Logs the value of the clicked button
            // Append numbers or decimal to the current value
            setCurrentValue(currentValue + value.toString());
           } else if(value === 'CE') {
            // Clear values
            setCurrentValue('');
            setPreviousValue('');
            setOperator(null);
           } else if(value === 'Back') {
            // Remove the last character
            setCurrentValue(currentValue.slice(0, -1));
           } else if(value === '=') {
            // Perform calculator when press =
            calculate();
           } else if(value === '%') {
            setCurrentValue((parseFloat(currentValue) / 100).toString());
           } else if(['+', '-', 'X', '/'].includes(value)) {
            // Set the operator and store the current value as the previous value
            setOperator(value);
            setPreviousValue(currentValue);
            setCurrentValue('');
           }
        };

        // Function to perform the calculation based on the operator
        const calculate = () => {
            const prev = parseFloat(previousValue);
            const current = parseFloat(currentValue);
            let result = 0;

            switch (operator) {
                case '+':
                    result = prev + current;
                    break;
                case '-':
                    result = prev - current;
                    break;
                case 'X':
                    result = prev * current;
                    break;
                case '/':
                    result = prev / current;
                    break;
                default:
                    return;
            }
        // Update the state with the result and reset the operator
        setCurrentValue(result.toString());
        setPreviousValue('');
        setOperator(null);
        }
        return(
        <>
        <div className="result-display">{currentValue || '0'}</div>
        {buttonsValue.map((value, index) =>
        <button key={index} 
        className="buttons-calculator"
        onClick={() => handleClick(value)}>
            {value}
            </button>)}
        </>
    );
}

export default ButtonsCalculator;