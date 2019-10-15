// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"lib/superfish/superfish.min.js":[function(require,module,exports) {
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 * jQuery Superfish Menu Plugin - v1.7.9
 * Copyright (c) 2016 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 */
;
!function (a, b) {
  "use strict";

  var c = function () {
    var c = {
      bcClass: "sf-breadcrumb",
      menuClass: "sf-js-enabled",
      anchorClass: "sf-with-ul",
      menuArrowClass: "sf-arrows"
    },
        d = function () {
      var b = /^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(navigator.userAgent);
      return b && a("html").css("cursor", "pointer").on("click", a.noop), b;
    }(),
        e = function () {
      var a = document.documentElement.style;
      return "behavior" in a && "fill" in a && /iemobile/i.test(navigator.userAgent);
    }(),
        f = function () {
      return !!b.PointerEvent;
    }(),
        g = function g(a, b, d) {
      var e,
          f = c.menuClass;
      b.cssArrows && (f += " " + c.menuArrowClass), e = d ? "addClass" : "removeClass", a[e](f);
    },
        h = function h(b, d) {
      return b.find("li." + d.pathClass).slice(0, d.pathLevels).addClass(d.hoverClass + " " + c.bcClass).filter(function () {
        return a(this).children(d.popUpSelector).hide().show().length;
      }).removeClass(d.pathClass);
    },
        i = function i(a, b) {
      var d = b ? "addClass" : "removeClass";
      a.children("a")[d](c.anchorClass);
    },
        j = function j(a) {
      var b = a.css("ms-touch-action"),
          c = a.css("touch-action");
      c = c || b, c = "pan-y" === c ? "auto" : "pan-y", a.css({
        "ms-touch-action": c,
        "touch-action": c
      });
    },
        k = function k(a) {
      return a.closest("." + c.menuClass);
    },
        l = function l(a) {
      return k(a).data("sfOptions");
    },
        m = function m() {
      var b = a(this),
          c = l(b);
      clearTimeout(c.sfTimer), b.siblings().superfish("hide").end().superfish("show");
    },
        n = function n(b) {
      b.retainPath = a.inArray(this[0], b.$path) > -1, this.superfish("hide"), this.parents("." + b.hoverClass).length || (b.onIdle.call(k(this)), b.$path.length && a.proxy(m, b.$path)());
    },
        o = function o() {
      var b = a(this),
          c = l(b);
      d ? a.proxy(n, b, c)() : (clearTimeout(c.sfTimer), c.sfTimer = setTimeout(a.proxy(n, b, c), c.delay));
    },
        p = function p(b) {
      var c = a(this),
          d = l(c),
          e = c.siblings(b.data.popUpSelector);
      return d.onHandleTouch.call(e) === !1 ? this : void (e.length > 0 && e.is(":hidden") && (c.one("click.superfish", !1), "MSPointerDown" === b.type || "pointerdown" === b.type ? c.trigger("focus") : a.proxy(m, c.parent("li"))()));
    },
        q = function q(b, c) {
      var g = "li:has(" + c.popUpSelector + ")";
      a.fn.hoverIntent && !c.disableHI ? b.hoverIntent(m, o, g) : b.on("mouseenter.superfish", g, m).on("mouseleave.superfish", g, o);
      var h = "MSPointerDown.superfish";
      f && (h = "pointerdown.superfish"), d || (h += " touchend.superfish"), e && (h += " mousedown.superfish"), b.on("focusin.superfish", "li", m).on("focusout.superfish", "li", o).on(h, "a", c, p);
    };

    return {
      hide: function hide(b) {
        if (this.length) {
          var c = this,
              d = l(c);
          if (!d) return this;
          var e = d.retainPath === !0 ? d.$path : "",
              f = c.find("li." + d.hoverClass).add(this).not(e).removeClass(d.hoverClass).children(d.popUpSelector),
              g = d.speedOut;
          if (b && (f.show(), g = 0), d.retainPath = !1, d.onBeforeHide.call(f) === !1) return this;
          f.stop(!0, !0).animate(d.animationOut, g, function () {
            var b = a(this);
            d.onHide.call(b);
          });
        }

        return this;
      },
      show: function show() {
        var a = l(this);
        if (!a) return this;
        var b = this.addClass(a.hoverClass),
            c = b.children(a.popUpSelector);
        return a.onBeforeShow.call(c) === !1 ? this : (c.stop(!0, !0).animate(a.animation, a.speed, function () {
          a.onShow.call(c);
        }), this);
      },
      destroy: function destroy() {
        return this.each(function () {
          var b,
              d = a(this),
              e = d.data("sfOptions");
          return e ? (b = d.find(e.popUpSelector).parent("li"), clearTimeout(e.sfTimer), g(d, e), i(b), j(d), d.off(".superfish").off(".hoverIntent"), b.children(e.popUpSelector).attr("style", function (a, b) {
            return b.replace(/display[^;]+;?/g, "");
          }), e.$path.removeClass(e.hoverClass + " " + c.bcClass).addClass(e.pathClass), d.find("." + e.hoverClass).removeClass(e.hoverClass), e.onDestroy.call(d), void d.removeData("sfOptions")) : !1;
        });
      },
      init: function init(b) {
        return this.each(function () {
          var d = a(this);
          if (d.data("sfOptions")) return !1;
          var e = a.extend({}, a.fn.superfish.defaults, b),
              f = d.find(e.popUpSelector).parent("li");
          e.$path = h(d, e), d.data("sfOptions", e), g(d, e, !0), i(f, !0), j(d), q(d, e), f.not("." + c.bcClass).superfish("hide", !0), e.onInit.call(this);
        });
      }
    };
  }();

  a.fn.superfish = function (b, d) {
    return c[b] ? c[b].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != _typeof(b) && b ? a.error("Method " + b + " does not exist on jQuery.fn.superfish") : c.init.apply(this, arguments);
  }, a.fn.superfish.defaults = {
    popUpSelector: "ul,.sf-mega",
    hoverClass: "sfHover",
    pathClass: "overrideThisToUse",
    pathLevels: 1,
    delay: 800,
    animation: {
      opacity: "show"
    },
    animationOut: {
      opacity: "hide"
    },
    speed: "normal",
    speedOut: "fast",
    cssArrows: !0,
    disableHI: !1,
    onInit: a.noop,
    onBeforeShow: a.noop,
    onShow: a.noop,
    onBeforeHide: a.noop,
    onHide: a.noop,
    onIdle: a.noop,
    onDestroy: a.noop,
    onHandleTouch: a.noop
  };
}(jQuery, window);
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54480" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","lib/superfish/superfish.min.js"], null)
//# sourceMappingURL=/superfish.min.86e7a248.js.map