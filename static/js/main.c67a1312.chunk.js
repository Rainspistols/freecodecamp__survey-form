(this["webpackJsonpfreecodecamp__survey-form"]=this["webpackJsonpfreecodecamp__survey-form"]||[]).push([[0],{18:function(e,n,t){e.exports=t.p+"static/media/homeBg.a48f1005.jpg"},20:function(e,n,t){e.exports=t(27)},27:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(12),i=t.n(o),l=t(1),c=t(7),u=t(6),m=t(19),d=t(2);function p(){var e=Object(l.a)(["\n  min-height: 40px;\n\n  font-size: 20px;\n  background-color: white;\n  border-radius: 5px;\n  width: 100%;\n  padding: 1% 3%;\n  box-sizing: border-box;\n  color: #303a52;\n\n  &::placeholder {\n    color: black;\n    font-size: 18px;\n    font-weight: 400;\n  }\n\n  &:focus {\n    border-color: #3d5af1;\n    outline: 0;\n    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);\n  }\n"]);return p=function(){return e},e}var s=d.a.input(p()),h=function(e){var n=e.required,t=void 0===n||n,a=e.children;return r.a.createElement(s,Object.assign({},e,{required:t}),a)};function b(){var e=Object(l.a)(["\n  margin-bottom: 30px;\n  .label-wrap {\n    margin-bottom: 10px;\n  }\n"]);return b=function(){return e},e}var f=d.a.div(b()),g=function(e){var n=e.label,t=e.input;return r.a.createElement(f,null,r.a.createElement("div",{className:"label-wrap"},n),r.a.createElement("div",{className:"input-wrap"},t))};function x(){var e=Object(l.a)(["\n  color: white;\n  font-weight: 600;\n  font-size: 18px;\n  span {\n    font-weight: 400;\n    font-size: 16px;\n  }\n"]);return x=function(){return e},e}var v=d.a.label(x()),E=function(e){var n=e.text,t=e.htmlFor,a=e.smallText;return r.a.createElement(v,{htmlFor:t},n," ",a&&r.a.createElement("span",null,a))};function y(){var e=Object(l.a)(["\n  .radio-item__wrap {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n  }\n\n  input {\n    width: auto;\n    margin-right: 10px;\n    display: block;\n    width: 30px;\n  }\n"]);return y=function(){return e},e}var w=d.a.div(y()),k=function(e){var n=e.data,t=e.name,a=e.onChange;e.value;return r.a.createElement(w,null,n.map((function(e,n){return r.a.createElement("div",{key:n,className:"radio-item__wrap"},r.a.createElement(h,{name:t,value:e,type:"radio",onChange:a,defaultChecked:0===n,id:e}),r.a.createElement(E,{text:e,htmlFor:e}))})))};function C(){var e=Object(l.a)(["\n  .checkbox-item__wrap {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n  }\n\n  input {\n    width: auto;\n    margin-right: 10px;\n    display: block;\n    width: 30px;\n  }\n"]);return C=function(){return e},e}var j=d.a.div(C()),O=function(e){var n=e.checkedData,t=e.data,a=e.onChange;return r.a.createElement(j,null,t.map((function(e,t){return r.a.createElement("div",{className:"checkbox-item__wrap",key:t},r.a.createElement(h,{type:"checkbox",required:!1,id:e,onChange:a,checked:n[e],value:e}),r.a.createElement(E,{text:e,htmlFor:e}))})))};function F(){var e=Object(l.a)(["\n  padding: 5% 10% 5% 10%;\n  background: rgba(27, 27, 50, 0.8);\n  border-radius: 5px;\n\n  button {\n    height: 40px;\n    width: 100%;\n    background: #17b978;\n    border: none;\n    font-size: 18px;\n    color: white;\n    font-weight: 500;\n    border-radius: 5px;\n    cursor: pointer;\n  }\n"]);return F=function(){return e},e}var S=["Select a current role","Student","Full Time Job","Full Time Learner","Prefer not to say","Other"],z=["Select an option","Challanges","Projects","Community","Open Source"],_=["Front-end Projects","Back-end Projects","Data Visualization","Challenges","Open Source Community","Gitter help rooms","Videos","City Meetups","Wiki","Forum","Additional Courses"],T=["Definitely","Maybe","Not sure"],D=d.a.form(F()),N=function(){var e=Object(a.useState)({name:"",email:"",age:"",textarea:"",dropdown:"Select a current role",radio:"Definitely",dropdown2:"Select an option",checkbox:{"Front-end Projects":!1,"Back-end Projects":!1,"Data Visualization":!1,Challenges:!1,"Open Source Community":!1,"Gitter help rooms":!1,Videos:!1,"City Meetups":!1,Wiki:!1,Forum:!1,"Additional Courses":!1}}),n=Object(m.a)(e,2),t=n[0],o=n[1],i=Object(a.useRef)(null),l=function(e){e.preventDefault(),i.current.checkValidity()&&alert("The form is completed correctly. Thanks you!")},d=function(e){var n=e.target,a=n.id,r=n.value,i=n.type,l=n.name;switch(i){case"radio":o(Object(u.a)(Object(u.a)({},t),{},Object(c.a)({},l,r)));break;case"checkbox":var m=e.target.checked;o((function(e){return Object(u.a)(Object(u.a)({},e),{},{checkbox:Object(u.a)(Object(u.a)({},e.checkbox),{},Object(c.a)({},a,!!m))})}));break;default:o(Object(u.a)(Object(u.a)({},t),{},Object(c.a)({},a,r)))}};return r.a.createElement(D,{id:"survey-form",onSubmit:l,ref:i},r.a.createElement(g,{label:r.a.createElement(E,{htmlFor:"name",text:"Name"}),input:r.a.createElement(h,{placeholder:"Enter your name",type:"text",id:"name",onChange:d,value:t.name})}),r.a.createElement(g,{label:r.a.createElement(E,{htmlFor:"email",text:"Email"}),input:r.a.createElement(h,{placeholder:"Enter your email",type:"email",id:"email",onChange:d,value:t.email})}),r.a.createElement(g,{label:r.a.createElement(E,{htmlFor:"age",text:"Age",smallText:"(optional)"}),input:r.a.createElement(h,{placeholder:"Age",type:"number",id:"age",onChange:d,value:t.age,required:!1,min:"18",max:"120"})}),r.a.createElement(g,{label:r.a.createElement(E,{htmlFor:"dropdown",text:"Which option best describes your current role?"}),input:r.a.createElement(h,{id:"dropdown",as:"select",onChange:d,value:t.dropdown,name:"dropdown"},S.map((function(e,n){return r.a.createElement("option",{key:n,value:e,disabled:0===n},e)})))}),r.a.createElement(g,{label:r.a.createElement(E,{htmlFor:"radio",text:"Would you recommend freeCodeCamp to a friend?"}),input:r.a.createElement(k,{data:T,onChange:d,name:"radio"})}),r.a.createElement(g,{label:r.a.createElement(E,{htmlFor:"dropdown2",text:"What is your favorite feature of freeCodeCamp?"}),input:r.a.createElement(h,{id:"dropdown2",as:"select",onChange:d,value:t.dropdown2,name:"dropdown2"},z.map((function(e,n){return r.a.createElement("option",{key:n,value:e,disabled:0===n},e)})))}),r.a.createElement(g,{label:r.a.createElement(E,{text:"What would you like to see improved?",smallText:"(Check all that apply)"}),input:r.a.createElement(O,{checkedData:t.checkbox,data:_,onChange:d})}),r.a.createElement(g,{label:r.a.createElement(E,{htmlFor:"textarea",text:"Any comments or suggestions?"}),input:r.a.createElement(h,{placeholder:"Enter your comment here ...",as:"textarea",id:"textarea",onChange:d,value:t.textarea,rows:"4",style:{borderRadius:0}})}),r.a.createElement("button",{id:"submit",onClick:l,type:"submit"},"Submit"))};function M(){var e=Object(l.a)(["\n  padding: 40px 5% 20px 5%;\n  text-align: center;\n\n  #title {\n    font-weight: 700;\n    font-size: 30px;\n    line-height: 30px;\n    margin-bottom: 10px;\n  }\n\n  #description {\n    font-style: italic;\n    font-weight: 300;\n    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);\n    font-size: 20px;\n    line-height: 20px;\n  }\n"]);return M=function(){return e},e}var P=d.a.section(M()),W=function(){return r.a.createElement(P,null,r.a.createElement("h1",{id:"title"},"freeCodeCamp Survey Form"),r.a.createElement("p",{id:"description"},"Thank you for taking the time to check my form"))};function A(){var e=Object(l.a)(["\n  "," {\n    width: 80%;\n    margin: 0 auto;\n  }\n"]);return A=function(){return e},e}var B=d.a.div(A(),(function(e){return e.theme.mediaTablet})),V=function(e){var n=e.children;return r.a.createElement(B,null,n)},q=function(){return r.a.createElement("div",null,r.a.createElement(V,null,r.a.createElement(W,null),r.a.createElement(N,null)))},G=t(14),J={mediaTablet:"@media(min-width: 768px)",mediaDesktop:"@media(min-width: 1280px)"},R=function(e){var n=e.children;return r.a.createElement(G.a,{theme:J},n)},I=t(3),U=t(17),H=t.n(U),L=t(18),K=t.n(L);function Q(){var e=Object(l.a)(["\n      ","\n      html,\n      body {\n        padding: 0;\n        margin: 0;\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',\n          'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',\n          'Helvetica Neue', sans-serif;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        color: white;\n      }\n\n      body::before {\n        content: '';\n        top: 0;\n        left: 0;\n        height: 100%;\n        width: 100%;\n        z-index: -1;\n        position: fixed;\n        background: linear-gradient(\n            115deg,\n            rgba(58, 58, 158, 0.7),\n            rgba(136, 136, 206, 0.6)\n          ),\n          url(",");\n        background-size: cover;\n        background-repeat: no-repeat;\n        background-position: center;\n      }\n\n      code {\n        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n          monospace;\n      }\n\n      img {\n        max-width: 100%;\n      }\n      footer,\n      header,\n      body {\n        font-size: 14px;\n        line-height: 1.4em;\n      }\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        margin: 0;\n        padding: 0;\n      }\n\n      a {\n        text-decoration: none;\n        color: inherit;\n        margin: 0;\n      }\n\n      ul,\n      li,\n      ol {\n        margin: 0;\n        padding: 0;\n        list-style-type: none;\n      }\n\n      dl,\n      dd {\n        margin-bottom: 0;\n      }\n\n      figure {\n        margin: 0;\n      }\n\n      button {\n        padding: 0;\n      }\n\n      img {\n        max-width: 100%;\n        height: auto;\n        display: block;\n      }\n\n      p {\n        margin: 0;\n      }\n\n      .visually-hidden {\n        position: absolute;\n        clip: rect(0 0 0 0);\n        width: 1px;\n        height: 1px;\n        margin: -1px;\n      }\n\n      .inactive {\n        pointer-events: none;\n      }\n    "]);return Q=function(){return e},e}var X=function(){return r.a.createElement(I.Global,{styles:Object(I.css)(Q(),H.a,K.a)})};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null,r.a.createElement(X,null),r.a.createElement(q,null))),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.c67a1312.chunk.js.map