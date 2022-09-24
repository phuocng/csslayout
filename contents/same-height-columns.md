---
layout: layouts/post.njk
title: Same height columns
description: Create same height columns with CSS flexbox
keywords: css flexbox, css layout, css same height columns
---

## HTML

```html
<div class="same-height-columns">
    <!-- Column -->
    <div class="same-height-columns__column">
        <!-- Cover -->
        ...

        <!-- Content -->
        <div class="same-height-columns__content">
            ...
        </div>

        <!-- Button sticks to the bottom -->
        ...
    </div>

    <!-- Repeat with other columns -->
    ...
</div>
```

## CSS

```css
.same-height-columns {
    display: flex;
}

.same-height-columns__column {
    flex: 1;
    /* Space between columns */
    margin: 0 8px;

    /* Layout each column */
    display: flex;
    flex-direction: column;
}

.same-height-columns__content {
    /* Take available height */
    flex: 1;
}
```

{% demo %}{% include "covers/same-height-columns.njk" %}{% enddemo %}
