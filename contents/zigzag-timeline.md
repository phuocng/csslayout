---
layout: layouts/post.njk
title: Zigzag timeline
description: Create a zigzag timeline
keywords: css timeline, css zigzag timeline
---

## HTML

```html
<div class="zigzag-timeline__item">
    <!-- Milestone -->
    <div className="zigzag-timeline__milestone">...</div>

    <!-- Content -->
    ...
</div>

<!-- Repeat other items -->
...
```

## CSS

```css
.zigzag-timeline__item {
    /* Used to position the milestone */
    position: relative;

    /* Border */
    border-bottom: 1px solid #9ca3af;

    /* Take full width */
    width: 100%;
}

.zigzag-timeline__milestone {
    /* Absolute position */
    position: absolute;
    top: 50%;

    /* Circle it */
    border-radius: 50%;
    height: 1rem;
    width: 1rem;

    /* Misc */
    background: #9ca3af;
}

/* Styles for even items */
.zigzag-timeline__item:nth-child(2n) {
    border-left: 1px solid #9ca3af;
}
.zigzag-timeline__item:nth-child(2n) .zigzag-timeline__milestone {
    left: 0;
    transform: translate(-50%, -50%);
}

/* Styles for odd items */
.zigzag-timeline__item:nth-child(2n + 1) {
    border-right: 1px solid #9ca3af;
}
.zigzag-timeline__item:nth-child(2n + 1) .zigzag-timeline__milestone {
    right: 0;
    transform: translate(50%, -50%);
}
```

{% demo %}
{% include "patterns/zigzag-timeline.njk" %}
{% enddemo %}
