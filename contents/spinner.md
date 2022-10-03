---
layout: layouts/post.njk
title: Spinner
description: Create a loading spinner with CSS
keywords: css loading spinner, css spinner
---

## HTML

```html
<div class="spinner"></div>
```

## CSS

```css
.spinner {
    /* Size */
    height: 4rem;
    width: 4rem;

    /* Create a curve at the top */
    border: 4px solid #d1d5db;
    border-top-color: #3b82f6;
    border-radius: 50%;

    animation: spinner 800ms linear infinite;
}

@keyframes spinner {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
```

{% demo %}{% include "covers/spinner.njk" %}{% enddemo %}

## See also

-   [Indeterminate progress bar](/indeterminate-progress-bar/)
