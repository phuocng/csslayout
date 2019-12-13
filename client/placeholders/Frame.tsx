import React from 'react';

const Frame: React.FC<{}> = ({ children }) => {
    return (
        <div
            style={{
                border: '1px solid rgba(0, 0, 0, 0.3)',
                borderRadius: '2px',
                boxShadow: 'rgba(0, 0, 0, 0.2) 0px 16px 24px -4px, rgba(0, 0, 0, 0.05) 0px 8px 8px -4px',
                height: '100px',
                width: '100px',
            }}
        >
            {children}
        </div>
    );
};

export default Frame;
