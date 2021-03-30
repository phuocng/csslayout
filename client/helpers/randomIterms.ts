/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

type Tuple<T> = [number, T[]];

function randomItems<T>(arr: T[], count: number): T[] {
    const result = arr.concat().reduce(
        (p, _, __, arr) => {
            const [a, b] = p;
            return (a < count)
                    ? [a + 1, b.concat(arr.splice(Math.random() * arr.length | 0, 1))]
                    : p;
        },
        [0, []] as Tuple<T>
    );
    return (result as Tuple<T>)[1];
};

export default randomItems;
