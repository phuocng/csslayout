import Link from 'next/link';
import * as React from 'react';
import { Logo } from '@1milligram/design';
import { PrefixContext } from '../context/prefixContext';

export const HeaderBlock = () => {
    const { prefix, container, setPrefix, setContainer } = React.useContext(PrefixContext);

    const [totalStars, setTotalStars] = React.useState(0);

    React.useEffect(() => {
        fetch('https://api.github.com/repos/1milligram/csslayout')
            .then((res) => res.json())
            .then((data) => setTotalStars(data.stargazers_count))
            .catch(console.log);
    }, []);

    const HeaderLogo = React.forwardRef<HTMLAnchorElement, React.LinkHTMLAttributes<HTMLAnchorElement>>(
        (props, ref) => (
            <a href={props.href} onClick={props.onClick} ref={ref}>
                <Logo brand="CSS Layout" />
            </a>
        )
    );

    return (
        <header className="block-header">
            <div className="block-container">
                <div className="block-header__inner">
                    <Link href="/" passHref>
                        <HeaderLogo />
                    </Link>
                    
                    <label className="block-header__label">
                        prefix:
                        <input
                            className="block-header__input"
                            value={prefix}
                            onChange={(e) => setPrefix(e.target.value)}
                        ></input>
                    </label>
                    <label className="block-header__label">
                        container:
                        <input
                            className="block-header__input"
                            value={container}
                            onChange={(e) => setContainer(e.target.value)}
                        ></input>
                    </label>
                    <Link href="https://github.com/1milligram/csslayout">
                        <a className="block-header__cta">GitHub {totalStars}★</a>
                    </Link>
                </div>
            </div>
        </header>
    );
};
