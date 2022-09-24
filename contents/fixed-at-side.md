---
layout: layouts/post.njk
title: Fixed at side
description: Fix an element at the middle of side with CSS
keywords: css fixed
---

## HTML

```html
<!-- Fixed at the middle of left side -->
<div class="fixed-at-side fixed-at-side--l">
    ...
</div>

<!-- Fixed at the middle of right side -->
<div class="fixed-at-side fixed-at-side--r">
    ...
</div>
```

## CSS

```css
.fixed-at-side {
    position: fixed;
    top: 50%;
    transform: translate(0px, -50%);
}
.fixed-at-side--l {
    left: 0;
}
.fixed-at-side--r {
    right: 0;
}
```

{% demo %}
{% include "covers/fixed-at-side.njk" %}
{% enddemo %}
