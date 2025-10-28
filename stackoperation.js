function rverese(str){
    let BsStack = [];
  for(let char of str){
    BsStack.push(char);
  }

  let reverse = "";
  while(BsStack.length > 0){
    reverse += BsStack.pop();
  }
  return reverse;
}

let str = "Sahitya";
console.log(reverse(str));
