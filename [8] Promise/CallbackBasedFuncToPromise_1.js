function callbackBasedFunction(message, callback){
    if(message){
        callback(message, null);
    }
    else{
        callback(null, "Error: message is null");
    }
}

function callbackBasedFunctionToPromise(callbackBasedFunction){
    return (message) => new Promise((resolve, reject) => {
            callbackBasedFunction(message, (result, error) =>{
                if(error) reject(error);

                resolve(result);
            });
    });
}

let promiseFunc = callbackBasedFunctionToPromise(callbackBasedFunction)

promiseFunc("Hello world!").then(result => console.log(result)).catch(error => console.log(error));
promiseFunc().then(result => console.log(result)).catch(error => console.log(error));