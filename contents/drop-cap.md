---
layout: layouts/post.njk
title: Drop cap
description: Create a drop cap with CSS
keywords: css drop cap, css :first-letter
---

## HTML

```html
<div class="drop-cap">
    ...
</div>
```

## CSS

```css
.drop-cap:first-letter {
    /* Display at the left */
    float: left;
    line-height: 1;

    /* Spacing */
    margin: 0 0.5rem 0 0;
    padding: 0 0.5rem;

    /* Optional */
    border: 2px solid #d1d5db;
    font-size: 2rem;
    font-weight: 700;
}
```

{% demo %}
{% include "patterns/drop-cap.njk" %}
{% enddemo %}
