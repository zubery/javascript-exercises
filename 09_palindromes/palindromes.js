const lowerLettersString = function(string) {
    return string.replaceAll(/[^A-Za-z]/g, '').toLowerCase();
}

const palindromes = function (string) {
    const processedString = lowerLettersString(string);
    const processedLength = processedString.length;
    const numLetterPairs = Math.floor(processedLength / 2);
    for(let i = 0; i < numLetterPairs; i++) {
        if(processedString[i] !== processedString[processedLength - i - 1]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
