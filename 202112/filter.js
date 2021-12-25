//filter
let fData = arrTemp2.filter((item)=>{
    return item.cost > 15000;
});
console.log(fData);

let fData2 = arrTemp2.filter((item)=>{
    return item.name.startsWith("C");
});
console.log(fData2); 