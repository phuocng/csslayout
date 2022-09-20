---
layout: layouts/post.njk
title: Timeline
description: Create a timeline with CSS flexbox
keywords: css flexbox, css timeline
---

## HTML

```html
<div class="timeline">
    <!-- Left vertical line -->
    <div class="timeline__line"></div>

    <!-- The timeline items timeline -->
    <div class="timeline__items">
        <!-- Each timeline item -->
        <div class="timeline__item">
            <!-- The circle and title -->
            <div class="timeline__top">
                <!-- The circle -->
                <div class="timeline__circle"></div>

                <!-- The title -->
                <div class="timeline__title">
                    ...
                </div>
            </div>

            <!-- The description -->
            <div class="timeline__desc">
                ...
            </div>
        </div>

        <!-- Repeat other items -->
        ...
    </div>
</div>
```

## CSS

```css
.timeline {
    /* Used to position the left vertical line */
    position: relative;
}

.timeline__line {
    /* Border */
    border-right: 2px solid #d1d5db;

    /* Positioned at the left */
    left: 0.75rem;
    position: absolute;
    top: 0px;

    /* Take full height */
    height: 100%;
}

.timeline__items {
    /* Reset styles */
    list-style-type: none;
    margin: 0px;
    padding: 0px;
}

.timeline__item {
    margin-bottom: 8px;
}

.timeline__top {
    /* Center the content horizontally */
    align-items: center;
    display: flex;
}

.timeline__circle {
    /* Rounded border */
    background-color: #d1d5db;
    border-radius: 9999px;

    /* Size */
    height: 1.5rem;
    width: 1.5rem;
}

.timeline__title {
    /* Take available width */
    flex: 1;
    margin-left: 0.5rem;
}

.timeline__desc {
    /* Make it align with the title */
    margin-left: 2rem;
}
```

{% demo %}{% include "patterns/timeline.njk" %}{% enddemo %}
