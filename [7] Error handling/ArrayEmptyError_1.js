function someFunc(array){
    if(!Array.isArray(array)) throw new Error('Args is not array');
    if(array.length < 1) throw new Error('Array is empty');
}

try{
    someFunc([])
} catch(err) {
    console.log(err.message)
}