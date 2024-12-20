/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/GenericObject.js":
/*!*********************************!*\
  !*** ./src/js/GenericObject.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenericObject: () => (/* binding */ GenericObject)
/* harmony export */ });
/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas.js */ "./src/js/canvas.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref) {
    var x = _ref.x,
      y = _ref.y,
      image = _ref.image;
    _classCallCheck(this, GenericObject);
    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }
  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      _canvas_js__WEBPACK_IMPORTED_MODULE_0__.c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);
  return GenericObject;
}();

/***/ }),

/***/ "./src/js/Obstacle.js":
/*!****************************!*\
  !*** ./src/js/Obstacle.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Obstacle: () => (/* binding */ Obstacle)
/* harmony export */ });
/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas.js */ "./src/js/canvas.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Obstacle = /*#__PURE__*/function () {
  function Obstacle(_ref) {
    var x = _ref.x,
      y = _ref.y,
      image = _ref.image;
    _classCallCheck(this, Obstacle);
    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }
  _createClass(Obstacle, [{
    key: "draw",
    value: function draw() {
      _canvas_js__WEBPACK_IMPORTED_MODULE_0__.c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);
  return Obstacle;
}();

/***/ }),

/***/ "./src/js/Platform.js":
/*!****************************!*\
  !*** ./src/js/Platform.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Platform: () => (/* binding */ Platform)
/* harmony export */ });
/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas.js */ "./src/js/canvas.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
      y = _ref.y,
      image = _ref.image;
    _classCallCheck(this, Platform);
    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }
  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      _canvas_js__WEBPACK_IMPORTED_MODULE_0__.c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);
  return Platform;
}();

/***/ }),

/***/ "./src/js/Player.js":
/*!**************************!*\
  !*** ./src/js/Player.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/spriteRunLeft.png */ "./src/img/spriteRunLeft.png");
/* harmony import */ var _img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/spriteRunRight.png */ "./src/img/spriteRunRight.png");
/* harmony import */ var _img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/spriteStandLeft.png */ "./src/img/spriteStandLeft.png");
/* harmony import */ var _img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/spriteStandRight.png */ "./src/img/spriteStandRight.png");
/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./canvas.js */ "./src/js/canvas.js");
/* harmony import */ var _function_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./function.js */ "./src/js/function.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);
    this.speed = 10;
    this.position = {
      x: 100,
      y: 300
    };
    this.velocity = {
      x: 0,
      y: 1
    };
    this.width = 66;
    this.height = 150;
    this.image = (0,_function_js__WEBPACK_IMPORTED_MODULE_5__.createImage)(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
    this.frames = 0;
    this.sprites = {
      stand: {
        right: (0,_function_js__WEBPACK_IMPORTED_MODULE_5__.createImage)(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_3__["default"]),
        left: (0,_function_js__WEBPACK_IMPORTED_MODULE_5__.createImage)(_img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_2__["default"]),
        cropWidth: 177,
        width: 66
      },
      run: {
        right: (0,_function_js__WEBPACK_IMPORTED_MODULE_5__.createImage)(_img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
        left: (0,_function_js__WEBPACK_IMPORTED_MODULE_5__.createImage)(_img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        cropWidth: 340,
        width: 127.870
      }
    };
    this.currentSprite = this.sprites.stand.right;
    this.currentCropWidth = 177;
  }
  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      _canvas_js__WEBPACK_IMPORTED_MODULE_4__.c.drawImage(this.currentSprite, this.currentCropWidth * this.frames, 0, this.currentCropWidth, 400, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.frames++;
      if (this.frames > 28) {
        this.frames = 0;
      }
      this.draw();
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;
      if (this.position.y + this.height + this.velocity.y <= _canvas_js__WEBPACK_IMPORTED_MODULE_4__.canvas.height) this.velocity.y += _canvas_js__WEBPACK_IMPORTED_MODULE_4__.gravity;
    }
  }]);
  return Player;
}();

/***/ }),

/***/ "./src/js/assets.js":
/*!**************************!*\
  !*** ./src/js/assets.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets)
/* harmony export */ });
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");
/* harmony import */ var _img_hills_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/hills.png */ "./src/img/hills.png");
/* harmony import */ var _img_obstacle_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/obstacle.png */ "./src/img/obstacle.png");
/* harmony import */ var _img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/spriteRunLeft.png */ "./src/img/spriteRunLeft.png");
/* harmony import */ var _img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/spriteRunRight.png */ "./src/img/spriteRunRight.png");
/* harmony import */ var _img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/spriteStandLeft.png */ "./src/img/spriteStandLeft.png");
/* harmony import */ var _img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/spriteStandRight.png */ "./src/img/spriteStandRight.png");








var assets = [_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"], _img_background_png__WEBPACK_IMPORTED_MODULE_1__["default"], _img_hills_png__WEBPACK_IMPORTED_MODULE_2__["default"], _img_obstacle_png__WEBPACK_IMPORTED_MODULE_3__["default"], _img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_4__["default"], _img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_5__["default"], _img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_6__["default"], _img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_7__["default"]];

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ c),
/* harmony export */   canvas: () => (/* binding */ canvas),
/* harmony export */   gravity: () => (/* binding */ gravity)
/* harmony export */ });
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");
/* harmony import */ var _img_hills_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/hills.png */ "./src/img/hills.png");
/* harmony import */ var _img_obstacle_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/obstacle.png */ "./src/img/obstacle.png");
/* harmony import */ var _img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/spriteRunLeft.png */ "./src/img/spriteRunLeft.png");
/* harmony import */ var _img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/spriteRunRight.png */ "./src/img/spriteRunRight.png");
/* harmony import */ var _img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/spriteStandLeft.png */ "./src/img/spriteStandLeft.png");
/* harmony import */ var _img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/spriteStandRight.png */ "./src/img/spriteStandRight.png");
/* harmony import */ var _function_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./function.js */ "./src/js/function.js");
/* harmony import */ var _assets_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets.js */ "./src/js/assets.js");
/* harmony import */ var _level_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./level.js */ "./src/js/level.js");
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Player.js */ "./src/js/Player.js");
/* harmony import */ var _Platform_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Platform.js */ "./src/js/Platform.js");
/* harmony import */ var _Obstacle_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Obstacle.js */ "./src/js/Obstacle.js");
/* harmony import */ var _GenericObject_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./GenericObject.js */ "./src/js/GenericObject.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = innerWidth - 50;
canvas.height = 600;
var gravity = 0.5;
function init(level) {
  switch (level) {
    case 'fistLevel':
      var _fistLevel = (0,_level_js__WEBPACK_IMPORTED_MODULE_10__.fistLevel)();
      var _fistLevel2 = _slicedToArray(_fistLevel, 6);
      obstacles = _fistLevel2[0];
      platforms = _fistLevel2[1];
      genericObjects = _fistLevel2[2];
      player = _fistLevel2[3];
      scrollOffset = _fistLevel2[4];
      endOfTheGame = _fistLevel2[5];
      break;
  }
  keys.jump.pressed = false;
  keys.left.pressed = false;
  keys.right.pressed = false;
  //   
  //   
  //   

  //   player.update()
  //   scrollOffset = 0
}
var _fistLevel3 = (0,_level_js__WEBPACK_IMPORTED_MODULE_10__.fistLevel)(),
  _fistLevel4 = _slicedToArray(_fistLevel3, 6),
  obstacles = _fistLevel4[0],
  platforms = _fistLevel4[1],
  genericObjects = _fistLevel4[2],
  player = _fistLevel4[3],
  scrollOffset = _fistLevel4[4],
  endOfTheGame = _fistLevel4[5];
