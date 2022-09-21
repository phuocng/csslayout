---
layout: layouts/post.njk
title: Upload button
description: Create an upload button with CSS flexbox
keywords: css file input, css flexbox, css upload button
---

## HTML

```html
<div class="upload-button">
    <!-- The real file input -->
    <input type="file" class="upload-button__input" />

    <!-- The upload icon -->
    <div class="upload-button__icon">...</div>

    <!-- The label -->
    ...
</div>
```

## CSS

```css
.upload-button {
    /* Used to position the input */
    position: relative;

    /* Center the content */
    align-items: center;
    display: flex;

    /* Border */
    border: 1px solid #d1d5db;
    border-radius: 0.25rem;
    padding: 0.25rem 0.5rem;
}

.upload-button__input {
    /* Take the full size */
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;

    /* Make it transparent */
    opacity: 0;
}

.upload-button__icon {
    margin-right: 0.5rem;
}
```

{% demo %}{% include "covers/upload-button.njk" %}{% enddemo %}
