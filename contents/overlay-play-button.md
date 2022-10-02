---
layout: layouts/post.njk
title: Overlay play button
description: Create an overlay play button with CSS flexbox
keywords: css flexbox
---

## HTML

```html
<div class="overlay-play-button">
    <!-- The video element -->
    <video src="..." />

    <!-- The overlay area -->
    <div class="overlay-play-button__overlay">
        <!-- The player button -->
        <div class="overlay-play-button__play">...</div>
    </div>
</div>
```

## CSS

```css
.overlay-play-button {
    /* Used to position the overlay */
    position: relative;
}

.overlay-play-button__overlay {
    /* Position */
    left: 0;
    position: absolute;
    top: 0;

    /* Take full size */
    height: 100%;
    width: 100%;

    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Add a dark background */
    background-color: rgba(0, 0, 0, 0.25);
}

.overlay-play-button__play {
    border: 0.25rem solid #fff;
    border-radius: 9999px;
    height: 3rem;
    width: 3rem;

    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;
}
```

{% demo %}
{% include "covers/overlay-play-button.njk" %}
{% enddemo %}
