---
layout: layouts/post.njk
title: Questions and answers
description: Create a questions and answers section with CSS flexbox
keywords: css accordion, css faq, css flexbox
---

## HTML

```html
<!-- Collapsed question and answer item -->
<div class="questions-and-answers__item questions-and-answers__item--collapsed">
    <!-- Heading -->
    <div class="questions-and-answers__header">
        <!-- Question -->
        <div class="questions-and-answers__title">
            ...
        </div>

        <!-- The toggle icon sticks to the right -->
        <div class="questions-and-answers__toggle">
        </div>
    </div>

    <!-- Answer -->
    <div class="questions-and-answers__content">
        ...
    </div>
</div>

<!-- Expanded question and answer item -->
<div class="questions-and-answers__item questions-and-answers__item--expanded">
    ...
</div>
```

## CSS

```css
.questions-and-answers__item:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}
.questions-and-answers__header {
    align-items: center;
    display: flex;
    justify-content: center;
    cursor: pointer;
    padding: 0.5rem;
}
.questions-and-answers__toggle {
    margin-right: 0.25rem;
}
.questions-and-answers__title {
    /* Take the available width */
    flex: 1;
}
.questions-and-answers__content {
    padding: 0 0.5rem;
}

.questions-and-answers__item--collapsed .questions-and-answers__content {
    display: none;
}
.questions-and-answers__item--expanded .questions-and-answers__content {
    display: block;
}
```

{% demo %}
{% include "patterns/questions-and-answers.njk" %}
{% enddemo %}
