---
layout: layouts/post.njk
title: Radio button group
description: Create a radio button group with CSS flexbox
keywords: css flexbox, css radio button
---

## HTML

```html
<div class="radio-button-group">
    <!-- Each radio item -->
    <label class="radio-button-group__label">
        <!-- The radio input -->
        <input type="radio" class="radio-button-group__input" />

        <!-- The text -->
        ...
    </label>

    <!-- Selected item -->
    <label class="radio-button-group__label radio-button-group__label--selected">
        ...
    </label>

    <!-- Repeat other items -->
    ...
</div>
```

## CSS

```css
.radio-button-group {
    display: flex;

    /* Border */
    border: 1px solid #d1d5db;
    border-radius: 0.25rem;
    height: 2rem;
}

.radio-button-group__label {
    /* Center the content */
    align-items: center;
    display: inline-flex;

    border-right: 1px solid #d1d5db;
    padding: 0.5rem;

    /* For not selected radio */
    background-color: transparent;
    color: #ccc;
}

.radio-button-group__label:last-child {
    /* Remove the right border from the last label */
    border-right-color: transparent;
}

.radio-button-group__label--selected {
    /* For selected radio */
    background-color: #3b82f6;
    color: #fff;

    margin-top: -1px;
    margin-bottom: -1px;
}

.radio-button-group__input {
    /* Hide it */
    display: none;
}
```

{% demo %}{% include "covers/radio-button-group.njk" %}{% enddemo %}
