# Sample site with react pro

> 🎉 React + Webpack boilerplate + Redux + helmet

Sample react website 

- React 16
- React Router 4
- Redux & DevTools
- Hot reloading
- SCSS
- Static file serving

### Run locally

```
npm run dev
```

**Add a new route**

Go to `src/routes.js` and import a new container, add the URL to the schema so that you can use the `route('name')` helper and add it to the React Router switch.

**Add a new reducer**

Go to `src/reducers/index.js` and import a new reducer, and add the name to the list in the `rootReducer`.

**View application state**

Press <kbd>Ctrl</kbd> + <kbd>H</kbd> to open the Redux Devtools.

### Build production

In production mode, webpack outputs to the `public` directory, allowing the production server to serve static files.

```
npm run deploy
```

### TODO

Some good thing could added on this project :

- [ ] Async component for route chunking
- [ ] Styled components instead of SCSS
- [ ] Make a good template 
- [ ] Create admin part with templates
