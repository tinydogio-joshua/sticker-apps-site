(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3678)}])},8418:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,i=!1,c=void 0;try{for(var a,o=e[Symbol.iterator]();!(r=(a=o.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(f){i=!0,c=f}finally{try{r||null==o.return||o.return()}finally{if(i)throw c}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var i,c=(i=t(7294))&&i.__esModule?i:{default:i},a=t(6273),o=t(387),f=t(7190);var l={};function s(e,n,t,r){if(e&&a.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(i?"%"+i:"")]=!0}}var d=function(e){var n,t=!1!==e.prefetch,i=o.useRouter(),d=c.default.useMemo((function(){var n=r(a.resolveHref(i,e.href,!0),2),t=n[0],c=n[1];return{href:t,as:e.as?a.resolveHref(i,e.as):c||t}}),[i,e.href,e.as]),u=d.href,x=d.as,b=e.children,p=e.replace,m=e.shallow,y=e.scroll,h=e.locale;"string"===typeof b&&(b=c.default.createElement("a",null,b));var g=(n=c.default.Children.only(b))&&"object"===typeof n&&n.ref,j=r(f.useIntersection({rootMargin:"200px"}),2),v=j[0],w=j[1],k=c.default.useCallback((function(e){v(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,v]);c.default.useEffect((function(){var e=w&&t&&a.isLocalURL(u),n="undefined"!==typeof h?h:i&&i.locale,r=l[u+"%"+x+(n?"%"+n:"")];e&&!r&&s(i,u,x,{locale:n})}),[x,u,w,h,t,i]);var M={ref:k,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,i,c,o,f){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(t))&&(e.preventDefault(),null==o&&r.indexOf("#")>=0&&(o=!1),n[i?"replace":"push"](t,r,{shallow:c,locale:f,scroll:o}))}(e,i,u,x,p,m,y,h)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),a.isLocalURL(u)&&s(i,u,x,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var E="undefined"!==typeof h?h:i&&i.locale,_=i&&i.isLocaleDomain&&a.getDomainLocale(x,E,i&&i.locales,i&&i.domainLocales);M.href=_||a.addBasePath(a.addLocale(x,E,i&&i.defaultLocale))}return c.default.cloneElement(n,M)};n.default=d},7190:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,i=!1,c=void 0;try{for(var a,o=e[Symbol.iterator]();!(r=(a=o.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(f){i=!0,c=f}finally{try{r||null==o.return||o.return()}finally{if(i)throw c}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,f=i.useRef(),l=r(i.useState(!1),2),s=l[0],d=l[1],u=i.useCallback((function(e){f.current&&(f.current(),f.current=void 0),t||s||e&&e.tagName&&(f.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=o.get(n);if(t)return t;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return o.set(n,t={id:n,observer:i,elements:r}),t}(t),i=r.id,c=r.observer,a=r.elements;return a.set(e,n),c.observe(e),function(){a.delete(e),c.unobserve(e),0===a.size&&(c.disconnect(),o.delete(i))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,s]);return i.useEffect((function(){if(!a&&!s){var e=c.requestIdleCallback((function(){return d(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[s]),[u,s]};var i=t(7294),c=t(9311),a="undefined"!==typeof IntersectionObserver;var o=new Map},3678:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return o}});var r=t(5893),i=t(5988),c=t(9008),a=t(1664);function o(){return(0,r.jsxs)("div",{className:"jsx-f8d1f2cbda6c0193 container",children:[(0,r.jsxs)(c.default,{children:[(0,r.jsx)("title",{className:"jsx-f8d1f2cbda6c0193",children:"My Sticker Apps"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico",className:"jsx-f8d1f2cbda6c0193"})]}),(0,r.jsxs)("main",{className:"jsx-f8d1f2cbda6c0193",children:[(0,r.jsx)("h1",{className:"jsx-f8d1f2cbda6c0193 title",children:"Welcome to My Sticker Apps"}),(0,r.jsxs)("p",{className:"jsx-f8d1f2cbda6c0193 description",children:["We currently don't have much to show here expect our ",(0,r.jsx)(a.default,{href:"/privacy-policy",children:(0,r.jsx)("a",{className:"jsx-f8d1f2cbda6c0193",children:"privacy policy"})}),"."]})]}),(0,r.jsx)("footer",{className:"jsx-f8d1f2cbda6c0193",children:"Copyright Yi-Fang Yang. All Rights Reserved."}),(0,r.jsx)(i.default,{id:"fea10412317d2fa3",children:".container.jsx-f8d1f2cbda6c0193 {min-height:100vh;\npadding:0 0.5rem;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-flex-direction:column;\n-ms-flex-direction:column;\nflex-direction:column;\n-webkit-justify-content:center;\njustify-content:center;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center}\nmain.jsx-f8d1f2cbda6c0193 {padding:5rem 0;\n-webkit-flex:1;\n-ms-flex:1;\nflex:1;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-flex-direction:column;\n-ms-flex-direction:column;\nflex-direction:column;\n-webkit-justify-content:center;\njustify-content:center;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center}\nfooter.jsx-f8d1f2cbda6c0193 {width:100%;\nheight:100px;\nborder-top:1px solid #eaeaea;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-justify-content:center;\njustify-content:center;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center}\nfooter.jsx-f8d1f2cbda6c0193 img.jsx-f8d1f2cbda6c0193 {margin-left:0.5rem}\nfooter.jsx-f8d1f2cbda6c0193 a.jsx-f8d1f2cbda6c0193 {display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-justify-content:center;\njustify-content:center;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center}\na.jsx-f8d1f2cbda6c0193 {color:inherit;\n-webkit-text-decoration:none;\ntext-decoration:none}\n.title.jsx-f8d1f2cbda6c0193 a.jsx-f8d1f2cbda6c0193 {color:#0070f3;\n-webkit-text-decoration:none;\ntext-decoration:none}\n.title.jsx-f8d1f2cbda6c0193 a.jsx-f8d1f2cbda6c0193:hover, .title.jsx-f8d1f2cbda6c0193 a.jsx-f8d1f2cbda6c0193:focus, .title.jsx-f8d1f2cbda6c0193 a.jsx-f8d1f2cbda6c0193:active {text-decoration:underline}\n.title.jsx-f8d1f2cbda6c0193 {margin:0;\nline-height:1.15;\nfont-size:4rem}\n.title.jsx-f8d1f2cbda6c0193, .description.jsx-f8d1f2cbda6c0193 {text-align:center}\n.description.jsx-f8d1f2cbda6c0193 {line-height:1.5;\nfont-size:1.5rem}\n.description.jsx-f8d1f2cbda6c0193 a.jsx-f8d1f2cbda6c0193 {color:#7127d9}\ncode.jsx-f8d1f2cbda6c0193 {background:#fafafa;\nborder-radius:5px;\npadding:0.75rem;\nfont-size:1.1rem;\nfont-family:Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace}\n.grid.jsx-f8d1f2cbda6c0193 {display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\n-webkit-justify-content:center;\njustify-content:center;\nflex-wrap:wrap;\nmax-width:800px;\nmargin-top:3rem}\n.card.jsx-f8d1f2cbda6c0193 {margin:1rem;\n-webkit-flex-basis:45%;\n-ms-flex-preferred-size:45%;\nflex-basis:45%;\npadding:1.5rem;\ntext-align:left;\ncolor:inherit;\n-webkit-text-decoration:none;\ntext-decoration:none;\nborder:1px solid #eaeaea;\nborder-radius:10px;\n-webkit-transition:color 0.15s ease, border-color 0.15s ease;\ntransition:color 0.15s ease, border-color 0.15s ease}\n.card.jsx-f8d1f2cbda6c0193:hover, .card.jsx-f8d1f2cbda6c0193:focus, .card.jsx-f8d1f2cbda6c0193:active {color:#0070f3;\nborder-color:#0070f3}\n.card.jsx-f8d1f2cbda6c0193 h3.jsx-f8d1f2cbda6c0193 {margin:0 0 1rem 0;\nfont-size:1.5rem}\n.card.jsx-f8d1f2cbda6c0193 p.jsx-f8d1f2cbda6c0193 {margin:0;\nfont-size:1.25rem;\nline-height:1.5}\n.logo.jsx-f8d1f2cbda6c0193 {height:1em}\n@media (max-width:600px) {.grid.jsx-f8d1f2cbda6c0193 {width:100%;\n-webkit-flex-direction:column;\n-ms-flex-direction:column;\nflex-direction:column}}"}),(0,r.jsx)(i.default,{id:"2323726f93dd16ea",children:"html, body {padding:0;\nmargin:0;\nfont-family:-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif}\n* {box-sizing:border-box}"})]})}},9008:function(e,n,t){e.exports=t(5443)},1664:function(e,n,t){e.exports=t(8418)},7884:function(e,n,t){"use strict";n.default=f;var r,i=(r=t(7294))&&r.__esModule?r:{default:r},c=t(8122),a=t(9035);var o=i.default.useInsertionEffect||i.default.useLayoutEffect;function f(e){var n=(0,c.useStyleRegistry)();return n?"undefined"===typeof window?(n.add(e),null):(o((function(){return n.add(e),function(){n.remove(e)}}),[e.id,String(e.dynamic)]),null):null}f.dynamic=function(e){return e.map((function(e){var n=e[0],t=e[1];return(0,a.computeId)(n,t)})).join(" ")}},5988:function(e,n,t){e.exports=t(7884)}},function(e){e.O(0,[774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);