---
layout: layouts/post.njk
title: Search box
description: Create a search box with CSS flexbox
keywords: css flexbox, css search box
---

## HTML

```html
<div class="search-box">
    <!-- Text input -->
    <input type="text" class="search-box__input" />

    <!-- Search icon sticks to the left or right -->
    ...
</div>
```

## CSS

```css
.search-box {
    display: flex;

    /* If you want to place the icon before the text input */
    flex-direction: row-reverse;

    /* Border */
    border: 1px solid #d1d5db;
}

.search-box__input {
    border-color: transparent;
    /* Take available width */
    flex: 1;
}
```

{% demo %}{% include "patterns/search-box.njk" %}{% enddemo %}
