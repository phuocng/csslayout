---
layout: layouts/post.njk
title: Radial progress bar
description: Create a radial progress bar with CSS flexbox
keywords: css clip rect, css flexbox, css progress bar
---

## HTML

```html
<div class="radial-progress-bar">
    <!-- Show number of percentages -->
    <div class="radial-progress-bar__percentages">
        ...
    </div>

    <!-- The curve -->
    <div class="radial-progress-bar__curve">
        <!-- The first half -->
        <div class="radial-progress-bar__half radial-progress-bar__half--first"></div>

        <!-- The second half -->
        <div class="radial-progress-bar__half radial-progress-bar__half--second"></div>
    </div>
</div>
```

## CSS

```css
:root {
    --radial-progress-bar-size: 8rem; 
    --radial-progress-bar-border-width: 0.75rem;
}

.radial-progress-bar {
    position: relative;
    height: var(--radial-progress-bar-size);
    width: var(--radial-progress-bar-size);
}

.radial-progress-bar__percentages {
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Rounded border */
    border: var(--radial-progress-bar-border-width) solid #d1d5db;
    border-radius: 9999px;

    /* Size */
    height: 100%;
    width: 100%;
}

.radial-progress-bar__curve {
    /* Position */
    left: 0;
    position: absolute;
    top: 0;

    /* Take full size */
    height: 100%;
    width: 100%;

    /* If percentages is less than 50 */
    /* clip: rect(
        0px,
        var(--radial-progress-bar-size),
        var(--radial-progress-bar-size),
        calc(var(--radial-progress-bar-size) * 0.5),
        0px
    ); */

    /* If percentages is greater than or equals to 50 */
    clip: rect(auto, auto, auto, auto);
}

.radial-progress-bar__half {
    /* Take full size */
    height: 100%;
    position: absolute;
    width: 100%;

    /*
    Background color of curve.
    The border width should be the same as the area showing the percentages
    */
    border: var(--radial-progress-bar-border-width) solid #3b82f6;
    border-radius: 9999px;
}

.radial-progress-bar__half--first {
    /* Position */
    clip: rect(
        0px,
        calc(var(--radial-progress-bar-size) * 0.5),
        var(--radial-progress-bar-size),
        0px
    );
    
    /* Number of percentages * 360 / 100 */
    transform: rotate(270deg);
}

.radial-progress-bar__half--second {
    /* Position */
    clip: rect(
        0px,
        calc(var(--radial-progress-bar-size) * 0.5),
        var(--radial-progress-bar-size),
        0px
    );

    /* If percentages is less than 50 */
    /* transform: rotate(0deg); */

    /* If percentages is greater than or equals to 50 */
    transform: rotate(180deg);
}
```

{% demo %}
{% include "patterns/radial-progress-bar.njk" %}
{% enddemo %}
