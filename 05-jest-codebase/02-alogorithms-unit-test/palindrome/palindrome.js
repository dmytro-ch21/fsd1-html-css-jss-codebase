function palindrome(str){
    if(str === ''){
        return false;
    }

    return str === str.split('').reverse().join('');
};

module.exports = palindrome;