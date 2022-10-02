---
layout: layouts/post.njk
title: Statistic
description: Create a statistic component with CSS flexbox
keywords: css flexbox, css statistic
---

## HTML

```html
<div class="statistic">
    <!-- Value -->
    <div class="statistic__value">...</div>

    <!-- Label -->
    <div class="statistic__label">...</div>
</div>
```

## CSS

```css
.statistic {
    /* Center the content */
    align-items: center;
    display: inline-flex;
    flex-direction: column;
}

.statistic__value {
    /* Big font size */
    font-size: 4rem;
    font-weight: 500;
}

.statistic__label {
    /* Smaller font size */
    font-size: 1rem;
    font-weight: 700;

    /* Uppercase the label */
    text-transform: uppercase;
}
```

{% demo %}
{% include "covers/statistic.njk" %}
{% enddemo %}
