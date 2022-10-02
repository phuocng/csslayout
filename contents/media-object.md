---
layout: layouts/post.njk
title: Media object
description: Create a media object with CSS flexbox
keywords: css flexbox, media object
---

## HTML

```html
<div class="media-object">
    <!-- Media object -->
    <div class="media-object__media">...</div>
    <!-- Main content -->
    <div class="media-object__content">...</div>
</div>
```

## CSS

```css
.media-object {
    /* Align sub-items to top */
    align-items: start;
    display: flex;
}

.media-object__media {
    margin-right: 0.5rem;
}

.media-object__content {
    /* Take the remaining width */
    flex: 1;
}
```

{% demo %}
{% include "covers/media-object.njk" %}
{% enddemo %}
