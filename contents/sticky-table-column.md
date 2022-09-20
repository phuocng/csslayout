---
layout: layouts/post.njk
title: Sticky table column
description: Create sticky table column with CSS
keywords: css position sticky, css sticky table column
---

## HTML

```html
<table class="sticky-table-column">
    <thead>
        <tr>
            <th class="sticky-table-column__sticky">
                ...
            </th>

            <!-- Other header column ... -->
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="sticky-table-column__sticky">...</td>
            <!-- Other columns ... -->
        </tr>
    </tbody>
</table>
```

## CSS

```css
.sticky-table-headers__sticky {
    /* Background color */
    background-color: #9ca3af;

    /* Stick to the left */
    left: 0;
    position: sticky;

    /* Displayed on top of other rows when scrolling */
    z-index: 9999;
}
```

{% demo %}
{% include "patterns/sticky-table-column.njk" %}
{% enddemo %}
