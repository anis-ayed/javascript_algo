const productOfArray = (array) => {
    return array.reduce((result, val) => {
         return result * val;
    }, 1)
}

console.log(productOfArray([1,2,3]));
console.log(productOfArray([1, 2, 3, 10]));