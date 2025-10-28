let arr = [10,20,4,556,4891,1,12,46]

if(arr.length === 0){
    console.log("Array is empty");
} else{
    let max = arr[0];
    for(let i = 1; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }  
    }
    console.log("The largest element in the array is: " + max);
}