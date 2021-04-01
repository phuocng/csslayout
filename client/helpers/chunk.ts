/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

function chunk<T>(arr: T[], size: number): T[][] {
    return arr.reduce((acc, e, i) => (i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc), []);
};

export default chunk;
