---
layout: layouts/post.njk
title: Feature list
description: Create a feature list with CSS flexbox
keywords: css feature list, css flexbox
---

## HTML

```html
<!-- Feature item -->
<div class="feature-list">
    <!-- Image -->
    <div class="feature-list__image">...</div>

    <!-- Right side -->
    <div class="feature-list__desc">...</div>
</div>

<!-- Repeated items -->
...
```

## CSS

```css
.feature-list {
    display: flex;

    /* OPTIONAL: Spacing between items */
    margin: 0.5rem 0;
}

/* Reverse the order of image and content */
.feature-list--reverse {
    flex-direction: row-reverse;
}

.feature-list__image {
    width: 2rem;
}

.feature-list__desc {
    /* Take the remaining width */
    flex: 1;
}
```

{% demo %}
{% include "covers/feature-list.njk" %}
{% enddemo %}
