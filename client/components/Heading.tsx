import React from 'react';

interface HeadingProps {
    title: string;
}

const Heading: React.FC<HeadingProps> = ({ title }) => {
    return (
        <div style={{ borderTop: '1px solid rgba(0, 0, 0, .2)', position: 'relative' }}>
            <h3
                style={{
                    backgroundColor: '#FFF',
                    fontSize: '20px',
                    fontWeight: 700,
                    left: '32px',
                    lineHeight: 1.5,
                    margin: 0,
                    padding: '0 8px',
                    position: 'absolute',
                    textTransform: 'uppercase',
                    top: 0,
                    transform: 'translate(0, -50%)',
                }}
            >
                {title}
            </h3>
        </div>
    );
};

export default Heading;
