let datetime1 = new Date();

//WASTE TIME DOING SOME BUSY WORK
for(i=0;i<100000000;i++){
    const text = "i=" + i;
}

let datetime2 = new Date();


console.log(datetime1.toLocaleString())
console.log(datetime2.toLocaleString())

console.log(datetime2.getTime())
console.log(datetime2.getTime())

