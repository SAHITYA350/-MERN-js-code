function major(arr){

    let n = arr.length;
    for(let i = 0; i<n; i++){
        let count = 0;
        for(let j = 0;j < n ; j++){
            if(arr[i] === arr[j]){
                count++;
            }
        }
            if(count>n/2){
                return arr[i];
            }
        }
    return -1;
}

let arr = [1,1,2,5,1,3,4];
console.log(major(arr));