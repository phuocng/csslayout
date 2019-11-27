import React from 'react';

import highlight from '../helpers/highlight';

interface SampleCodeProps {
    code: string;
    lang: string;
}

const SampleCode: React.FC<SampleCodeProps> = ({ code, lang }) => {
    return code === ''
            ? <></>
            : (
                <pre
                    style={{ height: '100%', lineHeight: 1.5, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: highlight(code, lang) }}
                />
            );
};

export default SampleCode;
