---
layout: layouts/post.njk
title: Breadcrumb
description: Create a breadcrumb with CSS flexbox
keywords: css breadcrumb, css flexbox
---

## HTML

```html
<div class="breadcrumb">
    <!-- Breadcrumb item -->
    <div class="breadcrumb__item">...</div>

    <!-- Repeat other items -->
    ...
</div>
```

## CSS

```css
.breadcrumb {
    /* Content is centered vertically */
    align-items: center;
    display: flex;
}

.breadcrumb__item {
    margin: 0 0.5rem;

    /* Used to position the separator between items */
    position: relative;
}

.breadcrumb__item:not(:last-child)::after {
    /* Absolute position */
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(0.5rem, 0px);

    content: '/';
}
```

{% demo %}{% include "covers/breadcrumb.njk" %}{% enddemo %}
