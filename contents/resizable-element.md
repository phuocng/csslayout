---
layout: layouts/post.njk
title: Resizable element
description: Create resizable indicators with CSS
keywords: css resizable, css resize cursor
---

## HTML

```html
<div class="resizable-element">
    <!-- The content -->
    ...

    <!-- The top left square -->
    <div class="resizable-element__resizer resizable-element__resizer--tl"></div>

    <!-- The top square -->
    <div class="resizable-element__resizer resizable-element__resizer--tc"></div>

    <!-- The top right square -->
    <div class="resizable-element__resizer resizable-element__resizer--tr"></div>

    <!-- The right square -->
    <div class="resizable-element__resizer resizable-element__resizer--rc"></div>

    <!-- The right bottom square -->
    <div class="resizable-element__resizer resizable-element__resizer--rb"></div>

    <!-- The bottom square -->
    <div class="resizable-element__resizer resizable-element__resizer--bc"></div>

    <!-- The bottom left square -->
    <div class="resizable-element__resizer resizable-element__resizer--bl"></div>

    <!-- The left square -->
    <div class="resizable-element__resizer resizable-element__resizer--lc"></div>
</div>
```

## CSS

```css
.resizable-element {
    /* Border */
    border: 1px dashed #d1d5db;

    /* Used to position the squares */
    position: relative;
}

.resizable-element__resizer {
    /* Border */
    border: 1px solid #d1d5db;
    position: absolute;

    /* Size */
    height: 0.75rem;
    width: 0.75rem;
}

.resizable-element__resizer--tl {
    /* Resize cursor */
    cursor: nwse-resize;

    /* Positioned at the top left corner */
    left: 0px;
    top: 0px;
    transform: translate(-50%, -50%);
}

.resizable-element__resizer--tc {
    /* Resize cursor */
    cursor: ns-resize;

    /* Positioned at the middle of top side */
    left: 50%;
    top: 0px;
    transform: translate(-50%, -50%);
}

.resizable-element__resizer--tr {
    /* Resize cursor */
    cursor: nesw-resize;

    /* Positioned at the top right corner */
    right: 0px;
    top: 0px;
    transform: translate(50%, -50%);
}

.resizable-element__resizer--rc {
    /* Resize cursor */
    cursor: ew-resize;

    /* Positioned at the middle of right side */
    right: 0px;
    top: 50%;
    transform: translate(50%, -50%);
}

.resizable-element__resizer--rb {
    /* Resize cursor */
    cursor: nwse-resize;

    /* Positioned at the right bottom corner */
    bottom: 0px;
    right: 0px;
    transform: translate(50%, 50%);
}

.resizable-element__resizer--bc {
    /* Resize cursor */
    cursor: ns-resize;

    /* Positioned at the middle of bottom side */
    bottom: 0px;
    right: 50%;
    transform: translate(50%, 50%);
}

.resizable-element__resizer--bl {
    /* Resize cursor */
    cursor: nesw-resize;

    /* Positioned at the bottom left corner */
    bottom: 0px;
    left: 0px;
    transform: translate(-50%, 50%);
}

.resizable-element__resizer--lc {
    /* Resize cursor */
    cursor: ew-resize;

    /* Positioned at the middle of left side */
    left: 0px;
    top: 50%;
    transform: translate(-50%, -50%);
}
```

You can move the mouse over each squares located at the corners and the middle of sides to see the cursors which indicate the associated side can be resized.

{% demo %}
{% include "patterns/resizable-element.njk" %}
{% enddemo %}
