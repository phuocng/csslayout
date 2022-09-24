---
layout: layouts/post.njk
title: Stepper input
description: Create a stepper input with CSS flexbox
keywords: css flexbox, css stepper input
---

## HTML

```html
<div class="stepper-input">
    <!-- Minus button -->
    <button class="stepper-input__button">-</button>

    <!-- Input container -->
    <div class="stepper-input__content">
        <input type="text" class="stepper-input__input" />
    </div>

    <!-- Plus button -->
    <button class="stepper-input__button">+</button>
</div>
```

## CSS

```css
.stepper-input {
    display: flex;

    /* Border */
    border: 1px solid #d1d5db;
    border-radius: 0.25rem;

    /* Size */
    height: 2rem;
}

.stepper-input__button {
    /* Reset */
    background: #d1d5db;
    border: none;

    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Size */
    width: 2rem;
}

.stepper-input__content {
    flex: 1;
}

.stepper-input__input {
    /* Reset */
    border: none;

    /* Take full size of its container */
    height: 100%;
    width: 100%;
}
```

{% demo %}{% include "covers/stepper-input.njk" %}{% enddemo %}
