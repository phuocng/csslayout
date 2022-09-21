---
layout: layouts/post.njk
title: Teardrop
description: Create a teardrop with CSS
keywords: css border radius, css teardrop, css water drop shape, css water droplet
---

## HTML

```html
<div class="teardrop">
    <!-- Display the content vertically -->
    <div class="teardrop__content">
        ...
    </div>
</div>
```

## CSS

```css
.teardrop {
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Border */
    border: 2px solid #d1d5db;
    border-radius: 0px 50% 50% 50%;

    /* Angle at the top */
    transform: rotate(45deg);

    /* Size */
    height: 4rem;
    width: 4rem;
}

.teardrop__content {
    transform: rotate(-45deg);
}
```

{% demo %}
{% include "patterns/teardrop.njk" %}
{% enddemo %}
