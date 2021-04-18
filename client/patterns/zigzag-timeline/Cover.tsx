/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';

import Frame from '../../placeholders/Frame';
import Line from '../../placeholders/Line';
import Rectangle from '../../placeholders/Rectangle';

const Cover: React.FC<{}> = () => {
    return (
        <Frame>
            <div
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    justifyContent: 'center',
                    padding: '0.5rem',
                }}
            >
                <div
                    style={{
                        borderBottom: '1px solid #71717A',
                        borderRight: '1px solid #71717A',
                        padding: '0.5rem 1rem',
                        position: 'relative',
                        width: '100%',
                    }}
                >
                    <div
                        style={{
                            background: '#71717A',
                            borderRadius: '50%',
                            height: '.75rem',
                            position: 'absolute',
                            right: 0,
                            top: '50%',
                            transform: 'translate(50%, -50%)',
                            width: '.75rem',
                        }}
                    />
                    <div style={{ marginBottom: '0.25rem', width: '80%' }}><Rectangle /></div>
                    <div style={{ marginBottom: '0.25rem', width: '80%' }}><Line /></div>
                    <div style={{ marginBottom: '0.25rem', width: '60%' }}><Line /></div>
                </div>
                <div
                    style={{
                        borderLeft: '1px solid #71717A',
                        padding: '0.5rem 1rem',
                        position: 'relative',
                        width: '100%',
                    }}
                >
                    <div
                        style={{
                            background: '#71717A',
                            borderRadius: '50%',
                            height: '.75rem',
                            left: 0,
                            position: 'absolute',                            
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '.75rem',
                        }}
                    />
                    <div style={{ marginBottom: '0.25rem', width: '80%' }}><Rectangle /></div>
                    <div style={{ marginBottom: '0.25rem', width: '60%' }}><Line /></div>
                    <div style={{ marginBottom: '0.25rem', width: '80%' }}><Line /></div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
