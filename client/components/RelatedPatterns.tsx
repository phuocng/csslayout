import React, { useEffect } from 'react';

import Pattern from '../constants/Pattern';
import CoverCard from './CoverCard';
import Heading from './Heading';

interface RelatedPatternsProps {
    patterns: Pattern[];
}

const RelatedPatterns: React.FC<RelatedPatternsProps> = ({ patterns }) => {
    return (
        <section>
            <Heading title="Related patterns" />

            <div style={{ alignItems: 'start', display: 'flex', flexWrap: 'wrap', padding: '24px' }}>
                {
                    patterns.map((pattern) => <CoverCard key={pattern} pattern={pattern} />)
                }
            </div>
        </section>
    );
};

export default RelatedPatterns;
