/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 752:
/***/ ((module) => {



let list = {
  comma(string) {
    return list.split(string, [','], true)
  },

  space(string) {
    let spaces = [' ', '\n', '\t']
    return list.split(string, spaces)
  },

  split(string, separators, last) {
    let array = []
    let current = ''
    let split = false

    let func = 0
    let inQuote = false
    let prevQuote = ''
    let escape = false

    for (let letter of string) {
      if (escape) {
        escape = false
      } else if (letter === '\\') {
        escape = true
      } else if (inQuote) {
        if (letter === prevQuote) {
          inQuote = false
        }
      } else if (letter === '"' || letter === "'") {
        inQuote = true
        prevQuote = letter
      } else if (letter === '(') {
        func += 1
      } else if (letter === ')') {
        if (func > 0) func -= 1
      } else if (func === 0) {
        if (separators.includes(letter)) split = true
      }

      if (split) {
        if (current !== '') array.push(current.trim())
        current = ''
        split = false
      } else {
        current += letter
      }
    }

    if (last || current !== '') array.push(current.trim())
    return array
  }
}

module.exports = list
list.default = list


/***/ }),

/***/ 262:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.A = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


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
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ entry_lib)
});

;// ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ const setPublicPath = (null);

;// external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
const external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject = require("vue");
;// ./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Clock.vue?vue&type=script&setup=true&lang=js


const _hoisted_1 = ["onClick"]

;


/* harmony default export */ const Clockvue_type_script_setup_true_lang_js = ({
  __name: 'Clock',
  props: {
    bg : {type:String, default: 'black'},
    number : Number,
    hourOrMinute: String
},
  setup(__props) {

const props = __props;

const angle = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)('');
props.hourOrMinute == "hour" ? angle.value = (props.number * 30) : angle.value = (props.number/5 * 30);
const selectedNumber = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)('');
props.hourOrMinute == "hour" ? selectedNumber.value = props.number : props.number == 0 ? selectedNumber.value = 12 : selectedNumber.value = props.number/5;
const multiplyNumber = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)('');



if (props.hourOrMinute == "hour") {
    multiplyNumber.value = 1;
} else {
    multiplyNumber.value = 5;
}

