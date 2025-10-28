function count(str){
  const vowel = "aeiouAEIOU";
  let c = 0;
  for(let i = 0; i< str.length; i++){
  if(vowel.includes(str[i])){
    c++;
  }
  }
  return count;
}

function countvowel(str) {
    return str.match(/[aeiou]/gi)?.length || 0;
}

console.log(countvowel("SAHITYA"));