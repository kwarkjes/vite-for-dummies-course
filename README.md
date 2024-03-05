# In this chapter

We will try to use some of the HMR magic in our code by letting vite know how it should handle the update

- **Step 1**:  Open the `main.js` file and change `counter.textContent` to another value
  - Notice that the page does a full reload to update the value
- **Step 2**: Add `import.meta.hot.accept()` to your to accept HMR
  - The page is not refreshing and the value is being updated
  - Open your network tab and notice that a new file is being fetched after every save
- **Step 3**: Now uncomment the interval and change the `incrementBy` to another value
  - Notice that the counter is not increasing only once. The more changes you make the more intevals you will see
  - Cleaning up the interval before updating it seems to solve the issue
- **Step 4**: Clean up the old interval before receiving the update
  - use the `vite:beforeUpdate` to clean up the interval. This clears the interval before receiving the new updated module
- **Step 5**: Clean up by using `dispose`
  - What you have done manually can be done throw vite by letting vite know that it should clean up the side effects.
  - Delete/comment the `vite:beforeUpdate` part and use the `dispose` method instead. You will notice the the effect is the same


Here are a couple of handy HMR methods you might want to play around with

```js
  accept()      // Accept HMR updates
  dispose()     // Clean-up any persistent side effects
  prune()       // Clean-up when it's removed from the page
  invalidate()  // Can't handle a HMR update
```