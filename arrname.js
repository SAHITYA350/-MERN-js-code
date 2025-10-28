let arr = ['sahitya', 'rxj', 'abhijit', 'rajat', 'mukesh'];

function printMoreThanThreeVowels(arr) {
   let result = [];
   for (let word of arr) {
       let vowels = word.match(/[aeiou]/gi);
       let count = vowels ? vowels.length : 0;

       if (count > 3) {
           console.log(`${word} has more than 3 vowels`);
           result.push(word);
       }
   }
   return result;
}

console.log("Words with more than 3 vowels:", printMoreThanThreeVowels(arr));