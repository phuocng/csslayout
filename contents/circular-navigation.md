---
layout: layouts/post.njk
title: Circular navigation
description: Create a circular navigation with CSS flexbox
keywords: css circular navigation, css flexbox
---

## HTML

```html
<div class="circular-navigation">
    <!-- The trigger element that will show all circles when user clicks it -->
    ...

    <!-- A circle menu item -->
    <div class="circular-navigation__circle">
        <!-- The content -->
        <div class="circular-navigation__content">            
            ...
        </div>
    </div>

    <!-- Repeat menu items -->
    ...
</div>
```

## CSS

```css
.circular-navigation {
    position: relative;
}

.circular-navigation__circle {
    /* Position */
    position: absolute;
    top: 0;

    /*
    3rem is the distance from the item to the trigger element.
    Replace 0deg with 60deg, 180deg, 240deg, 300deg for another item
    in case you want to have a total of 6 menu items.
    The formulation is 360 / numberOfItems * indexOfItem
    */
    transform: rotate(0deg) translateX(-3rem);

    /* Must have the same size as the trigger element */
    height: 2rem;
    width: 2rem;
}

.circular-navigation__content {
    /*
    Rotate it to make it displayed vertically
    Replace -0deg with -60deg, -180deg, -240deg, -300deg for another item
    in case you want to have a total of 6 menu items.
    The formulation is -(360 / numberOfItems * indexOfItem)
    */
    transform: rotate(-0deg);

    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Take full size */
    height: 100%;
    width: 100%;
}
```

{% demo %}{% include "covers/circular-navigation.njk" %}{% enddemo %}
