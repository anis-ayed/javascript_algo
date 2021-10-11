let array = [6850207,
    8707138,
    8028585,
    3635318,
    8612162,
    6854699,
    7106093,
    3721952,
    2670046,
    1746583];
array = array.sort((a,b) => b-a)
let diff=100000;
array.map((val, index) => {
    if(val - array[index+1] < diff) diff = val - array[index+1]
})

console.log(diff);