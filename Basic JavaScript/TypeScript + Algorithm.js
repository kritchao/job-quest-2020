// 1. Fibonacci

let fib = (n) => {
    return n === 0 ? 0 : n <= 2 ? 1 : fib(n - 1) + fib(n - 2);
};

// 2. Shift

let shift = (arr, dir, num) => {
    if (dir === 'right') {
        for (i = 0; i < num; i++) {
            let temp = arr.pop()
            arr.unshift(temp)
        }
        return arr;
    } else if (dir === 'left') {
        for (i = 0; i < num; i++) {
            let temp = arr.shift()
            arr.push(temp)
        }
        return arr;
    } else {
        return "error"
    }
}

// 3. second max

let secondMax = (arr) => {
    if (arr.length === 0) return "error";
    else {
        let max = Math.max(...arr)
        let index = arr.indexOf(max)
        arr.splice(index, 1)
        return Math.max(...arr)
    }
}

// 4. fizzBuzz

let fizzBuzz = (num) => {
    return ((num % 3 ? '' : 'Fizz') + (num % 5 ? '' : 'Buzz') || num)
}
