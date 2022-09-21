---
layout: layouts/post.njk
title: Drop area
description: Create a dropping area with CSS flexbox
keywords: css dropping area, css flexbox
---

## HTML

```html
<div class="drop-area">
    ...
</div>
```

## CSS

```css
.drop-area {
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Border */
    border: 0.25rem dashed #d1d5db;
    border-radius: 0.25rem;
}
```

{% demo %}
{% include "covers/drop-area.njk" %}
{% enddemo %}
