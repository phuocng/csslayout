import React from 'react';

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
                    className="hljs"
                    style={{
                        height: fullHeight ? '100%' : 'auto',
                        lineHeight: 1.5,
                        margin: 0,
                    }}
                    dangerouslySetInnerHTML={{ __html: highlight(code, lang) }}
                />
            );
};

export default SampleCode;
