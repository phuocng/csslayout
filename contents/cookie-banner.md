---
layout: layouts/post.njk
title: Cookie banner
description: Create a cookie banner with CSS flexbox
keywords: css cookie banner, css flexbox
---

## HTML

```html
<div class="cookie-banner">
    <!-- Tells visitors that the website uses cookie -->
    <div class="cookie-banner__content">...</div>

    <!-- Close button -->
    ...
</div>
```

## CSS

```css
.cookie-banner {
    /* Banner is displayed at the bottom */
    bottom: 0;
    left: 0;
    position: fixed;
    width: 100%;

    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;
}

.cookie-banner__content {
    /* Take available width */
    flex: 1;
}
```

{% demo %}
{% include "covers/cookie-banner.njk" %}
{% enddemo %}
