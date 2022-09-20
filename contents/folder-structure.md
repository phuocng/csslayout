---
layout: layouts/post.njk
title: Folder structure
description: Create a folder structure with CSS
keywords: css folder structure, css folder tree
---

## HTML

```html
<div class="folder-structure">
    <ul>
        <li>
            <!-- Content -->
            ...

            <!-- Sub items -->
            <ul>
                <li>
                    <!-- Content -->
                    ...

                    <!-- Sub items -->
                    <ul>
                        <li>...</li>
                        <li>...</li>
                        ...
                    </ul>
                </li>
                <li>...</li>
                ...
            </ul>
        </li>
        
        <!-- Repeat other items -->
        ...
    </ul>
</div>
```

## CSS

```css
:root {
    --folder-structure-item-height: 0.5rem;
    --folder-structure-item-margin-left: 2.25rem;
    --folder-structure-item-padding-top: 0.5rem;
}

.folder-structure ul {
    /* Reset */
    list-style-type: none;
    margin: 0;
}

.folder-structure li {
    padding: var(--folder-structure-item-padding-top) 0rem 0rem 0rem;
    position: relative;
}

.folder-structure li::before {
    border-left: 1px solid #d1d5db;
    content: '';

    /* Position */
    left: 0;
    position: absolute;
    top: 0;
    transform: translate(calc(-1 * var(--folder-structure-item-margin-left)), 0);

    /* Size */
    height: 100%;
}

.folder-structure li::after {
    border-bottom: 1px solid #d1d5db;
    content: '';

    /* Position */
    left: 0;
    position: absolute;
    top: calc(var(--folder-structure-item-padding-top) + var(--folder-structure-item-height) / 2);
    transform: translate(-100%, 0);

    /* Size */
    width: var(--folder-structure-item-margin-left);
}

/* Remove the border from the last item */
.folder-structure li:last-child::before {
    height: calc(
        var(--folder-structure-item-padding-top) + var(--folder-structure-item-height) / 2
    );
}
```

{% demo %}
{% include "patterns/folder-structure.njk" %}
{% enddemo %}
