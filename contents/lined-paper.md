---
layout: layouts/post.njk
title: Lined paper
description: Create lined paper with CSS
keywords: css linear gradient, css lined paper, css multiple horizontal lines
---

## HTML

```html
<div class="lined-paper">
    ...
</div>
```

## CSS

```css
.lined-paper {
    /* Lined background */
    background-image: linear-gradient(#d1d5db 1px, transparent 0px);
    background-size: 100% 2em;

    /*
    Display the content on top of the lines.
    The line height must be the same as the background size defined above
    */
    background-position-y: 1.5rem;
    line-height: 2em;
}
```

{% demo %}
{% include "covers/lined-paper.njk" %}
{% enddemo %}
