(this["webpackJsonpmessage-board-hook"]=this["webpackJsonpmessage-board-hook"]||[]).push([[0],{17:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var c,i,o,a,r,s,d,j,b,l,u,h,m,O,g,p,f=n(0),x=n.n(f),v=n(9),y=n.n(v),S=(n(17),n(4)),w=n(2),k=n(3),D=n(1),C=k.a.button(c||(c=Object(w.a)(["\n\tborder-radius: 8px;\n\tpadding: 0.5rem 1rem;\n\tfont-size: 0.8rem;\n"]))),E=k.a.div(i||(i=Object(w.a)(["\n\twidth: 550px;\n\tmargin: 0 auto;\n"]))),F=k.a.h1(o||(o=Object(w.a)(["color: navy;"]))),L=k.a.form(a||(a=Object(w.a)([""]))),z=k.a.div(r||(r=Object(w.a)(["margin-bottom: 8px;"]))),T=k.a.textarea(s||(s=Object(w.a)(["\n\tdisplay: block;\n\twidth: 99%;\n"]))),A=Object(k.a)(C)(d||(d=Object(w.a)(["margin-top: 8px;"]))),J=k.a.div(j||(j=Object(w.a)(["margin-top: 16px;"]))),P=k.a.div(b||(b=Object(w.a)(["\n\tbackground: pink;\n\tcolor: red;\n\tpadding: 1rem;\n\tmargin: 1rem 0;\n\tborder-radius: 8px;\n\tborder: 1px solid grey;\n"]))),B=k.a.div(l||(l=Object(w.a)(["\n\tposition: fixed;\n\twidth: 100vw;\n\theight: 100vh;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground: rgba(0, 0, 0, 0.5);\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: 2rem;\n\tcolor: white;\n\tfont-weight: bold;\n"]))),I=k.a.div(u||(u=Object(w.a)(["\n\tborder: 1px solid grey;\n\tpadding: 8px 16px;\n\tborder-radius: 8px;\n\t& + & {\n\t\tmargin-top: 0.5rem;\n\t}\n"]))),N=k.a.div(h||(h=Object(w.a)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding: 0.5rem;\n\tborder-bottom: 2px solid rgba(0, 0, 0, 0.5);\n"]))),_=k.a.div(m||(m=Object(w.a)(["font-size: 1rem;"]))),M=k.a.div(O||(O=Object(w.a)([""]))),q=k.a.div(g||(g=Object(w.a)(["\n\tfont-size: 0.9rem;\n\tmargin-top: 1rem;\n"]))),G=Object(k.a)(C)(p||(p=Object(w.a)(["\n\tdisplay: block;\n\tmargin: 0.6rem auto;\n\tmargin-right: 10px;\n"])));function H(t){var e=t.author,n=t.time,c=t.children,i=t.handleDelete,o=t.id;return Object(D.jsxs)(I,{children:[Object(D.jsxs)(N,{children:[Object(D.jsx)(_,{children:e}),Object(D.jsx)(M,{children:n})]}),Object(D.jsx)(q,{children:c}),Object(D.jsx)(G,{onClick:function(){i(o)},children:"Delete"})]})}var K=function(){var t=Object(f.useState)([]),e=Object(S.a)(t,2),n=e[0],c=e[1],i=Object(f.useState)(""),o=Object(S.a)(i,2),a=o[0],r=o[1],s=Object(f.useState)(""),d=Object(S.a)(s,2),j=d[0],b=d[1],l=Object(f.useState)(null),u=Object(S.a)(l,2),h=u[0],m=u[1],O=Object(f.useState)(null),g=Object(S.a)(O,2),p=g[0],x=g[1],v=Object(f.useState)(null),y=Object(S.a)(v,2),w=y[0],k=y[1];Object(f.useEffect)((function(){fetch("https://student-json-api.lidemy.me/comments?_sort=createdAt&_order=desc").then((function(t){return t.json()})).then((function(t){c(t)})).catch((function(t){m(t.message)}))}),[n]);var C=function(t){k("Deleting..."),fetch("https://student-json-api.lidemy.me/comments/"+t,{method:"DELETE",headers:{"content-type":"application/json"}}).then((function(t){return t.json()})).then((function(t){console.log("Deleted: ",t),k("")}))};return Object(D.jsxs)(E,{children:[Object(D.jsx)(F,{children:"\u7559\u8a00\u677f"}),Object(D.jsxs)(L,{onSubmit:function(t){t.preventDefault(),w||(k("Loading..."),fetch("https://student-json-api.lidemy.me/comments",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nickname:j,body:a})}).then((function(t){return t.json()})).then((function(t){if(console.log("Added: ",t),0===t.ok)return x(t.message),void k("");r(""),b(""),k("")})))},children:[Object(D.jsxs)(z,{children:["Nickname: ",Object(D.jsx)("input",{type:"text",value:j,onChange:function(t){b(t.target.value)}})]}),Object(D.jsx)(T,{rows:5,value:a,onChange:function(t){r(t.target.value)},onFocus:function(){return x(null)}}),Object(D.jsx)(A,{children:"\u9001\u51fa"})]}),Object(D.jsxs)(J,{children:[h&&Object(D.jsxs)(P,{children:["Something went wrong... ",h.toString()]}),p&&Object(D.jsxs)(P,{children:["Something went wrong... ",p.toString()]}),w&&Object(D.jsx)(B,{children:w}),n&&n.map((function(t){return Object(D.jsx)(H,{author:t.nickname,time:new Date(t.createdAt).toLocaleString(),id:t.id,handleDelete:C,children:t.body},t.id)}))]})]})},Q=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,o=e.getLCP,a=e.getTTFB;n(t),c(t),i(t),o(t),a(t)}))};y.a.render(Object(D.jsx)(x.a.StrictMode,{children:Object(D.jsx)(K,{})}),document.getElementById("root")),Q()}},[[21,1,2]]]);
//# sourceMappingURL=main.04b51f23.chunk.js.map