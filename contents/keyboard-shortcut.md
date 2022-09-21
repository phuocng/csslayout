---
layout: layouts/post.njk
title: Keyboard shortcut
description: Create a keyboard shortcut with CSS
keywords: kbd tag, keyboard shortcut
---

We use the native `kbd` tag to display the keyboard shortcut.

## HTML

```html
<kbd class="keyboard-shortcut">...</kbd>
```

## CSS

```css
.keyboard-shortcut {
    /* Background and color */
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 0.25rem;
    color: rgba(0, 0, 0, 0.7);

    /* Bottom shadow */
    box-shadow: #d1d5db 0px -4px 0px inset, rgba(0, 0, 0, 0.4) 0px 1px 1px;

    /* Spacing */
    padding: 0.25rem 0.5rem;
}
```

{% demo %}
{% include "patterns/keyboard-shortcut.njk" %}
{% enddemo %}
