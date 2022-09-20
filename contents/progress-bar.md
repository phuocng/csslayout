---
layout: layouts/post.njk
title: Progress bar
description: Create a progress bar with CSS flexbox
keywords: css flexbox, css progress bar
---

## HTML

```html
<div class="container">
    <!-- Width based on the number of percentages -->
    <div class="container__progress" style="width: 40%;">
        <!-- The number of percentages -->
        40%
    </div>
</div>
```

## CSS

```css
.progress-bar {
    /* Colors */
    background-color: #d1d5db;

    /* Rounded border */
    border-radius: 9999px;
    padding: 0.25rem;
}

.progress-bar__progress {
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Colors */
    background-color: #3b82f6;
    color: #fff;

    /* Rounded border */
    border-radius: 9999px;
}
```

{% demo %}
{% include "patterns/progress-bar.njk" %}
{% enddemo %}
