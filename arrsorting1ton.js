// function sort(arr){
//     let n = arr.length;

//     for(let i = 0; i<n-1; i++){
//         for(let j = i + 1; j<n ;j++){
//             if(arr[i]>arr[j]){
//                 [arr[i], arr[j]] = [arr[j], arr[i]]
//             }
//         }
//     }
//     console.log("Sorted number : ", arr);
// }

// let arr = [1,3,5,41,3,87,45,56,522,2];
// console.log("Original arr : ", arr);
// sort(arr);

// function sort(arr){
//  arr.sort((a,b) => a-b);
// }

// let arr = [1,3,5,41,3,87,45,56,522,2];
// console.log("Original arr : ", arr);
// sort(arr);
// console.log("Sorted arr : ", arr);


function sort(arr, n) {
    let i = 0;
    while (i < n) {
        let correct = arr[i] - 1;

        // Only swap if in valid range [1, n] and not already at correct index
        if (arr[i] >= 1 && arr[i] <= n && arr[i] !== arr[correct]) {
            swap(arr, i, correct);
        } else {
            i++;
        }
    }
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let arr = [2, 6, 1, 8, 4, 7, 9];
let n = arr.length;

sort(arr, n);

console.log("Partially Sorted (1–n range):", arr);
