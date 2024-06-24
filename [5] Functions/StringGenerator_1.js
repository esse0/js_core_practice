function generateString(length){
    if(typeof length != 'number') throw new Error('Args is not a number');
    let resultString = '';
    
    while(resultString.length != length){
        let random = Math.floor(Math.random() * (90 - 65 + 1)) + 65;

        resultString += String.fromCharCode(random);
    }
   
    return resultString;
}

console.log(generateString(5))