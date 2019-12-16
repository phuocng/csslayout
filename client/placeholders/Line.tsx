import React from 'react';

interface LineProps {
    backgroundColor?: string;
}

const Line: React.FC<LineProps> = ({
    backgroundColor = 'rgba(0, 0, 0, 0.3)',
}) => {
    return (
        <div
            style={{
                backgroundColor,
                height: '1px',
                width: '100%',
            }}
        />
    );
};

export default Line;
