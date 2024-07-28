const repeatString = function(str, numOfTimes) {
    if (numOfTimes <0){
        return "ERROR";
    }
    let output = '';
    for (let i = 0; i < numOfTimes; i++){
        output += str;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
