/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';

import './star.css';

interface StarProps {
    isActive: boolean;
}

const Star: React.FC<StarProps> = ({ isActive }) => {
    return (
        <button className="p-rating-star">
            {isActive ? '★' : '☆'}
        </button>
    );
};

export default Star;
