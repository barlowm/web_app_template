# Simple Web Application Project

Scripts resident in the `package.json` file

```
> npm run setup - Does all the installation and setup for building the app
> npm run test - Runs all the tests
> npm run runit - Builds and launches the web app and watches for any changes to the source. If a change occurs, the app is rebuilt and the browser is refreshed automatically
```

Gulp tasks which can be run manually (can also be seen by running `gulp` from a command line process)

```
Available tasks
  BrowserBuild  Combine any Script files into a single file and move to build folder 
  JS            For Node - Build as necessary any JS files and move to build folder
  build         Build the entire application by running individual processes 
      [html, misc, js, css]
  clean         Cleans out the ./build folder
  connect       Launches the application in a local server on a given port
  css           Combine CSS files into a single file and move move to build folder
  help          Display this help text
  html          Copy any HTML pages into the build folder
  js            Combine script files into a single file and move to build folder
  lint          Runs ESLint on all the source modules
  misc          Move any misc assets from the root into the build folder
  pretty        Runs Prettier on all the source modules. Run before BUILD
  reload        Reloads the browsers after any changes as a result of a rebuild
  runit         Run the application, 
      watch for any changes in any of the assets and 
      rebuild as necessary [build, watch]
  test          Runs MOCHA tests
  watch         Watch for any changes in any of the assets. 
      Rebuild/reload browser as needed [connect]
```

