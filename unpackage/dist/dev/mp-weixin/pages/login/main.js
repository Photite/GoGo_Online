(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/login/main"],{

/***/ 68:
/*!*******************************************************************!*\
  !*** D:/Code/GoGo_Online/main.js?{"page":"pages%2Flogin%2Fmain"} ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _main = _interopRequireDefault(__webpack_require__(/*! ./pages/login/main.vue */ 69));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_main.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 69:
/*!************************************************!*\
  !*** D:/Code/GoGo_Online/pages/login/main.vue ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_vue_vue_type_template_id_b5f31b50_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.vue?vue&type=template&id=b5f31b50&scoped=true& */ 70);
/* harmony import */ var _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue?vue&type=script&lang=js& */ 72);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _main_vue_vue_type_style_index_0_id_b5f31b50_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.vue?vue&type=style&index=0&id=b5f31b50&scoped=true&lang=css& */ 74);
/* harmony import */ var _SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../SoftWare/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 36);

var renderjs





/* normalize component */

var component = Object(_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _main_vue_vue_type_template_id_b5f31b50_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _main_vue_vue_type_template_id_b5f31b50_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b5f31b50",
  null,
  false,
  _main_vue_vue_type_template_id_b5f31b50_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/login/main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 70:
/*!*******************************************************************************************!*\
  !*** D:/Code/GoGo_Online/pages/login/main.vue?vue&type=template&id=b5f31b50&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_main_vue_vue_type_template_id_b5f31b50_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../SoftWare/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../SoftWare/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../SoftWare/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../SoftWare/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../SoftWare/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../SoftWare/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./main.vue?vue&type=template&id=b5f31b50&scoped=true& */ 71);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_main_vue_vue_type_template_id_b5f31b50_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_main_vue_vue_type_template_id_b5f31b50_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_main_vue_vue_type_template_id_b5f31b50_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_main_vue_vue_type_template_id_b5f31b50_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 71:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/GoGo_Online/pages/login/main.vue?vue&type=template&id=b5f31b50&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 72:
/*!*************************************************************************!*\
  !*** D:/Code/GoGo_Online/pages/login/main.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../SoftWare/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../SoftWare/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../SoftWare/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../SoftWare/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../SoftWare/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./main.vue?vue&type=script&lang=js& */ 73);
