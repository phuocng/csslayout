---
layout: layouts/post.njk
title: Pricing table
description: Create a pricing table with CSS flexbox
keywords: css flexbox, css pricing table
---

## HTML

```html
<div class="pricing-table">
    <!-- Pricing column -->
    <div class="pricing-table__column">
        <!-- Title -->
        ...

        <!-- Price -->
        ...

        <!-- Description -->
        ...

        <!-- Button -->
        ...
    </div>

    <!-- Repeated pricing columns -->
    ...
</div>
```

## CSS

```css
.pricing-table {
    /* Content is centered horizontally */
    align-items: center;
    display: flex;
    justify-content: center;
}

.pricing-table__column {
    /* Content is centered vertically */
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    /* Make all columns have the same width */
    flex: 1;

    /* OPTIONAL: Space between columns */
    margin: 0 0.5rem;

    /* OPTIONAL: Border */
    border: 1px solid #d1d5db;
    border-radius: 0.25rem;
}
```

{% demo %}
{% include "patterns/pricing-table.njk" %}
{% enddemo %}
