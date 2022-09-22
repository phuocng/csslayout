---
layout: layouts/post.njk
title: Split navigation
description: Create a split navigation with CSS flexbox
keywords: css flexbox, css menu, css navigation, css split navigation
---

## HTML

```html
<ul class="split-navigation">
    <!-- Navigation item -->
    <li class="split-navigation__item">
        <a href="">...</a>
    </li>

    <!-- Navigation item that sticks to the right -->
    <li class="split-navigation__item split-navigation__item--right">
        <a href="">...</a>
    </li>
</ul>
```

## CSS

```css
.split-navigation {
    /* Content is centered horizontally */
    align-items: center;
    display: flex;

    /* Reset styles */
    list-style-type: none;
    margin: 0;
    padding: 0 0 0.5rem 0;
}

.split-navigation__item {
    margin-right: 0.25rem;

    /* Demo */
    width: 1.25rem;
}

.split-navigation__item--right {
    /* Sticks to the right */
    margin-left: auto;
    margin-right: 0;
}
```

{% demo %}{% include "covers/split-navigation.njk" %}{% enddemo %}
