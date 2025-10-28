let obj1 = {
    name:"Sahitya Ghosh",
    address:"15/6B GPL",
    age:21
}
let obj2 = {
    name:"Biswajit Ghosh",
    address:"15/6B GPL",
    age:51
}
let obj3 = {
    name:"Somridhya Ghosh",
    address:"15/6B GPL",
    age:12
}
let obj4 = {
    name:"Chandrani Ghosh",
    address:"15/6B GPL",
    age:45
}

let arr = [obj1, obj2, obj3, obj4, "Bubai", 2005, true];
console.log(arr);

// let shift = arr.shift();
// console.log(shift);

for(let i = 0; i<=3; i++){
   let a = arr.pop();
   console.log(a);  
}