/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline());
let arrayV = [];
for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const V = parseInt(inputs[0]);
    const E = parseInt(inputs[1]);
    arrayV.push([V,E]);


}
arrayV = arrayV.sort((a,b) => b[0]-a[0]);
let diff=10000000;

for(let i =0 ; i< arrayV.length - 1; i++) {
    const diff1 = Math.abs(arrayV[i][0] - arrayV[i+1][0]);
    const diff2 = Math.abs(arrayV[i][1] - arrayV[i+1][1]);

    if(  diff1  +  diff2  <= diff) {
        diff =    diff1  +  diff2
    }


}

console.log(diff);