const getNumberLocation = (n) => {

    const angle = (n * 30);

    return {
        transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-100px) rotate(${-angle}deg)`,
        position: 'absolute',
        left: '50%',
        top: '50%',
    };
}

const setHandAngle = (n) => {
    
    selectedNumber.value = n;
    angle.value = (n * 30);
}


return (_ctx, _cache) => {
  return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
    class: "clock",
    style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)('outline: 10px solid ' + props.bg)
  }, [
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
      class: "numerals",
      style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)('color:' + props.bg)
    }, [
      ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderList)(12, (n) => {
        return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
          class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)([n == selectedNumber.value ? 'clicked' : '', "numeral"]),
          key: n,
          style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)([[getNumberLocation(n), n == selectedNumber.value ? { 'background-color': props.bg } : {}], {"cursor":"pointer"}]),
          onClick: $event => (setHandAngle(n),_ctx.$emit('clicked',n))
        }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)(n == 12 && __props.hourOrMinute == "minute" ? "00" : n * multiplyNumber.value), 15, _hoisted_1)
      }), 64))
    ], 4),
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
      class: "hand",
      style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)({ transform: `translateX(-50%) rotate(${angle.value}deg)` })
    }, null, 4),
    _cache[0] || (_cache[0] = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", { class: "center" }, null, -1))
  ], 4))
}
}

});
;// ./src/components/Clock.vue?vue&type=script&setup=true&lang=js
 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Clock.vue?vue&type=style&index=0&id=2372480e&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// ./src/components/Clock.vue?vue&type=style&index=0&id=2372480e&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(262);
;// ./src/components/Clock.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(Clockvue_type_script_setup_true_lang_js, [['__scopeId',"data-v-2372480e"]])

/* harmony default export */ const Clock = (__exports__);
// EXTERNAL MODULE: ./node_modules/postcss/lib/list.js
var list = __webpack_require__(752);
;// ./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/TimePicker.vue?vue&type=script&setup=true&lang=js


const TimePickervue_type_script_setup_true_lang_js_hoisted_1 = { style: {"margin-bottom":"20px","display":"flex","align-items":"center","width":"300px","padding-left":"20px"} }
const _hoisted_2 = { style: {"margin-left":"8px","margin-right":"0"} }
const _hoisted_3 = { style: {"width":"300px","display":"flex","justify-content":"center"} }

;




/* harmony default export */ const TimePickervue_type_script_setup_true_lang_js = ({
  __name: 'TimePicker',
  props: {
    modelValue : String,
    bg: {type:String, default: 'black'}
},
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {

const props = __props;

const emit = __emit;
const hourOrMinute = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)('hour');
const amOrPm = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)('AM');
const hourData = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)('12');
const minuteData = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)('00');

const switchClock = (type) => {
    hourOrMinute.value = type
}

const changeAmOrPm = (amOrPmData) => {
    amOrPm.value = amOrPmData
    change24hrFormatAndEmit(hourData.value + ':' + minuteData.value, amOrPm.value);
}

const setHour = (hour) => {
    hourData.value = hour;
    hourData.value = hourData.value.toString().padStart(2, '0');
    change24hrFormatAndEmit(hourData.value + ':' + minuteData.value, amOrPm.value);
}

const setMinute = (minute) => {
    minuteData.value = minute * 5;
    if (minute == 12) minuteData.value = 0;
    minuteData.value = minuteData.value.toString().padStart(2, '0');
    change24hrFormatAndEmit(hourData.value + ':' + minuteData.value, amOrPm.value);
}

const change12hrFormat = (time) => {

    if (parseInt((0,list.split)(time, ':')[0]) > 12) {
        hourData.value = parseInt((0,list.split)(time, ':')[0]) - 12;
        hourData.value = hourData.value.toString().padStart(2, '0');
        minuteData.value = (0,list.split)(time, ':')[1];
        minuteData.value = minuteData.value.toString().padStart(2, '0');
        amOrPm.value = 'PM';
    }else if(parseInt((0,list.split)(time, ':')[0]) == 12) {
        hourData.value = hourData.value.toString().padStart(2, '0');
        minuteData.value = (0,list.split)(time, ':')[1];
        minuteData.value = minuteData.value.toString().padStart(2, '0');
        amOrPm.value = 'PM';
    }
     else {
        hourData.value = (0,list.split)(time, ':')[0] == 0 ? 12 : (0,list.split)(time, ':')[0];
        hourData.value = hourData.value.toString().padStart(2, '0');
        minuteData.value = (0,list.split)(time, ':')[1];
        minuteData.value = minuteData.value.toString().padStart(2, '0');
        amOrPm.value = 'AM';
    }

}

const change24hrFormatAndEmit = (time, format) => {

    if (format == 'PM' && parseInt((0,list.split)(time, ':')[0]) == 12) {
        time = parseInt((0,list.split)(time, ':')[0]) - 12 + ':' + (0,list.split)(time, ':')[1];
    }
    if (format == 'PM') {
        time = parseInt((0,list.split)(time, ':')[0]) + 12 + ':' + (0,list.split)(time, ':')[1];
    }
    if(format == 'AM' && parseInt((0,list.split)(time, ':')[0]) == 12) {
        time = '00' + ':' + (0,list.split)(time, ':')[1];
    }
    
    emit("update:modelValue", time );

}

if(!props.modelValue ){
    change12hrFormat('00:00');
}else{
    change12hrFormat(props.modelValue);
}


return (_ctx, _cache) => {
  return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, null, [
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", TimePickervue_type_script_setup_true_lang_js_hoisted_1, [
      (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("span", {
        type: "text",
        id: "hourAndMinuteBox",
        style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)('background-color:' + props.bg),
        onClick: _cache[0] || (_cache[0] = $event => (switchClock('hour')))
      }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)(hourData.value), 5),
      _cache[4] || (_cache[4] = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", { style: {"font-size":"30px","font-weight":"bold"} }, ":", -1)),
      (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("span", {
        type: "text",
        id: "hourAndMinuteBox",
        style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)('background-color:' + props.bg),
        onClick: _cache[1] || (_cache[1] = $event => (switchClock('minute')))
      }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)(minuteData.value), 5),
      (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_2, [
        (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", null, [
          (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("span", {
            type: "text",
            class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(amOrPm.value == 'AM' ? 'clicked' : ''),
            id: "amAndPmBox",
            style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)(amOrPm.value == 'AM' ? 'background-color:' + props.bg : ''),
            onClick: _cache[2] || (_cache[2] = $event => (changeAmOrPm('AM')))
          }, "AM", 6)
        ]),
        (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", null, [
          (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("span", {
            type: "text",
            class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(amOrPm.value == 'PM' ? 'clicked' : ''),
            id: "amAndPmBox",
            style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)(amOrPm.value == 'PM' ? 'background-color:' + props.bg : ''),
            onClick: _cache[3] || (_cache[3] = $event => (changeAmOrPm('PM')))
          }, "PM", 6)
        ])
      ])
    ]),
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_3, [
      (hourOrMinute.value == 'hour')
        ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createBlock)(Clock, {
            key: 0,
            number: hourData.value,
            hourOrMinute: "hour",
            onClicked: setHour,
            bg: props.bg
          }, null, 8, ["number", "bg"]))
        : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true),
      (hourOrMinute.value == 'minute')
        ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createBlock)(Clock, {
            key: 1,
            number: minuteData.value,
            hourOrMinute: "minute",
            onClicked: setMinute,
            bg: props.bg
          }, null, 8, ["number", "bg"]))
        : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true)
    ])
  ], 64))
}
}

});
;// ./src/components/TimePicker.vue?vue&type=script&setup=true&lang=js
 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/TimePicker.vue?vue&type=style&index=0&id=c84d03a6&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// ./src/components/TimePicker.vue?vue&type=style&index=0&id=c84d03a6&scoped=true&lang=css

;// ./src/components/TimePicker.vue



;


const TimePicker_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(TimePickervue_type_script_setup_true_lang_js, [['__scopeId',"data-v-c84d03a6"]])

/* harmony default export */ const TimePicker = (TimePicker_exports_);
;// ./src/main.js


/* harmony default export */ const main = (TimePicker);

TimePicker.install = function (Vue) {
    Vue.component(TimePicker.name, TimePicker);
};
;// ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ const entry_lib = (main);


module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=vue-time-picker-pro.common.js.map