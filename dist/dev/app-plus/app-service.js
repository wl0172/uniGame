if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  const ON_SHOW = "onShow";
  const ON_HIDE = "onHide";
  const ON_LOAD = "onLoad";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onShow = /* @__PURE__ */ createHook(ON_SHOW);
  const onHide = /* @__PURE__ */ createHook(ON_HIDE);
  const onLoad = /* @__PURE__ */ createHook(ON_LOAD);
  const headerMargin = wx.getSystemInfoSync().statusBarHeight;
  wx.getSystemInfoSync().screenHeight;
  const headerHeight = 90;
  const conHeight = {
    headerHeight,
    headerMargin: headerMargin * 2
  };
  //! moment.js
  //! version : 2.29.4
  //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
  //! license : MIT
  //! momentjs.com
  var hookCallback;
  function hooks() {
    return hookCallback.apply(null, arguments);
  }
  function setHookCallback(callback) {
    hookCallback = callback;
  }
  function isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === "[object Array]";
  }
  function isObject(input) {
    return input != null && Object.prototype.toString.call(input) === "[object Object]";
  }
  function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  function isObjectEmpty(obj) {
    if (Object.getOwnPropertyNames) {
      return Object.getOwnPropertyNames(obj).length === 0;
    } else {
      var k;
      for (k in obj) {
        if (hasOwnProp(obj, k)) {
          return false;
        }
      }
      return true;
    }
  }
  function isUndefined(input) {
    return input === void 0;
  }
  function isNumber(input) {
    return typeof input === "number" || Object.prototype.toString.call(input) === "[object Number]";
  }
  function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === "[object Date]";
  }
  function map$1(arr, fn) {
    var res = [], i, arrLen = arr.length;
    for (i = 0; i < arrLen; ++i) {
      res.push(fn(arr[i], i));
    }
    return res;
  }
  function extend(a, b) {
    for (var i in b) {
      if (hasOwnProp(b, i)) {
        a[i] = b[i];
      }
    }
    if (hasOwnProp(b, "toString")) {
      a.toString = b.toString;
    }
    if (hasOwnProp(b, "valueOf")) {
      a.valueOf = b.valueOf;
    }
    return a;
  }
  function createUTC(input, format2, locale2, strict) {
    return createLocalOrUTC(input, format2, locale2, strict, true).utc();
  }
  function defaultParsingFlags() {
    return {
      empty: false,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: false,
      invalidEra: null,
      invalidMonth: null,
      invalidFormat: false,
      userInvalidated: false,
      iso: false,
      parsedDateParts: [],
      era: null,
      meridiem: null,
      rfc2822: false,
      weekdayMismatch: false
    };
  }
  function getParsingFlags(m) {
    if (m._pf == null) {
      m._pf = defaultParsingFlags();
    }
    return m._pf;
  }
  var some;
  if (Array.prototype.some) {
    some = Array.prototype.some;
  } else {
    some = function(fun) {
      var t = Object(this), len = t.length >>> 0, i;
      for (i = 0; i < len; i++) {
        if (i in t && fun.call(this, t[i], i, t)) {
          return true;
        }
      }
      return false;
    };
  }
  function isValid(m) {
    if (m._isValid == null) {
      var flags = getParsingFlags(m), parsedParts = some.call(flags.parsedDateParts, function(i) {
        return i != null;
      }), isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
      if (m._strict) {
        isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === void 0;
      }
      if (Object.isFrozen == null || !Object.isFrozen(m)) {
        m._isValid = isNowValid;
      } else {
        return isNowValid;
      }
    }
    return m._isValid;
  }
  function createInvalid(flags) {
    var m = createUTC(NaN);
    if (flags != null) {
      extend(getParsingFlags(m), flags);
    } else {
      getParsingFlags(m).userInvalidated = true;
    }
    return m;
  }
  var momentProperties = hooks.momentProperties = [], updateInProgress = false;
  function copyConfig(to2, from2) {
    var i, prop, val, momentPropertiesLen = momentProperties.length;
    if (!isUndefined(from2._isAMomentObject)) {
      to2._isAMomentObject = from2._isAMomentObject;
    }
    if (!isUndefined(from2._i)) {
      to2._i = from2._i;
    }
    if (!isUndefined(from2._f)) {
      to2._f = from2._f;
    }
    if (!isUndefined(from2._l)) {
      to2._l = from2._l;
    }
    if (!isUndefined(from2._strict)) {
      to2._strict = from2._strict;
    }
    if (!isUndefined(from2._tzm)) {
      to2._tzm = from2._tzm;
    }
    if (!isUndefined(from2._isUTC)) {
      to2._isUTC = from2._isUTC;
    }
    if (!isUndefined(from2._offset)) {
      to2._offset = from2._offset;
    }
    if (!isUndefined(from2._pf)) {
      to2._pf = getParsingFlags(from2);
    }
    if (!isUndefined(from2._locale)) {
      to2._locale = from2._locale;
    }
    if (momentPropertiesLen > 0) {
      for (i = 0; i < momentPropertiesLen; i++) {
        prop = momentProperties[i];
        val = from2[prop];
        if (!isUndefined(val)) {
          to2[prop] = val;
        }
      }
    }
    return to2;
  }
  function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (!this.isValid()) {
      this._d = new Date(NaN);
    }
    if (updateInProgress === false) {
      updateInProgress = true;
      hooks.updateOffset(this);
      updateInProgress = false;
    }
  }
  function isMoment(obj) {
    return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
  }
  function warn(msg) {
    if (hooks.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
      console.warn("Deprecation warning: " + msg);
    }
  }
  function deprecate(msg, fn) {
    var firstTime = true;
    return extend(function() {
      if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(null, msg);
      }
      if (firstTime) {
        var args = [], arg, i, key, argLen = arguments.length;
        for (i = 0; i < argLen; i++) {
          arg = "";
          if (typeof arguments[i] === "object") {
            arg += "\n[" + i + "] ";
            for (key in arguments[0]) {
              if (hasOwnProp(arguments[0], key)) {
                arg += key + ": " + arguments[0][key] + ", ";
              }
            }
            arg = arg.slice(0, -2);
          } else {
            arg = arguments[i];
          }
          args.push(arg);
        }
        warn(
          msg + "\nArguments: " + Array.prototype.slice.call(args).join("") + "\n" + new Error().stack
        );
        firstTime = false;
      }
      return fn.apply(this, arguments);
    }, fn);
  }
  var deprecations = {};
  function deprecateSimple(name, msg) {
    if (hooks.deprecationHandler != null) {
      hooks.deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
      warn(msg);
      deprecations[name] = true;
    }
  }
  hooks.suppressDeprecationWarnings = false;
  hooks.deprecationHandler = null;
  function isFunction(input) {
    return typeof Function !== "undefined" && input instanceof Function || Object.prototype.toString.call(input) === "[object Function]";
  }
  function set(config) {
    var prop, i;
    for (i in config) {
      if (hasOwnProp(config, i)) {
        prop = config[i];
        if (isFunction(prop)) {
          this[i] = prop;
        } else {
          this["_" + i] = prop;
        }
      }
    }
    this._config = config;
    this._dayOfMonthOrdinalParseLenient = new RegExp(
      (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
    );
  }
  function mergeConfigs(parentConfig, childConfig) {
    var res = extend({}, parentConfig), prop;
    for (prop in childConfig) {
      if (hasOwnProp(childConfig, prop)) {
        if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
          res[prop] = {};
          extend(res[prop], parentConfig[prop]);
          extend(res[prop], childConfig[prop]);
        } else if (childConfig[prop] != null) {
          res[prop] = childConfig[prop];
        } else {
          delete res[prop];
        }
      }
    }
    for (prop in parentConfig) {
      if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
        res[prop] = extend({}, res[prop]);
      }
    }
    return res;
  }
  function Locale(config) {
    if (config != null) {
      this.set(config);
    }
  }
  var keys;
  if (Object.keys) {
    keys = Object.keys;
  } else {
    keys = function(obj) {
      var i, res = [];
      for (i in obj) {
        if (hasOwnProp(obj, i)) {
          res.push(i);
        }
      }
      return res;
    };
  }
  var defaultCalendar = {
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    nextWeek: "dddd [at] LT",
    lastDay: "[Yesterday at] LT",
    lastWeek: "[Last] dddd [at] LT",
    sameElse: "L"
  };
  function calendar(key, mom, now2) {
    var output = this._calendar[key] || this._calendar["sameElse"];
    return isFunction(output) ? output.call(mom, now2) : output;
  }
  function zeroFill(number, targetLength, forceSign) {
    var absNumber = "" + Math.abs(number), zerosToFill = targetLength - absNumber.length, sign2 = number >= 0;
    return (sign2 ? forceSign ? "+" : "" : "-") + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
  }
  var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, formatFunctions = {}, formatTokenFunctions = {};
  function addFormatToken(token2, padded, ordinal2, callback) {
    var func = callback;
    if (typeof callback === "string") {
      func = function() {
        return this[callback]();
      };
    }
    if (token2) {
      formatTokenFunctions[token2] = func;
    }
    if (padded) {
      formatTokenFunctions[padded[0]] = function() {
        return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
      };
    }
    if (ordinal2) {
      formatTokenFunctions[ordinal2] = function() {
        return this.localeData().ordinal(
          func.apply(this, arguments),
          token2
        );
      };
    }
  }
  function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
      return input.replace(/^\[|\]$/g, "");
    }
    return input.replace(/\\/g, "");
  }
  function makeFormatFunction(format2) {
    var array = format2.match(formattingTokens), i, length;
    for (i = 0, length = array.length; i < length; i++) {
      if (formatTokenFunctions[array[i]]) {
        array[i] = formatTokenFunctions[array[i]];
      } else {
        array[i] = removeFormattingTokens(array[i]);
      }
    }
    return function(mom) {
      var output = "", i2;
      for (i2 = 0; i2 < length; i2++) {
        output += isFunction(array[i2]) ? array[i2].call(mom, format2) : array[i2];
      }
      return output;
    };
  }
  function formatMoment(m, format2) {
    if (!m.isValid()) {
      return m.localeData().invalidDate();
    }
    format2 = expandFormat(format2, m.localeData());
    formatFunctions[format2] = formatFunctions[format2] || makeFormatFunction(format2);
    return formatFunctions[format2](m);
  }
  function expandFormat(format2, locale2) {
    var i = 5;
    function replaceLongDateFormatTokens(input) {
      return locale2.longDateFormat(input) || input;
    }
    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format2)) {
      format2 = format2.replace(
        localFormattingTokens,
        replaceLongDateFormatTokens
      );
      localFormattingTokens.lastIndex = 0;
      i -= 1;
    }
    return format2;
  }
  var defaultLongDateFormat = {
    LTS: "h:mm:ss A",
    LT: "h:mm A",
    L: "MM/DD/YYYY",
    LL: "MMMM D, YYYY",
    LLL: "MMMM D, YYYY h:mm A",
    LLLL: "dddd, MMMM D, YYYY h:mm A"
  };
  function longDateFormat(key) {
    var format2 = this._longDateFormat[key], formatUpper = this._longDateFormat[key.toUpperCase()];
    if (format2 || !formatUpper) {
      return format2;
    }
    this._longDateFormat[key] = formatUpper.match(formattingTokens).map(function(tok) {
      if (tok === "MMMM" || tok === "MM" || tok === "DD" || tok === "dddd") {
        return tok.slice(1);
      }
      return tok;
    }).join("");
    return this._longDateFormat[key];
  }
  var defaultInvalidDate = "Invalid date";
  function invalidDate() {
    return this._invalidDate;
  }
  var defaultOrdinal = "%d", defaultDayOfMonthOrdinalParse = /\d{1,2}/;
  function ordinal(number) {
    return this._ordinal.replace("%d", number);
  }
  var defaultRelativeTime = {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    ss: "%d seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    w: "a week",
    ww: "%d weeks",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years"
  };
  function relativeTime(number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
  }
  function pastFuture(diff2, output) {
    var format2 = this._relativeTime[diff2 > 0 ? "future" : "past"];
    return isFunction(format2) ? format2(output) : format2.replace(/%s/i, output);
  }
  var aliases = {};
  function addUnitAlias(unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + "s"] = aliases[shorthand] = unit;
  }
  function normalizeUnits(units) {
    return typeof units === "string" ? aliases[units] || aliases[units.toLowerCase()] : void 0;
  }
  function normalizeObjectUnits(inputObject) {
    var normalizedInput = {}, normalizedProp, prop;
    for (prop in inputObject) {
      if (hasOwnProp(inputObject, prop)) {
        normalizedProp = normalizeUnits(prop);
        if (normalizedProp) {
          normalizedInput[normalizedProp] = inputObject[prop];
        }
      }
    }
    return normalizedInput;
  }
  var priorities = {};
  function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
  }
  function getPrioritizedUnits(unitsObj) {
    var units = [], u;
    for (u in unitsObj) {
      if (hasOwnProp(unitsObj, u)) {
        units.push({ unit: u, priority: priorities[u] });
      }
    }
    units.sort(function(a, b) {
      return a.priority - b.priority;
    });
    return units;
  }
  function isLeapYear(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
  }
  function absFloor(number) {
    if (number < 0) {
      return Math.ceil(number) || 0;
    } else {
      return Math.floor(number);
    }
  }
  function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion, value = 0;
    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
      value = absFloor(coercedNumber);
    }
    return value;
  }
  function makeGetSet(unit, keepTime) {
    return function(value) {
      if (value != null) {
        set$1(this, unit, value);
        hooks.updateOffset(this, keepTime);
        return this;
      } else {
        return get(this, unit);
      }
    };
  }
  function get(mom, unit) {
    return mom.isValid() ? mom._d["get" + (mom._isUTC ? "UTC" : "") + unit]() : NaN;
  }
  function set$1(mom, unit, value) {
    if (mom.isValid() && !isNaN(value)) {
      if (unit === "FullYear" && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
        value = toInt(value);
        mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](
          value,
          mom.month(),
          daysInMonth(value, mom.month())
        );
      } else {
        mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value);
      }
    }
  }
  function stringGet(units) {
    units = normalizeUnits(units);
    if (isFunction(this[units])) {
      return this[units]();
    }
    return this;
  }
  function stringSet(units, value) {
    if (typeof units === "object") {
      units = normalizeObjectUnits(units);
      var prioritized = getPrioritizedUnits(units), i, prioritizedLen = prioritized.length;
      for (i = 0; i < prioritizedLen; i++) {
        this[prioritized[i].unit](units[prioritized[i].unit]);
      }
    } else {
      units = normalizeUnits(units);
      if (isFunction(this[units])) {
        return this[units](value);
      }
    }
    return this;
  }
  var match1 = /\d/, match2 = /\d\d/, match3 = /\d{3}/, match4 = /\d{4}/, match6 = /[+-]?\d{6}/, match1to2 = /\d\d?/, match3to4 = /\d\d\d\d?/, match5to6 = /\d\d\d\d\d\d?/, match1to3 = /\d{1,3}/, match1to4 = /\d{1,4}/, match1to6 = /[+-]?\d{1,6}/, matchUnsigned = /\d+/, matchSigned = /[+-]?\d+/, matchOffset = /Z|[+-]\d\d:?\d\d/gi, matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, regexes;
  regexes = {};
  function addRegexToken(token2, regex, strictRegex) {
    regexes[token2] = isFunction(regex) ? regex : function(isStrict, localeData2) {
      return isStrict && strictRegex ? strictRegex : regex;
    };
  }
  function getParseRegexForToken(token2, config) {
    if (!hasOwnProp(regexes, token2)) {
      return new RegExp(unescapeFormat(token2));
    }
    return regexes[token2](config._strict, config._locale);
  }
  function unescapeFormat(s) {
    return regexEscape(
      s.replace("\\", "").replace(
        /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
        function(matched, p1, p2, p3, p4) {
          return p1 || p2 || p3 || p4;
        }
      )
    );
  }
  function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }
  var tokens = {};
  function addParseToken(token2, callback) {
    var i, func = callback, tokenLen;
    if (typeof token2 === "string") {
      token2 = [token2];
    }
    if (isNumber(callback)) {
      func = function(input, array) {
        array[callback] = toInt(input);
      };
    }
    tokenLen = token2.length;
    for (i = 0; i < tokenLen; i++) {
      tokens[token2[i]] = func;
    }
  }
  function addWeekParseToken(token2, callback) {
    addParseToken(token2, function(input, array, config, token3) {
      config._w = config._w || {};
      callback(input, config._w, config, token3);
    });
  }
  function addTimeToArrayFromToken(token2, input, config) {
    if (input != null && hasOwnProp(tokens, token2)) {
      tokens[token2](input, config._a, config, token2);
    }
  }
  var YEAR = 0, MONTH = 1, DATE = 2, HOUR = 3, MINUTE = 4, SECOND = 5, MILLISECOND = 6, WEEK = 7, WEEKDAY = 8;
  function mod(n, x) {
    return (n % x + x) % x;
  }
  var indexOf;
  if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
  } else {
    indexOf = function(o) {
      var i;
      for (i = 0; i < this.length; ++i) {
        if (this[i] === o) {
          return i;
        }
      }
      return -1;
    };
  }
  function daysInMonth(year, month) {
    if (isNaN(year) || isNaN(month)) {
      return NaN;
    }
    var modMonth = mod(month, 12);
    year += (month - modMonth) / 12;
    return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
  }
  addFormatToken("M", ["MM", 2], "Mo", function() {
    return this.month() + 1;
  });
  addFormatToken("MMM", 0, 0, function(format2) {
    return this.localeData().monthsShort(this, format2);
  });
  addFormatToken("MMMM", 0, 0, function(format2) {
    return this.localeData().months(this, format2);
  });
  addUnitAlias("month", "M");
  addUnitPriority("month", 8);
  addRegexToken("M", match1to2);
  addRegexToken("MM", match1to2, match2);
  addRegexToken("MMM", function(isStrict, locale2) {
    return locale2.monthsShortRegex(isStrict);
  });
  addRegexToken("MMMM", function(isStrict, locale2) {
    return locale2.monthsRegex(isStrict);
  });
  addParseToken(["M", "MM"], function(input, array) {
    array[MONTH] = toInt(input) - 1;
  });
  addParseToken(["MMM", "MMMM"], function(input, array, config, token2) {
    var month = config._locale.monthsParse(input, token2, config._strict);
    if (month != null) {
      array[MONTH] = month;
    } else {
      getParsingFlags(config).invalidMonth = input;
    }
  });
  var defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split(
    "_"
  ), defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, defaultMonthsShortRegex = matchWord, defaultMonthsRegex = matchWord;
  function localeMonths(m, format2) {
    if (!m) {
      return isArray(this._months) ? this._months : this._months["standalone"];
    }
    return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format2) ? "format" : "standalone"][m.month()];
  }
  function localeMonthsShort(m, format2) {
    if (!m) {
      return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort["standalone"];
    }
    return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format2) ? "format" : "standalone"][m.month()];
  }
  function handleStrictParse(monthName, format2, strict) {
    var i, ii, mom, llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
      for (i = 0; i < 12; ++i) {
        mom = createUTC([2e3, i]);
        this._shortMonthsParse[i] = this.monthsShort(
          mom,
          ""
        ).toLocaleLowerCase();
        this._longMonthsParse[i] = this.months(mom, "").toLocaleLowerCase();
      }
    }
    if (strict) {
      if (format2 === "MMM") {
        ii = indexOf.call(this._shortMonthsParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._longMonthsParse, llc);
        return ii !== -1 ? ii : null;
      }
    } else {
      if (format2 === "MMM") {
        ii = indexOf.call(this._shortMonthsParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._longMonthsParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._longMonthsParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._shortMonthsParse, llc);
        return ii !== -1 ? ii : null;
      }
    }
  }
  function localeMonthsParse(monthName, format2, strict) {
    var i, mom, regex;
    if (this._monthsParseExact) {
      return handleStrictParse.call(this, monthName, format2, strict);
    }
    if (!this._monthsParse) {
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
    }
    for (i = 0; i < 12; i++) {
      mom = createUTC([2e3, i]);
      if (strict && !this._longMonthsParse[i]) {
        this._longMonthsParse[i] = new RegExp(
          "^" + this.months(mom, "").replace(".", "") + "$",
          "i"
        );
        this._shortMonthsParse[i] = new RegExp(
          "^" + this.monthsShort(mom, "").replace(".", "") + "$",
          "i"
        );
      }
      if (!strict && !this._monthsParse[i]) {
        regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, "");
        this._monthsParse[i] = new RegExp(regex.replace(".", ""), "i");
      }
      if (strict && format2 === "MMMM" && this._longMonthsParse[i].test(monthName)) {
        return i;
      } else if (strict && format2 === "MMM" && this._shortMonthsParse[i].test(monthName)) {
        return i;
      } else if (!strict && this._monthsParse[i].test(monthName)) {
        return i;
      }
    }
  }
  function setMonth(mom, value) {
    var dayOfMonth;
    if (!mom.isValid()) {
      return mom;
    }
    if (typeof value === "string") {
      if (/^\d+$/.test(value)) {
        value = toInt(value);
      } else {
        value = mom.localeData().monthsParse(value);
        if (!isNumber(value)) {
          return mom;
        }
      }
    }
    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d["set" + (mom._isUTC ? "UTC" : "") + "Month"](value, dayOfMonth);
    return mom;
  }
  function getSetMonth(value) {
    if (value != null) {
      setMonth(this, value);
      hooks.updateOffset(this, true);
      return this;
    } else {
      return get(this, "Month");
    }
  }
  function getDaysInMonth() {
    return daysInMonth(this.year(), this.month());
  }
  function monthsShortRegex(isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, "_monthsRegex")) {
        computeMonthsParse.call(this);
      }
      if (isStrict) {
        return this._monthsShortStrictRegex;
      } else {
        return this._monthsShortRegex;
      }
    } else {
      if (!hasOwnProp(this, "_monthsShortRegex")) {
        this._monthsShortRegex = defaultMonthsShortRegex;
      }
      return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
    }
  }
  function monthsRegex(isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, "_monthsRegex")) {
        computeMonthsParse.call(this);
      }
      if (isStrict) {
        return this._monthsStrictRegex;
      } else {
        return this._monthsRegex;
      }
    } else {
      if (!hasOwnProp(this, "_monthsRegex")) {
        this._monthsRegex = defaultMonthsRegex;
      }
      return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
    }
  }
  function computeMonthsParse() {
    function cmpLenRev(a, b) {
      return b.length - a.length;
    }
    var shortPieces = [], longPieces = [], mixedPieces = [], i, mom;
    for (i = 0; i < 12; i++) {
      mom = createUTC([2e3, i]);
      shortPieces.push(this.monthsShort(mom, ""));
      longPieces.push(this.months(mom, ""));
      mixedPieces.push(this.months(mom, ""));
      mixedPieces.push(this.monthsShort(mom, ""));
    }
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
      shortPieces[i] = regexEscape(shortPieces[i]);
      longPieces[i] = regexEscape(longPieces[i]);
    }
    for (i = 0; i < 24; i++) {
      mixedPieces[i] = regexEscape(mixedPieces[i]);
    }
    this._monthsRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp(
      "^(" + longPieces.join("|") + ")",
      "i"
    );
    this._monthsShortStrictRegex = new RegExp(
      "^(" + shortPieces.join("|") + ")",
      "i"
    );
  }
  addFormatToken("Y", 0, 0, function() {
    var y = this.year();
    return y <= 9999 ? zeroFill(y, 4) : "+" + y;
  });
  addFormatToken(0, ["YY", 2], 0, function() {
    return this.year() % 100;
  });
  addFormatToken(0, ["YYYY", 4], 0, "year");
  addFormatToken(0, ["YYYYY", 5], 0, "year");
  addFormatToken(0, ["YYYYYY", 6, true], 0, "year");
  addUnitAlias("year", "y");
  addUnitPriority("year", 1);
  addRegexToken("Y", matchSigned);
  addRegexToken("YY", match1to2, match2);
  addRegexToken("YYYY", match1to4, match4);
  addRegexToken("YYYYY", match1to6, match6);
  addRegexToken("YYYYYY", match1to6, match6);
  addParseToken(["YYYYY", "YYYYYY"], YEAR);
  addParseToken("YYYY", function(input, array) {
    array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
  });
  addParseToken("YY", function(input, array) {
    array[YEAR] = hooks.parseTwoDigitYear(input);
  });
  addParseToken("Y", function(input, array) {
    array[YEAR] = parseInt(input, 10);
  });
  function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
  }
  hooks.parseTwoDigitYear = function(input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3);
  };
  var getSetYear = makeGetSet("FullYear", true);
  function getIsLeapYear() {
    return isLeapYear(this.year());
  }
  function createDate(y, m, d, h, M, s, ms) {
    var date;
    if (y < 100 && y >= 0) {
      date = new Date(y + 400, m, d, h, M, s, ms);
      if (isFinite(date.getFullYear())) {
        date.setFullYear(y);
      }
    } else {
      date = new Date(y, m, d, h, M, s, ms);
    }
    return date;
  }
  function createUTCDate(y) {
    var date, args;
    if (y < 100 && y >= 0) {
      args = Array.prototype.slice.call(arguments);
      args[0] = y + 400;
      date = new Date(Date.UTC.apply(null, args));
      if (isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y);
      }
    } else {
      date = new Date(Date.UTC.apply(null, arguments));
    }
    return date;
  }
  function firstWeekOffset(year, dow, doy) {
    var fwd = 7 + dow - doy, fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
    return -fwdlw + fwd - 1;
  }
  function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7, weekOffset = firstWeekOffset(year, dow, doy), dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset, resYear, resDayOfYear;
    if (dayOfYear <= 0) {
      resYear = year - 1;
      resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
      resYear = year + 1;
      resDayOfYear = dayOfYear - daysInYear(year);
    } else {
      resYear = year;
      resDayOfYear = dayOfYear;
    }
    return {
      year: resYear,
      dayOfYear: resDayOfYear
    };
  }
  function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy), week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1, resWeek, resYear;
    if (week < 1) {
      resYear = mom.year() - 1;
      resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
      resWeek = week - weeksInYear(mom.year(), dow, doy);
      resYear = mom.year() + 1;
    } else {
      resYear = mom.year();
      resWeek = week;
    }
    return {
      week: resWeek,
      year: resYear
    };
  }
  function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy), weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
  }
  addFormatToken("w", ["ww", 2], "wo", "week");
  addFormatToken("W", ["WW", 2], "Wo", "isoWeek");
  addUnitAlias("week", "w");
  addUnitAlias("isoWeek", "W");
  addUnitPriority("week", 5);
  addUnitPriority("isoWeek", 5);
  addRegexToken("w", match1to2);
  addRegexToken("ww", match1to2, match2);
  addRegexToken("W", match1to2);
  addRegexToken("WW", match1to2, match2);
  addWeekParseToken(
    ["w", "ww", "W", "WW"],
    function(input, week, config, token2) {
      week[token2.substr(0, 1)] = toInt(input);
    }
  );
  function localeWeek(mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
  }
  var defaultLocaleWeek = {
    dow: 0,
    doy: 6
  };
  function localeFirstDayOfWeek() {
    return this._week.dow;
  }
  function localeFirstDayOfYear() {
    return this._week.doy;
  }
  function getSetWeek(input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, "d");
  }
  function getSetISOWeek(input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, "d");
  }
  addFormatToken("d", 0, "do", "day");
  addFormatToken("dd", 0, 0, function(format2) {
    return this.localeData().weekdaysMin(this, format2);
  });
  addFormatToken("ddd", 0, 0, function(format2) {
    return this.localeData().weekdaysShort(this, format2);
  });
  addFormatToken("dddd", 0, 0, function(format2) {
    return this.localeData().weekdays(this, format2);
  });
  addFormatToken("e", 0, 0, "weekday");
  addFormatToken("E", 0, 0, "isoWeekday");
  addUnitAlias("day", "d");
  addUnitAlias("weekday", "e");
  addUnitAlias("isoWeekday", "E");
  addUnitPriority("day", 11);
  addUnitPriority("weekday", 11);
  addUnitPriority("isoWeekday", 11);
  addRegexToken("d", match1to2);
  addRegexToken("e", match1to2);
  addRegexToken("E", match1to2);
  addRegexToken("dd", function(isStrict, locale2) {
    return locale2.weekdaysMinRegex(isStrict);
  });
  addRegexToken("ddd", function(isStrict, locale2) {
    return locale2.weekdaysShortRegex(isStrict);
  });
  addRegexToken("dddd", function(isStrict, locale2) {
    return locale2.weekdaysRegex(isStrict);
  });
  addWeekParseToken(["dd", "ddd", "dddd"], function(input, week, config, token2) {
    var weekday = config._locale.weekdaysParse(input, token2, config._strict);
    if (weekday != null) {
      week.d = weekday;
    } else {
      getParsingFlags(config).invalidWeekday = input;
    }
  });
  addWeekParseToken(["d", "e", "E"], function(input, week, config, token2) {
    week[token2] = toInt(input);
  });
  function parseWeekday(input, locale2) {
    if (typeof input !== "string") {
      return input;
    }
    if (!isNaN(input)) {
      return parseInt(input, 10);
    }
    input = locale2.weekdaysParse(input);
    if (typeof input === "number") {
      return input;
    }
    return null;
  }
  function parseIsoWeekday(input, locale2) {
    if (typeof input === "string") {
      return locale2.weekdaysParse(input) % 7 || 7;
    }
    return isNaN(input) ? null : input;
  }
  function shiftWeekdays(ws, n) {
    return ws.slice(n, 7).concat(ws.slice(0, n));
  }
  var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), defaultWeekdaysRegex = matchWord, defaultWeekdaysShortRegex = matchWord, defaultWeekdaysMinRegex = matchWord;
  function localeWeekdays(m, format2) {
    var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format2) ? "format" : "standalone"];
    return m === true ? shiftWeekdays(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
  }
  function localeWeekdaysShort(m) {
    return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
  }
  function localeWeekdaysMin(m) {
    return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
  }
  function handleStrictParse$1(weekdayName, format2, strict) {
    var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._minWeekdaysParse = [];
      for (i = 0; i < 7; ++i) {
        mom = createUTC([2e3, 1]).day(i);
        this._minWeekdaysParse[i] = this.weekdaysMin(
          mom,
          ""
        ).toLocaleLowerCase();
        this._shortWeekdaysParse[i] = this.weekdaysShort(
          mom,
          ""
        ).toLocaleLowerCase();
        this._weekdaysParse[i] = this.weekdays(mom, "").toLocaleLowerCase();
      }
    }
    if (strict) {
      if (format2 === "dddd") {
        ii = indexOf.call(this._weekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else if (format2 === "ddd") {
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      }
    } else {
      if (format2 === "dddd") {
        ii = indexOf.call(this._weekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else if (format2 === "ddd") {
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._weekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._minWeekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._weekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      }
    }
  }
  function localeWeekdaysParse(weekdayName, format2, strict) {
    var i, mom, regex;
    if (this._weekdaysParseExact) {
      return handleStrictParse$1.call(this, weekdayName, format2, strict);
    }
    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._minWeekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._fullWeekdaysParse = [];
    }
    for (i = 0; i < 7; i++) {
      mom = createUTC([2e3, 1]).day(i);
      if (strict && !this._fullWeekdaysParse[i]) {
        this._fullWeekdaysParse[i] = new RegExp(
          "^" + this.weekdays(mom, "").replace(".", "\\.?") + "$",
          "i"
        );
        this._shortWeekdaysParse[i] = new RegExp(
          "^" + this.weekdaysShort(mom, "").replace(".", "\\.?") + "$",
          "i"
        );
        this._minWeekdaysParse[i] = new RegExp(
          "^" + this.weekdaysMin(mom, "").replace(".", "\\.?") + "$",
          "i"
        );
      }
      if (!this._weekdaysParse[i]) {
        regex = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, "");
        this._weekdaysParse[i] = new RegExp(regex.replace(".", ""), "i");
      }
      if (strict && format2 === "dddd" && this._fullWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (strict && format2 === "ddd" && this._shortWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (strict && format2 === "dd" && this._minWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
        return i;
      }
    }
  }
  function getSetDayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
      input = parseWeekday(input, this.localeData());
      return this.add(input - day, "d");
    } else {
      return day;
    }
  }
  function getSetLocaleDayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, "d");
  }
  function getSetISODayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    if (input != null) {
      var weekday = parseIsoWeekday(input, this.localeData());
      return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
      return this.day() || 7;
    }
  }
  function weekdaysRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, "_weekdaysRegex")) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysStrictRegex;
      } else {
        return this._weekdaysRegex;
      }
    } else {
      if (!hasOwnProp(this, "_weekdaysRegex")) {
        this._weekdaysRegex = defaultWeekdaysRegex;
      }
      return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
    }
  }
  function weekdaysShortRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, "_weekdaysRegex")) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysShortStrictRegex;
      } else {
        return this._weekdaysShortRegex;
      }
    } else {
      if (!hasOwnProp(this, "_weekdaysShortRegex")) {
        this._weekdaysShortRegex = defaultWeekdaysShortRegex;
      }
      return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
  }
  function weekdaysMinRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, "_weekdaysRegex")) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysMinStrictRegex;
      } else {
        return this._weekdaysMinRegex;
      }
    } else {
      if (!hasOwnProp(this, "_weekdaysMinRegex")) {
        this._weekdaysMinRegex = defaultWeekdaysMinRegex;
      }
      return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
  }
  function computeWeekdaysParse() {
    function cmpLenRev(a, b) {
      return b.length - a.length;
    }
    var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [], i, mom, minp, shortp, longp;
    for (i = 0; i < 7; i++) {
      mom = createUTC([2e3, 1]).day(i);
      minp = regexEscape(this.weekdaysMin(mom, ""));
      shortp = regexEscape(this.weekdaysShort(mom, ""));
      longp = regexEscape(this.weekdays(mom, ""));
      minPieces.push(minp);
      shortPieces.push(shortp);
      longPieces.push(longp);
      mixedPieces.push(minp);
      mixedPieces.push(shortp);
      mixedPieces.push(longp);
    }
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    this._weekdaysRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;
    this._weekdaysStrictRegex = new RegExp(
      "^(" + longPieces.join("|") + ")",
      "i"
    );
    this._weekdaysShortStrictRegex = new RegExp(
      "^(" + shortPieces.join("|") + ")",
      "i"
    );
    this._weekdaysMinStrictRegex = new RegExp(
      "^(" + minPieces.join("|") + ")",
      "i"
    );
  }
  function hFormat() {
    return this.hours() % 12 || 12;
  }
  function kFormat() {
    return this.hours() || 24;
  }
  addFormatToken("H", ["HH", 2], 0, "hour");
  addFormatToken("h", ["hh", 2], 0, hFormat);
  addFormatToken("k", ["kk", 2], 0, kFormat);
  addFormatToken("hmm", 0, 0, function() {
    return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2);
  });
  addFormatToken("hmmss", 0, 0, function() {
    return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
  });
  addFormatToken("Hmm", 0, 0, function() {
    return "" + this.hours() + zeroFill(this.minutes(), 2);
  });
  addFormatToken("Hmmss", 0, 0, function() {
    return "" + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
  });
  function meridiem(token2, lowercase) {
    addFormatToken(token2, 0, 0, function() {
      return this.localeData().meridiem(
        this.hours(),
        this.minutes(),
        lowercase
      );
    });
  }
  meridiem("a", true);
  meridiem("A", false);
  addUnitAlias("hour", "h");
  addUnitPriority("hour", 13);
  function matchMeridiem(isStrict, locale2) {
    return locale2._meridiemParse;
  }
  addRegexToken("a", matchMeridiem);
  addRegexToken("A", matchMeridiem);
  addRegexToken("H", match1to2);
  addRegexToken("h", match1to2);
  addRegexToken("k", match1to2);
  addRegexToken("HH", match1to2, match2);
  addRegexToken("hh", match1to2, match2);
  addRegexToken("kk", match1to2, match2);
  addRegexToken("hmm", match3to4);
  addRegexToken("hmmss", match5to6);
  addRegexToken("Hmm", match3to4);
  addRegexToken("Hmmss", match5to6);
  addParseToken(["H", "HH"], HOUR);
  addParseToken(["k", "kk"], function(input, array, config) {
    var kInput = toInt(input);
    array[HOUR] = kInput === 24 ? 0 : kInput;
  });
  addParseToken(["a", "A"], function(input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
  });
  addParseToken(["h", "hh"], function(input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
  });
  addParseToken("hmm", function(input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
  });
  addParseToken("hmmss", function(input, array, config) {
    var pos1 = input.length - 4, pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
  });
  addParseToken("Hmm", function(input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
  });
  addParseToken("Hmmss", function(input, array, config) {
    var pos1 = input.length - 4, pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
  });
  function localeIsPM(input) {
    return (input + "").toLowerCase().charAt(0) === "p";
  }
  var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i, getSetHour = makeGetSet("Hours", true);
  function localeMeridiem(hours2, minutes2, isLower) {
    if (hours2 > 11) {
      return isLower ? "pm" : "PM";
    } else {
      return isLower ? "am" : "AM";
    }
  }
  var baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
    relativeTime: defaultRelativeTime,
    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,
    week: defaultLocaleWeek,
    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,
    meridiemParse: defaultLocaleMeridiemParse
  };
  var locales = {}, localeFamilies = {}, globalLocale;
  function commonPrefix(arr1, arr2) {
    var i, minl = Math.min(arr1.length, arr2.length);
    for (i = 0; i < minl; i += 1) {
      if (arr1[i] !== arr2[i]) {
        return i;
      }
    }
    return minl;
  }
  function normalizeLocale(key) {
    return key ? key.toLowerCase().replace("_", "-") : key;
  }
  function chooseLocale(names) {
    var i = 0, j, next, locale2, split;
    while (i < names.length) {
      split = normalizeLocale(names[i]).split("-");
      j = split.length;
      next = normalizeLocale(names[i + 1]);
      next = next ? next.split("-") : null;
      while (j > 0) {
        locale2 = loadLocale(split.slice(0, j).join("-"));
        if (locale2) {
          return locale2;
        }
        if (next && next.length >= j && commonPrefix(split, next) >= j - 1) {
          break;
        }
        j--;
      }
      i++;
    }
    return globalLocale;
  }
  function isLocaleNameSane(name) {
    return name.match("^[^/\\\\]*$") != null;
  }
  function loadLocale(name) {
    var oldLocale = null, aliasedRequire;
    if (locales[name] === void 0 && typeof module !== "undefined" && module && module.exports && isLocaleNameSane(name)) {
      try {
        oldLocale = globalLocale._abbr;
        aliasedRequire = require;
        aliasedRequire("./locale/" + name);
        getSetGlobalLocale(oldLocale);
      } catch (e) {
        locales[name] = null;
      }
    }
    return locales[name];
  }
  function getSetGlobalLocale(key, values) {
    var data;
    if (key) {
      if (isUndefined(values)) {
        data = getLocale(key);
      } else {
        data = defineLocale(key, values);
      }
      if (data) {
        globalLocale = data;
      } else {
        if (typeof console !== "undefined" && console.warn) {
          console.warn(
            "Locale " + key + " not found. Did you forget to load it?"
          );
        }
      }
    }
    return globalLocale._abbr;
  }
  function defineLocale(name, config) {
    if (config !== null) {
      var locale2, parentConfig = baseConfig;
      config.abbr = name;
      if (locales[name] != null) {
        deprecateSimple(
          "defineLocaleOverride",
          "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
        );
        parentConfig = locales[name]._config;
      } else if (config.parentLocale != null) {
        if (locales[config.parentLocale] != null) {
          parentConfig = locales[config.parentLocale]._config;
        } else {
          locale2 = loadLocale(config.parentLocale);
          if (locale2 != null) {
            parentConfig = locale2._config;
          } else {
            if (!localeFamilies[config.parentLocale]) {
              localeFamilies[config.parentLocale] = [];
            }
            localeFamilies[config.parentLocale].push({
              name,
              config
            });
            return null;
          }
        }
      }
      locales[name] = new Locale(mergeConfigs(parentConfig, config));
      if (localeFamilies[name]) {
        localeFamilies[name].forEach(function(x) {
          defineLocale(x.name, x.config);
        });
      }
      getSetGlobalLocale(name);
      return locales[name];
    } else {
      delete locales[name];
      return null;
    }
  }
  function updateLocale(name, config) {
    if (config != null) {
      var locale2, tmpLocale, parentConfig = baseConfig;
      if (locales[name] != null && locales[name].parentLocale != null) {
        locales[name].set(mergeConfigs(locales[name]._config, config));
      } else {
        tmpLocale = loadLocale(name);
        if (tmpLocale != null) {
          parentConfig = tmpLocale._config;
        }
        config = mergeConfigs(parentConfig, config);
        if (tmpLocale == null) {
          config.abbr = name;
        }
        locale2 = new Locale(config);
        locale2.parentLocale = locales[name];
        locales[name] = locale2;
      }
      getSetGlobalLocale(name);
    } else {
      if (locales[name] != null) {
        if (locales[name].parentLocale != null) {
          locales[name] = locales[name].parentLocale;
          if (name === getSetGlobalLocale()) {
            getSetGlobalLocale(name);
          }
        } else if (locales[name] != null) {
          delete locales[name];
        }
      }
    }
    return locales[name];
  }
  function getLocale(key) {
    var locale2;
    if (key && key._locale && key._locale._abbr) {
      key = key._locale._abbr;
    }
    if (!key) {
      return globalLocale;
    }
    if (!isArray(key)) {
      locale2 = loadLocale(key);
      if (locale2) {
        return locale2;
      }
      key = [key];
    }
    return chooseLocale(key);
  }
  function listLocales() {
    return keys(locales);
  }
  function checkOverflow(m) {
    var overflow, a = m._a;
    if (a && getParsingFlags(m).overflow === -2) {
      overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
      if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
        overflow = DATE;
      }
      if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
        overflow = WEEK;
      }
      if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
        overflow = WEEKDAY;
      }
      getParsingFlags(m).overflow = overflow;
    }
    return m;
  }
  var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tzRegex = /Z|[+-]\d\d(?::?\d\d)?/, isoDates = [
    ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
    ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
    ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
    ["GGGG-[W]WW", /\d{4}-W\d\d/, false],
    ["YYYY-DDD", /\d{4}-\d{3}/],
    ["YYYY-MM", /\d{4}-\d\d/, false],
    ["YYYYYYMMDD", /[+-]\d{10}/],
    ["YYYYMMDD", /\d{8}/],
    ["GGGG[W]WWE", /\d{4}W\d{3}/],
    ["GGGG[W]WW", /\d{4}W\d{2}/, false],
    ["YYYYDDD", /\d{7}/],
    ["YYYYMM", /\d{6}/, false],
    ["YYYY", /\d{4}/, false]
  ], isoTimes = [
    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
    ["HH:mm", /\d\d:\d\d/],
    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
    ["HHmmss", /\d\d\d\d\d\d/],
    ["HHmm", /\d\d\d\d/],
    ["HH", /\d\d/]
  ], aspNetJsonRegex = /^\/?Date\((-?\d+)/i, rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, obsOffsets = {
    UT: 0,
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60
  };
  function configFromISO(config) {
    var i, l, string = config._i, match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string), allowTime, dateFormat, timeFormat, tzFormat, isoDatesLen = isoDates.length, isoTimesLen = isoTimes.length;
    if (match) {
      getParsingFlags(config).iso = true;
      for (i = 0, l = isoDatesLen; i < l; i++) {
        if (isoDates[i][1].exec(match[1])) {
          dateFormat = isoDates[i][0];
          allowTime = isoDates[i][2] !== false;
          break;
        }
      }
      if (dateFormat == null) {
        config._isValid = false;
        return;
      }
      if (match[3]) {
        for (i = 0, l = isoTimesLen; i < l; i++) {
          if (isoTimes[i][1].exec(match[3])) {
            timeFormat = (match[2] || " ") + isoTimes[i][0];
            break;
          }
        }
        if (timeFormat == null) {
          config._isValid = false;
          return;
        }
      }
      if (!allowTime && timeFormat != null) {
        config._isValid = false;
        return;
      }
      if (match[4]) {
        if (tzRegex.exec(match[4])) {
          tzFormat = "Z";
        } else {
          config._isValid = false;
          return;
        }
      }
      config._f = dateFormat + (timeFormat || "") + (tzFormat || "");
      configFromStringAndFormat(config);
    } else {
      config._isValid = false;
    }
  }
  function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
    var result = [
      untruncateYear(yearStr),
      defaultLocaleMonthsShort.indexOf(monthStr),
      parseInt(dayStr, 10),
      parseInt(hourStr, 10),
      parseInt(minuteStr, 10)
    ];
    if (secondStr) {
      result.push(parseInt(secondStr, 10));
    }
    return result;
  }
  function untruncateYear(yearStr) {
    var year = parseInt(yearStr, 10);
    if (year <= 49) {
      return 2e3 + year;
    } else if (year <= 999) {
      return 1900 + year;
    }
    return year;
  }
  function preprocessRFC2822(s) {
    return s.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
  }
  function checkWeekday(weekdayStr, parsedInput, config) {
    if (weekdayStr) {
      var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr), weekdayActual = new Date(
        parsedInput[0],
        parsedInput[1],
        parsedInput[2]
      ).getDay();
      if (weekdayProvided !== weekdayActual) {
        getParsingFlags(config).weekdayMismatch = true;
        config._isValid = false;
        return false;
      }
    }
    return true;
  }
  function calculateOffset(obsOffset, militaryOffset, numOffset) {
    if (obsOffset) {
      return obsOffsets[obsOffset];
    } else if (militaryOffset) {
      return 0;
    } else {
      var hm = parseInt(numOffset, 10), m = hm % 100, h = (hm - m) / 100;
      return h * 60 + m;
    }
  }
  function configFromRFC2822(config) {
    var match = rfc2822.exec(preprocessRFC2822(config._i)), parsedArray;
    if (match) {
      parsedArray = extractFromRFC2822Strings(
        match[4],
        match[3],
        match[2],
        match[5],
        match[6],
        match[7]
      );
      if (!checkWeekday(match[1], parsedArray, config)) {
        return;
      }
      config._a = parsedArray;
      config._tzm = calculateOffset(match[8], match[9], match[10]);
      config._d = createUTCDate.apply(null, config._a);
      config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
      getParsingFlags(config).rfc2822 = true;
    } else {
      config._isValid = false;
    }
  }
  function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);
    if (matched !== null) {
      config._d = new Date(+matched[1]);
      return;
    }
    configFromISO(config);
    if (config._isValid === false) {
      delete config._isValid;
    } else {
      return;
    }
    configFromRFC2822(config);
    if (config._isValid === false) {
      delete config._isValid;
    } else {
      return;
    }
    if (config._strict) {
      config._isValid = false;
    } else {
      hooks.createFromInputFallback(config);
    }
  }
  hooks.createFromInputFallback = deprecate(
    "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
    function(config) {
      config._d = new Date(config._i + (config._useUTC ? " UTC" : ""));
    }
  );
  function defaults(a, b, c) {
    if (a != null) {
      return a;
    }
    if (b != null) {
      return b;
    }
    return c;
  }
  function currentDateArray(config) {
    var nowValue = new Date(hooks.now());
    if (config._useUTC) {
      return [
        nowValue.getUTCFullYear(),
        nowValue.getUTCMonth(),
        nowValue.getUTCDate()
      ];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
  }
  function configFromArray(config) {
    var i, date, input = [], currentDate, expectedWeekday, yearToUse;
    if (config._d) {
      return;
    }
    currentDate = currentDateArray(config);
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
      dayOfYearFromWeekInfo(config);
    }
    if (config._dayOfYear != null) {
      yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
      if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
        getParsingFlags(config)._overflowDayOfYear = true;
      }
      date = createUTCDate(yearToUse, 0, config._dayOfYear);
      config._a[MONTH] = date.getUTCMonth();
      config._a[DATE] = date.getUTCDate();
    }
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
      config._a[i] = input[i] = currentDate[i];
    }
    for (; i < 7; i++) {
      config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
    }
    if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
      config._nextDay = true;
      config._a[HOUR] = 0;
    }
    config._d = (config._useUTC ? createUTCDate : createDate).apply(
      null,
      input
    );
    expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
    if (config._tzm != null) {
      config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }
    if (config._nextDay) {
      config._a[HOUR] = 24;
    }
    if (config._w && typeof config._w.d !== "undefined" && config._w.d !== expectedWeekday) {
      getParsingFlags(config).weekdayMismatch = true;
    }
  }
  function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
      dow = 1;
      doy = 4;
      weekYear = defaults(
        w.GG,
        config._a[YEAR],
        weekOfYear(createLocal(), 1, 4).year
      );
      week = defaults(w.W, 1);
      weekday = defaults(w.E, 1);
      if (weekday < 1 || weekday > 7) {
        weekdayOverflow = true;
      }
    } else {
      dow = config._locale._week.dow;
      doy = config._locale._week.doy;
      curWeek = weekOfYear(createLocal(), dow, doy);
      weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);
      week = defaults(w.w, curWeek.week);
      if (w.d != null) {
        weekday = w.d;
        if (weekday < 0 || weekday > 6) {
          weekdayOverflow = true;
        }
      } else if (w.e != null) {
        weekday = w.e + dow;
        if (w.e < 0 || w.e > 6) {
          weekdayOverflow = true;
        }
      } else {
        weekday = dow;
      }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
      getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
      getParsingFlags(config)._overflowWeekday = true;
    } else {
      temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
      config._a[YEAR] = temp.year;
      config._dayOfYear = temp.dayOfYear;
    }
  }
  hooks.ISO_8601 = function() {
  };
  hooks.RFC_2822 = function() {
  };
  function configFromStringAndFormat(config) {
    if (config._f === hooks.ISO_8601) {
      configFromISO(config);
      return;
    }
    if (config._f === hooks.RFC_2822) {
      configFromRFC2822(config);
      return;
    }
    config._a = [];
    getParsingFlags(config).empty = true;
    var string = "" + config._i, i, parsedInput, tokens2, token2, skipped, stringLength = string.length, totalParsedInputLength = 0, era, tokenLen;
    tokens2 = expandFormat(config._f, config._locale).match(formattingTokens) || [];
    tokenLen = tokens2.length;
    for (i = 0; i < tokenLen; i++) {
      token2 = tokens2[i];
      parsedInput = (string.match(getParseRegexForToken(token2, config)) || [])[0];
      if (parsedInput) {
        skipped = string.substr(0, string.indexOf(parsedInput));
        if (skipped.length > 0) {
          getParsingFlags(config).unusedInput.push(skipped);
        }
        string = string.slice(
          string.indexOf(parsedInput) + parsedInput.length
        );
        totalParsedInputLength += parsedInput.length;
      }
      if (formatTokenFunctions[token2]) {
        if (parsedInput) {
          getParsingFlags(config).empty = false;
        } else {
          getParsingFlags(config).unusedTokens.push(token2);
        }
        addTimeToArrayFromToken(token2, parsedInput, config);
      } else if (config._strict && !parsedInput) {
        getParsingFlags(config).unusedTokens.push(token2);
      }
    }
    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
    if (string.length > 0) {
      getParsingFlags(config).unusedInput.push(string);
    }
    if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
      getParsingFlags(config).bigHour = void 0;
    }
    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem;
    config._a[HOUR] = meridiemFixWrap(
      config._locale,
      config._a[HOUR],
      config._meridiem
    );
    era = getParsingFlags(config).era;
    if (era !== null) {
      config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
    }
    configFromArray(config);
    checkOverflow(config);
  }
  function meridiemFixWrap(locale2, hour, meridiem2) {
    var isPm;
    if (meridiem2 == null) {
      return hour;
    }
    if (locale2.meridiemHour != null) {
      return locale2.meridiemHour(hour, meridiem2);
    } else if (locale2.isPM != null) {
      isPm = locale2.isPM(meridiem2);
      if (isPm && hour < 12) {
        hour += 12;
      }
      if (!isPm && hour === 12) {
        hour = 0;
      }
      return hour;
    } else {
      return hour;
    }
  }
  function configFromStringAndArray(config) {
    var tempConfig, bestMoment, scoreToBeat, i, currentScore, validFormatFound, bestFormatIsValid = false, configfLen = config._f.length;
    if (configfLen === 0) {
      getParsingFlags(config).invalidFormat = true;
      config._d = new Date(NaN);
      return;
    }
    for (i = 0; i < configfLen; i++) {
      currentScore = 0;
      validFormatFound = false;
      tempConfig = copyConfig({}, config);
      if (config._useUTC != null) {
        tempConfig._useUTC = config._useUTC;
      }
      tempConfig._f = config._f[i];
      configFromStringAndFormat(tempConfig);
      if (isValid(tempConfig)) {
        validFormatFound = true;
      }
      currentScore += getParsingFlags(tempConfig).charsLeftOver;
      currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
      getParsingFlags(tempConfig).score = currentScore;
      if (!bestFormatIsValid) {
        if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
          scoreToBeat = currentScore;
          bestMoment = tempConfig;
          if (validFormatFound) {
            bestFormatIsValid = true;
          }
        }
      } else {
        if (currentScore < scoreToBeat) {
          scoreToBeat = currentScore;
          bestMoment = tempConfig;
        }
      }
    }
    extend(config, bestMoment || tempConfig);
  }
  function configFromObject(config) {
    if (config._d) {
      return;
    }
    var i = normalizeObjectUnits(config._i), dayOrDate = i.day === void 0 ? i.date : i.day;
    config._a = map$1(
      [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
      function(obj) {
        return obj && parseInt(obj, 10);
      }
    );
    configFromArray(config);
  }
  function createFromConfig(config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));
    if (res._nextDay) {
      res.add(1, "d");
      res._nextDay = void 0;
    }
    return res;
  }
  function prepareConfig(config) {
    var input = config._i, format2 = config._f;
    config._locale = config._locale || getLocale(config._l);
    if (input === null || format2 === void 0 && input === "") {
      return createInvalid({ nullInput: true });
    }
    if (typeof input === "string") {
      config._i = input = config._locale.preparse(input);
    }
    if (isMoment(input)) {
      return new Moment(checkOverflow(input));
    } else if (isDate(input)) {
      config._d = input;
    } else if (isArray(format2)) {
      configFromStringAndArray(config);
    } else if (format2) {
      configFromStringAndFormat(config);
    } else {
      configFromInput(config);
    }
    if (!isValid(config)) {
      config._d = null;
    }
    return config;
  }
  function configFromInput(config) {
    var input = config._i;
    if (isUndefined(input)) {
      config._d = new Date(hooks.now());
    } else if (isDate(input)) {
      config._d = new Date(input.valueOf());
    } else if (typeof input === "string") {
      configFromString(config);
    } else if (isArray(input)) {
      config._a = map$1(input.slice(0), function(obj) {
        return parseInt(obj, 10);
      });
      configFromArray(config);
    } else if (isObject(input)) {
      configFromObject(config);
    } else if (isNumber(input)) {
      config._d = new Date(input);
    } else {
      hooks.createFromInputFallback(config);
    }
  }
  function createLocalOrUTC(input, format2, locale2, strict, isUTC) {
    var c = {};
    if (format2 === true || format2 === false) {
      strict = format2;
      format2 = void 0;
    }
    if (locale2 === true || locale2 === false) {
      strict = locale2;
      locale2 = void 0;
    }
    if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
      input = void 0;
    }
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale2;
    c._i = input;
    c._f = format2;
    c._strict = strict;
    return createFromConfig(c);
  }
  function createLocal(input, format2, locale2, strict) {
    return createLocalOrUTC(input, format2, locale2, strict, false);
  }
  var prototypeMin = deprecate(
    "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
    function() {
      var other = createLocal.apply(null, arguments);
      if (this.isValid() && other.isValid()) {
        return other < this ? this : other;
      } else {
        return createInvalid();
      }
    }
  ), prototypeMax = deprecate(
    "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
    function() {
      var other = createLocal.apply(null, arguments);
      if (this.isValid() && other.isValid()) {
        return other > this ? this : other;
      } else {
        return createInvalid();
      }
    }
  );
  function pickBy(fn, moments) {
    var res, i;
    if (moments.length === 1 && isArray(moments[0])) {
      moments = moments[0];
    }
    if (!moments.length) {
      return createLocal();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
      if (!moments[i].isValid() || moments[i][fn](res)) {
        res = moments[i];
      }
    }
    return res;
  }
  function min() {
    var args = [].slice.call(arguments, 0);
    return pickBy("isBefore", args);
  }
  function max() {
    var args = [].slice.call(arguments, 0);
    return pickBy("isAfter", args);
  }
  var now = function() {
    return Date.now ? Date.now() : +new Date();
  };
  var ordering = [
    "year",
    "quarter",
    "month",
    "week",
    "day",
    "hour",
    "minute",
    "second",
    "millisecond"
  ];
  function isDurationValid(m) {
    var key, unitHasDecimal = false, i, orderLen = ordering.length;
    for (key in m) {
      if (hasOwnProp(m, key) && !(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
        return false;
      }
    }
    for (i = 0; i < orderLen; ++i) {
      if (m[ordering[i]]) {
        if (unitHasDecimal) {
          return false;
        }
        if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
          unitHasDecimal = true;
        }
      }
    }
    return true;
  }
  function isValid$1() {
    return this._isValid;
  }
  function createInvalid$1() {
    return createDuration(NaN);
  }
  function Duration(duration) {
    var normalizedInput = normalizeObjectUnits(duration), years2 = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months2 = normalizedInput.month || 0, weeks2 = normalizedInput.week || normalizedInput.isoWeek || 0, days2 = normalizedInput.day || 0, hours2 = normalizedInput.hour || 0, minutes2 = normalizedInput.minute || 0, seconds2 = normalizedInput.second || 0, milliseconds2 = normalizedInput.millisecond || 0;
    this._isValid = isDurationValid(normalizedInput);
    this._milliseconds = +milliseconds2 + seconds2 * 1e3 + minutes2 * 6e4 + hours2 * 1e3 * 60 * 60;
    this._days = +days2 + weeks2 * 7;
    this._months = +months2 + quarters * 3 + years2 * 12;
    this._data = {};
    this._locale = getLocale();
    this._bubble();
  }
  function isDuration(obj) {
    return obj instanceof Duration;
  }
  function absRound(number) {
    if (number < 0) {
      return Math.round(-1 * number) * -1;
    } else {
      return Math.round(number);
    }
  }
  function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i;
    for (i = 0; i < len; i++) {
      if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
        diffs++;
      }
    }
    return diffs + lengthDiff;
  }
  function offset(token2, separator) {
    addFormatToken(token2, 0, 0, function() {
      var offset2 = this.utcOffset(), sign2 = "+";
      if (offset2 < 0) {
        offset2 = -offset2;
        sign2 = "-";
      }
      return sign2 + zeroFill(~~(offset2 / 60), 2) + separator + zeroFill(~~offset2 % 60, 2);
    });
  }
  offset("Z", ":");
  offset("ZZ", "");
  addRegexToken("Z", matchShortOffset);
  addRegexToken("ZZ", matchShortOffset);
  addParseToken(["Z", "ZZ"], function(input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
  });
  var chunkOffset = /([\+\-]|\d\d)/gi;
  function offsetFromString(matcher, string) {
    var matches = (string || "").match(matcher), chunk, parts, minutes2;
    if (matches === null) {
      return null;
    }
    chunk = matches[matches.length - 1] || [];
    parts = (chunk + "").match(chunkOffset) || ["-", 0, 0];
    minutes2 = +(parts[1] * 60) + toInt(parts[2]);
    return minutes2 === 0 ? 0 : parts[0] === "+" ? minutes2 : -minutes2;
  }
  function cloneWithOffset(input, model) {
    var res, diff2;
    if (model._isUTC) {
      res = model.clone();
      diff2 = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
      res._d.setTime(res._d.valueOf() + diff2);
      hooks.updateOffset(res, false);
      return res;
    } else {
      return createLocal(input).local();
    }
  }
  function getDateOffset(m) {
    return -Math.round(m._d.getTimezoneOffset());
  }
  hooks.updateOffset = function() {
  };
  function getSetOffset(input, keepLocalTime, keepMinutes) {
    var offset2 = this._offset || 0, localAdjust;
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    if (input != null) {
      if (typeof input === "string") {
        input = offsetFromString(matchShortOffset, input);
        if (input === null) {
          return this;
        }
      } else if (Math.abs(input) < 16 && !keepMinutes) {
        input = input * 60;
      }
      if (!this._isUTC && keepLocalTime) {
        localAdjust = getDateOffset(this);
      }
      this._offset = input;
      this._isUTC = true;
      if (localAdjust != null) {
        this.add(localAdjust, "m");
      }
      if (offset2 !== input) {
        if (!keepLocalTime || this._changeInProgress) {
          addSubtract(
            this,
            createDuration(input - offset2, "m"),
            1,
            false
          );
        } else if (!this._changeInProgress) {
          this._changeInProgress = true;
          hooks.updateOffset(this, true);
          this._changeInProgress = null;
        }
      }
      return this;
    } else {
      return this._isUTC ? offset2 : getDateOffset(this);
    }
  }
  function getSetZone(input, keepLocalTime) {
    if (input != null) {
      if (typeof input !== "string") {
        input = -input;
      }
      this.utcOffset(input, keepLocalTime);
      return this;
    } else {
      return -this.utcOffset();
    }
  }
  function setOffsetToUTC(keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
  }
  function setOffsetToLocal(keepLocalTime) {
    if (this._isUTC) {
      this.utcOffset(0, keepLocalTime);
      this._isUTC = false;
      if (keepLocalTime) {
        this.subtract(getDateOffset(this), "m");
      }
    }
    return this;
  }
  function setOffsetToParsedOffset() {
    if (this._tzm != null) {
      this.utcOffset(this._tzm, false, true);
    } else if (typeof this._i === "string") {
      var tZone = offsetFromString(matchOffset, this._i);
      if (tZone != null) {
        this.utcOffset(tZone);
      } else {
        this.utcOffset(0, true);
      }
    }
    return this;
  }
  function hasAlignedHourOffset(input) {
    if (!this.isValid()) {
      return false;
    }
    input = input ? createLocal(input).utcOffset() : 0;
    return (this.utcOffset() - input) % 60 === 0;
  }
  function isDaylightSavingTime() {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
  }
  function isDaylightSavingTimeShifted() {
    if (!isUndefined(this._isDSTShifted)) {
      return this._isDSTShifted;
    }
    var c = {}, other;
    copyConfig(c, this);
    c = prepareConfig(c);
    if (c._a) {
      other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
      this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
    } else {
      this._isDSTShifted = false;
    }
    return this._isDSTShifted;
  }
  function isLocal() {
    return this.isValid() ? !this._isUTC : false;
  }
  function isUtcOffset() {
    return this.isValid() ? this._isUTC : false;
  }
  function isUtc() {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
  }
  var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
  function createDuration(input, key) {
    var duration = input, match = null, sign2, ret, diffRes;
    if (isDuration(input)) {
      duration = {
        ms: input._milliseconds,
        d: input._days,
        M: input._months
      };
    } else if (isNumber(input) || !isNaN(+input)) {
      duration = {};
      if (key) {
        duration[key] = +input;
      } else {
        duration.milliseconds = +input;
      }
    } else if (match = aspNetRegex.exec(input)) {
      sign2 = match[1] === "-" ? -1 : 1;
      duration = {
        y: 0,
        d: toInt(match[DATE]) * sign2,
        h: toInt(match[HOUR]) * sign2,
        m: toInt(match[MINUTE]) * sign2,
        s: toInt(match[SECOND]) * sign2,
        ms: toInt(absRound(match[MILLISECOND] * 1e3)) * sign2
      };
    } else if (match = isoRegex.exec(input)) {
      sign2 = match[1] === "-" ? -1 : 1;
      duration = {
        y: parseIso(match[2], sign2),
        M: parseIso(match[3], sign2),
        w: parseIso(match[4], sign2),
        d: parseIso(match[5], sign2),
        h: parseIso(match[6], sign2),
        m: parseIso(match[7], sign2),
        s: parseIso(match[8], sign2)
      };
    } else if (duration == null) {
      duration = {};
    } else if (typeof duration === "object" && ("from" in duration || "to" in duration)) {
      diffRes = momentsDifference(
        createLocal(duration.from),
        createLocal(duration.to)
      );
      duration = {};
      duration.ms = diffRes.milliseconds;
      duration.M = diffRes.months;
    }
    ret = new Duration(duration);
    if (isDuration(input) && hasOwnProp(input, "_locale")) {
      ret._locale = input._locale;
    }
    if (isDuration(input) && hasOwnProp(input, "_isValid")) {
      ret._isValid = input._isValid;
    }
    return ret;
  }
  createDuration.fn = Duration.prototype;
  createDuration.invalid = createInvalid$1;
  function parseIso(inp, sign2) {
    var res = inp && parseFloat(inp.replace(",", "."));
    return (isNaN(res) ? 0 : res) * sign2;
  }
  function positiveMomentsDifference(base, other) {
    var res = {};
    res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, "M").isAfter(other)) {
      --res.months;
    }
    res.milliseconds = +other - +base.clone().add(res.months, "M");
    return res;
  }
  function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
      return { milliseconds: 0, months: 0 };
    }
    other = cloneWithOffset(other, base);
    if (base.isBefore(other)) {
      res = positiveMomentsDifference(base, other);
    } else {
      res = positiveMomentsDifference(other, base);
      res.milliseconds = -res.milliseconds;
      res.months = -res.months;
    }
    return res;
  }
  function createAdder(direction, name) {
    return function(val, period) {
      var dur, tmp;
      if (period !== null && !isNaN(+period)) {
        deprecateSimple(
          name,
          "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
        );
        tmp = val;
        val = period;
        period = tmp;
      }
      dur = createDuration(val, period);
      addSubtract(this, dur, direction);
      return this;
    };
  }
  function addSubtract(mom, duration, isAdding, updateOffset) {
    var milliseconds2 = duration._milliseconds, days2 = absRound(duration._days), months2 = absRound(duration._months);
    if (!mom.isValid()) {
      return;
    }
    updateOffset = updateOffset == null ? true : updateOffset;
    if (months2) {
      setMonth(mom, get(mom, "Month") + months2 * isAdding);
    }
    if (days2) {
      set$1(mom, "Date", get(mom, "Date") + days2 * isAdding);
    }
    if (milliseconds2) {
      mom._d.setTime(mom._d.valueOf() + milliseconds2 * isAdding);
    }
    if (updateOffset) {
      hooks.updateOffset(mom, days2 || months2);
    }
  }
  var add = createAdder(1, "add"), subtract = createAdder(-1, "subtract");
  function isString(input) {
    return typeof input === "string" || input instanceof String;
  }
  function isMomentInput(input) {
    return isMoment(input) || isDate(input) || isString(input) || isNumber(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === void 0;
  }
  function isMomentInputObject(input) {
    var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
      "years",
      "year",
      "y",
      "months",
      "month",
      "M",
      "days",
      "day",
      "d",
      "dates",
      "date",
      "D",
      "hours",
      "hour",
      "h",
      "minutes",
      "minute",
      "m",
      "seconds",
      "second",
      "s",
      "milliseconds",
      "millisecond",
      "ms"
    ], i, property, propertyLen = properties.length;
    for (i = 0; i < propertyLen; i += 1) {
      property = properties[i];
      propertyTest = propertyTest || hasOwnProp(input, property);
    }
    return objectTest && propertyTest;
  }
  function isNumberOrStringArray(input) {
    var arrayTest = isArray(input), dataTypeTest = false;
    if (arrayTest) {
      dataTypeTest = input.filter(function(item) {
        return !isNumber(item) && isString(input);
      }).length === 0;
    }
    return arrayTest && dataTypeTest;
  }
  function isCalendarSpec(input) {
    var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
      "sameDay",
      "nextDay",
      "lastDay",
      "nextWeek",
      "lastWeek",
      "sameElse"
    ], i, property;
    for (i = 0; i < properties.length; i += 1) {
      property = properties[i];
      propertyTest = propertyTest || hasOwnProp(input, property);
    }
    return objectTest && propertyTest;
  }
  function getCalendarFormat(myMoment, now2) {
    var diff2 = myMoment.diff(now2, "days", true);
    return diff2 < -6 ? "sameElse" : diff2 < -1 ? "lastWeek" : diff2 < 0 ? "lastDay" : diff2 < 1 ? "sameDay" : diff2 < 2 ? "nextDay" : diff2 < 7 ? "nextWeek" : "sameElse";
  }
  function calendar$1(time, formats) {
    if (arguments.length === 1) {
      if (!arguments[0]) {
        time = void 0;
        formats = void 0;
      } else if (isMomentInput(arguments[0])) {
        time = arguments[0];
        formats = void 0;
      } else if (isCalendarSpec(arguments[0])) {
        formats = arguments[0];
        time = void 0;
      }
    }
    var now2 = time || createLocal(), sod = cloneWithOffset(now2, this).startOf("day"), format2 = hooks.calendarFormat(this, sod) || "sameElse", output = formats && (isFunction(formats[format2]) ? formats[format2].call(this, now2) : formats[format2]);
    return this.format(
      output || this.localeData().calendar(format2, this, createLocal(now2))
    );
  }
  function clone() {
    return new Moment(this);
  }
  function isAfter(input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(units) || "millisecond";
    if (units === "millisecond") {
      return this.valueOf() > localInput.valueOf();
    } else {
      return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
  }
  function isBefore(input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(units) || "millisecond";
    if (units === "millisecond") {
      return this.valueOf() < localInput.valueOf();
    } else {
      return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
  }
  function isBetween(from2, to2, units, inclusivity) {
    var localFrom = isMoment(from2) ? from2 : createLocal(from2), localTo = isMoment(to2) ? to2 : createLocal(to2);
    if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
      return false;
    }
    inclusivity = inclusivity || "()";
    return (inclusivity[0] === "(" ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ")" ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
  }
  function isSame(input, units) {
    var localInput = isMoment(input) ? input : createLocal(input), inputMs;
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(units) || "millisecond";
    if (units === "millisecond") {
      return this.valueOf() === localInput.valueOf();
    } else {
      inputMs = localInput.valueOf();
      return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
    }
  }
  function isSameOrAfter(input, units) {
    return this.isSame(input, units) || this.isAfter(input, units);
  }
  function isSameOrBefore(input, units) {
    return this.isSame(input, units) || this.isBefore(input, units);
  }
  function diff(input, units, asFloat) {
    var that, zoneDelta, output;
    if (!this.isValid()) {
      return NaN;
    }
    that = cloneWithOffset(input, this);
    if (!that.isValid()) {
      return NaN;
    }
    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
    units = normalizeUnits(units);
    switch (units) {
      case "year":
        output = monthDiff(this, that) / 12;
        break;
      case "month":
        output = monthDiff(this, that);
        break;
      case "quarter":
        output = monthDiff(this, that) / 3;
        break;
      case "second":
        output = (this - that) / 1e3;
        break;
      case "minute":
        output = (this - that) / 6e4;
        break;
      case "hour":
        output = (this - that) / 36e5;
        break;
      case "day":
        output = (this - that - zoneDelta) / 864e5;
        break;
      case "week":
        output = (this - that - zoneDelta) / 6048e5;
        break;
      default:
        output = this - that;
    }
    return asFloat ? output : absFloor(output);
  }
  function monthDiff(a, b) {
    if (a.date() < b.date()) {
      return -monthDiff(b, a);
    }
    var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()), anchor = a.clone().add(wholeMonthDiff, "months"), anchor2, adjust;
    if (b - anchor < 0) {
      anchor2 = a.clone().add(wholeMonthDiff - 1, "months");
      adjust = (b - anchor) / (anchor - anchor2);
    } else {
      anchor2 = a.clone().add(wholeMonthDiff + 1, "months");
      adjust = (b - anchor) / (anchor2 - anchor);
    }
    return -(wholeMonthDiff + adjust) || 0;
  }
  hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
  hooks.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
  function toString() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  }
  function toISOString(keepOffset) {
    if (!this.isValid()) {
      return null;
    }
    var utc = keepOffset !== true, m = utc ? this.clone().utc() : this;
    if (m.year() < 0 || m.year() > 9999) {
      return formatMoment(
        m,
        utc ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
      );
    }
    if (isFunction(Date.prototype.toISOString)) {
      if (utc) {
        return this.toDate().toISOString();
      } else {
        return new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", formatMoment(m, "Z"));
      }
    }
    return formatMoment(
      m,
      utc ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
    );
  }
  function inspect() {
    if (!this.isValid()) {
      return "moment.invalid(/* " + this._i + " */)";
    }
    var func = "moment", zone = "", prefix, year, datetime, suffix;
    if (!this.isLocal()) {
      func = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
      zone = "Z";
    }
    prefix = "[" + func + '("]';
    year = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
    datetime = "-MM-DD[T]HH:mm:ss.SSS";
    suffix = zone + '[")]';
    return this.format(prefix + year + datetime + suffix);
  }
  function format(inputString) {
    if (!inputString) {
      inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
    }
    var output = formatMoment(this, inputString);
    return this.localeData().postformat(output);
  }
  function from(time, withoutSuffix) {
    if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
      return createDuration({ to: this, from: time }).locale(this.locale()).humanize(!withoutSuffix);
    } else {
      return this.localeData().invalidDate();
    }
  }
  function fromNow(withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
  }
  function to(time, withoutSuffix) {
    if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
      return createDuration({ from: this, to: time }).locale(this.locale()).humanize(!withoutSuffix);
    } else {
      return this.localeData().invalidDate();
    }
  }
  function toNow(withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
  }
  function locale(key) {
    var newLocaleData;
    if (key === void 0) {
      return this._locale._abbr;
    } else {
      newLocaleData = getLocale(key);
      if (newLocaleData != null) {
        this._locale = newLocaleData;
      }
      return this;
    }
  }
  var lang = deprecate(
    "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
    function(key) {
      if (key === void 0) {
        return this.localeData();
      } else {
        return this.locale(key);
      }
    }
  );
  function localeData() {
    return this._locale;
  }
  var MS_PER_SECOND = 1e3, MS_PER_MINUTE = 60 * MS_PER_SECOND, MS_PER_HOUR = 60 * MS_PER_MINUTE, MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;
  function mod$1(dividend, divisor) {
    return (dividend % divisor + divisor) % divisor;
  }
  function localStartOfDate(y, m, d) {
    if (y < 100 && y >= 0) {
      return new Date(y + 400, m, d) - MS_PER_400_YEARS;
    } else {
      return new Date(y, m, d).valueOf();
    }
  }
  function utcStartOfDate(y, m, d) {
    if (y < 100 && y >= 0) {
      return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
    } else {
      return Date.UTC(y, m, d);
    }
  }
  function startOf(units) {
    var time, startOfDate;
    units = normalizeUnits(units);
    if (units === void 0 || units === "millisecond" || !this.isValid()) {
      return this;
    }
    startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
    switch (units) {
      case "year":
        time = startOfDate(this.year(), 0, 1);
        break;
      case "quarter":
        time = startOfDate(
          this.year(),
          this.month() - this.month() % 3,
          1
        );
        break;
      case "month":
        time = startOfDate(this.year(), this.month(), 1);
        break;
      case "week":
        time = startOfDate(
          this.year(),
          this.month(),
          this.date() - this.weekday()
        );
        break;
      case "isoWeek":
        time = startOfDate(
          this.year(),
          this.month(),
          this.date() - (this.isoWeekday() - 1)
        );
        break;
      case "day":
      case "date":
        time = startOfDate(this.year(), this.month(), this.date());
        break;
      case "hour":
        time = this._d.valueOf();
        time -= mod$1(
          time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
          MS_PER_HOUR
        );
        break;
      case "minute":
        time = this._d.valueOf();
        time -= mod$1(time, MS_PER_MINUTE);
        break;
      case "second":
        time = this._d.valueOf();
        time -= mod$1(time, MS_PER_SECOND);
        break;
    }
    this._d.setTime(time);
    hooks.updateOffset(this, true);
    return this;
  }
  function endOf(units) {
    var time, startOfDate;
    units = normalizeUnits(units);
    if (units === void 0 || units === "millisecond" || !this.isValid()) {
      return this;
    }
    startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
    switch (units) {
      case "year":
        time = startOfDate(this.year() + 1, 0, 1) - 1;
        break;
      case "quarter":
        time = startOfDate(
          this.year(),
          this.month() - this.month() % 3 + 3,
          1
        ) - 1;
        break;
      case "month":
        time = startOfDate(this.year(), this.month() + 1, 1) - 1;
        break;
      case "week":
        time = startOfDate(
          this.year(),
          this.month(),
          this.date() - this.weekday() + 7
        ) - 1;
        break;
      case "isoWeek":
        time = startOfDate(
          this.year(),
          this.month(),
          this.date() - (this.isoWeekday() - 1) + 7
        ) - 1;
        break;
      case "day":
      case "date":
        time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
        break;
      case "hour":
        time = this._d.valueOf();
        time += MS_PER_HOUR - mod$1(
          time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
          MS_PER_HOUR
        ) - 1;
        break;
      case "minute":
        time = this._d.valueOf();
        time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
        break;
      case "second":
        time = this._d.valueOf();
        time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
        break;
    }
    this._d.setTime(time);
    hooks.updateOffset(this, true);
    return this;
  }
  function valueOf() {
    return this._d.valueOf() - (this._offset || 0) * 6e4;
  }
  function unix() {
    return Math.floor(this.valueOf() / 1e3);
  }
  function toDate() {
    return new Date(this.valueOf());
  }
  function toArray() {
    var m = this;
    return [
      m.year(),
      m.month(),
      m.date(),
      m.hour(),
      m.minute(),
      m.second(),
      m.millisecond()
    ];
  }
  function toObject() {
    var m = this;
    return {
      years: m.year(),
      months: m.month(),
      date: m.date(),
      hours: m.hours(),
      minutes: m.minutes(),
      seconds: m.seconds(),
      milliseconds: m.milliseconds()
    };
  }
  function toJSON() {
    return this.isValid() ? this.toISOString() : null;
  }
  function isValid$2() {
    return isValid(this);
  }
  function parsingFlags() {
    return extend({}, getParsingFlags(this));
  }
  function invalidAt() {
    return getParsingFlags(this).overflow;
  }
  function creationData() {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict
    };
  }
  addFormatToken("N", 0, 0, "eraAbbr");
  addFormatToken("NN", 0, 0, "eraAbbr");
  addFormatToken("NNN", 0, 0, "eraAbbr");
  addFormatToken("NNNN", 0, 0, "eraName");
  addFormatToken("NNNNN", 0, 0, "eraNarrow");
  addFormatToken("y", ["y", 1], "yo", "eraYear");
  addFormatToken("y", ["yy", 2], 0, "eraYear");
  addFormatToken("y", ["yyy", 3], 0, "eraYear");
  addFormatToken("y", ["yyyy", 4], 0, "eraYear");
  addRegexToken("N", matchEraAbbr);
  addRegexToken("NN", matchEraAbbr);
  addRegexToken("NNN", matchEraAbbr);
  addRegexToken("NNNN", matchEraName);
  addRegexToken("NNNNN", matchEraNarrow);
  addParseToken(
    ["N", "NN", "NNN", "NNNN", "NNNNN"],
    function(input, array, config, token2) {
      var era = config._locale.erasParse(input, token2, config._strict);
      if (era) {
        getParsingFlags(config).era = era;
      } else {
        getParsingFlags(config).invalidEra = input;
      }
    }
  );
  addRegexToken("y", matchUnsigned);
  addRegexToken("yy", matchUnsigned);
  addRegexToken("yyy", matchUnsigned);
  addRegexToken("yyyy", matchUnsigned);
  addRegexToken("yo", matchEraYearOrdinal);
  addParseToken(["y", "yy", "yyy", "yyyy"], YEAR);
  addParseToken(["yo"], function(input, array, config, token2) {
    var match;
    if (config._locale._eraYearOrdinalRegex) {
      match = input.match(config._locale._eraYearOrdinalRegex);
    }
    if (config._locale.eraYearOrdinalParse) {
      array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
    } else {
      array[YEAR] = parseInt(input, 10);
    }
  });
  function localeEras(m, format2) {
    var i, l, date, eras = this._eras || getLocale("en")._eras;
    for (i = 0, l = eras.length; i < l; ++i) {
      switch (typeof eras[i].since) {
        case "string":
          date = hooks(eras[i].since).startOf("day");
          eras[i].since = date.valueOf();
          break;
      }
      switch (typeof eras[i].until) {
        case "undefined":
          eras[i].until = Infinity;
          break;
        case "string":
          date = hooks(eras[i].until).startOf("day").valueOf();
          eras[i].until = date.valueOf();
          break;
      }
    }
    return eras;
  }
  function localeErasParse(eraName, format2, strict) {
    var i, l, eras = this.eras(), name, abbr, narrow;
    eraName = eraName.toUpperCase();
    for (i = 0, l = eras.length; i < l; ++i) {
      name = eras[i].name.toUpperCase();
      abbr = eras[i].abbr.toUpperCase();
      narrow = eras[i].narrow.toUpperCase();
      if (strict) {
        switch (format2) {
          case "N":
          case "NN":
          case "NNN":
            if (abbr === eraName) {
              return eras[i];
            }
            break;
          case "NNNN":
            if (name === eraName) {
              return eras[i];
            }
            break;
          case "NNNNN":
            if (narrow === eraName) {
              return eras[i];
            }
            break;
        }
      } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
        return eras[i];
      }
    }
  }
  function localeErasConvertYear(era, year) {
    var dir = era.since <= era.until ? 1 : -1;
    if (year === void 0) {
      return hooks(era.since).year();
    } else {
      return hooks(era.since).year() + (year - era.offset) * dir;
    }
  }
  function getEraName() {
    var i, l, val, eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      val = this.clone().startOf("day").valueOf();
      if (eras[i].since <= val && val <= eras[i].until) {
        return eras[i].name;
      }
      if (eras[i].until <= val && val <= eras[i].since) {
        return eras[i].name;
      }
    }
    return "";
  }
  function getEraNarrow() {
    var i, l, val, eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      val = this.clone().startOf("day").valueOf();
      if (eras[i].since <= val && val <= eras[i].until) {
        return eras[i].narrow;
      }
      if (eras[i].until <= val && val <= eras[i].since) {
        return eras[i].narrow;
      }
    }
    return "";
  }
  function getEraAbbr() {
    var i, l, val, eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      val = this.clone().startOf("day").valueOf();
      if (eras[i].since <= val && val <= eras[i].until) {
        return eras[i].abbr;
      }
      if (eras[i].until <= val && val <= eras[i].since) {
        return eras[i].abbr;
      }
    }
    return "";
  }
  function getEraYear() {
    var i, l, dir, val, eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      dir = eras[i].since <= eras[i].until ? 1 : -1;
      val = this.clone().startOf("day").valueOf();
      if (eras[i].since <= val && val <= eras[i].until || eras[i].until <= val && val <= eras[i].since) {
        return (this.year() - hooks(eras[i].since).year()) * dir + eras[i].offset;
      }
    }
    return this.year();
  }
  function erasNameRegex(isStrict) {
    if (!hasOwnProp(this, "_erasNameRegex")) {
      computeErasParse.call(this);
    }
    return isStrict ? this._erasNameRegex : this._erasRegex;
  }
  function erasAbbrRegex(isStrict) {
    if (!hasOwnProp(this, "_erasAbbrRegex")) {
      computeErasParse.call(this);
    }
    return isStrict ? this._erasAbbrRegex : this._erasRegex;
  }
  function erasNarrowRegex(isStrict) {
    if (!hasOwnProp(this, "_erasNarrowRegex")) {
      computeErasParse.call(this);
    }
    return isStrict ? this._erasNarrowRegex : this._erasRegex;
  }
  function matchEraAbbr(isStrict, locale2) {
    return locale2.erasAbbrRegex(isStrict);
  }
  function matchEraName(isStrict, locale2) {
    return locale2.erasNameRegex(isStrict);
  }
  function matchEraNarrow(isStrict, locale2) {
    return locale2.erasNarrowRegex(isStrict);
  }
  function matchEraYearOrdinal(isStrict, locale2) {
    return locale2._eraYearOrdinalRegex || matchUnsigned;
  }
  function computeErasParse() {
    var abbrPieces = [], namePieces = [], narrowPieces = [], mixedPieces = [], i, l, eras = this.eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      namePieces.push(regexEscape(eras[i].name));
      abbrPieces.push(regexEscape(eras[i].abbr));
      narrowPieces.push(regexEscape(eras[i].narrow));
      mixedPieces.push(regexEscape(eras[i].name));
      mixedPieces.push(regexEscape(eras[i].abbr));
      mixedPieces.push(regexEscape(eras[i].narrow));
    }
    this._erasRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
    this._erasNameRegex = new RegExp("^(" + namePieces.join("|") + ")", "i");
    this._erasAbbrRegex = new RegExp("^(" + abbrPieces.join("|") + ")", "i");
    this._erasNarrowRegex = new RegExp(
      "^(" + narrowPieces.join("|") + ")",
      "i"
    );
  }
  addFormatToken(0, ["gg", 2], 0, function() {
    return this.weekYear() % 100;
  });
  addFormatToken(0, ["GG", 2], 0, function() {
    return this.isoWeekYear() % 100;
  });
  function addWeekYearFormatToken(token2, getter) {
    addFormatToken(0, [token2, token2.length], 0, getter);
  }
  addWeekYearFormatToken("gggg", "weekYear");
  addWeekYearFormatToken("ggggg", "weekYear");
  addWeekYearFormatToken("GGGG", "isoWeekYear");
  addWeekYearFormatToken("GGGGG", "isoWeekYear");
  addUnitAlias("weekYear", "gg");
  addUnitAlias("isoWeekYear", "GG");
  addUnitPriority("weekYear", 1);
  addUnitPriority("isoWeekYear", 1);
  addRegexToken("G", matchSigned);
  addRegexToken("g", matchSigned);
  addRegexToken("GG", match1to2, match2);
  addRegexToken("gg", match1to2, match2);
  addRegexToken("GGGG", match1to4, match4);
  addRegexToken("gggg", match1to4, match4);
  addRegexToken("GGGGG", match1to6, match6);
  addRegexToken("ggggg", match1to6, match6);
  addWeekParseToken(
    ["gggg", "ggggg", "GGGG", "GGGGG"],
    function(input, week, config, token2) {
      week[token2.substr(0, 2)] = toInt(input);
    }
  );
  addWeekParseToken(["gg", "GG"], function(input, week, config, token2) {
    week[token2] = hooks.parseTwoDigitYear(input);
  });
  function getSetWeekYear(input) {
    return getSetWeekYearHelper.call(
      this,
      input,
      this.week(),
      this.weekday(),
      this.localeData()._week.dow,
      this.localeData()._week.doy
    );
  }
  function getSetISOWeekYear(input) {
    return getSetWeekYearHelper.call(
      this,
      input,
      this.isoWeek(),
      this.isoWeekday(),
      1,
      4
    );
  }
  function getISOWeeksInYear() {
    return weeksInYear(this.year(), 1, 4);
  }
  function getISOWeeksInISOWeekYear() {
    return weeksInYear(this.isoWeekYear(), 1, 4);
  }
  function getWeeksInYear() {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
  }
  function getWeeksInWeekYear() {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
  }
  function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
      return weekOfYear(this, dow, doy).year;
    } else {
      weeksTarget = weeksInYear(input, dow, doy);
      if (week > weeksTarget) {
        week = weeksTarget;
      }
      return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
  }
  function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy), date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
  }
  addFormatToken("Q", 0, "Qo", "quarter");
  addUnitAlias("quarter", "Q");
  addUnitPriority("quarter", 7);
  addRegexToken("Q", match1);
  addParseToken("Q", function(input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
  });
  function getSetQuarter(input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
  }
  addFormatToken("D", ["DD", 2], "Do", "date");
  addUnitAlias("date", "D");
  addUnitPriority("date", 9);
  addRegexToken("D", match1to2);
  addRegexToken("DD", match1to2, match2);
  addRegexToken("Do", function(isStrict, locale2) {
    return isStrict ? locale2._dayOfMonthOrdinalParse || locale2._ordinalParse : locale2._dayOfMonthOrdinalParseLenient;
  });
  addParseToken(["D", "DD"], DATE);
  addParseToken("Do", function(input, array) {
    array[DATE] = toInt(input.match(match1to2)[0]);
  });
  var getSetDayOfMonth = makeGetSet("Date", true);
  addFormatToken("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
  addUnitAlias("dayOfYear", "DDD");
  addUnitPriority("dayOfYear", 4);
  addRegexToken("DDD", match1to3);
  addRegexToken("DDDD", match3);
  addParseToken(["DDD", "DDDD"], function(input, array, config) {
    config._dayOfYear = toInt(input);
  });
  function getSetDayOfYear(input) {
    var dayOfYear = Math.round(
      (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
    ) + 1;
    return input == null ? dayOfYear : this.add(input - dayOfYear, "d");
  }
  addFormatToken("m", ["mm", 2], 0, "minute");
  addUnitAlias("minute", "m");
  addUnitPriority("minute", 14);
  addRegexToken("m", match1to2);
  addRegexToken("mm", match1to2, match2);
  addParseToken(["m", "mm"], MINUTE);
  var getSetMinute = makeGetSet("Minutes", false);
  addFormatToken("s", ["ss", 2], 0, "second");
  addUnitAlias("second", "s");
  addUnitPriority("second", 15);
  addRegexToken("s", match1to2);
  addRegexToken("ss", match1to2, match2);
  addParseToken(["s", "ss"], SECOND);
  var getSetSecond = makeGetSet("Seconds", false);
  addFormatToken("S", 0, 0, function() {
    return ~~(this.millisecond() / 100);
  });
  addFormatToken(0, ["SS", 2], 0, function() {
    return ~~(this.millisecond() / 10);
  });
  addFormatToken(0, ["SSS", 3], 0, "millisecond");
  addFormatToken(0, ["SSSS", 4], 0, function() {
    return this.millisecond() * 10;
  });
  addFormatToken(0, ["SSSSS", 5], 0, function() {
    return this.millisecond() * 100;
  });
  addFormatToken(0, ["SSSSSS", 6], 0, function() {
    return this.millisecond() * 1e3;
  });
  addFormatToken(0, ["SSSSSSS", 7], 0, function() {
    return this.millisecond() * 1e4;
  });
  addFormatToken(0, ["SSSSSSSS", 8], 0, function() {
    return this.millisecond() * 1e5;
  });
  addFormatToken(0, ["SSSSSSSSS", 9], 0, function() {
    return this.millisecond() * 1e6;
  });
  addUnitAlias("millisecond", "ms");
  addUnitPriority("millisecond", 16);
  addRegexToken("S", match1to3, match1);
  addRegexToken("SS", match1to3, match2);
  addRegexToken("SSS", match1to3, match3);
  var token, getSetMillisecond;
  for (token = "SSSS"; token.length <= 9; token += "S") {
    addRegexToken(token, matchUnsigned);
  }
  function parseMs(input, array) {
    array[MILLISECOND] = toInt(("0." + input) * 1e3);
  }
  for (token = "S"; token.length <= 9; token += "S") {
    addParseToken(token, parseMs);
  }
  getSetMillisecond = makeGetSet("Milliseconds", false);
  addFormatToken("z", 0, 0, "zoneAbbr");
  addFormatToken("zz", 0, 0, "zoneName");
  function getZoneAbbr() {
    return this._isUTC ? "UTC" : "";
  }
  function getZoneName() {
    return this._isUTC ? "Coordinated Universal Time" : "";
  }
  var proto = Moment.prototype;
  proto.add = add;
  proto.calendar = calendar$1;
  proto.clone = clone;
  proto.diff = diff;
  proto.endOf = endOf;
  proto.format = format;
  proto.from = from;
  proto.fromNow = fromNow;
  proto.to = to;
  proto.toNow = toNow;
  proto.get = stringGet;
  proto.invalidAt = invalidAt;
  proto.isAfter = isAfter;
  proto.isBefore = isBefore;
  proto.isBetween = isBetween;
  proto.isSame = isSame;
  proto.isSameOrAfter = isSameOrAfter;
  proto.isSameOrBefore = isSameOrBefore;
  proto.isValid = isValid$2;
  proto.lang = lang;
  proto.locale = locale;
  proto.localeData = localeData;
  proto.max = prototypeMax;
  proto.min = prototypeMin;
  proto.parsingFlags = parsingFlags;
  proto.set = stringSet;
  proto.startOf = startOf;
  proto.subtract = subtract;
  proto.toArray = toArray;
  proto.toObject = toObject;
  proto.toDate = toDate;
  proto.toISOString = toISOString;
  proto.inspect = inspect;
  if (typeof Symbol !== "undefined" && Symbol.for != null) {
    proto[Symbol.for("nodejs.util.inspect.custom")] = function() {
      return "Moment<" + this.format() + ">";
    };
  }
  proto.toJSON = toJSON;
  proto.toString = toString;
  proto.unix = unix;
  proto.valueOf = valueOf;
  proto.creationData = creationData;
  proto.eraName = getEraName;
  proto.eraNarrow = getEraNarrow;
  proto.eraAbbr = getEraAbbr;
  proto.eraYear = getEraYear;
  proto.year = getSetYear;
  proto.isLeapYear = getIsLeapYear;
  proto.weekYear = getSetWeekYear;
  proto.isoWeekYear = getSetISOWeekYear;
  proto.quarter = proto.quarters = getSetQuarter;
  proto.month = getSetMonth;
  proto.daysInMonth = getDaysInMonth;
  proto.week = proto.weeks = getSetWeek;
  proto.isoWeek = proto.isoWeeks = getSetISOWeek;
  proto.weeksInYear = getWeeksInYear;
  proto.weeksInWeekYear = getWeeksInWeekYear;
  proto.isoWeeksInYear = getISOWeeksInYear;
  proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
  proto.date = getSetDayOfMonth;
  proto.day = proto.days = getSetDayOfWeek;
  proto.weekday = getSetLocaleDayOfWeek;
  proto.isoWeekday = getSetISODayOfWeek;
  proto.dayOfYear = getSetDayOfYear;
  proto.hour = proto.hours = getSetHour;
  proto.minute = proto.minutes = getSetMinute;
  proto.second = proto.seconds = getSetSecond;
  proto.millisecond = proto.milliseconds = getSetMillisecond;
  proto.utcOffset = getSetOffset;
  proto.utc = setOffsetToUTC;
  proto.local = setOffsetToLocal;
  proto.parseZone = setOffsetToParsedOffset;
  proto.hasAlignedHourOffset = hasAlignedHourOffset;
  proto.isDST = isDaylightSavingTime;
  proto.isLocal = isLocal;
  proto.isUtcOffset = isUtcOffset;
  proto.isUtc = isUtc;
  proto.isUTC = isUtc;
  proto.zoneAbbr = getZoneAbbr;
  proto.zoneName = getZoneName;
  proto.dates = deprecate(
    "dates accessor is deprecated. Use date instead.",
    getSetDayOfMonth
  );
  proto.months = deprecate(
    "months accessor is deprecated. Use month instead",
    getSetMonth
  );
  proto.years = deprecate(
    "years accessor is deprecated. Use year instead",
    getSetYear
  );
  proto.zone = deprecate(
    "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
    getSetZone
  );
  proto.isDSTShifted = deprecate(
    "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
    isDaylightSavingTimeShifted
  );
  function createUnix(input) {
    return createLocal(input * 1e3);
  }
  function createInZone() {
    return createLocal.apply(null, arguments).parseZone();
  }
  function preParsePostFormat(string) {
    return string;
  }
  var proto$1 = Locale.prototype;
  proto$1.calendar = calendar;
  proto$1.longDateFormat = longDateFormat;
  proto$1.invalidDate = invalidDate;
  proto$1.ordinal = ordinal;
  proto$1.preparse = preParsePostFormat;
  proto$1.postformat = preParsePostFormat;
  proto$1.relativeTime = relativeTime;
  proto$1.pastFuture = pastFuture;
  proto$1.set = set;
  proto$1.eras = localeEras;
  proto$1.erasParse = localeErasParse;
  proto$1.erasConvertYear = localeErasConvertYear;
  proto$1.erasAbbrRegex = erasAbbrRegex;
  proto$1.erasNameRegex = erasNameRegex;
  proto$1.erasNarrowRegex = erasNarrowRegex;
  proto$1.months = localeMonths;
  proto$1.monthsShort = localeMonthsShort;
  proto$1.monthsParse = localeMonthsParse;
  proto$1.monthsRegex = monthsRegex;
  proto$1.monthsShortRegex = monthsShortRegex;
  proto$1.week = localeWeek;
  proto$1.firstDayOfYear = localeFirstDayOfYear;
  proto$1.firstDayOfWeek = localeFirstDayOfWeek;
  proto$1.weekdays = localeWeekdays;
  proto$1.weekdaysMin = localeWeekdaysMin;
  proto$1.weekdaysShort = localeWeekdaysShort;
  proto$1.weekdaysParse = localeWeekdaysParse;
  proto$1.weekdaysRegex = weekdaysRegex;
  proto$1.weekdaysShortRegex = weekdaysShortRegex;
  proto$1.weekdaysMinRegex = weekdaysMinRegex;
  proto$1.isPM = localeIsPM;
  proto$1.meridiem = localeMeridiem;
  function get$1(format2, index, field, setter) {
    var locale2 = getLocale(), utc = createUTC().set(setter, index);
    return locale2[field](utc, format2);
  }
  function listMonthsImpl(format2, index, field) {
    if (isNumber(format2)) {
      index = format2;
      format2 = void 0;
    }
    format2 = format2 || "";
    if (index != null) {
      return get$1(format2, index, field, "month");
    }
    var i, out = [];
    for (i = 0; i < 12; i++) {
      out[i] = get$1(format2, i, field, "month");
    }
    return out;
  }
  function listWeekdaysImpl(localeSorted, format2, index, field) {
    if (typeof localeSorted === "boolean") {
      if (isNumber(format2)) {
        index = format2;
        format2 = void 0;
      }
      format2 = format2 || "";
    } else {
      format2 = localeSorted;
      index = format2;
      localeSorted = false;
      if (isNumber(format2)) {
        index = format2;
        format2 = void 0;
      }
      format2 = format2 || "";
    }
    var locale2 = getLocale(), shift = localeSorted ? locale2._week.dow : 0, i, out = [];
    if (index != null) {
      return get$1(format2, (index + shift) % 7, field, "day");
    }
    for (i = 0; i < 7; i++) {
      out[i] = get$1(format2, (i + shift) % 7, field, "day");
    }
    return out;
  }
  function listMonths(format2, index) {
    return listMonthsImpl(format2, index, "months");
  }
  function listMonthsShort(format2, index) {
    return listMonthsImpl(format2, index, "monthsShort");
  }
  function listWeekdays(localeSorted, format2, index) {
    return listWeekdaysImpl(localeSorted, format2, index, "weekdays");
  }
  function listWeekdaysShort(localeSorted, format2, index) {
    return listWeekdaysImpl(localeSorted, format2, index, "weekdaysShort");
  }
  function listWeekdaysMin(localeSorted, format2, index) {
    return listWeekdaysImpl(localeSorted, format2, index, "weekdaysMin");
  }
  getSetGlobalLocale("en", {
    eras: [
      {
        since: "0001-01-01",
        until: Infinity,
        offset: 1,
        name: "Anno Domini",
        narrow: "AD",
        abbr: "AD"
      },
      {
        since: "0000-12-31",
        until: -Infinity,
        offset: 1,
        name: "Before Christ",
        narrow: "BC",
        abbr: "BC"
      }
    ],
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function(number) {
      var b = number % 10, output = toInt(number % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
      return number + output;
    }
  });
  hooks.lang = deprecate(
    "moment.lang is deprecated. Use moment.locale instead.",
    getSetGlobalLocale
  );
  hooks.langData = deprecate(
    "moment.langData is deprecated. Use moment.localeData instead.",
    getLocale
  );
  var mathAbs = Math.abs;
  function abs() {
    var data = this._data;
    this._milliseconds = mathAbs(this._milliseconds);
    this._days = mathAbs(this._days);
    this._months = mathAbs(this._months);
    data.milliseconds = mathAbs(data.milliseconds);
    data.seconds = mathAbs(data.seconds);
    data.minutes = mathAbs(data.minutes);
    data.hours = mathAbs(data.hours);
    data.months = mathAbs(data.months);
    data.years = mathAbs(data.years);
    return this;
  }
  function addSubtract$1(duration, input, value, direction) {
    var other = createDuration(input, value);
    duration._milliseconds += direction * other._milliseconds;
    duration._days += direction * other._days;
    duration._months += direction * other._months;
    return duration._bubble();
  }
  function add$1(input, value) {
    return addSubtract$1(this, input, value, 1);
  }
  function subtract$1(input, value) {
    return addSubtract$1(this, input, value, -1);
  }
  function absCeil(number) {
    if (number < 0) {
      return Math.floor(number);
    } else {
      return Math.ceil(number);
    }
  }
  function bubble() {
    var milliseconds2 = this._milliseconds, days2 = this._days, months2 = this._months, data = this._data, seconds2, minutes2, hours2, years2, monthsFromDays;
    if (!(milliseconds2 >= 0 && days2 >= 0 && months2 >= 0 || milliseconds2 <= 0 && days2 <= 0 && months2 <= 0)) {
      milliseconds2 += absCeil(monthsToDays(months2) + days2) * 864e5;
      days2 = 0;
      months2 = 0;
    }
    data.milliseconds = milliseconds2 % 1e3;
    seconds2 = absFloor(milliseconds2 / 1e3);
    data.seconds = seconds2 % 60;
    minutes2 = absFloor(seconds2 / 60);
    data.minutes = minutes2 % 60;
    hours2 = absFloor(minutes2 / 60);
    data.hours = hours2 % 24;
    days2 += absFloor(hours2 / 24);
    monthsFromDays = absFloor(daysToMonths(days2));
    months2 += monthsFromDays;
    days2 -= absCeil(monthsToDays(monthsFromDays));
    years2 = absFloor(months2 / 12);
    months2 %= 12;
    data.days = days2;
    data.months = months2;
    data.years = years2;
    return this;
  }
  function daysToMonths(days2) {
    return days2 * 4800 / 146097;
  }
  function monthsToDays(months2) {
    return months2 * 146097 / 4800;
  }
  function as(units) {
    if (!this.isValid()) {
      return NaN;
    }
    var days2, months2, milliseconds2 = this._milliseconds;
    units = normalizeUnits(units);
    if (units === "month" || units === "quarter" || units === "year") {
      days2 = this._days + milliseconds2 / 864e5;
      months2 = this._months + daysToMonths(days2);
      switch (units) {
        case "month":
          return months2;
        case "quarter":
          return months2 / 3;
        case "year":
          return months2 / 12;
      }
    } else {
      days2 = this._days + Math.round(monthsToDays(this._months));
      switch (units) {
        case "week":
          return days2 / 7 + milliseconds2 / 6048e5;
        case "day":
          return days2 + milliseconds2 / 864e5;
        case "hour":
          return days2 * 24 + milliseconds2 / 36e5;
        case "minute":
          return days2 * 1440 + milliseconds2 / 6e4;
        case "second":
          return days2 * 86400 + milliseconds2 / 1e3;
        case "millisecond":
          return Math.floor(days2 * 864e5) + milliseconds2;
        default:
          throw new Error("Unknown unit " + units);
      }
    }
  }
  function valueOf$1() {
    if (!this.isValid()) {
      return NaN;
    }
    return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
  }
  function makeAs(alias) {
    return function() {
      return this.as(alias);
    };
  }
  var asMilliseconds = makeAs("ms"), asSeconds = makeAs("s"), asMinutes = makeAs("m"), asHours = makeAs("h"), asDays = makeAs("d"), asWeeks = makeAs("w"), asMonths = makeAs("M"), asQuarters = makeAs("Q"), asYears = makeAs("y");
  function clone$1() {
    return createDuration(this);
  }
  function get$2(units) {
    units = normalizeUnits(units);
    return this.isValid() ? this[units + "s"]() : NaN;
  }
  function makeGetter(name) {
    return function() {
      return this.isValid() ? this._data[name] : NaN;
    };
  }
  var milliseconds = makeGetter("milliseconds"), seconds = makeGetter("seconds"), minutes = makeGetter("minutes"), hours = makeGetter("hours"), days = makeGetter("days"), months = makeGetter("months"), years = makeGetter("years");
  function weeks() {
    return absFloor(this.days() / 7);
  }
  var round = Math.round, thresholds = {
    ss: 44,
    s: 45,
    m: 45,
    h: 22,
    d: 26,
    w: null,
    M: 11
  };
  function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale2) {
    return locale2.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
  }
  function relativeTime$1(posNegDuration, withoutSuffix, thresholds2, locale2) {
    var duration = createDuration(posNegDuration).abs(), seconds2 = round(duration.as("s")), minutes2 = round(duration.as("m")), hours2 = round(duration.as("h")), days2 = round(duration.as("d")), months2 = round(duration.as("M")), weeks2 = round(duration.as("w")), years2 = round(duration.as("y")), a = seconds2 <= thresholds2.ss && ["s", seconds2] || seconds2 < thresholds2.s && ["ss", seconds2] || minutes2 <= 1 && ["m"] || minutes2 < thresholds2.m && ["mm", minutes2] || hours2 <= 1 && ["h"] || hours2 < thresholds2.h && ["hh", hours2] || days2 <= 1 && ["d"] || days2 < thresholds2.d && ["dd", days2];
    if (thresholds2.w != null) {
      a = a || weeks2 <= 1 && ["w"] || weeks2 < thresholds2.w && ["ww", weeks2];
    }
    a = a || months2 <= 1 && ["M"] || months2 < thresholds2.M && ["MM", months2] || years2 <= 1 && ["y"] || ["yy", years2];
    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale2;
    return substituteTimeAgo.apply(null, a);
  }
  function getSetRelativeTimeRounding(roundingFunction) {
    if (roundingFunction === void 0) {
      return round;
    }
    if (typeof roundingFunction === "function") {
      round = roundingFunction;
      return true;
    }
    return false;
  }
  function getSetRelativeTimeThreshold(threshold, limit) {
    if (thresholds[threshold] === void 0) {
      return false;
    }
    if (limit === void 0) {
      return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    if (threshold === "s") {
      thresholds.ss = limit - 1;
    }
    return true;
  }
  function humanize(argWithSuffix, argThresholds) {
    if (!this.isValid()) {
      return this.localeData().invalidDate();
    }
    var withSuffix = false, th = thresholds, locale2, output;
    if (typeof argWithSuffix === "object") {
      argThresholds = argWithSuffix;
      argWithSuffix = false;
    }
    if (typeof argWithSuffix === "boolean") {
      withSuffix = argWithSuffix;
    }
    if (typeof argThresholds === "object") {
      th = Object.assign({}, thresholds, argThresholds);
      if (argThresholds.s != null && argThresholds.ss == null) {
        th.ss = argThresholds.s - 1;
      }
    }
    locale2 = this.localeData();
    output = relativeTime$1(this, !withSuffix, th, locale2);
    if (withSuffix) {
      output = locale2.pastFuture(+this, output);
    }
    return locale2.postformat(output);
  }
  var abs$1 = Math.abs;
  function sign(x) {
    return (x > 0) - (x < 0) || +x;
  }
  function toISOString$1() {
    if (!this.isValid()) {
      return this.localeData().invalidDate();
    }
    var seconds2 = abs$1(this._milliseconds) / 1e3, days2 = abs$1(this._days), months2 = abs$1(this._months), minutes2, hours2, years2, s, total = this.asSeconds(), totalSign, ymSign, daysSign, hmsSign;
    if (!total) {
      return "P0D";
    }
    minutes2 = absFloor(seconds2 / 60);
    hours2 = absFloor(minutes2 / 60);
    seconds2 %= 60;
    minutes2 %= 60;
    years2 = absFloor(months2 / 12);
    months2 %= 12;
    s = seconds2 ? seconds2.toFixed(3).replace(/\.?0+$/, "") : "";
    totalSign = total < 0 ? "-" : "";
    ymSign = sign(this._months) !== sign(total) ? "-" : "";
    daysSign = sign(this._days) !== sign(total) ? "-" : "";
    hmsSign = sign(this._milliseconds) !== sign(total) ? "-" : "";
    return totalSign + "P" + (years2 ? ymSign + years2 + "Y" : "") + (months2 ? ymSign + months2 + "M" : "") + (days2 ? daysSign + days2 + "D" : "") + (hours2 || minutes2 || seconds2 ? "T" : "") + (hours2 ? hmsSign + hours2 + "H" : "") + (minutes2 ? hmsSign + minutes2 + "M" : "") + (seconds2 ? hmsSign + s + "S" : "");
  }
  var proto$2 = Duration.prototype;
  proto$2.isValid = isValid$1;
  proto$2.abs = abs;
  proto$2.add = add$1;
  proto$2.subtract = subtract$1;
  proto$2.as = as;
  proto$2.asMilliseconds = asMilliseconds;
  proto$2.asSeconds = asSeconds;
  proto$2.asMinutes = asMinutes;
  proto$2.asHours = asHours;
  proto$2.asDays = asDays;
  proto$2.asWeeks = asWeeks;
  proto$2.asMonths = asMonths;
  proto$2.asQuarters = asQuarters;
  proto$2.asYears = asYears;
  proto$2.valueOf = valueOf$1;
  proto$2._bubble = bubble;
  proto$2.clone = clone$1;
  proto$2.get = get$2;
  proto$2.milliseconds = milliseconds;
  proto$2.seconds = seconds;
  proto$2.minutes = minutes;
  proto$2.hours = hours;
  proto$2.days = days;
  proto$2.weeks = weeks;
  proto$2.months = months;
  proto$2.years = years;
  proto$2.humanize = humanize;
  proto$2.toISOString = toISOString$1;
  proto$2.toString = toISOString$1;
  proto$2.toJSON = toISOString$1;
  proto$2.locale = locale;
  proto$2.localeData = localeData;
  proto$2.toIsoString = deprecate(
    "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
    toISOString$1
  );
  proto$2.lang = lang;
  addFormatToken("X", 0, 0, "unix");
  addFormatToken("x", 0, 0, "valueOf");
  addRegexToken("x", matchSigned);
  addRegexToken("X", matchTimestamp);
  addParseToken("X", function(input, array, config) {
    config._d = new Date(parseFloat(input) * 1e3);
  });
  addParseToken("x", function(input, array, config) {
    config._d = new Date(toInt(input));
  });
  //! moment.js
  hooks.version = "2.29.4";
  setHookCallback(createLocal);
  hooks.fn = proto;
  hooks.min = min;
  hooks.max = max;
  hooks.now = now;
  hooks.utc = createUTC;
  hooks.unix = createUnix;
  hooks.months = listMonths;
  hooks.isDate = isDate;
  hooks.locale = getSetGlobalLocale;
  hooks.invalid = createInvalid;
  hooks.duration = createDuration;
  hooks.isMoment = isMoment;
  hooks.weekdays = listWeekdays;
  hooks.parseZone = createInZone;
  hooks.localeData = getLocale;
  hooks.isDuration = isDuration;
  hooks.monthsShort = listMonthsShort;
  hooks.weekdaysMin = listWeekdaysMin;
  hooks.defineLocale = defineLocale;
  hooks.updateLocale = updateLocale;
  hooks.locales = listLocales;
  hooks.weekdaysShort = listWeekdaysShort;
  hooks.normalizeUnits = normalizeUnits;
  hooks.relativeTimeRounding = getSetRelativeTimeRounding;
  hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
  hooks.calendarFormat = getCalendarFormat;
  hooks.prototype = proto;
  hooks.HTML5_FMT = {
    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
    DATE: "YYYY-MM-DD",
    TIME: "HH:mm",
    TIME_SECONDS: "HH:mm:ss",
    TIME_MS: "HH:mm:ss.SSS",
    WEEK: "GGGG-[W]WW",
    MONTH: "YYYY-MM"
  };
  const attack = "\u666E\u901A\u653B\u51FB";
  const runaway = "\u9003\u8131";
  const attackTox = "\u6BD2\u836F\u4FB5\u5BB3";
  const hpPlus = "\u751F\u547D\u6062\u590D";
  const hpReduce = "\u751F\u547D\u635F\u5931";
  const effectCns = {
    attack,
    runaway,
    attackTox,
    hpPlus,
    hpReduce
  };
  const authReject = "\u8D26\u53F7\u6216\u5BC6\u7801\u6709\u8BEF";
  const inFight = "\u5C1A\u672A\u8131\u79BB\u6218\u6597";
  const safeArea = "\u8FD9\u91CC\u662F\u5B89\u5168\u533A";
  const monsterMiss = "\u6218\u6597\u5DF2\u7ED3\u675F";
  const nameNotSupportEmail = "\u7528\u6237\u540D\u4E0D\u80FD\u4F7F\u7528\u90AE\u7BB1";
  const userNotHas = "\u7528\u6237\u672A\u627E\u5230";
  const uniqueMust = "\u7528\u6237\u540D\u6216\u90AE\u7BB1\u5DF2\u5B58\u5728";
  const serverFail = "\u670D\u52A1\u6267\u884C\u5931\u8D25";
  const errorCns = {
    authReject,
    inFight,
    safeArea,
    monsterMiss,
    nameNotSupportEmail,
    userNotHas,
    uniqueMust,
    serverFail
  };
  const monster = [
    {
      id: 1,
      name: "\u53F2\u83B1\u59C6",
      level: 1,
      attack_min: 20,
      attack_max: 31,
      hp: 315,
      defence: 0,
      nimble: 0,
      vision: 0,
      exp_min: 0,
      exp_max: 0,
      flop: [
        {
          id: 1,
          rate: 1e3,
          min: 1,
          max: 3
        },
        {
          id: 3,
          rate: 3e3,
          min: 1,
          max: 2
        }
      ]
    },
    {
      id: 2,
      name: "\u7CBE\u82F1\u53F2\u83B1\u59C6",
      level: 2,
      attack_max: 48,
      attack_min: 30,
      hp: 375,
      defence: 0,
      nimble: 0,
      vision: 0,
      exp_min: 0,
      exp_max: 0,
      flop: [
        {
          id: 1,
          rate: 1e3,
          min: 1,
          max: 5
        },
        {
          id: 3,
          rate: 6e3,
          min: 1,
          max: 5
        }
      ]
    },
    {
      id: 3,
      name: "\u5E7D\u5F71\u5154",
      level: 3,
      attack_max: 72,
      attack_min: 28,
      hp: 666,
      defence: 6,
      nimble: 0,
      vision: 0,
      exp_min: 0,
      exp_max: 0,
      flop: [
        {
          id: 1,
          rate: 1e3,
          min: 1,
          max: 5
        },
        {
          id: 3,
          rate: 6e3,
          min: 1,
          max: 5
        },
        {
          id: 4,
          rate: 160,
          min: 1,
          max: 1
        }
      ]
    }
  ];
  const goods = [
    {
      id: 1,
      name: "\u65E7\u94DC\u5E01",
      level: 1,
      wear: 1,
      stack: 1e7,
      rare: 1,
      effect: {
        money: 1
      }
    },
    {
      id: 2,
      name: "\u53E4\u91D1\u5E01",
      level: 1,
      wear: 1,
      stack: 1e7,
      rare: 3,
      effect: {
        gold: 1
      }
    },
    {
      id: 3,
      name: "\u6D46\u679C",
      level: 1,
      wear: 1,
      stack: 1e7,
      rare: 1,
      effect: {
        energyPlus: 1
      }
    },
    {
      id: 4,
      name: "\u6728\u5251",
      level: 1,
      wear: 550,
      stack: 1,
      rare: 1,
      effect: {
        attackMin: 5,
        attackMax: 10
      }
    },
    {
      id: 5,
      name: "\u6728\u677F\u7532",
      level: 1,
      wear: 650,
      stack: 1,
      rare: 1,
      type: 1,
      effect: {
        defence: 5
      }
    },
    {
      id: 6,
      name: "\u788E\u5251\u5203",
      level: 1,
      wear: 150,
      stack: 1,
      rare: 3,
      type: 1,
      effect: {
        attackMin: 15,
        attackMax: 21
      }
    },
    {
      id: 7,
      name: "\u9EBB\u5E03\u9774",
      level: 1,
      wear: 480,
      stack: 1,
      rare: 1,
      type: 1,
      effect: {
        defence: 3
      }
    }
  ];
  const map = [
    {
      id: 1,
      name: "\u81EA\u5BB6\u519C\u573A",
      level: 1,
      linked: [
        2,
        4
      ],
      monsters: [
        1,
        2
      ],
      deep: 0
    },
    {
      id: 2,
      name: "\u5B81\u9759\u4E4B\u68EE",
      level: 3,
      linked: [
        1,
        3
      ],
      monsters: [
        1,
        2,
        3
      ],
      deep: 1
    },
    {
      id: 3,
      name: "\u98D8\u6E3A\u6E56",
      level: 6,
      linked: [
        2
      ],
      monsters: [
        3,
        4,
        5
      ],
      deep: 2
    },
    {
      id: 4,
      name: "\u519C\u573A\u4E3B\u9547",
      level: 0,
      linked: [
        1
      ],
      monsters: [],
      deep: 1
    }
  ];
  const effectCnsRef = vue.ref(effectCns);
  const errorCnsRef = vue.ref(errorCns);
  const monsterRef = vue.ref(monster);
  vue.ref(goods);
  const mapRef = vue.ref(map);
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$h = {
    __name: "index",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createCommentVNode(" \u7EBF "),
          vue.createElementVNode("div", { class: "comLine" }, [
            vue.createElementVNode("div", { class: "comLine_line" }),
            vue.createElementVNode("div", { class: "comLine_txt" }, "Player"),
            vue.createElementVNode("div", { class: "comLine_line" })
          ])
        ], 2112);
      };
    }
  };
  const ComLine = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-7b7834fe"], ["__file", "/Users/cce/Desktop/myDemo/uniappGame/uniGame/src/components/comLine/index.vue"]]);
  let errorCnsRefTxt = new Map(Object.entries(errorCnsRef.value));
  const request = (path = "", method = "GET", contentType = "application/json", data = {}) => {
    const token2 = uni.getStorageSync("token");
    const Authorization = token2 ? `Bearer ${token2}` : "";
    return new Promise((resolve, reject) => {
      uni.request({
        header: {
          "Authorization": Authorization,
          "Content-Type": contentType,
          "Accept": contentType
        },
        url: "http://117.78.26.78" + path,
        method,
        data,
        success(response) {
          if (response.statusCode == 200) {
            resolve(response.data);
          } else if (response.statusCode == 401) {
            uni.showToast({
              icon: "none",
              title: "\u767B\u5F55\u8FC7\u671F\u4E86\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55!",
              duration: 5e3
            });
            uni.clearStorageSync();
            uni.reLaunch({
              url: "/pages/loginOrRegister/index"
            });
          } else {
            uni.showToast({
              icon: "none",
              title: errorCnsRefTxt.get(response.data.message),
              duration: 5e3
            });
            resolve(response.data);
          }
        },
        fail(err) {
          uni.showToast({
            icon: "none",
            title: "\u8BF7\u6C42\u5931\u8D25\u4E86\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\uFF01",
            duration: 1500
          });
          reject(err);
        },
        complete() {
        }
      });
    });
  };
  function postLogin(params) {
    return request(`/auth/login`, "POST", "application/json", params);
  }
  function postRegister(params) {
    return request(`/auth/signup`, "POST", "application/json", params);
  }
  function postUserInfo(params) {
    return request(`/user/info`, "POST", "application/json", params);
  }
  function getFightFind(params) {
    return request(`/fight/find`, "GET", "application/json", params);
  }
  function postFightAction(params) {
    return request(`/fight/action`, "POST", "application/json", params);
  }
  function postFightPrize(params) {
    return request(`/fight/prize`, "POST", "application/json", params);
  }
  let bgAudioPaht = "../../static/audio/bg.mp3";
  let AttackAudioPaht = "../../static/audio/attack.mp3";
  let innerAudioContext = uni.createInnerAudioContext();
  const audioPlay = (state = 1) => {
    if (state == 0) {
      innerAudioContext.pause();
      return;
    } else if (state == 1) {
      innerAudioContext.autoplay = true;
      innerAudioContext.loop = true;
      innerAudioContext.src = bgAudioPaht;
      innerAudioContext.onPlay();
    } else if (state == 2) {
      innerAudioContext.play();
    }
  };
  const audioAttack = () => {
    let innerAudioContext2 = uni.createInnerAudioContext();
    innerAudioContext2.autoplay = true;
    innerAudioContext2.src = AttackAudioPaht;
    innerAudioContext2.onPlay({});
  };
  const audioClose = () => {
    audioPlay(0);
  };
  const handleGetUserInfo = () => {
    if (useInfo.value.token) {
      postUserInfo({
        "player": true,
        "fighter": true,
        "backpack": true,
        "equipment": true
      }).then((res) => {
        formatAppLog("log", "at components/comBattle/action.js:46", res, "\u73A9\u5BB6\u6700\u65B0\u4FE1\u606F->comBattle->action->handleGetUserInfo->");
        uni.setStorageSync("playerInfo", res.player);
        battleInfo.value.player = (res == null ? void 0 : res.player) ? res == null ? void 0 : res.player : {}, battleInfo.value.monster = (res == null ? void 0 : res.fighter) ? res == null ? void 0 : res.fighter : {};
      });
    }
  };
  const pickUupCorpses = (txtArr2, scrollIndex2) => {
    postFightPrize().then((res) => {
      txtCopywriting(res, txtArr2, 5, scrollIndex2);
      battleInfo.value.monster = {};
    });
  };
  const upDown = (txtArr2, scrollIndex2) => {
    setTimeout(() => {
      scrollIndex2.id = `id-${txtArr2.list.length - 1}`;
    });
  };
  const txtCopywriting = (response, txtArr2, status, scrollIndex2, effect = -1, bloodTxt) => {
    var _a, _b, _c, _d;
    let statusObj = {
      0: `\u4F60\u9047\u5230\u4E86\u4E00\u53EA${response.name},\u5B83\u5728\u60A0\u95F2\u7684\u6652\u592A\u9633`,
      1: bloodTxt,
      2: `${(_b = (_a = battleInfo == null ? void 0 : battleInfo.value) == null ? void 0 : _a.monster) == null ? void 0 : _b.name}\u88AB\u4F60\u51FB\u8D25\u4E86\uFF01`,
      3: `${(_d = (_c = battleInfo == null ? void 0 : battleInfo.value) == null ? void 0 : _c.monster) == null ? void 0 : _d.name}\u628A\u4F60\u6253\u5012\u4E86\uFF01`,
      4: `\u4F60\u9003\u8DD1\u4E86...`,
      5: response.length ? `\u83B7\u5F97\u6218\u5229\u54C1${"id=" + response[0].id}\u5F85\u5F00\u53D1...` : `\u4EC0\u4E48\u90FD\u6CA1\u6709\u83B7\u5F97...`
    };
    txtArr2.list.push({
      liTxt: effect > -1 ? statusObj[status] : statusObj[status]
    });
    upDown(txtArr2, scrollIndex2);
  };
  const buckleBlood = (item, response, txtArr2, status, scrollIndex2) => {
    var _a, _b, _c, _d;
    let eff = new Map(Object.entries(effectCnsRef.value));
    if ((_a = response == null ? void 0 : response.mEffects) == null ? void 0 : _a.length) {
      let monsterTxt = `${item.value.monster.name}\u5BF9\u4F60\u4F7F\u7528\u4E86${eff.get(response.mEffects[0].effect)}`;
      if (response.mEffects[0].effect == "attack") {
        monsterTxt += `,\u9020\u6210\u4E86${response.mEffects[0].value}\u70B9\u4F24\u5BB3`;
        item.value.player.hp = item.value.player.hp - response.mEffects[0].value;
      }
      if (response.mEffects[0].effect == "runaway")
        ;
      if (response.mEffects[0].effect == "attackTox")
        ;
      if (response.mEffects[0].effect == "hpPlus")
        ;
      if (response.mEffects[0].effect == "hpReduce")
        ;
      txtCopywriting(response, txtArr2, status, scrollIndex2, 0, monsterTxt);
    }
    if ((_b = response == null ? void 0 : response.pEffects) == null ? void 0 : _b.length) {
      let playerTxt = `\u4F60\u653B\u51FB\u4E86\u4E00\u4E0B${(_d = (_c = item == null ? void 0 : item.value) == null ? void 0 : _c.monster) == null ? void 0 : _d.name},\u9020\u6210\u4E86${response.pEffects[0].value}\u4F24\u5BB3`;
      item.value.monster.hp = item.value.monster.hp - response.pEffects[0].value;
      txtCopywriting(response, txtArr2, status, scrollIndex2, 1, playerTxt);
    }
  };
  const handleSeachItem = (txtArr2, scrollIndex2) => {
    if (Object.keys(battleInfo.value.monster).length) {
      uni.showLoading({
        icon: "none",
        title: "\u6218\u6597\u4E2D...",
        mask: true
      });
      postFightAction({
        action: 4
      }).then((res) => {
        uni.hideLoading();
        if (res.status == 1) {
          buckleBlood(battleInfo, res, txtArr2, 1, scrollIndex2);
          audioAttack();
        }
        if (res.status == 2) {
          pickUupCorpses(txtArr2, scrollIndex2);
        }
        if (res.status == 3) {
          uni.showToast({
            icon: "none",
            title: "\u554A~~~\u6211\u6B7B\u4E86\uFF01\uFF01\uFF01",
            duration: 2e3,
            mask: true,
            success() {
              setTimeout(() => {
                uni.reLaunch({
                  url: "/pages/diePage/index"
                });
              }, 2e3);
            }
          });
        }
      });
    } else {
      uni.showLoading({
        icon: "none",
        title: "\u63A2\u7D22\u4E2D...",
        mask: true
      });
      getFightFind().then((res) => {
        uni.hideLoading();
        battleInfo.value.monster = res;
        txtCopywriting(res, txtArr2, 0, scrollIndex2);
      });
    }
  };
  const handleRunAway = (txtArr2, scrollIndex2) => {
    postFightAction({
      action: 3
    }).then((res) => {
      if (res.status == 4) {
        txtCopywriting(res, txtArr2, 4, scrollIndex2);
      }
      battleInfo.value.monster = {};
    });
  };
  const handleSkill = () => {
    uni.showToast({
      icon: "none",
      title: "\u6280\u80FD\u5F00\u53D1\u4E2D"
    });
  };
  const handleToMap = () => {
    uni.navigateTo({
      url: "/pages/canvasMap/index"
    });
  };
  const handleOpenKnapsack = () => {
    hiddenPopup.value.show = true;
    pageSwitchMenu.value.index = 0;
  };
  const handleToShop = () => {
    uni.navigateTo({
      url: "/pages/shopping/index"
    });
  };
  const handleToForge = () => {
    uni.navigateTo({
      url: "/pages/forge/index"
    });
  };
  const handleLeave = () => {
    uni.clearStorageSync();
    uni.reLaunch({
      url: "/pages/loginOrRegister/index"
    });
  };
  function bloodShow(objInfo = {}, status = 0) {
    let bloodNum = 0;
    let monsterRefArr = monsterRef.value;
    if (status == 0 && (objInfo == null ? void 0 : objInfo.hp) > -1) {
      bloodNum = +(objInfo.hp / objInfo.hpMax) * 100;
    }
    if (status == 1 && objInfo.hp > -1) {
      for (let i = 0; i < monsterRefArr.length; i++) {
        if (objInfo.id == monsterRefArr[i].id) {
          bloodNum = +(objInfo.hp / monsterRefArr[i].hp) * 100;
        }
      }
    }
    return bloodNum;
  }
  const _sfc_main$g = {
    __name: "index",
    setup(__props) {
      const progressConfig = {
        border_radius: 50,
        stroke_width: 15,
        active: false,
        backgroundColor: "#e6e6e670"
      };
      vue.watch([pageSwitch.value], ([newValue1, oldValue1]) => {
        txtArr.value.list.push({
          liTxt: `\u6765\u5230\u4E86${pageArr.value.list[pageSwitch.value.index].name}`
        });
      });
      handleGetUserInfo();
      return (_ctx, _cache) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
        return vue.unref(useInfo).token ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          class: "comBattleDiv"
        }, [
          vue.createCommentVNode(" \u89D2\u8272 + \u602A\u7269 "),
          vue.createElementVNode("div", { class: "comBattleDiv_battle_1" }, [
            vue.createCommentVNode(" \u89D2\u8272 "),
            vue.createElementVNode("div", { class: "comBattleDiv_battle_1_div" }, [
              vue.createElementVNode("div", { class: "comBattleDiv_battle_1_div_i" }, [
                vue.createElementVNode("div", { class: "comBattleDiv_battle_1_div_img" }, [
                  vue.createCommentVNode(' <image :src="battleInfo.player.img" alt="" /> ')
                ])
              ]),
              vue.createElementVNode("div", { class: "comBattleDiv_battle_1_div_i_name" }, vue.toDisplayString(vue.unref(battleInfo).player.name), 1),
              vue.createElementVNode("progress", {
                style: { "margin": "0 0 auto 0" },
                activeColor: "#ceb284",
                class: "comBattleDiv_battle_1_div_progress",
                "border-radius": progressConfig.border_radius,
                "stroke-width": progressConfig.stroke_width,
                backgroundColor: progressConfig.backgroundColor,
                active: progressConfig.active,
                percent: vue.unref(bloodShow)(vue.unref(battleInfo).player, 0)
              }, null, 8, ["border-radius", "stroke-width", "backgroundColor", "active", "percent"]),
              vue.createElementVNode("div", { class: "comBattleDiv_battle_1_div_blood1" }, vue.toDisplayString(vue.unref(battleInfo).player.hp), 1)
            ]),
            vue.createCommentVNode(" \u602A\u7269 "),
            vue.createElementVNode("div", { class: "comBattleDiv_battle_1_div" }, [
              vue.createElementVNode("div", {
                class: "comBattleDiv_battle_1_div_i",
                style: { "margin": "0 0 0 auto" }
              }, [
                vue.createElementVNode("div", { class: "comBattleDiv_battle_1_div_img" }, [
                  vue.createCommentVNode(' <image :src="battleInfo.monster.img" alt="" /> ')
                ])
              ]),
              Object.keys(vue.unref(battleInfo).monster).length ? (vue.openBlock(), vue.createElementBlock("div", {
                key: 0,
                class: "comBattleDiv_battle_1_div_i_name",
                style: { "float": "right" }
              }, vue.toDisplayString((_b = (_a = vue.unref(battleInfo)) == null ? void 0 : _a.monster) == null ? void 0 : _b.name), 1)) : vue.createCommentVNode("v-if", true),
              Object.keys(vue.unref(battleInfo).monster).length ? (vue.openBlock(), vue.createElementBlock("progress", {
                key: 1,
                style: { "margin": "0 0 0 auto", "transform": "rotate(180deg)" },
                activeColor: "#ceb284",
                class: "comBattleDiv_battle_1_div_progress",
                "border-radius": progressConfig.border_radius,
                "stroke-width": progressConfig.stroke_width,
                backgroundColor: progressConfig.backgroundColor,
                active: progressConfig.active,
                percent: vue.unref(bloodShow)((_c = vue.unref(battleInfo)) == null ? void 0 : _c.monster, 1)
              }, null, 8, ["border-radius", "stroke-width", "backgroundColor", "active", "percent"])) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("div", { class: "comBattleDiv_battle_1_div_blood2" }, vue.toDisplayString((_e = (_d = vue.unref(battleInfo)) == null ? void 0 : _d.monster) == null ? void 0 : _e.hp), 1)
            ])
          ]),
          vue.createCommentVNode(" \u7EBF "),
          vue.createVNode(ComLine),
          vue.createCommentVNode(" \u6218\u6597txt "),
          vue.createElementVNode("scroll-view", {
            class: "comBattleDiv_battle_2",
            "scroll-y": true,
            "show-scrollbar": false,
            "scroll-anchoring": true,
            "scroll-with-animation": true,
            "scroll-into-view": vue.unref(scrollIndex).id
          }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(txtArr).list, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("div", {
                id: "id-" + index
              }, [
                vue.createElementVNode("div", null, vue.toDisplayString(item.liTxt), 1)
              ], 8, ["id"]);
            }), 256))
          ], 8, ["scroll-into-view"]),
          vue.createCommentVNode(" \u64CD\u4F5C - button "),
          vue.createElementVNode("div", { class: "comBattleDiv_battle_3" }, [
            vue.createElementVNode("div", {
              class: "",
              onClick: _cache[0] || (_cache[0] = ($event) => vue.unref(handleSeachItem)(vue.unref(txtArr), vue.unref(scrollIndex)))
            }, vue.toDisplayString(Object.keys((_f = vue.unref(battleInfo)) == null ? void 0 : _f.monster).length ? "\u6218\u6597" : "\u63A2\u7D22"), 1),
            Object.keys((_g = vue.unref(battleInfo)) == null ? void 0 : _g.monster).length ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              class: "",
              onClick: _cache[1] || (_cache[1] = ($event) => vue.unref(handleRunAway)(vue.unref(txtArr), vue.unref(scrollIndex)))
            }, "\u9003\u8DD1")) : vue.createCommentVNode("v-if", true),
            Object.keys((_h = vue.unref(battleInfo)) == null ? void 0 : _h.monster).length ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 1,
              class: "",
              onClick: _cache[2] || (_cache[2] = (...args) => vue.unref(handleSkill) && vue.unref(handleSkill)(...args))
            }, "\u6280\u80FD")) : vue.createCommentVNode("v-if", true),
            Object.keys((_i = vue.unref(battleInfo)) == null ? void 0 : _i.monster).length ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 2,
              class: "",
              onClick: _cache[3] || (_cache[3] = () => {
              })
            }, "\u9053\u5177")) : vue.createCommentVNode("v-if", true),
            !Object.keys((_j = vue.unref(battleInfo)) == null ? void 0 : _j.monster).length ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 3,
              class: "",
              onClick: _cache[4] || (_cache[4] = (...args) => vue.unref(handleOpenKnapsack) && vue.unref(handleOpenKnapsack)(...args))
            }, "\u80CC\u5305")) : vue.createCommentVNode("v-if", true),
            !Object.keys((_k = vue.unref(battleInfo)) == null ? void 0 : _k.monster).length ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 4,
              class: "",
              onClick: _cache[5] || (_cache[5] = (...args) => vue.unref(handleToMap) && vue.unref(handleToMap)(...args))
            }, "\u5730\u56FE")) : vue.createCommentVNode("v-if", true),
            !Object.keys((_l = vue.unref(battleInfo)) == null ? void 0 : _l.monster).length ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 5,
              class: "",
              onClick: _cache[6] || (_cache[6] = (...args) => vue.unref(handleToShop) && vue.unref(handleToShop)(...args))
            }, "\u5546\u5E97")) : vue.createCommentVNode("v-if", true),
            !Object.keys((_m = vue.unref(battleInfo)) == null ? void 0 : _m.monster).length ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 6,
              class: "",
              onClick: _cache[7] || (_cache[7] = (...args) => vue.unref(handleToForge) && vue.unref(handleToForge)(...args))
            }, "\u953B\u9020")) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("div", {
              class: "",
              onClick: _cache[8] || (_cache[8] = (...args) => vue.unref(handleLeave) && vue.unref(handleLeave)(...args))
            }, "\u9000\u51FA")
          ])
        ])) : vue.createCommentVNode("v-if", true);
      };
    }
  };
  const ComBattle = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-781aabaf"], ["__file", "/Users/cce/Desktop/myDemo/uniappGame/uniGame/src/components/comBattle/index.vue"]]);
  const _sfc_main$f = {};
  function _sfc_render$3(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("div", { class: "main" }, [
      vue.createElementVNode("div")
    ]);
  }
  const ComPeople = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$3], ["__scopeId", "data-v-8d98681c"], ["__file", "/Users/cce/Desktop/myDemo/uniappGame/uniGame/src/components/comPeople/index.vue"]]);
  const _sfc_main$e = {
    __name: "index",
    setup(__props) {
      const progressConfig = {
        border_radius: 50,
        stroke_width: 15,
        active: false,
        backgroundColor: "#e6e6e670"
      };
      let introduce = vue.ref({
        txt: ""
      });
      const handleRightIn = (item, index) => {
        formatAppLog("log", "at components/comKnapsack/index.vue:25", "\u7269\u54C1\u70B9\u51FB======", index);
        introduce.value.txt = index + "\u7269\u54C1\u70B9\u51FB";
      };
      const handleCloseComKnapsack = () => {
        hiddenPopup.value.show = false;
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", { class: "comKnapsackDiv" }, [
          vue.createCommentVNode(" \u4E0A - \u4EBA\u5F62-\u88C5\u5907 "),
          vue.createElementVNode("div", { class: "comKnapsackDiv_left" }, [
            vue.createElementVNode("div", {
              class: "comKnapsackDiv_left_seat",
              style: vue.normalizeStyle({ "--conHeight": vue.unref(headerMargin) + "px" })
            }, null, 4),
            vue.createElementVNode("div", {
              class: "comKnapsackDiv_leftUp",
              style: vue.normalizeStyle({ "--conHeight": vue.unref(headerMargin) + "px" })
            }, [
              vue.createElementVNode("div", { class: "comKnapsackDiv_leftUp_left" }, [
                vue.createElementVNode("div", { class: "comKnapsackDiv_leftUp_left1" }, [
                  vue.createElementVNode("div", { class: "comKnapsackDiv_leftUp_left1_image" }, [
                    vue.createElementVNode("image", {
                      src: "/static/image/bg_top1.png",
                      mode: ""
                    })
                  ]),
                  vue.createElementVNode("div", { class: "comKnapsackDiv_leftUp_left1_txt" }, [
                    vue.createElementVNode("div", null, "name"),
                    vue.createElementVNode("div", null, "sex")
                  ])
                ]),
                vue.createElementVNode("div", { class: "comKnapsackDiv_leftUp_left2" }, [
                  vue.createElementVNode("div", null, "\u8840\u6761:"),
                  vue.createElementVNode("div", { class: "comKnapsackDiv_leftUp_left2_pro" }, [
                    vue.createElementVNode("progress", {
                      activeColor: "#ceb284",
                      class: "comKnapsackDiv_progress",
                      "border-radius": progressConfig.border_radius,
                      "stroke-width": progressConfig.stroke_width,
                      backgroundColor: progressConfig.backgroundColor,
                      active: progressConfig.active,
                      percent: vue.unref(bloodShow)(vue.unref(battleInfo).player, 0)
                    }, null, 8, ["border-radius", "stroke-width", "backgroundColor", "active", "percent"]),
                    vue.createElementVNode("div", { class: "comKnapsackDiv_leftUp_left2_proNum" }, vue.toDisplayString(vue.unref(battleInfo).player.hp), 1)
                  ])
                ]),
                vue.createElementVNode("div", { class: "comKnapsackDiv_leftUp_left2" }, [
                  vue.createElementVNode("div", null, "\u84DD\u6761:"),
                  vue.createElementVNode("div", { class: "comKnapsackDiv_leftUp_left2_pro" }, [
                    vue.createElementVNode("progress", {
                      activeColor: "#ceb284",
                      class: "comKnapsackDiv_progress",
                      "border-radius": progressConfig.border_radius,
                      "stroke-width": progressConfig.stroke_width,
                      backgroundColor: progressConfig.backgroundColor,
                      active: progressConfig.active,
                      percent: vue.unref(bloodShow)(vue.unref(battleInfo).player, 0)
                    }, null, 8, ["border-radius", "stroke-width", "backgroundColor", "active", "percent"]),
                    vue.createElementVNode("div", { class: "comKnapsackDiv_leftUp_left2_proNum" }, vue.toDisplayString(vue.unref(battleInfo).player.hp), 1)
                  ])
                ]),
                vue.createElementVNode("div", { class: "comKnapsackDiv_leftUp_left2" }, [
                  vue.createElementVNode("div", null, "\u4F53\u529B:"),
                  vue.createElementVNode("div", { class: "comKnapsackDiv_leftUp_left2_pro" }, [
                    vue.createElementVNode("progress", {
                      activeColor: "#ceb284",
                      class: "comKnapsackDiv_progress",
                      "border-radius": progressConfig.border_radius,
                      "stroke-width": progressConfig.stroke_width,
                      backgroundColor: progressConfig.backgroundColor,
                      active: progressConfig.active,
                      percent: vue.unref(bloodShow)(vue.unref(battleInfo).player, 0)
                    }, null, 8, ["border-radius", "stroke-width", "backgroundColor", "active", "percent"]),
                    vue.createElementVNode("div", { class: "comKnapsackDiv_leftUp_left2_proNum" }, vue.toDisplayString(vue.unref(battleInfo).player.hp), 1)
                  ])
                ]),
                vue.createElementVNode("div", { class: "comKnapsackDiv_leftUp_left2" }, [
                  vue.createElementVNode("div", null, "\u7ECF\u9A8C:"),
                  vue.createElementVNode("div", { class: "comKnapsackDiv_leftUp_left2_pro" }, [
                    vue.createElementVNode("progress", {
                      activeColor: "#ceb284",
                      class: "comKnapsackDiv_progress",
                      "border-radius": progressConfig.border_radius,
                      "stroke-width": progressConfig.stroke_width,
                      backgroundColor: progressConfig.backgroundColor,
                      active: progressConfig.active,
                      percent: vue.unref(bloodShow)(vue.unref(battleInfo).player, 0)
                    }, null, 8, ["border-radius", "stroke-width", "backgroundColor", "active", "percent"]),
                    vue.createElementVNode("div", { class: "comKnapsackDiv_leftUp_left2_proNum" }, vue.toDisplayString(vue.unref(battleInfo).player.hp), 1)
                  ])
                ]),
                vue.createElementVNode("div", { class: "comKnapsackDiv_leftUp_left2" }, [
                  vue.createElementVNode("div", null, "\u5FC3\u60C5:"),
                  vue.createElementVNode("div", { class: "comKnapsackDiv_leftUp_left2_pro" }, [
                    vue.createElementVNode("progress", {
                      activeColor: "#ceb284",
                      class: "comKnapsackDiv_progress",
                      "border-radius": progressConfig.border_radius,
                      "stroke-width": progressConfig.stroke_width,
                      backgroundColor: progressConfig.backgroundColor,
                      active: progressConfig.active,
                      percent: vue.unref(bloodShow)(vue.unref(battleInfo).player, 0)
                    }, null, 8, ["border-radius", "stroke-width", "backgroundColor", "active", "percent"]),
                    vue.createElementVNode("div", { class: "comKnapsackDiv_leftUp_left2_proNum" }, vue.toDisplayString(vue.unref(battleInfo).player.hp), 1)
                  ])
                ])
              ]),
              vue.createCommentVNode(" \u4E0A - \u53F3 - \u4EBA- \u88C5\u5907 "),
              vue.createElementVNode("div", { class: "comKnapsackDiv_leftUp_right" }, [
                vue.createCommentVNode(" <div>1</div>\n					<div>1</div>\n					<div>1</div>\n					<div>1</div>\n					<div>1</div>\n					<div>1</div> "),
                vue.createVNode(ComPeople)
              ])
            ], 4)
          ]),
          vue.createCommentVNode(" \u4E0B - \u7269\u54C1 "),
          vue.createElementVNode("div", { class: "comKnapsackDiv_right" }, [
            vue.createCommentVNode(" \u7269\u54C1\u5217\u8868 "),
            vue.createElementVNode("div", { class: "comKnapsackDiv_right_top" }, [
              vue.createElementVNode("div", { class: "comKnapsackDiv_right_tops" }, [
                (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList([, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,], (item, index) => {
                  return vue.createElementVNode("div", {
                    class: "comKnapsackDiv_right_list",
                    onClick: vue.withModifiers(($event) => handleRightIn(item, index), ["stop"])
                  }, [
                    vue.createElementVNode("div", { class: "comKnapsackDiv_right_li" }, " \u56FE+\u540D ")
                  ], 8, ["onClick"]);
                }), 64))
              ])
            ]),
            vue.createCommentVNode(" \u7269\u54C1\u4ECB\u7ECD "),
            vue.createElementVNode("div", { class: "comKnapsackDiv_right_txt" }, vue.toDisplayString(vue.unref(introduce).txt), 1),
            vue.createCommentVNode(" \u64CD\u4F5C "),
            vue.createElementVNode("div", { class: "comKnapsackDiv_right_butlist" }, [
              vue.createElementVNode("div", { class: "comKnapsackDiv_right_butlist_but" }, [
                vue.createElementVNode("div", { class: "comKnapsackDiv_right_button" }, "\u4F7F\u7528"),
                vue.createElementVNode("div", { class: "comKnapsackDiv_right_button" }, "\u88C5\u5907"),
                vue.createElementVNode("div", { class: "comKnapsackDiv_right_button" }, "\u5378\u4E0B"),
                vue.createElementVNode("div", { class: "comKnapsackDiv_right_button" }, "\u4E22\u5F03")
              ]),
              vue.createElementVNode("div", {
                class: "comKnapsackDiv_right_button",
                onClick: handleCloseComKnapsack
              }, "\u5173\u95ED")
            ])
          ])
        ]);
      };
    }
  };
  const ComKnapsack = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-8fc46dda"], ["__file", "/Users/cce/Desktop/myDemo/uniappGame/uniGame/src/components/comKnapsack/index.vue"]]);
  const AD_URL = "https://wxac1.dcloud.net.cn/openPage/acs";
  const AD_REPORT_URL = "https://wxac1.dcloud.net.cn/openPage/acs";
  const events = {
    load: "load",
    close: "close",
    error: "error"
  };
  const _sfc_main$d = {
    name: "AdInteractive",
    props: {
      options: {
        type: [Object, Array],
        default() {
          return {};
        }
      },
      disabled: {
        type: [Boolean, String],
        default: false
      },
      adpid: {
        type: [Number, String],
        default: ""
      },
      openType: {
        type: String,
        default: "interactive"
      },
      openPagePath: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        adData: null,
        loading: false,
        errorMessage: ""
      };
    },
    created() {
      this._interactiveUrl = null;
      if (this.openPagePath) {
        this.getAdData();
      }
    },
    methods: {
      getAdData() {
        if (!this.adpid) {
          this.$emit(events.error, {
            code: -5002,
            message: "invalid adpid"
          });
          return;
        }
        this.loading = true;
        uni.request({
          url: AD_URL,
          method: "POST",
          data: {
            adpid: this.adpid
          },
          timeout: 5e3,
          dataType: "json",
          success: (res) => {
            if (res.statusCode !== 200) {
              this.$emit(events.error, {
                errCode: res.statusCode,
                errMsg: res.statusCode
              });
              return;
            }
            const responseData = res.data;
            if (responseData.ret === 0) {
              this._interactiveUrl = responseData.data.adp_url;
              this.adData = {
                imgUrl: responseData.data.icon_url,
                openPath: this.openPagePath + "?url=" + encodeURIComponent(this._interactiveUrl)
              };
              this.$emit(events.load, this.adData);
            } else {
              const errMsg = {
                errCode: responseData.ret,
                errMsg: responseData.msg
              };
              this.errorMessage = errMsg;
              this.$emit(events.error, errMsg);
            }
          },
          fail: (err) => {
            this.$emit(events.error, {
              errCode: "",
              errMsg: err.errMsg
            });
          },
          complete: () => {
            this.loading = false;
          }
        });
      },
      onclick() {
        if (this.disabled) {
          return;
        }
        if (!this._interactiveUrl) {
          return;
        }
        uni.navigateTo({
          url: this.adData.openPath
        });
        this._report();
      },
      _report() {
        uni.request({
          url: AD_REPORT_URL,
          data: {
            adpid: this.adpid,
            t: "10019"
          },
          timeout: 5e3,
          dataType: "json"
        });
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onclick && $options.onclick(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default", {
        options: $props.options,
        data: $data.adData,
        loading: $data.loading,
        error: $data.errorMessage
      }, void 0, true)
    ]);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$2], ["__scopeId", "data-v-449f90a6"], ["__file", "/Users/cce/Desktop/myDemo/uniappGame/uniGame/node_modules/@dcloudio/uni-components/lib/ad-interactive/ad-interactive.vue"]]);
  const _sfc_main$c = {
    data() {
      return {};
    },
    methods: {
      onadload(e) {
        formatAppLog("log", "at components/comAdvertisement/index.vue:28", "\u5E7F\u544A\u6570\u636E\u52A0\u8F7D\u6210\u529F", e);
      },
      onaderror(e) {
        formatAppLog("log", "at components/comAdvertisement/index.vue:32", "onaderror", e.errCode, e.errMsg);
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ad_interactive = resolveEasycom(vue.resolveDynamicComponent("ad-interactive"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createCommentVNode(" \u7528\u6237\u70B9\u51FB\u7EC4\u4EF6\u540E\u5C06\u6253\u5F00\u5E7F\u544A\u9875\u9762\uFF0C\u53C2\u89C1\u5C5E\u6027 open-page-path "),
      vue.createVNode(_component_ad_interactive, {
        adpid: "1000000001",
        onLoad: $options.onadload,
        onError: $options.onaderror,
        "open-page-path": "/pages/xxxxxxxxxx"
      }, {
        default: vue.withCtx(({ data, loading, error }) => [
          loading ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, "Loading")) : vue.createCommentVNode("v-if", true),
          data ? (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, [
            vue.createCommentVNode(" \u53EF\u4EE5\u81EA\u5B9A\u4E49\u6B64\u56FE\u7247\uFF0C\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u9ED8\u8BA4\u7D20\u6750\uFF0C\u901A\u8FC7 uni-ad \u540E\u53F0\u914D\u7F6E "),
            vue.createElementVNode("image", {
              src: data.imgUrl,
              style: { "width": "128px", "height": "72px" }
            }, null, 8, ["src"])
          ])) : vue.createCommentVNode("v-if", true),
          error ? (vue.openBlock(), vue.createElementBlock("view", { key: 2 }, vue.toDisplayString(error.errMsg), 1)) : vue.createCommentVNode("v-if", true)
        ]),
        _: 1
      }, 8, ["onLoad", "onError"])
    ]);
  }
  const ComAdvertisement = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$1], ["__file", "/Users/cce/Desktop/myDemo/uniappGame/uniGame/src/components/comAdvertisement/index.vue"]]);
  let mapRefPageArr = JSON.parse(JSON.stringify(mapRef.value));
  for (let i of mapRefPageArr) {
    i.pageComponent = vue.markRaw(ComBattle);
  }
  const pageArr = vue.ref({
    list: mapRefPageArr
  });
  const pageSwitch = vue.ref({
    index: 0
  });
  const pageArrMenu = vue.ref({
    list: [{
      "pageKey": vue.markRaw(ComKnapsack)
    }, {
      "pageKey": vue.markRaw(ComAdvertisement)
    }]
  });
  const pageSwitchMenu = vue.ref({
    index: 0
  });
  const hiddenPopup = vue.ref({
    show: false,
    width: 100,
    height: 100
  });
  let txtArr = vue.ref({
    list: [{
      liTxt: `\u6765\u5230\u4E86${pageArr.value.list[pageSwitch.value.index].name}`
    }]
  });
  let scrollIndex = vue.ref({
    id: "id-1"
  });
  const useInfo = vue.ref({
    token: uni.getStorageSync("token") ? uni.getStorageSync("token") : ""
  });
  const battleInfo = vue.ref({
    player: uni.getStorageSync("playerInfo") ? uni.getStorageSync("playerInfo") : {},
    monster: {}
  });
  const _sfc_main$b = {
    __name: "index",
    props: {
      comHeight: {
        type: Object
      }
    },
    setup(__props) {
      const props = __props;
      let timeDate = vue.ref(new hooks().format("YYYY-MM-DD"));
      let addName = vue.ref({
        name: pageArr.value.list[0].name
      });
      vue.watch(pageSwitch.value, (newValue, oldValue) => {
        addName.value.name = pageArr.value.list[newValue.index].name;
      });
      const headerHeight2 = props.comHeight.headerHeight + props.comHeight.headerMargin;
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: "comHeaderD",
          style: vue.normalizeStyle({ "--headerHeight": headerHeight2 + "rpx" })
        }, [
          vue.createElementVNode("div", { class: "comHeaderDiv" }, [
            vue.createElementVNode("div", null, vue.toDisplayString(vue.unref(timeDate)), 1),
            vue.createElementVNode("div", { class: "comHeaderDiv_addName" }, vue.toDisplayString(vue.unref(addName).name), 1)
          ])
        ], 4);
      };
    }
  };
  const ComHeader = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-87c09459"], ["__file", "/Users/cce/Desktop/myDemo/uniappGame/uniGame/src/components/comHeader/index.vue"]]);
  const _sfc_main$a = {
    __name: "index",
    setup(__props) {
      const handleDiv = () => {
        hiddenPopup.value.show = false;
      };
      return (_ctx, _cache) => {
        return vue.unref(hiddenPopup).show ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          class: "comPopupDiv",
          onClick: vue.withModifiers(handleDiv, ["stop"])
        }, [
          vue.createElementVNode("div", {
            class: "comPopupDiv_conter",
            style: vue.normalizeStyle({ "--width": vue.unref(hiddenPopup).width + "%", "--height": vue.unref(hiddenPopup).height + "%" }),
            onClick: _cache[0] || (_cache[0] = vue.withModifiers(() => {
            }, ["stop"]))
          }, [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ], 4)
        ], 8, ["onClick"])) : vue.createCommentVNode("v-if", true);
      };
    }
  };
  const ComPopup = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-4a3567c6"], ["__file", "/Users/cce/Desktop/myDemo/uniappGame/uniGame/src/components/comPopup/index.vue"]]);
  const _sfc_main$9 = {
    __name: "index",
    setup(__props) {
      onLoad(() => {
        audioPlay();
      });
      onShow(() => {
        audioPlay(2);
      });
      onHide(() => {
        audioClose();
      });
      return (_ctx, _cache) => {
        var _a, _b;
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("div", { class: "content" }, [
            vue.createCommentVNode(" \u5218\u6D77\u5C4Fheader - \u76EE\u524D\u5360\u4F4D - \u663E\u793A\u573A\u666Fname "),
            vue.createVNode(ComHeader, { comHeight: vue.unref(conHeight) }, null, 8, ["comHeight"]),
            vue.createCommentVNode(" \u4E3B\u573A\u666F "),
            vue.createElementVNode("div", {
              class: "contentDiv",
              style: vue.normalizeStyle({ "--conHeight": vue.unref(headerMargin) + (vue.unref(headerHeight) / 2 + 3) + "px" })
            }, [
              (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent((_b = (_a = vue.unref(pageArr)) == null ? void 0 : _a.list[vue.unref(pageSwitch).index]) == null ? void 0 : _b.pageComponent)))
            ], 4),
            vue.createCommentVNode(" \u64CD\u4F5C\u9762\u677F - \u4EE5\u5F39\u7A97\u5F62\u5F0F "),
            vue.createVNode(ComPopup, {
              hiddenPopup: vue.unref(hiddenPopup).show
            }, {
              default: vue.withCtx(() => {
                var _a2;
                return [
                  (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent((_a2 = vue.unref(pageArrMenu)) == null ? void 0 : _a2.list[vue.unref(pageSwitchMenu).index]["pageKey"])))
                ];
              }),
              _: 1
            }, 8, ["hiddenPopup"])
          ]),
          vue.createCommentVNode(" \u80CC\u666F\u56FE "),
          vue.createElementVNode("div", { class: "bg" })
        ], 64);
      };
    }
  };
  const PagesContentIndex = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-148c4b58"], ["__file", "/Users/cce/Desktop/myDemo/uniappGame/uniGame/src/pages/content/index.vue"]]);
  const _sfc_main$8 = {
    __name: "index",
    setup(__props) {
      const handleToNewMap = (item, index) => {
        pageSwitch.value.index = index;
        setTimeout(() => {
          scrollIndex.value.id = `id-${txtArr.value.list.length - 1}`;
        }, 50);
        uni.navigateBack({
          delta: 1
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", { class: "conSceneList" }, [
          vue.createElementVNode("div", { class: "conSceneListL" }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(pageArr).list, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("div", {
                class: "conSceneListLi",
                key: index,
                onClick: ($event) => handleToNewMap(item, index)
              }, [
                vue.createElementVNode("div", { class: "conSceneListLi_title" }, [
                  vue.createElementVNode("div", null, vue.toDisplayString(item.name), 1),
                  vue.createElementVNode("div", { class: "conSceneListLi_title_state" }, "\u670D\u52A1\u4E2D")
                ]),
                vue.createElementVNode("div", { class: "conSceneListLi_txt" }, "\u670D\u52A1\u5185\u5BB9\uFF1Axxxxxx"),
                vue.createCommentVNode(' <div class="conSceneListLi_tiem">\u5F00\u56FE\u65F6\u95F4\uFF1Axxxxxx</div> ')
              ], 8, ["onClick"]);
            }), 128))
          ])
        ]);
      };
    }
  };
  const PagesCanvasMapIndex = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-419b8f55"], ["__file", "/Users/cce/Desktop/myDemo/uniappGame/uniGame/src/pages/canvasMap/index.vue"]]);
  const _imports_0$1 = "/static/image/1.png";
  const _sfc_main$7 = {
    __name: "index",
    setup(__props) {
      let shopArr = vue.ref(40);
      const handleShowToast = () => {
        uni.showToast({
          icon: "none",
          title: "\u6781\u54C1\u836F\u6C34"
        });
      };
      const handleBack2 = () => {
        uni.navigateBack({
          delta: 1
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", { class: "comShopD" }, [
          vue.createElementVNode("div", { class: "comShopDiv" }, [
            vue.createElementVNode("div", { onClick: handleBack2 }, "\u5173\u95ED"),
            vue.createCommentVNode(" npc "),
            vue.createElementVNode("div", { class: "comShopDiv_npc" }, [
              vue.createElementVNode("div", { class: "comShopDiv_npc_top" }, [
                vue.createElementVNode("div", { class: "comShopDiv_npc_top_image" }, [
                  vue.createElementVNode("image", {
                    src: _imports_0$1,
                    mode: ""
                  })
                ]),
                vue.createElementVNode("div", { class: "comShopDiv_npc_top_txt" }, [
                  vue.createElementVNode("div", null, "xxxxxxxx\u7684\u5546\u5E97"),
                  vue.createElementVNode("div", null, "xxxxxxxx\u7684\u4E00\u53E5\u8BDD")
                ])
              ]),
              vue.createElementVNode("div", { class: "comShopDiv_npc_tab" }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(shopArr), (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("div", { class: "comShopDiv_npc_tab_li" }, [
                    vue.createElementVNode("image", {
                      onClick: handleShowToast,
                      src: _imports_0$1,
                      mode: ""
                    })
                  ]);
                }), 256))
              ])
            ]),
            vue.createCommentVNode(" me "),
            vue.createElementVNode("div", { class: "comShopDiv_npc" }, [
              vue.createElementVNode("div", { class: "comShopDiv_npc_top" }, [
                vue.createElementVNode("div", { class: "comShopDiv_npc_top_image" }, [
                  vue.createElementVNode("image", {
                    src: _imports_0$1,
                    mode: ""
                  })
                ]),
                vue.createElementVNode("div", { class: "comShopDiv_npc_top_txt" }, [
                  vue.createElementVNode("div", null, "xxxxxxxx\u7684\u5546\u5E97"),
                  vue.createElementVNode("div", null, "xxxxxxxx\u7684\u4E00\u53E5\u8BDD")
                ])
              ]),
              vue.createElementVNode("div", { class: "comShopDiv_npc_tab" }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(shopArr), (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("div", { class: "comShopDiv_npc_tab_li" }, [
                    vue.createElementVNode("image", {
                      onClick: handleShowToast,
                      src: _imports_0$1,
                      mode: ""
                    })
                  ]);
                }), 256))
              ])
            ])
          ])
        ]);
      };
    }
  };
  const PagesShoppingIndex = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-6cc80e65"], ["__file", "/Users/cce/Desktop/myDemo/uniappGame/uniGame/src/pages/shopping/index.vue"]]);
  const handleStartForge = () => {
    formatAppLog("log", "at pages/forge/index.js:9", "\u5F00\u59CB\u953B\u9020");
  };
  const handleBack = () => {
    uni.navigateBack({
      delta: 1
    });
  };
  const _sfc_main$6 = {
    __name: "index",
    setup(__props) {
      vue.ref("\u953B\u9020");
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", null, [
          vue.createCommentVNode(" \u953B\u9020\u9762\u677F "),
          vue.createElementVNode("div", null, [
            vue.createElementVNode("div", null, "\u953B\u9020\u4E66"),
            vue.createElementVNode("div", null, "\u7ED3\u679C"),
            vue.createElementVNode("div", null, [
              vue.createElementVNode("div", null, "1"),
              vue.createElementVNode("div", null, "1"),
              vue.createElementVNode("div", null, "1"),
              vue.createElementVNode("div", null, "1")
            ])
          ]),
          vue.createCommentVNode(" \u80CC\u5305\u7269\u54C1 "),
          vue.createElementVNode("div", null, [
            vue.createElementVNode("div", null, "1"),
            vue.createElementVNode("div", null, "1"),
            vue.createElementVNode("div", null, "1"),
            vue.createElementVNode("div", null, "1"),
            vue.createElementVNode("div", null, "1"),
            vue.createElementVNode("div", null, "1"),
            vue.createElementVNode("div", null, "1")
          ]),
          vue.createCommentVNode(" \u64CD\u4F5C\u83DC\u5355 "),
          vue.createElementVNode("div", null, [
            vue.createElementVNode("div", {
              onClick: _cache[0] || (_cache[0] = (...args) => vue.unref(handleStartForge) && vue.unref(handleStartForge)(...args))
            }, "\u5F00\u59CB"),
            vue.createElementVNode("div", {
              onClick: _cache[1] || (_cache[1] = (...args) => vue.unref(handleBack) && vue.unref(handleBack)(...args))
            }, "\u79BB\u5F00")
          ])
        ]);
      };
    }
  };
  const PagesForgeIndex = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-90f83137"], ["__file", "/Users/cce/Desktop/myDemo/uniappGame/uniGame/src/pages/forge/index.vue"]]);
  const _sfc_main$5 = {
    __name: "index",
    setup(__props) {
      vue.ref("index");
      const handleBrokenBlood = () => {
        uni.reLaunch({
          url: "/pages/content/index"
        });
      };
      const handleFullBlood = () => {
        uni.showToast({
          icon: "none",
          title: "\u9700\u8981\u770B\u5E7F\u544A",
          duration: 3e3
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", { class: "diePageDiv" }, [
          vue.createElementVNode("div", { class: "diePageDiv_conter" }, [
            vue.createElementVNode("div", { class: "diePageDiv_conter_txt" }, "\u4F60\u88AB\u6B8B\u5FCD\u7684\u51FB\u8D25\u4E86..."),
            vue.createElementVNode("div", { class: "diePageDiv_conter_but" }, [
              vue.createElementVNode("button", {
                class: "diePageDiv_conter_button",
                onClick: handleBrokenBlood
              }, "\u62D6\u7740\u6B8B\u7834\u7684\u8EAB\u4F53\u590D\u6D3B"),
              vue.createElementVNode("button", {
                class: "diePageDiv_conter_button",
                onClick: handleFullBlood
              }, "\u6EE1\u8840\u590D\u6D3B")
            ])
          ])
        ]);
      };
    }
  };
  const PagesDiePageIndex = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-f41d58f2"], ["__file", "/Users/cce/Desktop/myDemo/uniappGame/uniGame/src/pages/diePage/index.vue"]]);
  const _imports_0 = "/static/gif/1.gif";
  let loginState = vue.ref({
    isState: 1
  });
  const _sfc_main$4 = {
    __name: "index",
    setup(__props) {
      let isLoding = vue.ref({
        state: false
      });
      let sinupInfo = vue.ref({
        name: "1",
        password: "11111111",
        device: "testDeviceL"
      });
      const handleSignUp = () => {
        loginState.value.isState = 0;
      };
      const handleLogin = () => {
        if (sinupInfo.value.name && sinupInfo.value.password) {
          postLogin(sinupInfo.value).then((res) => {
            if (res.token) {
              uni.setStorageSync("token", res.token);
              uni.setStorageSync("playerInfo", res.player);
              useInfo.value.token = res == null ? void 0 : res.token;
              battleInfo.value.player = (res == null ? void 0 : res.player) ? res == null ? void 0 : res.player : {}, isLoding.value.state = true;
              setTimeout(() => {
                uni.redirectTo({
                  url: "/pages/content/index",
                  success() {
                    isLoding.value.state = false;
                  }
                });
              }, 1800);
            } else {
              isLoding.value.state = false;
            }
          });
        } else if (sinupInfo.value.name == "") {
          uni.showToast({
            icon: "none",
            title: "\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u8D26\u53F7\uFF01",
            duration: 1500
          });
        }
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", { class: "pageCenter" }, [
          vue.createElementVNode("div", { class: "login_conter" }, [
            vue.createElementVNode("p", { class: "login_p" }, "\u6B22\u8FCE\u5192\u9669\u8005"),
            vue.createElementVNode("div", { class: "login_div" }, [
              vue.withDirectives(vue.createElementVNode("input", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.unref(sinupInfo).name = $event),
                maxlength: "30",
                placeholder: "\u8BF7\u8F93\u5165\u8D26\u53F7"
              }, null, 512), [
                [vue.vModelText, vue.unref(sinupInfo).name]
              ])
            ]),
            vue.createElementVNode("div", { class: "login_div" }, [
              vue.withDirectives(vue.createElementVNode("input", {
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.unref(sinupInfo).password = $event),
                type: "password",
                maxlength: "8",
                placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801"
              }, null, 512), [
                [vue.vModelText, vue.unref(sinupInfo).password]
              ])
            ]),
            vue.createElementVNode("div", { class: "login_button login_div" }, [
              vue.createElementVNode("div", {
                class: "login_button_txt",
                onClick: handleSignUp
              }, "\u6CE8\u518C"),
              vue.createElementVNode("div", {
                class: "login_button_txt",
                onClick: handleLogin
              }, "\u767B\u5F55")
            ])
          ]),
          vue.createCommentVNode(" \u8FC7\u6E21\u7684\u52A8\u753B "),
          vue.unref(isLoding).state ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            class: "pageCenter_gif"
          }, [
            vue.createElementVNode("image", {
              class: "pageCenter_gif_img",
              src: _imports_0,
              alt: ""
            })
          ])) : vue.createCommentVNode("v-if", true)
        ]);
      };
    }
  };
  const ComLogin = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-09a7ee4f"], ["__file", "/Users/cce/Desktop/myDemo/uniappGame/uniGame/src/components/comLogin/index.vue"]]);
  const _sfc_main$3 = {
    __name: "index",
    setup(__props) {
      let isLoding = vue.ref({
        state: false
      });
      let sinupInfo = vue.ref({
        name: "",
        password: "",
        email: "",
        device: "testDeviceL"
      });
      const handleBank = () => {
        loginState.value.isState = 1;
      };
      const handleSigUp = () => {
        let reg = /^[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/;
        if (!sinupInfo.value.name) {
          uni.showToast({
            icon: "none",
            title: "\u8BF7\u8F93\u5165\u8D26\u53F7\uFF0C\u6700\u591A6\u4F4D\uFF01",
            duration: 1500
          });
          return;
        }
        if (!sinupInfo.value.password) {
          uni.showToast({
            icon: "none",
            title: "\u8BF7\u8F93\u5165\u5BC6\u7801\uFF0C\u6700\u591A8\u4F4D\uFF01",
            duration: 1500
          });
          return;
        }
        if (!sinupInfo.value.email || !reg.test(sinupInfo.value.email)) {
          uni.showToast({
            icon: "none",
            title: "\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\uFF01",
            duration: 1500
          });
          return;
        } else {
          postRegister(sinupInfo.value).then((res) => {
            if (res.token) {
              uni.setStorageSync("token", res.token);
              uni.setStorageSync("playerInfo", res.player);
              useInfo.value.token = res == null ? void 0 : res.token;
              battleInfo.value.player = (res == null ? void 0 : res.player) ? res == null ? void 0 : res.player : {}, isLoding.value.state = true;
              setTimeout(() => {
                uni.redirectTo({
                  url: "/pages/content/index",
                  success() {
                    isLoding.value.state = false;
                  }
                });
              }, 1800);
            } else {
              isLoding.value.state = false;
            }
          });
        }
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", { class: "pageCenter" }, [
          vue.createElementVNode("div", { class: "login_conter" }, [
            vue.createElementVNode("p", { class: "login_p" }, "\u6B22\u8FCE\u5192\u9669\u8005"),
            vue.createElementVNode("div", {
              class: "login_div",
              draggable: "true"
            }, [
              vue.withDirectives(vue.createElementVNode("input", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.unref(sinupInfo).name = $event),
                maxlength: "6",
                placeholder: "\u8BF7\u8F93\u5165\u8D26\u53F7,\u6700\u591A6\u4F4D"
              }, null, 512), [
                [vue.vModelText, vue.unref(sinupInfo).name]
              ])
            ]),
            vue.createElementVNode("div", {
              class: "login_div",
              draggable: "true"
            }, [
              vue.withDirectives(vue.createElementVNode("input", {
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.unref(sinupInfo).password = $event),
                type: "password",
                maxlength: "8",
                placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801,\u6700\u5C118\u4F4D"
              }, null, 512), [
                [vue.vModelText, vue.unref(sinupInfo).password]
              ])
            ]),
            vue.createElementVNode("div", { class: "login_div" }, [
              vue.withDirectives(vue.createElementVNode("input", {
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => vue.unref(sinupInfo).email = $event),
                placeholder: "\u8BF7\u8F93\u5165\u90AE\u7BB1"
              }, null, 512), [
                [vue.vModelText, vue.unref(sinupInfo).email]
              ])
            ]),
            vue.createElementVNode("div", { class: "login_a login_div" }, [
              vue.createElementVNode("div"),
              vue.createElementVNode("div", { onClick: handleBank }, "\u8FD4\u56DE")
            ]),
            vue.createElementVNode("div", {
              onClick: handleSigUp,
              class: "login_button login_div"
            }, [
              vue.createElementVNode("div", { class: "login_button_txt" }, "\u6CE8\u518C")
            ])
          ]),
          vue.createCommentVNode(" \u8FC7\u6E21\u7684\u52A8\u753B "),
          vue.unref(isLoding).state ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            class: "pageCenter_gif"
          }, [
            vue.createElementVNode("image", {
              class: "pageCenter_gif_img",
              src: _imports_0,
              alt: ""
            })
          ])) : vue.createCommentVNode("v-if", true)
        ]);
      };
    }
  };
  const ComRegister = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-c6c9028a"], ["__file", "/Users/cce/Desktop/myDemo/uniappGame/uniGame/src/components/comRegister/index.vue"]]);
  const _sfc_main$2 = {
    __name: "index",
    setup(__props) {
      let val = vue.ref({
        isState: 1
      });
      vue.watch(loginState.value, (newValue, oldValue) => {
        val.value.isState = newValue.isState;
      });
      return (_ctx, _cache) => {
        var _a;
        return vue.openBlock(), vue.createElementBlock("div", { class: "loginOrRegisterDiv" }, [
          vue.createCommentVNode(" \u767B\u5F55 "),
          ((_a = vue.unref(val)) == null ? void 0 : _a.isState) ? (vue.openBlock(), vue.createBlock(ComLogin, { key: 0 })) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
            vue.createCommentVNode(" \u6CE8\u518C "),
            vue.createVNode(ComRegister)
          ], 2112)),
          vue.createCommentVNode(" \u7248\u672C\u53F7 "),
          vue.createElementVNode("div", { class: "loginOrRegisterDiv_version" }, "v0.0.6")
        ]);
      };
    }
  };
  const PagesLoginOrRegisterIndex = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-c05689fd"], ["__file", "/Users/cce/Desktop/myDemo/uniappGame/uniGame/src/pages/loginOrRegister/index.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {
        url: ""
      };
    },
    onLoad(options) {
      if (options && options.url) {
        this.url = decodeURIComponent(options.url);
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("web-view", { src: $data.url }, null, 8, ["src"]);
  }
  const PagesComAdPagePathAaaaIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "/Users/cce/Desktop/myDemo/uniappGame/uniGame/src/pages/comAdPagePath/aaaa/index.vue"]]);
  __definePage("pages/content/index", PagesContentIndex);
  __definePage("pages/canvasMap/index", PagesCanvasMapIndex);
  __definePage("pages/shopping/index", PagesShoppingIndex);
  __definePage("pages/forge/index", PagesForgeIndex);
  __definePage("pages/diePage/index", PagesDiePageIndex);
  __definePage("pages/loginOrRegister/index", PagesLoginOrRegisterIndex);
  __definePage("pages/comAdPagePath/aaaa/index", PagesComAdPagePathAaaaIndex);
  const pageAddress = () => {
    let token2 = uni.getStorageSync("token") ? uni.getStorageSync("token") : "";
    if (token2) {
      plus.navigator.closeSplashscreen();
    } else {
      uni.reLaunch({
        url: "/pages/loginOrRegister/index",
        success() {
          plus.navigator.closeSplashscreen();
        }
      });
    }
  };
  const _sfc_main = {
    onLaunch: function() {
      pageAddress();
    },
    onShow: function() {
    },
    onHide: function() {
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/cce/Desktop/myDemo/uniappGame/uniGame/src/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    app.moment = hooks;
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
