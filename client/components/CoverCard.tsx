/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';
import { Link } from 'react-router-dom';

import Pattern from '../constants/Pattern';
import slug from '../helpers/slug';
import CoverLoader from '../loaders/CoverLoader';
import './coverCard.css';

interface CoverCardProps {
    pattern: Pattern;
}

const CoverCard: React.FC<CoverCardProps> = ({ pattern }) => {
    return (
        <Link
            to={`/patterns/${slug(pattern)}`}
            className="cover"
        >
            <CoverLoader pattern={pattern} />
            <h4 className="cover__name">
                {pattern}
            </h4>
        </Link>
    );
};

export default CoverCard;
