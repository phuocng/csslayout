---
layout: layouts/post.njk
title: Wizard
description: Create a wizard with CSS flexbox
keywords: css flexbox, css stepper, css wizard
---

## HTML

```html
<div class="wizard">
    <!-- Step -->
    <div class="wizard__step">
        <div class="wizard__dot">
            <!-- The left connector -->
            <div class="wizard__connector"></div>

            <!-- The step number -->
            <div class="wizard__number">...</div>

            <!-- The right connector -->
            <div class="wizard__connector"></div>
        </div>

        <!-- Title of step -->
        ...
    </div>

    <!-- Repeat other steps -->
    ...
</div>
```

## CSS

```css
.wizard {
    display: flex;
}

.wizard__step {
    /* Make all steps have the same width */
    flex: 1;
}

.wizard__dot {
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;
}

.wizard__connector {
    flex: 1;
    height: 1px;
    background-color: #d1d5db;
}

.wizard__step:first-child .wizard__connector:first-child,
.wizard__step:last-child .wizard__connector:last-child {
    background-color: transparent;
}

.wizard__number {
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Rounded border */
    background-color: #d1d5db;
    border-radius: 9999px;
    height: 2rem;
    width: 2rem;

    /* OPTIONAL: Spacing between it and connectors */
    margin-left: 0.25rem;
    margin-right: 0.25rem;
}
```

{% demo %}{% include "covers/wizard.njk" %}{% enddemo %}
