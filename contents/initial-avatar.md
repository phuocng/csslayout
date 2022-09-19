---
layout: layouts/post.njk
title: Initial avatar
description: Create an initial avatar with CSS
keywords: css avatar
---

## HTML

```html
<div class="initial-avatar">
    ...
</div>
```

## CSS

```css
.initial-avatar {
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Colors */
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;

    /* Rounded border */
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
}
```

{% demo %}
{% include "patterns/initial-avatar.njk" %}
{% enddemo %}