import React, { useEffect } from 'react';

const Layout = ({ children }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="center">
                {children}
            </div>
            <div className="w-100 bt b--black-30">
                <div className="mw8 center pv4 flex justify-between">
                    <div>
                        <div className="f4 fw6 mb2">Other cool things</div>
                        <ul className="flex items-center list ma0 pa0 lh-copy fw5">
                            <li className="pr2">
                                <a href="https://formvalidation.io" className="link" target="_blank" title="FormValidation ~ best validation library for JavaScript">
                                    FormValidation
                                </a>
                            </li>
                            <li className="pr2">∙</li>
                            <li className="pr2">
                                <a className="link" href="https://blur.page" title="BlurPage ~ a browser extension to hide sensitive element on page" target="_blank">
                                    BlurPage
                                </a>
                            </li>
                            <li className="pr2">∙</li>
                            <li className="pr2">
                                <a className="link" href="https://react-pdf-viewer.dev" title="React PDF Viewer ~ a PDF viewer made for React" target="_blank">
                                    React PDF Viewer
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-column items-end">
                        <div className="pb2 lh-copy">© 2019 Nguyen Huu Phuoc and contributors</div>
                        <div className="flex items-center">
                            <a href="https://twitter.com/nghuuphuoc" className="dib dim link black-70 ba b-black-70 br-pill w2 h2 flex items-center justify-center mr2">
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-60 h-60"
                                    style={{
                                        fill: "none",
                                        stroke: "#000",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 1,
                                    }}
                                >
                                    <path d={`M23,6.628l-2-0.5l1-2l-2.464,0.7c-1.809-1.688-4.644-1.589-6.332,0.22c-0.78,0.836-1.21,1.938-1.204,3.08v1 c-3.539,0.73-6.634-1.2-9.5-4.5c-0.5,2.667,0,4.667,1.5,6l-3-0.5c0.405,2.069,1.362,3.7,4,4l-2.5,1c1,2,2.566,2.31,5,2.5 c-1.893,1.353-4.174,2.054-6.5,2c12.755,5.669,20-2.664,20-10V8.3L23,6.628z`} />
                                </svg>
                            </a>
                            <a href="mailto: me@phuoc.ng" className="dib dim link black-70 ba b-black-70 br-pill w2 h2 flex items-center justify-center mr2">
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-60 h-60"
                                    style={{
                                        fill: "none",
                                        stroke: "#000",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 1,
                                    }}
                                >
                                    <path d={`M2.5,3.954h19c1.105,0,2,0.895,2,2v12c0,1.105-0.895,2-2,2h-19c-1.105,0-2-0.895-2-2v-12 C0.5,4.849,1.395,3.954,2.5,3.954z M22.911,4.536L12,13.454L1.089,4.536`} />
                                </svg>
                            </a>
                            <a href="https://github.com/phuoc-ng/csslayout" className="dib dim link black-70 ba b-black-70 br-pill w2 h2 flex items-center justify-center">
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-60 h-60"
                                    style={{
                                        fill: "none",
                                        stroke: "#000",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 1,
                                    }}
                                >
                                    <path d={`M12,0.5C5.649,0.494,0.495,5.638,0.489,11.989c-0.005,4.959,3.17,9.362,7.876,10.925 c0.574,0.1,0.756-0.237,0.756-0.541c0-0.275,0.006-1.037,0-2c-3.2,0.694-3.861-1.515-3.861-1.515 c-0.211-0.695-0.664-1.292-1.276-1.682c-1.044-0.714,0.078-0.7,0.078-0.7c0.739,0.101,1.389,0.538,1.762,1.184 c0.65,1.185,2.139,1.619,3.324,0.968c0.007-0.004,0.015-0.008,0.022-0.012c0.053-0.581,0.312-1.125,0.73-1.532 c-2.553-0.292-5.238-1.278-5.238-5.686C4.646,10.255,5.07,9.15,5.847,8.312C5.495,7.32,5.535,6.232,5.959,5.269 c0,0,0.967-0.309,3.162,1.18c1.885-0.517,3.875-0.517,5.76,0c2.2-1.488,3.159-1.18,3.159-1.18c0.424,0.963,0.465,2.051,0.114,3.043 c0.777,0.839,1.201,1.945,1.183,3.088c0,4.42-2.689,5.391-5.251,5.674c0.557,0.559,0.844,1.333,0.787,2.12v3.184 c0,0.307,0.186,0.647,0.77,0.536c6.028-2.002,9.291-8.51,7.29-14.538C21.369,3.667,16.962,0.492,12,0.5z`} />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;
