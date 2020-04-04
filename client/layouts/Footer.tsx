/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';

import SubscribeForm from './SubscribeForm';

const Footer: React.FC<{}> = () => {
    return (
        <>
            <div
                className='xl:border-l xl:border-r xl:border-gray-400'
                style={{
                    padding: '32px',
                    textAlign: 'center',
                }}
            >
                <div style={{ lineHeight: 1.5, marginBottom: '12px' }}>
                    Hit the Subscribe button for the latest news on my tools. No spam. Ever!
                </div>
                <SubscribeForm />
            </div>
            <div
                className='sm:flex md:border-b md:border-gray-400 xl:border-l xl:border-r xl:border-b xl:border-gray-400 xl:mb-16'
            >
                <div
                    className='border-t border-gray-400 sm:border-r'
                    style={{
                        display: 'flex',
                        flex: 1,
                        fontSize: '16px',
                        lineHeight: 1.5,
                        padding: '24px',
                    }}
                >
                    <ul
                        style={{
                            fontWeight: 500,
                            lineHeight: 1.5,
                            listStyleType: 'none',
                            margin: 0,
                            padding: 0,
                            width: '100%',
                        }}
                    >
                        <li style={{ alignItems: 'center', display: 'flex' }}>
                            <h3
                                style={{
                                    fontSize: '20px',
                                    fontWeight: 700,
                                    margin: 0,
                                    padding: '0 8px 0 0',
                                }}
                            >
                                .products
                            </h3>
                            &#123;
                        </li>
                        <ul style={{ listStyleType: 'none', margin: 0, paddingLeft: '24px' }}>
                            <li>
                                <a
                                    href="https://csslayout.io"
                                    rel="noopener noreferrer"
                                    style={{ textDecoration: 'none' }}
                                    target="_blank"
                                    title="CSS Layout - a collection of popular layouts and patterns made with CSS"
                                >
                                    css-layout,
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://formvalidation.io"
                                    rel="noopener noreferrer"
                                    style={{ textDecoration: 'none' }}
                                    target="_blank"
                                    title="FormValidation - the best validation library for JavaScript"
                                >
                                    form-validation,
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://blur.page"
                                    rel="noopener noreferrer"
                                    style={{ textDecoration: 'none' }}
                                    target="_blank"
                                    title="BlurPage - a browser extension to hide sensitive element on page"
                                >
                                    blur-page,
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://react-pdf-viewer.dev"
                                    rel="noopener noreferrer"
                                    style={{ textDecoration: 'none' }}
                                    target="_blank"
                                    title="React PDF Viewer - a PDF viewer made for React"
                                >
                                    react-pdf-viewer,
                                </a>
                            </li>
                        </ul>
                        <li>&#125;</li>
                    </ul>
                </div>
                <div
                    className='border-t border-gray-400'
                    style={{
                        flex: 1,
                        fontSize: '16px',
                        lineHeight: 1.5,
                        padding: '24px',
                    }}
                >
                    <ul
                        style={{
                            fontWeight: 500,
                            lineHeight: 1.5,
                            listStyleType: 'none',
                            margin: '0 0 16px 0',
                            padding: 0,
                            width: '100%',
                        }}
                    >
                        <li style={{ alignItems: 'center', display: 'flex' }}>
                            <h3
                                style={{
                                    fontSize: '20px',
                                    fontWeight: 700,
                                    margin: 0,
                                    padding: '0 8px 0 0',
                                }}
                            >
                                .about
                            </h3>
                            &#123;
                        </li>
                        <ul style={{ listStyleType: 'none', margin: 0, paddingLeft: '24px' }}>
                            <li style={{ alignItems: 'center', display: 'flex' }}>
                                <div>twitter:</div>
                                <a
                                    href="https://twitter.com/nghuuphuoc"
                                    rel="noopener noreferrer"
                                    style={{ marginLeft: 'auto', textDecoration: 'none' }}
                                    target="_blank"
                                >
                                    @nghuuphuoc
                                </a>
                                <div>;</div>
                            </li>
                            <li style={{ alignItems: 'center', display: 'flex' }}>
                                <div>dev.to:</div>
                                <a
                                    href="https://dev.to/phuocng"
                                    rel="noopener noreferrer"
                                    style={{ marginLeft: 'auto', textDecoration: 'none' }}
                                    target="_blank"
                                >
                                    @phuocng
                                </a>
                                <div>;</div>
                            </li>
                            <li style={{ alignItems: 'center', display: 'flex' }}>
                                <div>email:</div>
                                <a
                                    href="mailto: me@phuoc.ng"
                                    rel="noopener noreferrer"
                                    style={{ marginLeft: 'auto', textDecoration: 'none' }}
                                    target="_blank"
                                >
                                    me@phuoc.ng
                                </a>
                                <div>;</div>
                            </li>
                            <li style={{ alignItems: 'center', display: 'flex' }}>
                                <div>github:</div>
                                <a
                                    href="https://github.com/phuoc-ng/csslayout"
                                    rel="noopener noreferrer"
                                    style={{ marginLeft: 'auto', textDecoration: 'none' }}
                                    target="_blank"
                                >
                                    phuoc-ng/csslayout
                                </a>
                                <div>;</div>
                            </li>
                        </ul>
                        <li>&#125;</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Footer;
