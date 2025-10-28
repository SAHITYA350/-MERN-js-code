
let f = 0;
function counter(){
  f++;
  console.log(`count : ${f}`);
}

counter();
counter();
counter();
counter();
counter();
counter();

let one = {a:1,b:2}
let two = {    b:2,c:3}
let three = {    c:5,d:6}

let four = {
    ...one,
    ...two,
    ...three,
    e: "a"
}
console.log(four);

