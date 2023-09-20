function fibonacci(item, mem = {}) {
    console.log(item, mem);

    if(item < 2) return item;
  
    if(item in mem) return mem[item];

    mem[item] = fibonacci(item-1, mem) + fibonacci(item-2, mem); 

    return mem[item];
}

// console.log(fibonacci(1));
// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(4));
// console.log(fibonacci(5));
// console.log(fibonacci(6));
// console.log(fibonacci(7));
// console.log(fibonacci(8));
// console.log(fibonacci(9));
console.log(fibonacci(10));
// console.log(fibonacci(20));
// console.log(fibonacci(50)); 