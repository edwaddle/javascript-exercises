const reverseString = function(str) {
    let myArray = str.split("");
    let output = '';
    for (let i = 1; i <= myArray.length; i++){
        output += myArray[myArray.length-i];
    }
    return output;

};

// Do not edit below this line
module.exports = reverseString;
