---
layout: layouts/post.njk
title: Radio switch
description: Create a radio switch with CSS flexbox
keywords: css flexbox, css radio switch, css switch
---

## HTML

```html
<div class="radio-switch">
    <!-- Radio container -->
    <label class="radio-switch__label radio-switch__label--selected">
        <input type="radio" class="radio-switch__input" />

        <!-- Text -->
        ...
    </label>

    <!-- Other radio item -->
    ...
</div>
```

## CSS

```css
.radio-switch {
    background-color: #d1d5db;
    border-radius: 9999px;
    display: inline-flex;
    padding: 0.25rem;
}

.radio-switch__label {
    border-radius: 9999px;
    cursor: pointer;
    padding: 0.25rem 0.5rem;
}

.radio-switch__label--selected {
    /* For selected radio only */
    background-color: #3b82f6;
    color: #fff;
}

.radio-switch__input {
    display: none;
}
```

{% demo %}{% include "patterns/radio-switch.njk" %}{% enddemo %}
