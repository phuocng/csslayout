import React from 'react';
import { Link } from 'react-router-dom';

import CoverLoader from './loaders/CoverLoader';
import slug from './helpers/slug';

const CoverCard = ({ pattern }) => {
    return (
        <div className="pa1 w-20">
            <Link
                to={`/${slug(pattern)}`}
                className="link flex flex-column items-center justify-center tc hover-bg-black-10 br2 pa3"
            >
                <CoverLoader pattern={pattern} />
                <h4 className="f5 mv0 pt3 fw6">{pattern}</h4>
            </Link>
        </div>
    );
};

export default CoverCard;
