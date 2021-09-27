import * as React from 'react';
import { Heading } from '@1milligram/design';

import { Pattern } from '../constants/Pattern';
import { CoverCard } from './CoverCard';

export const RelatedPatterns: React.FC<{
    patterns: Pattern[];
}> = ({ patterns }) => {
    return (
        <section>
            <Heading level={2}>See also</Heading>

            <div style={{ alignItems: 'start', display: 'flex', flexWrap: 'wrap', padding: '1.5rem' }}>
                {patterns.map((pattern) => (
                    <CoverCard key={pattern} pattern={pattern} />
                ))}
            </div>
        </section>
    );
};
