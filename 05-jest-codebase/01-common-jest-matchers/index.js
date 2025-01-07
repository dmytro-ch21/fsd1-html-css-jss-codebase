function toBeOrNotToBe(number){
    if(number % 2 === 0){
        return true;
    } else {
        return null;
    }
}

function throwIfNegative(num){
    if(num < 0){
        throw new Error('Negative value not allowed!');
    }
    return num;
}


module.exports = {toBeOrNotToBe, throwIfNegative};