(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{776:function(t,e,n){var content=n(794);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("236c1a60",content,!0,{sourceMap:!1})},793:function(t,e,n){"use strict";n(776)},794:function(t,e,n){var l=n(21)((function(i){return i[1]}));l.push([t.i,".card-materials[data-v-93fee046]{background:#fff;border:1px solid #f2f2f2;border-radius:10px;box-shadow:0 2px 48px 0 rgba(0,0,0,.06);padding:10px}.card-materials .span-title[data-v-93fee046]{color:#2d2d2d;font-family:SVN-Gilroy;font-size:14px;font-style:normal;font-weight:500;line-height:16px}.card-materials .text[data-v-93fee046]{font-size:26px;font-weight:700}.card-materials .text[data-v-93fee046],.card-materials .text-rate[data-v-93fee046]{font-family:SVN-Gilroy;font-style:normal;line-height:normal}.card-materials .text-rate[data-v-93fee046]{color:#2d2d2d;font-size:14px;font-weight:500}.text-span[data-v-93fee046]{color:rgba(45,45,45,.8);font-family:SVN-Gilroy;font-size:12px;font-style:normal;font-weight:400;line-height:normal}.text-c-primary[data-v-93fee046]{color:#0056b1!important}.text-c-warning[data-v-93fee046]{color:#ffb761!important}.text-c-danger[data-v-93fee046]{color:#fc4d32!important}.text-c-success[data-v-93fee046]{color:#00c092!important}.c-primary[data-v-93fee046]{background:#0056b1!important}.c-danger[data-v-93fee046]{background:#fc4d32!important}.c-warning[data-v-93fee046]{background:#ffb761!important}.c-success[data-v-93fee046]{background:#00c092!important}.order-service-title[data-v-93fee046]{color:#2d2d2d;font-family:SVN-Gilroy;font-size:14px;font-style:normal;font-weight:600;line-height:normal}.month-picker[data-v-93fee046]{width:94px}.chart-title[data-v-93fee046]{color:#2d2d2d;font-family:SVN-Gilroy;font-size:16px;font-style:normal;font-weight:700;line-height:normal}@media(max-width:600px){.card-materials .text[data-v-93fee046]{font-size:13px!important}.card-materials .text-rate[data-v-93fee046]{font-size:12px!important}}",""]),l.locals={},t.exports=l},811:function(t,e,n){"use strict";n.r(e);var l=n(277),o=n(1151),r=n(1148),d=n(715),c=n(803),v=n(13),f=(n(42),n(5),n(65)),C=(n(506),n(30),{data:function(){return{date:(new Date).toISOString().substr(0,7),menu:!1,modal:!1,month:1,data:null}},computed:{token:function(){return JSON.parse(localStorage.getItem("user")).auth_key}},methods:{load_data:function(){var t=this;return Object(v.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.default.get("dao-tao/bao-cao-ket-qua-dao-tao?thang="+t.month,{"Content-Type":"multipart/form-data",Authorization:"Bearer "+t.token}).then((function(e){var n;console.log(e),t.data=null==e||null===(n=e.data)||void 0===n?void 0:n.data}));case 2:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.month=this.date.split("-")[1]+"/"+this.date.split("-")[0],this.load_data()},watch:{date:function(){console.log(this.date);var t=this.date.split("-");console.log(t),this.month=t[1]+"/"+t[0],this.load_data()}}}),m=(n(793),n(36)),component=Object(m.a)(C,(function(){var t,e,n,v,f,C,m,h,x=this,w=x._self._c;return w("b-card",{staticClass:"mb-2 hover-card",staticStyle:{"min-width":"245px"}},[w("div",{staticClass:"d-flex justify-content-between align-center"},[w("div",{staticClass:"w-100"},[w("div",{staticClass:"d-flex justify-content-between align-items-center"},[w("label",{staticClass:"chart-title"},[x._v("Tổng quan kết quả đào tạo")]),x._v(" "),w("div",[w(r.a,{ref:"dialog",attrs:{"return-value":x.date,persistent:"",width:"290px"},on:{"update:returnValue":function(t){x.date=t},"update:return-value":function(t){x.date=t}},scopedSlots:x._u([{key:"activator",fn:function(t){var e=t.on,n=t.attrs;return[w(c.a,x._g(x._b({staticClass:"month-picker",attrs:{label:"","prepend-icon":"mdi-calendar",readonly:""},model:{value:x.date,callback:function(t){x.date=t},expression:"date"}},"v-text-field",n,!1),e))]}}]),model:{value:x.modal,callback:function(t){x.modal=t},expression:"modal"}},[x._v(" "),w(o.a,{attrs:{type:"month",scrollable:""},model:{value:x.date,callback:function(t){x.date=t},expression:"date"}},[w(d.a),x._v(" "),w(l.a,{attrs:{text:"",color:"primary"},on:{click:function(t){x.modal=!1}}},[x._v("\n                                Cancel\n                            ")]),x._v(" "),w(l.a,{attrs:{text:"",color:"primary"},on:{click:function(t){return x.$refs.dialog.save(x.date)}}},[x._v("\n                                OK\n                            ")])],1)],1)],1)]),x._v(" "),w("div",{staticClass:"row"},[w("div",{staticClass:"col-6"},[w("div",{staticClass:"card-materials"},[w("div",{staticClass:"span-title"},[x._v("Số giáo viên đang đào tạo")]),x._v(" "),w("div",{staticClass:"mt-3"},[w("div",{staticClass:"d-flex align-items-center justify-content-between"},[w("div",{staticClass:"text text-c-danger ms-2"},[x._v(x._s(null!==(t=null===(e=x.data)||void 0===e?void 0:e.dangHoc)&&void 0!==t?t:0))]),x._v(" "),w("div",[w("svg",{attrs:{width:"26",height:"18",viewBox:"0 0 26 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[w("circle",{attrs:{cx:"9.28711",cy:"9",r:"9",fill:"#FC4D32","fill-opacity":"0.1"}}),x._v(" "),w("path",{attrs:{d:"M13.2298 6.85537C13.1725 6.71488 13.0579 6.59917 12.9187 6.54132C12.8532 6.51653 12.7796 6.5 12.7059 6.5H11.1832C10.864 6.5 10.6102 6.7562 10.6102 7.07851C10.6102 7.40083 10.864 7.65703 11.1832 7.65703H11.3306L9.6033 9.40083L8.76831 8.14463C8.67007 8.00413 8.52272 7.90496 8.35081 7.88843C8.17071 7.8719 8.01517 7.92975 7.89238 8.05372L5.45288 10.5165C5.23185 10.7397 5.23185 11.1033 5.45288 11.3347C5.56749 11.4504 5.70665 11.5 5.85401 11.5C6.00136 11.5 6.14871 11.4421 6.25513 11.3347L8.20346 9.36777L9.03845 10.624C9.13669 10.7645 9.28404 10.8636 9.45595 10.8802C9.63605 10.8967 9.79159 10.8388 9.91438 10.7149L12.141 8.46694V8.6157C12.141 8.93802 12.3948 9.19421 12.7141 9.19421C13.0333 9.19421 13.2871 8.93802 13.2871 8.6157V7.07025C13.2707 6.99587 13.2626 6.92149 13.2298 6.85537Z",fill:"#FC4D32"}})]),x._v("\n                                    + 14%\n                                ")])])])])]),x._v(" "),w("div",{staticClass:"col-6"},[w("div",{staticClass:"card-materials"},[w("div",{staticClass:"span-title"},[x._v("Số giáo viên nhận thành tích ĐẠT")]),x._v(" "),w("div",{staticClass:"mt-3"},[w("div",{staticClass:"d-flex align-items-center justify-content-between"},[w("div",{staticClass:"text text-c-warning ms-2"},[x._v(x._s(null!==(n=null===(v=x.data)||void 0===v?void 0:v.dat)&&void 0!==n?n:0))]),x._v(" "),w("div",[w("svg",{attrs:{width:"27",height:"18",viewBox:"0 0 27 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[w("circle",{attrs:{cx:"9.75",cy:"9",r:"9",fill:"#FFB761","fill-opacity":"0.2"}}),x._v(" "),w("path",{attrs:{d:"M13.6927 6.85537C13.6354 6.71488 13.5208 6.59917 13.3816 6.54132C13.3161 6.51653 13.2425 6.5 13.1688 6.5H11.6461C11.3269 6.5 11.0731 6.7562 11.0731 7.07851C11.0731 7.40083 11.3269 7.65703 11.6461 7.65703H11.7935L10.0662 9.40083L9.2312 8.14463C9.13296 8.00413 8.98561 7.90496 8.8137 7.88843C8.6336 7.8719 8.47806 7.92975 8.35527 8.05372L5.91577 10.5165C5.69474 10.7397 5.69474 11.1033 5.91577 11.3347C6.03038 11.4504 6.16954 11.5 6.3169 11.5C6.46425 11.5 6.6116 11.4421 6.71802 11.3347L8.66635 9.36777L9.50134 10.624C9.59958 10.7645 9.74693 10.8636 9.91884 10.8802C10.0989 10.8967 10.2545 10.8388 10.3773 10.7149L12.6039 8.46694V8.6157C12.6039 8.93802 12.8577 9.19421 13.177 9.19421C13.4962 9.19421 13.75 8.93802 13.75 8.6157V7.07025C13.7336 6.99587 13.7254 6.92149 13.6927 6.85537Z",fill:"#FFB761"}})]),x._v("\n                                    + 43%\n                                ")])])])])]),x._v(" "),w("div",{staticClass:"col-6"},[w("div",{staticClass:"card-materials"},[w("div",{staticClass:"span-title"},[x._v("Số giáo viên phải thi lại")]),x._v(" "),w("div",{staticClass:"mt-3"},[w("div",{staticClass:"d-flex align-items-center justify-content-between"},[w("div",{staticClass:"text text-c-primary ms-2"},[x._v(x._s(null!==(f=null===(C=x.data)||void 0===C?void 0:C.hocLai)&&void 0!==f?f:0))]),x._v(" "),w("div",[w("svg",{attrs:{width:"26",height:"18",viewBox:"0 0 26 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[w("circle",{attrs:{cx:"9.28711",cy:"9",r:"9",fill:"#0056B1","fill-opacity":"0.15"}}),x._v(" "),w("path",{attrs:{d:"M13.2298 6.85537C13.1725 6.71488 13.0579 6.59917 12.9187 6.54132C12.8532 6.51653 12.7796 6.5 12.7059 6.5H11.1832C10.864 6.5 10.6102 6.7562 10.6102 7.07851C10.6102 7.40083 10.864 7.65703 11.1832 7.65703H11.3306L9.6033 9.40083L8.76831 8.14463C8.67007 8.00413 8.52272 7.90496 8.35081 7.88843C8.17071 7.8719 8.01517 7.92975 7.89238 8.05372L5.45288 10.5165C5.23185 10.7397 5.23185 11.1033 5.45288 11.3347C5.56749 11.4504 5.70665 11.5 5.85401 11.5C6.00136 11.5 6.14871 11.4421 6.25513 11.3347L8.20346 9.36777L9.03845 10.624C9.13669 10.7645 9.28404 10.8636 9.45595 10.8802C9.63605 10.8967 9.79159 10.8388 9.91438 10.7149L12.141 8.46694V8.6157C12.141 8.93802 12.3948 9.19421 12.7141 9.19421C13.0333 9.19421 13.2871 8.93802 13.2871 8.6157V7.07025C13.2707 6.99587 13.2626 6.92149 13.2298 6.85537Z",fill:"#0056B1"}})]),x._v("\n                                    + 24%\n                                ")])])])])]),x._v(" "),w("div",{staticClass:"col-6"},[w("div",{staticClass:"card-materials"},[w("div",{staticClass:"span-title"},[x._v("Số giáo viên hoàn thành đào tạo")]),x._v(" "),w("div",{staticClass:"mt-3"},[w("div",{staticClass:"d-flex align-items-center justify-content-between"},[w("div",{staticClass:"text text-c-success ms-2"},[x._v(x._s(null!==(m=null===(h=x.data)||void 0===h?void 0:h.hoanThanh)&&void 0!==m?m:0))]),x._v(" "),w("div",[w("svg",{attrs:{width:"27",height:"18",viewBox:"0 0 27 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[w("circle",{attrs:{cx:"9.75",cy:"9",r:"9",fill:"#00C092","fill-opacity":"0.2"}}),x._v(" "),w("path",{attrs:{d:"M13.6927 6.85537C13.6354 6.71488 13.5208 6.59917 13.3816 6.54132C13.3161 6.51653 13.2425 6.5 13.1688 6.5H11.6461C11.3269 6.5 11.0731 6.7562 11.0731 7.07851C11.0731 7.40083 11.3269 7.65703 11.6461 7.65703H11.7935L10.0662 9.40083L9.2312 8.14463C9.13296 8.00413 8.98561 7.90496 8.8137 7.88843C8.6336 7.8719 8.47806 7.92975 8.35527 8.05372L5.91577 10.5165C5.69474 10.7397 5.69474 11.1033 5.91577 11.3347C6.03038 11.4504 6.16954 11.5 6.3169 11.5C6.46425 11.5 6.6116 11.4421 6.71802 11.3347L8.66635 9.36777L9.50134 10.624C9.59958 10.7645 9.74693 10.8636 9.91884 10.8802C10.0989 10.8967 10.2545 10.8388 10.3773 10.7149L12.6039 8.46694V8.6157C12.6039 8.93802 12.8577 9.19421 13.177 9.19421C13.4962 9.19421 13.75 8.93802 13.75 8.6157V7.07025C13.7336 6.99587 13.7254 6.92149 13.6927 6.85537Z",fill:"#00C092"}})]),x._v("\n                                    + 14%\n                                ")])])])])])])])])])}),[],!1,null,"93fee046",null);e.default=component.exports}}]);