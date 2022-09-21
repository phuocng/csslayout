---
layout: layouts/post.njk
title: Avatar
description: Create an avatar component with CSS flexbox
keywords: css avatar, css flexbox
---

## HTML

```html
<div class="avatar">
    <!-- Avatar image -->
    <img class="avatar__image" src="..." />
</div>
```

## CSS

```css
.avatar {
    /* Rounded border */
    border-radius: 50%;

    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Size */
    height: 4rem;
    width: 4rem;
}

.avatar__image {
    /* Size */
    height: 50%;
    width: 50%;
}
```

{% demo %}
{% include "covers/avatar.njk" %}
{% enddemo %}
