/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

const shuffe = (array: number[]) => {
    array.sort(() => Math.random() - 0.5);
    return array;
};

export default shuffe;
