---
layout: layouts/post.njk
title: Full background
description: Create a full background element with CSS
keywords: css background size cover, css full background
---

## HTML

```html
<div class="full-background">
    ...
</div>
```

## CSS

```css
.full-background {
    /* Center the content */
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    /* Take full size */
    height: 100vh;
    width: 100%;

    /* Background */
    background: url('/assets/full-background.jpeg') center center / cover no-repeat;
}
```

{% demo %}
{% include "patterns/full-background.njk" %}
{% enddemo %}
