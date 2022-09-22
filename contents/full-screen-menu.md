---
layout: layouts/post.njk
title: Full screen menu
description: Create a full screen menu with CSS flexbox
keywords: css fixed, css flexbox, css menu
---

## HTML

```html
<div class="full-screen-menu">
    <!-- The navigation menu -->
    <ul>
        ...
    </ul>

    <!-- The close button -->
    <button type="button" class="full-screen-menu__close"></button>
</div>
```

## CSS

```css
.full-screen-menu {
    /* Full screen overlay */
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;

    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;
}

.full-screen-menu__close {
    /* Shown at top left corner */
    left: 1rem;
    position: absolute;    
    top: 1rem;
}
```

You can use the [close button](/close-button/) to create a button for closing the menu.

{% demo %}{% include "covers/full-screen-menu.njk" %}{% enddemo %}
