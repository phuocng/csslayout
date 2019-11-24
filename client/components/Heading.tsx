import React from 'react';

interface HeadingProps {
    title: string;
}

const Heading: React.FC<HeadingProps> = ({ title }) => {
    return (
        <div className="bt b--black-20 relative">
            <h3 className="absolute bg-white f4 left-2 lh-copy ma0 ph2 top-0 ttu" style={{ transform: 'translate(0, -50%)' }}>{title}</h3>
        </div>
    );
};

export default Heading;
