---
layout: layouts/post.njk
title: Floating label
description: Create a floating label with CSS
keywords: css floating label, placeholder shown
---

## HTML

```html
<div class="floating-label">
    <!-- The input -->
    <input placeholder="Placeholder" class="floating-label__input" />

    <!-- The label -->
    <label class="floating-label__label">Placeholder</label>
</div>
```

## CSS

```css
.floating-label {
    border: 1px solid #d1d5db;
    border-radius: 0.25rem;
    position: relative;
}

.floating-label__input {
    border: none;
    padding: 0.5rem;
    height: 100%;
}

/*
Show the label at desired position when the 
placeholder of input isn't shown
*/
.floating-label__input:not(:placeholder-shown) + .floating-label__label {
    background: #fff;
    transform: translate(0, -200%);
    opacity: 1;
}

.floating-label__label {
    /* Position the label */
    left: 1rem;
    position: absolute;
    top: 100%;

    /* Hide it by default */
    opacity: 0;
    transition: all 200ms;

    padding: 0 0.5rem;
}
```

Type something in the input to see how the label is shown up.

{% demo %}{% include "patterns/floating-label.njk" %}{% enddemo %}
