(this["webpackJsonpcurrency-converter-react"]=this["webpackJsonpcurrency-converter-react"]||[]).push([[0],{23:function(n,e,t){"use strict";t.r(e);var r=t(1),c=t(0),a=t.n(c),o=t(10),i=t.n(o),u=t(2),s=t(3);function l(){var n=Object(u.a)(["\n    html {\n    box-sizing: border-box;\n    }\n\n    *, ::after, ::before {\n    box-sizing: inherit;\n    }\n\n    body {\n    font-family: 'Nerko One', cursive;\n    background-color: #eee;\n    }\n"]);return l=function(){return n},n}var b=Object(s.a)(l()),d=t(4);function j(){var n=Object(u.a)(["\n    background-color: hsl(66, 100%, 65%);\n    border: 8px solid black;\n    border-radius: 5px;\n    color: hsl(120, 93%, 40%);\n    text-align: center;\n    font-size: 40px;\n    width: 70%;\n    margin: 0 auto;\n    padding: 40px;\n"]);return j=function(){return n},n}var f=s.b.p(j()),p=function(n){var e=n.result;return e&&Object(r.jsxs)(f,{children:["Otrzymujesz ","".concat(e.targetAmount.toFixed(2)," ").concat(e.currency),". Nie wydaj na g\u0142upoty :)"]})},h=t.p+"static/media/money.824ba21a.jpg";function x(){var n=Object(u.a)(["\n    text-transform: uppercase;\n    letter-spacing: 5px;\n    color: white;\n    font-size: 100px;\n    margin: 0;\n    padding: 15px;\n    text-align: center;\n    font-weight: normal;\n"]);return x=function(){return n},n}function g(){var n=Object(u.a)(["\n    height: 100vh;\n    width: 100%;\n    background-image: url(",');\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-origin: border-box;\n    overflow: hidden;\n    position: relative;\n    z-index: 0;\n\n    &::after {\n        content: "";\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        background-color: rgba(0, 0, 0, 0.5);\n        z-index: -1;\n    }    \n']);return g=function(){return n},n}var v=s.b.main(g(),h),O=s.b.h1(x()),m=function(n){var e=n.children;return Object(r.jsxs)(v,{children:[Object(r.jsx)(O,{children:"Kalkulator walut \ud83d\udcb8"}),e]})},k=t(8),w=t.n(k),z=t(14);function y(){var n=Object(u.a)(["\n    text-align: right;\n    font-family: monospace;\n    color: #777;\n"]);return y=function(){return n},n}var F=s.b.div(y()),S=function(n){return n.toLocaleString(void 0,{weekday:"long",hour:"2-digit",minute:"2-digit",second:"2-digit",day:"numeric",month:"long"})},D=function(){var n=function(){var n=Object(c.useState)(new Date),e=Object(d.a)(n,2),t=e[0],r=e[1];return Object(c.useEffect)((function(){var n=setInterval((function(){r(new Date)}),1e3);return function(){clearInterval(n)}}),[]),t}();return Object(r.jsxs)(F,{children:["Dzisiaj jest"," ",S(n)]})};function P(){var n=Object(u.a)(["\n    margin: auto;\n    padding: 0;\n    text-align: center;\n    color: hsl(120, 93%, 40%);\n    font-size: 16px;\n"]);return P=function(){return n},n}function B(){var n=Object(u.a)(["\n    margin: auto;\n    padding: 20px;\n    text-align: center;\n    color: crimson;\n"]);return B=function(){return n},n}function C(){var n=Object(u.a)(["\n    margin: auto;\n    padding: 20px;\n    text-align: center;\n    color: hsl(120, 93%, 40%);\n"]);return C=function(){return n},n}function E(){var n=Object(u.a)(["\n    width: 100%;\n    padding: 8px;\n    text-transform: uppercase;\n    border: 4px solid hsl(120, 93%, 40%);\n    color: hsl(120, 93%, 40%);\n    background-color: rgb(22, 61, 61);\n    font-size: 50px;\n    cursor: pointer;\n\n    &:hover {\n        background-color: hsl(180, 47%, 20%);\n        color: hsl(120, 93%, 45%);\n    }\n"]);return E=function(){return n},n}function N(){var n=Object(u.a)(['\n    color: hsl(120, 93%, 40%);\n    width: 50%;\n    float: right;\n    border: 2px solid hsl(120, 93%, 40%);\n    border-radius: 5px;\n\n    &::after {\n        content: "";\n        clear: both;\n    }\n']);return N=function(){return n},n}function A(){var n=Object(u.a)(["\n    font-size: 26px;\n    color: hsl(120, 93%, 40%);\n"]);return A=function(){return n},n}function I(){var n=Object(u.a)(["\n    font-size: 32px;\n    color: hsl(120, 93%, 40%);\n    padding: 5px;\n    border: 2px solid hsl(120, 93%, 40%);\n    border-radius: 5px;\n"]);return I=function(){return n},n}function L(){var n=Object(u.a)(["\n    font-size: 20px;\n    background-color: hsl(66, 100%, 65%);\n    border: 2px solid hsl(120, 93%, 40%);\n    border-radius: 5px;\n"]);return L=function(){return n},n}function T(){var n=Object(u.a)(["\n    margin: 0 auto;\n    padding: 15px;\n    width: 50%;\n    background-color: #F8FFB3;\n    border: 8px solid black;\n    border-radius: 5px;\n"]);return T=function(){return n},n}var _=s.b.form(T()),J=s.b.fieldset(L()),K=s.b.legend(I()),R=s.b.label(A()),q=s.b.input(N()),G=s.b.button(E()),M=s.b.div(C()),U=s.b.div(B()),W=s.b.div(P()),H=function(n){var e=n.calculateResult,t=n.ratesData,a=Object(c.useState)(""),o=Object(d.a)(a,2),i=o[0],u=o[1],s=Object(c.useState)("GBP"),l=Object(d.a)(s,2),b=l[0],j=l[1];return Object(r.jsxs)(_,{onSubmit:function(n){n.preventDefault(),e(b,i)},children:[Object(r.jsx)(D,{}),Object(r.jsxs)(J,{children:[Object(r.jsx)(K,{children:"Uzupe\u0142nij dane:"}),"loading"===t.state?Object(r.jsx)(M,{children:"Poczekaj chwilk\u0119... \u0141aduj\u0119 dane z Banku..."}):"error"===t.state?Object(r.jsx)(U,{children:"Sprawd\u017a po\u0142\u0105czenie z internetem lub spr\xf3buj ponownie."}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("p",{children:[Object(r.jsx)(R,{htmlFor:"amount",className:"form__label",children:"Podaj kwot\u0119 w z\u0142ot\xf3wkach*:"}),Object(r.jsx)(q,{value:i,onChange:function(n){var e=n.target;return u(e.value)},type:"number",id:"amount",name:"amount",required:!0})]}),Object(r.jsxs)("p",{children:[Object(r.jsx)(R,{htmlFor:"currency",className:"form__label",children:"Wybierz walut\u0119:"}),Object(r.jsx)(q,{as:"select",value:b,onChange:function(n){var e=n.target;return j(e.value)},name:"currency",id:"currency",children:Object.keys(t.rates).map((function(n){return Object(r.jsx)("option",{value:n,children:n},n)}))})]}),Object(r.jsx)("p",{children:Object(r.jsx)(G,{children:"Przelicz"})}),Object(r.jsxs)(W,{children:["Kursy walut pochodz\u0105 z Europejskiego Banku Centralnego.",Object(r.jsx)("br",{}),"Aktualne na dzie\u0144: ",t.date]})]})]})]})};var Q=function(){var n=Object(c.useState)(""),e=Object(d.a)(n,2),t=e[0],a=e[1],o=function(){var n=Object(c.useState)({state:"loading"}),e=Object(d.a)(n,2),t=e[0],r=e[1];return Object(c.useEffect)((function(){setTimeout(function(){var n=Object(z.a)(w.a.mark((function n(){var e,t,c,a;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://api.exchangeratesapi.io/latest?base=PLN");case 3:if((e=n.sent).ok){n.next=6;break}throw new Error(e.statusText);case 6:return n.next=8,e.json();case 8:t=n.sent,c=t.rates,a=t.date,r({state:"success",rates:c,date:a}),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(0),r({state:"error"});case 17:case"end":return n.stop()}}),n,null,[[0,14]])})));return function(){return n.apply(this,arguments)}}(),2e3)}),[]),t}();return Object(r.jsxs)(m,{children:[Object(r.jsx)(H,{calculateResult:function(n,e){var t=o.rates[n];a({sourceAmount:+e,targetAmount:e*t,currency:n})},ratesData:o}),Object(r.jsx)(p,{result:t})]})},V=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,24)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,o=e.getTTFB;t(n),r(n),c(n),a(n),o(n)}))};i.a.render(Object(r.jsxs)(a.a.StrictMode,{children:[Object(r.jsx)(b,{}),Object(r.jsx)(Q,{})]}),document.getElementById("root")),V()}},[[23,1,2]]]);
//# sourceMappingURL=main.1611a193.chunk.js.map