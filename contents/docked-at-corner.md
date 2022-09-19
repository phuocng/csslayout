---
layout: layouts/post.njk
title: Docked at corner
description: Dock an element at corner with CSS
keywords: css docked, css flexbox
---

## HTML

```html
<div class="docked-at-corner">
    <!-- Docked at the top right corner -->
    <div class="docked-at-corner__docker"></div>
</div>
```

## CSS

```css
.docked-at-corner {
    position: relative;
}
.docked-at-corner__docker {
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(50%, -50%);

    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;
}
```

{% demo %}
{% include "patterns/docked-at-corner.njk" %}
{% enddemo %}
