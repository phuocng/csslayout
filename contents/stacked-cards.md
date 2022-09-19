---
layout: layouts/post.njk
title: Stacked cards
description: Create stacked cards with CSS
keywords: css card, css stacked cards, css transform rotate
---

## HTML

```html
<div class="stacked-cards">
    <!-- Repeat if you want to have more cards -->
    <div class="stacked-cards__card"></div>

    <!-- Main card's content -->
    ...
</div>
```

## CSS

```css
.stacked-cards {
    /* Used to position the stacked cards */
    position: relative;

    border: 1px solid #d1d5db;
    border-radius: 0.25rem;
}

.stacked-cards__card {
    /* Absolute position */
    left: 0px;
    position: absolute;
    top: 0px;

    /* Take full size */
    height: 100%;
    width: 100%;

    /* Displayed under the container */
    z-index: 1;

    /* Background and border colors */
    background-color: rgb(255, 255, 255);
    border: 1px solid #d1d5db;

    /* Rotate it. Change the number of degrees for the following cards */
    transform: rotate(5deg);
}
```

{% demo %}
{% include "patterns/stacked-cards.njk" %}
{% enddemo %}
