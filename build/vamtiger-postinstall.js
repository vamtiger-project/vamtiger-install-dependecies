#!/usr/bin/env node
"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var __extends,__assign,__rest,__decorate,__param,__metadata,__awaiter,__generator,__exportStar,__values,__read,__spread,__await,__asyncGenerator,__asyncDelegator,__asyncValues,__makeTemplateObject,__importStar,__importDefault,StringConstant,FolderName,NpmScript,CommandlineArgument,DistTag,PackagePath,getPackageData=_interopDefault(require("vamtiger-require")),bash=_interopDefault(require("vamtiger-bash")),getFolderContent=_interopDefault(require("vamtiger-get-directory-content")),path=require("path"),Args=_interopDefault(require("vamtiger-argv/build/main"));!function(e){var t="object"==typeof global?global:"object"==typeof self?self:"object"==typeof this?this:{};function n(e,n){return e!==t&&("function"==typeof Object.create?Object.defineProperty(e,"__esModule",{value:!0}):e.__esModule=!0),function(t,r){return e[t]=n?n(t,r):r}}"function"==typeof define&&define.amd?define("tslib",["exports"],function(r){e(n(t,n(r)))}):"object"==typeof module&&"object"==typeof module.exports?e(n(t,n(module.exports))):e(n(t))}(function(e){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};__extends=function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)},__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},__rest=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n},__decorate=function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},__param=function(e,t){return function(n,r){t(n,r,e)}},__metadata=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},__awaiter=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{s(r.next(e))}catch(e){a(e)}}function c(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,c)}s((r=r.apply(e,t||[])).next())})},__generator=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},__exportStar=function(e,t){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])},__values=function(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0;return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}},__read=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i},__spread=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(__read(arguments[t]));return e},__await=function(e){return this instanceof __await?(this.v=e,this):new __await(e)},__asyncGenerator=function(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),a=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(e){o[e]&&(r[e]=function(t){return new Promise(function(n,r){a.push([e,t,n,r])>1||c(e,t)})})}function c(e,t){try{(n=o[e](t)).value instanceof __await?Promise.resolve(n.value.v).then(s,u):l(a[0][2],n)}catch(e){l(a[0][3],e)}var n}function s(e){c("next",e)}function u(e){c("throw",e)}function l(e,t){e(t),a.shift(),a.length&&c(a[0][0],a[0][1])}},__asyncDelegator=function(e){var t,n;return t={},r("next"),r("throw",function(e){throw e}),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:__await(e[r](t)),done:"return"===r}:o?o(t):t}:o}},__asyncValues=function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e="function"==typeof __values?__values(e):e[Symbol.iterator](),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise(function(r,o){(function(e,t,n,r){Promise.resolve(r).then(function(t){e({value:t,done:n})},t)})(r,o,(t=e[n](t)).done,t.value)})}}},__makeTemplateObject=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},e("__extends",__extends),e("__assign",__assign),e("__rest",__rest),e("__decorate",__decorate),e("__param",__param),e("__metadata",__metadata),e("__awaiter",__awaiter),e("__generator",__generator),e("__exportStar",__exportStar),e("__values",__values),e("__read",__read),e("__spread",__spread),e("__await",__await),e("__asyncGenerator",__asyncGenerator),e("__asyncDelegator",__asyncDelegator),e("__asyncValues",__asyncValues),e("__makeTemplateObject",__makeTemplateObject),e("__importStar",__importStar),e("__importDefault",__importDefault)}),function(e){e.space=" "}(StringConstant||(StringConstant={})),function(e){e.node_modules="node_modules"}(FolderName||(FolderName={})),function(e){e.install="npm i"}(NpmScript||(NpmScript={})),function(e){e.distTag="distTag"}(CommandlineArgument||(CommandlineArgument={})),function(e){e.source="source"}(DistTag||(DistTag={})),function(e){e.distTag="_requested.fetchSpec",e.dependencies="dependencies",e.devDependencies="devDependencies"}(PackagePath||(PackagePath={}));const ShortCommandlineArgument={[CommandlineArgument.distTag]:"d"},{dependencies:dependenciesPath,devDependencies:devDependenciesPath}=PackagePath,{space:space}=StringConstant;function getDependencies({path:e}){const t=getPackageData({path:`${e}.${dependenciesPath}`});return Object.keys(t).map(e=>`${e}@${t[e]}`).join(space)}const{install:install}=NpmScript,{node_modules:node_modules}=FolderName;async function install$1({workingDirectory:e,dependencies:t}){const n=await getFolderContent(e).then(e=>new Set(e)),r={cwd:e},o=`${install} ${t} --no-shrinkwrap`;!n.has(node_modules)&&await bash(o,r)}const{distTag:distTagPath}=PackagePath;async function postInstallDistTags({distTag:e,workingDirectory:t}){console.log("*".repeat(32)),console.log({distTag:e,workingDirectory:t}),console.log("*".repeat(32)),console.log("*".repeat(32));const n=path.resolve(t,"package"),r=e===getPackageData({path:`${n}.${distTagPath}`})&&getDependencies({path:n});r&&await install$1({workingDirectory:t,dependencies:r})}const{cwd:getWorkingDirectory}=process,workingDirectory=getWorkingDirectory(),args=new Args,{distTag:distTagArg}=CommandlineArgument,{distTag:shortDistTagArg}=ShortCommandlineArgument,distTag=args.get(distTagArg||shortDistTagArg);console.log("*".repeat(32)),console.log({distTag:distTag,workingDirectory:workingDirectory}),console.log("*".repeat(32)),console.log("*".repeat(32)),distTag&&postInstallDistTags({workingDirectory:workingDirectory,distTag:distTag}).catch(console.warn);
//# sourceMappingURL=vamtiger-postinstall.js.map
