function getSumInScope(array){
    if(!Array.isArray(array)) throw new Error('Args is not array')

    return array.reduce((accumulator, currentValue) => {
        if(typeof currentValue  != "number") throw new Error("Args is not number array")

        if(currentValue > 0 && currentValue < 10){
            return accumulator += currentValue;
        }
        return accumulator;
    }, 0);
}

console.log(getSumInScope(['a', 5, 3, -1]));