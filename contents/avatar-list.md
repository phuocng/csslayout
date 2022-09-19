---
layout: layouts/post.njk
title: Avatar list
description: Create an avatar list with CSS flexbox
keywords: css avatar, css flexbox
---

## HTML

```html
<div class="avatars">
    <!-- Avatar item -->
    <div class="avatars__item">
        <div class="avatars__image">
            <!-- Image -->
            ...
        </div>
    </div>

    <!-- Repeat other avatars -->
    ...
</div>
```

## CSS

```css
.avatars {
    display: flex;
}

.avatars__item {
    /* Nagative margin make avatar overlap to previous one */
    margin-left: -0.25rem;
}

.avatars__image {
    /* Add a white curve between avatars */
    box-shadow: 0 0 0 0.25rem #fff;

    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Rounded border */
    border-radius: 9999px;
}
```

{% demo %}
{% include "patterns/avatar-list.njk" %}
{% enddemo %}
