---
layout: layouts/post.njk
title: Property list
description: Create a property list with CSS flexbox
keywords: css flexbox, property list
---

## HTML

```html
<!-- A property item -->
<dl class="property-list">
    <!-- Property name -->
    <dt class="property-list__key">...</dt>

    <!-- Property value -->
    <dd class="property-list__value">...</dd>
</dl>

<!-- Repeat other items -->
...
```

## CSS

```css
.property-list {
    /* Content is center horizontally */
    align-items: center;
    display: flex;

    border-bottom: 1px solid #d1d5db;

    /* Spacing */
    margin: 0;
    padding: 0.25rem 0;
}
.property-list__key {
    /* Take the available width */
    flex: 1;
}
.property-list__value {
    margin-left: 0.5rem;
}
```

{% demo %}
{% include "patterns/property-list.njk" %}
{% enddemo %}
