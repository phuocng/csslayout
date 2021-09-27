/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';

import { Code } from '../components/Code';

interface BrowserFrameProps {
    css: string;
    html: string;    
}

const BrowserFrame: React.FC<BrowserFrameProps> = ({ children, css, html }) => {
    return (
        <>
            <div className="demo__html">
                <Code className="lang-html">{html}</Code>
            </div>
            <div className="demo__css">
                <Code className="lang-css">{css}</Code>
            </div>
            <div className="demo__live">
                {children}
            </div>
        </>
    );
};

export default BrowserFrame;
