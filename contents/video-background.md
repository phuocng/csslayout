---
layout: layouts/post.njk
title: Video background
description: Add video background with CSS flexbox
keywords: css flexbox, object fit cover
---

In this pattern, the video is displayed in the background.

## HTML

```html
<div class="video-background">
    <!-- The video container -->
    <div class="video-background__inner">
        <video class="video-background__video" src="...">
            ...
        </video>
    </div>

    <!-- The content -->
    <div class="video-background__content">
        ...
    </div>
</div>
```

## CSS

```css
.video-background {
    /* Used to position the video and content */
    position: relative;
}

.video-background__inner {
    /* Positioned at the top left corner */
    left: 0px;
    position: absolute;
    top: 0px;

    /* Take full size */
    height: 100%;
    width: 100%;

    /* Hide the scrollbar */
    overflow: hidden;
}

.video-background__video {
    object-fit: cover;

    /* Take full width */
    height: 100%;
    max-width: 100%;
}

.video-background__content {
    /* Positioned at the top left corner */
    left: 0px;
    position: absolute;
    top: 0px;

    /* Take full size */
    height: 100%;
    width: 100%;

    /* Center the content */
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
```

{% demo %}
{% include "patterns/video-background.njk" %}
{% enddemo %}
