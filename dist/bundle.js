/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/CanvasDrawer.ts":
/*!*****************************!*\
  !*** ./src/CanvasDrawer.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var DEFAULT_OPTIONS = {
    backgroundColor: '#FFFFFF',
    mainColor: '#000000',
    fullScreen: true,
    cycleIntervalMS: 1000 / 60,
};
var CanvasDrawer = /** @class */ (function () {
    function CanvasDrawer(canvas, _a) {
        var _b = _a === void 0 ? DEFAULT_OPTIONS : _a, _c = _b.mainColor, mainColor = _c === void 0 ? DEFAULT_OPTIONS.mainColor : _c, _d = _b.backgroundColor, backgroundColor = _d === void 0 ? DEFAULT_OPTIONS.backgroundColor : _d, _e = _b.fullScreen, fullScreen = _e === void 0 ? DEFAULT_OPTIONS.fullScreen : _e, _f = _b.cycleIntervalMS, cycleIntervalMS = _f === void 0 ? DEFAULT_OPTIONS.cycleIntervalMS : _f, tick = _b.tick, mouseMove = _b.mouseMove, click = _b.click;
        var _this = this;
        /*
          Using arrow function properties instead of class methods
          to avoid using .bind all the time
          These functions will not be present on the prototype
        */
        this.clear = function (color) {
            if (color === void 0) { color = _this.backgroundColor; }
            _this.ctx.fillStyle = _this.backgroundColor;
            _this.ctx.fillRect(0, 0, _this.canvas.width, _this.canvas.height);
        };
        this.drawPoint = function (x, y, color, size) {
            if (color === void 0) { color = _this.mainColor; }
            if (size === void 0) { size = 4; }
            _this.ctx.fillStyle = color;
            _this.ctx.fillRect(x, y, size, size);
        };
        this.drawPointArc = function (x, y, color, r1, r0) {
            if (r1 === void 0) { r1 = 5; }
            if (r0 === void 0) { r0 = 1; }
            r1 = Math.max(r1, r0);
            var grd = _this.ctx.createRadialGradient(x, y, r0, x, y, r1);
            grd.addColorStop(0, color);
            grd.addColorStop(1, 'white');
            _this.ctx.beginPath();
            _this.ctx.arc(x, y, r1, 0, Math.PI * 2, false);
            _this.ctx.fillStyle = grd;
            _this.ctx.fill();
        };
        this.dotSymbol = String.fromCharCode(9679);
        this.drawDot = function (x, y, color, size) {
            if (size === void 0) { size = 4; }
            _this.ctx.fillStyle = color;
            _this.ctx.font = size * 5 + "px Verdana";
            _this.ctx.fillText(_this.dotSymbol, x, y);
        };
        this.drawParticle = function (particle) {
            var history = particle.getPositionHistory(), color = particle.getColor();
            var j;
            for (j = 0; j < history.length; ++j) {
                _this.drawDot(history[j].x, history[j].y, color, j % 2 === 0 ? j / 2 : (j + 1) / 2);
            }
            _this.drawDot(particle.getX(), particle.getY(), color, j % 2 === 0 ? j / 2 : (j + 1) / 2);
        };
        this.handleWindowResize = function () {
            _this.canvas.width = window.innerWidth;
            _this.canvas.height = window.innerHeight;
            _this.tick();
        };
        this.handleMouseMove = function (event) {
            _this.mouseMoveFunction(event, _this);
        };
        this.tick = function () {
            _this.clear();
            if (typeof _this.tickFunction === 'function') {
                _this.tickFunction(_this);
            }
        };
        this.startCycle = function () {
            _this.cycleIntervalId = setInterval(_this.tick, _this.cycleIntervalMS);
        };
        this.stopCycle = function () {
            clearTimeout(_this.cycleIntervalId);
            _this.cycleIntervalId = undefined;
        };
        this.getWidth = function () { return _this.canvas.width; };
        this.getHeight = function () { return _this.canvas.height; };
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.mainColor = mainColor;
        this.backgroundColor = backgroundColor;
        this.cycleIntervalMS = cycleIntervalMS;
        this.tickFunction = tick;
        if (fullScreen) {
            window.addEventListener('resize', this.handleWindowResize);
            this.handleWindowResize();
        }
        else {
            this.tick();
        }
        if (typeof mouseMove === 'function') {
            this.mouseMoveFunction = mouseMove;
            canvas.addEventListener('mousemove', this.handleMouseMove);
        }
        if (typeof click === 'function') {
            canvas.addEventListener('click', click);
        }
    }
    return CanvasDrawer;
}());
/* harmony default export */ __webpack_exports__["default"] = (CanvasDrawer);


