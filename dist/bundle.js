/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./pages/basket.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./pages/basket.css ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n.basket-header {\n  padding: 50px 10px 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  border-bottom: 1px solid #ddd; }\n\n.basket-main {\n  max-width: 1100px;\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto; }\n\n.basket-info {\n  margin: 40px auto; }\n\n.basket-goods-info {\n  display: flex;\n  flex-direction: column; }\n\n.basket-goods {\n  display: grid;\n  grid-template-columns: 100px 1fr;\n  /* flex-direction: row; */\n  justify-content: center;\n  width: 900px;\n  margin: 0 auto;\n  align-items: center;\n  border-bottom: 1px solid #ddd;\n  padding: 20px; }\n\n.basket-number {\n  display: flex;\n  /* justify-content: center; */ }\n\n.basket-number span {\n  padding: 5px 8px;\n  /* background-color: #ddd; */\n  border-radius: 5px;\n  border: 1px solid #ddd; }\n\n.basket-element {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between; }\n\n.basket-image img {\n  width: 100px; }\n\n.basket-title {\n  font-weight: 700; }\n\n.basket-counter {\n  display: flex;\n  flex-direction: row;\n  align-items: center; }\n\n.basket-counter__plus {\n  padding: 9px 15px;\n  background-color: #ddd;\n  border-radius: 10px 0 0 10px;\n  border: 1px solid #ddd;\n  cursor: pointer; }\n\n.basket-count {\n  padding: 9px 15px;\n  border: 1px solid #ddd; }\n\n.basket-counter__minus {\n  padding: 9px 15px;\n  background-color: #ddd;\n  border-radius: 0 10px 10px 0;\n  border: 1px solid #ddd;\n  cursor: pointer; }\n\n.basket-counter__minus:hover,\n.basket-counter__plus:hover {\n  background-color: #cccccc;\n  border: 1px solid #cccccc; }\n\n.basket-counter__minus:active,\n.basket-counter__plus:active {\n  background-color: #b4b4b4;\n  border: 1px solid #b4b4b4; }\n\n.basket-cost-info {\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n\n.basket-cost {\n  font-weight: 700; }\n\n.basket-stock {\n  color: #8d8d8d; }\n\n.backet-delete img {\n  scale: 0.5;\n  cursor: pointer; }\n\n.backet-delete img:hover {\n  transition: scale 0.4s;\n  scale: 0.6; }\n\n.promo-and-average-cost {\n  margin: 30px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between; }\n\n.promo-and-average-cost form {\n  display: flex;\n  align-items: center; }\n\n.promo-and-average-cost input[type=\"text\"] {\n  border: 1px solid #ddd;\n  padding: 5px 10px;\n  margin: 0 10px; }\n\n.promo-and-average-cost input[type=\"button\"] {\n  border: 1px solid #ddd;\n  padding: 5px 20px;\n  margin: 0 10px;\n  border-radius: 5px;\n  cursor: pointer; }\n\n.promo-and-average-cost input[type=\"button\"]:hover {\n  background-color: #dddddd; }\n\n.promo-and-average-cost input[type=\"button\"]:active {\n  background-color: #d1d1d1; }\n\n.basket-average-cost {\n  font-size: 20px;\n  font-weight: 700; }\n\n.basket-button {\n  display: flex;\n  justify-content: end; }\n\n.basket-but-continue {\n  padding: 10px 15px;\n  text-transform: uppercase;\n  color: #fff;\n  font-weight: 700;\n  font-size: 18px;\n  background-color: #49d455;\n  border-radius: 10px;\n  border: none;\n  cursor: pointer; }\n\n.basket-but-continue:hover {\n  background-color: #3bc046; }\n\n.basket-but-continue:active {\n  /* margin-top: -2px; */\n  background-color: #2fad3a; }\n\n/* модальное окно */\n.modal-dark-window {\n  z-index: 10;\n  background-color: rgba(88, 88, 88, 0.452);\n  display: flex;\n  margin: auto;\n  position: absolute;\n  width: 100%;\n  height: 100vh; }\n\n.modal-general-window {\n  display: flex;\n  /* justify-content: center; */\n  flex-direction: column;\n  /* align-items: center; */\n  padding: 30px 5%;\n  margin: auto;\n  width: 50%;\n  background-color: #fff;\n  border-radius: 20px; }\n\n.modal-title {\n  border-bottom: 1px solid #ddd;\n  padding-bottom: 5px;\n  margin-bottom: 30px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between; }\n\n.modal__title {\n  font-weight: 700;\n  font-size: 24px; }\n\n.modal-general-window form {\n  border-bottom: 1px solid #ddd;\n  margin-bottom: 20px; }\n\n.modal-general-window label {\n  display: flex;\n  flex-direction: column; }\n\n.modal-general-window span {\n  font-weight: 700;\n  font-size: 18px;\n  margin-bottom: 10px; }\n\n.modal-general-window input {\n  width: 40%;\n  height: 30px;\n  margin-bottom: 20px;\n  border: 1px solid #ddd;\n  border-radius: 10px; }\n\n.modal-window-card {\n  padding: 20px;\n  width: 50%;\n  background-color: #c6c4e783;\n  border-radius: 20px;\n  margin: 20px auto 30px; }\n\n.modal-card__code {\n  width: 100% !important; }\n\n.modal-button-submit {\n  padding: 15px 50px;\n  width: 100%;\n  border: none;\n  background-color: #49d455;\n  border-radius: 15px;\n  color: #fff;\n  font-weight: 700;\n  font-size: 16px;\n  margin: 0 auto; }\n", "",{"version":3,"sources":["webpack://./pages/basket.css"],"names":[],"mappings":"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","sourcesContent":[".basket-header {\r\n    padding: 50px 10px 10px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    border-bottom: 1px solid #ddd;\r\n}\r\n\r\n.basket-main {\r\n    max-width: 1100px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 0 auto;\r\n}\r\n\r\n.basket-info {\r\n    margin: 40px auto;\r\n}\r\n\r\n.basket-goods-info {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.basket-goods {\r\n    display: grid;\r\n    grid-template-columns: 100px 1fr;\r\n    /* flex-direction: row; */\r\n    justify-content: center;\r\n    width: 900px;\r\n    margin: 0 auto;\r\n    align-items: center;\r\n    border-bottom: 1px solid #ddd;\r\n    padding: 20px;\r\n}\r\n\r\n.basket-number {\r\n    display: flex;\r\n    /* justify-content: center; */\r\n}\r\n\r\n.basket-number span {\r\n    padding: 5px 8px;\r\n    /* background-color: #ddd; */\r\n    border-radius: 5px;\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n.basket-element {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n}\r\n\r\n.basket-image img{\r\n    width: 100px;\r\n}\r\n\r\n.basket-title {\r\n    font-weight: 700;\r\n}\r\n\r\n.basket-counter {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n}\r\n\r\n.basket-counter__plus {\r\n    padding: 9px 15px;\r\n    background-color: #ddd;\r\n    border-radius: 10px 0 0 10px;\r\n    border: 1px solid #ddd;\r\n    cursor: pointer;\r\n}\r\n\r\n.basket-count {\r\n    padding: 9px 15px;\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n.basket-counter__minus {\r\n    padding: 9px 15px;\r\n    background-color: #ddd;\r\n    border-radius: 0 10px 10px 0;\r\n    border: 1px solid #ddd;\r\n    cursor: pointer;\r\n}\r\n\r\n.basket-counter__minus:hover,\r\n.basket-counter__plus:hover{\r\n    background-color: #cccccc;\r\n    border: 1px solid #cccccc;\r\n}\r\n\r\n.basket-counter__minus:active,\r\n.basket-counter__plus:active{\r\n    background-color: #b4b4b4;\r\n    border: 1px solid #b4b4b4;\r\n}\r\n\r\n\r\n.basket-cost-info {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.basket-cost {\r\n    font-weight: 700;\r\n}\r\n\r\n.basket-stock {\r\n    color: rgb(141, 141, 141);\r\n}\r\n\r\n.backet-delete img {\r\n    scale: 0.5;\r\n    cursor: pointer;\r\n}\r\n\r\n.backet-delete img:hover {\r\n    transition: scale 0.4s;\r\n    scale: 0.6;\r\n}\r\n.promo-and-average-cost{\r\n    margin: 30px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n.promo-and-average-cost form{\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.promo-and-average-cost input[type=\"text\"]{\r\n    border: 1px solid #ddd;\r\n    padding: 5px 10px;\r\n    margin: 0 10px;\r\n}\r\n\r\n.promo-and-average-cost input[type=\"button\"]{\r\n    border: 1px solid #ddd;\r\n    padding: 5px 20px;\r\n    margin: 0 10px;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n.promo-and-average-cost input[type=\"button\"]:hover{\r\n    background-color: #dddddd;\r\n}\r\n\r\n.promo-and-average-cost input[type=\"button\"]:active{\r\n    background-color: rgb(209, 209, 209);\r\n}\r\n\r\n.basket-average-cost{\r\n    font-size: 20px;\r\n    font-weight: 700;\r\n}\r\n\r\n.basket-button {\r\n    display: flex;\r\n    justify-content: end;\r\n}\r\n\r\n.basket-but-continue {\r\n    padding: 10px 15px;\r\n    text-transform: uppercase;\r\n    color: #fff;\r\n    font-weight: 700;\r\n    font-size: 18px;\r\n    background-color: #49d455;\r\n    border-radius: 10px;\r\n    border: none;\r\n    cursor:pointer;\r\n}\r\n\r\n.basket-but-continue:hover {\r\n    background-color: #3bc046;\r\n}\r\n\r\n.basket-but-continue:active{\r\n    /* margin-top: -2px; */\r\n    background-color: #2fad3a;\r\n}\r\n\r\n/* модальное окно */\r\n\r\n.modal-dark-window{\r\n    z-index: 10;\r\n    background-color: rgba(88, 88, 88, 0.452);\r\n    display: flex;\r\n    margin: auto;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100vh; \r\n}\r\n\r\n.modal-general-window{\r\n    display: flex;\r\n    /* justify-content: center; */\r\n    flex-direction: column;\r\n    /* align-items: center; */\r\n    padding: 30px 5%;\r\n    margin: auto;\r\n    width: 50%;\r\n    background-color: #fff;\r\n    border-radius: 20px;\r\n}\r\n\r\n.modal-title{\r\n    border-bottom: 1px solid #ddd;\r\n    padding-bottom: 5px;\r\n    margin-bottom: 30px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n}\r\n\r\n.modal__title{\r\n    font-weight: 700;\r\n    font-size: 24px;\r\n}\r\n\r\n.modal-general-window form{\r\n    border-bottom: 1px solid #ddd;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.modal-general-window label{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.modal-general-window span{\r\n    font-weight: 700;\r\n    font-size: 18px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.modal-general-window input{\r\n    width: 40%;\r\n    height: 30px;\r\n    margin-bottom: 20px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 10px;\r\n}\r\n\r\n.modal-window-card{\r\n    padding: 20px;\r\n    width: 50%;\r\n    background-color: #c6c4e783;\r\n    border-radius: 20px;\r\n    margin: 20px auto 30px;\r\n}\r\n\r\n.modal-card__code{\r\n    width: 100% !important;\r\n}\r\n\r\n.modal-button-submit{\r\n    padding: 15px 50px;\r\n    width: 100%;\r\n    border: none;\r\n    background-color: #49d455;\r\n    border-radius: 15px;\r\n    color: #fff;\r\n    font-weight: 700;\r\n    font-size: 16px;\r\n    margin: 0 auto;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./pages/main.css":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./pages/main.css ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0; }\n\n:root {\n  --main-violet-color: #5350d8; }\n\n.main {\n  overflow: hidden; }\n\nbody {\n  font-family: 'Play', sans-serif;\n  font-weight: 400; }\n\n.wrapper {\n  display: grid;\n  grid-template-columns: 350px 1fr; }\n\n.header {\n  display: flex;\n  flex-direction: column;\n  background-color: #fff;\n  height: 100%;\n  padding: 50px 60px;\n  border-right: 3px solid var(--main-violet-color); }\n\n.logo {\n  margin-bottom: 60px; }\n\n.logo img {\n  width: 180px; }\n\n.nav-list,\n.search-nav-list {\n  list-style-type: none; }\n\n.navbar {\n  margin-bottom: 40px; }\n\nnav a {\n  text-decoration: none;\n  color: #000;\n  align-items: center;\n  display: flex; }\n\n.nav-list__item {\n  display: flex;\n  align-items: center; }\n\n.nav-list li {\n  margin-bottom: 20px;\n  font-size: 1em; }\n\n.nav-list__title {\n  margin-bottom: 30px; }\n\n.nav-list__image {\n  width: 30px;\n  height: auto;\n  margin-right: 10px; }\n\n.basket-info div {\n  font-weight: 400;\n  font-size: 16px;\n  color: #494949;\n  text-align: end; }\n\n.filter-title {\n  margin-bottom: 30px; }\n\n.filter-section {\n  margin-bottom: 15px; }\n\n.filter__titles {\n  font-weight: 700;\n  margin-bottom: 10px; }\n\n.filter-cost-t-input {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-bottom: 10px; }\n\n.filter-cost-t-input input {\n  width: 100px;\n  height: 25px;\n  border: 1px solid #5350d8;\n  border-radius: 5px;\n  background-color: transparent; }\n\n.filter-cost-r-input {\n  position: relative;\n  width: 100%;\n  height: 100px;\n  margin-top: 30px; }\n\n.filter input[type=\"range\"] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  width: 100%;\n  outline: none;\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  background-color: transparent;\n  pointer-events: none; }\n\n.slider-track {\n  width: 100%;\n  height: 5px;\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  border-radius: 5px; }\n\n.filter input[type=\"range\"]::-webkit-slider-runnable-track {\n  -webkit-appearance: none;\n  height: 5px; }\n\n.filter input[type=\"range\"]::-moz-range-track {\n  -moz-appearance: none;\n  height: 5px; }\n\n.filter input[type=\"range\"]::-ms-track {\n  appearance: none;\n  height: 5px; }\n\n.filter input[type=\"range\"]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  height: 1.7em;\n  width: 1.7em;\n  background-color: #5350d8;\n  cursor: pointer;\n  margin-top: -9px;\n  pointer-events: auto;\n  border-radius: 50%; }\n\n.filter input[type=\"range\"]::-moz-range-thumb {\n  -webkit-appearance: none;\n  height: 1.7em;\n  width: 1.7em;\n  cursor: pointer;\n  border-radius: 50%;\n  background-color: #5350d8;\n  pointer-events: auto; }\n\n.filter input[type=\"range\"]::-ms-thumb {\n  appearance: none;\n  height: 1.7em;\n  width: 1.7em;\n  cursor: pointer;\n  border-radius: 50%;\n  background-color: #5350d8;\n  pointer-events: auto; }\n\n.filter input[type=\"range\"]:active::-webkit-slider-thumb {\n  background-color: #ffffff;\n  border: 3px solid #5350d8; }\n\n.values {\n  background-color: #5350d8;\n  width: 32%;\n  position: relative;\n  margin: auto;\n  padding: 10px 20px;\n  border-radius: 5px;\n  text-align: center;\n  font-weight: 500;\n  font-size: 25px;\n  color: #ffffff; }\n\n.values:before {\n  content: \"\";\n  position: absolute;\n  height: 0;\n  width: 0;\n  border-top: 15px solid #5350d8;\n  border-left: 15px solid transparent;\n  border-right: 15px solid transparent;\n  margin: auto;\n  bottom: -14px;\n  left: 0;\n  right: 0; }\n\n/* .filter-cost-r-input input {\r\n    width: 100%;\r\n}\r\n\r\n.filter .filter-cost {\r\n    position: relative;\r\n    width: 250px;\r\n    height: 10vh;\r\n}\r\n\r\n.filter .filter-cost-r-input input[type=range] {\r\n    pointer-events: none;\r\n    position: absolute;\r\n    -webkit-appearance: none;\r\n    border: none;\r\n    border-radius: 14px;\r\n    box-shadow: inset 0 1px 0 0 #bbbbbb, inset 0 -1px 0 0 #bbbbbb;\r\n    -webkit-box-shadow: inset 0 1px 0 0 #bbbbbb, inset 0 -1px 0 0 #bbbbbb;\r\n    overflow: hidden;\r\n    left: 0;\r\n    top: 70px;\r\n    width: 250px;\r\n    outline: none;\r\n    height: 20px;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.filter .filter-cost-r-input input[type=range]::-webkit-slider-thumb {\r\n    pointer-events: all;\r\n    position: relative;\r\n    z-index: 1;\r\n    outline: 0;\r\n    -webkit-appearance: none;\r\n    width: 20px;\r\n    height: 20px;\r\n    border: none;\r\n    border-radius: 14px;\r\n    background-color: #5350d8;\r\n}\r\n\r\n.filter.filter-cost-r-input input[type=range]::-moz-range-thumb {\r\n    pointer-events: all;\r\n    position: relative;\r\n    z-index: 10;\r\n    -moz-appearance: none;\r\n    width: 20px;\r\n    height: 20px;\r\n    border: none;\r\n    border-radius: 14px;\r\n    background-color: #5350d8;\r\n}\r\n\r\n.filter .filter-cost-r-input input[type=range]::-ms-thumb {\r\n    pointer-events: all;\r\n    position: relative;\r\n    z-index: 10;\r\n    -ms-appearance: none;\r\n    width: 20px;\r\n    height: 20px;\r\n    border-radius: 14px;\r\n    border: 0;\r\n}\r\n\r\n.filter .filter-cost-r-input input[type=range]::-moz-range-track {\r\n    position: relative;\r\n    z-index: -1;\r\n    background-color: black;\r\n    border: 0;\r\n}\r\n\r\n.filter .filter-cost-r-input input[type=range]:last-of-type::-moz-range-track {\r\n    -moz-appearance: none;\r\n    background: none;\r\n    border: 0;\r\n}\r\n\r\n.filter .filter-cost-r-input input[type=range]::-moz-focus-outer {\r\n    border: 0;\r\n} */\n.filter-brand {\n  display: flex;\n  flex-direction: column; }\n\n.filter-brand label {\n  margin-bottom: 5px; }\n\n.main {\n  /* background-color: rgb(233, 233, 233); */\n  height: 100%;\n  padding: 0 50px; }\n\n.search {\n  padding: 50px 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  /* border-bottom: 1 px solid #5350d8;\r\n    margin-bottom: 40px; */ }\n\n.search-label {\n  display: flex;\n  align-items: center; }\n\n.search-input {\n  height: 60px;\n  width: 35vh;\n  border: none;\n  background-color: rgba(211, 211, 211, 0.582);\n  border-radius: 5vh;\n  /* padding-right: 30vh; */\n  margin-right: 10px;\n  font-size: 14px;\n  padding: 0 20px; }\n\n.search__image {\n  width: 32px;\n  height: 32px;\n  background-color: #35c942;\n  padding: 10px;\n  border-radius: 50% 50% 10%; }\n\n.search-nav {\n  display: flex;\n  align-items: center; }\n\n.search-nav-list {\n  display: flex;\n  flex-direction: row; }\n\n.search-nav-list li {\n  margin: auto 20px;\n  font-weight: 700;\n  font-size: 20px; }\n\n.goods__image {\n  width: 80%; }\n\n.main-topic {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr); }\n\n.goods-section {\n  border: solid 1px #ddd;\n  border-radius: 5px;\n  margin: 0 20px 20px; }\n\n.goods-section:hover {\n  box-shadow: 0 -2px 4px 0 #231f200d, 0 4px 8px 0 #231f201a;\n  scale: 1.008;\n  transition: all 0.3s; }\n\n.goods-section__image {\n  overflow: hidden;\n  /* width: auto; */\n  min-height: 300px;\n  max-height: 300px;\n  padding: 10%;\n  border-radius: 5px 5px 0 0;\n  z-index: 5;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.goods-section__title {\n  display: grid;\n  grid-template-columns: 1fr 1px;\n  /* width: 100%; */ }\n\n.goods-information {\n  margin: 0 20px 20px; }\n\n.goods__title {\n  font-weight: 700;\n  text-transform: uppercase;\n  font-size: 18px; }\n\n.goods-icon__basket {\n  position: relative; }\n\n.goods__basket {\n  display: inline-block;\n  position: absolute;\n  right: -25px;\n  bottom: -15px;\n  background-color: #35c942;\n  padding: 10px;\n  border-radius: 10% 50% 50%; }\n\n.goods__basket:hover,\n.search__image:hover {\n  background-color: #3bc046;\n  cursor: pointer; }\n\n.goods__basket:active,\n.search__image:active {\n  background-color: #2fad3a;\n  cursor: progress; }\n\n.label-apple {\n  display: flex;\n  align-items: center; }\n\n.checkbox {\n  margin-right: 5px;\n  width: 20px;\n  height: 20px; }\n\n.range-1 {\n  position: absolute;\n  appearance: none;\n  width: 96%;\n  margin: 2%;\n  overflow: hidden;\n  outline: none;\n  background-size: 100% 2px;\n  pointer-events: none; }\n\n.range-2 {\n  appearance: none;\n  width: 96%;\n  margin: 2%;\n  overflow: hidden;\n  outline: none;\n  background: linear-gradient(#5350d8, #5350d8) no-repeat center;\n  background-size: 100% 2px;\n  pointer-events: none;\n  position: absolute; }\n\n.multi-range {\n  position: relative;\n  height: 2rem; }\n\n@media (max-width: 1500px) {\n  .main-topic {\n    grid-template-columns: repeat(2, 1fr); }\n  .goods__basket {\n    width: 40px; }\n  .goods-section__image {\n    min-height: 300px;\n    padding: 0; }\n  .search {\n    flex-direction: column-reverse;\n    align-items: center; }\n  .search-nav {\n    margin-bottom: 20px; } }\n\n@media (max-width: 1100px) {\n  .main-topic {\n    grid-template-columns: repeat(1, 1fr); }\n  .search-nav-list {\n    flex-wrap: wrap;\n    justify-content: center; } }\n\n@media (max-width: 800px) {\n  .wrapper {\n    display: flex;\n    flex-direction: column; }\n  .header {\n    padding: 50px 10px 10px;\n    background-color: white;\n    border: none; }\n  .main {\n    padding: 0 10px; }\n  .goods-and-filters {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    flex-wrap: wrap; }\n  .logo {\n    display: flex;\n    justify-content: center; }\n  .search-input {\n    margin-right: 10px;\n    width: 100%; } }\n\n@media (max-width: 420px) {\n  .goods-and-filters {\n    justify-content: left;\n    margin-left: 30px; } }\n", "",{"version":3,"sources":["webpack://./pages/main.css"],"names":[],"mappings":"AAAA;EACI,SAAS;EACT,UAAU,EAAA;;AAGd;EACI,4BAAoB,EAAA;;AAGxB;EACI,gBAAgB,EAAA;;AAGpB;EACI,+BAA+B;EAC/B,gBAAgB,EAAA;;AAGpB;EACI,aAAa;EACb,gCAAgC,EAAA;;AAGpC;EACI,aAAa;EACb,sBAAsB;EACtB,sBAAsB;EACtB,YAAY;EACZ,kBAAkB;EAClB,gDAAgD,EAAA;;AAGpD;EACI,mBAAmB,EAAA;;AAGvB;EACI,YAAY,EAAA;;AAGhB;;EAEI,qBAAqB,EAAA;;AAGzB;EACI,mBAAmB,EAAA;;AAGvB;EACI,qBAAqB;EACrB,WAAW;EACX,mBAAmB;EACnB,aAAa,EAAA;;AAGjB;EACI,aAAa;EACb,mBAAmB,EAAA;;AAGvB;EACI,mBAAmB;EACnB,cAAc,EAAA;;AAGlB;EACI,mBAAmB,EAAA;;AAGvB;EACI,WAAW;EACX,YAAY;EACZ,kBAAkB,EAAA;;AAGtB;EACI,gBAAgB;EAChB,eAAe;EACf,cAAsB;EACtB,eAAe,EAAA;;AAGnB;EACI,mBAAmB,EAAA;;AAGvB;EACI,mBAAmB,EAAA;;AAGvB;EACI,gBAAgB;EAChB,mBAAmB,EAAA;;AAGvB;EACI,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,mBAAmB,EAAA;;AAGvB;EACI,YAAY;EACZ,YAAY;EACZ,yBAAyB;EACzB,kBAAkB;EAClB,6BAA6B,EAAA;;AAGjC;EACI,kBAAkB;EAClB,WAAW;EACX,aAAa;EACb,gBAAgB,EAAA;;AAGpB;EACI,wBAAwB;EACxB,qBAAqB;EACrB,gBAAgB;EAChB,WAAW;EACX,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,MAAM;EACN,SAAS;EACT,6BAA6B;EAC7B,oBAAoB,EAAA;;AAGxB;EACI,WAAW;EACX,WAAW;EACX,kBAAkB;EAClB,YAAY;EACZ,MAAM;EACN,SAAS;EACT,kBAAkB,EAAA;;AAGtB;EACI,wBAAwB;EACxB,WAAW,EAAA;;AAEf;EACI,qBAAqB;EACrB,WAAW,EAAA;;AAEf;EACI,gBAAgB;EAChB,WAAW,EAAA;;AAEf;EACI,wBAAwB;EACxB,aAAa;EACb,YAAY;EACZ,yBAAyB;EACzB,eAAe;EACf,gBAAgB;EAChB,oBAAoB;EACpB,kBAAkB,EAAA;;AAEtB;EACI,wBAAwB;EACxB,aAAa;EACb,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,yBAAyB;EACzB,oBAAoB,EAAA;;AAExB;EACI,gBAAgB;EAChB,aAAa;EACb,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,yBAAyB;EACzB,oBAAoB,EAAA;;AAExB;EACI,yBAAyB;EACzB,yBAAyB,EAAA;;AAG7B;EACI,yBAAyB;EACzB,UAAU;EACV,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,cAAc,EAAA;;AAElB;EACI,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,8BAA8B;EAC9B,mCAAmC;EACnC,oCAAoC;EACpC,YAAY;EACZ,aAAa;EACb,OAAO;EACP,QAAQ,EAAA;;AAGZ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GAqDG;AA4BH;EACI,aAAa;EACb,sBAAsB,EAAA;;AAG1B;EACI,kBAAkB,EAAA;;AAItB;EACI,0CAAA;EACA,YAAY;EACZ,eAAe,EAAA;;AAInB;EACI,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B;0BA/BsB,EAgCC;;AAG3B;EACI,aAAa;EACb,mBAAmB,EAAA;;AAGvB;EACI,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,4CAA4C;EAC5C,kBAAkB;EAClB,yBAAA;EACA,kBAAkB;EAClB,eAAe;EACf,eAAe,EAAA;;AAGnB;EACI,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,aAAa;EACb,0BAA0B,EAAA;;AAG9B;EACI,aAAa;EACb,mBAAmB,EAAA;;AAIvB;EACI,aAAa;EACb,mBAAmB,EAAA;;AAGvB;EACI,iBAAiB;EACjB,gBAAgB;EAChB,eAAe,EAAA;;AAGnB;EACI,UAAU,EAAA;;AAGd;EACI,aAAa;EACb,qCAAqC,EAAA;;AAIzC;EACI,sBAAsB;EACtB,kBAAkB;EAClB,mBAAmB,EAAA;;AAGvB;EACI,yDAAyD;EACzD,YAAY;EACZ,oBAAoB,EAAA;;AAGxB;EACI,gBAAgB;EAChB,iBAAA;EACA,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;EACZ,0BAA0B;EAC1B,UAAU;EACV,aAAa;EACb,uBAAuB;EACvB,mBAAmB,EAAA;;AAGvB;EACI,aAAa;EACb,8BAA8B;EAC9B,iBAAA,EAAkB;;AAGtB;EACI,mBAAmB,EAAA;;AAGvB;EACI,gBAAgB;EAChB,yBAAyB;EACzB,eAAe,EAAA;;AAGnB;EACI,kBAAkB,EAAA;;AAGtB;EACI,qBAAqB;EACrB,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,aAAa;EACb,0BAA0B,EAAA;;AAG9B;;EAEI,yBAAyB;EACzB,eAAe,EAAA;;AAGnB;;EAEI,yBAAyB;EACzB,gBAAe,EAAA;;AAGnB;EACI,aAAa;EACb,mBAAmB,EAAA;;AAGvB;EACI,iBAAiB;EACjB,WAAW;EACX,YAAY,EAAA;;AAGhB;EACI,kBAAkB;EAElB,gBAAgB;EAChB,UAAU;EACV,UAAU;EACV,gBAAgB;EAChB,aAAa;EACb,yBAAyB;EACzB,oBAAoB,EAAA;;AAGxB;EACI,gBAAgB;EAChB,UAAU;EACV,UAAU;EACV,gBAAgB;EAChB,aAAa;EACb,8DAA6D;EAC7D,yBAAyB;EACzB,oBAAoB;EACpB,kBAAkB,EAAA;;AAEtB;EACI,kBAAkB;EAClB,YAAY,EAAA;;AAGhB;EACI;IACI,qCAAqC,EAAA;EAEzC;IACI,WAAW,EAAA;EAEf;IACI,iBAAiB;IACjB,UAAU,EAAA;EAEd;IACI,8BAA8B;IAC9B,mBAAmB,EAAA;EAEvB;IACI,mBAAmB,EAAA,EACtB;;AAEL;EACI;IACI,qCAAqC,EAAA;EAEzC;IACI,eAAe;IACf,uBAAuB,EAAA,EAC1B;;AAGL;EACI;IACI,aAAa;IACb,sBAAsB,EAAA;EAE1B;IACI,uBAAuB;IACvB,uBAAuB;IACvB,YAAY,EAAA;EAEhB;IACI,eAAe,EAAA;EAEnB;IACI,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,eAAe,EAAA;EAEnB;IACI,aAAa;IACb,uBAAuB,EAAA;EAE3B;IACI,kBAAkB;IAClB,WAAW,EAAA,EACd;;AAEL;EACI;IACI,qBAAqB;IACrB,iBAAiB,EAAA,EACpB","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n:root {\r\n    --main-violet-color: #5350d8;\r\n}\r\n\r\n.main{\r\n    overflow: hidden;\r\n}\r\n\r\nbody {\r\n    font-family: 'Play', sans-serif;\r\n    font-weight: 400;\r\n}\r\n\r\n.wrapper {\r\n    display: grid;\r\n    grid-template-columns: 350px 1fr;\r\n}\r\n\r\n.header {\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: #fff;\r\n    height: 100%;\r\n    padding: 50px 60px;\r\n    border-right: 3px solid var(--main-violet-color);\r\n}\r\n\r\n.logo {\r\n    margin-bottom: 60px;\r\n}\r\n\r\n.logo img{\r\n    width: 180px;\r\n}\r\n\r\n.nav-list,\r\n.search-nav-list {\r\n    list-style-type: none;\r\n}\r\n\r\n.navbar {\r\n    margin-bottom: 40px;\r\n}\r\n\r\nnav a {\r\n    text-decoration: none;\r\n    color: #000;\r\n    align-items: center;\r\n    display: flex;\r\n}\r\n\r\n.nav-list__item{\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.nav-list li {\r\n    margin-bottom: 20px;\r\n    font-size: 1em;\r\n}\r\n\r\n.nav-list__title {\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.nav-list__image {\r\n    width: 30px;\r\n    height: auto;\r\n    margin-right: 10px;\r\n}\r\n\r\n.basket-info div{\r\n    font-weight: 400;\r\n    font-size: 16px;\r\n    color: rgb(73, 73, 73);\r\n    text-align: end;\r\n}\r\n\r\n.filter-title {\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.filter-section {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.filter__titles {\r\n    font-weight: 700;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.filter-cost-t-input {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.filter-cost-t-input input {\r\n    width: 100px;\r\n    height: 25px;\r\n    border: 1px solid #5350d8;\r\n    border-radius: 5px;\r\n    background-color: transparent;\r\n}\r\n\r\n.filter-cost-r-input{\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100px;\r\n    margin-top: 30px;\r\n}\r\n\r\n.filter input[type=\"range\"]{\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n    width: 100%;\r\n    outline: none;\r\n    position: absolute;\r\n    margin: auto;\r\n    top: 0;\r\n    bottom: 0;\r\n    background-color: transparent;\r\n    pointer-events: none;\r\n}\r\n\r\n.slider-track{\r\n    width: 100%;\r\n    height: 5px;\r\n    position: absolute;\r\n    margin: auto;\r\n    top: 0;\r\n    bottom: 0;\r\n    border-radius: 5px;\r\n}\r\n\r\n.filter input[type=\"range\"]::-webkit-slider-runnable-track{\r\n    -webkit-appearance: none;\r\n    height: 5px;\r\n}\r\n.filter input[type=\"range\"]::-moz-range-track{\r\n    -moz-appearance: none;\r\n    height: 5px;\r\n}\r\n.filter input[type=\"range\"]::-ms-track{\r\n    appearance: none;\r\n    height: 5px;\r\n}\r\n.filter input[type=\"range\"]::-webkit-slider-thumb{\r\n    -webkit-appearance: none;\r\n    height: 1.7em;\r\n    width: 1.7em;\r\n    background-color: #5350d8;\r\n    cursor: pointer;\r\n    margin-top: -9px;\r\n    pointer-events: auto;\r\n    border-radius: 50%;\r\n}\r\n.filter input[type=\"range\"]::-moz-range-thumb{\r\n    -webkit-appearance: none;\r\n    height: 1.7em;\r\n    width: 1.7em;\r\n    cursor: pointer;\r\n    border-radius: 50%;\r\n    background-color: #5350d8;\r\n    pointer-events: auto;\r\n}\r\n.filter input[type=\"range\"]::-ms-thumb{\r\n    appearance: none;\r\n    height: 1.7em;\r\n    width: 1.7em;\r\n    cursor: pointer;\r\n    border-radius: 50%;\r\n    background-color: #5350d8;\r\n    pointer-events: auto;\r\n}\r\n.filter input[type=\"range\"]:active::-webkit-slider-thumb{\r\n    background-color: #ffffff;\r\n    border: 3px solid #5350d8;\r\n}\r\n\r\n.values{\r\n    background-color: #5350d8;\r\n    width: 32%;\r\n    position: relative;\r\n    margin: auto;\r\n    padding: 10px 20px;\r\n    border-radius: 5px;\r\n    text-align: center;\r\n    font-weight: 500;\r\n    font-size: 25px;\r\n    color: #ffffff;\r\n}\r\n.values:before{\r\n    content: \"\";\r\n    position: absolute;\r\n    height: 0;\r\n    width: 0;\r\n    border-top: 15px solid #5350d8;\r\n    border-left: 15px solid transparent;\r\n    border-right: 15px solid transparent;\r\n    margin: auto;\r\n    bottom: -14px;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n/* .filter-cost-r-input input {\r\n    width: 100%;\r\n}\r\n\r\n.filter .filter-cost {\r\n    position: relative;\r\n    width: 250px;\r\n    height: 10vh;\r\n}\r\n\r\n.filter .filter-cost-r-input input[type=range] {\r\n    pointer-events: none;\r\n    position: absolute;\r\n    -webkit-appearance: none;\r\n    border: none;\r\n    border-radius: 14px;\r\n    box-shadow: inset 0 1px 0 0 #bbbbbb, inset 0 -1px 0 0 #bbbbbb;\r\n    -webkit-box-shadow: inset 0 1px 0 0 #bbbbbb, inset 0 -1px 0 0 #bbbbbb;\r\n    overflow: hidden;\r\n    left: 0;\r\n    top: 70px;\r\n    width: 250px;\r\n    outline: none;\r\n    height: 20px;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.filter .filter-cost-r-input input[type=range]::-webkit-slider-thumb {\r\n    pointer-events: all;\r\n    position: relative;\r\n    z-index: 1;\r\n    outline: 0;\r\n    -webkit-appearance: none;\r\n    width: 20px;\r\n    height: 20px;\r\n    border: none;\r\n    border-radius: 14px;\r\n    background-color: #5350d8;\r\n}\r\n\r\n.filter.filter-cost-r-input input[type=range]::-moz-range-thumb {\r\n    pointer-events: all;\r\n    position: relative;\r\n    z-index: 10;\r\n    -moz-appearance: none;\r\n    width: 20px;\r\n    height: 20px;\r\n    border: none;\r\n    border-radius: 14px;\r\n    background-color: #5350d8;\r\n}\r\n\r\n.filter .filter-cost-r-input input[type=range]::-ms-thumb {\r\n    pointer-events: all;\r\n    position: relative;\r\n    z-index: 10;\r\n    -ms-appearance: none;\r\n    width: 20px;\r\n    height: 20px;\r\n    border-radius: 14px;\r\n    border: 0;\r\n}\r\n\r\n.filter .filter-cost-r-input input[type=range]::-moz-range-track {\r\n    position: relative;\r\n    z-index: -1;\r\n    background-color: black;\r\n    border: 0;\r\n}\r\n\r\n.filter .filter-cost-r-input input[type=range]:last-of-type::-moz-range-track {\r\n    -moz-appearance: none;\r\n    background: none;\r\n    border: 0;\r\n}\r\n\r\n.filter .filter-cost-r-input input[type=range]::-moz-focus-outer {\r\n    border: 0;\r\n} */\r\n\r\n.filter-brand{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.filter-brand label{\r\n    margin-bottom: 5px;\r\n    \r\n}\r\n\r\n.main {\r\n    /* background-color: rgb(233, 233, 233); */\r\n    height: 100%;\r\n    padding: 0 50px;\r\n\r\n}\r\n\r\n.search {\r\n    padding: 50px 10px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    /* border-bottom: 1 px solid #5350d8;\r\n    margin-bottom: 40px; */\r\n}\r\n\r\n.search-label {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.search-input {\r\n    height: 60px;\r\n    width: 35vh;\r\n    border: none;\r\n    background-color: rgba(211, 211, 211, 0.582);\r\n    border-radius: 5vh;\r\n    /* padding-right: 30vh; */\r\n    margin-right: 10px;\r\n    font-size: 14px;\r\n    padding: 0 20px;\r\n}\r\n\r\n.search__image {\r\n    width: 32px;\r\n    height: 32px;\r\n    background-color: #35c942;\r\n    padding: 10px;\r\n    border-radius: 50% 50% 10%;\r\n}\r\n\r\n.search-nav {\r\n    display: flex;\r\n    align-items: center;\r\n\r\n}\r\n\r\n.search-nav-list {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.search-nav-list li {\r\n    margin: auto 20px;\r\n    font-weight: 700;\r\n    font-size: 20px;\r\n}\r\n\r\n.goods__image {\r\n    width: 80%;\r\n}\r\n\r\n.main-topic {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n}\r\n\r\n\r\n.goods-section {\r\n    border: solid 1px #ddd;\r\n    border-radius: 5px;\r\n    margin: 0 20px 20px;\r\n}\r\n\r\n.goods-section:hover{\r\n    box-shadow: 0 -2px 4px 0 #231f200d, 0 4px 8px 0 #231f201a;\r\n    scale: 1.008;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.goods-section__image {\r\n    overflow: hidden;\r\n    /* width: auto; */\r\n    min-height: 300px;\r\n    max-height: 300px;\r\n    padding: 10%;\r\n    border-radius: 5px 5px 0 0;\r\n    z-index: 5;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.goods-section__title {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1px;\r\n    /* width: 100%; */\r\n}\r\n\r\n.goods-information {\r\n    margin: 0 20px 20px;\r\n}\r\n\r\n.goods__title {\r\n    font-weight: 700;\r\n    text-transform: uppercase;\r\n    font-size: 18px;\r\n}\r\n\r\n.goods-icon__basket {\r\n    position: relative;\r\n}\r\n\r\n.goods__basket {\r\n    display: inline-block;\r\n    position: absolute;\r\n    right: -25px;\r\n    bottom: -15px;\r\n    background-color: #35c942;\r\n    padding: 10px;\r\n    border-radius: 10% 50% 50%;\r\n}\r\n\r\n.goods__basket:hover,\r\n.search__image:hover{\r\n    background-color: #3bc046;\r\n    cursor: pointer;\r\n}\r\n\r\n.goods__basket:active,\r\n.search__image:active{\r\n    background-color: #2fad3a;\r\n    cursor:progress;\r\n}\r\n\r\n.label-apple{\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.checkbox{\r\n    margin-right: 5px;\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\n\r\n.range-1 {\r\n    position: absolute;\r\n\r\n    appearance: none;\r\n    width: 96%;\r\n    margin: 2%;\r\n    overflow: hidden;\r\n    outline: none;\r\n    background-size: 100% 2px;\r\n    pointer-events: none;\r\n}\r\n\r\n.range-2 {\r\n    appearance: none;\r\n    width: 96%;\r\n    margin: 2%;\r\n    overflow: hidden;\r\n    outline: none;\r\n    background: linear-gradient(#5350d8,#5350d8) no-repeat center;\r\n    background-size: 100% 2px;\r\n    pointer-events: none;\r\n    position: absolute;\r\n}\r\n.multi-range {\r\n    position: relative;\r\n    height: 2rem;\r\n}\r\n\r\n@media(max-width:1500px){\r\n    .main-topic {\r\n        grid-template-columns: repeat(2, 1fr);\r\n    }\r\n    .goods__basket {\r\n        width: 40px;\r\n    }\r\n    .goods-section__image {\r\n        min-height: 300px;\r\n        padding: 0;\r\n    }\r\n    .search{\r\n        flex-direction: column-reverse;\r\n        align-items: center;\r\n    }\r\n    .search-nav{\r\n        margin-bottom: 20px;\r\n    }\r\n}\r\n@media(max-width:1100px){\r\n    .main-topic {\r\n        grid-template-columns: repeat(1, 1fr);\r\n    }\r\n    .search-nav-list{\r\n        flex-wrap: wrap;\r\n        justify-content: center;\r\n    }\r\n}\r\n\r\n@media(max-width:800px){\r\n    .wrapper{\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n    .header{\r\n        padding: 50px 10px 10px;\r\n        background-color: white;\r\n        border: none;\r\n    }\r\n    .main{\r\n        padding: 0 10px;\r\n    }\r\n    .goods-and-filters{\r\n        display: flex;\r\n        flex-direction: row;\r\n        justify-content: space-around;\r\n        flex-wrap: wrap;\r\n    }\r\n    .logo{\r\n        display: flex;\r\n        justify-content: center;\r\n    }\r\n    .search-input {\r\n        margin-right: 10px;\r\n        width: 100%;\r\n    }\r\n}\r\n@media(max-width:420px){\r\n    .goods-and-filters{\r\n        justify-content: left;\r\n        margin-left: 30px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./pages/media.css":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./pages/media.css ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".logo__title {\n  color: brown; }\n", "",{"version":3,"sources":["webpack://./pages/media.css"],"names":[],"mappings":"AAAA;EACI,YAAY,EAAA","sourcesContent":[".logo__title {\r\n    color: brown;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./pages/basket.css":
/*!**************************!*\
  !*** ./pages/basket.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_basket_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./basket.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./pages/basket.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_basket_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_basket_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_basket_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_basket_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./pages/main.css":
/*!************************!*\
  !*** ./pages/main.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./pages/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./pages/media.css":
/*!*************************!*\
  !*** ./pages/media.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_media_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./media.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./pages/media.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_media_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_media_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_media_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_media_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./pages/test.js":
/*!***********************!*\
  !*** ./pages/test.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "test": () => (/* binding */ test)
