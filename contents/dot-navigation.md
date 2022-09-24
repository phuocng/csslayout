---
layout: layouts/post.njk
title: Dot navigation
description: Create dot navigation with CSS flexbox
keywords: css dot navigation, css flexbox
---

## HTML

```html
<div class="dot-navigation">
    <div class="dot-navigation__item"></div>

    <!-- Repeat other dots -->
    ...
</div>
```

## CSS

```css
.dot-navigation {
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Reset styles */
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.dot-navigation__item {
    /* Rounded border */
    border-radius: 9999px;
    height: 0.75rem;
    width: 0.75rem;

    /* Inactive dot */
    background-color: transparent;
    border: 1px solid #d1d5db;

    /* OPTIONAL: Spacing between dots */
    margin: 0 0.25rem;
}

/* Active dot */
.dot-navigation__item--active {
    background-color: #d1d5db;
}
```

{% demo %}{% include "covers/dot-navigation.njk" %}{% enddemo %}
