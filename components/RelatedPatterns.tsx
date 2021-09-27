import * as React from 'react';
import { Heading, Spacer } from '@1milligram/design';

import { Pattern } from '../constants/Pattern';
import { CoverCard } from './CoverCard';

interface RelatedPatternsProps {
    patterns: Pattern[];
}

export const RelatedPatterns: React.FC<RelatedPatternsProps> = ({ patterns }) => {
    return (
        <section>
            <Heading level={2}>See also</Heading>

            <div style={{ alignItems: 'start', display: 'flex', flexWrap: 'wrap', padding: '1.5rem' }}>
                {
                    patterns.map((pattern) => <CoverCard key={pattern} pattern={pattern} />)
                }
            </div>
        </section>
    );
};
