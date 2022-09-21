---
layout: layouts/post.njk
title: Badge
description: Create a badge component with CSS flexbox
keywords: css badge, css flexbox
---

## HTML

```html
<div class="badge">
    ...
</div>
```

## CSS

```css
.badge {
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Colors */
    background-color: #d1d5db;
    color: #fff;

    /* Rounded border */
    border-radius: 9999px;
    height: 3rem;
    width: 3rem;
}
```

{% demo %}{% include "patterns/badge.njk" %}{% enddemo %}
