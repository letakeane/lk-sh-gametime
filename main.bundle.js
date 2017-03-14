/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Segment = __webpack_require__(1);

	var canvas = document.getElementById('game');
	var context = canvas.getContext('2d');
	var segmentOne = new Segment(240, 240, 10, 10, 'rgba(0,0,0,1)');
	var segmentTwo = new Segment(10, 10, 240, 240, 'rgba(0,0,0,1)');
	// var segmentThree = new Segment(10, 10, 240, 240)
	// var segmentFour = new Segment(10, 10, 240, 240)
	//
	var segments = [segmentOne, segmentTwo];

	requestAnimationFrame(function gameLoop() {
	  context.clearRect(0, 0, canvas.width, canvas.height);

	  segments.forEach(function (segment) {
	    segment.draw(context);
	  });

	  // drawSegment();
	  requestAnimationFrame(gameLoop);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	function Segment(x, y, width, height, color) {
	  // console.log(this)
	  this.x = x;
	  this.y = y;
	  this.width = width;
	  this.height = height;
	  this.color = color;
	}

	Segment.prototype.draw = function (context) {
	  // console.log(this);
	  // debugger;
	  context.fillStyle = this.color;
	  context.fillRect(this.x, this.y, this.width, this.height);
	  return this;
	};

	// Segment.prototype.move = function(context) {
	//
	// }

	module.exports = Segment;

/***/ }
/******/ ]);