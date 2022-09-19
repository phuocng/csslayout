---
layout: layouts/post.njk
title: Accordion
description: Create an accordion with CSS flexbox
keywords: css accordion, css flexbox
---

## HTML

```html
<!-- Container -->
<div class="accordion">
    <!-- Collapsed item -->
    <div class="accordion__item accordion__item--collapsed">
        <!-- Heading -->
        <div class="accordion__header">
            <!-- The toggle icon -->
            <div class="accordion__toggle">...</div>

            <!-- The title -->
            <div class="accordion__title">
                ...
            </div>
        </div>

        <!-- The content -->
        <div class="accordion__content">
            ...
        </div>
    </div>

    <!-- Expanded item -->
    <div class="accordion__item accordion__item--expanded">
        ...
    </div>

    <!-- Repeat other item -->
    ...
</div>
```

## CSS

```css
.accordion {
    /* Border */
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-bottom-color: transparent;
    border-radius: 4px;
}

.accordion__item {
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}

.accordion__header {
    /* Center the content horizontally */
    align-items: center;
    display: flex;

    cursor: pointer;
    padding: 16px;
}

.accordion__toggle {
    margin-right: 12px;
}

.accordion__title {
    /* Take remaining width */
    flex: 1;
}

.accordion__content {
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    padding: 16px;
}

.accordion__item--collapsed .accordion__content {
    display: none;
}
.accordion__item--expanded .accordion__content {
    display: block;
}
```

{% demo %}
{% include "covers/accordion.njk" %}
{% enddemo %}
