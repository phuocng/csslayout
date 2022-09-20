---
layout: layouts/post.njk
title: Sticky table headers
description: Create sticky table headers with CSS
keywords: css position sticky, css sticky table headers
---

## HTML

```html
<table class="sticky-table-headers">
    <thead>
        <tr class="sticky-table-headers__sticky"></tr>
    </thead>
    <tbody>
        ...
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
{% include "patterns/sticky-table-headers.njk" %}
{% enddemo %}
