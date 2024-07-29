const fibonacci = function(num) {
    if (num < 0){ return "OOPS"}
    num = parseInt(num);
    let output = 0;
    let prevNum = 1;
    let prevPrevNum = 1;
    if (num === 1 || num === 2){ //base case of 1 and 2, where the answers will be 1
        return 1;
    }
    for (let i = num; i > 2; i--){
        output = prevNum + prevPrevNum;
        prevNum = prevPrevNum;
        prevPrevNum = output; 
    }
    return output;
};

// Do not edit below this line
module.exports = fibonacci;
