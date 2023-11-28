!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t(
        require('path'),
        require('child_process'),
        require('os'),
        require('fs')
      ))
    : 'function' == typeof define && define.amd
    ? define(['path', 'child_process', 'os', 'fs'], t)
    : 'object' == typeof exports
    ? (exports['app'] = t(
        require('path'),
        require('child_process'),
        require('os'),
        require('fs')
      ))
    : (e['app'] = t(e['path'], e['child_process'], e['os'], e['fs']));
})(this, function (e, t, s, i) {
  return (e => {
    function t(i) {
      if (s[i]) return s[i].exports;
      var r = (s[i] = { i, l: !1, exports: {} });
      return e[i].call(r.exports, r, r.exports, t), (r.l = !0), r.exports;
    }
    var s = {};
    return (
      (t.m = e),
      (t.c = s),
      (t.d = (e, s, i) => {
        t.o(e, s) ||
          Object.defineProperty(e, s, {
            configurable: !1,
            enumerable: !0,
            get: i,
          });
      }),
      (t.n = e => {
        var s =
          e && e.__esModule
            ? function () {
                return e['default'];
              }
            : function () {
                return e;
              };
        return t.d(s, 'a', s), s;
      }),
      (t.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (t.p = ''),
      t((t.s = 1))
    );
  })([
    (e, t, s) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          APP: {
            NAME: 'MonokaiPro-VSCode',
            THEMES: [
              'Monokai Pro',
              'Monokai Pro (Filter Octagon)',
              'Monokai Pro (Filter Ristretto)',
              'Monokai Pro (Filter Spectrum)',
              'Monokai Pro (Filter Machine)',
              'Monokai Classic',
            ],
            DESCRIPTION:
              'Monokai Pro theme and color scheme for Visual Studio Code',
            VERSION: '1.1.13',
            AUTHOR: 'Monokai',
            CREATION_DATE: 2019,
            BUILD_DATE: '26-4-2019',
            DEBUG: !1,
            UUID: 'fd330f6f-3f41-421d-9fe5-de742d0c54c0',
            SECONDS_TO_EXPIRE: 172800,
            SECONDS_TO_EXPIRE_FAST: 86400,
            SLOW_PERIOD: 604800,
          },
        });
    },
    function (e, t, s) {
      'use strict';
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      var o = (() => {
          function e(e, t) {
            for (var s = 0; s < t.length; s++) {
              var i = t[s];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                'value' in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i);
            }
          }
          return (t, s, i) => (s && e(t.prototype, s), i && e(t, i), t);
        })(),
        a = i(s(0)),
        n = i(s(2)),
        h = s(5);
      e.exports = (function () {
        function e(t) {
          r(this, e), (this.vscode = t), (this.state = null);
        }
        return (
          o(e, [
            {
              key: 'activate',
              value(e) {
                var t = this;
                this.state = new n.default(e, this.vscode);
                var s = {
                  'monokai_pro.enter_license'() {
                    return t.enterLicense();
                  },
                  'monokai_pro.select_theme'() {
                    return t.selectTheme();
                  },
                  'monokai_pro.activate_icons'() {
                    return t.activateIcons();
                  },
                };
                Object.keys(s).forEach(i => {
                  var r = t.vscode['commands']['registerCommand'](i, s[i]);
                  e['subscriptions'].push(r);
                }),
                  this.vscode['workspace']['onDidChangeConfiguration'](() => {
                    var e = t.state.get(),
                      s = t.state.load();
                    t.state.hasActiveMonokaiProColorTheme &&
                      t.state.updateTheme(s.colorTheme, e);
                  }),
                  (this.state.hasActiveMonokaiProColorTheme ||
                    this.state.hasActiveMonokaiProIconTheme) &&
                    this.checkLicense();
              },
            },
            {
              key: 'enterLicense',
              value() {
                var e = this;
                this.vscode['window']
                  ['showInputBox']({
                    ignoreFocusOut: !0,
                    placeHolder: 'your email address',
                    prompt:
                      "Please enter the email address you've used to purchase your license (or type 'reset' to reset your license).",
                    validateInput(e) {
                      return 'reset' === e || /.+@.+\..+/i.test(e)
                        ? null
                        : 'Please enter a valid email address.';
                    },
                  })
                  .then(t => {
                    'reset' === t
                      ? (e.state.update('email', void 0),
                        e.state.update('licenseKey', void 0),
                        e.showMessageLicenseReset())
                      : t &&
                        e.vscode['window']
                          ['showInputBox']({
                            ignoreFocusOut: !0,
                            placeHolder: 'your license key',
                            prompt:
                              'Please enter your Monokai Pro license key.',
                          })
                          .then(s => {
                            s &&
                              (e.state.update('email', t),
                              e.state.update('licenseKey', s),
                              e.state.isValidLicense(t, s)
                                ? e.showMessageValidLicense()
                                : e.showMessageInvalidLicense());
                          });
                  });
              },
            },
            {
              key: 'selectTheme',
              value() {
                var e = this,
                  t = [];
                a.default.APP.THEMES.forEach(e => {
                  t.push({ label: e });
                }),
                  this.vscode['window']
                    ['showQuickPick'](t, { placeHolder: 'Monokai Pro theme' })
                    .then(t => {
                      t && e.state.updateTheme(t.label);
                    });
              },
            },
            {
              key: 'activateIcons',
              value() {
                this.vscode['workspace']
                  ['getConfiguration']('workbench')
                  ['update']('iconTheme', 'Monokai Pro Icons', !0);
              },
            },
            {
              key: 'checkLicense',
              value() {
                var e = this;
                this.state.hasValidLicense
                  ? this.state.thankYouMessageShown ||
                    this.showMessageValidLicense()
                  : this.state.isExpired &&
                    (this.state.isUsingForAWhile && Math.random() < 0.5
                      ? setTimeout(() => {
                          e.showMessageEvaluation();
                        }, 1e3 * Math.floor(120 * Math.random() + 60))
                      : this.showMessageEvaluation(),
                    this.state.update(
                      'lastTimeStamp',
                      this.state.getCurrentTimeStamp()
                    ));
              },
            },
            { key: 'deactivate', value() {} },
            {
              key: 'showMessageLicenseReset',
              value() {
                this.vscode['window']['showInformationMessage'](
                  'Monokai Pro license information is reset'
                );
              },
            },
            {
              key: 'showMessageValidLicense',
              value() {
                this.vscode['window']['showInformationMessage'](
                  'Thanks for your purchase of Monokai Pro.',
                  { modal: !0 }
                ),
                  this.state.update('thankYouMessageShown', !0);
              },
            },
            {
              key: 'showMessageInvalidLicense',
              value() {
                this.vscode['window']['showErrorMessage'](
                  'Invalid license. Please enter your email and license key exactly as in the email.'
                );
              },
            },
            {
              key: 'showMessageEvaluation',
              value() {
                var e = {
                    theme: this.state.colorTheme,
                    version: a.default.APP.VERSION,
                    name: a.default.APP.NAME,
                  },
                  t = Object.keys(e)
                    .map(t => t + '=' + encodeURIComponent(e[t]))
                    .join('&');
                this.vscode['window']
                  ['showInformationMessage'](
                    'Thank you for evaluating Monokai Pro. Please purchase a license for extended use.',
                    { modal: !0 },
                    'OK'
                  )
                  .then(e => {
                    if (e)
                      switch (e.toUpperCase()) {
                        case 'OK':
                          h('https://www.monokai.pro?=' + t);
                      }
                  });
              },
            },
            {
              key: 'unspace',
              value(e) {
                return e.replace(/ /g, '_');
              },
            },
          ]),
          e
        );
      })();
    },
    function (e, t, s) {
      'use strict';
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o = (() => {
          function e(e, t) {
            for (var s = 0; s < t.length; s++) {
              var i = t[s];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                'value' in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i);
            }
          }
          return (t, s, i) => (s && e(t.prototype, s), i && e(t, i), t);
        })(),
        a = i(s(0)),
        n = i(s(3)),
        h = (function () {
          function e(t, s) {
            r(this, e),
              (this.extensionContext = t),
              (this.vscode = s),
              (this.isFirstTime = !1),
              (this.globalState = this.extensionContext['globalState']),
              this.load();
          }
          return (
            o(e, [
              {
                key: 'loadCurrentUserSettings',
                value() {
                  var e =
                    this.vscode['workspace']['getConfiguration']('workbench');
                  (this.version = a.default.VERSION),
                    (this.colorTheme = e['colorTheme']),
                    (this.iconTheme = e['iconTheme']);
                  var t =
                    this.vscode['workspace']['getConfiguration']('monokaiPro');
                  this.fileIconsMonochrome = t['get'](
                    'fileIconsMonochrome',
                    !1
                  );
                },
              },
              {
                key: 'get',
                value() {
                  return {
                    fileIconsMonochrome: this.fileIconsMonochrome,
                    iconTheme: this.iconTheme,
                    colorTheme: this.colorTheme,
                  };
                },
              },
              {
                key: 'load',
                value() {
                  return (
                    this.loadCurrentUserSettings(),
                    (this.firstTimeStamp = this.globalState['get'](
                      'firstTimeStamp',
                      0
                    )),
                    (this.lastTimeStamp = this.globalState['get'](
                      'lastTimeStamp',
                      0
                    )),
                    this.firstTimeStamp ||
                      ((this.isFirstTime = !0),
                      (this.firstTimeStamp = this.getCurrentTimeStamp()),
                      this.update('firstTimeStamp', this.firstTimeStamp)),
                    this.lastTimeStamp ||
                      ((this.lastTimeStamp = this.getCurrentTimeStamp()),
                      this.update('lastTimeStamp', this.lastTimeStamp)),
                    (this.thankYouMessageShown = this.globalState['get'](
                      'thankYouMessageShown',
                      !1
                    )),
                    (this.email = this.globalState['get']('email', '')),
                    (this.licenseKey = this.globalState['get'](
                      'licenseKey',
                      ''
                    )),
                    this.get()
                  );
                },
              },
              {
                key: 'updateTheme',
                value(e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    s =
                      e +
                      (this.fileIconsMonochrome ? ' Monochrome ' : ' ') +
                      'Icons',
                    i =
                      this.vscode['workspace']['getConfiguration']('workbench'),
                    r = i['iconTheme'];
                  e !== t.colorTheme && i['update']('colorTheme', e, !0),
                    (this.isValidIconTheme(r) || this.isFirstTime) &&
                      s !== t.iconTheme &&
                      i['update']('iconTheme', s, !0),
                    this.load();
                },
              },
              {
                key: 'update',
                value(e, t) {
                  this.globalState['update'](e, t);
                },
              },
              {
                key: 'getCurrentTimeStamp',
                value() {
                  return Math.floor(Date.now() / 1e3);
                },
              },
              {
                key: 'isValidLicense',
                value() {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : '',
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : '';
                  return true;
                },
              },
              {
                key: 'isValidIconTheme',
                value() {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : '';
                  return a.default.APP.THEMES.includes(
                    e.replace(/ (Monochrome )?Icons$/, '')
                  );
                },
              },
              {
                key: 'hasValidLicense',
                get() {
                  return this.isValidLicense(this.email, this.licenseKey);
                },
              },
              {
                key: 'isExpired',
                get() {
                  return this.isUsingForAWhile
                    ? this.getCurrentTimeStamp() - this.lastTimeStamp >
                        a.default.APP.SECONDS_TO_EXPIRE_FAST
                    : this.getCurrentTimeStamp() - this.lastTimeStamp >
                        a.default.APP.SECONDS_TO_EXPIRE;
                },
              },
              {
                key: 'isUsingForAWhile',
                get() {
                  return (
                    this.lastTimeStamp - this.firstTimeStamp >
                    a.default.APP.SLOW_PERIOD
                  );
                },
              },
              {
                key: 'hasActiveMonokaiProColorTheme',
                get() {
                  return a.default.APP.THEMES.includes(this.colorTheme);
                },
              },
              {
                key: 'hasActiveMonokaiProIconTheme',
                get() {
                  return this.isValidIconTheme(this.iconTheme);
                },
              },
            ]),
            e
          );
        })();
      t.default = h;
    },
    function (e, t, s) {
      var i;
      !(function () {
        'use strict';
        function t(e) {
          if (e)
            (v[0] =
              v[16] =
              v[1] =
              v[2] =
              v[3] =
              v[4] =
              v[5] =
              v[6] =
              v[7] =
              v[8] =
              v[9] =
              v[10] =
              v[11] =
              v[12] =
              v[13] =
              v[14] =
              v[15] =
                0),
              (this.blocks = v),
              (this.buffer8 = g);
          else if (u) {
            var t = new ArrayBuffer(68);
            (this.buffer8 = new Uint8Array(t)),
              (this.blocks = new Uint32Array(t));
          } else
            this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          (this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = 0),
            (this.finalized = this.hashed = !1),
            (this.first = !0);
        }
        var r = 'input is invalid type',
          o = 'object' == typeof window,
          a = o ? window : {};
        a.JS_MD5_NO_WINDOW && (o = !1);
        var n = !o && 'object' == typeof self,
          h =
            !a.JS_MD5_NO_NODE_JS &&
            'object' == typeof process &&
            process.versions &&
            process.versions.node;
        h ? (a = global) : n && (a = self);
        var c = !a.JS_MD5_NO_COMMON_JS && 'object' == typeof e && e.exports,
          l = s(4),
          u = !a.JS_MD5_NO_ARRAY_BUFFER && 'undefined' != typeof ArrayBuffer,
          p = '0123456789abcdef'.split(''),
          f = [128, 32768, 8388608, -2147483648],
          d = [0, 8, 16, 24],
          m = ['hex', 'array', 'digest', 'buffer', 'arrayBuffer', 'base64'],
          y =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split(
              ''
            ),
          v = [],
          g;
        if (u) {
          var w = new ArrayBuffer(68);
          (g = new Uint8Array(w)), (v = new Uint32Array(w));
        }
        (!a.JS_MD5_NO_NODE_JS && Array.isArray) ||
          (Array.isArray = e =>
            '[object Array]' === Object.prototype.toString.call(e));
        var k = e => s => new t(!0).update(s)[e](),
          T = () => {
            var e = k('hex');
            h && (e = S(e)),
              (e.create = () => new t()),
              (e.update = t => e.create().update(t));
            for (var s = 0; s < m.length; ++s) {
              var i = m[s];
              e[i] = k(i);
            }
            return e;
          },
          S = function (e) {
            var t = eval("require('crypto')"),
              s = eval("require('buffer').Buffer"),
              i = i => {
                if ('string' == typeof i)
                  return t.createHash('md5').update(i, 'utf8').digest('hex');
                if (null === i || void 0 === i) throw r;
                return (
                  i.constructor === ArrayBuffer && (i = new Uint8Array(i)),
                  Array.isArray(i) ||
                  ArrayBuffer.isView(i) ||
                  i.constructor === s
                    ? t.createHash('md5').update(new s(i)).digest('hex')
                    : e(i)
                );
              };
            return i;
          };
        (t.prototype.update = function (e) {
          if (!this.finalized) {
            var t = 'string' != typeof e;
            if (t) {
              if (null === e || void 0 === e) throw r;
              e.constructor === a.ArrayBuffer && (e = new Uint8Array(e));
            }
            var s = e.length;
            if (
              t &&
              ('number' != typeof s ||
                (!Array.isArray(e) && (!u || !ArrayBuffer.isView(e))))
            )
              throw r;
            for (var i, o, n = 0, h = this.blocks, c = this.buffer8; n < s; ) {
              if (
                (this.hashed &&
                  ((this.hashed = !1),
                  (h[0] = h[16]),
                  (h[16] =
                    h[1] =
                    h[2] =
                    h[3] =
                    h[4] =
                    h[5] =
                    h[6] =
                    h[7] =
                    h[8] =
                    h[9] =
                    h[10] =
                    h[11] =
                    h[12] =
                    h[13] =
                    h[14] =
                    h[15] =
                      0)),
                t)
              )
                if (u) for (o = this.start; n < s && o < 64; ++n) c[o++] = e[n];
                else
                  for (o = this.start; n < s && o < 64; ++n)
                    h[o >> 2] |= e[n] << d[3 & o++];
              else if (u)
                for (o = this.start; n < s && o < 64; ++n)
                  (i = e.charCodeAt(n)) < 128
                    ? (c[o++] = i)
                    : i < 2048
                    ? ((c[o++] = 192 | (i >> 6)), (c[o++] = 128 | (63 & i)))
                    : i < 55296 || i >= 57344
                    ? ((c[o++] = 224 | (i >> 12)),
                      (c[o++] = 128 | ((i >> 6) & 63)),
                      (c[o++] = 128 | (63 & i)))
                    : ((i =
                        65536 +
                        (((1023 & i) << 10) | (1023 & e.charCodeAt(++n)))),
                      (c[o++] = 240 | (i >> 18)),
                      (c[o++] = 128 | ((i >> 12) & 63)),
                      (c[o++] = 128 | ((i >> 6) & 63)),
                      (c[o++] = 128 | (63 & i)));
              else
                for (o = this.start; n < s && o < 64; ++n)
                  (i = e.charCodeAt(n)) < 128
                    ? (h[o >> 2] |= i << d[3 & o++])
                    : i < 2048
                    ? ((h[o >> 2] |= (192 | (i >> 6)) << d[3 & o++]),
                      (h[o >> 2] |= (128 | (63 & i)) << d[3 & o++]))
                    : i < 55296 || i >= 57344
                    ? ((h[o >> 2] |= (224 | (i >> 12)) << d[3 & o++]),
                      (h[o >> 2] |= (128 | ((i >> 6) & 63)) << d[3 & o++]),
                      (h[o >> 2] |= (128 | (63 & i)) << d[3 & o++]))
                    : ((i =
                        65536 +
                        (((1023 & i) << 10) | (1023 & e.charCodeAt(++n)))),
                      (h[o >> 2] |= (240 | (i >> 18)) << d[3 & o++]),
                      (h[o >> 2] |= (128 | ((i >> 12) & 63)) << d[3 & o++]),
                      (h[o >> 2] |= (128 | ((i >> 6) & 63)) << d[3 & o++]),
                      (h[o >> 2] |= (128 | (63 & i)) << d[3 & o++]));
              (this.lastByteIndex = o),
                (this.bytes += o - this.start),
                o >= 64
                  ? ((this.start = o - 64), this.hash(), (this.hashed = !0))
                  : (this.start = o);
            }
            return this;
          }
        }),
          (t.prototype.finalize = function () {
            if (!this.finalized) {
              this.finalized = !0;
              var e = this.blocks,
                t = this.lastByteIndex;
              (e[t >> 2] |= f[3 & t]),
                t >= 56 &&
                  (this.hashed || this.hash(),
                  (e[0] = e[16]),
                  (e[16] =
                    e[1] =
                    e[2] =
                    e[3] =
                    e[4] =
                    e[5] =
                    e[6] =
                    e[7] =
                    e[8] =
                    e[9] =
                    e[10] =
                    e[11] =
                    e[12] =
                    e[13] =
                    e[14] =
                    e[15] =
                      0)),
                (e[14] = this.bytes << 3),
                this.hash();
            }
          }),
          (t.prototype.hash = function () {
            var e,
              t,
              s,
              i,
              r,
              o,
              a = this.blocks;
            this.first
              ? (t =
                  ((((t =
                    ((e =
                      ((((e = a[0] - 680876937) << 7) | (e >>> 25)) -
                        271733879) <<
                      0) ^
                      ((s =
                        ((((s =
                          (-271733879 ^
                            ((i =
                              ((((i =
                                (-1732584194 ^ (2004318071 & e)) +
                                a[1] -
                                117830708) <<
                                12) |
                                (i >>> 20)) +
                                e) <<
                              0) &
                              (-271733879 ^ e))) +
                          a[2] -
                          1126478375) <<
                          17) |
                          (s >>> 15)) +
                          i) <<
                        0) &
                        (i ^ e))) +
                    a[3] -
                    1316259209) <<
                    22) |
                    (t >>> 10)) +
                    s) <<
                  0)
              : ((e = this.h0),
                (t = this.h1),
                (s = this.h2),
                (t =
                  ((((t +=
                    ((e =
                      ((((e +=
                        ((i = this.h3) ^ (t & (s ^ i))) + a[0] - 680876936) <<
                        7) |
                        (e >>> 25)) +
                        t) <<
                      0) ^
                      ((s =
                        ((((s +=
                          (t ^
                            ((i =
                              ((((i +=
                                (s ^ (e & (t ^ s))) + a[1] - 389564586) <<
                                12) |
                                (i >>> 20)) +
                                e) <<
                              0) &
                              (e ^ t))) +
                          a[2] +
                          606105819) <<
                          17) |
                          (s >>> 15)) +
                          i) <<
                        0) &
                        (i ^ e))) +
                    a[3] -
                    1044525330) <<
                    22) |
                    (t >>> 10)) +
                    s) <<
                  0)),
              (t =
                ((((t +=
                  ((e =
                    ((((e += (i ^ (t & (s ^ i))) + a[4] - 176418897) << 7) |
                      (e >>> 25)) +
                      t) <<
                    0) ^
                    ((s =
                      ((((s +=
                        (t ^
                          ((i =
                            ((((i += (s ^ (e & (t ^ s))) + a[5] + 1200080426) <<
                              12) |
                              (i >>> 20)) +
                              e) <<
                            0) &
                            (e ^ t))) +
                        a[6] -
                        1473231341) <<
                        17) |
                        (s >>> 15)) +
                        i) <<
                      0) &
                      (i ^ e))) +
                  a[7] -
                  45705983) <<
                  22) |
                  (t >>> 10)) +
                  s) <<
                0),
              (t =
                ((((t +=
                  ((e =
                    ((((e += (i ^ (t & (s ^ i))) + a[8] + 1770035416) << 7) |
                      (e >>> 25)) +
                      t) <<
                    0) ^
                    ((s =
                      ((((s +=
                        (t ^
                          ((i =
                            ((((i += (s ^ (e & (t ^ s))) + a[9] - 1958414417) <<
                              12) |
                              (i >>> 20)) +
                              e) <<
                            0) &
                            (e ^ t))) +
                        a[10] -
                        42063) <<
                        17) |
                        (s >>> 15)) +
                        i) <<
                      0) &
                      (i ^ e))) +
                  a[11] -
                  1990404162) <<
                  22) |
                  (t >>> 10)) +
                  s) <<
                0),
              (t =
                ((((t +=
                  ((e =
                    ((((e += (i ^ (t & (s ^ i))) + a[12] + 1804603682) << 7) |
                      (e >>> 25)) +
                      t) <<
                    0) ^
                    ((s =
                      ((((s +=
                        (t ^
                          ((i =
                            ((((i += (s ^ (e & (t ^ s))) + a[13] - 40341101) <<
                              12) |
                              (i >>> 20)) +
                              e) <<
                            0) &
                            (e ^ t))) +
                        a[14] -
                        1502002290) <<
                        17) |
                        (s >>> 15)) +
                        i) <<
                      0) &
                      (i ^ e))) +
                  a[15] +
                  1236535329) <<
                  22) |
                  (t >>> 10)) +
                  s) <<
                0),
              (t =
                ((((t +=
                  ((i =
                    ((((i +=
                      (t ^
                        (s &
                          ((e =
                            ((((e += (s ^ (i & (t ^ s))) + a[1] - 165796510) <<
                              5) |
                              (e >>> 27)) +
                              t) <<
                            0) ^
                            t))) +
                      a[6] -
                      1069501632) <<
                      9) |
                      (i >>> 23)) +
                      e) <<
                    0) ^
                    (e &
                      ((s =
                        ((((s += (e ^ (t & (i ^ e))) + a[11] + 643717713) <<
                          14) |
                          (s >>> 18)) +
                          i) <<
                        0) ^
                        i))) +
                  a[0] -
                  373897302) <<
                  20) |
                  (t >>> 12)) +
                  s) <<
                0),
              (t =
                ((((t +=
                  ((i =
                    ((((i +=
                      (t ^
                        (s &
                          ((e =
                            ((((e += (s ^ (i & (t ^ s))) + a[5] - 701558691) <<
                              5) |
                              (e >>> 27)) +
                              t) <<
                            0) ^
                            t))) +
                      a[10] +
                      38016083) <<
                      9) |
                      (i >>> 23)) +
                      e) <<
                    0) ^
                    (e &
                      ((s =
                        ((((s += (e ^ (t & (i ^ e))) + a[15] - 660478335) <<
                          14) |
                          (s >>> 18)) +
                          i) <<
                        0) ^
                        i))) +
                  a[4] -
                  405537848) <<
                  20) |
                  (t >>> 12)) +
                  s) <<
                0),
              (t =
                ((((t +=
                  ((i =
                    ((((i +=
                      (t ^
                        (s &
                          ((e =
                            ((((e += (s ^ (i & (t ^ s))) + a[9] + 568446438) <<
                              5) |
                              (e >>> 27)) +
                              t) <<
                            0) ^
                            t))) +
                      a[14] -
                      1019803690) <<
                      9) |
                      (i >>> 23)) +
                      e) <<
                    0) ^
                    (e &
                      ((s =
                        ((((s += (e ^ (t & (i ^ e))) + a[3] - 187363961) <<
                          14) |
                          (s >>> 18)) +
                          i) <<
                        0) ^
                        i))) +
                  a[8] +
                  1163531501) <<
                  20) |
                  (t >>> 12)) +
                  s) <<
                0),
              (t =
                ((((t +=
                  ((i =
                    ((((i +=
                      (t ^
                        (s &
                          ((e =
                            ((((e +=
                              (s ^ (i & (t ^ s))) + a[13] - 1444681467) <<
                              5) |
                              (e >>> 27)) +
                              t) <<
                            0) ^
                            t))) +
                      a[2] -
                      51403784) <<
                      9) |
                      (i >>> 23)) +
                      e) <<
                    0) ^
                    (e &
                      ((s =
                        ((((s += (e ^ (t & (i ^ e))) + a[7] + 1735328473) <<
                          14) |
                          (s >>> 18)) +
                          i) <<
                        0) ^
                        i))) +
                  a[12] -
                  1926607734) <<
                  20) |
                  (t >>> 12)) +
                  s) <<
                0),
              (t =
                ((((t +=
                  ((o =
                    (i =
                      ((((i +=
                        ((r = t ^ s) ^
                          (e =
                            ((((e += (r ^ i) + a[5] - 378558) << 4) |
                              (e >>> 28)) +
                              t) <<
                            0)) +
                        a[8] -
                        2022574463) <<
                        11) |
                        (i >>> 21)) +
                        e) <<
                      0) ^ e) ^
                    (s =
                      ((((s += (o ^ t) + a[11] + 1839030562) << 16) |
                        (s >>> 16)) +
                        i) <<
                      0)) +
                  a[14] -
                  35309556) <<
                  23) |
                  (t >>> 9)) +
                  s) <<
                0),
              (t =
                ((((t +=
                  ((o =
                    (i =
                      ((((i +=
                        ((r = t ^ s) ^
                          (e =
                            ((((e += (r ^ i) + a[1] - 1530992060) << 4) |
                              (e >>> 28)) +
                              t) <<
                            0)) +
                        a[4] +
                        1272893353) <<
                        11) |
                        (i >>> 21)) +
                        e) <<
                      0) ^ e) ^
                    (s =
                      ((((s += (o ^ t) + a[7] - 155497632) << 16) |
                        (s >>> 16)) +
                        i) <<
                      0)) +
                  a[10] -
                  1094730640) <<
                  23) |
                  (t >>> 9)) +
                  s) <<
                0),
              (t =
                ((((t +=
                  ((o =
                    (i =
                      ((((i +=
                        ((r = t ^ s) ^
                          (e =
                            ((((e += (r ^ i) + a[13] + 681279174) << 4) |
                              (e >>> 28)) +
                              t) <<
                            0)) +
                        a[0] -
                        358537222) <<
                        11) |
                        (i >>> 21)) +
                        e) <<
                      0) ^ e) ^
                    (s =
                      ((((s += (o ^ t) + a[3] - 722521979) << 16) |
                        (s >>> 16)) +
                        i) <<
                      0)) +
                  a[6] +
                  76029189) <<
                  23) |
                  (t >>> 9)) +
                  s) <<
                0),
              (t =
                ((((t +=
                  ((o =
                    (i =
                      ((((i +=
                        ((r = t ^ s) ^
                          (e =
                            ((((e += (r ^ i) + a[9] - 640364487) << 4) |
                              (e >>> 28)) +
                              t) <<
                            0)) +
                        a[12] -
                        421815835) <<
                        11) |
                        (i >>> 21)) +
                        e) <<
                      0) ^ e) ^
                    (s =
                      ((((s += (o ^ t) + a[15] + 530742520) << 16) |
                        (s >>> 16)) +
                        i) <<
                      0)) +
                  a[2] -
                  995338651) <<
                  23) |
                  (t >>> 9)) +
                  s) <<
                0),
              (t =
                ((((t +=
                  ((i =
                    ((((i +=
                      (t ^
                        ((e =
                          ((((e += (s ^ (t | ~i)) + a[0] - 198630844) << 6) |
                            (e >>> 26)) +
                            t) <<
                          0) |
                          ~s)) +
                      a[7] +
                      1126891415) <<
                      10) |
                      (i >>> 22)) +
                      e) <<
                    0) ^
                    ((s =
                      ((((s += (e ^ (i | ~t)) + a[14] - 1416354905) << 15) |
                        (s >>> 17)) +
                        i) <<
                      0) |
                      ~e)) +
                  a[5] -
                  57434055) <<
                  21) |
                  (t >>> 11)) +
                  s) <<
                0),
              (t =
                ((((t +=
                  ((i =
                    ((((i +=
                      (t ^
                        ((e =
                          ((((e += (s ^ (t | ~i)) + a[12] + 1700485571) << 6) |
                            (e >>> 26)) +
                            t) <<
                          0) |
                          ~s)) +
                      a[3] -
                      1894986606) <<
                      10) |
                      (i >>> 22)) +
                      e) <<
                    0) ^
                    ((s =
                      ((((s += (e ^ (i | ~t)) + a[10] - 1051523) << 15) |
                        (s >>> 17)) +
                        i) <<
                      0) |
                      ~e)) +
                  a[1] -
                  2054922799) <<
                  21) |
                  (t >>> 11)) +
                  s) <<
                0),
              (t =
                ((((t +=
                  ((i =
                    ((((i +=
                      (t ^
                        ((e =
                          ((((e += (s ^ (t | ~i)) + a[8] + 1873313359) << 6) |
                            (e >>> 26)) +
                            t) <<
                          0) |
                          ~s)) +
                      a[15] -
                      30611744) <<
                      10) |
                      (i >>> 22)) +
                      e) <<
                    0) ^
                    ((s =
                      ((((s += (e ^ (i | ~t)) + a[6] - 1560198380) << 15) |
                        (s >>> 17)) +
                        i) <<
                      0) |
                      ~e)) +
                  a[13] +
                  1309151649) <<
                  21) |
                  (t >>> 11)) +
                  s) <<
                0),
              (t =
                ((((t +=
                  ((i =
                    ((((i +=
                      (t ^
                        ((e =
                          ((((e += (s ^ (t | ~i)) + a[4] - 145523070) << 6) |
                            (e >>> 26)) +
                            t) <<
                          0) |
                          ~s)) +
                      a[11] -
                      1120210379) <<
                      10) |
                      (i >>> 22)) +
                      e) <<
                    0) ^
                    ((s =
                      ((((s += (e ^ (i | ~t)) + a[2] + 718787259) << 15) |
                        (s >>> 17)) +
                        i) <<
                      0) |
                      ~e)) +
                  a[9] -
                  343485551) <<
                  21) |
                  (t >>> 11)) +
                  s) <<
                0),
              this.first
                ? ((this.h0 = (e + 1732584193) << 0),
                  (this.h1 = (t - 271733879) << 0),
                  (this.h2 = (s - 1732584194) << 0),
                  (this.h3 = (i + 271733878) << 0),
                  (this.first = !1))
                : ((this.h0 = (this.h0 + e) << 0),
                  (this.h1 = (this.h1 + t) << 0),
                  (this.h2 = (this.h2 + s) << 0),
                  (this.h3 = (this.h3 + i) << 0));
          }),
          (t.prototype.hex = function () {
            this.finalize();
            var e = this.h0,
              t = this.h1,
              s = this.h2,
              i = this.h3;
            return (
              p[(e >> 4) & 15] +
              p[15 & e] +
              p[(e >> 12) & 15] +
              p[(e >> 8) & 15] +
              p[(e >> 20) & 15] +
              p[(e >> 16) & 15] +
              p[(e >> 28) & 15] +
              p[(e >> 24) & 15] +
              p[(t >> 4) & 15] +
              p[15 & t] +
              p[(t >> 12) & 15] +
              p[(t >> 8) & 15] +
              p[(t >> 20) & 15] +
              p[(t >> 16) & 15] +
              p[(t >> 28) & 15] +
              p[(t >> 24) & 15] +
              p[(s >> 4) & 15] +
              p[15 & s] +
              p[(s >> 12) & 15] +
              p[(s >> 8) & 15] +
              p[(s >> 20) & 15] +
              p[(s >> 16) & 15] +
              p[(s >> 28) & 15] +
              p[(s >> 24) & 15] +
              p[(i >> 4) & 15] +
              p[15 & i] +
              p[(i >> 12) & 15] +
              p[(i >> 8) & 15] +
              p[(i >> 20) & 15] +
              p[(i >> 16) & 15] +
              p[(i >> 28) & 15] +
              p[(i >> 24) & 15]
            );
          }),
          (t.prototype.toString = t.prototype.hex),
          (t.prototype.digest = function () {
            this.finalize();
            var e = this.h0,
              t = this.h1,
              s = this.h2,
              i = this.h3;
            return [
              255 & e,
              (e >> 8) & 255,
              (e >> 16) & 255,
              (e >> 24) & 255,
              255 & t,
              (t >> 8) & 255,
              (t >> 16) & 255,
              (t >> 24) & 255,
              255 & s,
              (s >> 8) & 255,
              (s >> 16) & 255,
              (s >> 24) & 255,
              255 & i,
              (i >> 8) & 255,
              (i >> 16) & 255,
              (i >> 24) & 255,
            ];
          }),
          (t.prototype.array = t.prototype.digest),
          (t.prototype.arrayBuffer = function () {
            this.finalize();
            var e = new ArrayBuffer(16),
              t = new Uint32Array(e);
            return (
              (t[0] = this.h0),
              (t[1] = this.h1),
              (t[2] = this.h2),
              (t[3] = this.h3),
              e
            );
          }),
          (t.prototype.buffer = t.prototype.arrayBuffer),
          (t.prototype.base64 = function () {
            for (var e, t, s, i = '', r = this.array(), o = 0; o < 15; )
              (e = r[o++]),
                (t = r[o++]),
                (s = r[o++]),
                (i +=
                  y[e >>> 2] +
                  y[63 & ((e << 4) | (t >>> 4))] +
                  y[63 & ((t << 2) | (s >>> 6))] +
                  y[63 & s]);
            return (e = r[o]), (i += y[e >>> 2] + y[(e << 4) & 63] + '==');
          });
        var M = T();
        c
          ? (e.exports = M)
          : ((a.md5 = M),
            l &&
              void 0 !== (i = (() => M).call(M, s, M, e)) &&
              (e.exports = i));
      })();
    },
    (e, t) => {
      (t => {
        e.exports = t;
      }).call(t, {});
    },
    (e, t, s) => {
      'use strict';
      (t => {
        const i = s(6),
          r = s(7),
          o = s(8);
        e.exports = (e, s) => {
          if ('string' != typeof e)
            return Promise.reject(new Error('Expected a `target`'));
          s = Object.assign({ wait: !0 }, s);
          let a,
            n = [],
            h = [];
          const c = {};
          Array.isArray(s.app) && ((n = s.app.slice(1)), (s.app = s.app[0])),
            'darwin' === process.platform
              ? ((a = 'open'),
                s.wait && h.push('-W'),
                s.app && h.push('-a', s.app))
              : 'win32' === process.platform || o
              ? ((a = 'cmd' + (o ? '.exe' : '')),
                h.push('/c', 'start', '""'),
                (e = e.replace(/&/g, '^&')),
                s.wait && h.push('/wait'),
                s.app && h.push(s.app),
                n.length > 0 && (h = h.concat(n)))
              : ((a = s.app ? s.app : i.join(t, 'xdg-open')),
                n.length > 0 && (h = h.concat(n)),
                s.wait || (c.stdio = 'ignore')),
            h.push(e),
            'darwin' === process.platform &&
              n.length > 0 &&
              (h.push('--args'), (h = h.concat(n)));
          const l = r.spawn(a, h, c);
          return s.wait
            ? new Promise((e, t) => {
                l.once('error', t),
                  l.once('close', s => {
                    s > 0 ? t(new Error('Exited with code ' + s)) : e(l);
                  });
              })
            : (l.unref(), Promise.resolve(l));
        };
      }).call(t, '/');
    },
    (e, t) => {
      e.exports = require('path');
    },
    (e, t) => {
      e.exports = require('child_process');
    },
    (e, t, s) => {
      'use strict';
      const i = s(9),
        r = s(10),
        o = () => {
          if ('linux' !== process.platform) return !1;
          if (i.release().includes('Microsoft')) return !0;
          try {
            return r
              .readFileSync('/proc/version', 'utf8')
              .includes('Microsoft');
          } catch (e) {
            return !1;
          }
        };
      Object({ NODE_ENV: 'production' }).__IS_WSL_TEST__
        ? (e.exports = o)
        : (e.exports = o());
    },
    (e, t) => {
      e.exports = require('os');
    },
    (e, t) => {
      e.exports = require('fs');
    },
  ]);
});
