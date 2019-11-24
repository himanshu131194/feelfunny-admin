module.exports =
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar _default = {\n  env: \"development\" || false,\n  port: process.env.PORT || 4000,\n  API_URL: \"http://localhost:3000\",\n  SELF_URL: \"http://localhost:4000\",\n  ACCESS_TOKEN: \"0z6v8b4uua\",\n  ERROR: {\n    100: 'Please put a valid image url',\n    101: 'Please refresh and try to login again'\n  },\n  S3: {\n    BUCKET: 'stylemycv',\n    URL: 'https://stylemycv.s3.ap-south-1.amazonaws.com',\n    ACCESS: 'AKIA3YIPQLXVUZ3S3UD7',\n    SECRET: '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',\n    PASSWORD: 'WMwQ}t%c(XqR'\n  },\n  S3_KEYS: {\n    BUCKET: 'feel-funny',\n    // URL : 'https://stylemycv.s3.ap-south-1.amazonaws.com',\n    ACCESS: 'AKIA3YIPQLXV4NIO3PWA',\n    SECRET: '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'\n  },\n  FB: {\n    ACCESS_TOKEN: \"EAAGETN1D20EBAEiWQvpJ9v0v0zfyeDYWzo9C8qqVJucIve3FsUOPKrGDFuJZBMZAediW9ZCKZChvNkQDeElzU4dKOhaf7UxFzPNt4pzKojBZB7mZBHIFCmmERlDDXpFYE1jq9wZBfVxmZCJHL5tSeyjekjKqF4xlZALdqlz9xfz8mxwZDZD\",\n    PAGE_ID: \"1034103903466704\"\n  },\n  CONTENT_TYPE: {\n    PHOTO: 1,\n    VIDEO: 2\n  },\n  MONGO_URI: 'mongodb+srv://feelfunny:feelfunny123@feelfunny-jfu4v.mongodb.net/test?retryWrites=true'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshusavita/Documents/live-projects/9gag/9gag-admin/config/index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./config/index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./server/controllers/index.js":
/*!*************************************!*\
  !*** ./server/controllers/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! request */ \"request\");\n/* harmony import */ var request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(request__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var request_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! request-promise */ \"request-promise\");\n/* harmony import */ var request_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(request_promise__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ \"./config/index.js\");\n/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid/v4 */ \"uuid/v4\");\n/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _models_posts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/posts */ \"./server/models/posts.js\");\n/* harmony import */ var dns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dns */ \"dns\");\n/* harmony import */ var dns__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dns__WEBPACK_IMPORTED_MODULE_7__);\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\n\n\n\nvar _default = function _default(router) {\n  router.get('/update-token', function (req, res) {\n    var options = {\n      uri: \"https://graph.facebook.com/v5.0/oauth/access_token\",\n      qs: {\n        grant_type: \"fb_exchange_token\",\n        client_id: \"426940641303361\",\n        client_secret: \"9201de519aee8843c2b7fe94f7ad0a5a\",\n        fb_exchange_token: \"EAAGETN1D20EBAOwFM3Q30NyLBDRcMyZCybsvUhyipskzZAwMfBiYoN3H6KCUk18MRZBlzINVJmflJK4bDe9hH57GhZCtLz3YcdWZCRJcS4pLYWmG2zWLRN40qrRLjls6xGZCUgfUtOR3NHZCSWWGqmSZBCjX6HubHG2DAe8EQfzQZC9QAuf65bYxCgAYZBd7mSLYVLX97HILumnwZDZD\"\n      },\n      json: true\n    }; // {\n    //     \"key\": {\n    //       \"access_token\": \"EAAGETN1D20EBAAKG2AY4hepWIzNtZCf8TGZCmaAB0f6P1WB3ypyhUGTAZB046iaEYXG8KJS7IIuxlkKkhRSp2hUEgyr334AGAPiO1560kcUZCxPOMPBcgKqUEuJpU9SvVmO6DV3WB79VVUPtUS4WJgP90Ohecesk86RvYd7ZBbwZDZD\",\n    //       \"token_type\": \"bearer\",\n    //       \"expires_in\": 5184000\n    //     }\n    //   }\n\n    request_promise__WEBPACK_IMPORTED_MODULE_1___default()(options).then(function (parsedBody) {\n      res.send({\n        key: parsedBody\n      });\n    }).catch(function (err) {\n      res.send({\n        key: err\n      });\n    });\n  });\n\n  var s3upload =\n  /*#__PURE__*/\n  function () {\n    var _ref = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee(mediapost, contentType, key) {\n      var s3, paramsThumb, s3Response;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              s3 = new aws_sdk__WEBPACK_IMPORTED_MODULE_4___default.a.S3({\n                accessKeyId: _config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].S3.ACCESS,\n                secretAccessKey: _config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].S3.SECRET\n              });\n              paramsThumb = {\n                Bucket: _config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].S3.BUCKET,\n                Key: key,\n                Body: mediapost,\n                ContentType: contentType\n              };\n              _context.prev = 2;\n              _context.next = 5;\n              return s3.putObject(paramsThumb).promise();\n\n            case 5:\n              s3Response = _context.sent;\n              s3Response['post_url'] = \"https://stylemycv.s3.ap-south-1.amazonaws.com/\".concat(key);\n              return _context.abrupt(\"return\", s3Response);\n\n            case 10:\n              _context.prev = 10;\n              _context.t0 = _context[\"catch\"](2);\n              return _context.abrupt(\"return\", {\n                error: _context.t0\n              });\n\n            case 13:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[2, 10]]);\n    }));\n\n    return function s3upload(_x, _x2, _x3) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var alldata = false;\n  var a = 0;\n\n  var update9gagdb =\n  /*#__PURE__*/\n  function () {\n    var _ref2 = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee2(section, cursor_url) {\n      var refresh, url, gagURL, _ref3, data, posts, nextCursor, finalArray, result, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, post, checkpostexists, objJSON, mediapost, date, month, today, perdayFolder, contentType, s3Uploadresult, response;\n\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              refresh = alldata ? 1 : 0;\n              console.log(++a);\n              url = cursor_url ? \"\".concat(section, \"?\").concat(cursor_url) : section;\n              gagURL = \"https://9gag.com/v1/group-posts/group/\".concat(url);\n              _context2.next = 6;\n              return request_promise__WEBPACK_IMPORTED_MODULE_1___default()({\n                uri: gagURL,\n                json: true\n              });\n\n            case 6:\n              _ref3 = _context2.sent;\n              data = _ref3.data;\n              posts = data.posts, nextCursor = data.nextCursor;\n              finalArray = [];\n              result = [];\n              _iteratorNormalCompletion = true;\n              _didIteratorError = false;\n              _iteratorError = undefined;\n              _context2.prev = 14;\n              _iterator = posts[Symbol.iterator]();\n\n            case 16:\n              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {\n                _context2.next = 80;\n                break;\n              }\n\n              post = _step.value;\n              //check post is already exists \n              console.log(post);\n\n              if (!(post.video && post.video.source == 'YouTube')) {\n                _context2.next = 21;\n                break;\n              }\n\n              return _context2.abrupt(\"continue\", 77);\n\n            case 21:\n              _context2.next = 23;\n              return _models_posts__WEBPACK_IMPORTED_MODULE_6__[\"default\"].findOne({\n                crawled_id: post.id\n              });\n\n            case 23:\n              checkpostexists = _context2.sent;\n\n              if (!checkpostexists) {\n                _context2.next = 32;\n                break;\n              }\n\n              if (!alldata) {\n                _context2.next = 29;\n                break;\n              }\n\n              return _context2.abrupt(\"continue\", 77);\n\n            case 29:\n              return _context2.abrupt(\"return\", {\n                result: true\n              });\n\n            case 30:\n              _context2.next = 77;\n              break;\n\n            case 32:\n              objJSON = {};\n              objJSON['refresh'] = refresh;\n              objJSON['next_cursor'] = nextCursor;\n              objJSON['post_title'] = post.title;\n              objJSON['post_id'] = uuid_v4__WEBPACK_IMPORTED_MODULE_3___default()();\n              objJSON['post_type'] = section;\n              objJSON['crawled_id'] = post.id; //check video                 \n\n              mediapost = '';\n\n              if (!(post.type == \"Photo\" || post.type == \"Article\")) {\n                _context2.next = 54;\n                break;\n              }\n\n              objJSON['media_type'] = _config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].CONTENT_TYPE.PHOTO;\n              objJSON['ext'] = post.images.image700.url.split('.').pop();\n              _context2.prev = 43;\n              _context2.next = 46;\n              return request_promise__WEBPACK_IMPORTED_MODULE_1___default.a.get({\n                uri: post.images.image700.url,\n                encoding: null\n              });\n\n            case 46:\n              mediapost = _context2.sent;\n              _context2.next = 52;\n              break;\n\n            case 49:\n              _context2.prev = 49;\n              _context2.t0 = _context2[\"catch\"](43);\n              console.log(_context2.t0);\n\n            case 52:\n              _context2.next = 65;\n              break;\n\n            case 54:\n              objJSON['media_type'] = _config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].CONTENT_TYPE.VIDEO;\n              objJSON['ext'] = post.images.image460sv.url.split('.').pop();\n              _context2.prev = 56;\n              _context2.next = 59;\n              return request_promise__WEBPACK_IMPORTED_MODULE_1___default.a.get({\n                uri: post.images.image460sv.url,\n                encoding: null\n              });\n\n            case 59:\n              mediapost = _context2.sent;\n              _context2.next = 65;\n              break;\n\n            case 62:\n              _context2.prev = 62;\n              _context2.t1 = _context2[\"catch\"](56);\n              console.log(_context2.t1);\n\n            case 65:\n              date = new Date(), month = date.getMonth() + 1, today = \"\".concat(date.getDate(), \"-\").concat(month, \"-\").concat(date.getFullYear());\n              perdayFolder = \"\".concat(section, \"_\").concat(today);\n\n              if (!fs__WEBPACK_IMPORTED_MODULE_5___default.a.existsSync(\"./crawled-memes/\".concat(perdayFolder))) {\n                fs__WEBPACK_IMPORTED_MODULE_5___default.a.mkdirSync(\"./crawled-memes/\".concat(perdayFolder));\n              }\n\n              contentType = objJSON['media_type'] == _config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].CONTENT_TYPE.VIDEO ? \"video/\".concat(objJSON['ext']) : \"image/\".concat(objJSON['ext']);\n              _context2.next = 71;\n              return s3upload(mediapost, contentType, \"9gag_data/\".concat(objJSON['post_id'], \".\").concat(objJSON['ext']));\n\n            case 71:\n              s3Uploadresult = _context2.sent;\n              console.log(s3Uploadresult);\n              objJSON['post_url'] = s3Uploadresult['post_url'];\n              fs__WEBPACK_IMPORTED_MODULE_5___default.a.writeFileSync(\"./crawled-memes/\".concat(perdayFolder, \"/\").concat(objJSON['post_id'], \".\").concat(objJSON['ext']), mediapost);\n              console.log(objJSON);\n              finalArray.push(objJSON);\n\n            case 77:\n              _iteratorNormalCompletion = true;\n              _context2.next = 16;\n              break;\n\n            case 80:\n              _context2.next = 86;\n              break;\n\n            case 82:\n              _context2.prev = 82;\n              _context2.t2 = _context2[\"catch\"](14);\n              _didIteratorError = true;\n              _iteratorError = _context2.t2;\n\n            case 86:\n              _context2.prev = 86;\n              _context2.prev = 87;\n\n              if (!_iteratorNormalCompletion && _iterator.return != null) {\n                _iterator.return();\n              }\n\n            case 89:\n              _context2.prev = 89;\n\n              if (!_didIteratorError) {\n                _context2.next = 92;\n                break;\n              }\n\n              throw _iteratorError;\n\n            case 92:\n              return _context2.finish(89);\n\n            case 93:\n              return _context2.finish(86);\n\n            case 94:\n              _context2.next = 96;\n              return _models_posts__WEBPACK_IMPORTED_MODULE_6__[\"default\"].insertMany(finalArray);\n\n            case 96:\n              response = _context2.sent;\n              result = result.concat(response); //CALL FOR NEXT ROUND \n\n              update9gagdb(section, nextCursor);\n\n            case 99:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[14, 82, 86, 94], [43, 49], [56, 62], [87,, 89, 93]]);\n    }));\n\n    return function update9gagdb(_x4, _x5) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var getLatestCursor =\n  /*#__PURE__*/\n  function () {\n    var _ref4 = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee3(section) {\n      var lastCursor;\n      return regeneratorRuntime.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.next = 2;\n              return _models_posts__WEBPACK_IMPORTED_MODULE_6__[\"default\"].findOne({\n                refresh: 1\n              }).sort({\n                created: -1\n              });\n\n            case 2:\n              lastCursor = _context3.sent;\n\n              if (lastCursor) {\n                _context3.next = 7;\n                break;\n              }\n\n              _context3.next = 6;\n              return _models_posts__WEBPACK_IMPORTED_MODULE_6__[\"default\"].findOne({\n                refresh: 0\n              }).sort({\n                created: -1\n              });\n\n            case 6:\n              lastCursor = _context3.sent;\n\n            case 7:\n              update9gagdb(section, lastCursor['next_cursor']); // { posted_fb: false,\n              //     posted_web: false,\n              //     refresh: true,\n              //     _id: 5dcc1e9d6760226b2f947b50,\n              //     next_cursor: 'after=aGgz9m0%2CaDgDwGK%2CaZ7rWmn&c=60',\n              //     post_title: 'One, venti diarrhea please. Extra hot, extra old.',\n              //     post_id: '46275502-5007-48df-b108-03896305d13e',\n              //     post_type: 'awesome',\n              //     crawled_id: 'aZ7rWmn',\n              //     media_type: 1,\n              //     ext: 'jpg',\n              //     post_url:\n              //      'https://stylemycv.s3.ap-south-1.amazonaws.com/9gag_data/46275502-5007-48df-b108-03896305d13e.jpg',\n              //     created: 2019-11-13T15:17:49.412Z,\n              //     __v: 0 }\n\n            case 8:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    return function getLatestCursor(_x6) {\n      return _ref4.apply(this, arguments);\n    };\n  }();\n\n  router.get('/9gag-data', function (req, res) {\n    var section = req.query.section || 'funny';\n    var mine = req.query.mine;\n    var result = '';\n\n    if (mine !== '') {\n      alldata = true;\n      getLatestCursor(section);\n    } else {\n      alldata = false;\n      result = update9gagdb(section);\n    }\n\n    console.log(mine);\n    res.send({\n      result: result\n    });\n  });\n  router.get('/facebook-page', function (req, res) {\n    var posts = [{\n      text: \"\",\n      url: \"https://media.farandwide.com/4e/50/4e505d7c1c3a4f64917a70d40ee1385c.jpeg\"\n    }, {\n      text: \"\",\n      url: \"https://s4.scoopwhoop.com/anj/sw/51b1f5e3-6473-4aae-a2c6-81b6474cdd68.jpg\"\n    }]; // curl -i -X GET \"https://graph.facebook.com/v5.0/oauth/access_token?  \n    // grant_type=fb_exchange_token&          \n    // client_id=426940641303361&\n    // client_secret=9201de519aee8843c2b7fe94f7ad0a5a&\n    // fb_exchange_token=EAAGETN1D20EBAOwFM3Q30NyLBDRcMyZCybsvUhyipskzZAwMfBiYoN3H6KCUk18MRZBlzINVJmflJK4bDe9hH57GhZCtLz3YcdWZCRJcS4pLYWmG2zWLRN40qrRLjls6xGZCUgfUtOR3NHZCSWWGqmSZBCjX6HubHG2DAe8EQfzQZC9QAuf65bYxCgAYZBd7mSLYVLX97HILumnwZDZD\n    //https://9gag.com/v1/group-posts/group/football\n    // {\n    //     \"access_token\": \"EAAGETN1D20EBACSsZAErRNODDBKN9QpzLMLTkVUIlzNm9WtlqoAs8cZCo9vJfdSXlCqt61zHOAR5XMQ3B94i1a6mGc7voLDQTtNUZB3ZCrI97qNqbLapW2SkCAFsfkjxZAZBP3t7aS84vF4mMq1Xb4fx3ZBpHj3oOtlPjU5i3fG4QZDZD\",\n    //     \"id\": \"1034103903466704\"\n    //   }\n    // curl -i -X POST \\\n    // -d \"message=Testing multi-photo post!\" \\\n    // -d \"attached_media[0]={\"media_fbid\":\"1002088839996\"}\" \\\n    // -d \"attached_media[1]={\"media_fbid\":\"1002088840149\"}\" \\\n    // -d \"access_token=<access_token>\" \\\n    // -d \"published=false\" \\\n    // -d \"scheduled_publish_time=1512068400\" \\\n    // -d \"unpublished_content_type=SCHEDULED\" \\\n    // \"https://graph.facebook.com/me/feed\"\n\n    var options = {\n      method: 'POST',\n      uri: 'https://graph.facebook.com/v5.0/1034103903466704/photos',\n      body: {\n        published: 'true',\n        caption: \"😂🤣\",\n        url: \"https://i.imgflip.com/3f4ivz.jpg\",\n        access_token: \"EAAGETN1D20EBAAKG2AY4hepWIzNtZCf8TGZCmaAB0f6P1WB3ypyhUGTAZB046iaEYXG8KJS7IIuxlkKkhRSp2hUEgyr334AGAPiO1560kcUZCxPOMPBcgKqUEuJpU9SvVmO6DV3WB79VVUPtUS4WJgP90Ohecesk86RvYd7ZBbwZDZD\"\n      },\n      json: true\n    };\n    request_promise__WEBPACK_IMPORTED_MODULE_1___default()(options).then(function (parsedBody) {\n      res.send({\n        key: parsedBody\n      });\n    }).catch(function (err) {\n      res.send({\n        key: err\n      });\n    });\n  });\n  router.get('/memes-list',\n  /*#__PURE__*/\n  function () {\n    var _ref5 = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee4(req, res) {\n      var skip, limit, post_type, memes;\n      return regeneratorRuntime.wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              _context4.prev = 0;\n              skip = parseInt(req.query.offset) || 0, limit = parseInt(req.query.limit) || 40, post_type = req.query.section || 'awesome';\n              console.log(req.query);\n              _context4.next = 5;\n              return _models_posts__WEBPACK_IMPORTED_MODULE_6__[\"default\"].find({\n                post_type: post_type\n              }).skip(skip).limit(limit).sort({\n                created: -1\n              });\n\n            case 5:\n              memes = _context4.sent;\n              res.status(200).send({\n                data: memes\n              });\n              _context4.next = 13;\n              break;\n\n            case 9:\n              _context4.prev = 9;\n              _context4.t0 = _context4[\"catch\"](0);\n              console.log(_context4.t0);\n              res.status(400).send({\n                error: _config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ERROR[101]\n              });\n\n            case 13:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4, null, [[0, 9]]);\n    }));\n\n    return function (_x7, _x8) {\n      return _ref5.apply(this, arguments);\n    };\n  }());\n  router.post('/uplod-localmemes-s3',\n  /*#__PURE__*/\n  function () {\n    var _ref6 = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee5(req, res) {\n      var s3, result, slugId, base64Data, type, key, params, s3Result, objJSON, posts, response;\n      return regeneratorRuntime.wrap(function _callee5$(_context5) {\n        while (1) {\n          switch (_context5.prev = _context5.next) {\n            case 0:\n              s3 = new aws_sdk__WEBPACK_IMPORTED_MODULE_4___default.a.S3({\n                accessKeyId: _config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].S3_KEYS.ACCESS,\n                secretAccessKey: _config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].S3_KEYS.SECRET\n              });\n              _context5.prev = 1;\n              result = null;\n\n              if (!(!req.body.url && req.body.data64)) {\n                _context5.next = 7;\n                break;\n              }\n\n              result = Buffer.from(req.body.data64.replace(/^data:image\\/\\w+;base64,/, \"\"), 'base64');\n              _context5.next = 10;\n              break;\n\n            case 7:\n              _context5.next = 9;\n              return request_promise__WEBPACK_IMPORTED_MODULE_1___default()({\n                url: req.body.url,\n                encoding: null\n              });\n\n            case 9:\n              result = _context5.sent;\n\n            case 10:\n              slugId = uuid_v4__WEBPACK_IMPORTED_MODULE_3___default()();\n              base64Data = result;\n              type = req.body.mime;\n              key = \"posts/\".concat(slugId, \".\").concat(req.body.ext);\n              params = {\n                Bucket: _config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].S3_KEYS.BUCKET,\n                Key: key,\n                Body: base64Data,\n                ContentType: type\n              };\n              _context5.next = 17;\n              return s3.putObject(params).promise();\n\n            case 17:\n              s3Result = _context5.sent;\n              console.log(s3Result);\n              objJSON = {};\n              objJSON['post_id'] = slugId;\n              objJSON['media_type'] = type.indexOf('video') >= 0 ? _config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].CONTENT_TYPE.VIDEO : _config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].CONTENT_TYPE.PHOTO;\n              objJSON['ext'] = req.body.ext;\n              objJSON['post_url'] = \"https://feel-funny.s3.ap-south-1.amazonaws.com/\".concat(key);\n              posts = new _models_posts__WEBPACK_IMPORTED_MODULE_6__[\"default\"](objJSON);\n              _context5.next = 27;\n              return posts.save();\n\n            case 27:\n              response = _context5.sent;\n              res.status(200).send({\n                url: \"https://feel-funny.s3.ap-south-1.amazonaws.com/\".concat(_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].S3_KEYS.BUCKET, \"/\").concat(key),\n                response: response\n              });\n              _context5.next = 34;\n              break;\n\n            case 31:\n              _context5.prev = 31;\n              _context5.t0 = _context5[\"catch\"](1);\n              res.status(400).send({\n                error: 'Please try to upload again'\n              });\n\n            case 34:\n            case \"end\":\n              return _context5.stop();\n          }\n        }\n      }, _callee5, null, [[1, 31]]);\n    }));\n\n    return function (_x9, _x10) {\n      return _ref6.apply(this, arguments);\n    };\n  }());\n  return router;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshusavita/Documents/live-projects/9gag/9gag-admin/server/controllers/index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/index.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config */ \"./config/index.js\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../webpack.config.client.js */ \"./webpack.config.client.js\");\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__);\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\n\n\n\n\n\n\nvar compile = function compile(app) {\n  if (_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].env === \"development\") {\n    var compiler = webpack__WEBPACK_IMPORTED_MODULE_1___default()(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default.a);\n    var middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler, {\n      publicPath: _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default.a.output.publicPath\n    });\n    app.use(middleware);\n    app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default()(compiler));\n  }\n};\n\nvar _default = {\n  compile: compile\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(compile, \"compile\", \"/Users/himanshusavita/Documents/live-projects/9gag/9gag-admin/server/devBundle.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshusavita/Documents/live-projects/9gag/9gag-admin/server/devBundle.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/devBundle.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../config */ \"./config/index.js\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../template.js */ \"./template.js\");\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controllers */ \"./server/controllers/index.js\");\n/* harmony import */ var _devBundle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.urlencoded({\n  limit: '10mb',\n  extended: true\n}));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.json({\n  limit: '10mb',\n  extended: true\n}));\nvar CURRENT_WORKING_DIR = process.cwd();\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path__WEBPACK_IMPORTED_MODULE_1___default.a.join(CURRENT_WORKING_DIR, 'public'))); //comment out before building for production\n\n //comment out before building for production\n\n_devBundle__WEBPACK_IMPORTED_MODULE_6__[\"default\"].compile(app);\napp.use('/dist', express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path__WEBPACK_IMPORTED_MODULE_1___default.a.join(CURRENT_WORKING_DIR, 'dist')));\napp.use('/api', Object(_controllers__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(express__WEBPACK_IMPORTED_MODULE_0___default.a.Router()));\napp.get('*', function (req, res) {\n  res.send(Object(_template_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n});\nvar _default = app;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(app, \"app\", \"/Users/himanshusavita/Documents/live-projects/9gag/9gag-admin/server/express.js\");\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"/Users/himanshusavita/Documents/live-projects/9gag/9gag-admin/server/express.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshusavita/Documents/live-projects/9gag/9gag-admin/server/express.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/express.js?");

/***/ }),

