function rotate(arr, k){
    let n = arr.length;
    k = k%n;
    for(let i = 0; i<k; i++){
        let last = arr[n-1];
        for(let j = n-1; j>0; j--){
            arr[j] = arr[j-1];
        }
        arr[0] = last;
    }
}

let arr = [1,2,3,4,5,6,7];
rotate(arr, 3);
console.log(arr);
