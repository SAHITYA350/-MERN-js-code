// function sum(){
//     let s = 0;
//    let arr = [45, 55, 124, 46, 58];
//    for(let i = 0; i<arr.length; i++){
//     let v = arr[i];
//     s += v;
// }
// console.log(s);
//    s++;
// }

// console.log(sum());

function arrasum(arr, i = 0){

    if(i >= arr.length){
        return 0;
    }

    return arr[i] + arrasum(arr, i + 1);
}

console.log(arrasum());