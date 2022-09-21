---
layout: layouts/post.njk
title: Fading long section
description: Fading long section to indicate there is more content
keywords: css fading overflow, css linear gradient
---

The pattern is often used to indicate there is more content.

## HTML

```html
<div class="fading-long-section">
    <!-- Main content -->
    <div class="fading-long-section__content">
        ...
    </div>

    <!-- The faded element -->
    <div class="fading-long-section__fading"></div>
</div>
```

## CSS

```css
.fading-long-section {
    /* Used to position the faded element */
    position: relative;
}

.fading-long-section__content {
    /* Height */
    height: 100%;
    overflow-y: hidden;
}

.fading-long-section__fading {
    /* Displayed at the bottom */
    bottom: 0;
    left: 0;
    position: absolute;

    /* Size */
    height: 2rem;
    width: 100%;

    /* Gradient background */
    background: linear-gradient(rgba(255, 255, 255, 0.01), #fff);
}
```

{% demo %}
{% include "covers/fading-long-section.njk" %}
{% enddemo %}
