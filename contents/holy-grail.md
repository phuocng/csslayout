---
layout: layouts/post.njk
title: Holy grail
description: Create a holy grail layout with CSS flexbox
keywords: css flexbox, css holy grail layout, css layout
---

## HTML

```html
<div class="holy-grail">
    <header>...</header>
    <main class="holy-grail__main">
        <!-- Left sidebar -->
        <aside class="holy-grail__left">...</aside>

        <!-- Main content -->
        <article class="holy-grail__middle">...</article>

        <!-- Right sidebar -->
        <nav class="holy-grail__right">...</nav>
    </main>
    <footer>...</footer>
</div>
```

## CSS

```css
.holy-grail {
    display: flex;
    flex-direction: column;
}

.holy-grail__main {
    /* Take the remaining height */
    flex-grow: 1;

    /* Layout the left sidebar, main content and right sidebar */
    display: flex;
    flex-direction: row;
}

.holy-grail__left {
    width: 25%;
}

.holy-grail__middle {
    /* Take the remaining width */
    flex-grow: 1;
}

.holy-grail__right {
    width: 20%;
}
```

{% demo %}{% include "covers/holy-grail.njk" %}{% enddemo %}
