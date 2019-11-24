import React, { useEffect } from 'react';

import CoverCard from './CoverCard';
import Heading from './Heading';

const RelatedPatterns = ({ patterns }) => {
    return (
        <section>
            <Heading title="Related patterns" />

            <div className="flex flex-wrap items-start pa4">
                {
                    patterns.map(pattern => <CoverCard key={pattern} pattern={pattern} />)
                }
            </div>
        </section>
    );
};

export default RelatedPatterns;