player.update();
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach(function (genericObject) {
    genericObject.draw();
  });
  // creazione platform
  platforms.forEach(function (platform) {
    platform.draw();
  });
  obstacles.forEach(function (obstacle) {
    obstacle.draw();
  });
  player.update();

  // spostamenti, parte dove si può muovere il player
  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed;
  } else if (keys.left.pressed && player.position.x > 100) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;

    // se sono dentro l'area di movimento si spostano gli oggetti simulando il movimento a destra
    if (scrollOffset < 7640) {
      if (keys.right.pressed) {
        scrollOffset += player.speed;
        platforms.forEach(function (platform) {
          platform.position.x -= player.speed;
        });
        obstacles.forEach(function (obstacle) {
          obstacle.position.x -= player.speed;
        });
        genericObjects.forEach(function (genericObject) {
          genericObject.position.x -= player.speed * .66;
        });
      }
    }

    // se sono dentro l'area di movimento si spostano gli oggetti simulando il movimento a sinistra
    if (scrollOffset >= 10) {
      if (keys.left.pressed) {
        scrollOffset -= player.speed;
        platforms.forEach(function (platform) {
          platform.position.x += player.speed;
        });
        obstacles.forEach(function (obstacle) {
          obstacle.position.x += player.speed;
        });
        genericObjects.forEach(function (genericObject) {
          genericObject.position.x += player.speed * .66;
        });
      }
    }
  }

  // platform comportment
  platforms.forEach(function (platform) {
    // se sono sulla piattaforma si ferma la gravità
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
      obstacles.forEach(function (obstacle) {
        // lo blocco lateralmente se incontro un ostacolo

        if (player.position.x + player.width + player.velocity.x >= obstacle.position.x && player.position.x < obstacle.position.x + obstacle.width && player.position.y <= obstacle.position.y + obstacle.height) {
          player.velocity.x = 0;
        }

        // ostacolo in offset il giocatore si ferma
        if (player.position.x <= obstacle.position.x + obstacle.width && player.position.x + player.width >= obstacle.position.x && player.position.y <= obstacle.position.y + obstacle.height) {
          player.velocity.x = 0;
        }
      });
    } else {
      // se non sono sulla piattaforma
      obstacles.forEach(function (obstacle) {
        //     // se sono sopra l'ostacolo e se esco a destra o a sinistra
        if (player.position.y + player.height <= obstacle.position.y && player.position.y + player.height + player.velocity.y >= obstacle.position.y && player.position.x + player.width >= obstacle.position.x && player.position.x <= obstacle.position.x + obstacle.width) {
          player.velocity.y = 0;
        }
        // lo blocco se salta sotto l'ostacolo
        if (keys.jump.pressed && player.position.y <= obstacle.position.y + obstacle.height && player.position.x <= obstacle.position.x + obstacle.width && player.position.x + player.width >= obstacle.position.x && player.position.y + player.height >= obstacle.position.y) {
          player.velocity.y = 0;
        }
      });
    }
  });

  // win 
  if (scrollOffset > endOfTheGame - 50) {
    var _console;
    /* eslint-disable */(_console = console).log.apply(_console, _toConsumableArray(oo_oo("797742830_201_8_201_30_4", 'you win')));
    var playAgain = confirm('Hai vinto, vuoi ricominciare?');
    if (playAgain) {
      init('fistLevel');
    }
  }

  // lose
  if (player.position.y > canvas.height) {
    init('fistLevel');
  }
}
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  },
  jump: {
    pressed: false
  }
};
animate();
addEventListener('keydown', function (_ref) {
  var _console2;
  var keyCode = _ref.keyCode;
  switch (keyCode) {
    case 82:
      // left a
      keys.left.pressed = true;
      player.currentSprite = player.sprites.run.left;
      player.currentCropWidth = player.sprites.run.cropWidth;
      player.width = player.sprites.run.width;
      break;
    case 83:
      // down s
      break;
    case 70:
      // right a
      keys.right.pressed = true;
      player.currentSprite = player.sprites.run.right;
      player.currentCropWidth = player.sprites.run.cropWidth;
      player.width = player.sprites.run.width;
      break;
    case 32:
      // up a

      keys.jump.pressed = true;
      player.velocity.y -= 20;
      /* eslint-disable */
      (_console2 = console).log.apply(_console2, _toConsumableArray(oo_oo("797742830_251_14_251_45_4", player.velocity.y)));
      break;
  }
});
addEventListener('keyup', function (_ref2) {
  var keyCode = _ref2.keyCode;
  switch (keyCode) {
    case 82:
      // left a
      keys.left.pressed = false;
      player.currentSprite = player.sprites.stand.left;
      player.currentCropWidth = player.sprites.stand.cropWidth;
      player.width = player.sprites.stand.width;
      break;
    case 83:
      // down s
      break;
    case 70:
      // right a
      keys.right.pressed = false;
      player.currentSprite = player.sprites.stand.right;
      player.currentCropWidth = player.sprites.stand.cropWidth;
      player.width = player.sprites.stand.width;
      // dd
      break;
    case 32:
      // up a
      keys.jump.pressed = false;
      player.velocity.y = 0;
      break;
  }
})
/* istanbul ignore next */ /* c8 ignore start */ /* eslint-disable */;
function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x588116=_0x4189;(function(_0x43dde4,_0x163a4c){var _0x43b64f=_0x4189,_0x3575f4=_0x43dde4();while(!![]){try{var _0x58f5eb=-parseInt(_0x43b64f(0x172))/0x1+parseInt(_0x43b64f(0x171))/0x2*(-parseInt(_0x43b64f(0x17c))/0x3)+-parseInt(_0x43b64f(0x16f))/0x4*(parseInt(_0x43b64f(0x1ae))/0x5)+parseInt(_0x43b64f(0xdb))/0x6+parseInt(_0x43b64f(0x130))/0x7*(-parseInt(_0x43b64f(0x184))/0x8)+-parseInt(_0x43b64f(0x13c))/0x9+parseInt(_0x43b64f(0xc6))/0xa;if(_0x58f5eb===_0x163a4c)break;else _0x3575f4['push'](_0x3575f4['shift']());}catch(_0x4d2216){_0x3575f4['push'](_0x3575f4['shift']());}}}(_0x8c7b,0x5ba84));var K=Object['create'],Q=Object[_0x588116(0x12a)],G=Object['getOwnPropertyDescriptor'],ee=Object[_0x588116(0x149)],te=Object[_0x588116(0x111)],ne=Object[_0x588116(0x181)][_0x588116(0x19f)],re=(_0x479c16,_0x53103b,_0x3ee047,_0xba2e6)=>{var _0x377eb3=_0x588116;if(_0x53103b&&typeof _0x53103b=='object'||typeof _0x53103b==_0x377eb3(0x123)){for(let _0xd52350 of ee(_0x53103b))!ne[_0x377eb3(0x177)](_0x479c16,_0xd52350)&&_0xd52350!==_0x3ee047&&Q(_0x479c16,_0xd52350,{'get':()=>_0x53103b[_0xd52350],'enumerable':!(_0xba2e6=G(_0x53103b,_0xd52350))||_0xba2e6['enumerable']});}return _0x479c16;},V=(_0x48d761,_0x1d1862,_0x1e8ca6)=>(_0x1e8ca6=_0x48d761!=null?K(te(_0x48d761)):{},re(_0x1d1862||!_0x48d761||!_0x48d761[_0x588116(0xf9)]?Q(_0x1e8ca6,_0x588116(0xf4),{'value':_0x48d761,'enumerable':!0x0}):_0x1e8ca6,_0x48d761)),Z=class{constructor(_0xca77e5,_0x7abf37,_0x5bb512,_0x43b27d,_0xf1f77b,_0x3986e7){var _0x1241d7=_0x588116,_0x473aae,_0x5a67ed,_0x52448a,_0x34b700;this[_0x1241d7(0xc5)]=_0xca77e5,this[_0x1241d7(0x18e)]=_0x7abf37,this[_0x1241d7(0x151)]=_0x5bb512,this[_0x1241d7(0x140)]=_0x43b27d,this['dockerizedApp']=_0xf1f77b,this[_0x1241d7(0x12e)]=_0x3986e7,this[_0x1241d7(0x180)]=!0x0,this[_0x1241d7(0x100)]=!0x0,this[_0x1241d7(0x189)]=!0x1,this[_0x1241d7(0x11e)]=!0x1,this[_0x1241d7(0x1b0)]=((_0x5a67ed=(_0x473aae=_0xca77e5['process'])==null?void 0x0:_0x473aae[_0x1241d7(0x11c)])==null?void 0x0:_0x5a67ed[_0x1241d7(0x17b)])===_0x1241d7(0x1b1),this[_0x1241d7(0x18f)]=!((_0x34b700=(_0x52448a=this[_0x1241d7(0xc5)][_0x1241d7(0x11b)])==null?void 0x0:_0x52448a['versions'])!=null&&_0x34b700['node'])&&!this[_0x1241d7(0x1b0)],this[_0x1241d7(0x122)]=null,this[_0x1241d7(0xe0)]=0x0,this['_maxConnectAttemptCount']=0x14,this['_webSocketErrorDocsLink']=_0x1241d7(0xc9),this['_sendErrorMessage']=(this[_0x1241d7(0x18f)]?_0x1241d7(0xd7):_0x1241d7(0x170))+this[_0x1241d7(0x143)];}async[_0x588116(0xcb)](){var _0x14c89b=_0x588116,_0x16fa50,_0x40feb2;if(this[_0x14c89b(0x122)])return this[_0x14c89b(0x122)];let _0x1a5727;if(this[_0x14c89b(0x18f)]||this[_0x14c89b(0x1b0)])_0x1a5727=this[_0x14c89b(0xc5)]['WebSocket'];else{if((_0x16fa50=this[_0x14c89b(0xc5)][_0x14c89b(0x11b)])!=null&&_0x16fa50['_WebSocket'])_0x1a5727=(_0x40feb2=this[_0x14c89b(0xc5)][_0x14c89b(0x11b)])==null?void 0x0:_0x40feb2[_0x14c89b(0x19d)];else try{let _0x52ab0f=await import(_0x14c89b(0x13b));_0x1a5727=(await import((await import('url'))[_0x14c89b(0xd6)](_0x52ab0f[_0x14c89b(0x183)](this[_0x14c89b(0x140)],_0x14c89b(0x144)))[_0x14c89b(0x17e)]()))['default'];}catch{try{_0x1a5727=require(require(_0x14c89b(0x13b))[_0x14c89b(0x183)](this[_0x14c89b(0x140)],'ws'));}catch{throw new Error(_0x14c89b(0x159));}}}return this[_0x14c89b(0x122)]=_0x1a5727,_0x1a5727;}[_0x588116(0xe6)](){var _0x58873=_0x588116;this[_0x58873(0x11e)]||this[_0x58873(0x189)]||this[_0x58873(0xe0)]>=this[_0x58873(0xfa)]||(this[_0x58873(0x100)]=!0x1,this[_0x58873(0x11e)]=!0x0,this[_0x58873(0xe0)]++,this[_0x58873(0x196)]=new Promise((_0x1b358b,_0x3f3fdd)=>{var _0x38c8f5=_0x58873;this[_0x38c8f5(0xcb)]()['then'](_0x57c8f4=>{var _0x477be2=_0x38c8f5;let _0x5d7b88=new _0x57c8f4(_0x477be2(0x15c)+(!this[_0x477be2(0x18f)]&&this[_0x477be2(0x15d)]?_0x477be2(0xce):this[_0x477be2(0x18e)])+':'+this[_0x477be2(0x151)]);_0x5d7b88[_0x477be2(0x15b)]=()=>{var _0x16299b=_0x477be2;this[_0x16299b(0x180)]=!0x1,this[_0x16299b(0x195)](_0x5d7b88),this[_0x16299b(0x179)](),_0x3f3fdd(new Error(_0x16299b(0xed)));},_0x5d7b88[_0x477be2(0x154)]=()=>{var _0x5a6a3a=_0x477be2;this[_0x5a6a3a(0x18f)]||_0x5d7b88[_0x5a6a3a(0x1a9)]&&_0x5d7b88['_socket'][_0x5a6a3a(0x121)]&&_0x5d7b88['_socket'][_0x5a6a3a(0x121)](),_0x1b358b(_0x5d7b88);},_0x5d7b88[_0x477be2(0x14e)]=()=>{var _0x107fa9=_0x477be2;this[_0x107fa9(0x100)]=!0x0,this[_0x107fa9(0x195)](_0x5d7b88),this['_attemptToReconnectShortly']();},_0x5d7b88['onmessage']=_0x20c017=>{var _0x3eba0f=_0x477be2;try{if(!(_0x20c017!=null&&_0x20c017[_0x3eba0f(0x150)])||!this[_0x3eba0f(0x12e)])return;let _0x4af45c=JSON[_0x3eba0f(0x142)](_0x20c017[_0x3eba0f(0x150)]);this[_0x3eba0f(0x12e)](_0x4af45c[_0x3eba0f(0x141)],_0x4af45c[_0x3eba0f(0xfb)],this[_0x3eba0f(0xc5)],this[_0x3eba0f(0x18f)]);}catch{}};})['then'](_0x310dce=>(this[_0x38c8f5(0x189)]=!0x0,this[_0x38c8f5(0x11e)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x38c8f5(0x180)]=!0x0,this[_0x38c8f5(0xe0)]=0x0,_0x310dce))[_0x38c8f5(0x116)](_0x36eef7=>(this[_0x38c8f5(0x189)]=!0x1,this[_0x38c8f5(0x11e)]=!0x1,console[_0x38c8f5(0xdc)](_0x38c8f5(0x15f)+this[_0x38c8f5(0x143)]),_0x3f3fdd(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x36eef7&&_0x36eef7[_0x38c8f5(0xd8)])))));}));}['_disposeWebsocket'](_0x1fda5d){var _0x6d8810=_0x588116;this['_connected']=!0x1,this[_0x6d8810(0x11e)]=!0x1;try{_0x1fda5d[_0x6d8810(0x14e)]=null,_0x1fda5d[_0x6d8810(0x15b)]=null,_0x1fda5d['onopen']=null;}catch{}try{_0x1fda5d[_0x6d8810(0x12b)]<0x2&&_0x1fda5d[_0x6d8810(0x1ac)]();}catch{}}[_0x588116(0x179)](){var _0x597448=_0x588116;clearTimeout(this[_0x597448(0x193)]),!(this[_0x597448(0xe0)]>=this[_0x597448(0xfa)])&&(this[_0x597448(0x193)]=setTimeout(()=>{var _0x27659b=_0x597448,_0x4c178d;this[_0x27659b(0x189)]||this[_0x27659b(0x11e)]||(this['_connectToHostNow'](),(_0x4c178d=this[_0x27659b(0x196)])==null||_0x4c178d[_0x27659b(0x116)](()=>this[_0x27659b(0x179)]()));},0x1f4),this[_0x597448(0x193)][_0x597448(0x121)]&&this[_0x597448(0x193)][_0x597448(0x121)]());}async[_0x588116(0xe9)](_0x8314c6){var _0x21c96f=_0x588116;try{if(!this['_allowedToSend'])return;this[_0x21c96f(0x100)]&&this[_0x21c96f(0xe6)](),(await this['_ws'])[_0x21c96f(0xe9)](JSON[_0x21c96f(0x16a)](_0x8314c6));}catch(_0x5450c5){console[_0x21c96f(0xdc)](this[_0x21c96f(0x146)]+':\\x20'+(_0x5450c5&&_0x5450c5['message'])),this['_allowedToSend']=!0x1,this['_attemptToReconnectShortly']();}}};function q(_0x474785,_0x3be6a9,_0xdcbf19,_0xd60a79,_0x45a5ae,_0x363fb8,_0x4798e9,_0x15fbc6=ie){var _0x1f86f7=_0x588116;let _0x15baf9=_0xdcbf19[_0x1f86f7(0x19b)](',')[_0x1f86f7(0xcf)](_0x160958=>{var _0x3ac0da=_0x1f86f7,_0x4721af,_0x5d2008,_0x2a74cb,_0x49efb8;try{if(!_0x474785[_0x3ac0da(0x175)]){let _0x47a44c=((_0x5d2008=(_0x4721af=_0x474785[_0x3ac0da(0x11b)])==null?void 0x0:_0x4721af[_0x3ac0da(0x13d)])==null?void 0x0:_0x5d2008[_0x3ac0da(0x112)])||((_0x49efb8=(_0x2a74cb=_0x474785[_0x3ac0da(0x11b)])==null?void 0x0:_0x2a74cb[_0x3ac0da(0x11c)])==null?void 0x0:_0x49efb8['NEXT_RUNTIME'])===_0x3ac0da(0x1b1);(_0x45a5ae==='next.js'||_0x45a5ae===_0x3ac0da(0xd0)||_0x45a5ae===_0x3ac0da(0x157)||_0x45a5ae===_0x3ac0da(0xc0))&&(_0x45a5ae+=_0x47a44c?'\\x20server':_0x3ac0da(0xdd)),_0x474785['_console_ninja_session']={'id':+new Date(),'tool':_0x45a5ae},_0x4798e9&&_0x45a5ae&&!_0x47a44c&&console[_0x3ac0da(0xbf)](_0x3ac0da(0xe5)+(_0x45a5ae[_0x3ac0da(0x13f)](0x0)[_0x3ac0da(0x1a1)]()+_0x45a5ae[_0x3ac0da(0xe7)](0x1))+',',_0x3ac0da(0x12d),_0x3ac0da(0x10b));}let _0x554a8a=new Z(_0x474785,_0x3be6a9,_0x160958,_0xd60a79,_0x363fb8,_0x15fbc6);return _0x554a8a[_0x3ac0da(0xe9)]['bind'](_0x554a8a);}catch(_0x1d94a4){return console[_0x3ac0da(0xdc)](_0x3ac0da(0x187),_0x1d94a4&&_0x1d94a4[_0x3ac0da(0xd8)]),()=>{};}});return _0x4389e3=>_0x15baf9[_0x1f86f7(0x191)](_0x480b94=>_0x480b94(_0x4389e3));}function ie(_0x47fda7,_0x1e82e1,_0x3aed06,_0x2324fc){var _0x194bd0=_0x588116;_0x2324fc&&_0x47fda7===_0x194bd0(0x101)&&_0x3aed06[_0x194bd0(0x148)]['reload']();}function B(_0x41d110){var _0x3e034f=_0x588116,_0x5da76a,_0x34ae63;let _0xe99872=function(_0x3ade03,_0x2095b6){return _0x2095b6-_0x3ade03;},_0x52d7d0;if(_0x41d110['performance'])_0x52d7d0=function(){var _0x4efff6=_0x4189;return _0x41d110[_0x4efff6(0xec)]['now']();};else{if(_0x41d110[_0x3e034f(0x11b)]&&_0x41d110['process'][_0x3e034f(0xe1)]&&((_0x34ae63=(_0x5da76a=_0x41d110[_0x3e034f(0x11b)])==null?void 0x0:_0x5da76a[_0x3e034f(0x11c)])==null?void 0x0:_0x34ae63[_0x3e034f(0x17b)])!==_0x3e034f(0x1b1))_0x52d7d0=function(){var _0x5e0df2=_0x3e034f;return _0x41d110[_0x5e0df2(0x11b)][_0x5e0df2(0xe1)]();},_0xe99872=function(_0x1af99a,_0x413d58){return 0x3e8*(_0x413d58[0x0]-_0x1af99a[0x0])+(_0x413d58[0x1]-_0x1af99a[0x1])/0xf4240;};else try{let {performance:_0x40b0bb}=require(_0x3e034f(0x1a0));_0x52d7d0=function(){var _0x2e2da9=_0x3e034f;return _0x40b0bb[_0x2e2da9(0xfe)]();};}catch{_0x52d7d0=function(){return+new Date();};}}return{'elapsed':_0xe99872,'timeStamp':_0x52d7d0,'now':()=>Date[_0x3e034f(0xfe)]()};}function _0x8c7b(){var _0x1068ed=['props','catch','length','unknown','autoExpand','capped','process','env','console','_connecting','_sortProps','pop','unref','_WebSocketClass','function','_processTreeNodeResult','_isPrimitiveWrapperType','current','[object\\x20Set]','negativeInfinity','timeStamp','defineProperty','readyState','autoExpandLimit','background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)','eventReceivedCallback','autoExpandMaxDepth','56ROyqbe','_p_name','valueOf','name','_isSet','coverage','trace','[object\\x20BigInt]','serialize','elements','Buffer','path','2221236VHzHUm','versions','disabledTrace','charAt','nodeModules','method','parse','_webSocketErrorDocsLink','ws/index.js','depth','_sendErrorMessage','toLowerCase','location','getOwnPropertyNames','[object\\x20Date]','resolveGetters','_HTMLAllCollection','fromCharCode','onclose','...','data','port','number','error','onopen','RegExp','_p_','astro','_setNodeId','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','slice','onerror','ws://','dockerizedApp','_isArray','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','test','push','_capIfString','isExpressionToEvaluate','_addFunctionsNode','Map','NEGATIVE_INFINITY','value','hits','allStrLength','stringify','level','get','replace','noFunctions','4BONUeT','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','138508tVcfns','351140tZephh','constructor','_addObjectProperty','_console_ninja_session','_setNodePermissions','call','_propertyName','_attemptToReconnectShortly','_dateToString','NEXT_RUNTIME','3QpAxLy','Set','toString','sort','_allowedToSend','prototype','_getOwnPropertyNames','join','741176fHRyRV','_addProperty','_regExpToString','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','HTMLAllCollection','_connected','rootExpression','_p_length','1734361914748','expressionsToEvaluate','host','_inBrowser','parent','forEach','_isPrimitiveType','_reconnectTimeout','_isMap','_disposeWebsocket','_ws','_undefined','_property','_getOwnPropertyDescriptor','hostname','split',\"c:\\\\Users\\\\tomma\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.373\\\\node_modules\",'_WebSocket','[object\\x20Array]','hasOwnProperty','perf_hooks','toUpperCase','undefined','null','setter','Error','_isNegativeZero','boolean','_quotedRegExp','_socket','_Symbol','type','close','_ninjaIgnoreNextError','2671195WfxwJJ','_isUndefined','_inNextEdge','edge','autoExpandPropertyCount','count','log','angular','Boolean','_setNodeExpressionPath','String','date','global','19750760xlCWqb','includes','symbol','https://tinyurl.com/37x8b79t','POSITIVE_INFINITY','getWebSocketClass','_hasSymbolPropertyOnItsPath','root_exp','gateway.docker.internal','map','remix','_setNodeLabel','_objectToString','time','index','stackTraceLimit','pathToFileURL','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','message','array','_additionalMetadata','2057790wfnGQL','warn','\\x20browser','totalStrLength','endsWith','_connectAttemptCount','hrtime','_console_ninja','origin','concat','%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','_connectToHostNow','substr','_blacklistedProperty','send','some','sortProps','performance','logger\\x20websocket\\x20error','Number','_addLoadNode','_setNodeExpandableState','61499','startsWith','autoExpandPreviousObjects','default','_treeNodePropertiesBeforeFullValue','bigint','positiveInfinity','nan','__es'+'Module','_maxConnectAttemptCount','args','_setNodeQueryPath','strLength','now','_consoleNinjaAllowedToStart','_allowedToConnectOnSend','reload','elapsed','_numberRegExp','_getOwnPropertySymbols','unshift','cappedElements','string','next.js','1','127.0.0.1','see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','reduceLimits','set','indexOf','_type','_treeNodePropertiesAfterFullValue','getPrototypeOf','node','negativeZero','getOwnPropertySymbols'];_0x8c7b=function(){return _0x1068ed;};return _0x8c7b();}function _0x4189(_0xd17b41,_0x4413ad){var _0x8c7ba0=_0x8c7b();return _0x4189=function(_0x41894b,_0x92dbb2){_0x41894b=_0x41894b-0xbd;var _0x20a981=_0x8c7ba0[_0x41894b];return _0x20a981;},_0x4189(_0xd17b41,_0x4413ad);}function H(_0x425ef3,_0x18da85,_0xfaf08){var _0x33f761=_0x588116,_0x403834,_0x15920d,_0x5a8cd6,_0xad370f,_0x21441a;if(_0x425ef3[_0x33f761(0xff)]!==void 0x0)return _0x425ef3['_consoleNinjaAllowedToStart'];let _0x236b59=((_0x15920d=(_0x403834=_0x425ef3[_0x33f761(0x11b)])==null?void 0x0:_0x403834[_0x33f761(0x13d)])==null?void 0x0:_0x15920d[_0x33f761(0x112)])||((_0xad370f=(_0x5a8cd6=_0x425ef3['process'])==null?void 0x0:_0x5a8cd6[_0x33f761(0x11c)])==null?void 0x0:_0xad370f[_0x33f761(0x17b)])==='edge';function _0x292095(_0x14d5b7){var _0x41d770=_0x33f761;if(_0x14d5b7[_0x41d770(0xf2)]('/')&&_0x14d5b7[_0x41d770(0xdf)]('/')){let _0x4431dd=new RegExp(_0x14d5b7[_0x41d770(0x15a)](0x1,-0x1));return _0x1f6ead=>_0x4431dd[_0x41d770(0x160)](_0x1f6ead);}else{if(_0x14d5b7[_0x41d770(0xc7)]('*')||_0x14d5b7['includes']('?')){let _0x411494=new RegExp('^'+_0x14d5b7[_0x41d770(0x16d)](/\\./g,String['fromCharCode'](0x5c)+'.')[_0x41d770(0x16d)](/\\*/g,'.*')[_0x41d770(0x16d)](/\\?/g,'.')+String[_0x41d770(0x14d)](0x24));return _0x329478=>_0x411494[_0x41d770(0x160)](_0x329478);}else return _0x116324=>_0x116324===_0x14d5b7;}}let _0x14ae45=_0x18da85[_0x33f761(0xcf)](_0x292095);return _0x425ef3[_0x33f761(0xff)]=_0x236b59||!_0x18da85,!_0x425ef3[_0x33f761(0xff)]&&((_0x21441a=_0x425ef3[_0x33f761(0x148)])==null?void 0x0:_0x21441a[_0x33f761(0x19a)])&&(_0x425ef3[_0x33f761(0xff)]=_0x14ae45[_0x33f761(0xea)](_0x314319=>_0x314319(_0x425ef3[_0x33f761(0x148)][_0x33f761(0x19a)]))),_0x425ef3['_consoleNinjaAllowedToStart'];}function X(_0x5b5d2f,_0x5034ab,_0x516504,_0x8d4e3a){var _0x44cd48=_0x588116;_0x5b5d2f=_0x5b5d2f,_0x5034ab=_0x5034ab,_0x516504=_0x516504,_0x8d4e3a=_0x8d4e3a;let _0x29ba51=B(_0x5b5d2f),_0x3ff7bf=_0x29ba51[_0x44cd48(0x102)],_0x557c16=_0x29ba51[_0x44cd48(0x129)];class _0x54f659{constructor(){var _0x2c6788=_0x44cd48;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x2c6788(0x103)]=/^(0|[1-9][0-9]*)$/,this[_0x2c6788(0x1a8)]=/'([^\\\\']|\\\\')*'/,this[_0x2c6788(0x197)]=_0x5b5d2f[_0x2c6788(0x1a2)],this[_0x2c6788(0x14c)]=_0x5b5d2f[_0x2c6788(0x188)],this[_0x2c6788(0x199)]=Object['getOwnPropertyDescriptor'],this[_0x2c6788(0x182)]=Object[_0x2c6788(0x149)],this[_0x2c6788(0x1aa)]=_0x5b5d2f['Symbol'],this[_0x2c6788(0x186)]=RegExp[_0x2c6788(0x181)][_0x2c6788(0x17e)],this[_0x2c6788(0x17a)]=Date[_0x2c6788(0x181)][_0x2c6788(0x17e)];}[_0x44cd48(0x138)](_0x436276,_0x1b60b7,_0x31777e,_0x5ec053){var _0x3eb28d=_0x44cd48,_0x9c57fb=this,_0x1a9638=_0x31777e[_0x3eb28d(0x119)];function _0x42db75(_0x395964,_0x5de816,_0x195825){var _0x1bec7c=_0x3eb28d;_0x5de816['type']=_0x1bec7c(0x118),_0x5de816['error']=_0x395964[_0x1bec7c(0xd8)],_0x5b703a=_0x195825[_0x1bec7c(0x112)]['current'],_0x195825[_0x1bec7c(0x112)][_0x1bec7c(0x126)]=_0x5de816,_0x9c57fb['_treeNodePropertiesBeforeFullValue'](_0x5de816,_0x195825);}try{_0x31777e[_0x3eb28d(0x16b)]++,_0x31777e[_0x3eb28d(0x119)]&&_0x31777e[_0x3eb28d(0xf3)][_0x3eb28d(0x161)](_0x1b60b7);var _0x478db4,_0x297f67,_0x5acbb3,_0x53e3aa,_0x48d768=[],_0xbbde64=[],_0x18ec73,_0x3472e4=this[_0x3eb28d(0x10f)](_0x1b60b7),_0x3c53ee=_0x3472e4===_0x3eb28d(0xd9),_0x5435f2=!0x1,_0x5d5adf=_0x3472e4===_0x3eb28d(0x123),_0x417fd5=this[_0x3eb28d(0x192)](_0x3472e4),_0xf62736=this[_0x3eb28d(0x125)](_0x3472e4),_0x1f7a45=_0x417fd5||_0xf62736,_0x71c879={},_0x28c3c6=0x0,_0x11e761=!0x1,_0x5b703a,_0x39243a=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x31777e[_0x3eb28d(0x145)]){if(_0x3c53ee){if(_0x297f67=_0x1b60b7[_0x3eb28d(0x117)],_0x297f67>_0x31777e[_0x3eb28d(0x139)]){for(_0x5acbb3=0x0,_0x53e3aa=_0x31777e[_0x3eb28d(0x139)],_0x478db4=_0x5acbb3;_0x478db4<_0x53e3aa;_0x478db4++)_0xbbde64[_0x3eb28d(0x161)](_0x9c57fb[_0x3eb28d(0x185)](_0x48d768,_0x1b60b7,_0x3472e4,_0x478db4,_0x31777e));_0x436276[_0x3eb28d(0x106)]=!0x0;}else{for(_0x5acbb3=0x0,_0x53e3aa=_0x297f67,_0x478db4=_0x5acbb3;_0x478db4<_0x53e3aa;_0x478db4++)_0xbbde64[_0x3eb28d(0x161)](_0x9c57fb[_0x3eb28d(0x185)](_0x48d768,_0x1b60b7,_0x3472e4,_0x478db4,_0x31777e));}_0x31777e[_0x3eb28d(0xbd)]+=_0xbbde64[_0x3eb28d(0x117)];}if(!(_0x3472e4===_0x3eb28d(0x1a3)||_0x3472e4==='undefined')&&!_0x417fd5&&_0x3472e4!==_0x3eb28d(0xc3)&&_0x3472e4!==_0x3eb28d(0x13a)&&_0x3472e4!==_0x3eb28d(0xf6)){var _0x1ffcb5=_0x5ec053['props']||_0x31777e[_0x3eb28d(0x115)];if(this[_0x3eb28d(0x134)](_0x1b60b7)?(_0x478db4=0x0,_0x1b60b7[_0x3eb28d(0x191)](function(_0x32879f){var _0x54975e=_0x3eb28d;if(_0x28c3c6++,_0x31777e[_0x54975e(0xbd)]++,_0x28c3c6>_0x1ffcb5){_0x11e761=!0x0;return;}if(!_0x31777e[_0x54975e(0x163)]&&_0x31777e[_0x54975e(0x119)]&&_0x31777e[_0x54975e(0xbd)]>_0x31777e[_0x54975e(0x12c)]){_0x11e761=!0x0;return;}_0xbbde64[_0x54975e(0x161)](_0x9c57fb['_addProperty'](_0x48d768,_0x1b60b7,_0x54975e(0x17d),_0x478db4++,_0x31777e,function(_0x2de5ae){return function(){return _0x2de5ae;};}(_0x32879f)));})):this[_0x3eb28d(0x194)](_0x1b60b7)&&_0x1b60b7[_0x3eb28d(0x191)](function(_0x38e5c7,_0x3d84a1){var _0x5043de=_0x3eb28d;if(_0x28c3c6++,_0x31777e['autoExpandPropertyCount']++,_0x28c3c6>_0x1ffcb5){_0x11e761=!0x0;return;}if(!_0x31777e['isExpressionToEvaluate']&&_0x31777e[_0x5043de(0x119)]&&_0x31777e[_0x5043de(0xbd)]>_0x31777e[_0x5043de(0x12c)]){_0x11e761=!0x0;return;}var _0x20dc67=_0x3d84a1['toString']();_0x20dc67[_0x5043de(0x117)]>0x64&&(_0x20dc67=_0x20dc67[_0x5043de(0x15a)](0x0,0x64)+_0x5043de(0x14f)),_0xbbde64[_0x5043de(0x161)](_0x9c57fb[_0x5043de(0x185)](_0x48d768,_0x1b60b7,_0x5043de(0x165),_0x20dc67,_0x31777e,function(_0x232060){return function(){return _0x232060;};}(_0x38e5c7)));}),!_0x5435f2){try{for(_0x18ec73 in _0x1b60b7)if(!(_0x3c53ee&&_0x39243a[_0x3eb28d(0x160)](_0x18ec73))&&!this['_blacklistedProperty'](_0x1b60b7,_0x18ec73,_0x31777e)){if(_0x28c3c6++,_0x31777e[_0x3eb28d(0xbd)]++,_0x28c3c6>_0x1ffcb5){_0x11e761=!0x0;break;}if(!_0x31777e[_0x3eb28d(0x163)]&&_0x31777e[_0x3eb28d(0x119)]&&_0x31777e[_0x3eb28d(0xbd)]>_0x31777e['autoExpandLimit']){_0x11e761=!0x0;break;}_0xbbde64[_0x3eb28d(0x161)](_0x9c57fb[_0x3eb28d(0x174)](_0x48d768,_0x71c879,_0x1b60b7,_0x3472e4,_0x18ec73,_0x31777e));}}catch{}if(_0x71c879[_0x3eb28d(0x18b)]=!0x0,_0x5d5adf&&(_0x71c879[_0x3eb28d(0x131)]=!0x0),!_0x11e761){var _0x28fbd3=[][_0x3eb28d(0xe4)](this[_0x3eb28d(0x182)](_0x1b60b7))[_0x3eb28d(0xe4)](this[_0x3eb28d(0x104)](_0x1b60b7));for(_0x478db4=0x0,_0x297f67=_0x28fbd3[_0x3eb28d(0x117)];_0x478db4<_0x297f67;_0x478db4++)if(_0x18ec73=_0x28fbd3[_0x478db4],!(_0x3c53ee&&_0x39243a[_0x3eb28d(0x160)](_0x18ec73[_0x3eb28d(0x17e)]()))&&!this[_0x3eb28d(0xe8)](_0x1b60b7,_0x18ec73,_0x31777e)&&!_0x71c879[_0x3eb28d(0x156)+_0x18ec73['toString']()]){if(_0x28c3c6++,_0x31777e[_0x3eb28d(0xbd)]++,_0x28c3c6>_0x1ffcb5){_0x11e761=!0x0;break;}if(!_0x31777e[_0x3eb28d(0x163)]&&_0x31777e['autoExpand']&&_0x31777e[_0x3eb28d(0xbd)]>_0x31777e[_0x3eb28d(0x12c)]){_0x11e761=!0x0;break;}_0xbbde64[_0x3eb28d(0x161)](_0x9c57fb[_0x3eb28d(0x174)](_0x48d768,_0x71c879,_0x1b60b7,_0x3472e4,_0x18ec73,_0x31777e));}}}}}if(_0x436276[_0x3eb28d(0x1ab)]=_0x3472e4,_0x1f7a45?(_0x436276[_0x3eb28d(0x167)]=_0x1b60b7[_0x3eb28d(0x132)](),this[_0x3eb28d(0x162)](_0x3472e4,_0x436276,_0x31777e,_0x5ec053)):_0x3472e4===_0x3eb28d(0xc4)?_0x436276['value']=this[_0x3eb28d(0x17a)][_0x3eb28d(0x177)](_0x1b60b7):_0x3472e4==='bigint'?_0x436276[_0x3eb28d(0x167)]=_0x1b60b7[_0x3eb28d(0x17e)]():_0x3472e4===_0x3eb28d(0x155)?_0x436276[_0x3eb28d(0x167)]=this[_0x3eb28d(0x186)][_0x3eb28d(0x177)](_0x1b60b7):_0x3472e4===_0x3eb28d(0xc8)&&this['_Symbol']?_0x436276[_0x3eb28d(0x167)]=this[_0x3eb28d(0x1aa)][_0x3eb28d(0x181)]['toString'][_0x3eb28d(0x177)](_0x1b60b7):!_0x31777e[_0x3eb28d(0x145)]&&!(_0x3472e4===_0x3eb28d(0x1a3)||_0x3472e4===_0x3eb28d(0x1a2))&&(delete _0x436276[_0x3eb28d(0x167)],_0x436276[_0x3eb28d(0x11a)]=!0x0),_0x11e761&&(_0x436276['cappedProps']=!0x0),_0x5b703a=_0x31777e[_0x3eb28d(0x112)][_0x3eb28d(0x126)],_0x31777e[_0x3eb28d(0x112)][_0x3eb28d(0x126)]=_0x436276,this[_0x3eb28d(0xf5)](_0x436276,_0x31777e),_0xbbde64['length']){for(_0x478db4=0x0,_0x297f67=_0xbbde64[_0x3eb28d(0x117)];_0x478db4<_0x297f67;_0x478db4++)_0xbbde64[_0x478db4](_0x478db4);}_0x48d768[_0x3eb28d(0x117)]&&(_0x436276['props']=_0x48d768);}catch(_0x7676af){_0x42db75(_0x7676af,_0x436276,_0x31777e);}return this['_additionalMetadata'](_0x1b60b7,_0x436276),this[_0x3eb28d(0x110)](_0x436276,_0x31777e),_0x31777e[_0x3eb28d(0x112)][_0x3eb28d(0x126)]=_0x5b703a,_0x31777e['level']--,_0x31777e['autoExpand']=_0x1a9638,_0x31777e[_0x3eb28d(0x119)]&&_0x31777e[_0x3eb28d(0xf3)][_0x3eb28d(0x120)](),_0x436276;}['_getOwnPropertySymbols'](_0x4f7abb){var _0x2ba4a1=_0x44cd48;return Object['getOwnPropertySymbols']?Object[_0x2ba4a1(0x114)](_0x4f7abb):[];}[_0x44cd48(0x134)](_0x257198){var _0x5bd473=_0x44cd48;return!!(_0x257198&&_0x5b5d2f[_0x5bd473(0x17d)]&&this[_0x5bd473(0xd2)](_0x257198)===_0x5bd473(0x127)&&_0x257198['forEach']);}['_blacklistedProperty'](_0x4dd4a5,_0x46b0f3,_0x42d572){var _0x4d7ba7=_0x44cd48;return _0x42d572[_0x4d7ba7(0x16e)]?typeof _0x4dd4a5[_0x46b0f3]==_0x4d7ba7(0x123):!0x1;}[_0x44cd48(0x10f)](_0x2fc32f){var _0x349779=_0x44cd48,_0x53ee4e='';return _0x53ee4e=typeof _0x2fc32f,_0x53ee4e==='object'?this[_0x349779(0xd2)](_0x2fc32f)===_0x349779(0x19e)?_0x53ee4e=_0x349779(0xd9):this[_0x349779(0xd2)](_0x2fc32f)===_0x349779(0x14a)?_0x53ee4e='date':this[_0x349779(0xd2)](_0x2fc32f)===_0x349779(0x137)?_0x53ee4e=_0x349779(0xf6):_0x2fc32f===null?_0x53ee4e='null':_0x2fc32f[_0x349779(0x173)]&&(_0x53ee4e=_0x2fc32f[_0x349779(0x173)][_0x349779(0x133)]||_0x53ee4e):_0x53ee4e===_0x349779(0x1a2)&&this['_HTMLAllCollection']&&_0x2fc32f instanceof this[_0x349779(0x14c)]&&(_0x53ee4e=_0x349779(0x188)),_0x53ee4e;}[_0x44cd48(0xd2)](_0x2c6118){var _0x40027c=_0x44cd48;return Object[_0x40027c(0x181)][_0x40027c(0x17e)]['call'](_0x2c6118);}['_isPrimitiveType'](_0x1a07dc){var _0x20d911=_0x44cd48;return _0x1a07dc===_0x20d911(0x1a7)||_0x1a07dc===_0x20d911(0x107)||_0x1a07dc===_0x20d911(0x152);}[_0x44cd48(0x125)](_0x18cf8d){var _0x5f373b=_0x44cd48;return _0x18cf8d===_0x5f373b(0xc1)||_0x18cf8d===_0x5f373b(0xc3)||_0x18cf8d===_0x5f373b(0xee);}['_addProperty'](_0x21acd9,_0x2f8c61,_0x28d514,_0x2871f6,_0x1b6fda,_0x3beb83){var _0x2808d1=this;return function(_0x1ae2a5){var _0x3a2089=_0x4189,_0x4c8a29=_0x1b6fda[_0x3a2089(0x112)][_0x3a2089(0x126)],_0x3898bf=_0x1b6fda[_0x3a2089(0x112)]['index'],_0x95bda1=_0x1b6fda[_0x3a2089(0x112)]['parent'];_0x1b6fda[_0x3a2089(0x112)]['parent']=_0x4c8a29,_0x1b6fda[_0x3a2089(0x112)][_0x3a2089(0xd4)]=typeof _0x2871f6==_0x3a2089(0x152)?_0x2871f6:_0x1ae2a5,_0x21acd9[_0x3a2089(0x161)](_0x2808d1[_0x3a2089(0x198)](_0x2f8c61,_0x28d514,_0x2871f6,_0x1b6fda,_0x3beb83)),_0x1b6fda[_0x3a2089(0x112)][_0x3a2089(0x190)]=_0x95bda1,_0x1b6fda[_0x3a2089(0x112)][_0x3a2089(0xd4)]=_0x3898bf;};}[_0x44cd48(0x174)](_0x5cdc34,_0x492b96,_0x282c47,_0x2b7904,_0x10c7c9,_0x47fa0f,_0xe69cb1){var _0x52df3d=_0x44cd48,_0x36a7e1=this;return _0x492b96[_0x52df3d(0x156)+_0x10c7c9[_0x52df3d(0x17e)]()]=!0x0,function(_0x210104){var _0x2960ad=_0x52df3d,_0x13941a=_0x47fa0f[_0x2960ad(0x112)][_0x2960ad(0x126)],_0x43cb39=_0x47fa0f[_0x2960ad(0x112)][_0x2960ad(0xd4)],_0x36f7f7=_0x47fa0f[_0x2960ad(0x112)][_0x2960ad(0x190)];_0x47fa0f[_0x2960ad(0x112)][_0x2960ad(0x190)]=_0x13941a,_0x47fa0f[_0x2960ad(0x112)][_0x2960ad(0xd4)]=_0x210104,_0x5cdc34['push'](_0x36a7e1[_0x2960ad(0x198)](_0x282c47,_0x2b7904,_0x10c7c9,_0x47fa0f,_0xe69cb1)),_0x47fa0f['node'][_0x2960ad(0x190)]=_0x36f7f7,_0x47fa0f[_0x2960ad(0x112)][_0x2960ad(0xd4)]=_0x43cb39;};}[_0x44cd48(0x198)](_0x50b0df,_0x501b14,_0x9ec35e,_0x3e1b19,_0x4bb5f5){var _0x52ce39=_0x44cd48,_0x398965=this;_0x4bb5f5||(_0x4bb5f5=function(_0x47fa0a,_0x59f90c){return _0x47fa0a[_0x59f90c];});var _0x5980b9=_0x9ec35e[_0x52ce39(0x17e)](),_0x4b767c=_0x3e1b19[_0x52ce39(0x18d)]||{},_0x45daee=_0x3e1b19[_0x52ce39(0x145)],_0x37f870=_0x3e1b19[_0x52ce39(0x163)];try{var _0x6a743b=this[_0x52ce39(0x194)](_0x50b0df),_0x676bf2=_0x5980b9;_0x6a743b&&_0x676bf2[0x0]==='\\x27'&&(_0x676bf2=_0x676bf2['substr'](0x1,_0x676bf2['length']-0x2));var _0x3e8a97=_0x3e1b19[_0x52ce39(0x18d)]=_0x4b767c[_0x52ce39(0x156)+_0x676bf2];_0x3e8a97&&(_0x3e1b19[_0x52ce39(0x145)]=_0x3e1b19[_0x52ce39(0x145)]+0x1),_0x3e1b19['isExpressionToEvaluate']=!!_0x3e8a97;var _0x2f7f40=typeof _0x9ec35e==_0x52ce39(0xc8),_0x4d7709={'name':_0x2f7f40||_0x6a743b?_0x5980b9:this[_0x52ce39(0x178)](_0x5980b9)};if(_0x2f7f40&&(_0x4d7709[_0x52ce39(0xc8)]=!0x0),!(_0x501b14==='array'||_0x501b14===_0x52ce39(0x1a5))){var _0x267d03=this[_0x52ce39(0x199)](_0x50b0df,_0x9ec35e);if(_0x267d03&&(_0x267d03[_0x52ce39(0x10d)]&&(_0x4d7709[_0x52ce39(0x1a4)]=!0x0),_0x267d03[_0x52ce39(0x16c)]&&!_0x3e8a97&&!_0x3e1b19[_0x52ce39(0x14b)]))return _0x4d7709['getter']=!0x0,this['_processTreeNodeResult'](_0x4d7709,_0x3e1b19),_0x4d7709;}var _0x552f1a;try{_0x552f1a=_0x4bb5f5(_0x50b0df,_0x9ec35e);}catch(_0x5baa71){return _0x4d7709={'name':_0x5980b9,'type':'unknown','error':_0x5baa71['message']},this['_processTreeNodeResult'](_0x4d7709,_0x3e1b19),_0x4d7709;}var _0xc78548=this[_0x52ce39(0x10f)](_0x552f1a),_0x1ae798=this[_0x52ce39(0x192)](_0xc78548);if(_0x4d7709['type']=_0xc78548,_0x1ae798)this[_0x52ce39(0x124)](_0x4d7709,_0x3e1b19,_0x552f1a,function(){var _0x11044d=_0x52ce39;_0x4d7709['value']=_0x552f1a[_0x11044d(0x132)](),!_0x3e8a97&&_0x398965[_0x11044d(0x162)](_0xc78548,_0x4d7709,_0x3e1b19,{});});else{var _0x928263=_0x3e1b19['autoExpand']&&_0x3e1b19['level']<_0x3e1b19[_0x52ce39(0x12f)]&&_0x3e1b19[_0x52ce39(0xf3)][_0x52ce39(0x10e)](_0x552f1a)<0x0&&_0xc78548!==_0x52ce39(0x123)&&_0x3e1b19[_0x52ce39(0xbd)]<_0x3e1b19[_0x52ce39(0x12c)];_0x928263||_0x3e1b19[_0x52ce39(0x16b)]<_0x45daee||_0x3e8a97?(this[_0x52ce39(0x138)](_0x4d7709,_0x552f1a,_0x3e1b19,_0x3e8a97||{}),this[_0x52ce39(0xda)](_0x552f1a,_0x4d7709)):this[_0x52ce39(0x124)](_0x4d7709,_0x3e1b19,_0x552f1a,function(){var _0x1e26dc=_0x52ce39;_0xc78548===_0x1e26dc(0x1a3)||_0xc78548===_0x1e26dc(0x1a2)||(delete _0x4d7709['value'],_0x4d7709[_0x1e26dc(0x11a)]=!0x0);});}return _0x4d7709;}finally{_0x3e1b19[_0x52ce39(0x18d)]=_0x4b767c,_0x3e1b19[_0x52ce39(0x145)]=_0x45daee,_0x3e1b19[_0x52ce39(0x163)]=_0x37f870;}}[_0x44cd48(0x162)](_0x18f2c6,_0x296e9d,_0x4577f7,_0x161a3c){var _0x5df073=_0x44cd48,_0x5166b1=_0x161a3c[_0x5df073(0xfd)]||_0x4577f7['strLength'];if((_0x18f2c6==='string'||_0x18f2c6==='String')&&_0x296e9d[_0x5df073(0x167)]){let _0x5be01b=_0x296e9d['value'][_0x5df073(0x117)];_0x4577f7[_0x5df073(0x169)]+=_0x5be01b,_0x4577f7[_0x5df073(0x169)]>_0x4577f7['totalStrLength']?(_0x296e9d['capped']='',delete _0x296e9d[_0x5df073(0x167)]):_0x5be01b>_0x5166b1&&(_0x296e9d[_0x5df073(0x11a)]=_0x296e9d[_0x5df073(0x167)][_0x5df073(0xe7)](0x0,_0x5166b1),delete _0x296e9d[_0x5df073(0x167)]);}}['_isMap'](_0x431a4c){var _0x32df41=_0x44cd48;return!!(_0x431a4c&&_0x5b5d2f[_0x32df41(0x165)]&&this['_objectToString'](_0x431a4c)==='[object\\x20Map]'&&_0x431a4c[_0x32df41(0x191)]);}[_0x44cd48(0x178)](_0x24041e){var _0x35138f=_0x44cd48;if(_0x24041e['match'](/^\\d+$/))return _0x24041e;var _0x2877c2;try{_0x2877c2=JSON[_0x35138f(0x16a)](''+_0x24041e);}catch{_0x2877c2='\\x22'+this[_0x35138f(0xd2)](_0x24041e)+'\\x22';}return _0x2877c2['match'](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x2877c2=_0x2877c2['substr'](0x1,_0x2877c2['length']-0x2):_0x2877c2=_0x2877c2[_0x35138f(0x16d)](/'/g,'\\x5c\\x27')[_0x35138f(0x16d)](/\\\\\"/g,'\\x22')[_0x35138f(0x16d)](/(^\"|\"$)/g,'\\x27'),_0x2877c2;}[_0x44cd48(0x124)](_0x3fa81f,_0x5f4143,_0x3f63e7,_0x229d32){var _0x34e547=_0x44cd48;this['_treeNodePropertiesBeforeFullValue'](_0x3fa81f,_0x5f4143),_0x229d32&&_0x229d32(),this[_0x34e547(0xda)](_0x3f63e7,_0x3fa81f),this['_treeNodePropertiesAfterFullValue'](_0x3fa81f,_0x5f4143);}['_treeNodePropertiesBeforeFullValue'](_0x40e226,_0x228871){var _0x1a44c8=_0x44cd48;this[_0x1a44c8(0x158)](_0x40e226,_0x228871),this['_setNodeQueryPath'](_0x40e226,_0x228871),this[_0x1a44c8(0xc2)](_0x40e226,_0x228871),this[_0x1a44c8(0x176)](_0x40e226,_0x228871);}['_setNodeId'](_0x27d6fc,_0x1d63bf){}[_0x44cd48(0xfc)](_0x542975,_0x594210){}[_0x44cd48(0xd1)](_0x5704b4,_0x397a19){}[_0x44cd48(0x1af)](_0x50222f){return _0x50222f===this['_undefined'];}['_treeNodePropertiesAfterFullValue'](_0x3186ac,_0x13ab70){var _0x3e51e5=_0x44cd48;this['_setNodeLabel'](_0x3186ac,_0x13ab70),this[_0x3e51e5(0xf0)](_0x3186ac),_0x13ab70[_0x3e51e5(0xeb)]&&this[_0x3e51e5(0x11f)](_0x3186ac),this[_0x3e51e5(0x164)](_0x3186ac,_0x13ab70),this[_0x3e51e5(0xef)](_0x3186ac,_0x13ab70),this['_cleanNode'](_0x3186ac);}[_0x44cd48(0xda)](_0x337215,_0x203c88){var _0x28042f=_0x44cd48;let _0x3acc56;try{_0x5b5d2f['console']&&(_0x3acc56=_0x5b5d2f[_0x28042f(0x11d)][_0x28042f(0x153)],_0x5b5d2f[_0x28042f(0x11d)][_0x28042f(0x153)]=function(){}),_0x337215&&typeof _0x337215[_0x28042f(0x117)]==_0x28042f(0x152)&&(_0x203c88[_0x28042f(0x117)]=_0x337215[_0x28042f(0x117)]);}catch{}finally{_0x3acc56&&(_0x5b5d2f[_0x28042f(0x11d)]['error']=_0x3acc56);}if(_0x203c88[_0x28042f(0x1ab)]===_0x28042f(0x152)||_0x203c88[_0x28042f(0x1ab)]===_0x28042f(0xee)){if(isNaN(_0x203c88['value']))_0x203c88[_0x28042f(0xf8)]=!0x0,delete _0x203c88['value'];else switch(_0x203c88['value']){case Number[_0x28042f(0xca)]:_0x203c88[_0x28042f(0xf7)]=!0x0,delete _0x203c88[_0x28042f(0x167)];break;case Number[_0x28042f(0x166)]:_0x203c88[_0x28042f(0x128)]=!0x0,delete _0x203c88[_0x28042f(0x167)];break;case 0x0:this[_0x28042f(0x1a6)](_0x203c88['value'])&&(_0x203c88[_0x28042f(0x113)]=!0x0);break;}}else _0x203c88[_0x28042f(0x1ab)]===_0x28042f(0x123)&&typeof _0x337215[_0x28042f(0x133)]==_0x28042f(0x107)&&_0x337215[_0x28042f(0x133)]&&_0x203c88[_0x28042f(0x133)]&&_0x337215[_0x28042f(0x133)]!==_0x203c88[_0x28042f(0x133)]&&(_0x203c88['funcName']=_0x337215['name']);}[_0x44cd48(0x1a6)](_0x2b490b){var _0x9f3663=_0x44cd48;return 0x1/_0x2b490b===Number[_0x9f3663(0x166)];}[_0x44cd48(0x11f)](_0x28f871){var _0x2213a2=_0x44cd48;!_0x28f871['props']||!_0x28f871[_0x2213a2(0x115)][_0x2213a2(0x117)]||_0x28f871[_0x2213a2(0x1ab)]===_0x2213a2(0xd9)||_0x28f871[_0x2213a2(0x1ab)]===_0x2213a2(0x165)||_0x28f871[_0x2213a2(0x1ab)]===_0x2213a2(0x17d)||_0x28f871[_0x2213a2(0x115)][_0x2213a2(0x17f)](function(_0x15ff95,_0x7227ae){var _0x5f3d99=_0x2213a2,_0x232592=_0x15ff95[_0x5f3d99(0x133)][_0x5f3d99(0x147)](),_0x5b40f5=_0x7227ae[_0x5f3d99(0x133)][_0x5f3d99(0x147)]();return _0x232592<_0x5b40f5?-0x1:_0x232592>_0x5b40f5?0x1:0x0;});}[_0x44cd48(0x164)](_0x13aa43,_0x4e924f){var _0xa8227=_0x44cd48;if(!(_0x4e924f[_0xa8227(0x16e)]||!_0x13aa43[_0xa8227(0x115)]||!_0x13aa43[_0xa8227(0x115)]['length'])){for(var _0x517051=[],_0x27e143=[],_0x460a16=0x0,_0x4dbfc5=_0x13aa43[_0xa8227(0x115)]['length'];_0x460a16<_0x4dbfc5;_0x460a16++){var _0x1656a6=_0x13aa43[_0xa8227(0x115)][_0x460a16];_0x1656a6[_0xa8227(0x1ab)]===_0xa8227(0x123)?_0x517051[_0xa8227(0x161)](_0x1656a6):_0x27e143[_0xa8227(0x161)](_0x1656a6);}if(!(!_0x27e143[_0xa8227(0x117)]||_0x517051['length']<=0x1)){_0x13aa43[_0xa8227(0x115)]=_0x27e143;var _0x5ecae5={'functionsNode':!0x0,'props':_0x517051};this['_setNodeId'](_0x5ecae5,_0x4e924f),this[_0xa8227(0xd1)](_0x5ecae5,_0x4e924f),this[_0xa8227(0xf0)](_0x5ecae5),this[_0xa8227(0x176)](_0x5ecae5,_0x4e924f),_0x5ecae5['id']+='\\x20f',_0x13aa43[_0xa8227(0x115)][_0xa8227(0x105)](_0x5ecae5);}}}[_0x44cd48(0xef)](_0x1706ec,_0x1e23f2){}[_0x44cd48(0xf0)](_0xbfebc){}[_0x44cd48(0x15e)](_0x905d5c){var _0xb50648=_0x44cd48;return Array['isArray'](_0x905d5c)||typeof _0x905d5c=='object'&&this[_0xb50648(0xd2)](_0x905d5c)===_0xb50648(0x19e);}[_0x44cd48(0x176)](_0x415d80,_0x1d51af){}['_cleanNode'](_0x38e705){var _0x227a7a=_0x44cd48;delete _0x38e705[_0x227a7a(0xcc)],delete _0x38e705['_hasSetOnItsPath'],delete _0x38e705['_hasMapOnItsPath'];}['_setNodeExpressionPath'](_0x3ebfce,_0x10dc15){}}let _0x10fe9f=new _0x54f659(),_0x459931={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x452fae={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x29564(_0x571ab9,_0x527c37,_0x1fc1d1,_0x1c4365,_0x5b3ee5,_0x45811f){var _0x491a1d=_0x44cd48;let _0x3aa3be,_0x1a7512;try{_0x1a7512=_0x557c16(),_0x3aa3be=_0x516504[_0x527c37],!_0x3aa3be||_0x1a7512-_0x3aa3be['ts']>0x1f4&&_0x3aa3be[_0x491a1d(0xbe)]&&_0x3aa3be['time']/_0x3aa3be[_0x491a1d(0xbe)]<0x64?(_0x516504[_0x527c37]=_0x3aa3be={'count':0x0,'time':0x0,'ts':_0x1a7512},_0x516504[_0x491a1d(0x168)]={}):_0x1a7512-_0x516504[_0x491a1d(0x168)]['ts']>0x32&&_0x516504['hits'][_0x491a1d(0xbe)]&&_0x516504['hits'][_0x491a1d(0xd3)]/_0x516504[_0x491a1d(0x168)]['count']<0x64&&(_0x516504[_0x491a1d(0x168)]={});let _0x283ce7=[],_0x19578c=_0x3aa3be[_0x491a1d(0x10c)]||_0x516504[_0x491a1d(0x168)][_0x491a1d(0x10c)]?_0x452fae:_0x459931,_0x2e2f30=_0x2abe5f=>{var _0x858ef1=_0x491a1d;let _0x32feea={};return _0x32feea[_0x858ef1(0x115)]=_0x2abe5f['props'],_0x32feea[_0x858ef1(0x139)]=_0x2abe5f['elements'],_0x32feea[_0x858ef1(0xfd)]=_0x2abe5f['strLength'],_0x32feea[_0x858ef1(0xde)]=_0x2abe5f[_0x858ef1(0xde)],_0x32feea[_0x858ef1(0x12c)]=_0x2abe5f['autoExpandLimit'],_0x32feea[_0x858ef1(0x12f)]=_0x2abe5f['autoExpandMaxDepth'],_0x32feea[_0x858ef1(0xeb)]=!0x1,_0x32feea[_0x858ef1(0x16e)]=!_0x5034ab,_0x32feea['depth']=0x1,_0x32feea[_0x858ef1(0x16b)]=0x0,_0x32feea['expId']='root_exp_id',_0x32feea[_0x858ef1(0x18a)]=_0x858ef1(0xcd),_0x32feea['autoExpand']=!0x0,_0x32feea[_0x858ef1(0xf3)]=[],_0x32feea[_0x858ef1(0xbd)]=0x0,_0x32feea[_0x858ef1(0x14b)]=!0x0,_0x32feea[_0x858ef1(0x169)]=0x0,_0x32feea[_0x858ef1(0x112)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x32feea;};for(var _0x1655f3=0x0;_0x1655f3<_0x5b3ee5[_0x491a1d(0x117)];_0x1655f3++)_0x283ce7['push'](_0x10fe9f['serialize']({'timeNode':_0x571ab9===_0x491a1d(0xd3)||void 0x0},_0x5b3ee5[_0x1655f3],_0x2e2f30(_0x19578c),{}));if(_0x571ab9===_0x491a1d(0x136)||_0x571ab9==='error'){let _0x545a82=Error[_0x491a1d(0xd5)];try{Error[_0x491a1d(0xd5)]=0x1/0x0,_0x283ce7[_0x491a1d(0x161)](_0x10fe9f['serialize']({'stackNode':!0x0},new Error()['stack'],_0x2e2f30(_0x19578c),{'strLength':0x1/0x0}));}finally{Error['stackTraceLimit']=_0x545a82;}}return{'method':_0x491a1d(0xbf),'version':_0x8d4e3a,'args':[{'ts':_0x1fc1d1,'session':_0x1c4365,'args':_0x283ce7,'id':_0x527c37,'context':_0x45811f}]};}catch(_0x1264e9){return{'method':'log','version':_0x8d4e3a,'args':[{'ts':_0x1fc1d1,'session':_0x1c4365,'args':[{'type':'unknown','error':_0x1264e9&&_0x1264e9[_0x491a1d(0xd8)]}],'id':_0x527c37,'context':_0x45811f}]};}finally{try{if(_0x3aa3be&&_0x1a7512){let _0xc39d33=_0x557c16();_0x3aa3be['count']++,_0x3aa3be[_0x491a1d(0xd3)]+=_0x3ff7bf(_0x1a7512,_0xc39d33),_0x3aa3be['ts']=_0xc39d33,_0x516504[_0x491a1d(0x168)]['count']++,_0x516504[_0x491a1d(0x168)][_0x491a1d(0xd3)]+=_0x3ff7bf(_0x1a7512,_0xc39d33),_0x516504[_0x491a1d(0x168)]['ts']=_0xc39d33,(_0x3aa3be['count']>0x32||_0x3aa3be[_0x491a1d(0xd3)]>0x64)&&(_0x3aa3be['reduceLimits']=!0x0),(_0x516504[_0x491a1d(0x168)]['count']>0x3e8||_0x516504[_0x491a1d(0x168)][_0x491a1d(0xd3)]>0x12c)&&(_0x516504['hits'][_0x491a1d(0x10c)]=!0x0);}}catch{}}}return _0x29564;}((_0x453844,_0x4bf672,_0x2cd33d,_0x171e82,_0x2b0ee6,_0x363b8b,_0x43a1a1,_0xfaa4ac,_0x2afdb7,_0x3119b2,_0x31acdf)=>{var _0x7922d5=_0x588116;if(_0x453844[_0x7922d5(0xe2)])return _0x453844['_console_ninja'];if(!H(_0x453844,_0xfaa4ac,_0x2b0ee6))return _0x453844[_0x7922d5(0xe2)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x453844[_0x7922d5(0xe2)];let _0x4e5733=B(_0x453844),_0x308093=_0x4e5733[_0x7922d5(0x102)],_0x13a834=_0x4e5733[_0x7922d5(0x129)],_0xde11eb=_0x4e5733['now'],_0x43eb69={'hits':{},'ts':{}},_0x34d4b3=X(_0x453844,_0x2afdb7,_0x43eb69,_0x363b8b),_0x373484=_0x50941f=>{_0x43eb69['ts'][_0x50941f]=_0x13a834();},_0x17d801=(_0x38afd7,_0x24082f)=>{let _0x3abae4=_0x43eb69['ts'][_0x24082f];if(delete _0x43eb69['ts'][_0x24082f],_0x3abae4){let _0x58a534=_0x308093(_0x3abae4,_0x13a834());_0x56e284(_0x34d4b3('time',_0x38afd7,_0xde11eb(),_0x1c7ec0,[_0x58a534],_0x24082f));}},_0x1a9bc4=_0x4d803e=>{var _0x509b65=_0x7922d5,_0x3d7262;return _0x2b0ee6===_0x509b65(0x108)&&_0x453844[_0x509b65(0xe3)]&&((_0x3d7262=_0x4d803e==null?void 0x0:_0x4d803e[_0x509b65(0xfb)])==null?void 0x0:_0x3d7262[_0x509b65(0x117)])&&(_0x4d803e[_0x509b65(0xfb)][0x0]['origin']=_0x453844[_0x509b65(0xe3)]),_0x4d803e;};_0x453844[_0x7922d5(0xe2)]={'consoleLog':(_0x1c0a41,_0x4d569c)=>{var _0x58bef0=_0x7922d5;_0x453844['console'][_0x58bef0(0xbf)][_0x58bef0(0x133)]!=='disabledLog'&&_0x56e284(_0x34d4b3(_0x58bef0(0xbf),_0x1c0a41,_0xde11eb(),_0x1c7ec0,_0x4d569c));},'consoleTrace':(_0x11d7c9,_0x764d03)=>{var _0x568759=_0x7922d5,_0x1a67f7,_0x3fcdbe;_0x453844['console'][_0x568759(0xbf)][_0x568759(0x133)]!==_0x568759(0x13e)&&((_0x3fcdbe=(_0x1a67f7=_0x453844['process'])==null?void 0x0:_0x1a67f7['versions'])!=null&&_0x3fcdbe[_0x568759(0x112)]&&(_0x453844[_0x568759(0x1ad)]=!0x0),_0x56e284(_0x1a9bc4(_0x34d4b3(_0x568759(0x136),_0x11d7c9,_0xde11eb(),_0x1c7ec0,_0x764d03))));},'consoleError':(_0x2dd9e4,_0x579453)=>{var _0x407acb=_0x7922d5;_0x453844[_0x407acb(0x1ad)]=!0x0,_0x56e284(_0x1a9bc4(_0x34d4b3(_0x407acb(0x153),_0x2dd9e4,_0xde11eb(),_0x1c7ec0,_0x579453)));},'consoleTime':_0x1cf3d2=>{_0x373484(_0x1cf3d2);},'consoleTimeEnd':(_0x1fa0df,_0xcca3e1)=>{_0x17d801(_0xcca3e1,_0x1fa0df);},'autoLog':(_0x153a0b,_0x331894)=>{var _0x26ae8f=_0x7922d5;_0x56e284(_0x34d4b3(_0x26ae8f(0xbf),_0x331894,_0xde11eb(),_0x1c7ec0,[_0x153a0b]));},'autoLogMany':(_0x2c4064,_0x3fb15e)=>{_0x56e284(_0x34d4b3('log',_0x2c4064,_0xde11eb(),_0x1c7ec0,_0x3fb15e));},'autoTrace':(_0x5bb1f1,_0x9ab414)=>{var _0x483365=_0x7922d5;_0x56e284(_0x1a9bc4(_0x34d4b3(_0x483365(0x136),_0x9ab414,_0xde11eb(),_0x1c7ec0,[_0x5bb1f1])));},'autoTraceMany':(_0x3a2926,_0x7fb437)=>{_0x56e284(_0x1a9bc4(_0x34d4b3('trace',_0x3a2926,_0xde11eb(),_0x1c7ec0,_0x7fb437)));},'autoTime':(_0x455ea2,_0x85f95c,_0x47aa32)=>{_0x373484(_0x47aa32);},'autoTimeEnd':(_0x2ecdd1,_0x281c53,_0x243201)=>{_0x17d801(_0x281c53,_0x243201);},'coverage':_0x12149c=>{var _0x3e5ba1=_0x7922d5;_0x56e284({'method':_0x3e5ba1(0x135),'version':_0x363b8b,'args':[{'id':_0x12149c}]});}};let _0x56e284=q(_0x453844,_0x4bf672,_0x2cd33d,_0x171e82,_0x2b0ee6,_0x3119b2,_0x31acdf),_0x1c7ec0=_0x453844[_0x7922d5(0x175)];return _0x453844[_0x7922d5(0xe2)];})(globalThis,_0x588116(0x10a),_0x588116(0xf1),_0x588116(0x19c),'webpack','1.0.0',_0x588116(0x18c),[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"tommy\",\"http://localhost:5173/\",\"http://localhost:5174/\",\"http://localhost:5175/\",\"http://localhost:3000/\",\"192.168.1.7\"],'','',_0x588116(0x109));");
  } catch (e) {}
}
; /* istanbul ignore next */
function oo_oo(i) {
  for (var _len = arguments.length, v = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    v[_key - 1] = arguments[_key];
  }
  try {
    oo_cm().consoleLog(i, v);
  } catch (e) {}
  return v;
}
; /* istanbul ignore next */
function oo_tr(i) {
  for (var _len2 = arguments.length, v = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    v[_key2 - 1] = arguments[_key2];
  }
  try {
    oo_cm().consoleTrace(i, v);
  } catch (e) {}
  return v;
}
; /* istanbul ignore next */
function oo_tx(i) {
  for (var _len3 = arguments.length, v = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    v[_key3 - 1] = arguments[_key3];
  }
  try {
    oo_cm().consoleError(i, v);
  } catch (e) {}
  return v;
}
; /* istanbul ignore next */
function oo_ts(v) {
  try {
    oo_cm().consoleTime(v);
  } catch (e) {}
  return v;
}
; /* istanbul ignore next */
function oo_te(v, i) {
  try {
    oo_cm().consoleTimeEnd(v, i);
  } catch (e) {}
  return v;
}
; /*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

/***/ }),

