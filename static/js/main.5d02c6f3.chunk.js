(this.webpackJsonpbasic=this.webpackJsonpbasic||[]).push([[0],{245:function(e,t,n){},263:function(e,t){},265:function(e,t){},288:function(e,t){},290:function(e,t){},318:function(e,t){},320:function(e,t){},321:function(e,t){},326:function(e,t){},328:function(e,t){},334:function(e,t){},336:function(e,t){},355:function(e,t){},367:function(e,t){},370:function(e,t){},396:function(e,t){},492:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(235),s=n.n(i),l=(n(245),n(34)),r=(n(138),n(139),n(140),n(141),n(142),n(83)),o=n(3);function j(e){var t=e.language,n=e.displayName,c=e.value,i=e.onChange,s=Object(a.useState)(!0),j=Object(l.a)(s,2),u=j[0];j[1];return Object(o.jsxs)("div",{className:"editor-container ".concat(u?"":"collapsed"),children:[Object(o.jsx)("div",{className:"editor-title",children:n}),Object(o.jsx)(r.Controlled,{onBeforeChange:function(e,t,n){i(n)},value:c,className:"code-mirror-wrapper",options:{lineWrapping:!0,lint:!0,mode:t,theme:"material",lineNumbers:!0}})]})}function u(e,t){var n="codepen-clone-"+e,c=Object(a.useState)((function(){var e=localStorage.getItem(n);return null!=e?JSON.parse(e):"function"===typeof t?t():t})),i=Object(l.a)(c,2),s=i[0],r=i[1];return Object(a.useEffect)((function(){localStorage.setItem(n,JSON.stringify(s))}),[n,s]),[s,r]}var d=function(){var e=u("html",""),t=Object(l.a)(e,2),c=t[0],i=t[1],s=u("css",""),r=Object(l.a)(s,2),d=r[0],b=r[1],h=u("js",""),m=Object(l.a)(h,2),O=m[0],p=m[1],v=Object(a.useState)(""),x=Object(l.a)(v,2),f=x[0],g=x[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){g("\n        <html>\n            <body>".concat(c,"</body>\n            <style>").concat(d,"</style>\n            <script>").concat(O,"<\/script>\n        </html>\n        "))}),250);return function(){return clearTimeout(e)}}),[c,d,O]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"pane top-pane",children:[Object(o.jsx)(j,{language:"xml",displayName:"HTML",value:c,onChange:i}),Object(o.jsx)(j,{language:"css",displayName:"CSS",value:d,onChange:b}),Object(o.jsx)(j,{language:"javascript",displayName:"JS",value:O,onChange:p})]}),Object(o.jsx)("button",{onClick:function(){var e=n(247);new e(""),new e({api_dev_key:"peSit_6JuOWc5B90pZaNPtJILLSQr0zw",api_user_name:"saivineeth18",api_user_password:"Saivineeth181@"}).createPaste({filename:"index.html",text:f,title:"index.html",format:"html5",privacy:0}).then((function(e){alert(e)})),console.log("saved")},className:" btn btn-primary mb-3",children:"save"}),Object(o.jsx)("div",{className:"pane",children:Object(o.jsx)("iframe",{srcDoc:f,title:"output",sandbox:"allow-scripts",frameBorder:"0",width:"100%",height:"100%"})})]})},b=n(67),h=n(11),m=n(236),O=n(237),p=n(52),v=n(240),x=n(239),f=function(e){Object(v.a)(n,e);var t=Object(x.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={language:"",displayName:"",value:""},a.handleClick_html=a.handleClick_html.bind(Object(p.a)(a)),a.handleClick_css=a.handleClick_css.bind(Object(p.a)(a)),a.handleClick_js=a.handleClick_js.bind(Object(p.a)(a)),a}return Object(O.a)(n,[{key:"handleClick_html",value:function(){this.setState({language:"xlm",displayName:"Html"})}},{key:"handleClick_css",value:function(){this.setState({language:"css",displayName:"CSS"})}},{key:"handleClick_js",value:function(){this.setState({language:"javascript",displayName:"JavaScript"})}},{key:"render",value:function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("br",{}),Object(o.jsx)("div",{class:"container",children:Object(o.jsxs)("div",{class:"row center",children:[Object(o.jsx)("div",{class:"col",children:Object(o.jsx)("button",{type:"button",onClick:this.handleClick_html,class:"btn btn-outline-primary center",children:"index.html"})}),Object(o.jsx)("div",{class:"col",children:Object(o.jsx)("button",{type:"button",onClick:this.handleClick_css,class:"btn btn-outline-success center",children:"index.css"})}),Object(o.jsx)("div",{class:"col",children:Object(o.jsx)("button",{type:"button",onClick:this.handleClick_js,class:"btn btn-outline-danger center",children:"index.js"})})]})}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"editor-title",children:this.state.displayName}),Object(o.jsx)(r.Controlled,{value:this.state.value,className:"code-mirror-wrapper",options:{lineWrapping:!0,lint:!0,mode:this.state.language,theme:"material",lineNumbers:!0}})]})}}]),n}(a.Component);var g=function(){return Object(o.jsxs)(b.a,{children:[Object(o.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(o.jsx)(b.b,{to:"/",children:Object(o.jsx)("a",{class:"nav-link active ","aria-current":"page",children:"Home"})}),Object(o.jsx)(b.b,{to:"/Files",children:Object(o.jsx)("a",{class:"nav-link active ","aria-current":"page",children:"Files"})})]}),Object(o.jsxs)(h.c,{children:[Object(o.jsx)(h.a,{exact:!0,path:"/",children:Object(o.jsx)(d,{})}),Object(o.jsx)(h.a,{patch:"Files",children:Object(o.jsx)(f,{})})]})]})};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root"))}},[[492,1,2]]]);
//# sourceMappingURL=main.5d02c6f3.chunk.js.map