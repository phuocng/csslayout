/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { Link } from 'react-router-dom';

import Pattern from '../constants/Pattern';
import slug from '../helpers/slug';
import CoverLoader from '../loaders/CoverLoader';

interface CoverCardProps {
    pattern: Pattern;
}

const CoverCard: React.FC<CoverCardProps> = ({ pattern }) => {
    return (
        <Link
            to={`/patterns/${slug(pattern)}`}
            className='w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6'
            style={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                padding: '16px',
                textDecoration: 'none',
            }}
        >
            <CoverLoader pattern={pattern} />
            <h4
                className='font-normal'
                style={{
                    margin: 0,
                    paddingTop: '12px',
                    textAlign: 'center',
                }}
            >
                {pattern}
            </h4>
        </Link>
    );
};

export default CoverCard;
