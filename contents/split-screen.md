---
layout: layouts/post.njk
title: Split screen
description: Create a split screen with CSS flexbox
keywords: css flexbox, css layout, css split screen
---

## HTML

```html
<div class="split-screen">
    <!-- Left content -->
    <div class="split-screen__half">...</div>

    <!-- Right content -->
    <div class="split-screen__half">...</div>
</div>
```

## CSS

```css
.split-screen {
    display: flex;
}

.split-screen__half {
    flex: 1;
}
```

{% demo %}{% include "covers/split-screen.njk" %}{% enddemo %}
