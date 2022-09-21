---
layout: layouts/post.njk
title: Concave corners
description: Create concave corners with CSS
keywords: css border radius, css concave border radius, css concave corners
---

## HTML

```html
<div class="concave-corners">
    <!-- The top-left corner -->
    <div class="concave-corners__corner concave-corners__corner--tl"></div>

    <!-- The top-right corner -->
    <div class="concave-corners__corner concave-corners__corner--tr"></div>

    <!-- The bottom-left corner -->
    <div class="concave-corners__corner concave-corners__corner--bl"></div>

    <!-- The bottom-right corner -->
    <div class="concave-corners__corner concave-corners__corner--br"></div>

    <!-- Content -->
    ...
</div>
```

## CSS

```css
.concave-corners {
    background-color: #d1d5db;

    /* Used to position the corners */
    position: relative;
}
.concave-corners__corner {
    /* Absolute position */
    position: absolute;

    /* Size */
    height: 1rem;
    width: 1rem;

    background: #fff;
}

.concave-corners__corner--tl {
    /* Position */
    left: 0;
    top: 0;

    /* Border radius */
    border-radius: 0 0 1rem 0;
}

.concave-corners__corner--tr {
    /* Position */
    right: 0;
    top: 0;

    /* Border radius */
    border-radius: 0 0 0 1rem;
}

.concave-corners__corner--bl {
    /* Position */
    bottom: 0;
    left: 0;

    /* Border radius */
    border-radius: 0 1rem 0 0;
}

.concave-corners__corner--br {
    /* Position */
    bottom: 0;
    right: 0;

    /* Border radius */
    border-radius: 1rem 0 0 0;
}
```

{% demo %}
{% include "patterns/concave-corners.njk" %}
{% enddemo %}
