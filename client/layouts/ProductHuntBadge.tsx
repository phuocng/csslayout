import React from 'react';

const ProductHuntBadge: React.FC<{}> = () => {
    return (
        <a
            href="https://www.producthunt.com/posts/css-layout?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-css-layout"
            target="_blank"
        >
            <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=176424&theme=light"
                alt="CSS Layout - Most popular layouts and patterns that can be built with CSS | Product Hunt Embed"
                style={{
                    height: '54px',
                    width: '250px',
                }}
            />
        </a>
    );
};

export default ProductHuntBadge;