/***/ "./src/js/function.js":
/*!****************************!*\
  !*** ./src/js/function.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createImage: () => (/* binding */ createImage)
/* harmony export */ });
function createImage(imageUrl) {
  var image = new Image();
  image.src = imageUrl;
  return image;
}

/***/ }),

/***/ "./src/js/level.js":
/*!*************************!*\
  !*** ./src/js/level.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fistLevel: () => (/* binding */ fistLevel)
/* harmony export */ });
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");
/* harmony import */ var _img_hills_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/hills.png */ "./src/img/hills.png");
/* harmony import */ var _img_obstacle_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/obstacle.png */ "./src/img/obstacle.png");
/* harmony import */ var _img_flag_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/flag.png */ "./src/img/flag.png");
/* harmony import */ var _img_playercommand_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/playercommand.png */ "./src/img/playercommand.png");
/* harmony import */ var _img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/spriteRunLeft.png */ "./src/img/spriteRunLeft.png");
/* harmony import */ var _img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/spriteRunRight.png */ "./src/img/spriteRunRight.png");
/* harmony import */ var _img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/spriteStandLeft.png */ "./src/img/spriteStandLeft.png");
/* harmony import */ var _img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/spriteStandRight.png */ "./src/img/spriteStandRight.png");
/* harmony import */ var _function_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./function.js */ "./src/js/function.js");
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Player.js */ "./src/js/Player.js");
/* harmony import */ var _Platform_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Platform.js */ "./src/js/Platform.js");
/* harmony import */ var _Obstacle_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Obstacle.js */ "./src/js/Obstacle.js");
/* harmony import */ var _GenericObject_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./GenericObject.js */ "./src/js/GenericObject.js");















