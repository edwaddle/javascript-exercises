const sumAll = function(num1, num2) {
    if (num1 <0 || num2 < 0 || (num1 +1) != (parseInt(num1+1)) || 
    (num2+1) != (parseInt(num2)+1)){ //added 1 in order to check if its a string
        //a string will add number to the end of the string, whereas an in will just add the number
        return "ERROR";
    }
    else if (num1 > num2){
        let tempNum = num1;
        num1 = num2;
        num2 = tempNum;
    }
    let total = 0;
    for (let i = num1; i <= num2; i++){
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
