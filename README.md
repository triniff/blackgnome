
## Getting Started
```
git clone https://github.com/triniff/blackgnome.git
npm install
npm run build
npm start
```
- Navigate to http://localhost:8080 in a browser. 
- Save a file in the project to refresh the browser. 
- Press Control+C in the terminal to stop serving.

## Usage
### Build
`npm run build` - Creates the project in **production** mode (minified) and outputs to the dist folder.   
`npm run watch` - Creates the project in **development** mode (unminified, sourcemap enabled). This mode watches for changes and outputs to the dist folder.   
`npm start` - Creates the project in **development** mode (unminified, sourcemap enabled). This mode watches for changes, outputs to the dist folder and live reloades the page.

### Test
`npm run test` - Runs lint tests (+ additional unit and e2e tests can be added here as needed)   
`npm run lint` - Runs eslint and stylelint tests   
`npm run lint:js` - Runs eslint test   
`npm run lint:css` - Runs stylelint test

### Tools
`npm run generate:images` - Create a placeholder image (Edit `tools/image-generator.js` to change the image size)

## About

### Webpack 4
#### Webpack: Builds
The webpack build creates a `dist` folder that closely mimics the `src` folder. 
- In production mode, the `dist` folder contains files that are minified & compressed. 
- In development mode, files are kept unminified with sourcemapping turned on as needed & no compression output. 
- Webpack server is available to speed up development via live browser refreshes on code change while preserving the ability to inspect the `dist` folder. The `src` directory contains starter files to get the project off the ground quickly.

#### Webpack: Process
The webpack task runner builds the site with the following commands:
- `npm run build` will build production. 
- `npm run watch` builds development mode and watches for file changes. 
- `npm run start` builds development mode, watches for file changes, opens the browser when first ran and refreshes the browser when files change.
1. The `dist` folder is cleaned and rebuilt or modified.
2. Images and Fonts are copied from `src/images` -> `dist/images` and `src/fonts` -> `dist/fonts`.
3. Favicons are generated and injected into the dist index.html file from the `src/favicon.png` file. 
4. `src/index.html` is copied to `dist/index.html`
5. [Optional]: Individual, global bootstrap components are injected into the index.js.
6. CSS files imported into `src/css/main.css` are bundled together and minified.
8. Files are compressed with gzip compression.

### Bootstrap 4
#### Bootstrap: JS Files
Bootstap 4 is imported in the index.js file via `bootstrap.bundle` which contains the full bootstrap JavaScript plus the `popper.js` tooltip dependency. Below the `bootstrap.bundle` import, comments contain other methods to import bootstrap. End-users may choose to import `bootstrap.bundle`, `bootstrap`, or individual components (**recommended to minimize bundle size**).

#### Bootstrap: CSS Files
Bootstrap 4 is imported into main.css via `@import "~bootstrap/scss/bootstrap";`. This imports the full bootstrap 4 CSS. Optional, individual components can be imported using the commented out `@import` rules in this file (**recommended to minimize bundle size**).

### File Structure
`src` file structure
```
|-css/
|-fonts/
|--OpenSans/
|--[font_styles]/
|-images/
|-js/index.js
|-index.html
|-favicon.png
```

`dist` file structure
```
/* All files minified & gzipped */
|-css/main.css
|-fonts/
|--OpenSans/
|--[font_styles]/
|-images/
|-js/index.js
|-index.html
|-[favicons]
```
