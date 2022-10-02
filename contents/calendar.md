---
layout: layouts/post.njk
title: Calendar
description: Create a calendar with CSS grid
keywords: css calendar, css grid
---

## HTML

```html
<div class="calendar">
    <!-- Week days -->
    <div class="calendar__weekday">Mon</div>
    <div class="calendar__weekday">Tue</div>
    <div class="calendar__weekday">Wed</div>
    <div class="calendar__weekday">Thu</div>
    <div class="calendar__weekday">Fri</div>
    <div class="calendar__weekday">Sat</div>
    <div class="calendar__weekday">Sun</div>

    <!-- Days of the previous month -->
    <div class="calendar__day calendar__day--disabled">30</div>
    <div class="calendar__day calendar__day--disabled">31</div>

    <!-- Days of the current month -->
    <div class="calendar__day">1</div>
    <div class="calendar__day">2</div>

    <!-- The current day -->
    <div class="calendar__day calendar__day--current">...</div>

    <!-- Days of the next month -->
    <div class="calendar__day calendar__day--disabled">1</div>
    <div class="calendar__day calendar__day--disabled">2</div>
</div>
```

## CSS

```css
.calendar {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
}

.calendar__weekday {
    border-bottom: 1px solid #d1d5db;
    padding: 0.125rem;
}

.calendar__day {
    border-bottom: 1px solid #d1d5db;
    border-right: 1px solid #d1d5db;
    padding: 0.25rem;
    text-align: center;
}

.calendar__day--current {
    background-color: #3b82f6;
    color: #fff;
}

.calendar__day:nth-child(7n + 1) {
    border-left: 1px solid #d1d5db;
}

.calendar__day--disabled {
    color: #d1d5db;
}
```

{% demo %}{% include "covers/calendar.njk" %}{% enddemo %}
