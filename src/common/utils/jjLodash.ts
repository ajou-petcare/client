function sum(d: number[]): number {
    let sum = 0;
    d.forEach((d) => { sum += d; });
    return sum;
}

function cloneDeep<T>(o: T): T {
    return JSON.parse(JSON.stringify(o));
}

export { sum, cloneDeep };
