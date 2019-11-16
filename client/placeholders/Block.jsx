import React from 'react';

import random from '../helpers/random';
import Rectangle from './Rectangle';

const Block = ({ numberOfBlocks }) => {
    return (
        <div className="flex flex-wrap w-100">
            {
                Array(numberOfBlocks).fill(0).map((_, i) => {
                    const s = random(1, 5);
                    return (
                        <div key={i} className={`mr2 mb2 w-${s * 10}`}>
                            <Rectangle height={8} />
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Block;
