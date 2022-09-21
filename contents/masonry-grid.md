---
layout: layouts/post.njk
title: Masonry grid
description: Create a masonry grid with CSS
keywords: css column-count, css column-gap, css masonry, css masonry grid
---

## HTML

```html
<div class="masonry-grid">
    <!--Item -->
    <div class="masonry-grid__item">...</div>

    <!-- Repeat other items -->
</div>
```

## CSS

```css
.masonry-grid {
    /* It is split into 3 columns */
    column-count: 3;

    /* The space between columns */
    column-gap: 1rem;
}

.masonry-grid__item {
    /* Prevent a column from breaking into multiple columns */
    break-inside: avoid;
}
```

{% demo %}{% include "patterns/masonry-grid.njk" %}{% enddemo %}
