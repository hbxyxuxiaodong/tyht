(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{LUi6:function(i,e,n){"use strict";n.d(e,"a",function(){return s});class s{constructor(i){this.dialogService=i}alert(i){this.dialogService.confirm({message:i,header:"ok",okVisible:!1,offVisible:!1,delay:1500})}warn(i){this.dialogService.confirm({message:i,header:"warning",okVisible:!1,offVisible:!1,delay:1500})}loading(i){this.loadingInstance=this.dialogService.confirm({message:i,header:"waiting",okVisible:!1,offVisible:!1})}unloading(){this.loadingInstance&&this.loadingInstance.close()}handleError(i){this.warn(i.message)}confirm(i,e,n){this.dialogService.confirm({message:i,header:"warning",accept:()=>{e&&"function"==typeof e&&e()},reject:()=>{n&&"function"==typeof n&&n()}})}}}}]);