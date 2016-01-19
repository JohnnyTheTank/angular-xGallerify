# angular-xGallerify
AngularJS directive for [jquery.xGallerify](https://github.com/xremix/xGallerify)

## Demos

![angular-xGallerify Demo](demo.jpg)

- [Simple demo](https://rawgit.com/JohnnyTheTank/angular-xGallerify/master/demo/index.html)
- [Dynamic demo (pictures from twitter)](https://rawgit.com/JohnnyTheTank/apiNG-design-xgallerify/master/demo/) - based on [apiNG](https://github.com/JohnnyTheTank/apiNG)

## Usage

1. Install via either [bower](http://bower.io/), [npm](https://www.npmjs.com/) or downloaded files:
    1. via bower: `bower install --save angular-xGallerify`
    2. via npm: `npm install --save angular-xgallerify`
    3. via [downloaded files](https://github.com/JohnnyTheTank/angular-xGallerify/zipball/master)
2. Add `jtt_angular_xgallerify` to your application's module dependencies.
3. Include dependencies in your HTML.
    1. When using bower
    ```html
    <script src="bower_components/jquery/dist/jquery.min.js"></script>
    <script src="bower_components/angular/angular.min.js"></script>
    <script src="bower_components/xGallerify/dist/jquery.xgallerify.min.js"></script>
    ```
    2. When using npm
    ```html
    <script src="node_modules/jquery/dist/jquery.min.js"></script>
    <script src="node_modules/angular/angular.min.js"></script>
    <script src="node_modules/xgallerify/dist/jquery.xgallerify.min.js"></script>
    ```
    3. When using downloaded files
    ```html
    <script src="YOUR_PATH/jquery.min.js"></script>
    <script src="YOUR_PATH/angular.min.js"></script>
    <script src="YOUR_PATH/jquery.xgallerify.min.js"></script>
    ```
4. Use the directive `xgallerify` as **html attribute**

### Sample
```HTML
<div xgallerify>
    <img src="http://placehold.it/600x400">
    <img src="http://placehold.it/600x320">
    <img src="http://placehold.it/600x320">
    <img src="http://placehold.it/600x400">
    <img src="http://placehold.it/600x600">
    <img src="http://placehold.it/600x400">
    <img src="http://placehold.it/600x600">
    <img src="http://placehold.it/600x400">
    <img src="http://placehold.it/600x400">
    <img src="http://placehold.it/600x600">
    <img src="http://placehold.it/600x320">
    <img src="http://placehold.it/600x400">
    <img src="http://placehold.it/600x400">
</div>
```

### Parameters
Set your xGallerify parameters like this:
```HTML
<div xgallerify="{ 'margin':10, 'mode':'bootstrap' }">
</div>
```
#### All parameters
Get the **full list** of parameters at the **original project page: [jquery.xGallerify](https://github.com/xremix/xGallerify#parameters)**

### Compatibility
```HTML
<div xgallerify>
</div>
```
is **equal** to
```HTML
<div data-xgallerify>
</div>
```

