const array = [0, 1, 2, 3, 2, 1, 6, 0];
// console.log([...new Set(array)]);

console.log(array.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], []));

const  array2 = [{id: 1, name: 'anis'}, {id: 2, name: 'ayed'}, {id: 3, name: 'anis'}, {id: 4, name: 'ahla'}];
const unique = [...new Map(array2.map(item => [item['name'], item])).values()];