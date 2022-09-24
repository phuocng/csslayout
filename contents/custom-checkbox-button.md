---
layout: layouts/post.njk
title: Custom checkbox button
description: Create a custom checkbox button with CSS flexbox
keywords: css checkbox, css flexbox
---

## HTML

```html
<label class="custom-checkbox-button">
    <!-- The real checkbox -->
    <input type="checkbox" class="custom-checkbox-button__input" />

    <!-- The fake square -->
    <div class="custom-checkbox-button__square">
        <!-- The inner square -->
        <div class="custom-checkbox-button__checkbox custom-checkbox-button__checkbox--selected"></div>
    </div>

    <!-- The text -->
    ...
</label>
```

## CSS

```css
.custom-checkbox-button {
    /* Center the content horizontally */
    align-items: center;
    display: inline-flex;

    /* Cursor */
    cursor: pointer;
}

.custom-checkbox-button__input {
    /* Hide it */
    display: none;
}

.custom-checkbox-button__square {
    border: 1px solid #d1d5db;
    border-radius: 0.25rem;

    /* Spacing */
    margin-right: 0.5rem;
    padding: 0.25rem;
}

.custom-checkbox-button__checkbox {
    background-color: transparent;
    border-radius: 0.25rem;
    height: 1rem;
    width: 1rem;
}

.custom-checkbox-button__checkbox--selected {
    /* For selected checkbox */
    background-color: #3b82f6;
}
```

{% demo %}{% include "covers/custom-checkbox-button.njk" %}{% enddemo %}
