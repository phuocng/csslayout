---
layout: layouts/post.njk
title: Triangle buttons
description: Create triangle buttons with CSS
keywords: css triangle buttons
---

## HTML

```html
<!-- Up triangle button -->
<button class="triangle-buttons">
    <!-- Triangle -->
    <div class="triangle-buttons__triangle triangle-buttons__triangle--t"></div>

    <!-- Content -->
    ...
</button>

<!-- Right triangle button -->
<button class="triangle-buttons">
    <!-- Content -->
    ...

    <!-- Triangle -->
    <div class="triangle-buttons__triangle triangle-buttons__triangle--r"></div>
</button>

<!-- Down triangle button -->
<button class="triangle-buttons">
    <!-- Triangle -->
    <div class="triangle-buttons__triangle triangle-buttons__triangle--b"></div>

    <!-- Content -->
    ...
</button>

<!-- Left triangle button -->
<button class="triangle-buttons">
    <!-- Triangle -->
    <div class="triangle-buttons__triangle triangle-buttons__triangle--l"></div>

    <!-- Content -->
    ...
</button>
```

## CSS

```css
.triangle-buttons {
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Spacing */
    padding: 0.5rem;
}

.triangle-buttons__triangle {
    border-style: solid;

    /* Size */
    height: 0px;
    width: 0px;
}

.triangle-buttons__triangle--t {
    border-color: transparent transparent rgba(0, 0, 0, 0.3);
    border-width: 0 0.5rem 0.5rem;
}

.triangle-buttons__triangle--r {
    border-color: transparent transparent transparent rgba(0, 0, 0, 0.3);
    border-width: 0.5rem 0 0.5rem 0.5rem;
}

.triangle-buttons__triangle--b {
    border-color: rgba(0, 0, 0, 0.3) transparent transparent;
    border-width: 0.5rem 0.5rem 0;
}

.triangle-buttons__triangle--l {
    border-color: transparent rgba(0, 0, 0, 0.3) transparent transparent;
    border-width: 0.5rem 0.5rem 0.5rem 0;
}
```

{% demo %}
{% include "patterns/triangle-buttons.njk" %}
{% enddemo %}
