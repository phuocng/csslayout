---
layout: layouts/post.njk
title: Sticky header
description: Create a sticky header with CSS
keywords: css layout, css position sticky, css sticky header
---

## HTML

```html
<div>
    <header class="sticky-header__header">
        ...
    </header>
    <main>
        ...
    </main>
</div>
```

## CSS

```css
.sticky-header__header {
    /* Stick to the top */
    position: sticky;
    top: 0;
}
```

{% demo %}{% include "patterns/sticky-header.njk" %}{% enddemo %}
