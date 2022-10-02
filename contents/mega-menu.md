---
layout: layouts/post.njk
title: Mega menu
description: Create a mega menu with CSS
keywords: css mega menu
---

## HTML

```html
<div class="mega-menu">
    <!-- Item -->
    <div class="mega-menu__item">...</div>

    <!-- An item that triggers displaying the mega menu -->
    <div class="mega-menu__item mega-menu__trigger">
        <!-- The trigger item's content -->
        <div>...</div>

        <!-- Mega menu -->
        <div class="mega-menu__content">...</div>
    </div>

    <!-- Item -->
    <div class="mega-menu__item">...</div>
</div>
```

## CSS

```css
.mega-menu {
    /* Used to position the mega menu */
    position: relative;
}

.mega-menu__trigger:hover .mega-menu__content {
    /* Show the mega menu when hovering the trigger item */
    display: block;
}

.mega-menu__content {
    /* Border */
    border: 1px solid #d1d5db;
    margin-top: -1px;

    /* Hidden by default */
    display: none;

    /* Absolute position */
    left: 0px;
    position: absolute;
    top: 100%;

    /* Take full width */
    width: 100%;

    /* Displayed on top of other elements */
    background: #fff;
    z-index: 9999;
}
```

{% demo %}{% include "covers/mega-menu.njk" %}{% enddemo %}
