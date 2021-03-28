/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header: React.FC<{}> = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__nav">
                    <Link to="/">
                        <img src="/assets/logo.svg" />
                    </Link>
                    <Link to="/patterns">Patterns</Link>
                    <a href="https://github.com/phuoc-ng/csslayout">GitHub</a>
                </div>
            </div>
        </header>
    );
};

export default Header;
