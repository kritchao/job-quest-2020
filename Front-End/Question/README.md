## Front-end Questions

### 1. Explain the what's similar & difference between `cookie` / `localStorage` / `sessionStorage`.

    Cookie is more different than other by its size of less than 4 kB but able to access through server-side and tranfer data via HTTP Request Both LocalStorage and SessionStorage have similar size to 5-10 MB but only SessionStorage has auto-expire option 


### 2. Today React have hooks. Do we still need a class component? If your answer is yes then which case that we still need to use class component.

    Now a day I would say no, but Class component still has something Function component don't have, getSnapshotBeforeUpdate, getDerivedStateFromError and componentDidCatch

### 3. Breifly describe how *Virtual DOM* works.

    It's like a representation of Real DOM by keep the UI in the memory and sync with the real one.

### 4. Consider this React's components tree

```
Apps > ComponentA > ComponentB > ComponentC > ComponentD > ComponentE
```

### If we have a state at `Apps` component, and `ComponentE` component want to access that state value. How do you implements this?

    By send down props form A to E or use Redux which use to hold the entire state of the application and every components are accessible

### 5. What different between using `relative` / `absolute` / `fixed` to position the element.

    you can set position on 'relative' and it will be relative to the normal of its position, 'absolute' is independent positioned but inside the ancestor element, 'fixed' is positioned to viewport, can not move no matter you scroll.

### 6. Explain the different between using `callback` / `Promise` / `async await`. When to use and when not to.

    Callback is syncronous operation but others are ascyncronous. Prevent callback hell by using either Promise or async/await, async/await always return promise but sometimes 'Promise' don't  and can't run callback after catch an error.