/* harmony export */ });
let test = 'test'


/***/ }),

/***/ "./pages/products.json":
/*!*****************************!*\
  !*** ./pages/products.json ***!
  \*****************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"title":"iPhone 14 PRO","description":"Apple iOS, экран 6.1 OLED (1179x2556) 120 Гц, Apple A16 Bionic, ОЗУ 6 ГБ, память 128 ГБ, камера 48 Мп, 1 SIM, влагозащита IP68","price":3725,"discountPercentage":12.96,"rating":4.69,"stock":94,"brand":"Apple","category":"Телефон","thumbnail":"https://i.dummyjson.com/data/products/1/thumbnail.jpg","images":["https://content2.onliner.by/catalog/device/main/ed7ac8318a33dee07aecbc52d11888b7.jpeg","https://content2.onliner.by/catalog/device/main/c39679a7684f2107c5ce1bcb71eaf4b4.jpeg","https://content2.onliner.by/catalog/device/main/236574722d8da57c4d6b288b424c0a2c.jpeg"]},{"id":2,"title":"iPhone X","description":"SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...","price":899,"discountPercentage":17.94,"rating":4.44,"stock":34,"brand":"Apple","category":"Телефон","thumbnail":"https://i.dummyjson.com/data/products/2/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/2/1.jpg","https://i.dummyjson.com/data/products/2/2.jpg","https://i.dummyjson.com/data/products/2/3.jpg","https://i.dummyjson.com/data/products/2/thumbnail.jpg"]},{"id":3,"title":"Samsung Universe 9","description":"Samsung\'s new variant which goes beyond Galaxy to the Universe","price":1249,"discountPercentage":15.46,"rating":4.09,"stock":36,"brand":"Samsung","category":"Телефон","thumbnail":"https://i.dummyjson.com/data/products/3/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/3/1.jpg"]},{"id":4,"title":"OPPOF19","description":"OPPO F19 is officially announced on April 2021.","price":280,"discountPercentage":399,"rating":4.3,"stock":123,"brand":"OPPO","category":"Телефон","thumbnail":"https://i.dummyjson.com/data/products/4/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/4/1.jpg","https://i.dummyjson.com/data/products/4/2.jpg","https://i.dummyjson.com/data/products/4/3.jpg","https://i.dummyjson.com/data/products/4/4.jpg","https://i.dummyjson.com/data/products/4/thumbnail.jpg"]},{"id":5,"title":"Huawei P30","description":"Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.","price":499,"discountPercentage":10.58,"rating":4.09,"stock":32,"brand":"Huawei","category":"Телефон","thumbnail":"https://i.dummyjson.com/data/products/5/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/5/1.jpg","https://i.dummyjson.com/data/products/5/2.jpg","https://i.dummyjson.com/data/products/5/3.jpg"]},{"id":6,"title":"MacBook Pro","description":"MacBook Pro 2021 with mini-LED display may launch between September, November","price":1749,"discountPercentage":11.02,"rating":4.57,"stock":83,"brand":"APPle","category":"Ноутбуки","thumbnail":"https://i.dummyjson.com/data/products/6/thumbnail.png","images":["https://i.dummyjson.com/data/products/6/1.png","https://i.dummyjson.com/data/products/6/2.jpg","https://i.dummyjson.com/data/products/6/3.png","https://i.dummyjson.com/data/products/6/4.jpg"]},{"id":7,"title":"Samsung Galaxy Book","description":"Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched","price":1499,"discountPercentage":4.15,"rating":4.25,"stock":50,"brand":"Samsung","category":"Ноутбуки","thumbnail":"https://i.dummyjson.com/data/products/7/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/7/1.jpg","https://i.dummyjson.com/data/products/7/2.jpg","https://i.dummyjson.com/data/products/7/3.jpg","https://i.dummyjson.com/data/products/7/thumbnail.jpg"]},{"id":8,"title":"Microsoft Surface Laptop 4","description":"Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.","price":1499,"discountPercentage":10.23,"rating":4.43,"stock":68,"brand":"Microsoft Surface","category":"Ноутбуки","thumbnail":"https://i.dummyjson.com/data/products/8/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/8/1.jpg","https://i.dummyjson.com/data/products/8/2.jpg","https://i.dummyjson.com/data/products/8/3.jpg","https://i.dummyjson.com/data/products/8/4.jpg","https://i.dummyjson.com/data/products/8/thumbnail.jpg"]},{"id":9,"title":"Infinix INBOOK","description":"Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty","price":1099,"discountPercentage":11.83,"rating":4.54,"stock":96,"brand":"Infinix","category":"Ноутбуки","thumbnail":"https://i.dummyjson.com/data/products/9/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/9/1.jpg","https://i.dummyjson.com/data/products/9/2.png","https://i.dummyjson.com/data/products/9/3.png","https://i.dummyjson.com/data/products/9/4.jpg","https://i.dummyjson.com/data/products/9/thumbnail.jpg"]},{"id":10,"title":"HP Pavilion 15-DK1056WM","description":"HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10","price":3099,"discountPercentage":6.18,"rating":4.43,"stock":89,"brand":"HP Pavilion","category":"Ноутбуки","thumbnail":"https://i.dummyjson.com/data/products/10/thumbnail.jpeg","images":["https://i.dummyjson.com/data/products/10/1.jpg","https://i.dummyjson.com/data/products/10/2.jpg","https://i.dummyjson.com/data/products/10/3.jpg","https://i.dummyjson.com/data/products/10/thumbnail.jpeg"]},{"id":11,"title":"Corded Keyboard K280e","description":"multimedia for PC, membrane, plastic, connection interface - USB, moisture protection, color black","price":1399,"discountPercentage":8.4,"rating":4.26,"stock":65,"brand":"Logitech","category":"Клавиатуры","thumbnail":"https://content2.onliner.by/catalog/device/main/a041bba1cb089b74b4510f11bc8471f1.jpeg","images":["https://content2.onliner.by/catalog/device/main/a041bba1cb089b74b4510f11bc8471f1.jpeg","https://content2.onliner.by/catalog/device/main/118f2d6ded22d7b83406ce09ee1d10c9.jpeg","https://i.dummyjson.com/data/products/11/3.jpg","https://i.dummyjson.com/data/products/11/thumbnail.jpg"]},{"id":12,"title":"Logitech G413 ","description":"gaming for PC, mechanical, Logitech Romer-G Tactile, tactile/click stroke, metal top panel, connection interface - USB, backlight, USB hub, color black","price":40,"discountPercentage":15.66,"rating":4,"stock":52,"brand":"Logitech","category":"Клавиатуры","thumbnail":"https://content2.onliner.by/catalog/device/main/96ee5d11712d8d1a054f20ebbce4bfd8.jpeg","images":["https://content2.onliner.by/catalog/device/main/96ee5d11712d8d1a054f20ebbce4bfd8.jpeg","https://content2.onliner.by/catalog/device/main/37f6ba93f48d0c1ba2c997039dc2b500.jpeg","https://i.dummyjson.com/data/products/12/3.png","https://i.dummyjson.com/data/products/12/4.jpg","https://i.dummyjson.com/data/products/12/thumbnail.jpg"]},{"id":13,"title":"Samsung C24RG50FZI","description":"23.5, 16:9, 1920x1080, VA, curved (1800R), 144Hz, AMD FreeSync, HDMI+DisplayPort interfaces","price":1300,"discountPercentage":8.14,"rating":4.59,"stock":61,"brand":"Samsung","category":"Мониторы","thumbnail":"https://content2.onliner.by/catalog/device/main/b6accc982f219e0c7bf941a2b333f04e.jpeg","images":["https://content2.onliner.by/catalog/device/main/b6accc982f219e0c7bf941a2b333f04e.jpeg","https://content2.onliner.by/catalog/device/main/f99ca626da2285279020360deb4e3d75.jpeg","https://i.dummyjson.com/data/products/13/4.jpg","https://i.dummyjson.com/data/products/13/thumbnail.webp"]},{"id":14,"title":"ASUS TUF Gaming VG279Q1A","description":"27, 16:9, 1920x1080, IPS, 165Hz, AMD FreeSync Premium/NVIDIA G-Sync compatible, Speakers, HDMI+DisplayPort","price":460,"discountPercentage":8.14,"rating":3.9,"stock":61,"brand":"ASUS","category":"Мониторы","thumbnail":"https://content2.onliner.by/catalog/device/main/5e0e7f6ba3e421da2dd2d3a5a8902dc1.jpeg","images":["https://content2.onliner.by/catalog/device/main/5e0e7f6ba3e421da2dd2d3a5a8902dc1.jpeg","https://content2.onliner.by/catalog/device/main/0aef4eb5eec0553b14470f30f00d3ec0.jpeg","https://i.dummyjson.com/data/products/13/4.jpg","https://i.dummyjson.com/data/products/13/thumbnail.webp"]},{"id":15,"title":"LG UltraGear 32GN600-B","description":"31.5, 16:9, 2560x1440, VA, 165Hz, AMD FreeSync/NVIDIA G-Sync compatible, HDMI+DisplayPort interfaces","price":1699,"discountPercentage":8.14,"rating":3.68,"stock":610,"brand":"LG","category":"Мониторы","thumbnail":"https://content2.onliner.by/catalog/device/main/a3448aae5da90f38c5a30c50c6fb88f9.jpeg","images":["https://content2.onliner.by/catalog/device/main/a3448aae5da90f38c5a30c50c6fb88f9.jpeg","https://content2.onliner.by/catalog/device/main/0256dc088224332e49c80ff7ac9b91ea.jpeg","https://i.dummyjson.com/data/products/13/thumbnail.webp"]},{"id":16,"title":"Samsung Odyssey G5 C27G55TQW","description":"27, 16:9, 2560x1440, VA Curved (1000R), 144Hz, AMD FreeSync Premium, HDMI+DisplayPort interfaces","price":960,"discountPercentage":8.14,"rating":4.68,"stock":1161,"brand":"Samsung","category":"Мониторы","thumbnail":"https://content2.onliner.by/catalog/device/main/fdfb213bad3a62b242a7515c877a109d.jpeg","images":["https://content2.onliner.by/catalog/device/main/fdfb213bad3a62b242a7515c877a109d.jpeg","https://content2.onliner.by/catalog/device/main/cdb0782a306464d0f7145d748fa42c05.jpeg","https://i.dummyjson.com/data/products/13/thumbnail.webp"]},{"id":17,"title":"Jet Gamer 5i10400FD16SD24X105TL2W5","description":"gaming (gaming), CPU Intel Core i5 10400F 2900 MHz, RAM DDR4 16 GB, SSD 240 GB, graphics: NVIDIA GeForce GTX 1050 Ti 4 GB, PSU 500 W, no OS","price":178,"discountPercentage":8.14,"rating":4.79,"stock":61,"brand":"Jet","category":"Компьютеры","thumbnail":"https://content2.onliner.by/catalog/device/main/575e6ec9ecfc81c7f7d7948ffac441fb.jpeg","images":["https://content2.onliner.by/catalog/device/main/575e6ec9ecfc81c7f7d7948ffac441fb.jpeg","https://content2.onliner.by/catalog/device/main/6ed480e96c353b883ef13631bb653eff.jpeg","https://i.dummyjson.com/data/products/13/thumbnail.webp"]},{"id":18,"title":"MultiGame 5C104FD16S256G305MG6A","description":"gaming (gaming)/home, CPU Intel Core i5 10400F 2900 MHz, RAM DDR4 16 GB, SSD 256 GB, graphics: NVIDIA GeForce RTX 3050 8 GB, PSU 600 W, no OS","price":278,"discountPercentage":8.14,"rating":4.22,"stock":61,"brand":"MultiGame","category":"Компьютеры","thumbnail":"https://content2.onliner.by/catalog/device/main/cbb4015504c23df910577caccafc9719.jpeg","images":["https://content2.onliner.by/catalog/device/main/cbb4015504c23df910577caccafc9719.jpeg","image.png"]},{"id":19,"title":"MultiGame FK BY X-Game 138365","description":"игровой (геймерский), CPU Intel Core i5 10400F 2900 МГц, RAM DDR4 16 ГБ, SSD+HDD 1000+240 ГБ, графика: NVIDIA GeForce GTX 1650 Super 4 ГБ, БП 500 Вт","price":578,"discountPercentage":8.14,"rating":4.29,"stock":61,"brand":"MultiGame","category":"Компьютеры","thumbnail":"https://con","images":["https://content2.onliner.by/catalog/device/main/b0d484f353d60f9596ec5bbcaae668f4.jpeg","https://content2.onliner.by/catalog/device/main/ec0775d0661df259e2ce26e758137a81.jpeg"]},{"id":20,"title":"JetGamer 5R5600GD16SD96X306TIL3W7","description":"игровой (геймерский), CPU AMD Ryzen 5 5600G 3900 МГц, RAM DDR4 16 ГБ, SSD 960 ГБ, графика: NVIDIA GeForce RTX 3060 Ti 8 ГБ, БП 700 Вт, без ОС","price":2578,"discountPercentage":8.14,"rating":4.29,"stock":61,"brand":"Jet","category":"Компьютеры","thumbnail":"https://con","images":["https://content2.onliner.by/catalog/device/main/e34770b51a398b31fdcff36cbfa4140e.jpeg","https://content2.onliner.by/catalog/device/main/eec64b70bf3af9588c2c3eb565aa591f.jpeg"]}]');

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./pages/main.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./pages/main.css");
/* harmony import */ var _media_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media.css */ "./pages/media.css");
/* harmony import */ var _basket_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basket.css */ "./pages/basket.css");
/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test */ "./pages/test.js");
/* harmony import */ var _products_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products.json */ "./pages/products.json");




