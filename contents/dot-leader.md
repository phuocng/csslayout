---
layout: layouts/post.njk
title: Dot leader
description: Create dot leaders with CSS flexbox
keywords: css dot leader, css flexbox
---

## HTML

```html
<div class="dot-leader">
    <!-- Left side -->
    <div>...</div>

    <!-- Dots -->
    <div class="dot-leader__dots"></div>

    <!-- Right side -->
    <div>...</div>
</div>
```

## CSS

```css
.dot-leader {
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;
}

.dot-leader__dots {
    /* Bottom border */
    border-bottom: 1px dotted #d1d5db;

    /* Take remaining width */
    flex: 1;

    /* Spacing */
    margin: 0 0.25rem;
}
```

{% demo %}
{% include "patterns/dot-leader.njk" %}
{% enddemo %}
