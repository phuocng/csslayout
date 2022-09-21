---
layout: layouts/post.njk
title: Sidebar
description: Create a sidebar with CSS flexbox
keywords: css flexbox, css layout, css sidebar
---

## HTML

```html
<div class="sidebar">
    <!-- Sidebar -->
    <aside class="sidebar__sidebar">
        ...
    </aside>

    <!-- Main -->
    <main class="sidebar__main">
        ...
    </main>
</div>
```

## CSS

```css
.sidebar {
    display: flex;
}

.sidebar__sidebar {
    width: 30%;
}

.sidebar__main {
    /* Take the remaining width */
    flex: 1;

    /* Make it scrollable */
    overflow: auto;
}
```

{% demo %}{% include "covers/sidebar.njk" %}{% enddemo %}
