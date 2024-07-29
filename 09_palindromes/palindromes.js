const palindromes = function (str) {
    //3rd line gets rid of special characters, 4th line gets rid of spaces
    str = str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    str = str.replace(/\s+/g, '');
    str = str.toLowerCase();
    str2 = '';
    for (let i = 1; i <= str.length; i++){
        str2 += (str.charAt(str.length-i));
    }
    console.log(str + " " + str2);
    return str === str2;
};

// Do not edit below this line
module.exports = palindromes;
