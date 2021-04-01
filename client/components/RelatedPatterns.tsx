/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';

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
