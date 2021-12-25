//every
//모두가 그 값인가? result : boolean
console.log("==============every==============");
let eData = arrTemp2.every((item)=>{
    return item.name.startsWith("C");
});
console.log(eData);