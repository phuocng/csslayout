---
layout: layouts/post.njk
title: Sticky footer
description: Create a sticky footer with CSS flexbox
keywords: css flexbox, css layout, css sticky, css sticky footer
---

## HTML

```html
<div class="sticky-footer">
    <header class="sticky-footer__header">
        ...
    </header>
    <main class="sticky-footer__main">
        ...
    </main>
    <footer class="sticky-footer__footer">
        ...
    </footer>
</div>
```

## CSS

```css
.sticky-footer {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.sticky-footer__header,
.sticky-footer__footer {
    flex-shrink: 0;
}

.sticky-footer__main {
    flex-grow: 1;
}
```

The footer always sticks to the bottom if the main content is short.

{% demo %}{% include "covers/sticky-footer.njk" %}{% enddemo %}
