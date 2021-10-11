/*coder un string aaaabbbcc en 4a3b2c*/

const encodedFunction = (str) => {
    const arrayChar = str.split('')
    const jsonObject = {}
    for (const ch of arrayChar) {
        if(!jsonObject[ch]) {
            jsonObject[ch] = 1
        } else {
            jsonObject[ch] += 1
        }
    }
    return Object.entries(jsonObject).reduce((result, tab) => result + tab[1]+tab[0], '')
};
console.log(encodedFunction('aaaabbbccce'))