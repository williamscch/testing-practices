const stringLength = (string) => {
    let count = 0;
let newStr = string.split('')
newStr.forEach(e => {
    count ++
});

if(count>= 1 && count<=10){
    return count
} else {
    return 'Not admitted string'
}
}

module.exports = stringLength;