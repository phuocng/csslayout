---
layout: layouts/post.njk
title: Input addon
description: Create an input add-on with CSS flexbox
keywords: css flexbox, css input add-on
---

## HTML

```html
<!-- Add-on prepended -->
<div class="input-addon">
    <!-- Add-on -->
    <div class="input-addon__addon input-addon__addon--prepended">
        ...
    </div>

    <!-- Input -->
    <input type="text" class="input-addon__input" />
</div>

<!-- Add-on appended -->
<div class="input-addon">
    <!-- Input -->
    <input type="text" class="input-addon__input" />

    <!-- Add-on -->
    <div class="input-addon__addon input-addon__addon--appended">
        ...
    </div>
</div>

<!-- Appended and prepended add-ons -->
<div class="input-addon">
    <!-- Add-on -->
    <div class="input-addon__addon input-addon__addon--prepended">
        ...
    </div>

    <!-- Input -->
    <input type="text" class="input-addon__input" />

    <!-- Add-on -->
    <div class="input-addon__addon input-addon__addon--appended">
        ...
    </div>
</div>
```

## CSS

```css
.input-addon {
    border: 1px solid #d1d5db;
    border-radius: 0.25rem;
    display: flex;
}

.input-addon__input {
    border: none;

    /* Take the remaining width */
    flex: 1;
}

.input-addon__addon {
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;
}

.input-addon__addon--prepended {
    border-right: 1px solid #d1d5db;
}
.input-addon__addon--appended {
    border-left: 1px solid #d1d5db;
}
```

{% demo %}{% include "patterns/input-addon.njk" %}{% enddemo %}
