---
layout: layouts/post.njk
title: Dropdown
description: Create a dropdown with CSS
keywords: css dropdown, css menu
---

## HTML

```html
<div class="dropdown">
    <!-- The trigger element -->
    <div class="dropdown__trigger">...</div>

    <!-- The content -->
    <div class="dropdown__content">...</div>
</div>
```

## CSS

```css
.dropdown {
    position: relative;
}

.dropdown__trigger {
    cursor: pointer;
}

/* Hide the dropdown's content by default */
.dropdown__content {
    display: none;

    /* Position it right below the trigger element */
    left: 0;
    padding-top: 0.25rem;
    position: absolute;
    top: 100%;

    /* It should be on the top of other elements */
    background-color: #fff;
    z-index: 9999;
}

/* Show the content when hover on the container */
.dropdown:hover .dropdown__content {
    display: block;
}
```

You can use a [triangle button](/triangle-buttons/) to indicate that there is content under it.

Move the mouse over the button to see the dropdown.

{% demo %}{% include "covers/dropdown.njk" %}{% enddemo %}
