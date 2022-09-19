---
layout: layouts/post.njk
title: Card
description: Create a card with CSS flexbox
keywords: css card, css flexbox
---

## HTML

```html
<div class="card">
    <!-- Cover -->
    <div class="card__cover">
        ...
    </div>

    <!-- Content -->
    <div class="card__content">
        ...
    </div>
    ...
</div>
```

## CSS

```css
.card {
    display: flex;
    flex-direction: column;
}

.card__cover {
    height: 20rem;
    width: 100%;
}

.card__content {
    /* Take available height */
    flex: 1;
}
```

{% demo %}
{% include "patterns/card.njk" %}
{% enddemo %}
