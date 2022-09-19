---
layout: layouts/post.njk
title: Diagonal section
description: Create a diagonal section with CSS
keywords: css diagonal section, css transform skew
---

## HTML

```html
<div class="diagonal-section">
    <!-- The diagonal area -->
    <div class="diagonal-section__diagonal"></div>

    <!-- Content -->
    ...
</div>
```

## CSS

```css
.diagonal-section {
    /* Used to position the diagonal area */
    position: relative;
}

.diagonal-section__diagonal {
    /* Absolute position */
    left: 0px;
    position: absolute;
    top: 0px;

    /* Take full size */
    height: 100%;
    width: 100%;

    /* Create diagonal sides */
    transform: skewY(-5deg);

    /* Background color */
    background-color: rgba(0, 0, 0, 0.3);

    /* Displayed under the main content */
    z-index: -1;
}
```

{% demo %}
{% include "patterns/diagonal-section.njk" %}
{% enddemo %}
