/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
var canvas = document.getElementById('canvas');
canvas.width = innerWidth;
canvas.heigth = innerHeight;
var c = canvas.getContext('2d');
var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);
    this.position = {
      x: 100,
      y: 100
    };
    this.width = 100;
    this.heigth = 100;
  }
  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.fillRect(this.position.x, this.position.y, this.width, this.heigth);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
    }
  }]);
  return Player;
}();
var player = new Player();
player.update();
/******/ })()
;
//# sourceMappingURL=canvas.bundle.js.map