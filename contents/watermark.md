---
layout: layouts/post.njk
title: Watermark
description: Create a watermark with CSS
keywords: css watermark
---

## HTML

```html
<div class="watermark">
    <!-- Watermark container -->
    <div class="watermark__inner">
        <!-- The watermark -->
        <div class="watermark__body">
            Draft
        </div>
    </div>

    <!-- Other content -->
    ...
</div>
```

## CSS

```css
.watermark {
    /* Used to position the watermark */
    position: relative;
}

.watermark__inner {
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Absolute position */
    left: 0px;
    position: absolute;
    top: 0px;

    /* Take full size */
    height: 100%;
    width: 100%;
}

.watermark__body {
    /* Text color */
    color: rgba(0, 0, 0, 0.2);

    /* Text styles */
    font-size: 3rem;
    font-weight: bold;
    text-transform: uppercase;

    /* Rotate the text */
    transform: rotate(-45deg);

    /* Disable the selection */
    user-select: none;
}
```

{% demo %}
{% include "covers/watermark.njk" %}
{% enddemo %}
