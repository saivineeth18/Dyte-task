(this.webpackJsonpbasic=this.webpackJsonpbasic||[]).push([[0],{245:function(e,t,n){},263:function(e,t){},265:function(e,t){},288:function(e,t){},290:function(e,t){},318:function(e,t){},320:function(e,t){},321:function(e,t){},326:function(e,t){},328:function(e,t){},334:function(e,t){},336:function(e,t){},355:function(e,t){},367:function(e,t){},370:function(e,t){},396:function(e,t){},492:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(235),i=n.n(s),l=(n(245),n(34)),r=(n(138),n(139),n(140),n(141),n(142),n(83)),o=n(3);function u(e){var t=e.language,n=e.displayName,c=e.value,s=e.onChange,i=Object(a.useState)(!0),u=Object(l.a)(i,2),j=u[0];u[1];return Object(o.jsxs)("div",{className:"editor-container ".concat(j?"":"collapsed"),children:[Object(o.jsx)("div",{className:"editor-title",children:n}),Object(o.jsx)(r.Controlled,{onBeforeChange:function(e,t,n){s(n)},value:c,className:"code-mirror-wrapper",options:{lineWrapping:!0,lint:!0,mode:t,theme:"material",lineNumbers:!0}})]})}function j(e,t){var n="codepen-clone-"+e,c=Object(a.useState)((function(){var e=localStorage.getItem(n);return null!=e?JSON.parse(e):"function"===typeof t?t():t})),s=Object(l.a)(c,2),i=s[0],r=s[1];return Object(a.useEffect)((function(){localStorage.setItem(n,JSON.stringify(i))}),[n,i]),[i,r]}var b=function(){var e=j("html",""),t=Object(l.a)(e,2),c=t[0],s=t[1],i=j("css",""),r=Object(l.a)(i,2),b=r[0],d=r[1],h=j("js",""),p=Object(l.a)(h,2),m=p[0],O=p[1],f=Object(a.useState)(""),v=Object(l.a)(f,2),x=v[0],g=v[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){g("\n        <html>\n            <body>".concat(c,"</body>\n            <style>").concat(b,"</style>\n            <script>").concat(m,"<\/script>\n        </html>\n        "))}),250);return function(){return clearTimeout(e)}}),[c,b,m]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"pane top-pane",children:[Object(o.jsx)(u,{language:"xml",displayName:"HTML",value:c,onChange:s}),Object(o.jsx)(u,{language:"css",displayName:"CSS",value:b,onChange:d}),Object(o.jsx)(u,{language:"javascript",displayName:"JS",value:m,onChange:O})]}),Object(o.jsx)("button",{onClick:function(){var e=n(247);new e(""),new e({api_dev_key:"peSit_6JuOWc5B90pZaNPtJILLSQr0zw",api_user_name:"saivineeth18",api_user_password:"Saivineeth181@"}).createPaste({filename:"index.html",text:x,title:"index.html",format:"html5",privacy:0}).then((function(e){alert(e)})).fail((function(e){alert("Access to fetch at 'https://pastebin.com/api/api_post.php' from origin 'https://saivineeth18.github.io/' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: It does not have HTTP ok status.")}))},className:" btn btn-primary mb-3",children:"save"}),Object(o.jsx)("div",{className:"pane",children:Object(o.jsx)("iframe",{srcDoc:x,title:"output",sandbox:"allow-scripts",frameBorder:"0",width:"100%",height:"100%"})})]})},d=n(67),h=n(11),p=n(236),m=n(237),O=n(52),f=n(240),v=n(239),x=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={language:"",displayName:"",value:""},a.handleClick_html=a.handleClick_html.bind(Object(O.a)(a)),a.handleClick_css=a.handleClick_css.bind(Object(O.a)(a)),a.handleClick_js=a.handleClick_js.bind(Object(O.a)(a)),a}return Object(m.a)(n,[{key:"handleClick_html",value:function(){this.setState({language:"xlm",displayName:"Html"})}},{key:"handleClick_css",value:function(){this.setState({language:"css",displayName:"CSS"})}},{key:"handleClick_js",value:function(){this.setState({language:"javascript",displayName:"JavaScript"})}},{key:"render",value:function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("br",{}),Object(o.jsx)("div",{class:"container",children:Object(o.jsxs)("div",{class:"row center",children:[Object(o.jsx)("div",{class:"col",children:Object(o.jsx)("button",{type:"button",onClick:this.handleClick_html,class:"btn btn-outline-primary center",children:"index.html"})}),Object(o.jsx)("div",{class:"col",children:Object(o.jsx)("button",{type:"button",onClick:this.handleClick_css,class:"btn btn-outline-success center",children:"index.css"})}),Object(o.jsx)("div",{class:"col",children:Object(o.jsx)("button",{type:"button",onClick:this.handleClick_js,class:"btn btn-outline-danger center",children:"index.js"})})]})}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"editor-title",children:this.state.displayName}),Object(o.jsx)(r.Controlled,{value:this.state.value,className:"code-mirror-wrapper",options:{lineWrapping:!0,lint:!0,mode:this.state.language,theme:"material",lineNumbers:!0}})]})}}]),n}(a.Component);var g=function(){return Object(o.jsxs)(d.a,{children:[Object(o.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(o.jsx)(d.b,{to:"/",children:Object(o.jsx)("a",{class:"nav-link active ","aria-current":"page",children:"Home"})}),Object(o.jsx)(d.b,{to:"/Files",children:Object(o.jsx)("a",{class:"nav-link active ","aria-current":"page",children:"Files"})})]}),Object(o.jsxs)(h.c,{children:[Object(o.jsx)(h.a,{exact:!0,path:"/",children:Object(o.jsx)(b,{})}),Object(o.jsx)(h.a,{patch:"Files",children:Object(o.jsx)(x,{})})]})]})};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root"))}},[[492,1,2]]]);
//# sourceMappingURL=main.a9440b2b.chunk.js.map