require('source-map-support/register')
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hello__ = __webpack_require__(7);


/**
 * Import any routes
 */


/**
 * Create new Instance of Router
 */
const router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

/**
 * User routes here
 */
router.use(__WEBPACK_IMPORTED_MODULE_1__hello__["a" /* default */]);

/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {const path = __webpack_require__(10);
const root = '../..';
const shared = ['assets', 'components', 'layout', 'middleware', 'plugins', 'static', 'store'];

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-multiple-app',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: '{{escape description }}' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#3B8070'
  },
  /*
  ** Global CSS
  */
  css: [{ src: `${root}/assets/scss/style.scss`, lang: 'scss' }],
  /*
  ** Global Plugin
  */
  plugins: [{ src: `${root}/plugins/vuex.js`, ssr: false }],
  /*
  ** Global Module
  */
  modules: ['bootstrap-vue/nuxt'],
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend(config, ctx) {
      shared.map(item => {
        config.resolve.alias[item] = path.resolve(__dirname, item);
      });

      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });

        const vueLoader = config.module.rules.find(({ loader }) => loader === 'vue-loader');
        const { options: { loaders } } = vueLoader || { options: {} };

        if (loaders) {
          for (const loader of Object.values(loaders)) {
            changeLoaderOptions(Array.isArray(loader) ? loader : [loader]);
          }
        }

        config.module.rules.forEach(rule => changeLoaderOptions(rule.use));
      }
    }
  }
};

const changeLoaderOptions = loaders => {
  if (loaders) {
    for (const loader of loaders) {
      if (loader.loader === 'sass-loader') {
        Object.assign(loader.options, {
          includePaths: ['./assets']
        });
      }
    }
  }
};
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(6);
module.exports = __webpack_require__(11);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__app_config__);



__WEBPACK_IMPORTED_MODULE_1__app_config___default()('Blog', __WEBPACK_IMPORTED_MODULE_0_path___default.a.resolve(__dirname, './nuxt.config.js'), 3050);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "app/blog"))

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express_lib_router_index__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express_lib_router_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express_lib_router_index__);


const router = __WEBPACK_IMPORTED_MODULE_0_express_lib_router_index___default()();

/**
 * Create root endpoint
 */
router.get('/', async (req, res) => {
  res.json({
    message: 'Hello World!'
  });
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("express/lib/router/index");

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_body_parser__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api__ = __webpack_require__(3);




/**
 * Import any Routes on API folder
 */


const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3060;

/**
 * Set port
 */
app.set('port', port);

/**
 * Use body parser for handling POST method
 */
app.use(__WEBPACK_IMPORTED_MODULE_2_body_parser___default.a.json());

/**
 * Use given APIs
 */
app.use('/api', __WEBPACK_IMPORTED_MODULE_3__api__["default"]);

/**
 * Import and use Nuxt.js configuration
 */
let config = __webpack_require__(12);
config.dev = !("development" === 'production');

/**
 * Create new instance of Nuxt
 */
const nuxt = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Nuxt"](config);

/**
 * Set build only on development mode
 */
if (config.dev) {
  const builder = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Builder"](nuxt);
  builder.build();
}

/**
 * Use Nuxt renderer on Express
 */
app.use(nuxt.render);

/**
 * Start App
 */
app.listen(port, host);

/**
 * Show listen port
 */
console.log(`Server listening on ${host}:${port}`);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {const config = __webpack_require__(4);
const extend = {
  srcDir: __dirname,
  buildDir: '.nuxt/profile'
};

Object.assign(extend, config);

module.exports = extend;
/* WEBPACK VAR INJECTION */}.call(exports, "app/profile"))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0);
const { Nuxt, Builder } = __webpack_require__(1);
const bodyParser = __webpack_require__(2);

/**
 * const any Routes on API folder
 */
const api = __webpack_require__(3);

module.exports = (configApp, configPath, configPort) => {
  const app = express();
  const host = process.env.HOST || '127.0.0.1';
  const port = process.env.PORT || configPort;

  /**
   * Set port
   */
  app.set('port', port);

  /**
   * Use body parser for handling POST method
   */
  app.use(bodyParser.json());

  /**
   * Use given APIs
   */
  app.use('/api', api);

  /**
   * Import and use Nuxt.js configuration
   */
  let config = !(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }());
  config.dev = !("development" === 'production');

  /**
   * Create new instance of Nuxt
   */
  const nuxt = new Nuxt(config);

  /**
   * Set build only on development mode
   */
  if (config.dev) {
    const builder = new Builder(nuxt);
    builder.build();
  }

  /**
   * Use Nuxt renderer on Express
   */
  app.use(nuxt.render);

  /**
   * Start App
   */
  app.listen(port, host);

  /**
   * Show listen port
   */
  console.log(`Server ${configApp} listening on ${host}:${port}`);
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 14;

/***/ })
/******/ ]);
//# sourceMappingURL=main.map