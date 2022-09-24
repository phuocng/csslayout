---
layout: layouts/post.njk
title: Corner ribbon
description: Create a corner ribbon with CSS flexbox
keywords: css flexbox, css ribbon
---

## HTML

```html
<div class="corner-ribbon">
    <!-- The container -->
    <div class="corner-ribbon__inner">
        <!-- The ribbon -->
        <div class="corner-ribbon__ribbon">
        </div>
    </div>
</div>
```

## CSS

```css
.corner-ribbon {
    position: relative;
}

.corner-ribbon__inner {
    /* Displayed at the top left corner */
    left: 0px;
    position: absolute;
    top: 0px;

    /* Size */
    height: 4rem;
    width: 4rem;

    /* Hide the part of its children which is displayed outside */
    overflow: hidden;
}

.corner-ribbon__ribbon {
    /* Position */
    left: 1rem;
    position: absolute;
    top: 1rem;

    /* Size */
    height: 1.5rem;
    width: 5.656rem;

    /* Displayed diagonally */
    transform: translate(-38px, -8px) rotate(-45deg);

    /* Background color */
    background-color: #d1d5db;

    /* Centerize the text content */
    text-align: center;
}
```

{% demo %}
{% include "covers/corner-ribbon.njk" %}
{% enddemo %}
