"use strict";
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("./dialog.component");
var i2 = require("@angular/common");
var i3 = require("./dialog.service");
var DialogModuleNgFactory = i0.ɵcmf(i1.DialogModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID, [2, i2.ɵangular_packages_common_common_a]]), i0.ɵmpd(1073742336, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(1073742336, i1.DialogModule, i1.DialogModule, [])]); });
exports.DialogModuleNgFactory = DialogModuleNgFactory;
var styles_DialogComponent = [".g-dialog-container[_ngcontent-%COMP%] {\n  color: #ffffff;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .g-dialog-container[_ngcontent-%COMP%]   .dialog-window[_ngcontent-%COMP%] {\n    width: 15rem;\n    padding: 1rem;\n    border-radius: 10px;\n    background: rgba(0, 0, 0, 0.8);\n    transition: all 0.9s cubic-bezier(0.43, -0.14, 0.34, 1.6); }\n    .g-dialog-container[_ngcontent-%COMP%]   .dialog-window[_ngcontent-%COMP%]   .dialog-header[_ngcontent-%COMP%] {\n      width: 45px;\n      height: 45px;\n      margin: 0 auto;\n      border: 2px solid #fff;\n      border-radius: 50%;\n      display: flex;\n      justify-content: center;\n      align-items: center; }\n      .g-dialog-container[_ngcontent-%COMP%]   .dialog-window[_ngcontent-%COMP%]   .dialog-header.ok[_ngcontent-%COMP%]:after {\n        content: '';\n        display: block;\n        width: 30px;\n        height: 10px;\n        border: 2px solid #fff;\n        border-width: 0 0 2px 2px;\n        transform: rotate(-50deg); }\n      .g-dialog-container[_ngcontent-%COMP%]   .dialog-window[_ngcontent-%COMP%]   .dialog-header.warning[_ngcontent-%COMP%] {\n        transform: rotate(90deg); }\n        .g-dialog-container[_ngcontent-%COMP%]   .dialog-window[_ngcontent-%COMP%]   .dialog-header.warning[_ngcontent-%COMP%]:before {\n          content: '';\n          display: block;\n          width: 20px;\n          height: 5px;\n          background: #fff;\n          margin-right: 5px; }\n        .g-dialog-container[_ngcontent-%COMP%]   .dialog-window[_ngcontent-%COMP%]   .dialog-header.warning[_ngcontent-%COMP%]:after {\n          content: '';\n          display: block;\n          width: 5px;\n          height: 5px;\n          border-radius: 50%;\n          background: #fff; }\n      .g-dialog-container[_ngcontent-%COMP%]   .dialog-window[_ngcontent-%COMP%]   .dialog-header.waiting[_ngcontent-%COMP%]:before {\n        content: '';\n        display: block;\n        width: 5px;\n        height: 5px;\n        background: yellow;\n        border-radius: 50%;\n        animation: waiting1 0.8s infinite; }\n      .g-dialog-container[_ngcontent-%COMP%]   .dialog-window[_ngcontent-%COMP%]   .dialog-header.waiting[_ngcontent-%COMP%]:after {\n        content: '';\n        display: block;\n        width: 5px;\n        height: 5px;\n        background: red;\n        border-radius: 50%;\n        animation: waiting2 0.8s infinite; }\n    .g-dialog-container[_ngcontent-%COMP%]   .dialog-window[_ngcontent-%COMP%]   .dialog-content[_ngcontent-%COMP%] {\n      padding: 1rem 1rem 0;\n      font-size: 1rem;\n      text-align: center; }\n    .g-dialog-container[_ngcontent-%COMP%]   .dialog-window[_ngcontent-%COMP%]   .dialog-footer[_ngcontent-%COMP%] {\n      padding: 1rem 1rem 0;\n      display: flex;\n      justify-content: center;\n      align-items: center; }\n      .g-dialog-container[_ngcontent-%COMP%]   .dialog-window[_ngcontent-%COMP%]   .dialog-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n        background: rgba(255, 255, 255, 0.8);\n        border: none;\n        padding: 0.5rem 1.5rem;\n        margin: 0.3rem;\n        text-shadow: #666 1px 1px;\n        outline: none;\n        font-size: 1rem;\n        border-radius: 5px;\n        color: #eee; }\n        .g-dialog-container[_ngcontent-%COMP%]   .dialog-window[_ngcontent-%COMP%]   .dialog-footer[_ngcontent-%COMP%]   button.green[_ngcontent-%COMP%] {\n          background-color: #0f8f0f; }\n          .g-dialog-container[_ngcontent-%COMP%]   .dialog-window[_ngcontent-%COMP%]   .dialog-footer[_ngcontent-%COMP%]   button.green[_ngcontent-%COMP%]:hover {\n            background-color: #0a610a; }\n          .g-dialog-container[_ngcontent-%COMP%]   .dialog-window[_ngcontent-%COMP%]   .dialog-footer[_ngcontent-%COMP%]   button.green[_ngcontent-%COMP%]:active {\n            background-color: #1de71d; }\n        .g-dialog-container[_ngcontent-%COMP%]   .dialog-window[_ngcontent-%COMP%]   .dialog-footer[_ngcontent-%COMP%]   button.red[_ngcontent-%COMP%] {\n          background-color: #8f0f0f; }\n          .g-dialog-container[_ngcontent-%COMP%]   .dialog-window[_ngcontent-%COMP%]   .dialog-footer[_ngcontent-%COMP%]   button.red[_ngcontent-%COMP%]:hover {\n            background-color: #610a0a; }\n          .g-dialog-container[_ngcontent-%COMP%]   .dialog-window[_ngcontent-%COMP%]   .dialog-footer[_ngcontent-%COMP%]   button.red[_ngcontent-%COMP%]:active {\n            background-color: #e71d1d; }\n        .g-dialog-container[_ngcontent-%COMP%]   .dialog-window[_ngcontent-%COMP%]   .dialog-footer[_ngcontent-%COMP%]   button.blue[_ngcontent-%COMP%] {\n          background-color: #39b9c6; }\n          .g-dialog-container[_ngcontent-%COMP%]   .dialog-window[_ngcontent-%COMP%]   .dialog-footer[_ngcontent-%COMP%]   button.blue[_ngcontent-%COMP%]:hover {\n            background-color: #2e949e; }\n          .g-dialog-container[_ngcontent-%COMP%]   .dialog-window[_ngcontent-%COMP%]   .dialog-footer[_ngcontent-%COMP%]   button.blue[_ngcontent-%COMP%]:active {\n            background-color: #88d5dd; }\n\n@keyframes waiting1 {\n  0% {\n    transform: translate(-5px 0); }\n  50% {\n    transform: translate(10px, 0); }\n  100% {\n    transform: translate(-5px, 0); } }\n@keyframes waiting2 {\n  0% {\n    transform: translate(5px, 0); }\n  50% {\n    transform: translate(-10px, 0); }\n  100% {\n    transform: translate(5px, 0); } }\n    .overlay[_ngcontent-%COMP%]{\n      position:absolute;\n      top:0;\n      left:0;\n      width:100%;\n      height:100%;\n      z-index:9999;\n    }"];
var RenderType_DialogComponent = i0.ɵcrt({ encapsulation: 0, styles: styles_DialogComponent, data: { "animation": [{ type: 7, name: "scale", definitions: [{ type: 1, expr: "*<=>*", animation: [{ type: 11, selector: ".dialog-window", animation: [{ type: 6, styles: { transform: "scale(0,0)" }, offset: null }, { type: 12, timings: "0ms", animation: { type: 4, styles: { type: 6, styles: { transform: "scale(1,1)" }, offset: null }, timings: "100ms cubic-bezier(0.43, -0.14, 0.34, 1.6)" } }], options: { optional: true } }, { type: 11, selector: ".dialog-window", animation: [{ type: 4, styles: { type: 6, styles: { transform: "scale(0,0)" }, offset: null }, timings: "100ms" }], options: { optional: true } }], options: null }], options: {} }] } });
exports.RenderType_DialogComponent = RenderType_DialogComponent;
function View_DialogComponent_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "div", [["class", "overlay"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.hide() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, null); }
function View_DialogComponent_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "dialog-footer"]], null, null, null, null, null)), i0.ɵncd(null, 0)], null, null); }
function View_DialogComponent_5(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.accept() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngClass: [0, "ngClass"] }, null), (_l()(), i0.ɵted(2, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.okButton; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.okLabel; _ck(_v, 2, 0, currVal_1); }); }
function View_DialogComponent_6(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.reject() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngClass: [0, "ngClass"] }, null), (_l()(), i0.ɵted(2, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.offButton; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.offLabel; _ck(_v, 2, 0, currVal_1); }); }
function View_DialogComponent_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "div", [["class", "dialog-footer"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_DialogComponent_5)), i0.ɵdid(2, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_DialogComponent_6)), i0.ɵdid(4, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.okVisible; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.offVisible; _ck(_v, 4, 0, currVal_1); }, null); }
function View_DialogComponent_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 14, "div", [["class", "g-dialog-container"]], [[24, "@scale", 0]], null, null, null, null)), i0.ɵdid(1, 278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i0.ɵpod(2, { "background": 0, "zIndex": 1 }), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_DialogComponent_2)), i0.ɵdid(4, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(5, 0, null, null, 9, "div", [["class", "dialog-window"]], [[4, "width", "px"], [4, "height", "px"]], null, null, null, null)), i0.ɵdid(6, 278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i0.ɵpod(7, { "zIndex": 0 }), (_l()(), i0.ɵeld(8, 0, null, null, 1, "div", [["class", "dialog-header"]], null, null, null, null, null)), i0.ɵdid(9, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), i0.ɵeld(10, 0, null, null, 0, "div", [["class", "dialog-content"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_DialogComponent_3)), i0.ɵdid(12, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_DialogComponent_4)), i0.ɵdid(14, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _ck(_v, 2, 0, (("rgba(0,0,0,+" + _co.opacity) + ")"), _co.zIndex); _ck(_v, 1, 0, currVal_1); var currVal_2 = !(_co.dialog.accept && _co.dialog.reject); _ck(_v, 4, 0, currVal_2); var currVal_5 = _ck(_v, 7, 0, _co.zIndex); _ck(_v, 6, 0, currVal_5); var currVal_6 = "dialog-header"; var currVal_7 = _co.header; _ck(_v, 9, 0, currVal_6, currVal_7); var currVal_9 = _co.footer; _ck(_v, 12, 0, currVal_9); var currVal_10 = !_co.footer; _ck(_v, 14, 0, currVal_10); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = undefined; _ck(_v, 0, 0, currVal_0); var currVal_3 = _co.width; var currVal_4 = _co.height; _ck(_v, 5, 0, currVal_3, currVal_4); var currVal_8 = _co.message; _ck(_v, 10, 0, currVal_8); }); }
function View_DialogComponent_0(_l) { return i0.ɵvid(0, [i0.ɵqud(402653184, 1, { mask: 0 }), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_DialogComponent_1)), i0.ɵdid(2, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.visible; _ck(_v, 2, 0, currVal_0); }, null); }
exports.View_DialogComponent_0 = View_DialogComponent_0;
function View_DialogComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "yycf-dialog", [], null, null, null, View_DialogComponent_0, RenderType_DialogComponent)), i0.ɵdid(1, 245760, null, 1, i1.DialogComponent, [i3.DialogService], null, null), i0.ɵqud(335544320, 1, { footer: 0 })], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_DialogComponent_Host_0 = View_DialogComponent_Host_0;
var DialogComponentNgFactory = i0.ɵccf("yycf-dialog", i1.DialogComponent, View_DialogComponent_Host_0, { header: "header", key: "key", width: "width", height: "height", opacity: "opacity", message: "message", okLabel: "okLabel", offLabel: "offLabel", zIndex: "zIndex", okVisible: "okVisible", offVisible: "offVisible", okButton: "okButton", offButton: "offButton", visible: "visible", delay: "delay" }, {}, ["yycf-footer"]);
exports.DialogComponentNgFactory = DialogComponentNgFactory;
//# sourceMappingURL=dialog.component.ngfactory.js.map