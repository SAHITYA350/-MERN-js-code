// let arr = [1,2,3,4,5];
// console.log(arr);
// arr.push(6);
// console.log(arr);
// arr.pop();
// console.log(arr);

// let v = "Sahitya";

// let reversed = v.split("").reverse().join("");
// console.log("Reversed (basic):", reversed);

let v = "Sahitya";
let reversed = "";

// Loop from last character to first
for (let i = v.length - 1; i >= 0; i--) {
    reversed += v[i];
}

console.log("Original:", v);
console.log("Reversed:", reversed);