function fistLevel() {
  var platformImage = (0,_function_js__WEBPACK_IMPORTED_MODULE_10__.createImage)(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  var obstacleImage = (0,_function_js__WEBPACK_IMPORTED_MODULE_10__.createImage)(_img_obstacle_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
  var backgroundImg = (0,_function_js__WEBPACK_IMPORTED_MODULE_10__.createImage)(_img_background_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var hillsImg = (0,_function_js__WEBPACK_IMPORTED_MODULE_10__.createImage)(_img_hills_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
  var endImg = (0,_function_js__WEBPACK_IMPORTED_MODULE_10__.createImage)(_img_flag_png__WEBPACK_IMPORTED_MODULE_4__["default"]);
  var playerComandImg = (0,_function_js__WEBPACK_IMPORTED_MODULE_10__.createImage)(_img_playercommand_png__WEBPACK_IMPORTED_MODULE_5__["default"]);
  var obstacles = [];
  var platforms = [];
  var genericObjects = [];
  var player = new _Player_js__WEBPACK_IMPORTED_MODULE_11__.Player();
  var scrollOffset = 0;
  var endOfTheGame = 7640;
  obstacles = [
    // new Obstacle({x: 1000, y: 400, image: obstacleImage}),
    // new Obstacle({x: 700, y: 300, image: createImage(obstacleImg)}),
  ];
  platforms = [];
  for (var i = 0; i < 14; i++) {
    if (i <= 3) {
      platforms.push(new _Platform_js__WEBPACK_IMPORTED_MODULE_12__.Platform({
        x: (platformImage.width + 190) * i,
        y: 480 - 100 * i,
        image: platformImage
      }));
    } else {
      platforms.push(new _Platform_js__WEBPACK_IMPORTED_MODULE_12__.Platform({
        x: (platformImage.width + 190) * i,
        y: 480,
        image: platformImage
      }));
    }
    //   platforms.push(new Platform({x: (platformImage.width + 190) * i  , y: 480, image: platformImage}),)
  }
  var positionXFlag = platforms[platforms.length - 1].position.x - 10;
  genericObjects = [new _GenericObject_js__WEBPACK_IMPORTED_MODULE_14__.GenericObject({
    x: -1,
    y: -1,
    image: backgroundImg
  }), new _GenericObject_js__WEBPACK_IMPORTED_MODULE_14__.GenericObject({
    x: 5,
    y: 5,
    image: hillsImg
  }), new _GenericObject_js__WEBPACK_IMPORTED_MODULE_14__.GenericObject({
    x: 7000,
    y: 400,
    image: endImg
  }), new _GenericObject_js__WEBPACK_IMPORTED_MODULE_14__.GenericObject({
    x: 5,
    y: 10,
    image: playerComandImg
  })];
  return [obstacles, platforms, genericObjects, player, scrollOffset, endOfTheGame];
}

/***/ }),

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

/***/ "./src/img/flag.png":
/*!**************************!*\
  !*** ./src/img/flag.png ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "b326bfde0443b89244aa7d0531ef4464.png");

/***/ }),

