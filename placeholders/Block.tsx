import * as React from 'react';

import { random } from '../utils/random';

interface BlockProps {
    backgroundColor?: string;
    blockHeight?: number;
    justify?: string;
    numberOfBlocks?: number;
}

const Block: React.FC<BlockProps> = ({
    backgroundColor = 'rgba(0, 0, 0, 0.3)',
    blockHeight = 4,
    justify = 'start',
    numberOfBlocks = 1,
}) => {
    return (
        <div
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: justify,
                width: '100%',
            }}
        >
            {Array(numberOfBlocks)
                .fill(0)
                .map((_, i) => {
                    const s = random(1, 5);
                    return (
                        <div
                            key={i}
                            style={{
                                marginBottom: '8px',
                                marginRight: '8px',
                                width: `${s * 10}%`,
                            }}
                        >
                            <div
                                style={{
                                    backgroundColor,
                                    borderRadius: '9999px',
                                    height: `${blockHeight}px`,
                                    width: '100%',
                                }}
                            />
                        </div>
                    );
                })}
        </div>
    );
};

export default Block;
