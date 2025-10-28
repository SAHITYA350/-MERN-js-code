// function fac(n) {
//     let result = 1;
//     for (let i = n; i > 0; i--) {
//         result *= i;
//         console.log(i);
//     }
//     return result;
// }

// console.log("Factorial:", fac(15));

function fac(n){
    if( n===0 || n===1) {
        return 1;
    }
    return n* fac(n-1);
}

console.log(fac(3));