export function number(start, end, writer = console.log) {
    for (let i = start; i <= end; i++) {
        writer(i);
    }
}