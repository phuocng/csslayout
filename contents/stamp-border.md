---
layout: layouts/post.njk
title: Stamp border
description: Create stamp border with CSS
keywords: css radial gradient, css stamp border
---

## HTML

```html
<div class="stamp-border">
    <div class="stamp-border__content"></div>
</div>
```

## CSS

```css
.stamp-border {
    /* Background */
    background-color: #d1d5db;
    background-image: radial-gradient(#fff 50%, transparent 50%);
    background-position: -0.25rem -0.25rem;
    background-repeat: repeat;
    background-size: 0.5rem 0.5rem;

    /* Spacing */
    padding: 0.25rem;
}

.stamp-border__content {
    /* Background */
    background-color: #d1d5db;

    height: 100%;
    width: 100%;
}
```

{% demo %}
{% include "covers/stamp-border.njk" %}
{% enddemo %}
