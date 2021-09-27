type Tuple<T> = [number, T[]];

export function randomItems<T>(arr: T[], count: number): T[] {
    const result = arr.concat().reduce(
        (p, _, __, arr) => {
            const [a, b] = p;
            return a < count ? [a + 1, b.concat(arr.splice((Math.random() * arr.length) | 0, 1))] : p;
        },
        [0, []] as Tuple<T>
    );
    return (result as Tuple<T>)[1];
}
