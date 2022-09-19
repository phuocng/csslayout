---
layout: layouts/post.njk
title: Centering
description: Center an element with CSS flexbox
keywords: css centering, css flexbox
---

## HTML

```html
<div class="centering">
    ...
</div>
```

## CSS

```css
.centering {
    align-items: center;
    display: flex;
    justify-content: center;
}
```

{% demo %}
{% include "patterns/centering.njk" %}
{% enddemo %}
