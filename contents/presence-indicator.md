---
layout: layouts/post.njk
title: Presence indicator
description: Create a presence indicator with CSS
keywords: css indicator
---

## HTML

```html
<div class="presence-indicator">
    <!-- Other element such as avatar -->
    ...

    <!-- The presence indicator -->
    <div class="presence-indicator__indicator"></div>
</div>
```

## CSS

```css
.presence-indicator {
    position: relative;
}

.presence-indicator__indicator {
    /* Shown at the bottom right corner */
    bottom: 0;
    position: absolute;
    right: 0;
    transform: translate(50%, 50%);

    /* Rounded border */
    border-radius: 9999px;
    height: 1rem;
    width: 1rem;

    /* Background color */
    background-color: #22c55e;
}
```

{% demo %}
{% include "patterns/presence-indicator.njk" %}
{% enddemo %}
