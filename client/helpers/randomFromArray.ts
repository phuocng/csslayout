/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

function randomFromArray<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
};

export default randomFromArray;
