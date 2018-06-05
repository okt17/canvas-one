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
/*! exports provided: getRandomInt, getRandomColor, sqr, distance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInt", function() { return getRandomInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomColor", function() { return getRandomColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqr", function() { return sqr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
function getRandomInt(max, min) {
    if (min === void 0) { min = 0; }
    return Math.floor(Math.random() * (max - min) + min);
}
function getRandomColor() {
    return "rgba(" + (Math.random() > 0.5
        ? getRandomInt(255, 215)
        : getRandomInt(50, 0)) + "," + (Math.random() > 0.5
        ? getRandomInt(255, 215)
        : getRandomInt(50, 0)) + "," + (Math.random() > 0.5
        ? getRandomInt(255, 215)
        : getRandomInt(50, 0)) + "," + Math.random() + ")";
}
function sqr(n) {
    return n * n;
}
function distance(x1, y1, x2, y2) {
    return Math.sqrt(sqr(x1 - x2) + sqr(y1 - y2));
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhbnZhc0RyYXdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGFydGljbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdEVBO0FBQUEsSUFBTSxlQUFlLEdBQXdCO0lBQzNDLGVBQWUsRUFBRSxTQUFTO0lBQzFCLFNBQVMsRUFBRSxTQUFTO0lBQ3BCLFVBQVUsRUFBRSxJQUFJO0lBQ2hCLGVBQWUsRUFBRSxJQUFJLEdBQUcsRUFBRTtDQUMzQjtBQUVEO0lBU0Usc0JBQ0UsTUFBeUIsRUFDekIsRUFPd0M7WUFQeEMseUNBT3dDLEVBTnRDLGlCQUFxQyxFQUFyQywwREFBcUMsRUFDckMsdUJB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QUM7QUFFSyxrQkFBcUIsRUFBVSxFQUFFLEVBQVUsRUFBRSxFQUFVLEVBQUUsRUFBVTtJQUN2RSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFFLEVBQUUsR0FBRyxFQUFFLENBQUUsR0FBRyxHQUFHLENBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBRSxDQUFFLENBQUM7QUFDdEQsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCBQYXJ0aWNsZSBmcm9tICcuL1BhcnRpY2xlJztcclxuaW1wb3J0IHsgZ2V0UmFuZG9tQ29sb3IgfSBmcm9tICcuL3V0aWxzJztcclxuXHJcbnR5cGUgQ2FudmFzRHJhd2VyT3B0aW9ucyA9IFBhcnRpYWw8e1xyXG4gIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG4gIG1haW5Db2xvcjogc3RyaW5nO1xyXG4gIGZ1bGxTY3JlZW46IGJvb2xlYW47XHJcbiAgY3ljbGVJbnRlcnZhbE1TOiBudW1iZXI7XHJcbiAgdGljayAoIGRyYXdlcj86IENhbnZhc0RyYXdlciApOiB2b2lkO1xyXG4gIG1vdXNlTW92ZSAoIGV2ZW50OiBNb3VzZUV2ZW50LCBkcmF3ZXI/OiBDYW52YXNEcmF3ZXIgKTogdm9pZDtcclxufT47XHJcblxyXG5jb25zdCBERUZBVUxUX09QVElPTlM6IENhbnZhc0RyYXdlck9wdGlvbnMgPSB7XHJcbiAgYmFja2dyb3VuZENvbG9yOiAnI0ZGRkZGRicsXHJcbiAgbWFpbkNvbG9yOiAnIzAwMDAwMCcsXHJcbiAgZnVsbFNjcmVlbjogdHJ1ZSxcclxuICBjeWNsZUludGVydmFsTVM6IDEwMDAgLyA2MCxcclxufVxyXG5cclxuY2xhc3MgQ2FudmFzRHJhd2VyIHtcclxuICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICBwcml2YXRlIG1haW5Db2xvcjogQ2FudmFzRHJhd2VyT3B0aW9uc1snbWFpbkNvbG9yJ107XHJcbiAgcHJpdmF0ZSBiYWNrZ3JvdW5kQ29sb3I6IENhbnZhc0RyYXdlck9wdGlvbnNbJ2JhY2tncm91bmRDb2xvciddO1xyXG4gIHByaXZhdGUgdGlja0Z1bmN0aW9uPzogQ2FudmFzRHJhd2VyT3B0aW9uc1sndGljayddO1xyXG4gIHByaXZhdGUgbW91c2VNb3ZlRnVuY3Rpb24/OiBDYW52YXNEcmF3ZXJPcHRpb25zWydtb3VzZU1vdmUnXTtcclxuICBwcml2YXRlIGN5Y2xlSW50ZXJ2YWxNUzogQ2FudmFzRHJhd2VyT3B0aW9uc1snY3ljbGVJbnRlcnZhbE1TJ107XHJcbiAgcHJpdmF0ZSBjeWNsZUludGVydmFsSWQ/OiBudW1iZXI7XHJcbiAgY29uc3RydWN0b3IgKFxyXG4gICAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCxcclxuICAgIHtcclxuICAgICAgbWFpbkNvbG9yID0gREVGQVVMVF9PUFRJT05TLm1haW5Db2xvcixcclxuICAgICAgYmFja2dyb3VuZENvbG9yID0gREVGQVVMVF9PUFRJT05TLmJhY2tncm91bmRDb2xvcixcclxuICAgICAgZnVsbFNjcmVlbiA9IERFRkFVTFRfT1BUSU9OUy5mdWxsU2NyZWVuLFxyXG4gICAgICBjeWNsZUludGVydmFsTVMgPSBERUZBVUxUX09QVElPTlMuY3ljbGVJbnRlcnZhbE1TLFxyXG4gICAgICB0aWNrLFxyXG4gICAgICBtb3VzZU1vdmUsXHJcbiAgICB9OiBDYW52YXNEcmF3ZXJPcHRpb25zID0gREVGQVVMVF9PUFRJT05TLFxyXG4gICkge1xyXG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCAnMmQnICk7XHJcbiAgICB0aGlzLm1haW5Db2xvciA9IG1haW5Db2xvcjtcclxuICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9yO1xyXG4gICAgdGhpcy5jeWNsZUludGVydmFsTVMgPSBjeWNsZUludGVydmFsTVM7XHJcbiAgICBcclxuICAgIGlmICggdHlwZW9mIHRpY2sgPT09ICdmdW5jdGlvbicgKSB7XHJcbiAgICAgIHRoaXMudGlja0Z1bmN0aW9uID0gdGljaztcclxuICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHtcclxuICAgICAgICBpZiAoIHRoaXMuY3ljbGVJbnRlcnZhbElkICE9PSB1bmRlZmluZWQgKSB7XHJcbiAgICAgICAgICB0aGlzLnN0b3BDeWNsZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc3RhcnRDeWNsZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICggZnVsbFNjcmVlbiApIHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdyZXNpemUnLCB0aGlzLmhhbmRsZVdpbmRvd1Jlc2l6ZSApO1xyXG4gICAgICB0aGlzLmhhbmRsZVdpbmRvd1Jlc2l6ZSgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMudGljaygpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoIHR5cGVvZiBtb3VzZU1vdmUgPT09ICdmdW5jdGlvbicgKSB7XHJcbiAgICAgIHRoaXMubW91c2VNb3ZlRnVuY3Rpb24gPSBtb3VzZU1vdmU7XHJcbiAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVNb3VzZU1vdmUgKTtcclxuICAgIH0gICAgXHJcbiAgfVxyXG4gIC8qXHJcbiAgICBVc2luZyBhcnJvdyBmdW5jdGlvbiBwcm9wZXJ0aWVzIGluc3RlYWQgb2YgY2xhc3MgbWV0aG9kc1xyXG4gICAgdG8gYXZvaWQgdXNpbmcgLmJpbmQgYWxsIHRoZSB0aW1lXHJcbiAgICBUaGVzZSBmdW5jdGlvbnMgd2lsbCBub3QgYmUgcHJlc2VudCBvbiB0aGUgcHJvdG90eXBlXHJcbiAgKi9cclxuICBjbGVhciA9ICggY29sb3I6IHN0cmluZyA9IHRoaXMuYmFja2dyb3VuZENvbG9yICkgPT4ge1xyXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICB0aGlzLmN0eC5maWxsUmVjdCggMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCApO1xyXG4gIH07XHJcbiAgZHJhd1BvaW50ID0gKCB4OiBudW1iZXIsIHk6IG51bWJlciwgY29sb3I6IHN0cmluZyA9IHRoaXMubWFpbkNvbG9yLCBzaXplID0gNCApID0+IHtcclxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgdGhpcy5jdHguZmlsbFJlY3QoIHgsIHksIHNpemUsIHNpemUgKTtcclxuICB9O1xyXG4gIGRyYXdQb2ludEFyYyA9ICggeDogbnVtYmVyLCB5OiBudW1iZXIsIGNvbG9yOiBzdHJpbmcsIHIxID0gNSwgcjAgPSAxICkgPT4ge1xyXG4gICAgcjEgPSBNYXRoLm1heCggcjEsIHIwICk7XHJcblxyXG4gICAgY29uc3QgZ3JkID0gdGhpcy5jdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoIHgsIHksIHIwLCB4LCB5LCByMSApO1xyXG4gICAgZ3JkLmFkZENvbG9yU3RvcCggMCwgY29sb3IgKTtcclxuICAgIGdyZC5hZGRDb2xvclN0b3AoIDEsICd3aGl0ZScgKTtcclxuXHJcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgIHRoaXMuY3R4LmFyYyggeCwgeSwgcjEsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSApO1xyXG5cclxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGdyZDtcclxuICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICB9O1xyXG4gIGRvdFN5bWJvbCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoIDk2NzkgKTtcclxuICBkcmF3RG90ID0gKCB4OiBudW1iZXIsIHk6IG51bWJlciwgY29sb3I6IHN0cmluZywgc2l6ZSA9IDQgKSA9PiB7XHJcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgIHRoaXMuY3R4LmZvbnQgPSBgJHtzaXplKjV9cHggVmVyZGFuYWA7XHJcbiAgICB0aGlzLmN0eC5maWxsVGV4dCggdGhpcy5kb3RTeW1ib2wsIHgsIHkgKTtcclxuICB9O1xyXG4gIGRyYXdQYXJ0aWNsZSA9ICggcGFydGljbGU6IFBhcnRpY2xlICkgPT4ge1xyXG4gICAgY29uc3RcclxuICAgICAgaGlzdG9yeSA9IHBhcnRpY2xlLmdldFBvc2l0aW9uSGlzdG9yeSgpLFxyXG4gICAgICBjb2xvciA9IHBhcnRpY2xlLmdldENvbG9yKCk7XHJcblxyXG4gICAgbGV0IGo6IG51bWJlcjtcclxuICAgIGZvciAoIGogPSAwOyBqIDwgaGlzdG9yeS5sZW5ndGg7ICsraiApIHtcclxuICAgICAgdGhpcy5kcmF3RG90KFxyXG4gICAgICAgIGhpc3Rvcnlbal0ueCxcclxuICAgICAgICBoaXN0b3J5W2pdLnksXHJcbiAgICAgICAgY29sb3IsXHJcbiAgICAgICAgaiAlIDIgPT09IDAgPyBqIC8gMiA6ICggaiArIDEgKSAvIDIsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kcmF3RG90KFxyXG4gICAgICBwYXJ0aWNsZS5nZXRYKCksXHJcbiAgICAgIHBhcnRpY2xlLmdldFkoKSxcclxuICAgICAgY29sb3IsXHJcbiAgICAgIGogJSAyID09PSAwID8gaiAvIDIgOiAoIGogKyAxICkgLyAyLFxyXG4gICAgKTtcclxuICB9O1xyXG4gIGhhbmRsZVdpbmRvd1Jlc2l6ZSA9ICgpID0+IHtcclxuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICBcclxuICAgIHRoaXMudGljaygpO1xyXG4gIH07XHJcbiAgaGFuZGxlTW91c2VNb3ZlID0gKCBldmVudDogTW91c2VFdmVudCApID0+IHtcclxuICAgIHRoaXMubW91c2VNb3ZlRnVuY3Rpb24oIGV2ZW50LCB0aGlzICk7XHJcbiAgfTtcclxuICB0aWNrID0gKCkgPT4ge1xyXG4gICAgdGhpcy5jbGVhcigpO1xyXG5cclxuICAgIGlmICggdHlwZW9mIHRoaXMudGlja0Z1bmN0aW9uID09PSAnZnVuY3Rpb24nICkge1xyXG4gICAgICB0aGlzLnRpY2tGdW5jdGlvbiggdGhpcyApO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgc3RhcnRDeWNsZSA9ICgpID0+IHtcclxuICAgIHRoaXMuY3ljbGVJbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoIHRoaXMudGljaywgdGhpcy5jeWNsZUludGVydmFsTVMgKTtcclxuICB9O1xyXG4gIHN0b3BDeWNsZSA9ICgpID0+IHtcclxuICAgIGNsZWFyVGltZW91dCggdGhpcy5jeWNsZUludGVydmFsSWQgKTtcclxuICAgIHRoaXMuY3ljbGVJbnRlcnZhbElkID0gdW5kZWZpbmVkO1xyXG4gIH07XHJcbiAgZ2V0V2lkdGggPSAoKSA9PiB0aGlzLmNhbnZhcy53aWR0aDtcclxuICBnZXRIZWlnaHQgPSAoKSA9PiB0aGlzLmNhbnZhcy5oZWlnaHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbnZhc0RyYXdlcjtcclxuIiwiaW1wb3J0IHsgZ2V0UmFuZG9tQ29sb3IgfSBmcm9tICcuL3V0aWxzJztcclxuXHJcbmNsYXNzIFBhcnRpY2xlIHtcclxuICBwcml2YXRlIHg6IG51bWJlcjtcclxuICBwcml2YXRlIHk6IG51bWJlcjtcclxuICBwcml2YXRlIGR4OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBkeTogbnVtYmVyO1xyXG4gIHByaXZhdGUgY29sb3I6IHN0cmluZztcclxuICBzdGF0aWMgUE9TSVRJT05fSElTVE9SWV9MRU5HVEggPSAxMDtcclxuICBwcml2YXRlIHBvc2l0aW9uSGlzdG9yeTogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9W10gPSBbXTtcclxuICBjb25zdHJ1Y3RvciAoXHJcbiAgICB4OiBudW1iZXIsXHJcbiAgICB5OiBudW1iZXIsXHJcbiAgICBkeDogbnVtYmVyLFxyXG4gICAgZHk6IG51bWJlcixcclxuICAgIGNvbG9yOiBzdHJpbmcgPSAnd2hpdGUnLFxyXG4gICkge1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICB0aGlzLmR4ID0gZHg7XHJcbiAgICB0aGlzLmR5ID0gZHk7XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgfVxyXG4gIHRpY2sgPSAoIG1heFggPSA1MDAsIG1heFkgPSA1MDAsIG1pblggPSAwLCBtaW5ZID0gMCApID0+IHtcclxuICAgIHRoaXMucG9zaXRpb25IaXN0b3J5LnB1c2goIHtcclxuICAgICAgeDogdGhpcy54LFxyXG4gICAgICB5OiB0aGlzLnksXHJcbiAgICB9ICk7XHJcblxyXG4gICAgaWYgKCB0aGlzLnBvc2l0aW9uSGlzdG9yeS5sZW5ndGggPiBQYXJ0aWNsZS5QT1NJVElPTl9ISVNUT1JZX0xFTkdUSCApIHtcclxuICAgICAgdGhpcy5wb3NpdGlvbkhpc3Rvcnkuc2hpZnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIHRoaXMueCA8IG1pblggKSB7XHJcbiAgICAgIHRoaXMueCA9IG1pblg7XHJcbiAgICAgIHRoaXMuZHggKj0gLTE7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICggdGhpcy54ID4gbWF4WCApIHtcclxuICAgICAgdGhpcy54ID0gbWF4WDtcclxuICAgICAgdGhpcy5keCAqPSAtMTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIHRoaXMueSA8IG1pblkgKSB7XHJcbiAgICAgIHRoaXMueSA9IG1pblk7XHJcbiAgICAgIHRoaXMuZHkgKj0gLTE7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICggdGhpcy55ID4gbWF4WSApIHtcclxuICAgICAgdGhpcy55ID0gbWF4WTtcclxuICAgICAgdGhpcy5keSAqPSAtMTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnggKz0gdGhpcy5keDtcclxuICAgIHRoaXMueSArPSB0aGlzLmR5O1xyXG4gIH07XHJcbiAgc2V0UG9zaXRpb24gPSAoIHg6IG51bWJlciwgeTogbnVtYmVyICkgPT4ge1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgfTtcclxuICBnZXRQb3NpdGlvbkhpc3RvcnkgPSAoKSA9PiB0aGlzLnBvc2l0aW9uSGlzdG9yeTtcclxuICBnZXRYID0gKCkgPT4gdGhpcy54O1xyXG4gIGdldFkgPSAoKSA9PiB0aGlzLnk7XHJcbiAgZ2V0Q29sb3IgPSAoKSA9PiB0aGlzLmNvbG9yO1xyXG4gIHN0YXRpYyBnZXRSYW5kb21QYXJ0aWNsZSAoXHJcbiAgICBtYXhYOiBudW1iZXIsXHJcbiAgICBtYXhZOiBudW1iZXIsXHJcbiAgICBtYXhTdGVwOiBudW1iZXIsXHJcbiAgICBtaW5TdGVwOiBudW1iZXIsXHJcbiAgKTogUGFydGljbGUge1xyXG4gICAgcmV0dXJuIG5ldyBQYXJ0aWNsZShcclxuICAgICAgTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSAqIG1heFggKSxcclxuICAgICAgTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSAqIG1heFkgKSxcclxuICAgICAgKCBNYXRoLnJhbmRvbSgpID4gMC41ID8gMSA6IC0xIClcclxuICAgICAgKlxyXG4gICAgICAoIE1hdGguZmxvb3IoIE1hdGgucmFuZG9tKCkgKiAoIG1heFN0ZXAgLSBtaW5TdGVwICkgKSArIG1pblN0ZXAgKSxcclxuICAgICAgKCBNYXRoLnJhbmRvbSgpID4gMC41ID8gMSA6IC0xIClcclxuICAgICAgKlxyXG4gICAgICAoIE1hdGguZmxvb3IoIE1hdGgucmFuZG9tKCkgKiAoIG1heFN0ZXAgLSBtaW5TdGVwICkgKSArIG1pblN0ZXAgKSxcclxuICAgICAgZ2V0UmFuZG9tQ29sb3IoKSxcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXJ0aWNsZTtcclxuIiwiaW1wb3J0IENhbnZhc0RyYXdlciBmcm9tICcuL0NhbnZhc0RyYXdlcic7XHJcbmltcG9ydCBQYXJ0aWNsZSBmcm9tICcuL1BhcnRpY2xlJztcclxuaW1wb3J0IHsgZGlzdGFuY2UgfSBmcm9tICcuL3V0aWxzJztcclxuXHJcbmNvbnN0XHJcbiAgTl9QQVJUSUNMRVMgPSAxMDAsXHJcbiAgTUFHTkVUX1JBRElVUyA9IDEwMCxcclxuICBNSU5fU1RFUCA9IDEsXHJcbiAgTUFYX1NURVAgPSA4O1xyXG5cclxubGV0IHBhcnRpY2xlczogUGFydGljbGVbXSA9IFtdO1xyXG5cclxuZnVuY3Rpb24gdGljayAoIGRyYXdlcjogQ2FudmFzRHJhd2VyICk6IHZvaWQge1xyXG4gIGNvbnN0XHJcbiAgICBtYXhYID0gZHJhd2VyLmdldFdpZHRoKCksXHJcbiAgICBtYXhZID0gZHJhd2VyLmdldEhlaWdodCgpO1xyXG5cclxuICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBwYXJ0aWNsZXMubGVuZ3RoOyArK2kgKSB7XHJcbiAgICBkcmF3ZXIuZHJhd1BhcnRpY2xlKCBwYXJ0aWNsZXNbaV0gKTtcclxuICAgIHBhcnRpY2xlc1tpXS50aWNrKCBtYXhYLCBtYXhZICk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtb3VzZU1vdmUgKCBldmVudDogTW91c2VFdmVudCwgZHJhd2VyOiBDYW52YXNEcmF3ZXIgKTogdm9pZCB7XHJcbiAgZm9yICggbGV0IGkgPSAwOyBpIDwgcGFydGljbGVzLmxlbmd0aDsgKytpICkge1xyXG4gICAgaWYgKFxyXG4gICAgICBkaXN0YW5jZShcclxuICAgICAgICBldmVudC5jbGllbnRYLFxyXG4gICAgICAgIGV2ZW50LmNsaWVudFksXHJcbiAgICAgICAgcGFydGljbGVzW2ldLmdldFgoKSxcclxuICAgICAgICBwYXJ0aWNsZXNbaV0uZ2V0WSgpLFxyXG4gICAgICApIDwgTUFHTkVUX1JBRElVU1xyXG4gICAgKSB7XHJcbiAgICAgIHBhcnRpY2xlc1tpXS5zZXRQb3NpdGlvbiggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY29uc3RcclxuICBkcmF3ZXIgPSBuZXcgQ2FudmFzRHJhd2VyKFxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2NhbnZhcycgKSApLFxyXG4gICAge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdibGFjaycsXHJcbiAgICAgIGZ1bGxTY3JlZW46IHRydWUsXHJcbiAgICAgIHRpY2ssXHJcbiAgICAgIG1vdXNlTW92ZSxcclxuICAgIH0sXHJcbiAgKSxcclxuICBtYXhYID0gZHJhd2VyLmdldFdpZHRoKCksXHJcbiAgbWF4WSA9IGRyYXdlci5nZXRIZWlnaHQoKTtcclxuXHJcbnBhcnRpY2xlcyA9IEFycmF5KCBOX1BBUlRJQ0xFUyApO1xyXG5mb3IgKCBsZXQgaSA9IDA7IGkgPCBwYXJ0aWNsZXMubGVuZ3RoOyArK2kgKSB7XHJcbiAgcGFydGljbGVzW2ldID0gUGFydGljbGUuZ2V0UmFuZG9tUGFydGljbGUoIG1heFgsIG1heFksIE1BWF9TVEVQLCBNSU5fU1RFUCApO1xyXG59XHJcblxyXG5kcmF3ZXIuc3RhcnRDeWNsZSgpO1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tSW50KCBtYXg6IG51bWJlciwgbWluID0gMCApOiBudW1iZXIge1xyXG4gIHJldHVybiBNYXRoLmZsb29yKCBNYXRoLnJhbmRvbSgpICogKCBtYXggLSBtaW4gKSArIG1pbiApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tQ29sb3IoKTogc3RyaW5nIHtcclxuICByZXR1cm4gYHJnYmEoJHtcclxuICAgIE1hdGgucmFuZG9tKCkgPiAwLjVcclxuICAgICAgPyBnZXRSYW5kb21JbnQoIDI1NSwgMjE1IClcclxuICAgICAgOiBnZXRSYW5kb21JbnQoIDUwLCAwIClcclxuICB9LCR7XHJcbiAgICBNYXRoLnJhbmRvbSgpID4gMC41XHJcbiAgICAgID8gZ2V0UmFuZG9tSW50KCAyNTUsIDIxNSApXHJcbiAgICAgIDogZ2V0UmFuZG9tSW50KCA1MCwgMCApXHJcbiAgfSwke1xyXG4gICAgTWF0aC5yYW5kb20oKSA+IDAuNVxyXG4gICAgICA/IGdldFJhbmRvbUludCggMjU1LCAyMTUgKVxyXG4gICAgICA6IGdldFJhbmRvbUludCggNTAsIDAgKVxyXG4gIH0sJHtcclxuICAgIE1hdGgucmFuZG9tKClcclxuICB9KWA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzcXIgKCBuOiBudW1iZXIgKTogbnVtYmVyIHtcclxuICByZXR1cm4gbipuO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzdGFuY2UgKCB4MTogbnVtYmVyLCB5MTogbnVtYmVyLCB4MjogbnVtYmVyLCB5MjogbnVtYmVyICk6IG51bWJlciB7XHJcbiAgcmV0dXJuIE1hdGguc3FydCggc3FyKCB4MSAtIHgyICkgKyBzcXIoIHkxIC0geTIgKSApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=