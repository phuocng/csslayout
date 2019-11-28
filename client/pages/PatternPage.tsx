import React from 'react';

import Pattern from '../constants/Pattern';
import DetailsLoader from '../loaders/DetailsLoader';

interface PatternPageProps {
    pattern: string;
}

const capitalizeFirstLetter = (s: string) => `${s.charAt(0).toUpperCase()}${s.slice(1)}`;

const PatternPage: React.FC<PatternPageProps> = ({ pattern }) => {
    const name = pattern.split('-').map((s) => capitalizeFirstLetter(s)).join('');
    const patterns = Object.keys(Pattern);

    return (
        patterns.indexOf(name) === -1
            // TODO: Render 404
            ? <div>404</div>
            : <DetailsLoader pattern={pattern} />
    );
};

export default PatternPage;
