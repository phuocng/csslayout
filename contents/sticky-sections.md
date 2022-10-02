---
layout: layouts/post.njk
title: Sticky sections
description: Create sticky sections with CSS
keywords: css layout, css sticky, css sticky sections
---

## HTML

```html
<div class="sticky-sections">
    <section class="sticky-sections__section">...</section>

    <!-- Repeat other sections -->
    ...
</div>
```

## CSS

```css
.sticky-sections {
    height: 100%;
    overflow: scroll;
}

.sticky-sections__section {
    /* Take full size */
    height: 100%;
    width: 100%;

    /* Stick to the top */
    position: sticky;
    top: 0;
}
```

{% demo %}{% include "covers/sticky-sections.njk" %}{% enddemo %}
