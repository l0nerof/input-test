(self.webpackChunkinput_test=self.webpackChunkinput_test||[]).push([[792],{"./node_modules/@storybook/instrumenter/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/instrumenter/dist sync recursive",module.exports=webpackEmptyContext},"./.storybook/preview.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>_storybook_preview});var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),main=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./styles/main.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(main.A,options);main.A&&main.A.locals&&main.A.locals;const _storybook_preview={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}}}},"./node_modules/@storybook/nextjs/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/nextjs/dist sync recursive",module.exports=webpackEmptyContext},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("storybook/internal/channels");const importers=[async path=>{if(!/^\.[\\/](?:stories(?:[\\/](?!\.)(?:(?:(?!(?:^|[\\/])\.).)*?)[\\/]|[\\/]|$)(?!\.)(?=.)[^\\/]*?\.mdx)$/.exec(path))return;const pathRemainder=path.substring(10);return __webpack_require__("./stories lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]stories(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.mdx)$")("./"+pathRemainder)},async path=>{if(!/^\.[\\/](?:stories(?:[\\/](?!\.)(?:(?:(?!(?:^|[\\/])\.).)*?)[\\/]|[\\/]|$)(?!\.)(?=.)[^\\/]*?\.stories\.(js|jsx|mjs|ts|tsx))$/.exec(path))return;const pathRemainder=path.substring(10);return __webpack_require__("./stories lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]stories(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$")("./"+pathRemainder)}];const channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb((async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x}),(()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/react/dist/entry-preview.mjs"),__webpack_require__("./node_modules/@storybook/react/dist/entry-preview-docs.mjs"),__webpack_require__("./node_modules/@storybook/nextjs/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/viewport/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/preview.mjs"),__webpack_require__("./.storybook/preview.ts")])));window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel},"./node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./styles/main.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'*,*::before,*::after{margin:0;padding:0;box-sizing:inherit}html{font-size:62.5%}.input-text{font-family:"Inter",sans-serif;font-weight:400;color:#1a1a1e;border-radius:.4rem;background-color:#fff;border:1px solid #d1d1d6;outline:none;transition:all .3s ease;text-overflow:ellipsis;overflow:hidden;flex-grow:1}.input-text::placeholder{color:#70707b;transition:all .3s ease}.input-text:focus{border:1px solid #84caff;box-shadow:0px 0px 0px 4px rgba(46,144,250,.24)}.input-text--container{position:relative;display:inline-flex;align-items:center}.input-text--extra-small{font-size:1.2rem;line-height:1.67;padding:.2rem 1.2rem;min-width:3.006rem}.input-text--medium{font-size:1.2rem;line-height:1.67;padding:.8rem 1.2rem;min-width:3.006rem}.input-text--large{font-size:1.4rem;line-height:1.71;padding:.8rem 1.2rem .8rem 1.6rem;min-width:3.591rem}.input-text--large+.input-text--icons>.input-group--iconBefore{right:28rem}.input-text--extra-large{font-size:1.4rem;line-height:1.71;padding:1.2rem 1.2rem 1.2rem 1.6rem;min-width:3.591rem}.input-text--extra-large+.input-text--icons>.input-group--iconBefore{right:28rem}.input-text--dark{color:#fafafa;border:1px solid #51525c;background-color:#131316}.input-text--dark::placeholder{color:#3f3f46}.input-text--dark:focus{border:1px solid #53b1fd;box-shadow:0px 0px 0px 4px rgba(46,144,250,.24)}.input-text--disabled{cursor:not-allowed}.input-text--disabled::placeholder{color:#d1d1d6}.input-text--quiet{border:1px solid rgba(0,0,0,0);transition:all .3s ease}.input-text--quiet:hover{border:1px solid #d1d1d6}.input-text--error{border:1px solid #fda29b}.input-text--error:focus{border:1px solid #fda29b;box-shadow:0px 0px 0px 4px rgba(240,68,56,.24)}.input-text--icons{position:absolute;right:.5rem;display:flex;align-items:center;gap:.8rem}.input-text--children{padding-left:3.6rem;padding-right:7.6rem}.input-label{font-family:"Inter",sans-serif;font-weight:500;color:#1a1a1e;transition:all .3s ease;white-space:normal;word-wrap:break-word;word-break:break-word;margin-bottom:.4rem}.input-label--extra-small{font-size:1.2rem;line-height:167%}.input-label--medium{font-size:1.2rem;line-height:167%}.input-label--large{font-size:1.4rem;line-height:171%}.input-label--extra-large{font-size:1.4rem;line-height:171%}.input-label--dark{color:#fafafa}.input-label--disabled{cursor:not-allowed;color:#70707b}.input-label--asterisk{color:#d92d20;margin-left:.2rem}.input-label--optional{margin-left:.2rem}.input-label--required{margin-left:.2rem}.input-label--children{display:flex;align-items:center;gap:.5rem}.input-label--top{display:flex;flex-wrap:wrap}.input-label--side{display:inline-flex;margin-right:1rem}.input-group{max-width:19rem;white-space:nowrap}.input-group--iconBefore{position:absolute;right:24.5rem;width:1.6rem;height:1.6rem;stroke:#a0a0ab;cursor:pointer}.input-group--iconBefore--error{stroke:#d92d20}.input-group--iconAfter{width:1.6rem;height:1.6rem;stroke:#a0a0ab;cursor:pointer}.input-group--iconAfter--error{stroke:#d92d20}.input-group--shortkey{width:3.2rem;height:2rem;cursor:pointer}.input-annotation{max-width:19rem;white-space:nowrap;position:relative}.input-annotation--wrapper{position:relative}.input-annotation--infoIcon{width:1.2rem;height:1.2rem;cursor:pointer}.input-annotation--infoIcon:hover+.input-annotation--tooltip{visibility:visible;opacity:1}.input-annotation--tooltip{visibility:hidden;background-color:#131316;color:#fff;text-align:center;border-radius:.8rem;padding:.8rem 1.2rem;position:absolute;z-index:1;bottom:125%;left:50%;transform:translateX(-50%);opacity:0;transition:opacity .3s;width:max-content;max-width:18rem;font-size:1.2rem}.input-annotation--tooltip--dark{background-color:#fff;color:#131316}.input-annotation--helpText{color:#51525c;font-family:"Inter",sans-serif;font-size:1.2rem;font-weight:400;line-height:20px;white-space:normal;word-wrap:break-word;margin-top:.4rem;transition:all .3s ease}.input-annotation--helpText--dark{color:#a0a0ab}.input-annotation--helpText--error{color:#d92d20}',"",{version:3,sources:["webpack://./styles/base.scss","webpack://./styles/InputText.scss","webpack://./styles/InputLabel.scss","webpack://./styles/InputGroup.scss","webpack://./styles/InputAnnotation.scss"],names:[],mappings:"AAeA,qBAGE,QAAA,CACA,SAAA,CACA,kBAAA,CAGF,KACE,eAAA,CCxBF,YACE,8BDDY,CCEZ,eAAA,CACA,aDGU,CCFV,mBAAA,CACA,qBAAA,CACA,wBAAA,CACA,YAAA,CACA,uBAAA,CACA,sBAAA,CACA,eAAA,CACA,WAAA,CAEA,yBACE,aDXgB,CCYhB,uBAAA,CAGF,kBACE,wBAAA,CACA,+CAAA,CAGF,uBACE,iBAAA,CACA,mBAAA,CACA,kBAAA,CAIF,yBACE,gBAAA,CACA,gBAAA,CACA,oBAAA,CACA,kBAAA,CAGF,oBACE,gBAAA,CACA,gBAAA,CACA,oBAAA,CACA,kBAAA,CAGF,mBACE,gBAAA,CACA,gBAAA,CACA,iCAAA,CACA,kBAAA,CAEA,+DACE,WAAA,CAIJ,yBACE,gBAAA,CACA,gBAAA,CACA,mCAAA,CACA,kBAAA,CAEA,qEACE,WAAA,CAMJ,kBACE,aDnEI,CCoEJ,wBAAA,CACA,wBD/DM,CCiEN,+BACE,aDtEa,CCyEf,wBACE,wBAAA,CACA,+CAAA,CAMJ,sBACE,kBAAA,CAEA,mCACE,aDpFO,CC0FX,mBACE,8BAAA,CACA,uBAAA,CAEA,yBACE,wBAAA,CAMJ,mBACE,wBAAA,CAEA,yBACE,wBAAA,CACA,8CAAA,CAMJ,mBACE,iBAAA,CACA,WAAA,CACA,YAAA,CACA,kBAAA,CACA,SAAA,CAKF,sBACE,mBAAA,CACA,oBAAA,CCjIJ,aACE,8BFDY,CEEZ,eAAA,CACA,aFGU,CEFV,uBAAA,CACA,kBAAA,CACA,oBAAA,CACA,qBAAA,CACA,mBAAA,CAGA,0BACE,gBAAA,CACA,gBAAA,CAGF,qBACE,gBAAA,CACA,gBAAA,CAGF,oBACE,gBAAA,CACA,gBAAA,CAGF,0BACE,gBAAA,CACA,gBAAA,CAKF,mBACE,aFhCI,CEqCN,uBACE,kBAAA,CACA,aFtCgB,CE0ClB,uBACE,aFnCO,CEoCP,iBAAA,CAGF,uBACE,iBAAA,CAGF,uBACE,iBAAA,CAKF,uBACE,YAAA,CACA,kBAAA,CACA,SAAA,CAKF,kBACE,YAAA,CACA,cAAA,CAGF,mBACE,mBAAA,CACA,iBAAA,CC3EJ,aACE,eAAA,CACA,kBAAA,CAEA,yBACE,iBAAA,CACA,aAAA,CACA,YAAA,CACA,aAAA,CACA,cHGG,CGFH,cAAA,CAEA,gCACE,cHFK,CGMT,wBACE,YAAA,CACA,aAAA,CACA,cHRG,CGSH,cAAA,CAEA,+BACE,cHbK,CGiBT,uBACE,YAAA,CACA,WAAA,CACA,cAAA,CC/BJ,kBACE,eAAA,CACA,kBAAA,CACA,iBAAA,CAEA,2BACE,iBAAA,CAGF,4BACE,YAAA,CACA,aAAA,CACA,cAAA,CAEA,6DACE,kBAAA,CACA,SAAA,CAIJ,2BACE,iBAAA,CACA,wBJdM,CIeN,UAAA,CACA,iBAAA,CACA,mBAAA,CACA,oBAAA,CACA,iBAAA,CACA,SAAA,CACA,WAAA,CACA,QAAA,CACA,0BAAA,CACA,SAAA,CACA,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,gBAAA,CAEA,iCACE,qBAAA,CACA,aJhCI,CIoCR,4BACE,aJtCU,CIuCV,8BJ9CU,CI+CV,gBAAA,CACA,eAAA,CACA,gBAAA,CACA,kBAAA,CACA,oBAAA,CACA,gBAAA,CACA,uBAAA,CAIA,kCACE,aJ9CC,CImDH,mCACE,aJrDK",sourcesContent:['$font-family: "Inter", sans-serif;\r\n\r\n$white: #fafafa;\r\n$placeholder-light: #70707b;\r\n$placeholder-dark: #3f3f46;\r\n$gray-light: #d1d1d6;\r\n$gray-dark: #1a1a1e;\r\n$border-dark: #51525c;\r\n$bg-dark: #131316;\r\n$focus-light: #84caff;\r\n$focus-dark: #53b1fd;\r\n$asterisk: #d92d20;\r\n$icon: #a0a0ab;\r\n$error-border: #fda29b;\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: inherit;\r\n}\r\n\r\nhtml {\r\n  font-size: 62.5%;\r\n}\r\n',".input-text {\r\n  font-family: $font-family;\r\n  font-weight: 400;\r\n  color: $gray-dark;\r\n  border-radius: 0.4rem;\r\n  background-color: #fff;\r\n  border: 1px solid $gray-light;\r\n  outline: none;\r\n  transition: all 0.3s ease;\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n  flex-grow: 1;\r\n\r\n  &::placeholder {\r\n    color: $placeholder-light;\r\n    transition: all 0.3s ease;\r\n  }\r\n\r\n  &:focus {\r\n    border: 1px solid $focus-light;\r\n    box-shadow: 0px 0px 0px 4px rgba(46, 144, 250, 0.24);\r\n  }\r\n\r\n  &--container {\r\n    position: relative;\r\n    display: inline-flex;\r\n    align-items: center;\r\n  }\r\n\r\n  // SIZE //\r\n  &--extra-small {\r\n    font-size: 1.2rem;\r\n    line-height: 1.67;\r\n    padding: 0.2rem 1.2rem;\r\n    min-width: calc(1.5 * (1.67 * 1.2rem));\r\n  }\r\n\r\n  &--medium {\r\n    font-size: 1.2rem;\r\n    line-height: 1.67;\r\n    padding: 0.8rem 1.2rem;\r\n    min-width: calc(1.5 * (1.67 * 1.2rem));\r\n  }\r\n\r\n  &--large {\r\n    font-size: 1.4rem;\r\n    line-height: 1.71;\r\n    padding: 0.8rem 1.2rem 0.8rem 1.6rem;\r\n    min-width: calc(1.5 * (1.71 * 1.4rem));\r\n\r\n    & + .input-text--icons > .input-group--iconBefore {\r\n      right: 28rem;\r\n    }\r\n  }\r\n\r\n  &--extra-large {\r\n    font-size: 1.4rem;\r\n    line-height: 1.71;\r\n    padding: 1.2rem 1.2rem 1.2rem 1.6rem;\r\n    min-width: calc(1.5 * (1.71 * 1.4rem));\r\n\r\n    & + .input-text--icons > .input-group--iconBefore {\r\n      right: 28rem;\r\n    }\r\n  }\r\n\r\n  // DARK MODE //\r\n\r\n  &--dark {\r\n    color: $white;\r\n    border: 1px solid $border-dark;\r\n    background-color: $bg-dark;\r\n\r\n    &::placeholder {\r\n      color: $placeholder-dark;\r\n    }\r\n\r\n    &:focus {\r\n      border: 1px solid $focus-dark;\r\n      box-shadow: 0px 0px 0px 4px rgba(46, 144, 250, 0.24);\r\n    }\r\n  }\r\n\r\n  // DISABLED MODE //\r\n\r\n  &--disabled {\r\n    cursor: not-allowed;\r\n\r\n    &::placeholder {\r\n      color: $gray-light;\r\n    }\r\n  }\r\n\r\n  // QUIET MODE //\r\n\r\n  &--quiet {\r\n    border: 1px solid transparent;\r\n    transition: all 0.3s ease;\r\n\r\n    &:hover {\r\n      border: 1px solid $gray-light;\r\n    }\r\n  }\r\n\r\n  // ERROR //\r\n\r\n  &--error {\r\n    border: 1px solid $error-border;\r\n\r\n    &:focus {\r\n      border: 1px solid $error-border;\r\n      box-shadow: 0px 0px 0px 4px rgba(240, 68, 56, 0.24);\r\n    }\r\n  }\r\n\r\n  // ICONS //\r\n\r\n  &--icons {\r\n    position: absolute;\r\n    right: 0.5rem;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.8rem;\r\n  }\r\n\r\n  // CHILDREN //\r\n\r\n  &--children {\r\n    padding-left: 3.6rem;\r\n    padding-right: 7.6rem;\r\n  }\r\n}\r\n",".input-label {\r\n  font-family: $font-family;\r\n  font-weight: 500;\r\n  color: $gray-dark;\r\n  transition: all 0.3s ease;\r\n  white-space: normal;\r\n  word-wrap: break-word;\r\n  word-break: break-word;\r\n  margin-bottom: 0.4rem;\r\n\r\n  // SIZE //\r\n  &--extra-small {\r\n    font-size: 1.2rem;\r\n    line-height: 167%;\r\n  }\r\n\r\n  &--medium {\r\n    font-size: 1.2rem;\r\n    line-height: 167%;\r\n  }\r\n\r\n  &--large {\r\n    font-size: 1.4rem;\r\n    line-height: 171%;\r\n  }\r\n\r\n  &--extra-large {\r\n    font-size: 1.4rem;\r\n    line-height: 171%;\r\n  }\r\n\r\n  // DARK MODE //\r\n\r\n  &--dark {\r\n    color: $white;\r\n  }\r\n\r\n  // DISABLED MODE //\r\n\r\n  &--disabled {\r\n    cursor: not-allowed;\r\n    color: $placeholder-light;\r\n  }\r\n\r\n  // ASTERISK //\r\n  &--asterisk {\r\n    color: $asterisk;\r\n    margin-left: 0.2rem;\r\n  }\r\n\r\n  &--optional {\r\n    margin-left: 0.2rem;\r\n  }\r\n\r\n  &--required {\r\n    margin-left: 0.2rem;\r\n  }\r\n\r\n  // CHILDREN //\r\n\r\n  &--children {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n  }\r\n\r\n  // POSITION //\r\n\r\n  &--top {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n  }\r\n\r\n  &--side {\r\n    display: inline-flex;\r\n    margin-right: 1rem;\r\n  }\r\n}\r\n",".input-group {\r\n  max-width: 19rem;\r\n  white-space: nowrap;\r\n\r\n  &--iconBefore {\r\n    position: absolute;\r\n    right: 24.5rem;\r\n    width: 1.6rem;\r\n    height: 1.6rem;\r\n    stroke: $icon;\r\n    cursor: pointer;\r\n\r\n    &--error {\r\n      stroke: $asterisk;\r\n    }\r\n  }\r\n\r\n  &--iconAfter {\r\n    width: 1.6rem;\r\n    height: 1.6rem;\r\n    stroke: $icon;\r\n    cursor: pointer;\r\n\r\n    &--error {\r\n      stroke: $asterisk;\r\n    }\r\n  }\r\n\r\n  &--shortkey {\r\n    width: 3.2rem;\r\n    height: 2rem;\r\n    cursor: pointer;\r\n  }\r\n}\r\n",".input-annotation {\r\n  max-width: 19rem;\r\n  white-space: nowrap;\r\n  position: relative;\r\n\r\n  &--wrapper {\r\n    position: relative;\r\n  }\r\n\r\n  &--infoIcon {\r\n    width: 1.2rem;\r\n    height: 1.2rem;\r\n    cursor: pointer;\r\n\r\n    &:hover + .input-annotation--tooltip {\r\n      visibility: visible;\r\n      opacity: 1;\r\n    }\r\n  }\r\n\r\n  &--tooltip {\r\n    visibility: hidden;\r\n    background-color: $bg-dark;\r\n    color: white;\r\n    text-align: center;\r\n    border-radius: 0.8rem;\r\n    padding: 0.8rem 1.2rem;\r\n    position: absolute;\r\n    z-index: 1;\r\n    bottom: 125%;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    opacity: 0;\r\n    transition: opacity 0.3s;\r\n    width: max-content;\r\n    max-width: 18rem;\r\n    font-size: 1.2rem;\r\n\r\n    &--dark {\r\n      background-color: white;\r\n      color: $bg-dark;\r\n    }\r\n  }\r\n\r\n  &--helpText {\r\n    color: $border-dark;\r\n    font-family: $font-family;\r\n    font-size: 1.2rem;\r\n    font-weight: 400;\r\n    line-height: 20px;\r\n    white-space: normal;\r\n    word-wrap: break-word;\r\n    margin-top: 0.4rem;\r\n    transition: all 0.3s ease;\r\n\r\n    // DARK MODE //\r\n\r\n    &--dark {\r\n      color: $icon;\r\n    }\r\n\r\n    // ERROR //\r\n\r\n    &--error {\r\n      color: $asterisk;\r\n    }\r\n  }\r\n}\r\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./stories lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]stories(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.mdx)$":module=>{function webpackEmptyAsyncContext(req){return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}))}webpackEmptyAsyncContext.keys=()=>[],webpackEmptyAsyncContext.resolve=webpackEmptyAsyncContext,webpackEmptyAsyncContext.id="./stories lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]stories(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.mdx)$",module.exports=webpackEmptyAsyncContext},"./stories lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]stories(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./InputAnnotation.stories":["./stories/InputAnnotation.stories.ts",97,734],"./InputAnnotation.stories.ts":["./stories/InputAnnotation.stories.ts",97,734],"./InputGroup.stories":["./stories/InputGroup.stories.ts",97,814],"./InputGroup.stories.ts":["./stories/InputGroup.stories.ts",97,814],"./InputLabel.stories":["./stories/InputLabel.stories.ts",77],"./InputLabel.stories.ts":["./stories/InputLabel.stories.ts",77],"./InputText.stories":["./stories/InputText.stories.ts",348],"./InputText.stories.ts":["./stories/InputText.stories.ts",348]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./stories lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]stories(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$",module.exports=webpackAsyncContext},"storybook/internal/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"storybook/internal/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"storybook/internal/preview-errors":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__},"storybook/internal/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":module=>{"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"storybook/internal/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__},"?c969":()=>{},"?3e83":()=>{},"?19e6":()=>{}},__webpack_require__=>{__webpack_require__.O(0,[313],(()=>{return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);