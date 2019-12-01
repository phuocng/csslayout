import React from 'react';

import SampleCode from '../components/SampleCode';

const MadeOf: React.FC<{}> = () => {
    return (
        <div
            style={{
                backgroundColor: '#282828',
                padding: '24px',
            }}
        >
            <div
                style={{
                    color: '#FFF',
                    fontSize: '48px',
                    fontWeight: 600,
                    textAlign: 'center',
                    textTransform: 'lowercase',
                }}
            >
                How it's made
            </div>
            <div>
                <SampleCode
                    lang='javascript'
                    code={`
this
    .madeWith([react,typescript])
    .then((r) => lint(r))                           /* tslint */
    .then((r) => lazyLoad(r))                       /* @loadable/component */
    .then((r) => optimizeAndBundle(r))              /* webpack */
    .then((r) => exportHtml(r))                     /* react-snap */
    .then((r) => deploy(r))                         /* Netlify */
    .then((r) => {
        expect(r).is(scalableCode);
        expect(r).is(superFastWebsite);
        expect(r).is(seoFriendly);
    })
`}
                />
                <div
                    className="hljs"
                    style={{
                        lineHeight: 1.5,
                        listStyleType: 'none',
                        marginTop: '-16px',
                        paddingLeft: '40px',
                    }}
                >
                    .finally(
                    <span className="hljs-function"><span className="hljs-params">()</span> => </span>
                    &#123;
                    <span className="hljs-comment">
                        <a
                            href="https://github.com/phuoc-ng/csslayout"
                            style={{ color: 'currentColor', textDecoration: 'none' }}
                        >
                            &#47;* Give me 1 Github star here */
                        </a>
                    </span>
                    }) 🎉
                </div>
            </div>
        </div>
    );
};

export default MadeOf;
