(this["webpackJsonpcurrency-converter-react"]=this["webpackJsonpcurrency-converter-react"]||[]).push([[0],{46:function(n,e,t){"use strict";t.r(e);var r=t(1),c=t(0),o=t.n(c),a=t(19),i=t.n(a),u=t(2),s=t(3);function l(){var n=Object(u.a)(["\n    html {\n    box-sizing: border-box;\n    }\n\n    *, ::after, ::before {\n    box-sizing: inherit;\n    }\n\n    body {\n    font-family: 'Nerko One', cursive;\n    background-color: #eee;\n    }\n"]);return l=function(){return n},n}var b=Object(s.a)(l()),d=t(5);function j(){var n=Object(u.a)(["\n    background-color: hsl(66, 100%, 65%);\n    border: 8px solid black;\n    border-radius: 5px;\n    color: hsl(120, 93%, 40%);\n    text-align: center;\n    font-size: 40px;\n    width: 70%;\n    margin: 0 auto;\n    padding: 40px;\n"]);return j=function(){return n},n}var f=s.b.p(j()),p=function(n){var e=n.result;return e&&Object(r.jsxs)(f,{children:["Otrzymujesz ","".concat(e.value.toFixed(2))," z\u0142otych. Nie wydaj na g\u0142upoty :)"]})},h=t.p+"static/media/money.824ba21a.jpg";function x(){var n=Object(u.a)(["\n    text-transform: uppercase;\n    letter-spacing: 5px;\n    color: white;\n    font-size: 100px;\n    margin: 0;\n    padding: 15px;\n    text-align: center;\n    font-weight: normal;\n"]);return x=function(){return n},n}function g(){var n=Object(u.a)(["\n    height: 100vh;\n    width: 100%;\n    background-image: url(",');\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-origin: border-box;\n    overflow: hidden;\n    position: relative;\n    z-index: 0;\n\n    &::after {\n        content: "";\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        background-color: rgba(0, 0, 0, 0.5);\n        z-index: -1;\n    }    \n']);return g=function(){return n},n}var O=s.b.main(g(),h),v=s.b.h1(x()),m=function(n){var e=n.children;return Object(r.jsxs)(O,{children:[Object(r.jsx)(v,{children:"Kalkulator walut \ud83d\udcb8"}),e]})},k=t(23),w=t.n(k);function y(){var n=Object(u.a)(["\n    text-align: right;\n    font-family: monospace;\n    color: #777;\n"]);return y=function(){return n},n}var z=s.b.div(y()),F=function(n){return n.toLocaleString(void 0,{weekday:"long",hour:"2-digit",minute:"2-digit",second:"2-digit",day:"numeric",month:"long"})},S=function(){var n=function(){var n=Object(c.useState)(new Date),e=Object(d.a)(n,2),t=e[0],r=e[1];return Object(c.useEffect)((function(){var n=setInterval((function(){r(new Date)}),1e3);return function(){clearInterval(n)}}),[]),t}();return Object(r.jsxs)(z,{children:["Dzisiaj jest"," ",F(n)]})};function N(){var n=Object(u.a)(["\n    margin: auto;\n    padding: 20px;\n    text-align: center;\n"]);return N=function(){return n},n}function D(){var n=Object(u.a)(["\n    width: 100%;\n    padding: 8px;\n    text-transform: uppercase;\n    border: 4px solid hsl(120, 93%, 40%);\n    color: hsl(120, 93%, 40%);\n    background-color: rgb(22, 61, 61);\n    font-size: 50px;\n    cursor: pointer;\n\n    &:hover {\n        background-color: hsl(180, 47%, 20%);\n        color: hsl(120, 93%, 45%);\n    }\n"]);return D=function(){return n},n}function P(){var n=Object(u.a)(['\n    color: hsl(120, 93%, 40%);\n    width: 50%;\n    float: right;\n    border: 2px solid hsl(120, 93%, 40%);\n    border-radius: 5px;\n\n    &::after {\n        content: "";\n        clear: both;\n    }\n']);return P=function(){return n},n}function C(){var n=Object(u.a)(["\n    font-size: 26px;\n    color: hsl(120, 93%, 40%);\n"]);return C=function(){return n},n}function L(){var n=Object(u.a)(["\n    font-size: 32px;\n    color: hsl(120, 93%, 40%);\n    padding: 5px;\n    border: 2px solid hsl(120, 93%, 40%);\n    border-radius: 5px;\n"]);return L=function(){return n},n}function _(){var n=Object(u.a)(["\n    font-size: 20px;\n    background-color: hsl(66, 100%, 65%);\n    border: 2px solid hsl(120, 93%, 40%);\n    border-radius: 5px;\n"]);return _=function(){return n},n}function B(){var n=Object(u.a)(["\n    margin: 0 auto;\n    padding: 15px;\n    width: 50%;\n    background-color: #F8FFB3;\n    border: 8px solid black;\n    border-radius: 5px;\n"]);return B=function(){return n},n}var E=s.b.form(B()),I=s.b.fieldset(_()),T=s.b.legend(L()),J=s.b.label(C()),R=s.b.input(P()),W=s.b.button(D()),q=s.b.div(N()),K=function(n){var e=n.calculateResult,t=n.ratesData,o=Object(c.useState)(""),a=Object(d.a)(o,2),i=a[0],u=a[1],s=Object(c.useState)("PLN"),l=Object(d.a)(s,2),b=l[0],j=l[1],f=t&&Object.keys(t.currencies).map((function(n){return Object(r.jsx)("option",{children:n},n)}));return Object(r.jsxs)(E,{onSubmit:function(n){n.preventDefault(),e(+i,b)},children:[Object(r.jsx)(S,{}),Object(r.jsxs)(I,{children:[Object(r.jsx)(T,{children:"Uzupe\u0142nij dane:"}),t?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("p",{children:[Object(r.jsx)(J,{htmlFor:"amount",className:"form__label",children:"Podaj kwot\u0119 w *:"}),Object(r.jsx)(R,{value:i,onChange:function(n){var e=n.target;return u(e.value)},className:"form__input",type:"number",id:"amount",name:"amount",required:!0})]}),Object(r.jsxs)("p",{children:[Object(r.jsx)(J,{htmlFor:"currency",className:"form__label",children:"Wybierz walut\u0119:"}),Object(r.jsx)(R,{as:"select",value:b,onChange:function(n){var e=n.target;return j(e.value)},name:"currency",id:"currency",children:f})]}),Object(r.jsx)("p",{children:Object(r.jsx)(W,{children:"Przelicz na PLN-y!!!"})})]}):Object(r.jsx)(q,{children:"error"===t?"Wyst\u0105pi\u0142 b\u0142\u0105d. Sprawd\u017a po\u0142\u0105czenie internetowe,\n              a je\u015bli to nie pomo\u017ce - spr\xf3buj ponownie p\xf3\u017aniej.":"Trwa pobieranie danych z Europejskiego Banku Centralnego."})]})]})};var M=function(){var n=Object(c.useState)(""),e=Object(d.a)(n,2),t=e[0],o=e[1],a=function(){var n=Object(c.useState)(),e=Object(d.a)(n,2),t=e[0],r=e[1];return Object(c.useEffect)((function(){w.a.get("https://api.exchangeratesapi.io/latest?base=PLN").then((function(n){return r({date:n.data.date,currencies:n.data.rates})})).catch((function(){return r("error")}))}),[]),t}();return Object(r.jsxs)(m,{children:[Object(r.jsx)(K,{calculateResult:function(n,e){var t=n/a.currencies[e];o({value:t})},ratesData:a}),Object(r.jsx)(p,{result:t})]})},U=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,47)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,o=e.getLCP,a=e.getTTFB;t(n),r(n),c(n),o(n),a(n)}))};i.a.render(Object(r.jsxs)(o.a.StrictMode,{children:[Object(r.jsx)(b,{}),Object(r.jsx)(M,{})]}),document.getElementById("root")),U()}},[[46,1,2]]]);
//# sourceMappingURL=main.e157c116.chunk.js.map