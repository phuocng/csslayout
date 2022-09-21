---
layout: layouts/post.njk
title: Slider
description: Create a slider with CSS flexbox
keywords: css flexbox, css slider
---

## HTML

```html
<div class="slider">
    <!-- Left side -->
    <!-- Width based on the current value -->
    <div class="slider__left" style="width: 20%"></div>

    <!-- Circle -->
    <div class="slider__circle"></div>

    <!-- Right side -->
    <div class="slider__right"></div>
</div>
```

## CSS

```css
.slider {
    /* Content is centered horizontally */
    align-items: center;
    display: flex;

    /* Size */
    height: 2rem;
}

.slider__left {
    height: 2px;

    /* Colors */
    background-color: #d1d5db;
}

.slider__circle {
    /* Size */
    height: 2rem;
    width: 2rem;

    /* Rounded border */
    border-radius: 9999px;

    /* Colors */
    background-color: #3b82f6;
}

.slider__right {
    /* Take the remaining width */
    flex: 1;
    height: 2px;

    /* Colors */
    background-color: #d1d5db;
}
```

{% demo %}{% include "covers/slider.njk" %}{% enddemo %}