// import { basket } from "./basket";

// let buttonSubmitBasket = document.getElementById("basket-but-continue");
// buttonSubmitBasket.addEventListener("click", basket)

console.log(_test__WEBPACK_IMPORTED_MODULE_3__.test);




if (document.location.pathname.split('/').includes('main.html')) {
    let newProductsArr = [..._products_json__WEBPACK_IMPORTED_MODULE_4__];
let checkedBrand = [];
let checkedCategory ='';

const range1Input = document.querySelector('.range-1');
const range2Input = document.querySelector('.range-2');
const range1Value = document.querySelector('.range-1__value');
const range2Value = document.querySelector('.range-2__value');

function createCards(productsArr) {
    console.log(productsArr);


    const mainTopic = document.querySelector('.main-topic');
    mainTopic.innerHTML = "";
    productsArr.forEach(el => {
        mainTopic.innerHTML += 
        `
        <div class="market-section">
                    <div class="goods-section">
                        <div class="goods-section__image">
                            <img src="${el.images[0]}" alt="image-goods" class="goods__image">
                        </div>
                        <div class="goods-section__title">
                            <div class="goods-information">
                                <p class="goods__title">${el.title}</p>
                                <p class="goods__brand">${el.brand}</p>
                                <p class="goods__cost">${el.price} б.р.</p>
                            </div>
                            <div class="goods-icon__basket">
                                <img src="../assets/icons/wbask.png" alt="basket" class="goods__basket">
                            </div>
                        </div>
                    </div>
                </div>`;
    });


}

// createCards(products);
function createBrandList(productsArr) {
    let brandArr = [];
    _products_json__WEBPACK_IMPORTED_MODULE_4__.forEach(el => {
        brandArr.push(el.brand);
    });
    return brandArr = [...new Set(brandArr)];
}

function generateBrandList() {
    const filterBrand = document.querySelector('.filter-brand');
    filterBrand.innerHTML = `<p class="filter-brand__title filter__titles">Бренд</p>`
    createBrandList(_products_json__WEBPACK_IMPORTED_MODULE_4__).forEach(el => {
        filterBrand.innerHTML += `
        <label for="label-brand" class="label-brand">
        <input type="checkbox" name="label-brand" class="brand-input">
            <span>${el}</span>
        </label>`
    });
}
generateBrandList()

////////////////////////////////////
const categoryList = document.querySelector('.nav-list');
categoryList.addEventListener('click', function(e){
    let target = e.target;
    if (target.className === 'nav-list__item') {
        checkedCategory = target.lastElementChild.textContent;

    } else if (target.parentElement.className === 'nav-list__item') {
        checkedCategory = target.parentElement.lastElementChild.textContent;
    }
    allFilterFunc(newProductsArr)
})
function checkCategory(arr) {
    return checkedCategory ? arr.filter(el => el.category === checkedCategory) : arr;
}

// ЭТО ДЛЯ INPUT RANGE В ФИЛЬТРАХ



function priceFilter(arr) {
    const priseArr = arr.map(el => el.price).sort((a,b) => a -b);
    const minPrice = priseArr[0];
    const maxPrice = priseArr[priseArr.length - 1];
    // range1Input ? range1Input.setAttribute('min', minPrice) : false;
    // range2Input ? range2Input.setAttribute('min', minPrice) : false;
    range1Input ? range1Input.setAttribute('value', minPrice) : false;
    // range1Input ? range1Input.setAttribute('max', maxPrice) : false;
    // range2Input ? range2Input.setAttribute('max', maxPrice) : false;
    range2Input ? range2Input.setAttribute('value', maxPrice) : false;
    range1Input ? range1Value.innerHTML = range1Input.value : false;
    range2Input ? range2Value.innerHTML = range2Input.value : false;
    return [arr, minPrice, maxPrice]; 
}

range1Input.addEventListener('change', function(){
    if (+range1Input.value < +range2Input.value) {
        let arr = newProductsArr.filter(el => el.price > range1Input.value)
        range1Value.innerHTML =range1Input.value;
        // arr = newProductsArr.filter(el => el.price < range2Input.value)
        // range2Value.innerHTML =range2Input.value;
        console.log(range1Input.value, range2Input.value);
        allFilterFunc(arr);
    } else {
        let arr = newProductsArr.filter(el => el.price > range2Input.value)
        range1Value.innerHTML =range2Input.value;
        console.log(range1Input.value, range2Input.value);
        // arr = newProductsArr.filter(el => el.price < range1Input.value)
        // range1Value.innerHTML =range1Input.value;
        allFilterFunc(arr);
    }
})
range2Input.addEventListener('change', function(){
    if (+range1Input.value < +range2Input.value) {

        let arr = newProductsArr.filter(el => el.price < range2Input.value)
        range2Value.innerHTML =range2Input.value;
        console.log(range2Input.value);
        allFilterFunc(arr);
    } else {

        let arr = newProductsArr.filter(el => el.price < range1Input.value)
        range2Value.innerHTML =range1Input.value;
        allFilterFunc(arr);
    }
})
















// window.onload = function(){
//     slideOne();
//     slideTwo();
// }
// let sliderOne = document.getElementById("slider-1");
// let sliderTwo = document.getElementById("slider-2");
// let displayValOne = document.getElementById("range-1");
// let displayValTwo = document.getElementById("range-2");
// let minGap = 0;
// let sliderTrack = document.querySelector(".slider-track");
// let sliderMaxValue = document.getElementById("slider-1").max;
// function slideOne(){
//     if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
//         sliderOne.value = parseInt(sliderTwo.value) - minGap;
//     }
//     displayValOne.textContent = sliderOne.value;
//     fillColor();
// }
// function slideTwo(){
//     if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
//         sliderTwo.value = parseInt(sliderOne.value) + minGap;
//     }
//     displayValTwo.textContent = sliderTwo.value;
//     fillColor();
// }
// function fillColor(){
//     percent1 = (sliderOne.value / sliderMaxValue) * 100;
//     percent2 = (sliderTwo.value / sliderMaxValue) * 100;
//     sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
// }
/////////////////////////////////////////////////
const brandInputs = document.querySelectorAll('.brand-input');

for (let i = 0; i < brandInputs.length; i++) {
   
    const brandInput = brandInputs[i];
    brandInput.addEventListener('change',function(){
        if (brandInput.checked) {
            checkedBrand.push(brandInput.parentElement.lastElementChild.textContent);

        } else {
            checkedBrand = checkedBrand.filter(el => el != brandInput.parentElement.lastElementChild.textContent)
        }
        allFilterFunc(newProductsArr)
    })
    
}
function productsArrSortBrand(productsArr) {
    let productsArrSortBrand = productsArr.filter(el => checkedBrand.includes(el.brand));
    return checkedBrand.length ? productsArrSortBrand : productsArr;
}
function allFilterFunc(productsArr) {
    let arr = productsArrSortBrand(productsArr);
    console.log(arr);
    let arr1 = checkCategory(arr);
    let arr2 = priceFilter(arr1);
    
    console.log(arr2,'a');
    createCards(arr2[0]);    
}
allFilterFunc(newProductsArr)
}

// let buttonSubmitBasket = document.querySelector(".basket-but-continue");
// function generateModalWindow() {
//     if (buttonSubmitBasket.classList.contains("modal-dark-window")) {
//         buttonSubmitBasket.classList.remove('modal-dark-window');
//         console.log('sdsdsd')
//     } else {
//         buttonSubmitBasket.classList.add("modal-dark-window");
//         console.log('sdsdsd')
//     }
// }
// buttonSubmitBasket.addEventListener("click", generateModalWindow)

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map