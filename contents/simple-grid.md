---
layout: layouts/post.njk
title: Simple grid
description: Create a simple grid with CSS flexbox
keywords: css flexbox, css flexbox grid, css grid, css layout
---

## HTML

```html
<!-- Row -->
<div class="simple-grid">
    <!--Cell with given width. Replace 25% with whatever you want -->
    <div class="simple-grid__cell simple-grid__cell--1/4">25%</div>

    <!-- Cell that takes remaining width -->
    <div class="simple-grid__cell simple-grid__cell--fill">
        ...
    </div>
</div>
```

## CSS

```css
.simple-grid {
    display: flex;

    margin-left: -0.25rem;
    margin-right: -0.25rem;
}

.simple-grid__cell {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
}

.simple-grid__cell--fill {
    flex: 1;
}

/* Cell with given width */
.simple-grid__cell--1\/2 {
    flex: 0 0 50%;
}
.simple-grid__cell--1\/3 {
    flex: 0 0 33.3333333%;
}
.simple-grid__cell--1\/4 {
    flex: 0 0 25%;
}
```

{% demo %}{% include "covers/simple-grid.njk" %}{% enddemo %}
