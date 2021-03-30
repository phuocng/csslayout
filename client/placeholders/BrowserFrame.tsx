/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';

import SampleCode from '../components/SampleCode';
import './browserFrame.css';

interface BrowserFrameProps {
    content: React.ReactNode;
    source?: string;
}

const BrowserFrame: React.FC<BrowserFrameProps> = ({ content, source }) => {
    return (
        <div className="demo">
            <div className="demo__source">
                {source && <SampleCode fullHeight={true} lang="html" code={source} />}
            </div>
            <div className="demo__live">
                {content}
            </div>
        </div>
    );
};

export default BrowserFrame;
