const  array2 = [{id: 1, name: 'anis', a: '1'}, {id: 2, name: 'ayed', a: '2'}, {id: 1, name: 'anis', a: '3'}, {id: 4, name: 'ahla', a: '4'}];
const arrayFilterPipe = array2.map(item => {
    return {
        name: item.name, id: item.id
    }
});
let op = [];

function isNotExist(obj){
    return op.every(el => JSON.stringify(el) !== JSON.stringify(obj) )

}
arrayFilterPipe.forEach((el) => {
    if (isNotExist(el)){
        op.push(el)
    }
})

console.log(op);