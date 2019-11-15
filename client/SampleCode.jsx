import React from 'react';

import highlight from './helpers/highlight';

const SampleCode = ({ code, lang }) => {
    return code === ''
            ? <></>
            : (
                <pre className="lh-copy mh0 mv3" dangerouslySetInnerHTML={{ __html: highlight(code, lang) }} />
            );
};

export default SampleCode;
