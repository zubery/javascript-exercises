const removeFromArray = function(array, ...removeArgs) {
    return array.filter(
        element => !removeArgs.includes(element)
    );
};

// Do not edit below this line
module.exports = removeFromArray;
