---
layout: layouts/post.njk
title: Feature comparison
description: Create a feature comparison list with CSS flexbox
keywords: css feature comparison, css flexbox
---

## HTML

```html
<div class="feature-comparison">
    <!-- Feature name -->
    <div class="feature-comparison__feature">
        ...
    </div>

    <!-- The model -->
    <div class="feature-comparison__model">
        <!--
        For the first row: display the model name (Basic, Pro, etc.)
        From the second row: display a yes/no icon indicating the feature is available or not
        -->
        ...
    </div>

    <!-- Repeated other models -->
    ...
</div>

<!-- Repeated items -->
...
```

## CSS

```css
.feature-comparison {
    align-items: center;
    display: flex;

    /* Bottom border */
    border-bottom: 1px solid #d1d5db;

    /* Spacing */
    padding: 0.25rem 0;
}

.feature-comparison__feature {
    /* Take available width */
    flex: 1;
}

.feature-comparison__model {
    /* Center the content */
    display: flex;
    justify-content: center;
}
```

{% demo %}
{% include "patterns/feature-comparison.njk" %}
{% enddemo %}
