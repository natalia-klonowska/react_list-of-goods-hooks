(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c,s=n(6),o=n.n(s),i=n(4),r=n(7),a=n(1),l=(n(12),n(13),n(0)),u=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];function b(t,e){var n=e.sortType,s=e.isReversed,o=Object(r.a)(t);return n===c.ALPHABET&&o.sort(),n===c.LENGTH&&o.sort((function(t,e){return t.length-e.length})),s&&o.reverse(),console.log(n,s),o}!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(c||(c={}));var j=function(){var t=Object(a.useState)(u),e=Object(i.a)(t,1)[0],n=Object(a.useState)(!1),s=Object(i.a)(n,2),o=s[0],r=s[1],j=Object(a.useState)(c.NONE),h=Object(i.a)(j,2),d=h[0],O=h[1];return Object(l.jsxs)("div",{className:"section content",children:[Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{type:"button",className:"button is-info ".concat(d!==c.ALPHABET&&"is-light"," "),onClick:function(){O(c.ALPHABET)},children:"Sort alphabetically"}),Object(l.jsx)("button",{type:"button",className:"button is-success ".concat(d!==c.LENGTH&&"is-light"," "),onClick:function(){O(c.LENGTH)},children:"Sort by length"}),Object(l.jsx)("button",{type:"button",className:"button is-warning ".concat(!o&&"is-light"," "),onClick:function(){r((function(t){return!t}))},children:"Reverse"}),(d!==c.NONE||o)&&Object(l.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){r(!1),O(c.NONE)},children:"Reset"})]}),Object(l.jsx)("ul",{children:Object(l.jsx)("ul",{children:b(e,{sortType:d,isReversed:o}).map((function(t){return Object(l.jsx)("li",{"data-cy":"Good",children:t})}))})})]})};o.a.render(Object(l.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.0fd2d995.chunk.js.map