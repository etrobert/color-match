(this.webpackJsonpcolormatch=this.webpackJsonpcolormatch||[]).push([[0],{208:function(t,e,n){},209:function(t,e,n){},210:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n.n(c),r=n(29),o=n.n(r),s=(n(82),n(8)),j=(n(84),Object(s.b)({key:"View",default:"outfits"})),l=n(1),u=function(){var t=Object(s.d)(j);return Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)("button",{onClick:function(){return t("newGarment")},children:"Add Garment"})}),Object(l.jsx)("li",{children:Object(l.jsx)("button",{onClick:function(){return t("outfits")},children:"Create Outfit"})}),Object(l.jsx)("li",{children:Object(l.jsx)("button",{onClick:function(){return t("collection")},children:"My clothes"})})]})})},a=n(2),b=n.p+"static/media/chemisePapi.1cbdb00b.jpeg",O=n(75),d=n.n(O),f=(n(208),function(t){var e=t.color;return Object(l.jsx)("div",{style:{width:"100%",height:200,backgroundColor:e}})}),h=function(t){var e=t.palette;return Object(l.jsxs)("form",{className:"ColorPicker",children:[Object.entries(e).map((function(t){var e=Object(a.a)(t,2),n=e[0],c=e[1];return void 0!==c&&Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"checkbox"}),n,Object(l.jsx)(f,{color:c.getHex()})]})})),Object(l.jsx)("button",{type:"submit",children:"Confirm"})]})},x=function(){var t=b,e=Object(c.useState)(),n=Object(a.a)(e,2),i=n[0],r=n[1];return Object(c.useEffect)((function(){d.a.from(t).getPalette().then((function(t){return r(t)}))}),[t]),Object(c.useEffect)((function(){console.log(i)}),[i]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("img",{src:t}),void 0!==i&&Object(l.jsx)(h,{palette:i})]})},m=n(76),p=n.n(m),v=n(3),g=n(77),k=n.n(g),y=function(t){var e=t.name,n=t.options;return Object(l.jsx)("span",{dangerouslySetInnerHTML:{__html:k.a.icons[e].toSvg(Object(v.a)({style:"display: block"},n))}})},C=(n(209),function(t){var e=t.className,n=Object(c.useRef)(null);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",{type:"file",accept:"image/*",ref:n,style:{display:"none"}}),Object(l.jsx)("button",{onClick:function(){var t;return null===(t=n.current)||void 0===t?void 0:t.click()},className:p()("NewGarmentButton",e),children:Object(l.jsx)(y,{name:"plus",options:{width:"2.5rem",height:"2.5rem"}})})]})});var w=function(){var t=Object(s.c)(j);return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(C,{}),Object(l.jsx)(u,{}),"newGarment"===t&&Object(l.jsx)(x,{}),"outfits"===t&&"Outfits","collection"===t&&"Collection"]})},F=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,211)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),c(t),i(t),r(t),o(t)}))};o.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(s.a,{children:Object(l.jsx)(w,{})})}),document.getElementById("root")),F()},82:function(t,e,n){},84:function(t,e,n){}},[[210,1,2]]]);
//# sourceMappingURL=main.8c53e13e.chunk.js.map