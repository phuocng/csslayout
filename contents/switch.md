---
layout: layouts/post.njk
title: Switch
description: Create a switch with CSS flexbox
keywords: css custom checkbox, css flexbox, css switch, css switcher
---

The checkbox is placed inside a label. So when clicking on the label, the checkbox will be checked even though it's hidden.

## HTML

```html
<label class="switch switch--on">
    <input type="checkbox" class="switch__input" />

    <!-- Circle -->
    <div class="switch__circle"></div>
</label>

<label class="switch switch--off">
    <input type="checkbox" class="switch__input" />

    <!-- Circle -->
    <div class="switch__circle"></div>
</label>
```

## CSS

```css
.switch {
    display: flex;

    /* Rounded border */
    border-radius: 9999px;

    /* Size */
    height: 2rem;
    width: 4rem;

    /* Demo */
    margin-bottom: 0.5rem;
}

.switch__input {
    /* Hide the input */
    display: none;
}

.switch__circle {
    /* Rounded border */
    border-radius: 9999px;

    /* Size */
    width: 2rem;

    background-color: #fff;
}
```

The switch comes with two variants:

```css
/* ON status */
.switch--on {
    background-color: #357edd;
    border: 1px solid #357edd;

    /* Push the circle to the right */
    justify-content: flex-end;
}

/* OFF status */
.switch--off {
    background-color: #d1d5db;
    border: 1px solid #d1d5db;
}
.switch--off .switch__circle {
    border: 1px solid #d1d5db;
}
```

{% demo %}{% include "patterns/switch.njk" %}{% enddemo %}
