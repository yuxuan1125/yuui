webpackJsonp([0],{"26dS":function(n,t,e){"use strict";function o(n){e("KiQr")}Object.defineProperty(t,"__esModule",{value:!0});var a={data:function(){return{msg:"yuui - 基于vue2.x，可复用UI组件",modalVisible2:!1,zIndex:1e3}},methods:{btnClick:function(){alert("不要点人家啦")},modalClick2:function(n){this.modalVisible2=!0,this.zIndex++},modalClose2:function(n){this.modalVisible2=!1},modalOk2:function(){this.modalVisible2=!1}},mounted:function(){}},i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"wrap"},[e("h3",[n._v(n._s(n.msg))]),n._v(" "),e("h2",[n._v("基础组件")]),n._v(" "),e("h4",[n._v("按钮")]),n._v(" "),e("yu-button",{attrs:{title:"点我弹框"}},[n._v("普通")]),n._v(" "),e("yu-button",{attrs:{type:"primary",icon:"yu__icon--checked"},on:{click:n.btnClick}},[n._v("主要")]),n._v(" "),e("yu-button",{attrs:{type:"error",icon:"yu__icon--checked"}}),n._v(" "),e("yu-button",{attrs:{type:"warning",disabled:""}},[n._v("禁止")]),n._v(" "),e("yu-button",{attrs:{plain:""}},[n._v("简约")]),n._v(" "),e("yu-button",{attrs:{type:"text",icon:"yu__icon--checked"}},[n._v("文字")]),n._v(" "),e("yu-button",{attrs:{loading:"",type:"success"}},[n._v("loading状态")]),n._v(" "),e("yu-button",{attrs:{"bg-color":"#fc0",color:"#e0439a","border-color":"#fc0"}},[n._v("自定义颜色")]),n._v(" "),e("br"),e("br"),n._v(" "),e("yu-button",{staticClass:"btn__block",attrs:{"bg-color":"#fcb",color:"#e0439a","border-color":"#fcb",block:"","no-radius":""}},[n._v("无圆角块状")]),n._v(" "),e("br"),n._v(" "),e("yu-button",{attrs:{round:"",long:""}},[n._v("100%宽圆角")]),n._v(" "),e("br"),e("br"),n._v(" "),e("h2",[n._v("弹出层")]),n._v(" "),e("h4",[n._v("Modal")]),n._v(" "),e("yu-button",{attrs:{type:"primary"},on:{click:n.modalClick2}},[n._v("自定义内容confirm")]),n._v(" "),e("yu-modal",{attrs:{type:"confirm","dialog-title":"填写资料",visible:n.modalVisible2,color:"#19be6b","z-index":n.zIndex},on:{close:n.modalClose2,confirm:n.modalOk2}},[e("yu-input",{attrs:{max:"10",placeholder:"请输入用户名"}})],1)],1)},r=[],b={render:i,staticRenderFns:r},A=b,d=e("X4nt"),l=o,c=d(a,A,!1,l,"data-v-526b8be4",null);t.default=c.exports},"2mYN":function(n,t,e){t=n.exports=e("I71c")(!0),t.push([n.i,"\n#demo-wrap[data-v-526b8be4] {\n  margin: 10px auto;\n}\n.wrap[data-v-526b8be4] {\n  margin: 10px;\n}\nh1[data-v-526b8be4],\nh3[data-v-526b8be4] {\n  margin: 0;\n}\nh3[data-v-526b8be4] {\n  font-weight: normal;\n  font-size: 16px;\n}\nh4[data-v-526b8be4] {\n  font-weight: normal;\n  font-size: 14px;\n  text-align: left;\n  background-color: #e9e9e9;\n  padding: 10px;\n}\nh2[data-v-526b8be4] {\n  text-align: left;\n  width: 100%;\n  border-bottom: 1px dashed #ededed;\n  font-size: 16px;\n  height: 40px;\n  line-height: 40px;\n  text-indent: 10px;\n  margin-top: 30px;\n  margin-bottom: 0;\n}\n.btn__block[data-v-526b8be4] {\n  margin: 0 auto !important;\n}\n.yu__btn[data-v-526b8be4],\n.yu__tag[data-v-526b8be4] {\n  margin-bottom: 10px;\n}\n","",{version:3,sources:["D:/Work/yu-ui/src/views/home.vue"],names:[],mappings:";AACA;EACE,kBAAkB;CACnB;AACD;EACE,aAAa;CACd;AACD;;EAEE,UAAU;CACX;AACD;EACE,oBAAoB;EACpB,gBAAgB;CACjB;AACD;EACE,oBAAoB;EACpB,gBAAgB;EAChB,iBAAiB;EACjB,0BAA0B;EAC1B,cAAc;CACf;AACD;EACE,iBAAiB;EACjB,YAAY;EACZ,kCAAkC;EAClC,gBAAgB;EAChB,aAAa;EACb,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,iBAAiB;CAClB;AACD;EACE,0BAA0B;CAC3B;AACD;;EAEE,oBAAoB;CACrB",file:"home.vue",sourcesContent:["\n#demo-wrap[data-v-526b8be4] {\n  margin: 10px auto;\n}\n.wrap[data-v-526b8be4] {\n  margin: 10px;\n}\nh1[data-v-526b8be4],\nh3[data-v-526b8be4] {\n  margin: 0;\n}\nh3[data-v-526b8be4] {\n  font-weight: normal;\n  font-size: 16px;\n}\nh4[data-v-526b8be4] {\n  font-weight: normal;\n  font-size: 14px;\n  text-align: left;\n  background-color: #e9e9e9;\n  padding: 10px;\n}\nh2[data-v-526b8be4] {\n  text-align: left;\n  width: 100%;\n  border-bottom: 1px dashed #ededed;\n  font-size: 16px;\n  height: 40px;\n  line-height: 40px;\n  text-indent: 10px;\n  margin-top: 30px;\n  margin-bottom: 0;\n}\n.btn__block[data-v-526b8be4] {\n  margin: 0 auto !important;\n}\n.yu__btn[data-v-526b8be4],\n.yu__tag[data-v-526b8be4] {\n  margin-bottom: 10px;\n}\n"],sourceRoot:""}])},KiQr:function(n,t,e){var o=e("2mYN");"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);e("5ten")("4020dbe5",o,!0,{})}});
//# sourceMappingURL=0.732a099322bb3f6aab22.js.map