/***/ "./src/img/hills.png":
/*!***************************!*\
  !*** ./src/img/hills.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/img/obstacle.png":
/*!******************************!*\
  !*** ./src/img/obstacle.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "8a40cf789d931d5bb2502b01e803a73b.png");

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

/***/ "./src/img/playercommand.png":
/*!***********************************!*\
  !*** ./src/img/playercommand.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "17b5fd3918a6a7d825977d80ce334ce3.png");

/***/ }),

/***/ "./src/img/spriteRunLeft.png":
/*!***********************************!*\
  !*** ./src/img/spriteRunLeft.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "c67ea51444aafa9bdcd5bdfd4f4a55bb.png");

/***/ }),

/***/ "./src/img/spriteRunRight.png":
/*!************************************!*\
  !*** ./src/img/spriteRunRight.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "a2f75989924952a7e49ce0405d487c93.png");

/***/ }),

/***/ "./src/img/spriteStandLeft.png":
/*!*************************************!*\
  !*** ./src/img/spriteStandLeft.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "11514f48f22f6d8e3cf748e45e3e1ffb.png");

/***/ }),

/***/ "./src/img/spriteStandRight.png":
/*!**************************************!*\
  !*** ./src/img/spriteStandRight.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "01e8f15e899155c68950c40e0a6b8df0.png");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/canvas.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=canvas.bundle.js.map