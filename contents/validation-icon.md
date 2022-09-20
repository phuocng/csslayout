---
layout: layouts/post.njk
title: Validation icon
description: Add validation icons to input with CSS
keywords: css validation icon
---

## HTML

```html
<div class="validation-icon">
    <!-- The input -->
    <input class="validation-icon__input" />

    <!-- The icon validation-icon -->
    <span class="validation-icon__icon">
        <!-- The SVG icon represents any state such as valid, invalid, loading, etc. -->
        ...
    </span>
</div>
```

## CSS

```css
.validation-icon {
    /* Used to position the validation icon */
    position: relative;
}

.validation-icon__input {
    /* Border */
    border: 1px solid #d1d5db;
    border-radius: 0.25rem;

    /* Take the full width */
    width: 100%;
    height: 2rem;

    /* Don't overlap the icon */
    padding-right: 1.5rem;
}

.validation-icon__icon {
    /* Positioned at the right side */
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translate(0, -50%);

    z-index: 10;
}
```

{% demo %}
{% include "patterns/validation-icon.njk" %}
{% enddemo %}
