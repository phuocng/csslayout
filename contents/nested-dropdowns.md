---
layout: layouts/post.njk
title: Nested dropdowns
description: Create nested dropdown menu with CSS
keywords: css dropdown menu, css multi-level dropdown menu, css nested dropdown menu
---

## HTML

```html
<ul class="nested-dropdowns">
    <li>A</li>
    <li>
        <div class="nested-dropdowns__item">
            B
            <div class="nested-dropdowns__arrow">...</div>
        </div>
        <ul>
            <li>B.1</li>
            <li>B.2</li>
            <li>
                <div class="nested-dropdowns__item">
                    B.3
                    <div class="nested-dropdowns__arrow">...</div>
                </div>
                <ul>
                    <li>B.3.1</li>
                    <li>B.3.2</li>
                    <li>B.3.3</li>
                    <li>B.3.4</li>
                </ul>
            </li>
            <li>B.4</li>
            <li>B.5</li>
        </ul>
    </li>
    <li>C</li>
    <li>D</li>
</ul>
```

## CSS

```css
.nested-dropdowns {
    /* Border */
    border: 1px solid #d1d5db;
    display: flex;

    /* Reset list styles */
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.nested-dropdowns li {
    cursor: pointer;

    /* Spacing */
    padding: 0.25rem;

    /* Used to position the sub nested-dropdowns */
    position: relative;
}

/* The sub nested-dropdowns */
.nested-dropdowns ul {
    /* Border */
    border: 1px solid #d1d5db;

    /* Hidden by default */
    display: none;

    /* Absolute position */
    left: 0;
    position: absolute;
    top: 100%;

    /* Reset styles */
    list-style-type: none;
    margin: 0;
    padding: 0;
}

/* The second level sub nested-dropdowns */
.nested-dropdowns ul ul {
    left: 100%;
    position: absolute;
    top: 0;
}

/* Change background color of list item when being hovered */
.nested-dropdowns li:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

/* Show the direct sub nested-dropdowns when hovering the list item */
.nested-dropdowns li:hover > ul {
    display: block;
}
```

{% demo %}{% include "covers/nested-dropdowns.njk" %}{% enddemo %}
