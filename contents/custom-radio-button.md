---
layout: layouts/post.njk
title: Custom radio button
description: Create a custom radio button with CSS flexbox
keywords: css flexbox, css radio
---

## HTML

```html
<label class="custom-radio-button">
    <!-- The real radio -->
    <input type="radio" class="custom-radio-button__input" />

    <!-- The fake circle -->
    <div class="custom-radio-button__circle">
        <!-- The inner circle -->
        <div class="custom-radio-button__radio custom-radio-button__radio--selected"></div>
    </div>

    <!-- The text -->
    ...
</label>
```

## CSS

```css
.custom-radio-button {
    /* Center the content horizontally */
    align-items: center;
    display: inline-flex;

    /* Cursor */
    cursor: pointer;
}

.custom-radio-button__input {
    /* Hide it */
    display: none;
}

.custom-radio-button__circle {
    /* Rounded border */
    border: 1px solid #d1d5db;
    border-radius: 9999px;

    /* Spacing */
    margin-right: 0.5rem;
    padding: 0.25rem;
}

.custom-radio-button__radio {
    /* Rounded border */
    border-radius: 9999px;
    height: 1rem;
    width: 1rem;

    /* For not selected radio */
    background-color: transparent;
}

.custom-radio-button__radio--selected {
    /* For selected radio */
    background-color: #3b82f6;
}
```

{% demo %}{% include "patterns/custom-radio-button.njk" %}{% enddemo %}
