# js-parent-selector
Like querySelector, except bubbling upwards.

NOTE: No longer relevant, use Element.closest() instead.
https://developer.mozilla.org/en-US/docs/Web/API/Element/closest

Example:
```javascript
let currentTodo = buttonPressed.parentSelector("ul.todo");
```

`.parentSelector` iterates over parents upwards and returns the first (closest / lowest) element that matches the selector. Exactly opposite of `.querySelector` which scans children and returns the first (closest / highest) element matching the selector.
