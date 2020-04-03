/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

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
                className='text-2xl lg:text-4xl'
                style={{
                    color: '#FFF',
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
    .then((r) => lint(r))               /* tslint */
    .then((r) => lazyLoad(r))           /* @loadable/component */
    .then((r) => optimizeAndBundle(r))  /* webpack */
    .then((r) => exportHtml(r))         /* react-snap */
    .then((r) => deploy(r))             /* Netlify */
    .then((r) => {
        expect(r).is(scalableCode);
        expect(r).is(superFastWebsite);
        expect(r).is(seoFriendly);
    })
    .finally(() => {
        /* Give me 1 Github star 🎉 */
    });
`}
                />
            </div>
        </div>
    );
};

export default MadeOf;
