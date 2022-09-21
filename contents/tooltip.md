---
layout: layouts/post.njk
title: Tooltip
description: Create a tooltip with CSS
keywords: css tooltip
---

## HTML

```html
<div class="tooltip">
    <!-- The tooltip content -->
    <div class="tooltip__content">
        ...
    </div>

    <!-- The tooltip arrow -->
    <div class="tooltip__arrow"></div>

    <!-- The trigger element -->
    ...
</div>
```

## CSS

```css
.tooltip {
    /* Used to position the arrow */
    position: relative;
}

/* Show the arrow and content and restore pointer events when hovering the trigger element */
.tooltip:hover .tooltip__arrow,
.tooltip:hover .tooltip__content {
    opacity: 1;
    pointer-events: initial;
}

.tooltip__arrow {
    /* Invisible by default */
    opacity: 0;

    /* To prevent accidental interactions with other elements  */
    pointer-events: none;

    /* Border */
    border: 0.5rem solid transparent;
    border-top-color: #111827;

    /* Position */
    bottom: 100%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, 8px);

    /* Zero size */
    height: 0;
    width: 0;

    /* Displayed on top of other element */
    z-index: 10;
}

.tooltip__content {
    /* Invisible by default */
    opacity: 0;

    /* To prevent accidental interactions with other elements  */
    pointer-events: none;

    /* Background color, must be the same as the border color of arrow */
    background-color: #111827;
    border-radius: 0.25rem;

    /* Position */
    bottom: 100%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -8px);

    /* Displayed on top of other element */
    z-index: 10;
}
```

{% demo %}
{% include "covers/tooltip.njk" %}
{% enddemo %}