/* harmony import */ var _SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 73:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/GoGo_Online/pages/login/main.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 30));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 32));
var _api = __webpack_require__(/*! @/request/api */ 56);
var _utils = __webpack_require__(/*! @/utils */ 33);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var LoaderLine = function LoaderLine() {
  __webpack_require__.e(/*! require.ensure | components/LoaderLine */ "components/LoaderLine").then((function () {
    return resolve(__webpack_require__(/*! @/components/LoaderLine */ 170));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var inputs = [{
  id: 'username',
  name: 'username',
  type: 'number',
  icon: 'icon-username',
  placeholder: '请输入Myhbwe账号',
  value: '',
  maxlength: 15,
  focus: false,
  invalid: false,
  error: false,
  password: false
}, {
  id: 'password',
  name: 'password',
  type: 'text',
  icon: 'icon-password',
  placeholder: '请输入密码',
  value: '',
  maxlength: 20,
  focus: false,
  invalid: false,
  error: false,
  password: true
}];
var _default = {
  data: function data() {
    return {
      inputs: inputs,
      loading: false
    };
  },
  components: {
    LoaderLine: LoaderLine
  },
  computed: {
    disabled: function disabled() {
      return !(this.inputs[0].value.length > 0 && this.inputs[1].value.length > 0);
    }
  },
  methods: {
    enter: function enter(e) {
      this.debounce(this.getInputValue, 500)(e);
    },
    // 防抖函数
    debounce: function debounce(fn, delay) {
      return function (args) {
        var _this = this;
        var _args = args;
        clearTimeout(fn.id);
        fn.id = setTimeout(function () {
          fn.call(_this, _args);
        }, delay);
      };
    },
    getInputValue: function getInputValue(e) {
      var value = e.target.value;
      var id = e.target.id;
      if (id === 'username') {
        this.inputs[0].value = value.trim();
        this.inputs[0].focus = true;
      } else if (id === 'password') {
        this.inputs[1].value = value.trim();
        this.inputs[1].focus = true;
      }
    },
    focus: function focus(i) {
      var input = this.inputs[i];
      if (input.value.length > 0) {
        input.focus = true;
        input.error = false;
      }
    },
    blur: function blur(i) {
      this.inputs[i].focus = false;
    },
    clear: function clear(i) {
      this.inputs[i].value = '';
    },
    login: function login() {
      var _this2 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var loginData, _yield$stuLogin, code, msg, info, res, schedule, start, data, time;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // 显示加载动画
                _this2.loading = true;
                loginData = {
                  // jwxtUsername: this.inputs[0].value,
                  // jwxtPassword: this.inputs[1].value
                  // jwxtUsername: 1008520090615,
                  // jwxtPassword: "Linhao521"
                  eduUsername: 1008521120406,
                  eduPassword: "Dd795613842"
                };
                _context2.next = 4;
                return (0, _api.stuLogin)(loginData);
              case 4:
                _yield$stuLogin = _context2.sent;
                code = _yield$stuLogin.code;
                msg = _yield$stuLogin.msg;
                if (!(code === "1000")) {
                  _context2.next = 45;
                  break;
                }
                uni.login({
                  "provider": "weixin",
                  "onlyAuthorize": true,
                  // 微信登录仅请求授权认证
                  success: function success(res) {
                    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
                      var loginTmp, logininfo;
                      return _regenerator.default.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              console.log(res.code);
                              loginTmp = {
                                "code": res.code,
                                "openId": "",
                                "eduUsername": loginData.eduUsername,
                                "eduPassword": loginData.eduPassword
                              };
                              _context.next = 4;
                              return (0, _api.login)(loginTmp);
                            case 4:
                              logininfo = _context.sent;
                              if (logininfo.code === "1000") {
                                console.log("登录成功");
                              } else {
                                uni.showToast({
                                  title: logininfo.msg,
                                  icon: 'none'
                                });
                              }
                            case 6:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee);
                    }))();
                  }
                });
                _context2.next = 11;
                return (0, _api.getStudentInfo)(loginData);
              case 11:
                info = _context2.sent;
                if (!(info.code === "1000")) {
                  _context2.next = 42;
                  break;
                }
                console.log("获取学生信息成功");
                // const res = await getSchedule(loginData)
                // if (res.code === "1000") {
                //   console.log("获取课程表成功")
                //   // 创建一个空的二维数组，其中每个元素代表一天的课程表
                //   let schedule = Array(10).fill().map(() => Array(7).fill().map(() => ({course: []})));
                //
                //   res.data.forEach(course => {
                //     let dayInWeek = course.dayInWeek - 1; // 确保 dayInWeek 的值是从0（代表星期一）到6（代表星期日）
                //     let startLesson = course.lesson.start - 1;
                //     let endLesson = course.lesson.end - 1;
                //
                //     if (dayInWeek >= 0 && dayInWeek < 7 && startLesson >= 0 && endLesson < 10) { // 修改这里的条件，使其可以处理星期一到星期日的数据
                //       for (let i = startLesson; i <= endLesson; i++) {
                //         schedule[i][dayInWeek].course.push({
                //           name: course.name,
                //           teacher: course.teacher,
                //           room: course.room,
                //           code: course.code,
                //           weeks: course.weekAsMinMax.map(week => Array.from({length: week.end - week.start + 1}, (_, i) => i + week.start)),
                //           weekEachLesson: course.weekEachLesson,
                //         });
                //       }
                //     } else {
                //       console.log(`课程 ${course.name} 的时间信息超出了课程表的范围`);
                //     }
                //   });
                //   console.log(schedule)
                //   console.log(info.data)
                _context2.next = 16;
                return (0, _api.getSchedule)(loginData);
              case 16:
                res = _context2.sent;
                if (!(res.code === "1000")) {
                  _context2.next = 39;
                  break;
                }
                console.log("获取课程表成功");
                schedule = Array(10).fill().map(function () {
                  return Array(7).fill().map(function () {
                    return {
                      course: []
                    };
                  });
                });
                res.data.forEach(function (course) {
                  var dayInWeek = course.dayInWeek - 1;
                  var startLesson = course.lessonStart - 1;
                  var endLesson = course.lessonEnd - 1;
                  if (dayInWeek >= 0 && dayInWeek < 7 && startLesson >= 0 && endLesson < 10) {
                    for (var i = startLesson; i <= endLesson; i++) {
                      schedule[i][dayInWeek].course.push({
                        name: course.name,
                        teacher: course.teacher,
                        room: course.room,
                        code: course.code,
                        weeks: Array.from({
                          length: course.weekEnd - course.weekStart + 1
                        }, function (_, i) {
                          return i + course.weekStart;
                        }),
                        weekEachLesson: course.weekEachLesson,
                        weekType: course.weekType
                      });
                    }
                  } else {
                    console.log("\u8BFE\u7A0B ".concat(course.name, " \u7684\u65F6\u95F4\u4FE1\u606F\u8D85\u51FA\u4E86\u8BFE\u7A0B\u8868\u7684\u8303\u56F4"));
                  }
                });
                console.log(schedule);
                console.log(info.data);
                _this2.$store.commit('login');
                _this2.$store.commit('setUserInfo', info.data.info);
                uni.setStorageSync('user', loginData);
                uni.setStorageSync('info', info.data.info);
                uni.setStorageSync('schedule', schedule);
                _context2.next = 30;
                return (0, _api.getTermStart)(loginData);
              case 30:
                start = _context2.sent;
                if (start.code === "1000") {
                  console.log(start.data.start);
                  data = (0, _utils.getTodayInfo)(start.data.start);
                  uni.setStorageSync('termStartDate', data);
                  console.log(data);
                  _this2.$store.commit('setTodayInfo', data);
                } else {
                  uni.showToast({
                    title: start.msg,
                    icon: 'none'
                  });
                }
                time = uni.getStorageSync('termStartDate');
                console.log("这是登录时获取的学期开始日期" + time);
                uni.showToast({
                  title: '登录成功',
                  icon: 'success'
                });
                console.log("跳转前的准备");
                uni.navigateBack();
                _context2.next = 40;
                break;
              case 39:
                uni.showToast({
                  title: res.msg,
                  icon: 'none'
                });
              case 40:
                _context2.next = 43;
                break;
              case 42:
                uni.showToast({
                  title: info.msg,
                  icon: 'none'
                });
              case 43:
                _context2.next = 46;
                break;
              case 45:
                if (code === 2002) {
                  _this2.inputs[0].error = true;
                  uni.showToast({
                    title: msg,
                    icon: 'none'
                  });
                } else if (code === 2003) {
                  _this2.inputs[1].error = true;
                  uni.showToast({
                    title: msg,
                    icon: 'none'
                  });
                } else {
                  uni.showToast({
                    title: msg,
                    icon: 'none'
                  });
                }
              case 46:
                // 关闭加载动画
                _this2.loading = false;
              case 47:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 74:
/*!*********************************************************************************************************!*\
  !*** D:/Code/GoGo_Online/pages/login/main.vue?vue&type=style&index=0&id=b5f31b50&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_main_vue_vue_type_style_index_0_id_b5f31b50_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../SoftWare/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../SoftWare/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../SoftWare/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../SoftWare/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../SoftWare/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../SoftWare/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../SoftWare/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./main.vue?vue&type=style&index=0&id=b5f31b50&scoped=true&lang=css& */ 75);
/* harmony import */ var _SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_main_vue_vue_type_style_index_0_id_b5f31b50_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_main_vue_vue_type_style_index_0_id_b5f31b50_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_main_vue_vue_type_style_index_0_id_b5f31b50_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_main_vue_vue_type_style_index_0_id_b5f31b50_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_main_vue_vue_type_style_index_0_id_b5f31b50_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 75:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/GoGo_Online/pages/login/main.vue?vue&type=style&index=0&id=b5f31b50&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[68,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/login/main.js.map