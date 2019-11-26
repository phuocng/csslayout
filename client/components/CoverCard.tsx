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
        <div className="pa1 w-20">
            <Link
                to={`/${slug(pattern)}`}
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '16px',
                    textDecoration: 'none',
                }}
            >
                <CoverLoader pattern={pattern} />
                <h4
                    style={{
                        color: 'rgba(0, 0, 0, 0.3)',
                        fontSize: '16px',
                        fontWeight: 500,
                        margin: 0,
                        paddingTop: '12px',
                    }}
                >
                    {pattern}
                </h4>
            </Link>
        </div>
    );
};

export default CoverCard;
