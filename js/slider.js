"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Slider =
/*#__PURE__*/
function () {
  function Slider(itemImg, itemBtn) {
    _classCallCheck(this, Slider);

    this.itemImg = document.querySelectorAll(itemImg);
    this.itemBtn = document.querySelectorAll(itemBtn);
    this.index = 0;
    this.activeImg = null;
    this.img = null;
  }

  _createClass(Slider, [{
    key: "inits",
    value: function inits(obj, style, index) {
      obj[index].className = style;
    }
  }, {
    key: "classActiveImg",
    value: function classActiveImg(activeImg) {
      this.activeImg = activeImg;
    }
  }, {
    key: "classImg",
    value: function classImg(img) {
      this.img = img;
    }
  }, {
    key: "nextBtn",
    value: function nextBtn(e, index, size) {
      if (e.dataset.target === "prev") {
        --index;
        if (index < 0) index = size - 1;
      } else if (e.dataset.target === "next") {
        ++index;
        if (index > size - 1) index = 0;
      } else {
        index = parseInt(e.dataset.target);
      }

      return index;
    }
  }, {
    key: "start",
    value: function start() {
      var inits = this.inits;
      var itemImg = this.itemImg;
      var itemBtn = this.itemBtn;
      var index = this.index;
      var nextBtn = this.nextBtn;
      var activeImg = this.activeImg;
      var img = this.img;

      for (var i = 0; i < this.itemBtn.length; i++) {
        this.itemBtn[i].addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
          inits(itemImg, img, index);
          index = nextBtn(this, index, itemImg.length);
          inits(itemImg, img + " " + activeImg, index);
        });
      }
    }
  }]);

  return Slider;
}();

var slider = new Slider(".sliderItem", ".btn");
slider.classImg("sliderItem");
slider.classActiveImg("sliderItem_active");
slider.start();