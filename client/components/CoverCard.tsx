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
            to={`/${slug(pattern)}`}
            style={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                padding: '16px',
                textDecoration: 'none',
                width: '150px',
            }}
        >
            <CoverLoader pattern={pattern} />
            <h4
                style={{
                    fontSize: '16px',
                    fontWeight: 500,
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
