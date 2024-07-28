const removeFromArray = function(myArray, ...args) {
    for (toRemove of args){
        let i = 0;
        while (i != myArray.length){
            if (myArray[i] === toRemove){
                myArray.splice(i,1);
            }
            else{
                ++i;
            }
        }
    }
    
    return myArray;
};

/*
const removeFromArray = function(myArray, ...args) {
    return myArray.filter((index) => {
        return index != args[0]})
}
*/

// Do not edit below this line
module.exports = removeFromArray;
