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
        var _b = _a === void 0 ? DEFAULT_OPTIONS : _a, _c = _b.mainColor, mainColor = _c === void 0 ? DEFAULT_OPTIONS.mainColor : _c, _d = _b.backgroundColor, backgroundColor = _d === void 0 ? DEFAULT_OPTIONS.backgroundColor : _d, _e = _b.fullScreen, fullScreen = _e === void 0 ? DEFAULT_OPTIONS.fullScreen : _e, _f = _b.cycleIntervalMS, cycleIntervalMS = _f === void 0 ? DEFAULT_OPTIONS.cycleIntervalMS : _f, tick = _b.tick, mouseMove = _b.mouseMove;
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
        if (typeof tick === 'function') {
            this.tickFunction = tick;
            canvas.addEventListener('click', function () {
                if (_this.cycleIntervalId !== undefined) {
                    _this.stopCycle();
                }
                else {
                    _this.startCycle();
                }
            });
        }
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
        this.getPositionHistory = function () { return _this.positionHistory; };
        this.getX = function () { return _this.x; };
        this.getY = function () { return _this.y; };
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
var drawer = new _CanvasDrawer__WEBPACK_IMPORTED_MODULE_0__["default"](document.body.appendChild(document.createElement('canvas')), {
    backgroundColor: 'black',
    fullScreen: true,
    tick: tick,
    mouseMove: mouseMove,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhbnZhc0RyYXdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGFydGljbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdEVBO0FBQUEsSUFBTSxlQUFlLEdBQXdCO0lBQzNDLGVBQWUsRUFBRSxTQUFTO0lBQzFCLFNBQVMsRUFBRSxTQUFTO0lBQ3BCLFVBQVUsRUFBRSxJQUFJO0lBQ2hCLGVBQWUsRUFBRSxJQUFJLEdBQUcsRUFBRTtDQUMzQjtBQUVEO0lBU0Usc0JBQ0UsTUFBeUIsRUFDekIsRUFPd0M7WUFQeEMseUNBT3dDLEVBTnRDLGlCQUFxQyxFQUFyQywwREFBcUMsRUFDckMsdUJB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QUUsV0FBVyxDQUFFLENBQUM7QUFDakMsS0FBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUc7SUFDM0MsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLGlEQUFRLENBQUMsaUJBQWlCLENBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFFLENBQUM7Q0FDN0U7QUFFRCxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3hEcEI7QUFBQSxzQkFBdUIsR0FBVyxFQUFFLEdBQU87SUFBUCw2QkFBTztJQUN6QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBRSxHQUFHLEdBQUcsQ0FBRSxDQUFDO0FBQzNELENBQUM7QUFFSztJQUNKLE9BQU8sVUFDTCxZQUFZLENBQUUsR0FBRyxFQUFFLENBQUMsQ0FBRSxTQUV0QixZQUFZLENBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBRSxTQUV2QixZQUFZLENBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBRSxTQUV2QixJQUFJLENBQUMsTUFBTSxFQUFFLE1BQ1osQ0FBQztBQUNOLENBQUM7QUFFRCxhQUFlLENBQVM7SUFDdEIsT0FBTyxDQUFDLEdBQUMsQ0FBQyxDQUFDO0FBQ2IsQ0FBQztBQUVLLGtCQUFxQixFQUFVLEVBQUUsRUFBVSxFQUFFLEVBQVUsRUFBRSxFQUFVO0lBQ3ZFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBRSxHQUFHLEdBQUcsQ0FBRSxFQUFFLEdBQUcsRUFBRSxDQUFFLENBQUUsQ0FBQztBQUN0RCxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IFBhcnRpY2xlIGZyb20gJy4vUGFydGljbGUnO1xyXG5pbXBvcnQgeyBnZXRSYW5kb21Db2xvciB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxudHlwZSBDYW52YXNEcmF3ZXJPcHRpb25zID0gUGFydGlhbDx7XHJcbiAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcbiAgbWFpbkNvbG9yOiBzdHJpbmc7XHJcbiAgZnVsbFNjcmVlbjogYm9vbGVhbjtcclxuICBjeWNsZUludGVydmFsTVM6IG51bWJlcjtcclxuICB0aWNrICggZHJhd2VyPzogQ2FudmFzRHJhd2VyICk6IHZvaWQ7XHJcbiAgbW91c2VNb3ZlICggZXZlbnQ6IE1vdXNlRXZlbnQsIGRyYXdlcj86IENhbnZhc0RyYXdlciApOiB2b2lkO1xyXG59PjtcclxuXHJcbmNvbnN0IERFRkFVTFRfT1BUSU9OUzogQ2FudmFzRHJhd2VyT3B0aW9ucyA9IHtcclxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZGRkZGJyxcclxuICBtYWluQ29sb3I6ICcjMDAwMDAwJyxcclxuICBmdWxsU2NyZWVuOiB0cnVlLFxyXG4gIGN5Y2xlSW50ZXJ2YWxNUzogMTAwMCAvIDYwLFxyXG59XHJcblxyXG5jbGFzcyBDYW52YXNEcmF3ZXIge1xyXG4gIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICBwcml2YXRlIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gIHByaXZhdGUgbWFpbkNvbG9yOiBDYW52YXNEcmF3ZXJPcHRpb25zWydtYWluQ29sb3InXTtcclxuICBwcml2YXRlIGJhY2tncm91bmRDb2xvcjogQ2FudmFzRHJhd2VyT3B0aW9uc1snYmFja2dyb3VuZENvbG9yJ107XHJcbiAgcHJpdmF0ZSB0aWNrRnVuY3Rpb24/OiBDYW52YXNEcmF3ZXJPcHRpb25zWyd0aWNrJ107XHJcbiAgcHJpdmF0ZSBtb3VzZU1vdmVGdW5jdGlvbj86IENhbnZhc0RyYXdlck9wdGlvbnNbJ21vdXNlTW92ZSddO1xyXG4gIHByaXZhdGUgY3ljbGVJbnRlcnZhbE1TOiBDYW52YXNEcmF3ZXJPcHRpb25zWydjeWNsZUludGVydmFsTVMnXTtcclxuICBwcml2YXRlIGN5Y2xlSW50ZXJ2YWxJZD86IG51bWJlcjtcclxuICBjb25zdHJ1Y3RvciAoXHJcbiAgICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LFxyXG4gICAge1xyXG4gICAgICBtYWluQ29sb3IgPSBERUZBVUxUX09QVElPTlMubWFpbkNvbG9yLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3IgPSBERUZBVUxUX09QVElPTlMuYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICBmdWxsU2NyZWVuID0gREVGQVVMVF9PUFRJT05TLmZ1bGxTY3JlZW4sXHJcbiAgICAgIGN5Y2xlSW50ZXJ2YWxNUyA9IERFRkFVTFRfT1BUSU9OUy5jeWNsZUludGVydmFsTVMsXHJcbiAgICAgIHRpY2ssXHJcbiAgICAgIG1vdXNlTW92ZSxcclxuICAgIH06IENhbnZhc0RyYXdlck9wdGlvbnMgPSBERUZBVUxUX09QVElPTlMsXHJcbiAgKSB7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoICcyZCcgKTtcclxuICAgIHRoaXMubWFpbkNvbG9yID0gbWFpbkNvbG9yO1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSBiYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICB0aGlzLmN5Y2xlSW50ZXJ2YWxNUyA9IGN5Y2xlSW50ZXJ2YWxNUztcclxuICAgIFxyXG4gICAgaWYgKCB0eXBlb2YgdGljayA9PT0gJ2Z1bmN0aW9uJyApIHtcclxuICAgICAgdGhpcy50aWNrRnVuY3Rpb24gPSB0aWNrO1xyXG4gICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGlmICggdGhpcy5jeWNsZUludGVydmFsSWQgIT09IHVuZGVmaW5lZCApIHtcclxuICAgICAgICAgIHRoaXMuc3RvcEN5Y2xlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zdGFydEN5Y2xlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9ICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCBmdWxsU2NyZWVuICkge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlV2luZG93UmVzaXplICk7XHJcbiAgICAgIHRoaXMuaGFuZGxlV2luZG93UmVzaXplKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy50aWNrKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmICggdHlwZW9mIG1vdXNlTW92ZSA9PT0gJ2Z1bmN0aW9uJyApIHtcclxuICAgICAgdGhpcy5tb3VzZU1vdmVGdW5jdGlvbiA9IG1vdXNlTW92ZTtcclxuICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCB0aGlzLmhhbmRsZU1vdXNlTW92ZSApO1xyXG4gICAgfSAgICBcclxuICB9XHJcbiAgLypcclxuICAgIFVzaW5nIGFycm93IGZ1bmN0aW9uIHByb3BlcnRpZXMgaW5zdGVhZCBvZiBjbGFzcyBtZXRob2RzXHJcbiAgICB0byBhdm9pZCB1c2luZyAuYmluZCBhbGwgdGhlIHRpbWVcclxuICAgIFRoZXNlIGZ1bmN0aW9ucyB3aWxsIG5vdCBiZSBwcmVzZW50IG9uIHRoZSBwcm90b3R5cGVcclxuICAqL1xyXG4gIGNsZWFyID0gKCBjb2xvcjogc3RyaW5nID0gdGhpcy5iYWNrZ3JvdW5kQ29sb3IgKSA9PiB7XHJcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmJhY2tncm91bmRDb2xvcjtcclxuICAgIHRoaXMuY3R4LmZpbGxSZWN0KCAwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0ICk7XHJcbiAgfTtcclxuICBkcmF3UG9pbnQgPSAoIHg6IG51bWJlciwgeTogbnVtYmVyLCBjb2xvcjogc3RyaW5nID0gdGhpcy5tYWluQ29sb3IsIHNpemUgPSA0ICkgPT4ge1xyXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICB0aGlzLmN0eC5maWxsUmVjdCggeCwgeSwgc2l6ZSwgc2l6ZSApO1xyXG4gIH07XHJcbiAgZHJhd1BvaW50QXJjID0gKCB4OiBudW1iZXIsIHk6IG51bWJlciwgY29sb3I6IHN0cmluZywgcjEgPSA1LCByMCA9IDEgKSA9PiB7XHJcbiAgICByMSA9IE1hdGgubWF4KCByMSwgcjAgKTtcclxuXHJcbiAgICBjb25zdCBncmQgPSB0aGlzLmN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCggeCwgeSwgcjAsIHgsIHksIHIxICk7XHJcbiAgICBncmQuYWRkQ29sb3JTdG9wKCAwLCBjb2xvciApO1xyXG4gICAgZ3JkLmFkZENvbG9yU3RvcCggMSwgJ3doaXRlJyApO1xyXG5cclxuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgdGhpcy5jdHguYXJjKCB4LCB5LCByMSwgMCwgTWF0aC5QSSAqIDIsIGZhbHNlICk7XHJcblxyXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gZ3JkO1xyXG4gICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gIH07XHJcbiAgZG90U3ltYm9sID0gU3RyaW5nLmZyb21DaGFyQ29kZSggOTY3OSApO1xyXG4gIGRyYXdEb3QgPSAoIHg6IG51bWJlciwgeTogbnVtYmVyLCBjb2xvcjogc3RyaW5nLCBzaXplID0gNCApID0+IHtcclxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgdGhpcy5jdHguZm9udCA9IGAke3NpemUqNX1weCBWZXJkYW5hYDtcclxuICAgIHRoaXMuY3R4LmZpbGxUZXh0KCB0aGlzLmRvdFN5bWJvbCwgeCwgeSApO1xyXG4gIH07XHJcbiAgZHJhd1BhcnRpY2xlID0gKCBwYXJ0aWNsZTogUGFydGljbGUgKSA9PiB7XHJcbiAgICBjb25zdFxyXG4gICAgICBoaXN0b3J5ID0gcGFydGljbGUuZ2V0UG9zaXRpb25IaXN0b3J5KCksXHJcbiAgICAgIGNvbG9yID0gcGFydGljbGUuZ2V0Q29sb3IoKTtcclxuXHJcbiAgICBsZXQgajogbnVtYmVyO1xyXG4gICAgZm9yICggaiA9IDA7IGogPCBoaXN0b3J5Lmxlbmd0aDsgKytqICkge1xyXG4gICAgICB0aGlzLmRyYXdEb3QoXHJcbiAgICAgICAgaGlzdG9yeVtqXS54LFxyXG4gICAgICAgIGhpc3Rvcnlbal0ueSxcclxuICAgICAgICBjb2xvcixcclxuICAgICAgICBqICUgMiA9PT0gMCA/IGogLyAyIDogKCBqICsgMSApIC8gMixcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRyYXdEb3QoXHJcbiAgICAgIHBhcnRpY2xlLmdldFgoKSxcclxuICAgICAgcGFydGljbGUuZ2V0WSgpLFxyXG4gICAgICBjb2xvcixcclxuICAgICAgaiAlIDIgPT09IDAgPyBqIC8gMiA6ICggaiArIDEgKSAvIDIsXHJcbiAgICApO1xyXG4gIH07XHJcbiAgaGFuZGxlV2luZG93UmVzaXplID0gKCkgPT4ge1xyXG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIFxyXG4gICAgdGhpcy50aWNrKCk7XHJcbiAgfTtcclxuICBoYW5kbGVNb3VzZU1vdmUgPSAoIGV2ZW50OiBNb3VzZUV2ZW50ICkgPT4ge1xyXG4gICAgdGhpcy5tb3VzZU1vdmVGdW5jdGlvbiggZXZlbnQsIHRoaXMgKTtcclxuICB9O1xyXG4gIHRpY2sgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmNsZWFyKCk7XHJcblxyXG4gICAgaWYgKCB0eXBlb2YgdGhpcy50aWNrRnVuY3Rpb24gPT09ICdmdW5jdGlvbicgKSB7XHJcbiAgICAgIHRoaXMudGlja0Z1bmN0aW9uKCB0aGlzICk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBzdGFydEN5Y2xlID0gKCkgPT4ge1xyXG4gICAgdGhpcy5jeWNsZUludGVydmFsSWQgPSBzZXRJbnRlcnZhbCggdGhpcy50aWNrLCB0aGlzLmN5Y2xlSW50ZXJ2YWxNUyApO1xyXG4gIH07XHJcbiAgc3RvcEN5Y2xlID0gKCkgPT4ge1xyXG4gICAgY2xlYXJUaW1lb3V0KCB0aGlzLmN5Y2xlSW50ZXJ2YWxJZCApO1xyXG4gICAgdGhpcy5jeWNsZUludGVydmFsSWQgPSB1bmRlZmluZWQ7XHJcbiAgfTtcclxuICBnZXRXaWR0aCA9ICgpID0+IHRoaXMuY2FudmFzLndpZHRoO1xyXG4gIGdldEhlaWdodCA9ICgpID0+IHRoaXMuY2FudmFzLmhlaWdodDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FudmFzRHJhd2VyO1xyXG4iLCJpbXBvcnQgeyBnZXRSYW5kb21Db2xvciB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxuY2xhc3MgUGFydGljbGUge1xyXG4gIHByaXZhdGUgeDogbnVtYmVyO1xyXG4gIHByaXZhdGUgeTogbnVtYmVyO1xyXG4gIHByaXZhdGUgZHg6IG51bWJlcjtcclxuICBwcml2YXRlIGR5OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBjb2xvcjogc3RyaW5nO1xyXG4gIHN0YXRpYyBQT1NJVElPTl9ISVNUT1JZX0xFTkdUSCA9IDEwO1xyXG4gIHByaXZhdGUgcG9zaXRpb25IaXN0b3J5OiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH1bXSA9IFtdO1xyXG4gIGNvbnN0cnVjdG9yIChcclxuICAgIHg6IG51bWJlcixcclxuICAgIHk6IG51bWJlcixcclxuICAgIGR4OiBudW1iZXIsXHJcbiAgICBkeTogbnVtYmVyLFxyXG4gICAgY29sb3I6IHN0cmluZyA9ICd3aGl0ZScsXHJcbiAgKSB7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIHRoaXMuZHggPSBkeDtcclxuICAgIHRoaXMuZHkgPSBkeTtcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICB9XHJcbiAgdGljayA9ICggbWF4WCA9IDUwMCwgbWF4WSA9IDUwMCwgbWluWCA9IDAsIG1pblkgPSAwICkgPT4ge1xyXG4gICAgdGhpcy5wb3NpdGlvbkhpc3RvcnkucHVzaCgge1xyXG4gICAgICB4OiB0aGlzLngsXHJcbiAgICAgIHk6IHRoaXMueSxcclxuICAgIH0gKTtcclxuXHJcbiAgICBpZiAoIHRoaXMucG9zaXRpb25IaXN0b3J5Lmxlbmd0aCA+IFBhcnRpY2xlLlBPU0lUSU9OX0hJU1RPUllfTEVOR1RIICkge1xyXG4gICAgICB0aGlzLnBvc2l0aW9uSGlzdG9yeS5zaGlmdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICggdGhpcy54IDwgbWluWCApIHtcclxuICAgICAgdGhpcy54ID0gbWluWDtcclxuICAgICAgdGhpcy5keCAqPSAtMTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCB0aGlzLnggPiBtYXhYICkge1xyXG4gICAgICB0aGlzLnggPSBtYXhYO1xyXG4gICAgICB0aGlzLmR4ICo9IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICggdGhpcy55IDwgbWluWSApIHtcclxuICAgICAgdGhpcy55ID0gbWluWTtcclxuICAgICAgdGhpcy5keSAqPSAtMTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCB0aGlzLnkgPiBtYXhZICkge1xyXG4gICAgICB0aGlzLnkgPSBtYXhZO1xyXG4gICAgICB0aGlzLmR5ICo9IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMueCArPSB0aGlzLmR4O1xyXG4gICAgdGhpcy55ICs9IHRoaXMuZHk7XHJcbiAgfTtcclxuICBzZXRQb3NpdGlvbiA9ICggeDogbnVtYmVyLCB5OiBudW1iZXIgKSA9PiB7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICB9O1xyXG4gIGdldFBvc2l0aW9uSGlzdG9yeSA9ICgpID0+IHRoaXMucG9zaXRpb25IaXN0b3J5O1xyXG4gIGdldFggPSAoKSA9PiB0aGlzLng7XHJcbiAgZ2V0WSA9ICgpID0+IHRoaXMueTtcclxuICBnZXRDb2xvciA9ICgpID0+IHRoaXMuY29sb3I7XHJcbiAgc3RhdGljIGdldFJhbmRvbVBhcnRpY2xlIChcclxuICAgIG1heFg6IG51bWJlcixcclxuICAgIG1heFk6IG51bWJlcixcclxuICAgIG1heFN0ZXA6IG51bWJlcixcclxuICAgIG1pblN0ZXA6IG51bWJlcixcclxuICApOiBQYXJ0aWNsZSB7XHJcbiAgICByZXR1cm4gbmV3IFBhcnRpY2xlKFxyXG4gICAgICBNYXRoLmZsb29yKCBNYXRoLnJhbmRvbSgpICogbWF4WCApLFxyXG4gICAgICBNYXRoLmZsb29yKCBNYXRoLnJhbmRvbSgpICogbWF4WSApLFxyXG4gICAgICAoIE1hdGgucmFuZG9tKCkgPiAwLjUgPyAxIDogLTEgKVxyXG4gICAgICAqXHJcbiAgICAgICggTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSAqICggbWF4U3RlcCAtIG1pblN0ZXAgKSApICsgbWluU3RlcCApLFxyXG4gICAgICAoIE1hdGgucmFuZG9tKCkgPiAwLjUgPyAxIDogLTEgKVxyXG4gICAgICAqXHJcbiAgICAgICggTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSAqICggbWF4U3RlcCAtIG1pblN0ZXAgKSApICsgbWluU3RlcCApLFxyXG4gICAgICBnZXRSYW5kb21Db2xvcigpLFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhcnRpY2xlO1xyXG4iLCJpbXBvcnQgQ2FudmFzRHJhd2VyIGZyb20gJy4vQ2FudmFzRHJhd2VyJztcclxuaW1wb3J0IFBhcnRpY2xlIGZyb20gJy4vUGFydGljbGUnO1xyXG5pbXBvcnQgeyBkaXN0YW5jZSB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxuY29uc3RcclxuICBOX1BBUlRJQ0xFUyA9IDEwMCxcclxuICBNQUdORVRfUkFESVVTID0gMTAwLFxyXG4gIE1JTl9TVEVQID0gMSxcclxuICBNQVhfU1RFUCA9IDg7XHJcblxyXG5sZXQgcGFydGljbGVzOiBQYXJ0aWNsZVtdID0gW107XHJcblxyXG5mdW5jdGlvbiB0aWNrICggZHJhd2VyOiBDYW52YXNEcmF3ZXIgKTogdm9pZCB7XHJcbiAgY29uc3RcclxuICAgIG1heFggPSBkcmF3ZXIuZ2V0V2lkdGgoKSxcclxuICAgIG1heFkgPSBkcmF3ZXIuZ2V0SGVpZ2h0KCk7XHJcblxyXG4gIGZvciAoIGxldCBpID0gMDsgaSA8IHBhcnRpY2xlcy5sZW5ndGg7ICsraSApIHtcclxuICAgIGRyYXdlci5kcmF3UGFydGljbGUoIHBhcnRpY2xlc1tpXSApO1xyXG4gICAgcGFydGljbGVzW2ldLnRpY2soIG1heFgsIG1heFkgKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vdXNlTW92ZSAoIGV2ZW50OiBNb3VzZUV2ZW50LCBkcmF3ZXI6IENhbnZhc0RyYXdlciApOiB2b2lkIHtcclxuICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBwYXJ0aWNsZXMubGVuZ3RoOyArK2kgKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGRpc3RhbmNlKFxyXG4gICAgICAgIGV2ZW50LmNsaWVudFgsXHJcbiAgICAgICAgZXZlbnQuY2xpZW50WSxcclxuICAgICAgICBwYXJ0aWNsZXNbaV0uZ2V0WCgpLFxyXG4gICAgICAgIHBhcnRpY2xlc1tpXS5nZXRZKCksXHJcbiAgICAgICkgPCBNQUdORVRfUkFESVVTXHJcbiAgICApIHtcclxuICAgICAgcGFydGljbGVzW2ldLnNldFBvc2l0aW9uKCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdFxyXG4gIGRyYXdlciA9IG5ldyBDYW52YXNEcmF3ZXIoXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnY2FudmFzJyApICksXHJcbiAgICB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJyxcclxuICAgICAgZnVsbFNjcmVlbjogdHJ1ZSxcclxuICAgICAgdGljayxcclxuICAgICAgbW91c2VNb3ZlLFxyXG4gICAgfSxcclxuICApLFxyXG4gIG1heFggPSBkcmF3ZXIuZ2V0V2lkdGgoKSxcclxuICBtYXhZID0gZHJhd2VyLmdldEhlaWdodCgpO1xyXG5cclxucGFydGljbGVzID0gQXJyYXkoIE5fUEFSVElDTEVTICk7XHJcbmZvciAoIGxldCBpID0gMDsgaSA8IHBhcnRpY2xlcy5sZW5ndGg7ICsraSApIHtcclxuICBwYXJ0aWNsZXNbaV0gPSBQYXJ0aWNsZS5nZXRSYW5kb21QYXJ0aWNsZSggbWF4WCwgbWF4WSwgTUFYX1NURVAsIE1JTl9TVEVQICk7XHJcbn1cclxuXHJcbmRyYXdlci5zdGFydEN5Y2xlKCk7XHJcbiIsImZ1bmN0aW9uIGdldFJhbmRvbUludCggbWF4OiBudW1iZXIsIG1pbiA9IDAgKTogbnVtYmVyIHtcclxuICByZXR1cm4gTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSAqICggbWF4IC0gbWluICkgKyBtaW4gKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUNvbG9yKCk6IHN0cmluZyB7XHJcbiAgcmV0dXJuIGByZ2JhKCR7XHJcbiAgICBnZXRSYW5kb21JbnQoIDEwMCwgMCApXHJcbiAgfSwke1xyXG4gICAgZ2V0UmFuZG9tSW50KCAyMDAsIDUwIClcclxuICB9LCR7XHJcbiAgICBnZXRSYW5kb21JbnQoIDIwMCwgNTAgKVxyXG4gIH0sJHtcclxuICAgIE1hdGgucmFuZG9tKClcclxuICB9KWA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNxciAoIG46IG51bWJlciApOiBudW1iZXIge1xyXG4gIHJldHVybiBuKm47XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXN0YW5jZSAoIHgxOiBudW1iZXIsIHkxOiBudW1iZXIsIHgyOiBudW1iZXIsIHkyOiBudW1iZXIgKTogbnVtYmVyIHtcclxuICByZXR1cm4gTWF0aC5zcXJ0KCBzcXIoIHgxIC0geDIgKSArIHNxciggeTEgLSB5MiApICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==