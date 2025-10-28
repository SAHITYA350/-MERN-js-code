let arr = new Array();

function linearsearch(arr,x,y){
   for(let i = 0; i<arr.length; i++){
    if(arr[i] === x || arr[i] === y){
        console.log("Present");
    } else{
        console.log("Not present");
    }
   }
}

linearsearch(arr[48, 12, 66, 68, 10,12,70]);