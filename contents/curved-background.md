---
layout: layouts/post.njk
title: Curved background
description: Create an element with curved background
keywords: css border radius, css curved background
---

## HTML

```html
<div class="curved-background">
    <div class="curved-background__curved"></div>
</div>
```

## CSS

```css
.curved-background__curved {
    /* Background color */
    background-color: #d1d5db;

    /* You can use gradient background color such as */
    /* background: linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.1) 100%); */

    /* Curved corners */
    border-bottom-left-radius: 50% 40%;
    border-bottom-right-radius: 50% 40%;

    /* Size */
    height: 50%;
    width: 100%;
}
```

{% demo %}
{% include "covers/curved-background.njk" %}
{% enddemo %}
