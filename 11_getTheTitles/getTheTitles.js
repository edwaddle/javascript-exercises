const getTheTitles = function(books) {
    let returnList = [];
    for (book of books){
        returnList.push(book.title);
    } 
    return returnList;
};

// Do not edit below this line
module.exports = getTheTitles;
