/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "a1ea56b422833da6501c14a659c52a1a.png");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "2c30c9231d3ce0f7d337b08645859f97.png");

/***/ }),

/***/ "./src/img/staticPlayer.png":
/*!**********************************!*\
  !*** ./src/img/staticPlayer.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "36a82db8d8fa92f0921ddfab2d31e1c9.png");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");
/* harmony import */ var _img_staticPlayer_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/staticPlayer.png */ "./src/img/staticPlayer.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');
canvas.width = 1000;
canvas.height = 650;
var gravity = 0.5;
function createImage(path) {
  var image = new Image();
  image.src = path;
  return image;
}
var Player = /*#__PURE__*/function () {
  function Player(_ref) {
    var x = _ref.x,
      y = _ref.y,
      image = _ref.image;
    _classCallCheck(this, Player);
    this.position = {
      x: x,
      y: y
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 96;
    this.height = image.height;
    this.image = image;
    this.frames = 0;
    this.sprites = {
      stand: {
        right: createImage(_img_staticPlayer_png__WEBPACK_IMPORTED_MODULE_2__["default"])
      }
    };
  }
  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
    }
  }]);
  return Player;
}();
var Platform = /*#__PURE__*/function () {
  function Platform(_ref2) {
    var x = _ref2.x,
      y = _ref2.y,
      image = _ref2.image;
    _classCallCheck(this, Platform);
    this.position = {
      x: x,
      y: y
    };
    this.width = 400;
    this.height = 50;
    this.image = image;
  }
  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      // c.fillStyle = 'black'
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);
  return Platform;
}();
var GeneriObject = /*#__PURE__*/function () {
  function GeneriObject(_ref3) {
    var x = _ref3.x,
      y = _ref3.y,
      image = _ref3.image;
    _classCallCheck(this, GeneriObject);
    this.position = {
      x: x,
      y: y
    };
    this.width = image.width;
    this.height = image.height;
    this.image = image;
  }
  _createClass(GeneriObject, [{
    key: "draw",
    value: function draw() {
      // c.fillStyle = 'black'
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);
  return GeneriObject;
}();
function init() {
  platforms = [new Platform({
    x: 0,
    y: canvas.height - 80,
    image: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  })];
  genericObjects = [new GeneriObject({
    x: 0,
    y: 0,
    image: createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  })];
  player = new Player();
}
var imagePlayer = createImage(_img_staticPlayer_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
var player = new Player({
  x: 150,
  y: 200,
  image: imagePlayer
});
var platforms = [new Platform({
  x: 0,
  y: canvas.height - 80,
  image: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
})];
var genericObjects = [new GeneriObject({
  x: 0,
  y: 0,
  image: createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_1__["default"])
})];
var key = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
var position = 0;
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach(function (genericObject) {
    genericObject.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  player.update();
  platforms.forEach(function (platform) {
    player.velocity.x = 0;
    // define a limin of player
    if (key.right.pressed && player.position.x <= canvas.width / 2 + 50) {
      player.velocity.x += 10;
    } else if (key.left.pressed && player.position.x >= 100) {
      player.velocity.x -= 10;
    } else {
      // the player stay in the center zone and the platform move
      if (key.right.pressed) {
        platform.position.x -= 10;
      } else if (key.left.pressed) {
        // if the platform arrive at start this condition stack the platform
        if (platform.position.x < 0) {
          platform.position.x += 10;
        }
      }
    }
  });

  // player with canva limit
  if (player.position.y + player.height + player.velocity.y <= canvas.height) {
    player.velocity.y += 1;
    player.velocity.y += gravity;
  } else {
    init();
  }
  // player with platform comporment
  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x < platform.position.x + platform.width && player.position.x + player.width > platform.position.x) {
      player.velocity.y = 0;
    }
  });
}
animate();
window.addEventListener('keydown', function (_ref4) {
  var keyCode = _ref4.keyCode;
  switch (keyCode) {
    case 32:
      // barra - per il salto
      player.velocity.y -= 20;
      break;
    case 70:
      // f - vado a destra
      key.right.pressed = true;
      break;
    case 82:
      // r - vado a sinistra
      key.left.pressed = true;
      break;
  }
});
window.addEventListener('keyup', function (_ref5) {
  var keyCode = _ref5.keyCode;
  switch (keyCode) {
    case 32:
      // barra - per il salto
      player.velocity.y = 0;
      break;
    case 70:
      // f - blocco il movimento a destra
      key.right.pressed = false;
      break;
    case 82:
      // r - vado a sinistra
      key.left.pressed = false;
      break;
  }
});
/******/ })()
;
//# sourceMappingURL=canvas.bundle.js.map