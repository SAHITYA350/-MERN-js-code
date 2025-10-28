let a = 20;
let b = 10;
let c = 0;
console.log(a,b);

a = a+b;
b = a-b;
a = a-b;

console.log(a,b);

[a,b] = [b,a];
console.log(a,b);

c = a;
a = b;
b = c;

console.log(a,b);