(this.webpackJsonpswipe=this.webpackJsonpswipe||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(6),i=c.n(s),r=(c(13),c(2)),u=(c(14),c(8)),o=c(7),l=(c(15),c(16),c(0));var j=function(e){var t=e.text;return Object(l.jsx)("div",{className:"slide-right__wrapper",children:Object(l.jsx)("span",{className:"slide-right__text",children:t})})};var f=function(e){Object(o.a)(e);var t=Object(n.useState)([]),c=Object(r.a)(t,2),a=c[0],s=c[1],i=Object(n.useState)(""),f=Object(r.a)(i,2),b=f[0],d=f[1];return Object(l.jsxs)("div",{className:"slide-left",children:[Object(l.jsxs)("div",{className:"slide-left__header",children:[Object(l.jsx)("textarea",{className:"slide-left__input-text",value:b,onChange:function(e){d(e.target.value)}}),Object(l.jsx)("button",{className:"slide-left__btn",onClick:function(){var e=[].concat(Object(u.a)(a),[b]);s(e)},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]}),Object(l.jsx)("div",{className:"slide-left__main",children:a.map((function(e,t){return Object(l.jsx)(j,{text:e},t)}))})]})};c(18);var b=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],a=t[1];return setInterval((function(){var e=new Date,t=e.getMinutes(),c=e.getSeconds();t=t<10?"0"+t:t,c=c<10?"0"+c:c;var n="".concat(e.getHours(),":").concat(t,":").concat(c);a(n)}),300),Object(l.jsx)("div",{className:"slide-right",children:c})};var d=function(){var e=Object(n.useState)(0),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),i=Object(r.a)(s,2),u=i[0],o=i[1],j=Object(n.useState)(0),d=Object(r.a)(j,2),h=d[0],O=d[1],v=Object(n.useRef)(null);function g(e){v.current.style.left=e+"px"}return Object(l.jsxs)("div",{className:"page ".concat(u),ref:v,onTouchMove:function(e){var t=c-e.touches[0].pageX,n=t>0?"right":"left";g(h&&"right"===n||!h&&"left"===n?h:h-t)},onTouchStart:function(e){o(""),a(e.touches[0].pageX)},onTouchEnd:function(e){var t=c-e.changedTouches[0].pageX,n=t>0?"right":"left";if(!("right"===n&&h||"left"===n&&!h)){var s=Math.abs(t)>v.current.offsetWidth/6,i=v.current.offsetWidth/2;h&&s||!s&&!h?(g(0),O(0)):(g(-i),O(-i)),o("page_move"),a(0)}},children:[Object(l.jsx)(f,{}),Object(l.jsx)(b,{})]})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,20)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),h()}],[[19,1,2]]]);
//# sourceMappingURL=main.cf2b53ae.chunk.js.map