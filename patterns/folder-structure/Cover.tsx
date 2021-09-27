import * as React from 'react';

import Frame from '../../placeholders/Frame';
import Square from '../../placeholders/Square';

const Cover: React.FC<{}> = () => {
    return (
        <Frame>
            <div
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    height: '100%',
                    justifyContent: 'center',
                    padding: '0.5rem',
                }}
            >
                <div>
                    <div
                        style={{
                            padding: '0rem 0rem 0rem 1rem',
                            position: 'relative',
                        }}
                    >
                        <div
                            style={{
                                borderLeft: '1px solid rgba(0, 0, 0, 0.3)',
                                height: '100%',
                                left: 0,
                                position: 'absolute',
                                top: 0,
                            }}
                        />
                        <div
                            style={{
                                borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                                left: 0,
                                position: 'absolute',
                                top: '0.5rem',
                                width: '1rem',
                            }}
                        />
                        <div
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                borderRadius: '0.25rem',
                                height: '1rem',
                                width: '1rem',
                            }}
                        />
                        <div
                            style={{
                                marginLeft: '0.5rem',
                                padding: '0rem 0rem 0rem 1rem',
                                position: 'relative',
                            }}
                        >
                            <div
                                style={{
                                    borderLeft: '1px solid rgba(0, 0, 0, 0.3)',
                                    height: '50%',
                                    left: 0,
                                    position: 'absolute',
                                    top: 0,
                                }}
                            />
                            <div
                                style={{
                                    borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                                    left: 0,
                                    position: 'absolute',
                                    top: '0.5rem',
                                    width: '1rem',
                                }}
                            />
                            <div
                                style={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                    borderRadius: '0.25rem',
                                    height: '1rem',
                                    width: '1rem',
                                }}
                            />
                        </div>
                    </div>
                    <div
                        style={{
                            padding: '0rem 0rem 0rem 1rem',
                            position: 'relative',
                        }}
                    >
                        <div
                            style={{
                                borderLeft: '1px solid rgba(0, 0, 0, 0.3)',
                                height: '50%',
                                left: 0,
                                position: 'absolute',
                                top: 0,
                            }}
                        />
                        <div
                            style={{
                                borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                                left: 0,
                                position: 'absolute',
                                top: '0.5rem',
                                width: '1rem',
                            }}
                        />
                        <div
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                borderRadius: '0.25rem',
                                height: '1rem',
                                width: '1rem',
                            }}
                        />
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
