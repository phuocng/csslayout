---
layout: layouts/post.njk
title: Toggle password visibility
description: Create a toggle password visibility with CSS flexbox
keywords: css flexbox, toggle password visibilit
---

## HTML

```html
<div class="toggle-password-visibility">
    <!-- Text input -->
    <input type="text" class="toggle-password-visibility__input" />

    <!-- Toggle button sticks to the right -->
    <button class="toggle-password-visibility__toggle">
        ...
    </button>
</div>
```

## CSS

```css
.toggle-password-visibility {
    display: flex;

    /* Border */
    border: 1px solid #d1d5db;
    border-radius: 0.25rem;
    padding: 0.25rem;
}

.toggle-password-visibility__input {
    border-color: transparent;

    /* Take available width */
    flex: 1;
}

.toggle-password-visibility__toggle {
    /* Reset */
    background: #fff;
    border-color: transparent;

    /* Center the content */
    display: flex;
    align-items: center;
    justify-content: center;
}
```

In reality, the `click` event handler of the button needs to update the `type` attribute of the input to `text` or `password`:

```js
document
    .querySelector('.toggle-password-visibility__toggle')
    .addEventListener('click', (e) => {
        const input = e.target.previousElementSibling;
        const type = input.getAttribute('type');
        input.setAttribute('type', type === 'text' ? 'password' : 'text');
    });
```

{% demo %}{% include "patterns/toggle-password-visibility.njk" %}{% enddemo %}
