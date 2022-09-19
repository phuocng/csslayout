---
layout: layouts/post.njk
title: Fixed at corner
description: Fix an element at corner with CSS
keywords: css fixed
---

## HTML

```html
<div class="fixed-at-corner">
    <!-- Top-left corner -->
    <div class="fixed-at-corner__corner fixed-at-corner__corner--tl">
        ...
    </div>

    <!-- Top-right corner -->
    <div class="fixed-at-corner__corner fixed-at-corner__corner--tr">
        ...
    </div>

    <!-- Bottom-right corner -->
    <div class="fixed-at-corner__corner fixed-at-corner__corner--br">
        ...
    </div>

    <!-- Bottom-left corner -->
    <div class="fixed-at-corner__corner fixed-at-corner__corner--bl">    
        ...
    </div>
</div>
```

## CSS

```css
.fixed-at-corner {
    position: relative;
}

.fixed-at-corner__corner {
    position: absolute;
}

.fixed-at-corner__corner--tl {
    left: 0;
    top: 0;
}

.fixed-at-corner__corner--tr {
    top: 0;
    right: 0;
}

.fixed-at-corner__corner--br {
    bottom: 0;
    right: 0;
}

.fixed-at-corner__corner--bl {
    bottom: 0;
    left: 0;
}
```

{% demo %}
{% include "patterns/fixed-at-corner.njk" %}
{% enddemo %}