/***/ }),

/***/ "./src/Particle.ts":
/*!*************************!*\
  !*** ./src/Particle.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");

var Particle = /** @class */ (function () {
    function Particle(x, y, dx, dy, color) {
        if (color === void 0) { color = 'white'; }
        var _this = this;
        this.positionHistory = [];
        this.tick = function (maxX, maxY, minX, minY) {
            if (maxX === void 0) { maxX = 500; }
            if (maxY === void 0) { maxY = 500; }
            if (minX === void 0) { minX = 0; }
            if (minY === void 0) { minY = 0; }
            _this.positionHistory.push({
                x: _this.x,
                y: _this.y,
            });
            if (_this.positionHistory.length > Particle.POSITION_HISTORY_LENGTH) {
                _this.positionHistory.shift();
            }
            if (_this.x < minX) {
                _this.x = minX;
                _this.dx *= -1;
            }
            else if (_this.x > maxX) {
                _this.x = maxX;
                _this.dx *= -1;
            }
            if (_this.y < minY) {
                _this.y = minY;
                _this.dy *= -1;
            }
            else if (_this.y > maxY) {
                _this.y = maxY;
                _this.dy *= -1;
            }
            _this.x += _this.dx;
            _this.y += _this.dy;
        };
        this.setPosition = function (x, y) {
            _this.x = x;
            _this.y = y;
        };
        this.setAcceleration = function (dx, dy) {
            _this.dx = dx;
            _this.dy = dy;
        };
        this.getPositionHistory = function () { return _this.positionHistory; };
        this.getX = function () { return _this.x; };
        this.getY = function () { return _this.y; };
        this.getDX = function () { return _this.dx; };
        this.getDY = function () { return _this.dy; };
        this.getColor = function () { return _this.color; };
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
    }
    Particle.getRandomParticle = function (maxX, maxY, maxStep, minStep) {
        return new Particle(Math.floor(Math.random() * maxX), Math.floor(Math.random() * maxY), (Math.random() > 0.5 ? 1 : -1)
            *
                (Math.floor(Math.random() * (maxStep - minStep)) + minStep), (Math.random() > 0.5 ? 1 : -1)
            *
                (Math.floor(Math.random() * (maxStep - minStep)) + minStep), Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomColor"])());
    };
    Particle.POSITION_HISTORY_LENGTH = 10;
    return Particle;
}());
/* harmony default export */ __webpack_exports__["default"] = (Particle);


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CanvasDrawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CanvasDrawer */ "./src/CanvasDrawer.ts");
/* harmony import */ var _Particle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Particle */ "./src/Particle.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");



