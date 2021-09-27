import * as React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDark';

export const Code = ({ children, className }) => {
    const lang = className ? className.split('-').pop() : 'js';

    return (
        <Highlight {...defaultProps} theme={theme} code={children.trim()} language={lang}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={`block-code ${className}`} style={{ ...style }}>
                    {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                <span key={key} {...getTokenProps({ token, key })} />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    );
};
