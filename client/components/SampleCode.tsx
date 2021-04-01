/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';

import highlight from '../helpers/highlight';

interface SampleCodeProps {
    code: string;
    fullHeight?: boolean;
    lang: string;
}

const SampleCode: React.FC<SampleCodeProps> = ({ code, fullHeight = false, lang }) => {
    return code === ''
            ? <></>
            : (
                <pre
                    className={`language-${lang}`}
                    dangerouslySetInnerHTML={{ __html: highlight(code, lang) }}
                />
            );
};

export default SampleCode;
