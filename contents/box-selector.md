---
layout: layouts/post.njk
title: Box selector
description: Create a box selector with CSS
keywords: css box selector
---

## HTML

```html
<div class="box-selector">...</div>

<!-- The selected variant -->
<div class="box-selector box-selector--selected">...</div>
```

## CSS

```css
.box-selector {
    border: 1px solid #d1d5db;
    border-radius: 0.25rem;
    padding: .5rem;
}

.box-selector--selected {
    /* Change the border color */
    border: 2px solid #3b82f6;

    /* Used to position the tick */
    position: relative;
}

/* The tick */
.box-selector--selected:before {
    /* Absolute position */
    content: '';
    left: 0.25rem;
    position: absolute;
    top: 0.25rem;

    /* Size */
    height: 1rem;
    width: 1rem;

    /* Background */
    background-image: url("data:image/svg+xml,%3Csvg fill='%233b82f6' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' %3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'%3E%3C/path%3E%3C/svg%3E");
    background-position: center center;
    background-repeat: no-repeat;
}
```

{% demo %}{% include "covers/box-selector.njk" %}{% enddemo %}

## See also

- [Custom checkbox button](/custom-checkbox-button/)
- [Custom radio button](/custom-radio-button/)
