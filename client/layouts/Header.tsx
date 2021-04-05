/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const STARS_KEY = 'stars';

const Header: React.FC<{}> = () => {
    const stars = window.localStorage.getItem(STARS_KEY) || '';
    const [totalStars, setTotalStars] = React.useState(stars);

    React.useEffect(() => {
        if (window.location.pathname === '/' || stars === '') {
            fetch('https://api.github.com/repos/phuoc-ng/csslayout')
                .then(res => res.json())
                .then(data => setTotalStars(data.stargazers_count))
                .catch(console.log);
        }
    }, []);

    React.useEffect(() => window.localStorage.setItem(STARS_KEY, totalStars), [totalStars]);

    return (
        <header className="header">
            <div className="container">
                <div className="header__nav">
                    <Link to="/">
                        <img src="/assets/logo.svg" />
                    </Link>
                    <Link to="/patterns">Patterns</Link>
                    <a href="https://github.com/phuoc-ng/csslayout">{totalStars}★</a>
                </div>
            </div>
        </header>
    );
};

export default Header;
