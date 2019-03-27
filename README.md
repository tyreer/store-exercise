# Good Store

Hosted at: https://unruffled-euclid-838844.netlify.com/

## To run + build 
To run the app locally, use these commands from the root directory:
- `yarn install` 
- `yarn start`

To build for production, run:
- `yarn buld`


## Code layout

The root React component is `App.js`

Global base styles are in `App.css`

All other UI elements are in the `src` folder:
+ `components` are the React components
    + `Layout.js` sets up a shared styling theme and renders all UI as children components
  + Most style definitions are included in each component's `.js` file
+  `propTypes` contains the prop definitions for the mock data
+  `utils` contains functions that are useful in multiple components

Back in the root directory:

+ Mock data for the product items is stored in `mock-data.js`
+ JavaScript linting config is set in `.eslintrc` for quality assurance and consistency in JS conventions

## Technologies

+ Create React App
  + React Hooks
+ React Spring
+ Styled Components

I took this as an opportunity to get more familiar with using `React Hooks`. There are no class components and all state is managed via hooks.

Also explored the `Styled Components` css-in-js library. First time using it, but I thought it was great! Loved being able to nest rules as I'd done with `Sass` or `post-css css-next` projects, and generally write familiar CSS.

`React Spring` is also pretty new to me, so it was great to use it for the section transitions.





