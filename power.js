console.log(power(2, 1)); // 2
console.log(power(2, 0)); // 1

function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base, exponent - 1);
}

function power2(base, exponent){
    if(exponent === 0) return 1;
    return Math.pow(base,exponent);
}