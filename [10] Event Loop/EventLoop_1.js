var currentNumber = 1;

setPause = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function printCurrentNumber() {
    if (currentNumber <= 10) {
        console.log(currentNumber++);

        setPause(1000).then(printCurrentNumber);
    }
}

printCurrentNumber()