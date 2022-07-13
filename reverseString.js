const reverseString = (string) => {
    newStr = string.split('');
    strd = [];
    newStr.forEach(element => {
        strd.unshift(element)
    });
    strd = strd.join('');
    return strd
}

module.exports = reverseString;