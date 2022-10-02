---
layout: layouts/post.njk
title: Status light
description: Create a status light with CSS flexbox
keywords: css flexbox, css status light
---

## HTML

```html
<div class="status-light">
    <!-- Status light -->
    <div class="status-light__status"></div>

    <!-- Content -->
    <div class="status-light__content">...</div>
</div>
```

## CSS

```css
.status-light {
    /* Center the content */
    align-items: center;
    display: flex;
}

.status-light__status {
    /* Background color */
    background-color: #16a34a;

    /* Rounded border */
    border-radius: 9999px;

    /* Size */
    height: 0.5rem;
    width: 0.5rem;

    /* Spacing */
    margin-right: 0.5rem;
}

.status-light__content {
    /* Take available width */
    flex: 1;
}
```

{% demo %}
{% include "covers/status-light.njk" %}
{% enddemo %}
