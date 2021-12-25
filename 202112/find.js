//find
//처음으로 찾은 값
console.log("==============find==============");
let findData = arrTemp2.find((item)=>{
    return item.name.startsWith("C");
});
console.log(findData);
console.log(findData.name);
console.log(findData.cost);

console.log("==============findIndex==============");
let findIndexData = arrTemp2.findIndex((item)=>{
    return item.name.startsWith("CD")
})
console.log(findIndexData);