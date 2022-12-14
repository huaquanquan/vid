!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t){!function(){e.exports=this.wp.hooks}()},function(e,t,n){"use strict";n.r(t);var r=n(4),o=n.n(r),c=n(5),a=n(0),l=n(3),i=n(2),u=n(1),s={fontFamily:"sans-serif",fontSize:".6rem",color:"#999999",position:"absolute",top:".3rem",right:".5rem"},b=function(e){var t=e.attributes,n=e.className,r=e.isSelected,o=e.setAttributes;Object(a.useEffect)((function(){!t.language&&ioch_code_default_lang&&o({language:ioch_code_default_lang}),!t.lineNumbers&&ioch_code_default_numb&&o({lineNumbers:ioch_code_default_numb})}));var c="ioch-code";return c=t.lineNumbers?c+" line-numbers":c,Object(a.createElement)(a.Fragment,null,Object(a.createElement)(l.InspectorControls,{key:"controls"},Object(a.createElement)(i.PanelBody,{title:Object(u.__)("Settings")},Object(a.createElement)(i.SelectControl,{label:Object(u.__)("选择语言"),value:t.language,options:Object.keys(ioch_code_languages).map((function(e){return{label:ioch_code_languages[e],value:e}})),onChange:function(e){return o({language:e})}}),Object(a.createElement)(i.ToggleControl,{label:Object(u.__)("显示行号"),checked:t.lineNumbers,onChange:function(e){return o({lineNumbers:e})}}),Object(a.createElement)(i.TextControl,{label:Object(u.__)("高亮行"),value:t.highlightLine,onChange:function(e){return o({highlightLine:e})},placeholder:Object(u.__)("如：1,3-5,8")}))),r||!t.language?Object(a.createElement)("div",{key:"editor-wrapper",className:n},Object(a.createElement)(l.PlainText,{value:t.content,onChange:function(e){return o({content:e})},placeholder:Object(u.__)("Write code…")}),Object(a.createElement)("div",{style:s},ioch_code_languages[t.language])):Object(a.createElement)("pre",{className:c,"data-line":t.highlightLine,"data-lang":t.language},Object(a.createElement)("code",{className:"language-"+t.language},t.content)))},g=function(e){var t=e.attributes,n="ioch-code";n=t.lineNumbers?n+" line-numbers":n;var r=t.language?"language-"+t.language:"";return Object(a.createElement)("pre",{className:n,"data-line":t.highlightLine,"data-lang":t.language},Object(a.createElement)("code",{className:r},t.content))};function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}Object(c.addFilter)("blocks.registerBlockType","mkaz/code-syntax-block",(function(e){return"core/code"!==e.name?e:p({},e,{attributes:p({},e.attributes,{language:{type:"string",source:"attribute",selector:"pre",attribute:"data-lang"},lineNumbers:{type:"boolean"},highlightLine:{type:"string",source:"attribute",selector:"pre",attribute:"data-line"}}),edit:b,save:g})}))}]);