import React from 'react';

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
