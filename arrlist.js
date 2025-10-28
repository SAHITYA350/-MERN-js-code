let numbers = [19, 17, 16, 14, 2222, 21];

let isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

let prime = (arr) => {
    let result = [];
    for (let n of arr) {
        result.push(isPrime(n));
    }
    return result;
};

console.log(numbers);
console.log(prime(numbers));