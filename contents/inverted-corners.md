---
layout: layouts/post.njk
title: Inverted corners
description: Create inverted corners with CSS
keywords: css border radius, css inverted border radius, css inverted corners
---

## HTML

```html
<div class="inverted-corners">
    ...
</div>
```

## CSS

```css
:root {
    --inverted-corners-background: #d1d5db;
    --inverted-corners-size: 2rem;
}

.inverted-corners {
    background-color: var(--inverted-corners-background);

    /* Used to position the corner */
    position: relative;
}

.inverted-corners::before {
    content: '';

    /* Absolute position */
    bottom: calc(-2 * var(--inverted-corners-size));
    left: 0;
    position: absolute;

    /* Size */
    height: calc(2 * var(--inverted-corners-size));
    width: var(--inverted-corners-size);

    /* Border */
    background-color: transparent;
    border-top-left-radius: var(--inverted-corners-size);
    box-shadow: var(--inverted-corners-background) 0px calc(-1 * var(--inverted-corners-size)) 0px 0px;
}
```

{% demo %}
{% include "patterns/inverted-corners.njk" %}
{% enddemo %}
