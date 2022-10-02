---
layout: layouts/post.njk
title: Drawer
description: Create a drawer navigation with CSS
keywords: css drawer, css off-canvas
---

This pattern is also known as off-canvas.

## HTML

```html
<div class="drawer">
    <!-- Backdrop -->
    <div class="drawer__overlay"></div>

    <!-- Sidebar -->
    <div class="drawer__sidebar">...</div>
</div>
```

## CSS

```css
.drawer {
    /* Take full size */
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;

    z-index: 9999;
}

.drawer__overlay {
    /* Take full size */
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;

    /* User still can see the content of main page */
    background-color: rgba(0, 0, 0, 0.5);

    z-index: -1;
}

.drawer__sidebar {
    /* Take full height */
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 200px;

    /* Background */
    background-color: #fff;
}
```

{% demo %}{% include "covers/drawer.njk" %}{% enddemo %}
