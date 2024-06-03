function* fibonacciGenerator() {
    let [prev, curr] = [0, 1];
    while (true) {
        yield prev;
        [prev, curr] = [curr, prev + curr];
    }
}
function generateFibonacci(n) {
    const fibGen = fibonacciGenerator();
    for (let i = 0; i < n; i++) {
        console.log(fibGen.next().value);
    }
}
generateFibonacci(10);
//new info added
