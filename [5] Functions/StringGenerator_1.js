function* generateString(length){
    if(typeof length != 'number') throw new Error('Args is not a number');

    Math.random() * length;

}