import * as React from 'react';
import Head from 'next/head';

import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import { removeIndent } from '../../utils/removeIndent';

interface DotProps {
    index: number;
}

const Details: React.FC<{}> = () => {
    const [activeItem, setActiveItem] = React.useState(0);

    const Dot: React.FC<DotProps> = ({ index }) => {
        const isActive = index === activeItem;
        const click = () => setActiveItem(index);
        return (
            <li
                style={{
                    backgroundColor: isActive ? 'rgba(0, 0, 0, 0.3)' : '',
                    border: isActive ? 'none' : '1px solid rgba(0, 0, 0, 0.3)',
                    borderRadius: '9999px',
                    cursor: 'pointer',
                    height: '12px',
                    margin: '0 4px',
                    width: '12px',
                }}
                onClick={click}
            />
        );
    };

    return (
        <PatternLayout pattern={Pattern.DotNavigation}>
            <Head>
                <meta name="description" content="Create dot navigation with CSS flexbox" />
                <meta name="og:description" content="Create dot navigation with CSS flexbox" />
                <meta name="twitter:description" content="Create dot navigation with CSS flexbox" />
                <meta name="keywords" content="css dot navigation, css flexbox" />
            </Head>
            <BrowserFrame
                html={`
<ul class="dots">
    <li class="dots__item"></li>

    <!-- Repeat other dots -->
    ...
</div>
`}
                css={removeIndent`
                    .dots {
                        /* Center the content */
                        align-items: center;
                        display: flex;
                        justify-content: center;

                        /* Reset styles */
                        list-style-type: none;
                        margin: 0;
                        padding: 0;
                    }

                    .dots__item {
                        /* Rounded border */
                        border-radius: 9999px;
                        height: 12px;
                        width: 12px;

                        /* Active dot */
                        background-color: rgba(0, 0, 0, 0.3);

                        /* Inactive dot */
                        background-color: transparent;
                        border: 1px solid rgba(0, 0, 0, 0.3);

                        /* OPTIONAL: Spacing between dots */
                        margin: 0 4px;
                    }
                `}
            >
                <div
                    style={{
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        justifyContent: 'center',
                        padding: '8px',
                    }}
                >
                    <ul
                        style={{
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            listStyleType: 'none',
                            margin: 0,
                            padding: 0,
                        }}
                    >
                        <Dot index={0} />
                        <Dot index={1} />
                        <Dot index={2} />
                        <Dot index={3} />
                    </ul>
                </div>
            </BrowserFrame>
        </PatternLayout>
    );
};

export default Details;
