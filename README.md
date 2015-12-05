# angular-xGallerify
AngularJS directive for [jquery.xGallerify](https://github.com/xremix/xGallerify)

## Demo

[simple demo](https://rawgit.com/JohnnyTheTank/angular-xGallerify/master/demo/index.html)

## Usage

1. Install
    1. via [bower](http://bower.io/): `bower install --save angular-xGallerify`
    2. via downloaded files
2. Add `jtt_angular_xgallerify` to your application's module dependencies.
3. Include dependencies in your HTML.
    1. When using bower
    ```html
    <script src="bower_components/jquery/dist/jquery.min.js"></script>
    <script src="bower_components/angular/angular.min.js"></script>
    <script src="bower_components/xGallerify/dist/jquery.xgallerify.min.js"></script>
    ```
    2. When using downloaded files
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

### Parameters
Set your xGallerify parameters like this:
```HTML
<div xgallerify="{ 'margin':10, 'mode':'bootstrap' }">
</div>
```

Get the full list of parameters at the original project page: [jquery.xGallerify](https://github.com/xremix/xGallerify#parameters)