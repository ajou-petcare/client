/**
 * moneyFormatter
 * @param n number
 * commonly
 */
function moneyFormatter(n: number): string {
    return `${n.toLocaleString()}원`;
}

export { moneyFormatter };
