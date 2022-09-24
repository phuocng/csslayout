---
layout: layouts/post.njk
title: Color swatch
description: Create a color swatch with CSS flexbox
keywords: css color swatch, css flexbox
---

## HTML

```html
<div class="swatch">
    <div class="swatch__item" style="background-color: ..."></div>

    <!-- Repeat other items -->
    ...
</div>
```

## CSS

```css
.swatch {
    /* Wrap the items */
    display: flex;
    flex-wrap: wrap;
}
.swatch__item {
    /* Rounded border */
    border-radius: 9999px;
    height: 1.5rem;
    width: 1.5rem;

    /* Space between items */
    margin: 0.5rem;
}
```

{% demo %}
{% include "covers/color-swatch.njk" %}
{% enddemo %}
