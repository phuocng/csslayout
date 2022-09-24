---
layout: layouts/post.njk
title: Card layout
description: Create a card layout with CSS flexbox
keywords: css card layout, css flexbox, css layout
---

## HTML

```html
<div class="card-layout">
    <!-- A card with given width -->
    <div class="card-layout__item">
        ...
    </div>

    <!-- Repeat other cards -->
    ...
</div>
```

## CSS

```css
.card-layout {
    display: flex;

    /* Put a card in the next row when previous cards take all width */
    flex-wrap: wrap;

    margin-left: -0.25rem;
    margin-right: -0.25rem;
}

.card-layout__item {
    /* There will be 3 cards per row */
    flex-basis: 33.33333%;

    padding-left: 0.25rem;
    padding-right: 0.25rem;
}
```

{% demo %}{% include "covers/card-layout.njk" %}{% enddemo %}
