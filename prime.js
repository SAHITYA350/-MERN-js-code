let prime = (num) => {
    if (num <= 1){
        console.log("This is not prime number.");
    } else {
        for(let i = 2; i<= Math.floor(Math.sqrt(num)); i++){
                if(num%i === 0)
                    {
                    console.log("This is not a prime number.")
                } else {
                    console.log(`${num} is a prime number.`);
             }
        }
    }
}

console.log(prime(7));