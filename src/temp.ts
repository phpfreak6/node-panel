function sendCombinedArray<A, B>(a: A, b: B): [A, B] {
    return [a, b];
}

console.log(sendCombinedArray<number, number>(5, 5));