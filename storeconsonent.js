function separateLetters(str) {
  const vowelsArr = str.match(/[aeiou]/gi) || [];
  const consonantsArr = str.match(/[^aeiou\W\d_]/gi) || [];

  console.log("Vowels Array:", vowelsArr);
  console.log("Consonants Array:", consonantsArr);
}

separateLetters("Sahitya");
