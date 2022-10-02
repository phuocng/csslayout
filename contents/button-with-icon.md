---
layout: layouts/post.njk
title: Button with icon
description: Create an icon button with CSS flexbox
keywords: css flexbox, css icon button
---

## HTML

```html
<button class="button-with-icon">
    <!-- Icon -->
    ...

    <!-- Label -->
    <div class="button-with-icon__label">...</div>
</button>
```

## CSS

```css
.button-with-icon {
    /* Center the content */
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.button-with-icon__label {
    margin-left: 0.5rem;
}
```

{% demo %}
{% include "covers/button-with-icon.njk" %}
{% enddemo %}
