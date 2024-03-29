(function webpackUniversalModuleDefinition(root, factory) {
  if(typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if(typeof define === 'function' && define.amd)
    define([], factory);
  else if(typeof exports === 'object')
    exports["particlejs"] = factory();
  else
    root["particlejs"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/   // The module cache
/******/   var installedModules = {};
/******/
/******/   // The require function
/******/   function __webpack_require__(moduleId) {
/******/
/******/     // Check if module is in cache
/******/     if(installedModules[moduleId]) {
/******/       return installedModules[moduleId].exports;
/******/     }
/******/     // Create a new module (and put it into the cache)
/******/     var module = installedModules[moduleId] = {
/******/       i: moduleId,
/******/       l: false,
/******/       exports: {}
/******/     };
/******/
/******/     // Execute the module function
/******/     modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/     // Flag the module as loaded
/******/     module.l = true;
/******/
/******/     // Return the exports of the module
/******/     return module.exports;
/******/   }
/******/
/******/
/******/   // expose the modules object (__webpack_modules__)
/******/   __webpack_require__.m = modules;
/******/
/******/   // expose the module cache
/******/   __webpack_require__.c = installedModules;
/******/
/******/   // define getter function for harmony exports
/******/   __webpack_require__.d = function(exports, name, getter) {
/******/     if(!__webpack_require__.o(exports, name)) {
/******/       Object.defineProperty(exports, name, {
/******/         configurable: false,
/******/         enumerable: true,
/******/         get: getter
/******/       });
/******/     }
/******/   };
/******/
/******/   // define __esModule on exports
/******/   __webpack_require__.r = function(exports) {
/******/     Object.defineProperty(exports, '__esModule', { value: true });
/******/   };
/******/
/******/   // getDefaultExport function for compatibility with non-harmony modules
/******/   __webpack_require__.n = function(module) {
/******/     var getter = module && module.__esModule ?
/******/       function getDefault() { return module['default']; } :
/******/       function getModuleExports() { return module; };
/******/     __webpack_require__.d(getter, 'a', getter);
/******/     return getter;
/******/   };
/******/
/******/   // Object.prototype.hasOwnProperty.call
/******/   __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/   // __webpack_public_path__
/******/   __webpack_require__.p = "";
/******/
/******/
/******/   // Load entry module and return exports
/******/   return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/asset-shapes.ts
/**
 * アセットを含むオブジェクトです。このクラスは将来変更する可能性が高いので deprecated とします。
 * 利用しないでください。
 * @type {{}}
 */
var Assets = {};
var asset_shapes_images = {};
var asset_shapes_createjs = window["createjs"];
var ss = {};
(function (lib, img, cjs, ss) {
    var p; // shortcut to reference prototypes
    // library properties:
    lib.properties = {
        width: 550,
        height: 400,
        fps: 24,
        color: "#999999",
        manifest: []
    };
    // symbols:
    (lib.triangle = function () {
        this.initialize();
        // レイヤー 1
        this.shape = new cjs.Shape();
        this.shape.graphics
            .beginFill("#FFFFFF")
            .beginStroke()
            .moveTo(-0.7, -27.8)
            .lineTo(32, 27.1)
            .lineTo(-32, 27.8)
            .closePath();
        this.shape.setTransform(0, -7);
        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-32, -34.8, 64, 55.7);
    (lib.star_10 = function () {
        this.initialize();
        // レイヤー 1
        this.shape = new cjs.Shape();
        this.shape.graphics
            .beginFill("#FFFFFF")
            .beginStroke()
            .moveTo(-4.3, 18.3)
            .lineTo(-19.9, 29.3)
            .lineTo(-14.1, 10.3)
            .lineTo(-32, 10.3)
            .lineTo(-19.7, 0.7)
            .lineTo(-31.2, -8.7)
            .lineTo(-15.2, -8.8)
            .lineTo(-21.7, -26.4)
            .lineTo(-5.4, -16.4)
            .lineTo(-0.2, -31.8)
            .lineTo(4.4, -17.6)
            .lineTo(17.8, -27.4)
            .lineTo(13.1, -8.5)
            .lineTo(30.3, -8.1)
            .lineTo(19.9, 0.1)
            .lineTo(32, 8.4)
            .lineTo(12.8, 9.5)
            .lineTo(18.2, 29.8)
            .lineTo(4.9, 20)
            .lineTo(1.4, 31.8)
            .closePath();
        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-32, -31.7, 64, 63.6);
    (lib.star = function () {
        this.initialize();
        // レイヤー 1
        this.shape = new cjs.Shape();
        this.shape.graphics
            .beginFill("#FFFFFF")
            .beginStroke()
            .moveTo(-0.2, 17.3)
            .lineTo(-20.2, 31.5)
            .lineTo(-13, 7.4)
            .lineTo(-32, -8)
            .lineTo(-7.8, -8.4)
            .lineTo(0.3, -32)
            .lineTo(8, -8.2)
            .lineTo(32, -7.4)
            .lineTo(12.8, 7.5)
            .lineTo(19.4, 32)
            .closePath();
        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-32, -32, 64, 64);
    (lib.square = function () {
        this.initialize();
        // レイヤー 1
        this.shape = new cjs.Shape();
        this.shape.graphics
            .beginFill()
            .beginStroke("#FFFFFF")
            .setStrokeStyle(8, 1, 1)
            .moveTo(-32, -32)
            .lineTo(32, -32)
            .lineTo(32, 32)
            .lineTo(-32, 32)
            .closePath();
        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-36, -36, 72, 72);
    (lib.reverse_blur_circle = function () {
        this.initialize();
        // レイヤー 1
        this.shape = new cjs.Shape();
        this.shape.graphics
            .beginFill()
            .beginStroke("#FFFFFF")
            .setStrokeStyle(8, 1, 1)
            .moveTo(32, 0)
            .curveTo(32, 13.2, 22.6, 22.6)
            .curveTo(13.3, 32, 0, 32)
            .curveTo(-13.2, 32, -22.7, 22.6)
            .curveTo(-32, 13.2, -32, 0)
            .curveTo(-32, -13.3, -22.7, -22.7)
            .curveTo(-13.2, -32, 0, -32)
            .curveTo(13.3, -32, 22.6, -22.7)
            .curveTo(32, -13.3, 32, 0)
            .closePath();
        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-36, -36, 72, 72);
    (lib.kirakira2 = function () {
        this.initialize();
        // レイヤー 1
        this.shape = new cjs.Shape();
        this.shape.graphics
            .beginFill("#FFFFFF")
            .beginStroke()
            .moveTo(-4, 9.5)
            .curveTo(-7.8, 0, -13.4, -0.1)
            .curveTo(-7.8, -0.2, -4, -9.9)
            .curveTo(-0.1, -19.2, 0, -32)
            .curveTo(0.1, -19.2, 4, -9.9)
            .curveTo(8, -0.2, 13.4, -0.1)
            .curveTo(8, 0, 4, 9.5)
            .curveTo(0.1, 19, 0, 32)
            .curveTo(-0.1, 19, -4, 9.5)
            .closePath();
        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-13.4, -32, 26.8, 64);
    (lib.kirakira = function () {
        this.initialize();
        // レイヤー 1
        this.shape = new cjs.Shape();
        this.shape.graphics
            .beginFill("#FFFFFF")
            .beginStroke()
            .moveTo(-9.6, 9.3)
            .curveTo(-18.9, 0, -32, -0.1)
            .curveTo(-18.9, -0.2, -9.6, -9.6)
            .curveTo(-0.2, -19, -0.1, -32)
            .curveTo(0, -19, 9.4, -9.6)
            .curveTo(18.9, -0.2, 32, -0.1)
            .curveTo(18.9, 0, 9.4, 9.3)
            .curveTo(0, 18.8, -0.1, 32)
            .curveTo(-0.2, 18.8, -9.6, 9.3)
            .closePath();
        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-32, -32, 64, 64);
    (lib.heart = function () {
        this.initialize();
        // レイヤー 1
        this.shape = new cjs.Shape();
        this.shape.graphics
            .beginFill("#FFFFFF")
            .beginStroke()
            .moveTo(-20.2, 10)
            .lineTo(-24.8, 3.5)
            .curveTo(-27, 0.1, -28.5, -3.1)
            .curveTo(-30.1, -6.4, -31.1, -9.5)
            .curveTo(-32, -13, -32, -16)
            .curveTo(-32, -19.7, -30.4, -22.7)
            .curveTo(-29.1, -25.4, -26.6, -27.4)
            .curveTo(-24, -29.1, -21, -30.1)
            .curveTo(-18.1, -31.1, -15, -31.1)
            .curveTo(-11.7, -31.1, -8.8, -29.9)
            .curveTo(-6.4, -29, -4.5, -27.4)
            .curveTo(-3, -25.9, -1.7, -23.9)
            .lineTo(0, -20.8)
            .lineTo(1.7, -23.9)
            .curveTo(3, -25.9, 4.5, -27.4)
            .curveTo(6.6, -29.1, 8.8, -29.9)
            .curveTo(11.7, -31.1, 15.2, -31.1)
            .curveTo(18.4, -31.1, 21.3, -30.1)
            .curveTo(24.2, -29.1, 26.7, -27.2)
            .curveTo(29.1, -25.3, 30.5, -22.6)
            .curveTo(32, -19.7, 32, -16.1)
            .curveTo(32, -13.3, 31, -9.7)
            .curveTo(30.2, -6.5, 28.5, -3.2)
            .curveTo(27.1, 0, 24.9, 3.3)
            .lineTo(20.3, 9.7)
            .curveTo(13.4, 17.7, 9.7, 21.6)
            .lineTo(0, 31)
            .curveTo(-13.6, 18.3, -20.2, 10)
            .closePath();
        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-32, -31, 64, 62.1);
    (lib.flower = function () {
        this.initialize();
        // レイヤー 1
        this.shape = new cjs.Shape();
        this.shape.graphics
            .beginFill("#FFFFFF")
            .beginStroke()
            .moveTo(4, 27.3)
            .curveTo(0.5, 23.7, 0.5, 18.9)
            .lineTo(0.5, 15.2)
            .lineTo(-0.5, 15.2)
            .lineTo(-0.7, 18.9)
            .curveTo(-0.9, 24, -4.1, 27.6)
            .curveTo(-7.4, 31.1, -12.1, 31.1)
            .curveTo(-17, 31.1, -20.8, 27.5)
            .curveTo(-24.7, 23.7, -24.7, 19.1)
            .curveTo(-24.7, 15.3, -22.2, 12.1)
            .curveTo(-19.7, 8.8, -16.1, 7.7)
            .lineTo(-12.5, 6.4)
            .lineTo(-12.7, 5.8)
            .lineTo(-13, 5.4)
            .lineTo(-16.5, 6.6)
            .lineTo(-20.2, 7.1)
            .curveTo(-25.3, 7.1, -28.7, 4)
            .curveTo(-32, 0.7, -32, -4.1)
            .curveTo(-32, -9.4, -28.7, -13)
            .curveTo(-25.5, -16.8, -20.6, -16.8)
            .curveTo(-17.8, -16.8, -15, -15.4)
            .curveTo(-12.2, -14, -10.5, -11.6)
            .lineTo(-8.4, -8.7)
            .lineTo(-8, -8.8)
            .lineTo(-7.4, -9.3)
            .lineTo(-9.6, -12.2)
            .curveTo(-10.7, -14, -11.3, -15.8)
            .curveTo(-11.9, -17.9, -12, -19.9)
            .curveTo(-12, -24.7, -8.5, -28)
            .curveTo(-5.3, -31.1, -0.1, -31.1)
            .curveTo(5.2, -31.1, 8.5, -28)
            .curveTo(11.7, -24.7, 11.8, -19.9)
            .curveTo(11.7, -17.7, 11.2, -15.7)
            .curveTo(10.7, -13.8, 9.5, -12.2)
            .lineTo(7.4, -9.3)
            .lineTo(7.8, -9)
            .lineTo(8.2, -8.7)
            .lineTo(10.5, -11.6)
            .curveTo(12.2, -14, 14.8, -15.4)
            .curveTo(17.6, -16.8, 20.4, -16.8)
            .curveTo(25.3, -16.8, 28.5, -13)
            .curveTo(32, -9.4, 32, -4.1)
            .curveTo(32, 0.8, 28.5, 4)
            .curveTo(25.3, 7.1, 20, 7.1)
            .lineTo(16.4, 6.6)
            .lineTo(12.9, 5.5)
            .curveTo(12.8, 5.6, 12.8, 5.6)
            .curveTo(12.7, 5.7, 12.7, 5.7)
            .curveTo(12.7, 5.8, 12.7, 5.8)
            .curveTo(12.7, 5.9, 12.7, 6)
            .lineTo(12.5, 6.4)
            .lineTo(15.9, 7.7)
            .curveTo(19.7, 9.1, 22.1, 12.2)
            .curveTo(24.5, 15.3, 24.5, 19.1)
            .curveTo(24.5, 23.7, 20.8, 27.5)
            .curveTo(16.9, 31.1, 11.9, 31.1)
            .curveTo(7.4, 31.1, 4, 27.3)
            .closePath()
            .moveTo(-7.7, -5.9)
            .curveTo(-10.9, -2.7, -10.9, 1.8)
            .curveTo(-10.9, 6.3, -7.7, 9.4)
            .curveTo(-4.6, 12.5, -0.1, 12.5)
            .curveTo(4.4, 12.5, 7.6, 9.4)
            .curveTo(10.6, 6.3, 10.6, 1.8)
            .curveTo(10.6, -2.7, 7.6, -5.9)
            .curveTo(4.4, -9, -0.1, -9)
            .curveTo(-4.6, -9, -7.7, -5.9)
            .closePath();
        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-32, -31, 64, 62.2);
    (lib.circle = function () {
        this.initialize();
        // レイヤー 1
        this.shape = new cjs.Shape();
        this.shape.graphics
            .beginFill("#FFFFFF")
            .beginStroke()
            .drawEllipse(-10.8, -10.8, 21.7, 21.7);
        this.shape.setTransform(0, 0, 2.949, 2.949);
        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-32, -32, 64, 64);
    (lib.blur_circle = function () {
        this.initialize();
        // レイヤー 1
        this.shape = new cjs.Shape();
        this.shape.graphics
            .beginRadialGradientFill(["#FFFFFF", "rgba(255,255,255,0)"], [0, 1], 0, 0, 0, 0, 0, 11)
            .beginStroke()
            .drawEllipse(-10.8, -10.8, 21.7, 21.7);
        this.shape.setTransform(0, 0, 3, 3);
        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-32.5, -32.5, 65.1, 65.1);

    (lib.sakura1 = function() {
      this.initialize();

      this.shape = new cjs.Shape();
      this.shape.graphics.beginFill("#FFFFFF")
      .moveTo(26.4,13.9)
      .bezierCurveTo(26.5,11.8,26.3,9.5,25.7,7)
      .bezierCurveTo(24.6,1.7,22.5,1.3,21.1,0.6)
      .bezierCurveTo(19.1,-0.5,16.9,-0.3,15.6,1.6)
      .bezierCurveTo(11.7,7.3,11.7,15.9,12.9,22.6)
      .bezierCurveTo(13.3,25.3,13.4,27.7,13.2,29.7)
      .bezierCurveTo(12.8,30,12.4,30.4,12,30.7)
      .bezierCurveTo(7,34.8,2.7,37.2,2.7,37.2)
      .bezierCurveTo(2.7,37.2,-2.1,41.5,1,41.2)
      .bezierCurveTo(2.6,41.1,5.1,41.9,7.9,42)
      .bezierCurveTo(10.7,42.1,13.7,41.6,16.3,39)
      .bezierCurveTo(18.9,36.4,21.6,32,23.7,27.3)
      .bezierCurveTo(25.6,22.8,26.8,18.1,26.4,13.9)
      .closePath();

      this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-15, -15, 15, 15);

    (lib.sakura2 = function() {
      this.initialize();

      this.shape = new cjs.Shape();
      this.shape.graphics.beginFill("#FFFFFF")
      .moveTo(2.2,39.4)
      .bezierCurveTo(5.8,39.8,10.6,36.3,13.2,34.1)
      .bezierCurveTo(17.6,30.2,21.9,26.2,26.6,22.5)
      .bezierCurveTo(33.6,16.9,32.8,6.7,29,3.1)
      .bezierCurveTo(21.7,-3.7,9.8,2.1,5,8.9)
      .bezierCurveTo(1.6,13.7,0.01,19.5,0,25.3)
      .bezierCurveTo(0,26.7,0.4,39.2,2.2,39.4)
      .closePath();

      this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-15, -15, 15, 15);

    (lib.sakura3 = function() {
      this.initialize();

      this.shape = new cjs.Shape();
      this.shape.graphics.beginFill("#FFFFFF")
      .moveTo(35.3,5.4)
      .bezierCurveTo(35.3,5.3,35.3,5.2,35.3,5.2)
      .bezierCurveTo(35.3,5.2,35.3,5.1,35.3,5.1)
      .bezierCurveTo(35.3,4.1,35,3.2,34.6,2.5)
      .bezierCurveTo(34.6,2.4,34.5,2.4,34.5,2.3)
      .bezierCurveTo(34.5,2.3,34.5,2.3,34.5,2.3)
      .bezierCurveTo(33.9,1.4,33.1,0.7,32.2,0.4)
      .bezierCurveTo(26.9,-1.7,19.8,3.8,16.6,7.5)
      .bezierCurveTo(10.7,14.4,9.3,22.8,5.9,31)
      .bezierCurveTo(3.7,36.2,0.3,40.8,0.3,40.8)
      .bezierCurveTo(-1.2,42.4,2.3,41.8,7,38.1)
      .bezierCurveTo(9,36.6,12.5,33.7,16.2,30.7)
      .bezierCurveTo(20.1,27.5,24.1,24.1,26.1,21.9)
      .bezierCurveTo(30.3,17.5,32.9,13.8,34.3,10.6)
      .bezierCurveTo(35.1,8.7,35.4,7,35.3,5.4)
      .closePath();

      this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-15, -15, 15, 15);

    (lib.sakura4 = function() {
      this.initialize();

      this.shape = new cjs.Shape();
      this.shape.graphics.beginFill("#FFFFFF")
      .moveTo(4.4,0.9)
      .bezierCurveTo(9.4,3,13.6,4.2,16.8,6.8)
      .bezierCurveTo(28.9,17,26.9,22.7,25.1,25.9)
      .bezierCurveTo(22.8,29.9,7.9,31,4.2,16.5)
      .bezierCurveTo(3.3,13,2.7,8.6,0.5,3.1)
      .bezierCurveTo(-1.2,-1.1,1.8,-0.2,4.4,0.9)
      .closePath();

      this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-15, -15, 15, 15);

    (lib.sakura5 = function() {
      this.initialize();

      this.shape = new cjs.Shape();
      this.shape.graphics.beginFill("#FFFFFF")
      .moveTo(52.9,2.7)
      .bezierCurveTo(50.9,-1,44.7,0.2,41.4,0.4)
      .bezierCurveTo(36.9,0.7,31.4,1.3,26.2,1.9)
      .bezierCurveTo(21,2.4,14.5,2.6,9.2,2.9)
      .lineTo(0,3.3)
      .bezierCurveTo(4.7,8.8,9.6,12.2,14.7,14.3)
      .bezierCurveTo(19.8,16.4,25,17.1,30,16.9)
      .bezierCurveTo(35,16.7,39.9,15.6,43.9,14)
      .bezierCurveTo(47.3,12.6,50.2,10.9,52.2,8.9)
      .bezierCurveTo(54,7.9,54.8,6.1,52.9,2.7)
      .closePath();

      this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-15, -15, 15, 15);

    (lib.sakura6 = function() {
      this.initialize();

      this.shape = new cjs.Shape();
      this.shape.graphics.beginFill("#FFFFFF")
      .moveTo(1.2,0)
      .bezierCurveTo(4.5,0,12.8,0.4,21,2.4)
      .bezierCurveTo(28.2,4.1,41,8,40.1,17.6)
      .bezierCurveTo(40.1,17.9,40,18.1,39.8,18.3)
      .bezierCurveTo(39.6,18.4,39.4,18.4,39.3,18.4)
      .bezierCurveTo(37.6,18.4,36.4,19.1,34.7,18.5)
      .bezierCurveTo(30.2,16.8,24.9,13.1,19.5,9.9)
      .bezierCurveTo(14.1,6.6,8.7,3.7,4.8,2.9)
      .bezierCurveTo(-3.1,1.5,1.2,0,1.2,0)
      .closePath();

      this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-15, -15, 15, 15);

    (lib.sakura7 = function() {
      this.initialize();

      this.shape = new cjs.Shape();
      this.shape.graphics.beginFill("#FFFFFF")
      .moveTo(3.2,9.7)
      .bezierCurveTo(6.1,12.7,19.8,23.1,31.2,25.2)
      .bezierCurveTo(33.9,25.7,40.8,25.4,43.3,23.4)
      .bezierCurveTo(45.5,21.7,46.2,16.4,45.6,13.7)
      .bezierCurveTo(44.8,10.2,38.5,0.299999999999999,28.6,0)
      .bezierCurveTo(22.2,-0.2,12.2,2.1,9.4,3.3)
      .bezierCurveTo(6.6,4.4,2.8,3.2,1,3.3)
      .bezierCurveTo(-1.5,3.4,1.2,7.7,3.2,9.7)
      .closePath();

      this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-15, -15, 15, 15);

    (lib.sakura8 = function() {
      this.initialize();

      this.shape = new cjs.Shape();
      this.shape.graphics.beginFill("#FFFFFF")
      .moveTo(15.5,0)
      .bezierCurveTo(13.5,0.2,10.6,3.9,7.8,8.1)
      .bezierCurveTo(5,12.3,2.3,17,1.1,19.6)
      .bezierCurveTo(-0.0999999999999999,22.3,-0.2,25.7,0.3,28.8)
      .bezierCurveTo(0.8,31.9,1.8,34.8,2.9,36.2)
      .bezierCurveTo(5,38.9,9.9,39,12.8,39.7)
      .bezierCurveTo(17.2,40.7,21.3,36.1,23.5,32.9)
      .bezierCurveTo(26.9,28,26.8,24.6,25.3,19.1)
      .bezierCurveTo(24.3,15.5,23,11.7,21.7,9.40000000000001)
      .bezierCurveTo(19.3,4.9,16.5,-0.1,15.5,0)
      .closePath();

      this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-15, -15, 15, 15);

    (lib.sakura9 = function() {
      this.initialize();

      this.shape = new cjs.Shape();
      this.shape.graphics.beginFill("#FFFFFF")
      .moveTo(26.5,22.3)
      .bezierCurveTo(18.6,28.2,10.7,31.9,2.4,27.7)
      .bezierCurveTo(-0.2,26.4,-1,17.5,1.6,14.3)
      .bezierCurveTo(4.2,11.1,7.9,7.9,13.4,6)
      .bezierCurveTo(24.4,2.2,28.5,7.9,33.4,1.7)
      .bezierCurveTo(36.1,-1.8,37.2,0.6,36.7,4.2)
      .bezierCurveTo(36.5,5.9,32,18.2,26.5,22.3)
      .closePath();

      this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-15, -15, 15, 15);

    (lib.sakura10 = function() {
      this.initialize();

      this.shape = new cjs.Shape();
      this.shape.graphics.beginFill("#FFFFFF")
      .moveTo(6.9,3.3)
      .bezierCurveTo(3.3,6,0,11.5,0,16.3)
      .bezierCurveTo(0,32.1,8.7,29,20.3,24.6)
      .bezierCurveTo(33,19.8,40.8,22.2,40.8,22.2)
      .bezierCurveTo(40.8,22.2,42.2,21.9,41.5,20.7)
      .bezierCurveTo(41.5,20.7,40.6,17.9,38.9,14.4)
      .bezierCurveTo(34.7,6,29.7,2.6,21.3,0.5)
      .bezierCurveTo(15.8,-0.8,10.4,0.6,6.9,3.3)
      .closePath();

      this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-15, -15, 15, 15);

    (lib.sakura11 = function() {
      this.initialize();

      this.shape = new cjs.Shape();
      this.shape.graphics.beginFill("#FFFFFF")
      .moveTo(28.4,24.2)
      .bezierCurveTo(26.4,24.9,28,21,22.1,19.3)
      .bezierCurveTo(18.3,18.2,12.2,20.2,8.5,18.6)
      .bezierCurveTo(3.4,16.2,1,14,0.2,10.1)
      .bezierCurveTo(-0.9,4.3,2.2,1.7,3.8,0.9)
      .bezierCurveTo(6.9,-0.6,11.8,-0.3,15.4,2.2)
      .bezierCurveTo(20.7,5.8,26.4,13.3,28.7,19.5)
      .bezierCurveTo(30.3,23.4,29.3,23.9,28.4,24.2)
      .closePath();

      this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-15, -15, 15, 15);

    (lib.sakura12 = function() {
      this.initialize();

      this.shape = new cjs.Shape();
      this.shape.graphics.beginFill("#FFFFFF")
      .moveTo(8.5,1)
      .bezierCurveTo(11.3,3,14.8,9.9,15.8,12.2)
      .bezierCurveTo(18.6,18.6,19.5,20.4,21.5,22.6)
      .bezierCurveTo(23.5,24.9,20.3,25.8,15.6,22.3)
      .bezierCurveTo(13.2,20.6,10.3,17.9,7.6,15)
      .bezierCurveTo(4.9,12,2.4,8.8,0.7,5.7)
      .bezierCurveTo(-2.5,-0.4,5.7,-1,8.5,1)
      .closePath();

      this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-15, -15, 15, 15);

    (lib.sakura13 = function() {
      this.initialize();

      this.shape = new cjs.Shape();
      this.shape.graphics.beginFill("#FFFFFF")
      .moveTo(27.2,29.6)
      .bezierCurveTo(23.7,28.8,18.2,28.1,12.9,25.8)
      .bezierCurveTo(7.7,23.4,2.7,19.5,0.8,13.1)
      .bezierCurveTo(-1.1,6.5,0,0.1,8.3,0)
      .bezierCurveTo(13,-0.1,15.2,0.8,18.6,4.2)
      .bezierCurveTo(22.4,8,26.2,14.1,29,24)
      .bezierCurveTo(29.2,26.1,31,30.4,27.2,29.6)
      .closePath();

      this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-15, -15, 15, 15);

    // stage content:
    (lib.assetshapes = function () {
        this.initialize();
        // triangle
        this.instance = new lib.triangle();
        this.instance.setTransform(323.6, 39.6);
        // square
        this.instance_1 = new lib.square();
        this.instance_1.setTransform(518, 151.5);
        // kirakira2
        this.instance_2 = new lib.kirakira2();
        this.instance_2.setTransform(420.8, 32.6);
        // kirakira
        this.instance_3 = new lib.kirakira();
        this.instance_3.setTransform(32, 151.5);
        // flower
        this.instance_4 = new lib.flower();
        this.instance_4.setTransform(396.5, 151.5);
        // star_10
        this.instance_5 = new lib.star_10();
        this.instance_5.setTransform(518, 32.6);
        // star
        this.instance_6 = new lib.star();
        this.instance_6.setTransform(275, 151.5);
        // circle
        this.instance_7 = new lib.circle();
        this.instance_7.setTransform(226.4, 32.6);
        // reverse_blur_circle
        this.instance_8 = new lib.reverse_blur_circle();
        this.instance_8.setTransform(153.5, 151.5);
        // blur_circle
        this.instance_9 = new lib.blur_circle();
        this.instance_9.setTransform(129.2, 32.6);
        // heart
        this.instance_10 = new lib.heart();
        this.instance_10.setTransform(32, 32.6);

        this.instance_11 = new lib.sakura1();
        this.instance_11.setTransform(30, 30);

        this.instance_12 = new lib.sakura2();
        this.instance_12.setTransform(30, 30);

        this.instance_13 = new lib.sakura3();
        this.instance_13.setTransform(30, 30);

        this.instance_14 = new lib.sakura4();
        this.instance_14.setTransform(30, 30);

        this.instance_15 = new lib.sakura5();
        this.instance_15.setTransform(30, 30);

        this.instance_16 = new lib.sakura6();
        this.instance_16.setTransform(30, 30);

        this.instance_17 = new lib.sakura7();
        this.instance_17.setTransform(30, 30);

        this.instance_18 = new lib.sakura8();
        this.instance_18.setTransform(30, 30);

        this.instance_19 = new lib.sakura9();
        this.instance_19.setTransform(30, 30);

        this.instance_20 = new lib.sakura10();
        this.instance_20.setTransform(30, 30);

        this.instance_21 = new lib.sakura11();
        this.instance_21.setTransform(30, 30);

        this.instance_22 = new lib.sakura12();
        this.instance_22.setTransform(30, 30);

        this.instance_23 = new lib.sakura13();
        this.instance_23.setTransform(30, 30);

        this.addChild(this.instance_23, this.instance_22, this.instance_21, this.instance_20, this.instance_19, this.instance_18, this.instance_17, this.instance_16, this.instance_15, this.instance_14, this.instance_13, this.instance_12, this.instance_11, this.instance_10, this.instance_9, this.instance_8, this.instance_7, this.instance_6, this.instance_5, this.instance_4, this.instance_3, this.instance_2, this.instance_1, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(275, 200, 554, 187.5);
})((Assets = Assets || {}), (asset_shapes_images = asset_shapes_images || {}), (asset_shapes_createjs = asset_shapes_createjs || {}), (ss = ss || {}));


// CONCATENATED MODULE: ./src/assets/shape-generator.ts

/**
 * シェイプをインスタンス化するクラスです。
 * ParticleJSの内部的な利用以外では使用しないことをオススメします。
 */
var shape_generator_ShapeGenerator = /** @class */ (function () {
    function ShapeGenerator() {
    }
    /**
     * シェイプインスタンスを作成します。
     * @param {string} id
     * @returns {createjs.Container}
     * @see data-shape.ts
     */
    ShapeGenerator.prototype.generateShape = function (id) {
        var cls = Assets[id];
        return new cls();
    };
    return ShapeGenerator;
}());


// CONCATENATED MODULE: ./src/data/data-color.ts
/**
 * 色の情報を扱うデータ型クラスです。
 */
var ColorData = /** @class */ (function () {
    function ColorData() {
        /**
         * 色相を表します(0-360)。
         * @type {number}
         */
        this.hue = 0;
        /**
         * 色相のばらつきを示します。
         * @type {number}
         */
        this.hueVariance = 0;
        /**
         * 彩度です(0-100)。
         * @type {number}
         */
        this.saturation = 0;
        /**
         * 彩度のばらつきです。
         * @type {number}
         */
        this.saturationVariance = 0;
        /**
         * 輝度です(0-100)。
         * @type {number}
         */
        this.luminance = 0;
        /**
         * 輝度のばらつきです。
         * @type {number}
         */
        this.luminanceVariance = 0;
    }
    return ColorData;
}());


// CONCATENATED MODULE: ./src/enum/alpha-curve-type.ts
/**
 * 透明度の計算式の種類です。
 */
var AlphaCurveType;
(function (AlphaCurveType) {
    /**
     * 通常の透明度の計算式です。
     */
    AlphaCurveType[AlphaCurveType["Normal"] = 0] = "Normal";
    /**
     * ランダムです。
     */
    AlphaCurveType[AlphaCurveType["Random"] = 1] = "Random";
})(AlphaCurveType || (AlphaCurveType = {}));

// CONCATENATED MODULE: ./src/data/data-drawing.ts


/**
 * パーティクルの描画情報を扱うデータ型クラスです。
 */
var data_drawing_DrawingData = /** @class */ (function () {
    /**
     * コンストラクターです。
     * @param json
     */
    function DrawingData(json) {
        if (json === void 0) { json = null; }
        /**
         * 背景色です。
         * @type {string}
         */
        this.bgColor = "";
        /**
         * 幅です。
         * @type {number}
         */
        this.width = 0.0;
        /**
         * 高さです。
         * @type {number}
         */
        this.height = 0.0;
        /**
         * 1秒あたりの発生数です。
         * @type {number}
         */
        this.emitFrequency = 0;
        /**
         *  発生基準位置 - X座標 (px)です。
         * @type {number}
         */
        this.startX = 0;
        /**
         * 発生基準位置 - X座標のばらつき (px)です。
         * @type {number}
         */
        this.startXVariance = 0;
        /**
         * 発生位置 - Y座標 (px)です。
         * @type {number}
         */
        this.startY = 0;
        /**
         * 発生位置 - Y座標のばらつき (px)です。
         * @type {number}
         */
        this.startYVariance = 0;
        /**
         * 初期速度 - 方向 (度)です。
         * @type {number}
         */
        this.initialDirection = 0;
        /**
         * 初期速度 - 方向のばらつき (度)です。
         * @type {number}
         */
        this.initialDirectionVariance = 0;
        /** 初期速度 (px)です。
         * @type {number}
         */
        this.initialSpeed = 0;
        /** 初期速度のばらつきです。
         * @type {number}
         */
        this.initialSpeedVariance = 0;
        /** 摩擦です。
         * @type {number}
         */
        this.friction = 0;
        /** 重力です。
         * @type {number}
         */
        this.accelerationSpeed = 0;
        /** 重力方向 (度)です。
         * @type {number}
         */
        this.accelerationDirection = 0;
        /** 開始時のスケールです。
         * @type {number}
         */
        this.startScale = 0;
        /** 開始時のスケールのばらつきです。 */
        this.startScaleVariance = 0;
        /** 終了時のスケールです。
         * @type {number}
         */
        this.finishScale = 0;
        /** 終了時のスケールのばらつきです。
         * @type {number}
         */
        this.finishScaleVariance = 0;
        /**
         * ライフ(フレーム数)です。
         * @type {number}
         */
        this.lifeSpan = 0; /**
         * ライフのばらつき(フレーム数)です。
         * @type {number}
         */
        /**  */ this.lifeSpanVariance = 0;
        /**
         *  開始時の透明度です。
         * @type {number}
         */
        this.startAlpha = 0;
        /**
         * 開始時の透明度のばらつきです。
         * @type {number}
         */
        this.startAlphaVariance = 0;
        /**
         * 終了時の透明度です。
         * @type {number}
         */
        this.finishAlpha = 0;
        /**
         * 終了時の透明度のばらつきです。
         * @type {number}
         */
        this.finishAlphaVariance = 0;
        /**
         * 使用するシェイプID設定です。
         * @type {string[]}
         */
        this.shapeIdList = [""];
        /**
         * 初期カラーの設定です。
         * @type {ColorData}
         */
        this.startColor = new ColorData();
        /**
         * シェイプを加算合成します。
         * @type {boolean}
         */
        this.blendMode = true;
        /**
         * 透明度の計算式の設定です。
         * @type {AlphaCurveType.Normal}
         */
        this.alphaCurveType = AlphaCurveType.Normal;
        if (json) {
            this.importFromJson(json);
        }
    }
    /**
     * パーティクルの設定をJSON形式のオブジェクトから読み込みます。
     * @param json
     */
    DrawingData.prototype.importFromJson = function (json) {
        var checkSkipKey = function (key) {
            return key == "width" || key == "height" || key == "bgColor";
        };
        this.setData(json, checkSkipKey);
    };
    /**
     * パーティクルの設定をDrawingDataオブジェクトから読み込みます
     * @param {DrawingData} obj
     */
    DrawingData.prototype.importData = function (obj) {
        var checkSkipKey = function (key) {
            return (key == "width" || key == "height" || key == "startX" || key == "startY");
        };
        this.setData(obj, checkSkipKey);
    };
    DrawingData.checkReflectEnable = function () {
        try {
            var result = !!(Reflect && Reflect.has);
            return result;
        }
        catch (e) {
            return false;
        }
    };
    DrawingData.prototype.setData = function (obj, checkSkipKey) {
        if (DrawingData.ENABLE_REFLECT) {
            for (var key in obj) {
                // 無視するプロパティー
                if (checkSkipKey(key)) {
                    continue;
                }
                if (Reflect.has(this, key) == true) {
                    var val = obj[key];
                    // イマドキなプロパティー反映方法を適用 ICS-Ikeda 2016-01-22
                    Reflect.set(this, key, val);
                }
            }
        }
        else {
            var self_1 = this;
            for (var key in obj) {
                // 無視するプロパティー
                if (checkSkipKey(key)) {
                    continue;
                }
                if (this.hasOwnProperty(key)) {
                    self_1[key] = obj[key];
                }
            }
        }
    };
    DrawingData.ENABLE_REFLECT = DrawingData.checkReflectEnable();
    return DrawingData;
}());


// CONCATENATED MODULE: ./src/data/data-shape.ts
/**
 * Created by 「asset-shapes.fla」/「generate-assets.jsfl」 on Wed Jan 20 2016
 * !!!!!このコードはJSFLから自動生成されたコードです。修正する場合はご注意ください。!!!!!
 */
var ShapeData = /** @class */ (function () {
    function ShapeData() {
        this.assetList = [
            "blur_circle",
            "circle",
            "flower",
            "heart",
            "kirakira",
            "kirakira2",
            "reverse_blur_circle",
            "square",
            "star",
            "star_10",
            "triangle",
            "sakura1",
            "sakura2",
            "sakura3",
            "sakura4",
            "sakura5",
            "sakura6",
            "sakura7",
            "sakura8",
            "sakura9",
            "sakura10",
            "sakura11",
            "sakura12",
            "sakura13"
        ];
    }
    return ShapeData;
}());


// CONCATENATED MODULE: ./src/enum/shape-type.ts
/**
 * シェイプの種類を定義したクラスです。
 */
var ShapeType = /** @class */ (function () {
    function ShapeType() {
    }
    /**
     * ふわっとした円のシェイプIDです。
     * @type {string}
     */
    ShapeType.BLUR_CIRCLE = "blur_circle";
    /**
     * 円のシェイプIDです。
     * @type {string}
     */
    ShapeType.CIRCLE = "circle";
    /**
     * 花の形のシェイプIDです。
     * @type {string}
     */
    ShapeType.FLOWER = "flower";
    /**
     * ハートの形のシェイプIDです。
     * @type {string}
     */
    ShapeType.HEART = "heart";
    /**
     * キラキラ(1)のシェイプIDです。
     * @type {string}
     */
    ShapeType.KIRAKIRA = "kirakira";
    /**
     * キラキラ(2)のシェイプIDです。
     * @type {string}
     */
    ShapeType.KIRAKIRA2 = "kirakira2";
    /**
     * 中央が繰り抜かれた円のシェイプIDです。
     * @type {string}
     */
    ShapeType.REVERSE_CIRCLE = "reverse_blur_circle";
    /**
     * 四角形のシェイプIDです。
     * @type {string}
     */
    ShapeType.SQUARE = "square";
    /**
     * 星形のシェイプIDです。
     * @type {string}
     */
    ShapeType.STAR = "star";
    /**
     * 星形(棘が10)のシェイプIDです。
     * @type {string}
     */
    ShapeType.STAR_10 = "star_10";
    /**
     * 三角形のシェイプIDです。
     * @type {string}
     */
    ShapeType.TRIANGLE = "triangle";
		/**
     * 泡のシェイプIDです。
     * @type {string}
     */
    ShapeType.SAKURA1  = "sakura1";
    ShapeType.SAKURA2  = "sakura2";
    ShapeType.SAKURA3  = "sakura3";
    ShapeType.SAKURA4  = "sakura4";
    ShapeType.SAKURA5  = "sakura5";
    ShapeType.SAKURA6  = "sakura6";
    ShapeType.SAKURA7  = "sakura7";
    ShapeType.SAKURA8  = "sakura8";
    ShapeType.SAKURA9  = "sakura9";
    ShapeType.SAKURA10 = "sakura10";
    ShapeType.SAKURA11 = "sakura11";
    ShapeType.SAKURA12 = "sakura12";
    ShapeType.SAKURA13 = "sakura13";

    return ShapeType;
}());


// CONCATENATED MODULE: ./src/particle/particle.ts

/**
 * パーティクルエミッターのバリューオブジェクトのクラスです。
 */
var particle_Particle = /** @class */ (function () {
    /**
     * コンストラクターです。
     */
    function Particle() {
        this.particleShape = new createjs.Container();
        this.startColor = new ColorData();
    }
    return Particle;
}());


// CONCATENATED MODULE: ./src/particle/particle-system.ts




/**
 * ParticleJSのバージョン情報を示します。
 * @type {string}
 */
var VERSION = "1.0.0";
/**
 * 現在のバージョンと互換性があるかどうかをチェックします。
 * @param value
 */
function checkVersion(value) {
    var currentVersion = VERSION.split(".");
    //  ここはそもそもこない想定だけれども。
    if (currentVersion.length <= 2) {
        console.log("バージョン表記エラーが発生しました。");
        return false;
    }
    //  versionが空の場合
    if (!value) {
        if (currentVersion[0] == "0" && currentVersion[1] == "1") {
            //「0.1.▲」のバージョンのParticleSystemは問題なく動作させる
            return true;
        }
        else {
            //  バージョンが空の場合はエラー
            return false;
        }
    }
    var jsonVersion = value.split(".");
    //  メジャーバージョンのチェック
    if (currentVersion[0] != jsonVersion[0]) {
        return false;
    }
    //  マイナーバージョンのチェック
    if (currentVersion[1] != jsonVersion[1]) {
        return false;
    }
    //  リビジョン番号が同じなら互換性があると行って良い
    return true;
}
/**
 * パーティクルの制御クラスです。
 */
var particle_system_ParticleSystem = /** @class */ (function () {
    function ParticleSystem() {
        /** @private  */
        this._frameCount = 0;
        this._drawingData = new data_drawing_DrawingData();
        this._particlesPool = [];
        this._activeParticles = [];
        this.container = new createjs.Container();
        // パフォーマンス向上の基本テクニック
        this.container.mouseChildren = false;
        this.container.mouseEnabled = false;
        this._playing = true;
        this.shapeGenerator = new shape_generator_ShapeGenerator();
    }
    /**
     * パーティクルのアニメーションが再生されているかどうかを示します。
     * @returns {boolean}
     */
    ParticleSystem.prototype.isPlaying = function () {
        return this._playing;
    };
    /**
     * パーティクルの設定データを取り込みます。
     */
    ParticleSystem.prototype.setData = function (drawingData) {
        this._drawingData = drawingData;
    };
    /**
     * パーティクルの設定データをJson形式のオブジェクトで取り込みます。
     */
    ParticleSystem.prototype.importFromJson = function (jsonObject) {
        if (!checkVersion(jsonObject["VERSION"] || "")) {
            console.warn("読み込んだJSONファイルとParticleJSのバージョンが異なります。\n" +
                "https://github.com/ics-creative/ParticleJS");
        }
        this._drawingData.importFromJson(jsonObject);
    };
    /**
     * パーティクルシステムの更新を行います。
     */
    ParticleSystem.prototype.update = function () {
        if (!this._playing) {
            return;
        }
        this.emit();
        this.animate();
        this.lifeCheck();
    };
    /**
     * パーティクルの動きを更新します。
     */
    ParticleSystem.prototype.animate = function () {
        var rad = createjs.Matrix2D.DEG_TO_RAD * this._drawingData.accelerationDirection;
        var accX = Math.cos(rad) * this._drawingData.accelerationSpeed;
        var accY = Math.sin(rad) * this._drawingData.accelerationSpeed;
        for (var i = 0; i < this._activeParticles.length; i++) {
            var particle = this._activeParticles[i];
            // 加速度計算 (重力)
            particle.vx += accX;
            particle.vy += accY;
            // 摩擦計算
            particle.vx *= 1 - this._drawingData.friction;
            particle.vy *= 1 - this._drawingData.friction;
            // 座標計算
            particle.x += particle.vx;
            particle.y += particle.vy;

            // 回転
            particle.particleShape.rotation ++;

            // 座標の適用
            particle.particleShape.x = particle.x;
            particle.particleShape.y = particle.y;

            var lifeParcent = particle.currentLife / particle.totalLife;
            switch (Number(particle.alphaCurveType)) {
                case AlphaCurveType.Random:
                    var min = Math.min(particle.finishAlpha, particle.startAlpha);
                    var max = Math.max(particle.finishAlpha, particle.startAlpha);
                    particle.particleShape.alpha = Math.random() * (max - min) + min;
                    break;
                case AlphaCurveType.Normal:
                default:
                    var alpha = this.calcCurrentValue(particle.startAlpha, particle.finishAlpha, lifeParcent);
                    particle.particleShape.alpha = alpha;
                    break;
            }
            var scale = this.calcCurrentValue(particle.startScale, particle.finishScale, lifeParcent);
            particle.particleShape.scaleX = particle.particleShape.scaleY = scale;
            //  パーティクルが死んでいたら、オブジェクトプールに移動
            if (particle.currentLife < 0) {
                particle.isAlive = false;
            }
            // 年齢追加
            particle.currentLife--;
        }
    };
    /**
     * パーティクルが生きているか確認します。
     */
    ParticleSystem.prototype.lifeCheck = function () {
        for (var i = 0; i < this._activeParticles.length; i++) {
            // もしも死んでいたら、アクティブリストから外してプールに保存する。
            if (!this._activeParticles[i].isAlive) {
                var particle = this._activeParticles[i];
                this.container.removeChild(particle.particleShape);
                this._activeParticles.splice(i, 1);
                this._particlesPool.push(particle);
                i--;
            }
        }
    };
    /**
     * パーティクルを全て削除します。
     */
    ParticleSystem.prototype.clear = function () {
        for (var i = 0; i < this._activeParticles.length; i++) {
            var particle = this._activeParticles[i];
            particle.isAlive = false;
            this.container.removeChild(particle.particleShape);
            this._activeParticles.splice(i, 1);
            this._particlesPool.push(particle);
            i--;
        }
    };
    /**
     * パーティクルシステムを破棄します。
     */
    ParticleSystem.prototype.dispose = function () {
        for (var i = 0; i < this._activeParticles.length; i++) {
            var particle = this._activeParticles[i];
            particle.isAlive = false;
            this.container.removeChild(particle.particleShape);
        }
        this._activeParticles.splice(0, this._activeParticles.length);
        this._particlesPool.splice(0, this._particlesPool.length);
        this._activeParticles = null;
        this._particlesPool = null;
        this.container = null;
    };
    /**
     * パーティクルの生成を行います。
     */
    ParticleSystem.prototype.emit = function () {
        // インターバルチェック
        var framerate = Math.round(createjs.Ticker.framerate);
        var frameInSec = this._frameCount % framerate;
        var emitPerSec = this._drawingData.emitFrequency;
        var loopInt = emitPerSec == 0 ? 0 : Math.floor(emitPerSec / framerate);
        // ① 整数分の実行回数
        for (var i = 0; i < loopInt; i++) {
            this.emitParticle();
        }
        // ② 小数点分の実行回数
        var loopFloat = emitPerSec / framerate - loopInt;
        // フレームレートより少ない場合、かつ、生成persecが0ではないとき
        if (emitPerSec != 0 && frameInSec % Math.floor(1 / loopFloat) == 0) {
            this.emitParticle();
        }
        this._frameCount++;
        if (this._frameCount >= framerate) {
            this._frameCount = 0;
        }
    };
    /**
     * 個々のパーティクルを生成し、パーティクルシステムに登録します。
     * @returns {Particle}
     */
    ParticleSystem.prototype.emitParticle = function () {
        var particle = this.generateParticle();
        this.container.addChild(particle.particleShape);
        this._activeParticles.push(particle);
    };
    /**
     * パーティクルを生成し、パラメーターを設定します。
     * @returns {Particle}
     */
    ParticleSystem.prototype.generateParticle = function () {
        var particle = null;
        if (this._particlesPool.length >= 1) {
            particle = this._particlesPool.shift();
        }
        else {
            particle = new particle_Particle();
        }
        this.setParticleParameter(particle);
        return particle;
    };
    /**
     * パーティクルパラメータの設定を行います。
     * @param particle
     */
    ParticleSystem.prototype.setParticleParameter = function (particle) {
        particle.particleShape.removeAllChildren();
        particle.isAlive = true;
        particle.x = this.calcRandomValueWithVariance(this._drawingData.startX, this._drawingData.startXVariance, false);
        particle.y = this.calcRandomValueWithVariance(this._drawingData.startY, this._drawingData.startYVariance, false);
        this.generateShape(particle, this._drawingData.shapeIdList);
        //  生存期間
        particle.totalLife = Math.max(1, this.calcRandomValueWithVariance(this._drawingData.lifeSpan, this._drawingData.lifeSpanVariance, true));
        particle.currentLife = particle.totalLife;
        //  スピード
        var speed = Math.max(0, this.calcRandomValueWithVariance(this._drawingData.initialSpeed, this._drawingData.initialSpeedVariance, false));
        var angle = createjs.Matrix2D.DEG_TO_RAD *
            this.calcRandomValueWithVariance(this._drawingData.initialDirection, this._drawingData.initialDirectionVariance, false);
        particle.vx = Math.cos(angle) * speed;
        particle.vy = Math.sin(angle) * speed;
        //  アルファ
        particle.startAlpha = this.calcRandomValueWithRange(0.0, 1.0, this.calcRandomValueWithVariance(this._drawingData.startAlpha, this._drawingData.startAlphaVariance, false));
        particle.finishAlpha = this.calcRandomValueWithRange(0.0, 1.0, this.calcRandomValueWithVariance(this._drawingData.finishAlpha, this._drawingData.finishAlphaVariance, false));
        //  スケール
        particle.startScale = Math.max(0, this.calcRandomValueWithVariance(this._drawingData.startScale, this._drawingData.startScaleVariance, false));
        particle.finishScale = Math.max(0, this.calcRandomValueWithVariance(this._drawingData.finishScale, this._drawingData.finishScaleVariance, false));
        // ブレンドモードを設定
        particle.particleShape.compositeOperation =
            this._drawingData.blendMode == true ? "lighter" : null;
        particle.alphaCurveType = this._drawingData.alphaCurveType;
    };
    /**
     * パーティクルに使用するシェイプを生成します。
     * @param particle
     * @param shapeIdList
     */
    ParticleSystem.prototype.generateShape = function (particle, shapeIdList) {

        /* ===== add ===== */
        var charaColorArray = [
          { h: 330, s:  80, l: 92 },
          { h:  47, s:  95, l: 83 },
          { h: 104, s:  65, l: 78 },
          { h: 353, s:  83, l: 84 },
          { h: 218, s:  77, l: 88 },
          { h: 196, s: 100, l: 82 },
          { h: 253, s:  65, l: 80 }
        ];
        var randomColor = charaColorArray[Math.floor(Math.random() * charaColorArray.length)];
        /* ===== add ===== */

        particle.particleShape.removeAllChildren();
        var startColor = this._drawingData.startColor;
        /*
        particle.startColor.hue =
            this.calcRandomValueWithVariance(startColor.hue, startColor.hueVariance, false) % 360;
        particle.startColor.luminance = this.calcRandomValueWithVariance(startColor.luminance, startColor.luminanceVariance, false);
        particle.startColor.saturation = this.calcRandomValueWithVariance(startColor.saturation, startColor.saturationVariance, false);
        var hue = Number(particle.startColor.hue);
        var saturation = Number(particle.startColor.saturation);
        var luminance = Number(particle.startColor.luminance);
        */
        // var color = "hsl(" + hue + ", " + saturation + "%, " + luminance + "%)";

        /* ===== add ===== */
        var color = "hsl(" + randomColor["h"] + ", " + randomColor["s"] + "%, " + randomColor["l"] + "%)";
        /* ===== add ===== */

        var r = Math.floor(Math.random() * this._drawingData.shapeIdList.length);
        var shapeId = this._drawingData.shapeIdList.length == 0
            ? ""
            : this._drawingData.shapeIdList[r];
        particle.colorCommand = null;
        var container = this.shapeGenerator.generateShape(shapeId);
        particle.particleShape.addChild(container);
        var shape = container.getChildAt(0); // こういう作りにする
        if (shape == null) {
            return;
        }
        var instructions = shape.graphics.instructions;
        if (instructions && instructions.length > 0) {
            for (var i = 0; i < instructions.length; i++) {
                var cmd = instructions[i];
                if (cmd instanceof createjs.Graphics.Fill) {
                    // 塗りのとき
                    // グラデーション塗りだったら
                    if (cmd.style instanceof CanvasGradient) {
                        // 昔のグラデーションを保持
                        var oldStyle = cmd.style;
                        var g = ParticleSystem.HELPER_GRAPHICS;
                        var newStyle = g.beginRadialGradientFill([color, "hsla(" + hue + ", " + saturation + "%, " + luminance + "%, 0)"], oldStyle.props.ratios, oldStyle.props.x0, oldStyle.props.y0, oldStyle.props.r0, oldStyle.props.x1, oldStyle.props.y1, oldStyle.props.r1).command;
                        instructions[i] = newStyle;
                    }
                    else {
                        // 単色塗りなら
                        cmd.style = color;
                        particle.colorCommand = cmd;
                    }
                }
                else if (cmd instanceof createjs.Graphics.Stroke) {
                    // 線のとき
                    cmd.style = color;
                    particle.colorCommand = cmd;
                }
            }
        }
    };
    /**
     * 一時的にパーティクルの再生を停止します。
     */
    ParticleSystem.prototype.pause = function () {
        this._playing = false;
    };
    /**
     * pause()で停止したパーティクルの再生を再開します。
     */
    ParticleSystem.prototype.resume = function () {
        this._playing = true;
    };
    /**
     * 一定範囲の数値を計算します。
     * @param minValue
     * @param maxValue
     * @param value
     * @returns {number}
     */
    ParticleSystem.prototype.calcRandomValueWithRange = function (minValue, maxValue, value) {
        return Math.min(maxValue, Math.max(minValue, value));
    };
    /**
     * ばらつきのある値を計算し取得します。
     * @param value 基準値です。
     * @param variance バラつきの範囲です。
     * @param isInteger 整数であるかを指定します。
     * @returns {number}  数値を返します。
     */
    ParticleSystem.prototype.calcRandomValueWithVariance = function (value, variance, isInteger) {
        var result = Number(value) + (Math.random() - 0.5) * variance;
        if (isInteger == true) {
            return Math.floor(result);
        }
        return result;
    };
    /**
     * 現在の年齢依存の数値を計算します。
     * @param start 開始時の値です。
     * @param end 終了時の値です。
     * @param life 現在の寿命を示します。開始時は1.0で、終了時は0.0の想定です。
     * @returns {number} 現在の値です。
     */
    ParticleSystem.prototype.calcCurrentValue = function (start, end, life) {
        return Number(start) * life + Number(end) * (1 - life);
    };
    Object.defineProperty(ParticleSystem.prototype, "emitFrequency", {
        /**
         * 1秒あたりの発生数です。
         * @returns {number}
         */
        get: function () {
            return this._drawingData.emitFrequency;
        },
        /**
         * 1秒あたりの発生数です。
         * @param value
         */
        set: function (value) {
            this._drawingData.emitFrequency = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticleSystem.prototype, "startX", {
        /**
         * 発生基準位置 - X座標 (px)です。
         * @returns {number}
         */
        get: function () {
            return this._drawingData.startX;
        },
        /**
         * 発生基準位置 - X座標 (px)です。
         * @param value
         */
        set: function (value) {
            this._drawingData.startX = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticleSystem.prototype, "startXVariance", {
        /**
         * 発生基準位置 - X座標のばらつき (px)です。
         * @returns {number}
         */
        get: function () {
            return this._drawingData.startX;
        },
        /**
         * 発生基準位置 - X座標のばらつき (px)です。
         * @param value
         */
        set: function (value) {
            this._drawingData.startXVariance = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticleSystem.prototype, "startY", {
        /**
         * 発生位置 - Y座標 (px)です。
         * @returns {number}
         */
        get: function () {
            return this._drawingData.startY;
        },
        /**
         * 発生位置 - Y座標 (px)です。
         * @param value
         */
        set: function (value) {
            this._drawingData.startY = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticleSystem.prototype, "startYVariance", {
        /**
         * 発生基準位置 - X座標のばらつき (px)です。
         * @returns {number}
         */
        get: function () {
            return this._drawingData.startYVariance;
        },
        /**
         * 発生基準位置 - X座標のばらつき (px)です。
         * @param value
         */
        set: function (value) {
            this._drawingData.startYVariance = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticleSystem.prototype, "initialDirection", {
        /**
         * 初期速度 - 方向 (度)です。
         * @returns {number}
         */
        get: function () {
            return this._drawingData.initialDirection;
        },
        /**
         * 初期速度 - 方向 (度)です。
         * @param value
         */
        set: function (value) {
            this._drawingData.initialDirection = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticleSystem.prototype, "initialDirectionVariance", {
        /**
         * 初期速度 - 方向のばらつき (度)です。
         * @returns {number}
         */
        get: function () {
            return this._drawingData.initialDirectionVariance;
        },
        /**
         * 初期速度 - 方向のばらつき (度)です。
         * @param value
         */
        set: function (value) {
            this._drawingData.initialDirectionVariance = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticleSystem.prototype, "initialSpeed", {
        /**
         * 初期速度 (px)です。
         * @returns {number}
         */
        get: function () {
            return this._drawingData.initialSpeed;
        },
        /**
         * 初期速度 (px)です。
         * @param value
         */
        set: function (value) {
            this._drawingData.initialSpeed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticleSystem.prototype, "initialSpeedVariance", {
        /**
         * 初期速度のばらつきです。
         * @returns {number}
         */
        get: function () {
            return this._drawingData.initialSpeedVariance;
        },
        /**
         * 初期速度のばらつきです。
         * @param value
         */
        set: function (value) {
            this._drawingData.initialSpeedVariance = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticleSystem.prototype, "friction", {
        /**
         * 摩擦です。
         * @returns {number}
         */
        get: function () {
            return this._drawingData.friction;
        },
        /**
         * 摩擦です。
         * @param value
         */
        set: function (value) {
            this._drawingData.friction = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticleSystem.prototype, "accelerationSpeed", {
        /**
         * 重力です。
         * @returns {number}
         */
        get: function () {
            return this._drawingData.accelerationSpeed;
        },
        /**
         * 重力です。
         * @param value
         */
        set: function (value) {
            this._drawingData.accelerationSpeed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticleSystem.prototype, "accelerationDirection", {
        /**
         * 重力です。
         * @returns {number}
         */
        get: function () {
            return this._drawingData.accelerationDirection;
        },
        /**
         * 重力方向 (度)です。
         * @param value
         */
        set: function (value) {
            this._drawingData.accelerationDirection = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticleSystem.prototype, "startScale", {
        /**
         * 開始時のスケールです。
         * @returns {number}
         */
        get: function () {
            return this._drawingData.startScale;
        },
        /**
         * 開始時のスケールです。
         * @param value
         */
        set: function (value) {
            this._drawingData.startScale = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticleSystem.prototype, "startScaleVariance", {
        /**
         * 開始時のスケールのばらつきです。
         * @returns {number}
         */
        get: function () {
            return this._drawingData.startScaleVariance;
        },
        /**
         * 開始時のスケールのばらつきです。
         * @param value
         */
        set: function (value) {
            this._drawingData.startScaleVariance = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticleSystem.prototype, "finishScale", {
        /**
         * 終了時のスケールです。
         * @returns {number}
         */
        get: function () {
            return this._drawingData.finishScale;
        },
        /**
         * 終了時のスケールです。
         * @param value
         */
        set: function (value) {
            this._drawingData.finishScale = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticleSystem.prototype, "finishScaleVariance", {
        /**
         * 終了時のスケールのばらつきです。
         * @returns {number}
         */
        get: function () {
            return this._drawingData.finishScaleVariance;
        },
        /**
         * 終了時のスケールのばらつきです。
         * @param value
         */
        set: function (value) {
            this._drawingData.finishScaleVariance = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticleSystem.prototype, "lifeSpan", {
        /**
         * ライフ(フレーム数)です。
         * @returns {number}
         */
        get: function () {
            return this._drawingData.lifeSpan;
        },
        /**
         * ライフ(フレーム数)です。
         * @param value
         */
        set: function (value) {
            this._drawingData.lifeSpan = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticleSystem.prototype, "lifeSpanVariance", {
        /**
         * ライフのばらつき(フレーム数)です。
         * @returns {number}
         */
        get: function () {
            return this._drawingData.lifeSpanVariance;
        },
        /**
         * ライフのばらつき(フレーム数)です。
         * @param value
         */
        set: function (value) {
            this._drawingData.lifeSpanVariance = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticleSystem.prototype, "startAlpha", {
        /**
         * 始時の透明度です。
         * @returns {number}
         */
        get: function () {
            return this._drawingData.startAlpha;
        },
        /**
         * 始時の透明度です。
         * @param value
         */
        set: function (value) {
            this._drawingData.startAlpha = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticleSystem.prototype, "startAlphaVariance", {
        /**
         * 開始時の透明度のばらつきです。
         * @returns {number}
         */
        get: function () {
            return this._drawingData.startAlphaVariance;
        },
        /**
         * 開始時の透明度のばらつきです。
         * @param value
         */
        set: function (value) {
            this._drawingData.startAlphaVariance = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticleSystem.prototype, "finishAlpha", {
        /**
         * 終了時の透明度です。
         * @returns {number}
         */
        get: function () {
            return this._drawingData.finishAlpha;
        },
        /**
         * 終了時の透明度です。
         * @param value
         */
        set: function (value) {
            this._drawingData.finishAlpha = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticleSystem.prototype, "finishAlphaVariance", {
        /**
         * 終了時の透明度のばらつきです。
         * @returns {number}
         */
        get: function () {
            return this._drawingData.finishAlphaVariance;
        },
        /**
         * 終了時の透明度のばらつきです。
         * @param value
         */
        set: function (value) {
            this._drawingData.finishAlphaVariance = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticleSystem.prototype, "shapeIdList", {
        /**
         * 使用するシェイプID設定です。
         * @returns {string[]}
         */
        get: function () {
            return this._drawingData.shapeIdList;
        },
        /**
         * 使用するシェイプID設定です。
         * @param string[]
         */
        set: function (value) {
            this._drawingData.shapeIdList = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticleSystem.prototype, "startColor", {
        /**
         * 初期カラーの設定です。
         * @returns {ColorData}
         */
        get: function () {
            return this._drawingData.startColor;
        },
        /**
         * 初期カラーの設定です。
         * @param value
         */
        set: function (value) {
            this._drawingData.startColor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticleSystem.prototype, "blendMode", {
        /**
         * trueのときシェイプを加算合成します。
         * @returns {boolean}
         */
        get: function () {
            return this._drawingData.blendMode;
        },
        /**
         * trueのときシェイプを加算合成します。
         * @param value
         */
        set: function (value) {
            this._drawingData.blendMode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticleSystem.prototype, "alphaCurveType", {
        /**
         * 透明度の計算式の設定です。
         * @returns {number}
         */
        get: function () {
            return this._drawingData.alphaCurveType;
        },
        /**
         * 透明度の計算式の設定です。
         * @param value - 0:通常, 1:ランダム
         */
        set: function (value) {
            this._drawingData.alphaCurveType = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *  グラフィックオブジェクトです。内部計算に使用します。
     */
    ParticleSystem.HELPER_GRAPHICS = new createjs.Graphics();
    return ParticleSystem;
}());


// CONCATENATED MODULE: ./src/particlejs.ts
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ParticleSystem", function() { return particle_system_ParticleSystem; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Particle", function() { return particle_Particle; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "DrawingData", function() { return data_drawing_DrawingData; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ColorData", function() { return ColorData; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ShapeData", function() { return ShapeData; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ShapeGenerator", function() { return shape_generator_ShapeGenerator; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "AlphaCurveType", function() { return AlphaCurveType; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ShapeType", function() { return ShapeType; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Assets", function() { return Assets; });












/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);
});
//# sourceMappingURL=particlejs.js.map