var N_PARTICLES = 100, MAGNET_RADIUS = 100, MIN_STEP = 1, MAX_STEP = 8;
var particles = [];
function tick(drawer) {
    var maxX = drawer.getWidth(), maxY = drawer.getHeight();
    for (var i = 0; i < particles.length; ++i) {
        drawer.drawParticle(particles[i]);
        particles[i].tick(maxX, maxY);
    }
}
function mouseMove(event, drawer) {
    for (var i = 0; i < particles.length; ++i) {
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["distance"])(event.clientX, event.clientY, particles[i].getX(), particles[i].getY()) < MAGNET_RADIUS) {
            particles[i].setPosition(event.clientX, event.clientY);
        }
    }
}
var SPEED_DELIMETER = 32;
function click(event, drawer) {
    var x = event.clientX, y = event.clientY;
    for (var i = 0; i < particles.length; ++i) {
        particles[i].setAcceleration(Math.floor((x - particles[i].getX()) / SPEED_DELIMETER), Math.floor((y - particles[i].getY()) / SPEED_DELIMETER));
    }
}
var drawer = new _CanvasDrawer__WEBPACK_IMPORTED_MODULE_0__["default"](document.body.appendChild(document.createElement('canvas')), {
    backgroundColor: 'black',
    fullScreen: true,
    tick: tick,
    mouseMove: mouseMove,
    click: click,
}), maxX = drawer.getWidth(), maxY = drawer.getHeight();
particles = Array(N_PARTICLES);
for (var i = 0; i < particles.length; ++i) {
    particles[i] = _Particle__WEBPACK_IMPORTED_MODULE_1__["default"].getRandomParticle(maxX, maxY, MAX_STEP, MIN_STEP);
}
drawer.startCycle();


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! exports provided: getRandomColor, distance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomColor", function() { return getRandomColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
function getRandomInt(max, min) {
    if (min === void 0) { min = 0; }
    return Math.floor(Math.random() * (max - min) + min);
}
function getRandomColor() {
    return "rgba(" + getRandomInt(100, 0) + "," + getRandomInt(200, 50) + "," + getRandomInt(200, 50) + "," + Math.random() + ")";
}
function sqr(n) {
    return n * n;
}
function distance(x1, y1, x2, y2) {
    return Math.sqrt(sqr(x1 - x2) + sqr(y1 - y2));
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhbnZhc0RyYXdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGFydGljbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDckVBO0FBQUEsSUFBTSxlQUFlLEdBQXdCO0lBQzNDLGVBQWUsRUFBRSxTQUFTO0lBQzFCLFNBQVMsRUFBRSxTQUFTO0lBQ3BCLFVBQVUsRUFBRSxJQUFJO0lBQ2hCLGVBQWUsRUFBRSxJQUFJLEdBQUcsRUFBRTtDQUMzQjtBQUVEO0lBU0Usc0JBQ0UsTUFBeUIsRUFDekIsRUFRd0M7WUFSeEMseUNBUXdDLEVBUHRDLGlCQUFxQyxFQUFyQywwREFBcUMsRUFDckMsdUJB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LENBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBRSxHQUFHLEdBQUcsQ0FBRSxDQUFDO0FBQzNELENBQUM7QUFFSztJQUNKLE9BQU8sVUFDTCxZQUFZLENBQUUsR0FBRyxFQUFFLENBQUMsQ0FBRSxTQUV0QixZQUFZLENBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBRSxTQUV2QixZQUFZLENBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBRSxTQUV2QixJQUFJLENBQUMsTUFBTSxFQUFFLE1BQ1osQ0FBQztBQUNOLENBQUM7QUFFRCxhQUFlLENBQVM7SUFDdEIsT0FBTyxDQUFDLEdBQUMsQ0FBQyxDQUFDO0FBQ2IsQ0FBQztBQUVLLGtCQUFxQixFQUFVLEVBQUUsRUFBVSxFQUFFLEVBQVUsRUFBRSxFQUFVO0lBQ3ZFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBRSxHQUFHLEdBQUcsQ0FBRSxFQUFFLEdBQUcsRUFBRSxDQUFFLENBQUUsQ0FBQztBQUN0RCxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IFBhcnRpY2xlIGZyb20gJy4vUGFydGljbGUnO1xyXG5pbXBvcnQgeyBnZXRSYW5kb21Db2xvciB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxudHlwZSBDYW52YXNEcmF3ZXJPcHRpb25zID0gUGFydGlhbDx7XHJcbiAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcbiAgbWFpbkNvbG9yOiBzdHJpbmc7XHJcbiAgZnVsbFNjcmVlbjogYm9vbGVhbjtcclxuICBjeWNsZUludGVydmFsTVM6IG51bWJlcjtcclxuICB0aWNrICggZHJhd2VyPzogQ2FudmFzRHJhd2VyICk6IHZvaWQ7XHJcbiAgbW91c2VNb3ZlICggZXZlbnQ6IE1vdXNlRXZlbnQsIGRyYXdlcj86IENhbnZhc0RyYXdlciApOiB2b2lkO1xyXG4gIGNsaWNrICggZXZlbnQ6IE1vdXNlRXZlbnQsIGRyYXdlcj86IENhbnZhc0RyYXdlciApOiB2b2lkO1xyXG59PjtcclxuXHJcbmNvbnN0IERFRkFVTFRfT1BUSU9OUzogQ2FudmFzRHJhd2VyT3B0aW9ucyA9IHtcclxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZGRkZGJyxcclxuICBtYWluQ29sb3I6ICcjMDAwMDAwJyxcclxuICBmdWxsU2NyZWVuOiB0cnVlLFxyXG4gIGN5Y2xlSW50ZXJ2YWxNUzogMTAwMCAvIDYwLFxyXG59XHJcblxyXG5jbGFzcyBDYW52YXNEcmF3ZXIge1xyXG4gIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICBwcml2YXRlIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gIHByaXZhdGUgbWFpbkNvbG9yOiBDYW52YXNEcmF3ZXJPcHRpb25zWydtYWluQ29sb3InXTtcclxuICBwcml2YXRlIGJhY2tncm91bmRDb2xvcjogQ2FudmFzRHJhd2VyT3B0aW9uc1snYmFja2dyb3VuZENvbG9yJ107XHJcbiAgcHJpdmF0ZSB0aWNrRnVuY3Rpb24/OiBDYW52YXNEcmF3ZXJPcHRpb25zWyd0aWNrJ107XHJcbiAgcHJpdmF0ZSBtb3VzZU1vdmVGdW5jdGlvbj86IENhbnZhc0RyYXdlck9wdGlvbnNbJ21vdXNlTW92ZSddO1xyXG4gIHByaXZhdGUgY3ljbGVJbnRlcnZhbE1TOiBDYW52YXNEcmF3ZXJPcHRpb25zWydjeWNsZUludGVydmFsTVMnXTtcclxuICBwcml2YXRlIGN5Y2xlSW50ZXJ2YWxJZD86IG51bWJlcjtcclxuICBjb25zdHJ1Y3RvciAoXHJcbiAgICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LFxyXG4gICAge1xyXG4gICAgICBtYWluQ29sb3IgPSBERUZBVUxUX09QVElPTlMubWFpbkNvbG9yLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3IgPSBERUZBVUxUX09QVElPTlMuYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICBmdWxsU2NyZWVuID0gREVGQVVMVF9PUFRJT05TLmZ1bGxTY3JlZW4sXHJcbiAgICAgIGN5Y2xlSW50ZXJ2YWxNUyA9IERFRkFVTFRfT1BUSU9OUy5jeWNsZUludGVydmFsTVMsXHJcbiAgICAgIHRpY2ssXHJcbiAgICAgIG1vdXNlTW92ZSxcclxuICAgICAgY2xpY2ssXHJcbiAgICB9OiBDYW52YXNEcmF3ZXJPcHRpb25zID0gREVGQVVMVF9PUFRJT05TLFxyXG4gICkge1xyXG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCAnMmQnICk7XHJcbiAgICB0aGlzLm1haW5Db2xvciA9IG1haW5Db2xvcjtcclxuICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9yO1xyXG4gICAgdGhpcy5jeWNsZUludGVydmFsTVMgPSBjeWNsZUludGVydmFsTVM7XHJcbiAgICB0aGlzLnRpY2tGdW5jdGlvbiA9IHRpY2s7XHJcblxyXG5cclxuICAgIGlmICggZnVsbFNjcmVlbiApIHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdyZXNpemUnLCB0aGlzLmhhbmRsZVdpbmRvd1Jlc2l6ZSApO1xyXG4gICAgICB0aGlzLmhhbmRsZVdpbmRvd1Jlc2l6ZSgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMudGljaygpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoIHR5cGVvZiBtb3VzZU1vdmUgPT09ICdmdW5jdGlvbicgKSB7XHJcbiAgICAgIHRoaXMubW91c2VNb3ZlRnVuY3Rpb24gPSBtb3VzZU1vdmU7XHJcbiAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVNb3VzZU1vdmUgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIHR5cGVvZiBjbGljayA9PT0gJ2Z1bmN0aW9uJyApIHtcclxuICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGNsaWNrICk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qXHJcbiAgICBVc2luZyBhcnJvdyBmdW5jdGlvbiBwcm9wZXJ0aWVzIGluc3RlYWQgb2YgY2xhc3MgbWV0aG9kc1xyXG4gICAgdG8gYXZvaWQgdXNpbmcgLmJpbmQgYWxsIHRoZSB0aW1lXHJcbiAgICBUaGVzZSBmdW5jdGlvbnMgd2lsbCBub3QgYmUgcHJlc2VudCBvbiB0aGUgcHJvdG90eXBlXHJcbiAgKi9cclxuICBjbGVhciA9ICggY29sb3I6IHN0cmluZyA9IHRoaXMuYmFja2dyb3VuZENvbG9yICkgPT4ge1xyXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICB0aGlzLmN0eC5maWxsUmVjdCggMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCApO1xyXG4gIH07XHJcbiAgZHJhd1BvaW50ID0gKCB4OiBudW1iZXIsIHk6IG51bWJlciwgY29sb3I6IHN0cmluZyA9IHRoaXMubWFpbkNvbG9yLCBzaXplID0gNCApID0+IHtcclxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgdGhpcy5jdHguZmlsbFJlY3QoIHgsIHksIHNpemUsIHNpemUgKTtcclxuICB9O1xyXG4gIGRyYXdQb2ludEFyYyA9ICggeDogbnVtYmVyLCB5OiBudW1iZXIsIGNvbG9yOiBzdHJpbmcsIHIxID0gNSwgcjAgPSAxICkgPT4ge1xyXG4gICAgcjEgPSBNYXRoLm1heCggcjEsIHIwICk7XHJcblxyXG4gICAgY29uc3QgZ3JkID0gdGhpcy5jdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoIHgsIHksIHIwLCB4LCB5LCByMSApO1xyXG4gICAgZ3JkLmFkZENvbG9yU3RvcCggMCwgY29sb3IgKTtcclxuICAgIGdyZC5hZGRDb2xvclN0b3AoIDEsICd3aGl0ZScgKTtcclxuXHJcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgIHRoaXMuY3R4LmFyYyggeCwgeSwgcjEsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSApO1xyXG5cclxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGdyZDtcclxuICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICB9O1xyXG4gIGRvdFN5bWJvbCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoIDk2NzkgKTtcclxuICBkcmF3RG90ID0gKCB4OiBudW1iZXIsIHk6IG51bWJlciwgY29sb3I6IHN0cmluZywgc2l6ZSA9IDQgKSA9PiB7XHJcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgIHRoaXMuY3R4LmZvbnQgPSBgJHtzaXplKjV9cHggVmVyZGFuYWA7XHJcbiAgICB0aGlzLmN0eC5maWxsVGV4dCggdGhpcy5kb3RTeW1ib2wsIHgsIHkgKTtcclxuICB9O1xyXG4gIGRyYXdQYXJ0aWNsZSA9ICggcGFydGljbGU6IFBhcnRpY2xlICkgPT4ge1xyXG4gICAgY29uc3RcclxuICAgICAgaGlzdG9yeSA9IHBhcnRpY2xlLmdldFBvc2l0aW9uSGlzdG9yeSgpLFxyXG4gICAgICBjb2xvciA9IHBhcnRpY2xlLmdldENvbG9yKCk7XHJcblxyXG4gICAgbGV0IGo6IG51bWJlcjtcclxuICAgIGZvciAoIGogPSAwOyBqIDwgaGlzdG9yeS5sZW5ndGg7ICsraiApIHtcclxuICAgICAgdGhpcy5kcmF3RG90KFxyXG4gICAgICAgIGhpc3Rvcnlbal0ueCxcclxuICAgICAgICBoaXN0b3J5W2pdLnksXHJcbiAgICAgICAgY29sb3IsXHJcbiAgICAgICAgaiAlIDIgPT09IDAgPyBqIC8gMiA6ICggaiArIDEgKSAvIDIsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kcmF3RG90KFxyXG4gICAgICBwYXJ0aWNsZS5nZXRYKCksXHJcbiAgICAgIHBhcnRpY2xlLmdldFkoKSxcclxuICAgICAgY29sb3IsXHJcbiAgICAgIGogJSAyID09PSAwID8gaiAvIDIgOiAoIGogKyAxICkgLyAyLFxyXG4gICAgKTtcclxuICB9O1xyXG4gIGhhbmRsZVdpbmRvd1Jlc2l6ZSA9ICgpID0+IHtcclxuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICBcclxuICAgIHRoaXMudGljaygpO1xyXG4gIH07XHJcbiAgaGFuZGxlTW91c2VNb3ZlID0gKCBldmVudDogTW91c2VFdmVudCApID0+IHtcclxuICAgIHRoaXMubW91c2VNb3ZlRnVuY3Rpb24oIGV2ZW50LCB0aGlzICk7XHJcbiAgfTtcclxuICB0aWNrID0gKCkgPT4ge1xyXG4gICAgdGhpcy5jbGVhcigpO1xyXG5cclxuICAgIGlmICggdHlwZW9mIHRoaXMudGlja0Z1bmN0aW9uID09PSAnZnVuY3Rpb24nICkge1xyXG4gICAgICB0aGlzLnRpY2tGdW5jdGlvbiggdGhpcyApO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgc3RhcnRDeWNsZSA9ICgpID0+IHtcclxuICAgIHRoaXMuY3ljbGVJbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoIHRoaXMudGljaywgdGhpcy5jeWNsZUludGVydmFsTVMgKTtcclxuICB9O1xyXG4gIHN0b3BDeWNsZSA9ICgpID0+IHtcclxuICAgIGNsZWFyVGltZW91dCggdGhpcy5jeWNsZUludGVydmFsSWQgKTtcclxuICAgIHRoaXMuY3ljbGVJbnRlcnZhbElkID0gdW5kZWZpbmVkO1xyXG4gIH07XHJcbiAgZ2V0V2lkdGggPSAoKSA9PiB0aGlzLmNhbnZhcy53aWR0aDtcclxuICBnZXRIZWlnaHQgPSAoKSA9PiB0aGlzLmNhbnZhcy5oZWlnaHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbnZhc0RyYXdlcjtcclxuIiwiaW1wb3J0IHsgZ2V0UmFuZG9tQ29sb3IgfSBmcm9tICcuL3V0aWxzJztcclxuXHJcbmNsYXNzIFBhcnRpY2xlIHtcclxuICBwcml2YXRlIHg6IG51bWJlcjtcclxuICBwcml2YXRlIHk6IG51bWJlcjtcclxuICBwcml2YXRlIGR4OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBkeTogbnVtYmVyO1xyXG4gIHByaXZhdGUgY29sb3I6IHN0cmluZztcclxuICBzdGF0aWMgUE9TSVRJT05fSElTVE9SWV9MRU5HVEggPSAxMDtcclxuICBwcml2YXRlIHBvc2l0aW9uSGlzdG9yeTogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9W10gPSBbXTtcclxuICBjb25zdHJ1Y3RvciAoXHJcbiAgICB4OiBudW1iZXIsXHJcbiAgICB5OiBudW1iZXIsXHJcbiAgICBkeDogbnVtYmVyLFxyXG4gICAgZHk6IG51bWJlcixcclxuICAgIGNvbG9yOiBzdHJpbmcgPSAnd2hpdGUnLFxyXG4gICkge1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICB0aGlzLmR4ID0gZHg7XHJcbiAgICB0aGlzLmR5ID0gZHk7XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgfVxyXG4gIHRpY2sgPSAoIG1heFggPSA1MDAsIG1heFkgPSA1MDAsIG1pblggPSAwLCBtaW5ZID0gMCApID0+IHtcclxuICAgIHRoaXMucG9zaXRpb25IaXN0b3J5LnB1c2goIHtcclxuICAgICAgeDogdGhpcy54LFxyXG4gICAgICB5OiB0aGlzLnksXHJcbiAgICB9ICk7XHJcblxyXG4gICAgaWYgKCB0aGlzLnBvc2l0aW9uSGlzdG9yeS5sZW5ndGggPiBQYXJ0aWNsZS5QT1NJVElPTl9ISVNUT1JZX0xFTkdUSCApIHtcclxuICAgICAgdGhpcy5wb3NpdGlvbkhpc3Rvcnkuc2hpZnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIHRoaXMueCA8IG1pblggKSB7XHJcbiAgICAgIHRoaXMueCA9IG1pblg7XHJcbiAgICAgIHRoaXMuZHggKj0gLTE7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICggdGhpcy54ID4gbWF4WCApIHtcclxuICAgICAgdGhpcy54ID0gbWF4WDtcclxuICAgICAgdGhpcy5keCAqPSAtMTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIHRoaXMueSA8IG1pblkgKSB7XHJcbiAgICAgIHRoaXMueSA9IG1pblk7XHJcbiAgICAgIHRoaXMuZHkgKj0gLTE7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICggdGhpcy55ID4gbWF4WSApIHtcclxuICAgICAgdGhpcy55ID0gbWF4WTtcclxuICAgICAgdGhpcy5keSAqPSAtMTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnggKz0gdGhpcy5keDtcclxuICAgIHRoaXMueSArPSB0aGlzLmR5O1xyXG4gIH07XHJcbiAgc2V0UG9zaXRpb24gPSAoIHg6IG51bWJlciwgeTogbnVtYmVyICkgPT4ge1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgfTtcclxuICBzZXRBY2NlbGVyYXRpb24gPSAoIGR4OiBudW1iZXIsIGR5OiBudW1iZXIgKSA9PiB7XHJcbiAgICB0aGlzLmR4ID0gZHg7XHJcbiAgICB0aGlzLmR5ID0gZHk7XHJcbiAgfTtcclxuICBnZXRQb3NpdGlvbkhpc3RvcnkgPSAoKSA9PiB0aGlzLnBvc2l0aW9uSGlzdG9yeTtcclxuICBnZXRYID0gKCkgPT4gdGhpcy54O1xyXG4gIGdldFkgPSAoKSA9PiB0aGlzLnk7XHJcbiAgZ2V0RFggPSAoKSA9PiB0aGlzLmR4O1xyXG4gIGdldERZID0gKCkgPT4gdGhpcy5keTtcclxuICBnZXRDb2xvciA9ICgpID0+IHRoaXMuY29sb3I7XHJcbiAgc3RhdGljIGdldFJhbmRvbVBhcnRpY2xlIChcclxuICAgIG1heFg6IG51bWJlcixcclxuICAgIG1heFk6IG51bWJlcixcclxuICAgIG1heFN0ZXA6IG51bWJlcixcclxuICAgIG1pblN0ZXA6IG51bWJlcixcclxuICApOiBQYXJ0aWNsZSB7XHJcbiAgICByZXR1cm4gbmV3IFBhcnRpY2xlKFxyXG4gICAgICBNYXRoLmZsb29yKCBNYXRoLnJhbmRvbSgpICogbWF4WCApLFxyXG4gICAgICBNYXRoLmZsb29yKCBNYXRoLnJhbmRvbSgpICogbWF4WSApLFxyXG4gICAgICAoIE1hdGgucmFuZG9tKCkgPiAwLjUgPyAxIDogLTEgKVxyXG4gICAgICAqXHJcbiAgICAgICggTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSAqICggbWF4U3RlcCAtIG1pblN0ZXAgKSApICsgbWluU3RlcCApLFxyXG4gICAgICAoIE1hdGgucmFuZG9tKCkgPiAwLjUgPyAxIDogLTEgKVxyXG4gICAgICAqXHJcbiAgICAgICggTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSAqICggbWF4U3RlcCAtIG1pblN0ZXAgKSApICsgbWluU3RlcCApLFxyXG4gICAgICBnZXRSYW5kb21Db2xvcigpLFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhcnRpY2xlO1xyXG4iLCJpbXBvcnQgQ2FudmFzRHJhd2VyIGZyb20gJy4vQ2FudmFzRHJhd2VyJztcclxuaW1wb3J0IFBhcnRpY2xlIGZyb20gJy4vUGFydGljbGUnO1xyXG5pbXBvcnQgeyBkaXN0YW5jZSB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxuY29uc3RcclxuICBOX1BBUlRJQ0xFUyA9IDEwMCxcclxuICBNQUdORVRfUkFESVVTID0gMTAwLFxyXG4gIE1JTl9TVEVQID0gMSxcclxuICBNQVhfU1RFUCA9IDg7XHJcblxyXG5sZXQgcGFydGljbGVzOiBQYXJ0aWNsZVtdID0gW107XHJcblxyXG5mdW5jdGlvbiB0aWNrICggZHJhd2VyOiBDYW52YXNEcmF3ZXIgKTogdm9pZCB7XHJcbiAgY29uc3RcclxuICAgIG1heFggPSBkcmF3ZXIuZ2V0V2lkdGgoKSxcclxuICAgIG1heFkgPSBkcmF3ZXIuZ2V0SGVpZ2h0KCk7XHJcblxyXG4gIGZvciAoIGxldCBpID0gMDsgaSA8IHBhcnRpY2xlcy5sZW5ndGg7ICsraSApIHtcclxuICAgIGRyYXdlci5kcmF3UGFydGljbGUoIHBhcnRpY2xlc1tpXSApO1xyXG4gICAgcGFydGljbGVzW2ldLnRpY2soIG1heFgsIG1heFkgKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vdXNlTW92ZSAoIGV2ZW50OiBNb3VzZUV2ZW50LCBkcmF3ZXI6IENhbnZhc0RyYXdlciApOiB2b2lkIHtcclxuICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBwYXJ0aWNsZXMubGVuZ3RoOyArK2kgKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGRpc3RhbmNlKFxyXG4gICAgICAgIGV2ZW50LmNsaWVudFgsXHJcbiAgICAgICAgZXZlbnQuY2xpZW50WSxcclxuICAgICAgICBwYXJ0aWNsZXNbaV0uZ2V0WCgpLFxyXG4gICAgICAgIHBhcnRpY2xlc1tpXS5nZXRZKCksXHJcbiAgICAgICkgPCBNQUdORVRfUkFESVVTXHJcbiAgICApIHtcclxuICAgICAgcGFydGljbGVzW2ldLnNldFBvc2l0aW9uKCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBTUEVFRF9ERUxJTUVURVIgPSAzMjtcclxuXHJcbmZ1bmN0aW9uIGNsaWNrICggZXZlbnQ6IE1vdXNlRXZlbnQsIGRyYXdlcjogQ2FudmFzRHJhd2VyICk6IHZvaWQge1xyXG4gIGNvbnN0XHJcbiAgICB4ID0gZXZlbnQuY2xpZW50WCxcclxuICAgIHkgPSBldmVudC5jbGllbnRZO1xyXG5cclxuICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBwYXJ0aWNsZXMubGVuZ3RoOyArK2kgKSB7XHJcbiAgICBwYXJ0aWNsZXNbaV0uc2V0QWNjZWxlcmF0aW9uKFxyXG4gICAgICBNYXRoLmZsb29yKCAoIHggLSBwYXJ0aWNsZXNbaV0uZ2V0WCgpICkgLyBTUEVFRF9ERUxJTUVURVIgKSxcclxuICAgICAgTWF0aC5mbG9vciggKCB5IC0gcGFydGljbGVzW2ldLmdldFkoKSApIC8gU1BFRURfREVMSU1FVEVSICksXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3RcclxuICBkcmF3ZXIgPSBuZXcgQ2FudmFzRHJhd2VyKFxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2NhbnZhcycgKSApLFxyXG4gICAge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdibGFjaycsXHJcbiAgICAgIGZ1bGxTY3JlZW46IHRydWUsXHJcbiAgICAgIHRpY2ssXHJcbiAgICAgIG1vdXNlTW92ZSxcclxuICAgICAgY2xpY2ssXHJcbiAgICB9LFxyXG4gICksXHJcbiAgbWF4WCA9IGRyYXdlci5nZXRXaWR0aCgpLFxyXG4gIG1heFkgPSBkcmF3ZXIuZ2V0SGVpZ2h0KCk7XHJcblxyXG5wYXJ0aWNsZXMgPSBBcnJheSggTl9QQVJUSUNMRVMgKTtcclxuZm9yICggbGV0IGkgPSAwOyBpIDwgcGFydGljbGVzLmxlbmd0aDsgKytpICkge1xyXG4gIHBhcnRpY2xlc1tpXSA9IFBhcnRpY2xlLmdldFJhbmRvbVBhcnRpY2xlKCBtYXhYLCBtYXhZLCBNQVhfU1RFUCwgTUlOX1NURVAgKTtcclxufVxyXG5cclxuZHJhd2VyLnN0YXJ0Q3ljbGUoKTtcclxuIiwiZnVuY3Rpb24gZ2V0UmFuZG9tSW50KCBtYXg6IG51bWJlciwgbWluID0gMCApOiBudW1iZXIge1xyXG4gIHJldHVybiBNYXRoLmZsb29yKCBNYXRoLnJhbmRvbSgpICogKCBtYXggLSBtaW4gKSArIG1pbiApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tQ29sb3IoKTogc3RyaW5nIHtcclxuICByZXR1cm4gYHJnYmEoJHtcclxuICAgIGdldFJhbmRvbUludCggMTAwLCAwIClcclxuICB9LCR7XHJcbiAgICBnZXRSYW5kb21JbnQoIDIwMCwgNTAgKVxyXG4gIH0sJHtcclxuICAgIGdldFJhbmRvbUludCggMjAwLCA1MCApXHJcbiAgfSwke1xyXG4gICAgTWF0aC5yYW5kb20oKVxyXG4gIH0pYDtcclxufVxyXG5cclxuZnVuY3Rpb24gc3FyICggbjogbnVtYmVyICk6IG51bWJlciB7XHJcbiAgcmV0dXJuIG4qbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3RhbmNlICggeDE6IG51bWJlciwgeTE6IG51bWJlciwgeDI6IG51bWJlciwgeTI6IG51bWJlciApOiBudW1iZXIge1xyXG4gIHJldHVybiBNYXRoLnNxcnQoIHNxciggeDEgLSB4MiApICsgc3FyKCB5MSAtIHkyICkgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9