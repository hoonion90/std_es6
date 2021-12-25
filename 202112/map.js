// console.log("==========map=========");
// let mapTemp = arrTemp.map(function(item){
//     return item;
// });
// console.log(mapTemp);
// console.log(mapTemp.length);

console.log("==========map=========");
let arrRst = arrTemp.map((item)=>{
    return item;
});
//return array
console.log(arrRst);
console.log(arrRst.length);


let arrTemp2 = [
    {name: "비디오/DVD", cost: 20000},
    {name: "CD", cost: 30000},
    {name: "영화", cost: 15000},
]
console.log("==========map=========");
let arrRst2 = arrTemp2.map((item)=>{
    return item.name;
});
console.log(arrRst2);

let arrRst3 = arrTemp2.map((item)=>{
    return item.cost;
});
console.log(arrRst3);