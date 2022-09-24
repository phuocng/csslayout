---
layout: layouts/post.njk
title: Modal
description: Create a modal with CSS flexbox
keywords: css dialog, css flexbox, css modal
---

## HTML

```html
<div class="modal">
    <!-- Header -->
    <div class="modal__header">
        <!-- Title -->
        ...
        <!-- Close icon sticks to the right -->
        ...
    </div>

    <!-- Content -->
    ...

    <!-- Footer -->
    <div class="modal__footer">
        ...
    </div>
</div>
```

## CSS

```css
.modal {
    /* Border */
    border: 1px solid #d1d5db;
    border-radius: 0.25rem;
}

.modal__header {
    display: flex;
    justify-content: space-between;

    /* Border */
    border-bottom: 1px solid #d1d5db;
}

.modal__footer {
    display: flex;
    /* Push the buttons to the right */
    justify-content: flex-end;
    
    /* Border */
    border-top: 1px solid #d1d5db;
}
```

{% demo %}
{% include "covers/modal.njk" %}
{% enddemo %}
