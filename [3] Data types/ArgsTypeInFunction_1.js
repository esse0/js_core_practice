function getDigitCount(number){
    if(typeof number != "number") throw new Error("Args is not a number");

    return number.toString().length;
}

console.log(getDigitCount(123456));