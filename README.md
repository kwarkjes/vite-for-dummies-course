# In this chapter

By adding a custom `handleHotUpdate` hook to our plugin, we are able to notify vite that we will take care of the HMR part. In this case we are pushing a custom event throw the WS connection.

By listening to that event in our code we can target exactly what part of the DOM should be changed without a full reload

- Add `handleHotUpdate` and push a custom event
- Add a listner on the code
- Add your logic that should be executed whenever that event triggers
- Run `yarn build` to build the project 
    - Notice that Vite cleans up the HMR part for you
- Disable the custom HMR code in the `main.js` file and enable the injection of the script tag in the plugin instead `plugins/arrow-parser.js`
    - the `transformIndexHtml` function will inject this script => `plugins/hmr.js`that will run in the browser. That can now take care of the HMR logic that we want to implement
    - This way we can keep our code base clean and move the logic to the plugin instead