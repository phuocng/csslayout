/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';

interface TriangleProps {
    backgroundColor?: string;
    corner?: string;
    size?: number;
}

const Triangle: React.FC<TriangleProps> = ({ backgroundColor = 'rgba(0, 0, 0, .3)', size = 16, corner = 'tl' }) => {
    let bw = '';
    let bc = '';
    switch (corner) {
        case 't':
            bw = `0 ${size}px ${size}px ${size}px`;
            bc = `transparent transparent ${backgroundColor} transparent`;
            break;

        case 'r':
            bw = `${size}px 0 ${size}px ${2 * size}px`;
            bc = `transparent transparent transparent ${backgroundColor}`;
            break;

        case 'b':
            bw = `${size}px ${size}px 0 ${size}px`;
            bc = `${backgroundColor} transparent transparent transparent`;
            break;

        case 'l':
            bw = `${size}px ${2 * size}px ${size}px 0`;
            bc = `transparent ${backgroundColor} transparent transparent`;
            break;

        case 'tr':
            bw = `0 ${size}px ${size}px 0`;
            bc = `transparent ${backgroundColor} transparent transparent`;
            break;

        case 'br':
            bw = `0 0 ${size}px ${size}px`;
            bc = `transparent transparent ${backgroundColor} transparent`;
            break;

        case 'bl':
            bw = `${size}px 0 0 ${size}px`;
            bc = `transparent transparent transparent ${backgroundColor}`;
            break;

        case 'tl':
        default:
            bw = `${size}px ${size}px 0 0`;
            bc = `${backgroundColor} transparent transparent transparent`;
            break;
    }

    return (
        <div
            style={{
                borderColor: bc,
                borderStyle: 'solid',
                borderWidth: bw,
                height: 0,
                width: 0,
            }}
        />
    );
};

export default Triangle;
