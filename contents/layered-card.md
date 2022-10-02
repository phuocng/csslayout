---
layout: layouts/post.njk
title: Layered card
description: Create a layered card with CSS
keywords: css layered card
---

## HTML

```html
<div class="layered-card">
    <div class="layered-card__content"></div>
</div>
```

## CSS

```css
.layered-card {
    position: relative;

    /* Demo */
    height: 6rem;
    width: 6rem;
}

.layered-card::before {
    background: #d1d5db;
    content: '';

    /* Position */
    top: 0;
    left: 0;
    position: absolute;
    transform: translate(1rem, 1rem);

    /* Size */
    height: 100%;
    width: 100%;

    /* Display under the main content */
    z-index: 0;
}

.layered-card__content {
    /* Position */
    left: 0;
    position: absolute;
    top: 0;

    /* Size */
    height: 100%;
    width: 100%;

    z-index: 1;

    background: #fff;
}
```

{% demo %}
{% include "covers/layered-card.njk" %}
{% enddemo %}
