import * as React from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';

const PrefixView: React.FC<{
    children: string;
    language: Language;
}> = ({ children, language }) => {
    return (
        <div>
            <div>test</div>
            {children}
        </div>
    );
};

export default PrefixView;
