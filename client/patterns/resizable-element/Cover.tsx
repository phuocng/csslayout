/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';

import Frame from '../../placeholders/Frame';

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
                    padding: '16px',
                }}
            >
                <div
                    style={{
                        border: '1px dashed rgba(0, 0, 0, 0.3)',
                        height: '100%',
                        position: 'relative',
                        width: '100%',
                    }}
                >
                    <div
                        style={{
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            cursor: 'nwse-resize',
                            height: '12px',
                            left: 0,
                            position: 'absolute',
                            top: 0,
                            transform: 'translate(-50%, -50%)',
                            width: '12px',
                        }}
                    />
                    <div
                        style={{
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            cursor: 'ns-resize',
                            height: '12px',
                            left: '50%',
                            position: 'absolute',
                            top: 0,
                            transform: 'translate(-50%, -50%)',
                            width: '12px',
                        }}
                    />
                    <div
                        style={{
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            cursor: 'nesw-resize',
                            height: '12px',
                            position: 'absolute',
                            right: 0,
                            top: 0,
                            transform: 'translate(50%, -50%)',
                            width: '12px',
                        }}
                    />
                    <div
                        style={{
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            cursor: 'ew-resize',
                            height: '12px',
                            position: 'absolute',
                            right: 0,
                            top: '50%',
                            transform: 'translate(50%, -50%)',
                            width: '12px',
                        }}
                    />
                    <div
                        style={{
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            bottom: 0,
                            cursor: 'nwse-resize',
                            height: '12px',
                            position: 'absolute',
                            right: 0,
                            transform: 'translate(50%, 50%)',
                            width: '12px',
                        }}
                    />
                    <div
                        style={{
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            bottom: 0,
                            cursor: 'ns-resize',
                            height: '12px',
                            position: 'absolute',
                            right: '50%',
                            transform: 'translate(50%, 50%)',
                            width: '12px',
                        }}
                    />
                    <div
                        style={{
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            bottom: 0,
                            cursor: 'nesw-resize',
                            height: '12px',
                            left: 0,
                            position: 'absolute',
                            transform: 'translate(-50%, 50%)',
                            width: '12px',
                        }}
                    />
                    <div
                        style={{
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            cursor: 'ew-resize',
                            height: '12px',
                            left: 0,
                            position: 'absolute',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '12px',
                        }}
                    />
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