/***/ "./server/models/posts.js":
/*!********************************!*\
  !*** ./server/models/posts.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\n\nvar Comments = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  post_url: {\n    type: String\n  },\n  post_title: {\n    type: String\n  },\n  post_type: {\n    type: String\n  },\n  crawled_id: {\n    type: String\n  },\n  posted_fb: {\n    type: Boolean,\n    default: 0\n  },\n  post_id: {\n    type: String\n  },\n  posted_web: {\n    type: Boolean,\n    default: 0\n  },\n  posted_web_time: {\n    type: Date\n  },\n  posted_fb_time: {\n    type: Date\n  },\n  ext: {\n    type: String\n  },\n  media_type: {\n    type: Number\n  },\n  next_cursor: {\n    type: String\n  },\n  refresh: {\n    type: Boolean,\n    default: 0\n  },\n  created: {\n    type: Date,\n    default: Date.now\n  },\n  updated: {\n    type: Date\n  },\n  comment: {\n    type: String\n  }\n});\n\nvar _default = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('crawled_data', Comments);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Comments, \"Comments\", \"/Users/himanshusavita/Documents/live-projects/9gag/9gag-admin/server/models/posts.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshusavita/Documents/live-projects/9gag/9gag-admin/server/models/posts.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/posts.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config */ \"./config/index.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./express */ \"./server/express.js\");\n\n\nmongoose__WEBPACK_IMPORTED_MODULE_1___default.a.Promise = global.Promise;\nmongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connect(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].MONGO_URI, {\n  useNewUrlParser: true\n});\nmongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connection.on('error', function () {\n  throw new Error('unable to connect to database');\n});\n\n_express__WEBPACK_IMPORTED_MODULE_2__[\"default\"].listen(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port, function (err) {\n  if (err) {\n    console.log(err);\n  }\n\n  console.info('Server started on port %s.', _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port);\n});\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar _default = function _default() {\n  return \"<!doctype html>\\n      <html lang=\\\"en\\\">\\n        <head>\\n            <title>feelfunny</title>\\n            <meta name=\\\"viewport\\\"  content=\\\"width=device-width initial-scale=1\\\"/>\\n            <link rel=\\\"stylesheet\\\" href=\\\"https://s3.amazonaws.com/assessts-book/css/impactwebfont.css\\\">\\n            <link href=\\\"https://fonts.googleapis.com/css?family=Roboto\\\" rel=\\\"stylesheet\\\">\\n            <link rel=\\\"stylesheet\\\" href=\\\"/css/web-icons.css\\\">\\n        </head>\\n        <body>\\n           <script>\\n            window.fbAsyncInit = function() {\\n              FB.init({\\n                appId            : '426940641303361',\\n                autoLogAppEvents : true,\\n                xfbml            : true,\\n                version          : 'v5.0'\\n              });\\n            };\\n          </script>\\n          <script async defer src=\\\"https://connect.facebook.net/en_US/sdk.js\\\"></script>\\n          <div id=\\\"root\\\"></div>\\n          <script type=\\\"text/javascript\\\" src=\\\"/dist/bundle.js\\\"></script>\\n          <script type=\\\"text/javascript\\\" src=\\\"https://code.jquery.com/jquery-3.2.1.min.js\\\"></script>\\n        </body>\\n      </html>\";\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshusavita/Documents/live-projects/9gag/9gag-admin/template.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar CURRENT_WORKING_DIR = process.cwd();\nvar config = {\n  name: \"browser\",\n  mode: \"development\",\n  devtool: 'eval-source-map',\n  entry: ['babel-polyfill', 'react-hot-loader/patch', 'webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, 'client/main.js')],\n  output: {\n    path: path.join(CURRENT_WORKING_DIR, '/dist'),\n    filename: 'bundle.js',\n    publicPath: '/dist/'\n  },\n  module: {\n    rules: [{\n      test: /\\.jsx?$/,\n      exclude: /node_modules/,\n      use: ['babel-loader']\n    }, {\n      test: /.css$/,\n      use: [{\n        loader: 'style-loader'\n      }, {\n        loader: 'css-loader'\n      }]\n    }, {\n      test: /\\.(ttf|eot|svg|gif|jpg|png)(\\?[\\s\\S]+)?$/,\n      use: 'file-loader'\n    }]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]\n};\nmodule.exports = config;\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"/Users/himanshusavita/Documents/live-projects/9gag/9gag-admin/webpack.config.client.js\");\n  reactHotLoader.register(config, \"config\", \"/Users/himanshusavita/Documents/live-projects/9gag/9gag-admin/webpack.config.client.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./webpack.config.client.js?");

/***/ }),

/***/ 0:
/*!***********************************************!*\
  !*** multi babel-polyfill ./server/server.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! babel-polyfill */\"babel-polyfill\");\nmodule.exports = __webpack_require__(/*! /Users/himanshusavita/Documents/live-projects/9gag/9gag-admin/server/server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_babel-polyfill_./server/server.js?");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"aws-sdk\");\n\n//# sourceURL=webpack:///external_%22aws-sdk%22?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dns\");\n\n//# sourceURL=webpack:///external_%22dns%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react-hot-loader":
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader%22?");

/***/ }),

/***/ "request":
/*!**************************!*\
  !*** external "request" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"request\");\n\n//# sourceURL=webpack:///external_%22request%22?");

/***/ }),

/***/ "request-promise":
/*!**********************************!*\
  !*** external "request-promise" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"request-promise\");\n\n//# sourceURL=webpack:///external_%22request-promise%22?");

/***/ }),

/***/ "uuid/v4":
/*!**************************!*\
  !*** external "uuid/v4" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid/v4\");\n\n//# sourceURL=webpack:///external_%22uuid/v4%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });