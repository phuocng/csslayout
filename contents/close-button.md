---
layout: layouts/post.njk
title: Close button
description: Create a close button with CSS flexbox
keywords: css close button, css flexbox
---

## HTML

```html
<button class="close-button">
    <div class="close-button__line close-button__line--first"></div>
    <div class="close-button__line close-button__line--second"></div>
</button>
```

## CSS

```css
.close-button {
    /* Reset */
    background-color: transparent;
    border-color: transparent;

    /* Cursor */
    cursor: pointer;

    /* Size */
    height: 3rem;
    width: 3rem;

    /* Used to position the inner */
    position: relative;
}

.close-button__line {
    /* Background color */
    background-color: rgba(0, 0, 0, 0.3);

    /* Position */
    position: absolute;

    /* Size */
    height: 1px;
    width: 100%;
}

.close-button__line--first {
    /* Position */
    left: 0px;
    top: 50%;
    transform: translate(0%, -50%) rotate(45deg);

    /* Size */
    height: 1px;
    width: 100%;
}

.close-button__line--second {
    /* Position */
    left: 50%;
    top: 0px;
    transform: translate(-50%, 0%) rotate(45deg);

    /* Size */
    height: 100%;
    width: 1px;
}
```

{% demo %}
{% include "patterns/close-button.njk" %}
{% enddemo %}
