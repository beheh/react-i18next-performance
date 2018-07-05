# react-i18next performance issue

Install by running
```
yarn
```

Run

```
yarn start
```

to see the number of renders in the console.

Look at `src/MyComponent.js` and play around with the number of components to see that they don't behave linearly and render much more often than necessary.

Play around with the number of components below. The number of renders climbs fast:
 - 1 component renders 6 times post-load
 - 2 components render 14 times post-load
 - 3 components render 24 times post-load
 - 4 components render 36 times post-load
 - 5 components render 50 times post-load

