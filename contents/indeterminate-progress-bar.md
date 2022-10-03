---
layout: layouts/post.njk
title: Indeterminate progress bar
description: Create an indeterminate progress bar with CSS
keywords: css indeterminate progress bar, css progress bar
---

## HTML

```html
<div class="indeterminate-progress-bar">
    <div class="indeterminate-progress-bar__progress"></div>
</div>
```

## CSS

```css
.indeterminate-progress-bar {
    /* Color */
    background-color: #d1d5db;

    /* Rounded border */
    border-radius: 9999px;

    /* Size */
    height: 0.5rem;

    position: relative;
    overflow: hidden;
}

.indeterminate-progress-bar__progress {
    /* Color */
    background-color: #3b82f6;

    /* Rounded border */
    border-radius: 9999px;

    /* Absolute position */
    position: absolute;
    bottom: 0;
    top: 0;
    width: 50%;

    /* Move the bar infinitely */
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-name: indeterminate-progress-bar;
}

@keyframes indeterminate-progress-bar {
    from {
        left: -50%;
    }
    to {
        left: 100%;
    }
}
```

{% demo %}{% include "covers/indeterminate-progress-bar.njk" %}{% enddemo %}

## See also

-   [Progress bar](/progress-bar/)
-   [Spinner](/spinner/)
