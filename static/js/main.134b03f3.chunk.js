(this.webpackJsonpcolormatch=this.webpackJsonpcolormatch||[]).push([[0],{208:function(t,e,n){},209:function(t,e,n){},210:function(t,e,n){},211:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),r=n(29),o=n.n(r),s=(n(82),n(2)),a=n(8),l=(n(84),Object(a.b)({key:"View",default:"outfits"})),j=n(0),u=function(){var t=Object(a.d)(l);return Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("button",{onClick:function(){return t("newGarment")},children:"Add Garment"})}),Object(j.jsx)("li",{children:Object(j.jsx)("button",{onClick:function(){return t("outfits")},children:"Create Outfit"})}),Object(j.jsx)("li",{children:Object(j.jsx)("button",{onClick:function(){return t("collection")},children:"My clothes"})})]})})},b=n(75),d=n.n(b),f=(n(208),function(t){var e=t.color;return Object(j.jsx)("div",{style:{width:"100%",height:200,backgroundColor:e}})}),O=function(t){var e=t.palette;return Object(j.jsxs)("form",{className:"ColorPicker",children:[Object.entries(e).map((function(t){var e=Object(s.a)(t,2),n=e[0],c=e[1];return void 0!==c&&Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"checkbox"}),n,Object(j.jsx)(f,{color:c.getHex()})]})})),Object(j.jsx)("button",{type:"submit",children:"Confirm"})]})},h=(n(209),function(t){var e=t.imageData,n=Object(c.useState)(),i=Object(s.a)(n,2),r=i[0],o=i[1];return Object(c.useEffect)((function(){d.a.from(e).getPalette().then((function(t){return o(t)}))}),[e]),Object(c.useEffect)((function(){console.log(r)}),[r]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("img",{className:"NewGarment__image",src:e,alt:"garment"}),void 0!==r&&Object(j.jsx)(O,{palette:r})]})}),m=n(76),x=n.n(m),g=n(3),v=n(77),p=n.n(v),y=function(t){var e=t.name,n=t.options;return Object(j.jsx)("span",{dangerouslySetInnerHTML:{__html:p.a.icons[e].toSvg(Object(g.a)({style:"display: block"},n))}})},C=(n(210),function(t){var e=t.className,n=t.onDone,i=Object(c.useRef)(null);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",{type:"file",accept:"image/*",ref:i,style:{display:"none"},onChange:function(t){var e=t.target.files;if(null!==e){var c=new FileReader;c.onload=function(t){var e,c=null===(e=t.target)||void 0===e?void 0:e.result;"string"===typeof c&&n(c)},c.readAsDataURL(e[0])}}}),Object(j.jsx)("button",{onClick:function(){var t;return null===(t=i.current)||void 0===t?void 0:t.click()},className:x()("NewGarmentButton",e),children:Object(j.jsx)(y,{name:"plus",options:{width:"2.5rem",height:"2.5rem"}})})]})});var k=function(){var t=Object(a.c)(l),e=Object(c.useState)(),n=Object(s.a)(e,2),i=n[0],r=n[1];return Object(j.jsx)("div",{className:"App",children:void 0===i?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(C,{onDone:r}),Object(j.jsx)(u,{}),"outfits"===t&&"Outfits","collection"===t&&"Collection"]}):Object(j.jsx)(h,{imageData:i})})},w=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,212)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),c(t),i(t),r(t),o(t)}))};o.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(a.a,{children:Object(j.jsx)(k,{})})}),document.getElementById("root")),w()},82:function(t,e,n){},84:function(t,e,n){}},[[211,1,2]]]);
//# sourceMappingURL=main.134b03f3.chunk.js.map