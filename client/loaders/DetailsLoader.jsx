import React from 'react';
import loadable from '@loadable/component';

import './spinner.css';

const slug = item => item.toLowerCase().split(' ').join('-');

const DetailsLoader = loadable(props => import(`../patterns/${slug(props.pattern)}/Details`), {
    fallback: (
        <div className="w100 h-100 flex items-center justify-center">
            <svg className="spinner" width="64px" height="64px" viewBox="0 0 32 32">
                <circle
                    cx="16"
                    cy="16"
                    fill="none"
                    r="12"
                    stroke="rgba(0, 0, 0, 0.4)"
                    strokeDasharray={Math.PI * 2 * 9}
                    strokeLinecap="round"
                    strokeWidth="4"
                />
            </svg>
        </div>
    )
});

export default DetailsLoader;
