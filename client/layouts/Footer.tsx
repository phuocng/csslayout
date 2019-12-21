import React from 'react';

import SubscribeForm from './SubscribeForm';

const Footer: React.FC<{}> = () => {
    return (
        <>
            <div
                style={{
                    borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
                    borderRight: '1px solid rgba(0, 0, 0, 0.2)',
                    padding: '32px',
                    textAlign: 'center',
                }}
            >
                <div style={{ lineHeight: 1.5, marginBottom: '12px' }}>
                    Subscribe to the newsletter for the latest layouts or patterns. No spam. Ever!
                </div>
                <SubscribeForm />
            </div>
            <div
                style={{
                    border: '1px solid rgba(0, 0, 0, 0.2)',
                    display: 'flex',
                }}
            >
                <div
                    style={{
                        borderRight: '1px solid rgba(0, 0, 0, 0.2)',
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
                                .my-products
                            </h3>
                            &#123;
                        </li>
                        <ul style={{ listStyleType: 'none', margin: 0, paddingLeft: '24px' }}>
                            <li style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
                                <div>css-layout,</div>
                                <div style={{ color: 'rgba(0, 0, 0, 0.3)' }}>
                                    /&#42; You are here &#42;/
                                </div>
                            </li>
                            <li style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
                                <a
                                    href="https://formvalidation.io"
                                    style={{ textDecoration: 'none' }}
                                    target="_blank"
                                    title="FormValidation ~ best validation library for JavaScript"
                                >
                                    form-validation,
                                </a>
                                <div style={{ color: 'rgba(0, 0, 0, 0.3)' }}>
                                    /&#42; A JS validation library &#42;/
                                </div>
                            </li>
                            <li style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
                                <a
                                    href="https://blur.page"
                                    style={{ textDecoration: 'none' }}
                                    target="_blank"
                                    title="BlurPage ~ a browser extension to hide sensitive element on page"
                                >
                                    blur-page,
                                </a>
                                <div style={{ color: 'rgba(0, 0, 0, 0.3)' }}>
                                    /&#42; Chrome and Firefox extensions &#42;/
                                </div>
                            </li>
                            <li style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
                                <a
                                    href="https://react-pdf-viewer.dev"
                                    style={{ textDecoration: 'none' }}
                                    target="_blank"
                                    title="React PDF Viewer ~ a PDF viewer made for React"
                                >
                                    react-pdf-viewer,
                                </a>
                                <div style={{ color: 'rgba(0, 0, 0, 0.3)' }}>
                                    /&#42; A React component &#42;/
                                </div>
                            </li>
                        </ul>
                        <li>&#125;</li>
                    </ul>
                </div>
                <div
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
                                    style={{ marginLeft: 'auto', textDecoration: 'none' }}
                                    target="_blank"
                                >
                                    github.com/phuoc-ng/csslayout
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
