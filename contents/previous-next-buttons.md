---
layout: layouts/post.njk
title: Previous next buttons
description: Create previous and next buttons with CSS flexbox
keywords: css flexbox, css pagination
---

## HTML

```html
<div class="previous-next-buttons">
    <!-- Previous link sticks to the left -->
    <div class="previous-next-buttons__nav">
        <a class="previous-next-buttons__button previous-next-buttons__button--l"></a>
    </div>

    <!-- Next link sticks to the right -->
    <div class="previous-next-buttons__nav">
        <a class="previous-next-buttons__button previous-next-buttons__button--r"></a>
    </div>
</div>
```

## CSS

```css
.previous-next-buttons {
    align-items: center;
    display: flex;
    justify-content: space-between;
}
```

You can use the [arrow buttons](/arrow-buttons/) to create the previous and next buttons.

{% demo %}{% include "covers/previous-next-buttons.njk" %}{% enddemo %}
