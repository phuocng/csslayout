---
layout: layouts/post.njk
title: Notification
description: Create a notification with CSS flexbox
keywords: css alert, css flexbox, css notification
---

## HTML

```html
<div class="notification">
    <!-- Content -->
    <div class="notification__body">
        ...
    </div>

    <!-- Close button -->
    <button class="notification__close">
        <div class="notification__close-line notification__close-line--first"></div>
        <div class="notification__close-line notification__close-line--second"></div>
    </button>
</div>
```

## CSS

```css
.notification {
    display: flex;
}
.notification__body {
    flex: 1;
    margin-right: 0.5rem;
}
```

The [close button](/close-button/) represents the button for closing the notification.

```css
.notification__close {
    /* Reset */
    background-color: transparent;
    border-color: transparent;

    /* Cursor */
    cursor: pointer;

    /* Size */
    height: 1rem;
    width: 1rem;

    /* Used to position the inner */
    position: relative;
}

.notification__close-line {
    /* Background color */
    background-color: #d1d5db;

    /* Position */
    position: absolute;

    /* Size */
    height: 1px;
    width: 100%;
}

.notification__close-line--first {
    /* Position */
    left: 0px;
    top: 50%;
    transform: translate(0%, -50%) rotate(45deg);

    /* Size */
    height: 1px;
    width: 100%;
}

.notification__close-line--second {
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
{% include "patterns/notification.njk" %}
{% enddemo %}
