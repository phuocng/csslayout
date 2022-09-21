---
layout: layouts/post.njk
title: Arrow buttons
description: Create arrow buttons with CSS
keywords: css arrow buttons
---

## HTML

```html
<!-- Up arrow button -->
<button class="arrow-buttons">
    <!-- Arrow -->
    <div class="arrow-button arrow-button--t"></div>

    <!-- Content -->
    ...
</button>

<!-- Right arrow button -->
<button class="arrow-buttons">
    <!-- Content -->
    ...

    <!-- Arrow -->
    <div class="arrow-button arrow-button--r"></div>
</button>

<!-- Down arrow button -->
<button class="arrow-buttons">
    <!-- Arrow -->
    <div class="arrow-button arrow-button--b"></div>

    <!-- Content -->
    ...
</button>

<!-- Left arrow button -->
<button class="arrow-buttons">
    <!-- Arrow -->
    <div class="arrow-button arrow-button--l"></div>

    <!-- Content -->
    ...
</button>
```

## CSS

```css
.arrow-button {
    /* Transparent background */
    background-color: transparent;

    /* Size */
    height: 12px;
    width: 12px;
}

.arrow-button--t {
    /* Edges */
    border-left: 1px solid #d1d5db;
    border-top: 1px solid #d1d5db;
    transform: translateY(25%) rotate(45deg);
}

.arrow-button--r {
    /* Edges */
    border-right: 1px solid #d1d5db;
    border-top: 1px solid #d1d5db;
    transform: translateX(-25%) rotate(45deg);
}

.arrow-button--b {
    /* Edges */
    border-bottom: 1px solid #d1d5db;
    border-right: 1px solid #d1d5db;
    transform: translateY(-25%) rotate(45deg);
}

.arrow-button--l {
    /* Edges */
    border-bottom: 1px solid #d1d5db;
    border-left: 1px solid #d1d5db;
    transform: translateX(25%) rotate(45deg);
}
```

{% demo %}
{% include "covers/arrow-buttons.njk" %}
{% enddemo %}
