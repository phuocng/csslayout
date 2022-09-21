---
layout: layouts/post.njk
title: Spin button
description: Create a spin button with CSS flexbox
keywords: css flexbox, css spin button
---

## HTML

```html
<div class="spin-button">
    <!-- Input -->
    <input type="text" class="spin-button__input" />

    <!-- Buttons spin-button -->
    <div class="spin-button__buttons">
        <!-- Up button -->
        <button class="spin-button__button">
            ...
        </button>

        <!-- Down button -->
        <button class="spin-button__button">
            ...
        </button>
    </div>
</div>
```

## CSS

```css
.spin-button {
    border: 1px solid #d1d5db;
    border-radius: 0.25rem;
    display: flex;
    overflow: hidden;
}

.spin-button__input {
    border-color: transparent;
    padding: 0.5rem;

    /* Demo */
    width: 8rem;
}

.spin-button__buttons {
    /* Content is centered vertically */
    display: flex;
    flex-direction: column;
    justify-content: center;

    /* Left border */
    border-left: 1px solid #d1d5db;
}

.spin-button__button {
    /* Reset */
    background: #fff;
    border-color: transparent;
    cursor: pointer;

    /* Make buttons have the same height */
    flex: 1;
}
```

You can use the [triangle buttons](/triangle-buttons/) to create the up and down buttons:

{% demo %}{% include "patterns/spin-button.njk" %}{% enddemo %}
