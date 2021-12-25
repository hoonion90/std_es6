let arrTemp = ["비디오/DVD","CD","영화","콘서트","스포츠 행사","라이브 공연","기타"];

//for
console.log("==========for=========");
for (i = 0; i <= arrTemp.length; i++){
    console.log(arrTemp[i]);
}

//foreach
console.log("==========foreach=========");
arrTemp.forEach(function(item) {
    console.log(item);
});

console.log("==========foreach_es6=========");
arrTemp.forEach((item)=>{console.log(item);});

console.log("==========foreach_index=========");
arrTemp.forEach((item, index)=>{console.log(item, index);});

console.log('end');