---
layout: layouts/post.njk
title: Menu
description: Create a menu with CSS flexbox
keywords: css flexbox, css menu
---

## HTML

```html
<div class="menu">
    <!-- Normal menu item -->
    <div class="menu__item">
        ...
    </div>

    <!-- With hot key -->
    <div class="menu__item">
        <!-- Label -->
        ...
        <!-- Hot key -->
        <div class="menu__hotkey">
            ...
        </div>
    </div>

    <!-- With image and hot key -->
    <div class="menu__item">
        <!-- Image -->
        ...

        <!-- Label -->
        ...

        <!-- Hot key -->
        <div class="menu__hotkey">
            ...
        </div>
    </div>

    <!-- Divider -->
    <div class="menu__divider"></div>
</div>
```

## CSS

```css
.menu {
    display: flex;
    flex-direction: column;

    /* Border */
    border: 1px solid #d1d5db;
    border-radius: 0.25rem;
}

.menu__item {
    /* Center the content horizontally */
    align-items: center;
    display: flex;
}

.menu__hotkey {
    /* Push the hot key to the right */
    margin-left: auto;
}

.menu__divider {
    border-bottom: 1px solid #d1d5db;
    height: 1px;
}
```

{% demo %}{% include "covers/menu.njk" %}{% enddemo %}
