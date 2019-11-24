import React from 'react';

const Triangle = ({ size = 16, corner = 'tl' }) => {
    let bw = '';
    let bc = '';
    switch (corner) {
        case 't':
            bw = `0 ${size}px ${size}px ${size}px`;
            bc = 'transparent transparent rgba(0, 0, 0, .3) transparent';
            break;

        case 'b':
            bw = `${size}px ${size}px 0 ${size}px`;
            bc = 'rgba(0, 0, 0, .3) transparent transparent transparent';
            break;

        case 'tr':
            bw = `0 ${size}px ${size}px 0`;
            bc = 'transparent rgba(0, 0, 0, .3) transparent transparent';
            break;

        case 'br':
            bw = `0 0 ${size}px ${size}px`;
            bc = 'transparent transparent rgba(0, 0, 0, .3) transparent';
            break;

        case 'bl':
            bw = `${size}px 0 0 ${size}px`;
            bc = 'transparent transparent transparent rgba(0, 0, 0, .3)';
            break;

        case 'tl':
        default:
            bw = `${size}px ${size}px 0 0`;
            bc = 'rgba(0, 0, 0, .3) transparent transparent transparent';
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
