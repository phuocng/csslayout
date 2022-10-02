---
layout: layouts/post.njk
title: Pagination
description: Create a pagination with CSS flexbox
keywords: css flexbox, css pagination
---

## HTML

```html
<div class="pagination">
    <!-- Pagination item -->
    <div class="pagination__item">...</div>

    <!-- Repeat other items -->
    ...
</div>
```

## CSS

```css
.pagination {
    display: flex;

    /* Border */
    border: 1px solid #d1d5db;
    border-radius: 4px;
}

.pagination__item {
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;
}

.pagination__item:not(:last-child) {
    /* Right border */
    border-right: 1px solid #d1d5db;
}

.pagination__item--active {
    background-color: #d1d5db;
}
```

{% demo %}{% include "covers/pagination.njk" %}{% enddemo %}
