---
layout: layouts/post.njk
title: Tree diagram
description: Create a tree diagram with CSS
keywords: css sitemap, css tree diagram
---

## HTML

```html
<div class="tree-diagram">
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
.tree-diagram ul {
    display: flex;
    position: relative;

    /* Reset */
    list-style-type: none;
    margin: 0;
    padding: 1rem 0.5rem 0rem 0.5rem;
}

.tree-diagram ul ul::before {
    border-right: 1px solid #d1d5db;
    content: '';

    /* Position */
    position: absolute;
    top: 0;
    right: 50%;

    /* Size */
    height: 1rem;
    width: 50%;
}

.tree-diagram li {
    padding: 1rem 0.5rem 0rem 0.5rem;
    position: relative;

    /* Center the content */
    align-items: center;
    display: flex;
    flex-direction: column;
}

.tree-diagram li::before {
    border-right: 1px solid #d1d5db;
    border-top: 1px solid #d1d5db;
    content: '';

    /* Position */
    position: absolute;
    top: 0;
    right: 50%;

    /* Size */
    height: 1rem;
    width: 50%;
}

.tree-diagram li::after {
    border-top: 1px solid #d1d5db;
    content: '';

    /* Position */
    position: absolute;
    top: 0;
    right: 0;

    /* Size */
    width: 50%;
}

.tree-diagram li:first-child::before,
.tree-diagram li:last-child::after {
    /* Remove the top of border from the first and last items */
    border-top: none;
}

/* Add a root item if you want */
li.tree-diagram__root::before {
    border-right: none;
}
```

You can add a root item to the tree:

```html
<div class="tree-diagram">
    <ul>
        <li class="tree-diagram__root">
            ...
        </li>
    </ul>
</div>
```

{% demo %}
{% include "patterns/tree-diagram.njk" %}
{% enddemo %}
