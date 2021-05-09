/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';

import SampleCode from '../components/SampleCode';
import './browserFrame.css';

interface BrowserFrameProps {
    css: string;
    html: string;    
}

const BrowserFrame: React.FC<BrowserFrameProps> = ({ children, css, html }) => {
    return (
        <>
            <SampleCode fullHeight={true} lang="html" code={html} />
            <SampleCode fullHeight={true} lang="css" code={css} />
            <div className="demo__live">
                {children}
            </div>
        </>
    );
};

export default BrowserFrame;
