import React, { useEffect } from 'react';

import CoverCard from './CoverCard';

const RelatedPatterns = ({ patterns }) => {
    return (
        <div className="bt b--black-20 relative">
            <h3 className="absolute bg-white f4 left-2 lh-copy ma0 ph2 top-0 ttu" style={{ transform: 'translate(0px, -50%)' }}>Related patterns</h3>

            <div className="flex flex-wrap items-start pa4">
                {
                    patterns.map(pattern => <CoverCard key={pattern} pattern={pattern} />)
                }
            </div>
        </div>
    );
};

export default RelatedPatterns;
