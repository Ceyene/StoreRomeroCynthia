(this["webpackJsonpstore-romero-cynthia"]=this["webpackJsonpstore-romero-cynthia"]||[]).push([[0],{34:function(n,e,t){"use strict";t.r(e);var r=t(0),i=t(1),c=t.n(i),a=t(12),o=t.n(a),s=t(5),u=t.n(s),d=t(4),l=t(7),f=t(6),b={idPr:0,namePr:"price",valuePr:"Prices",optionsPr:["Prices","Lowest Price","Highest Price"]},j={idCat:1,nameCat:"category",valueCat:"Categories",optionsCat:["Categories","Phones","Gaming","Laptops","Cameras","Audio","Monitors & TV","Drones","Phone Accesories","Smart Home","PC Accesories","Tablets & E-readers"]},p={"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmQ5YWJhYjI2ZjdkMjAwMjA0MTE0Y2QiLCJpYXQiOjE2MDgxMDA3Nzl9.bjQRXSEcQuF_zFF_HS0NuNT0YHRE-UDAxlGe5q9EZdU"},h=function(){var n=Object(l.a)(u.a.mark((function n(e,t){var r,i;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(e,{headers:t});case 2:return r=n.sent,n.next=5,r.json();case 5:return i=n.sent,n.abrupt("return",i);case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),m=function(){var n=Object(l.a)(u.a.mark((function n(e){var t,r,i,c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=JSON.stringify({amount:e}),r={method:"POST",headers:p,body:t,redirect:"follow"},n.prev=2,n.next=5,fetch("https://coding-challenge-api.aerolab.co/user/points",r);case 5:return i=n.sent,n.next=8,i.json();case 8:return c=n.sent,n.abrupt("return",c);case 12:return n.prev=12,n.t0=n.catch(2),n.abrupt("return",n.t0);case 15:case"end":return n.stop()}}),n,null,[[2,12]])})));return function(e){return n.apply(this,arguments)}}(),g=function(){var n=Object(l.a)(u.a.mark((function n(e){var t,r,i,c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=JSON.stringify({productId:e}),r={method:"POST",headers:p,body:t,redirect:"follow"},n.prev=2,n.next=5,fetch("https://coding-challenge-api.aerolab.co/redeem",r);case 5:return i=n.sent,n.next=8,i.json();case 8:return c=n.sent,n.abrupt("return",c);case 12:return n.prev=12,n.t0=n.catch(2),n.abrupt("return",n.t0);case 15:case"end":return n.stop()}}),n,null,[[2,12]])})));return function(e){return n.apply(this,arguments)}}(),O=c.a.createContext();function x(n){var e=n.children,t=Object(i.useState)({loading:!0,error:null,data:void 0}),c=Object(f.a)(t,2),a=c[0],o=c[1],s=Object(i.useState)({loading:!0,error:null,data:void 0}),b=Object(f.a)(s,2),j=b[0],m=b[1];Object(i.useEffect)((function(){g()}),[]);var g=function(){var n=Object(l.a)(u.a.mark((function n(){var e;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o(Object(d.a)(Object(d.a)({},a),{},{loading:!0,error:null})),n.prev=1,n.next=4,h("https://coding-challenge-api.aerolab.co/user/me",p);case 4:e=n.sent,o(Object(d.a)(Object(d.a)({},a),{},{loading:!1,data:e.points})),m(Object(d.a)(Object(d.a)({},j),{},{loading:!1,data:e.name})),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(1),o(Object(d.a)(Object(d.a)({},a),{},{loading:!1,error:n.t0})),m(Object(d.a)(Object(d.a)({},j),{},{loading:!1,error:n.t0}));case 13:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(){return n.apply(this,arguments)}}();return Object(r.jsx)(O.Provider,{value:{userPoints:a,setUserPoints:o,userName:j},children:e})}var v=t.p+"static/media/gift-voucher.cf851b8f.png",w=t(3),y=t(2);function k(){var n=Object(w.a)(["\n  padding: 1rem;\n  border-top: 1px solid #18689d;\n"]);return k=function(){return n},n}function C(){var n=Object(w.a)(["\n  outline: none;\n  margin-left: 1.5rem;\n  border-radius: 50%;\n  border: 1px solid ",";\n  color: ",";\n  background-color: ",';\n  box-shadow: inset 0 -0.2em rgba(0, 0, 0, 0.2);\n  font-family: "Rubik", sans-serif;\n  padding: 0.5rem;\n\n  svg {\n    fill: ',";\n    width: 1.5rem;\n  }\n\n  @media screen and (min-width: 900px) {\n    cursor: pointer;\n\n    &:hover {\n      background-color: #ebe8e8;\n    }\n  }\n"]);return C=function(){return n},n}function P(){var n=Object(w.a)(["\n  display: flex;\n  justify-content: ",";\n  align-items: center;\n"]);return P=function(){return n},n}function F(){var n=Object(w.a)(["\n  font-size: 1.2rem;\n  font-weight: 500;\n  color: #18689d;\n"]);return F=function(){return n},n}function M(){var n=Object(w.a)(["\n  width: ",";\n"]);return M=function(){return n},n}function z(){var n=Object(w.a)(['\n  font-size: 1.3rem;\n  font-family: "JetBrains Mono", monospace;\n  color: ',";\n  margin: ",";\n"]);return z=function(){return n},n}function S(){var n=Object(w.a)(['\n  font-size: 0.9rem;\n  font-family: "JetBrains Mono", monospace;\n  font-weight: 100;\n  color: ',";\n"]);return S=function(){return n},n}function N(){var n=Object(w.a)(['\n  font-size: 1rem;\n  font-family: "Rubik", sans-serif;\n  font-weight: 300;\n  color: ',";\n\n  @media screen and (min-width: 900px) {\n    font-size: 1.1rem;\n    color: ",";\n  }\n"]);return N=function(){return n},n}function E(){var n=Object(w.a)(["\n  font-size: ",';\n  font-family: "Rubik", sans-serif;\n  font-weight: 500;\n  margin: 0 0.5rem;\n\n  @media screen and (min-width: 900px) {\n    font-size: ',";\n  }\n"]);return E=function(){return n},n}function L(){var n=Object(w.a)(['\n  font-size: 2rem;\n  font-family: "Rubik", sans-serif;\n  font-weight: 600;\n  color: #fdfcfb;\n  margin: 2rem;\n\n  @media screen and (min-width: 900px) {\n    font-size: 3rem;\n  }\n']);return L=function(){return n},n}function I(){var n=Object(w.a)(['\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: "JetBrains Mono", monospace;\n}\n\nbody {\n  background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);\n}\n']);return I=function(){return n},n}var G=Object(y.a)(I()),J=y.b.h1(L()),R=y.b.h4(E(),(function(n){return n.Message?"0.75rem":"1rem"}),(function(n){return n.Message?"1rem":"1.5rem"})),D=y.b.h3(N(),(function(n){return n.Gift?"#FFFFFF":"#888888"}),(function(n){return n.Gift&&"#888888"})),U=y.b.h6(S(),(function(n){return n.Modal?"#5F5F5F":"#888888"})),T=y.b.h4(z(),(function(n){return n.Modal?"#FFFFFF":"#18689d"}),(function(n){return n.Notification?"2.5rem 0":"0"})),A=y.b.img(M(),(function(n){return n.Small?"25%":"100%"})),B=y.b.p(F()),Y=y.b.div(P(),(function(n){return n.Centered?"center":"space-between"})),H=y.b.button(C(),(function(n){return n.borderColor}),(function(n){return n.color}),(function(n){return n.bgColor}),(function(n){return n.color})),Q=y.b.div(k()),_=G,X=function(n){var e=n.userInfo,t=e.loading,i=e.error,c=e.data;return!0===t?Object(r.jsx)(R,{Message:!0,children:"Loading..."}):i?Object(r.jsx)(R,{Message:!0,children:i}):Object(r.jsx)(R,{children:c})};function Z(){var n=Object(w.a)(["\n  text-align: center;\n  color: #fdfcfb;\n  background-color: rgba(24, 104, 157, 0.6);\n  border: none;\n  padding: 0.4rem;\n  margin: 0.25rem;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  box-shadow: inset 0 -0.1em rgba(0, 0, 0, 0.2);\n  outline: 0;\n  transition: 0.2s;\n  will-change: transform;\n\n  &:active {\n    transform: scale(0.9);\n  }\n"]);return Z=function(){return n},n}function V(){var n=Object(w.a)(["\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.9);\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  z-index: 4;\n\n  @media screen and (min-width: 900px) {\n    position: relative;\n    display: block;\n    background-color: transparent;\n    width: auto;\n  }\n"]);return V=function(){return n},n}function W(){var n=Object(w.a)(["\n  padding: ",";\n  background-color: ",";\n  border-radius: ",";\n  display: flex;\n  align-items: center;\n  margin-left: ",";\n  margin-right: ",";\n"]);return W=function(){return n},n}function q(){var n=Object(w.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 80vw;\n\n  @media screen and (min-width: 900px) {\n    max-width: 45vw;\n  }\n"]);return q=function(){return n},n}function K(){var n=Object(w.a)(["\n  width: 2.5rem;\n  height: 2.5rem;\n\n  @media screen and (min-width: 900px) {\n    width: 3.5rem;\n    height: 3.5rem;\n  }\n"]);return K=function(){return n},n}function $(){var n=Object(w.a)(["\n  svg {\n    fill: ",";\n    width: 1.5rem;\n    margin-right: 0.5rem;\n  }\n"]);return $=function(){return n},n}function nn(){var n=Object(w.a)(["\n  background-color: #fdfcfb;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  width: 100%;\n  position: relative;\n\n  @media screen and (min-width: 900px) {\n    padding: 1rem 2.5rem;\n  }\n"]);return nn=function(){return n},n}var en=y.b.header(nn()),tn=y.b.span($(),(function(n){return n.color||"white"})),rn=y.b.img(K()),cn=y.b.div(q()),an=y.b.div(W(),(function(n){return n.Gift?"0 0.5rem":"0.5rem"}),(function(n){return n.Gift?"transparent":"rgba(24, 104, 157, 0.3)"}),(function(n){return n.Gift?"0":"1rem"}),(function(n){return n.Gift?"0":"1rem"}),(function(n){return n.Gift?"0":"0.75rem"})),on=y.b.div(V()),sn=y.b.button(Z()),un=t(10),dn=function(){var n=Object(i.useContext)(O),e=n.userPoints,t=n.setUserPoints,c=n.userName,a=function(){var n=Object(l.a)(u.a.mark((function n(r){var i,c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t(Object(d.a)(Object(d.a)({},e),{},{loading:!0,error:null})),n.next=4,m(r);case 4:return i=n.sent,c=i["New Points"],n.abrupt("return",t(Object(d.a)(Object(d.a)({},e),{},{loading:!1,data:c})));case 9:return n.prev=9,n.t0=n.catch(0),n.abrupt("return",t(Object(d.a)(Object(d.a)({},e),{},{loading:!1,error:n.t0})));case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}();return Object(r.jsxs)(en,{children:[Object(r.jsx)(rn,{src:v,alt:"Store Logo"}),Object(r.jsxs)(cn,{children:[Object(r.jsx)(X,{userInfo:c}),Object(r.jsxs)(an,{children:[Object(r.jsx)(X,{userInfo:e}),Object(r.jsx)(tn,{children:Object(r.jsx)(un.a,{color:"gold"})})]}),Object(r.jsxs)(on,{children:[Object(r.jsx)(D,{Gift:!0,children:"Get Free Points!"}),Object(r.jsxs)(an,{Gift:!0,children:[Object(r.jsxs)(sn,{onClick:function(){a(1e3)},children:[" ","1000"," "]}),Object(r.jsxs)(sn,{onClick:function(){a(5e3)},children:[" ","5000"," "]}),Object(r.jsxs)(sn,{onClick:function(){a(7500)},children:[" ","7500"," "]})]})]})]})]})},ln=t.p+"static/media/header-x1.b6f067c6.png";function fn(){var n=Object(w.a)(["\n  background-image: url(",");\n  height: 15rem;\n  background-attachment: fixed;\n  background-position: right;\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  align-items: flex-end;\n\n  @media screen and (min-width: 900px) {\n    height: 25rem;\n    background-position: center;\n  }\n"]);return fn=function(){return n},n}var bn=y.b.section(fn(),ln),jn=function(n){var e=n.sectionName;return Object(r.jsx)(bn,{children:Object(r.jsx)(J,{children:e})})};function pn(){var n=Object(w.a)(["\n  background-color: inherit;\n  color: #000000;\n"]);return pn=function(){return n},n}function hn(){var n=Object(w.a)(["\n  appearance: none;\n  background-color: transparent;\n  border: none;\n  color: inherit;\n  margin: 0;\n  padding: 0.5rem;\n  width: 100%;\n  font-family: inherit;\n  font-size: inherit;\n  cursor: inherit;\n  line-height: inherit;\n  outline: none;\n  grid-area: select;\n  align-self: center;\n"]);return hn=function(){return n},n}function mn(){var n=Object(w.a)(["\n  outline: none;\n  background-color: rgba(24, 104, 157, 0.6);\n  border: none;\n  border-radius: 1rem;\n  color: #fdfcfd;\n  padding: 0 1.5rem;\n  margin: 0.5rem 0;\n  width: 70vw;\n  font-size: 1.1rem;\n  line-height: 1.5;\n  cursor: pointer;\n\n  @media screen and (min-width: 900px) {\n    margin: 0;\n    width: 15vw;\n  }\n"]);return mn=function(){return n},n}var gn=y.b.div(mn()),On=y.b.select(hn()),xn=y.b.option(pn()),vn=function(n){var e=n.data,t=n.name,i=n.value,c=n.handleFilters;return Object(r.jsx)(gn,{children:Object(r.jsx)(On,{value:i,onChange:c,name:t,children:e.map((function(n,e){return Object(r.jsx)(xn,{value:n,children:n},e)}))})})},wn=function(n){var e=n.currentPage,t=n.prodList;return void 0===t?Object(r.jsx)(B,{children:"Loading..."}):2===e?Object(r.jsxs)(B,{children:["Products 16 to ",t.length]}):t.length<16?Object(r.jsxs)(B,{children:["Products 1 to ",t.length]}):Object(r.jsx)(B,{children:"Products 1 to 16"})};function yn(){var n=Object(w.a)(["\n  outline: none;\n  background-color: rgba(24, 104, 157, 0.6);\n  border: none;\n  border-radius: 1rem;\n  color: #fdfcfb;\n  padding: 0.5rem 1.5rem;\n  margin-top: 0.5rem;\n  font-size: 1.1rem;\n  line-height: 1.5;\n  cursor: pointer;\n\n  @media screen and (min-width: 900px) {\n    margin: 0;\n  }\n"]);return yn=function(){return n},n}function kn(){var n=Object(w.a)(["\n  display: none;\n\n  @media screen and (min-width: 900px) {\n    display: block;\n    border-right: 1px solid #18689d;\n    padding-right: 2rem;\n  }\n"]);return kn=function(){return n},n}function Cn(){var n=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  width: 100%;\n  background-color: #fdfcfb;\n  border-bottom: 1px solid #18689d;\n\n  @media screen and (min-width: 900px) {\n    padding: 1rem 15%;\n    flex-direction: row;\n  }\n"]);return Cn=function(){return n},n}var Pn=y.b.section(Cn()),Fn=y.b.div(kn()),Mn=y.b.button(yn()),zn=function(n){var e=n.priceFilter,t=n.setPriceFilter,c=n.categoryFilter,a=n.setCategoryFilter,o=n.getData,s=n.products,u=n.setProducts,l=n.currentPage,f=e.idPr,b=e.namePr,j=e.valuePr,p=e.optionsPr,h=c.idCat,m=c.nameCat,g=c.valueCat,O=c.optionsCat;Object(i.useEffect)((function(){x()}),[e]),Object(i.useEffect)((function(){y()}),[c]);var x=function(){if(void 0!==s){if("Lowest Price"===j)return v();if("Highest Price"===j)return w()}},v=function(){var n=s.sort((function(n,e){return n.cost-e.cost}));return u({data:n})},w=function(){var n=s.sort((function(n,e){return e.cost-n.cost}));return u({data:n})},y=function(){if("Categories"!==c.value&&void 0!==s){var n=s.filter((function(n){return n.category===g}));return u({data:n})}};return Object(r.jsxs)(Pn,{children:[Object(r.jsx)(Fn,{children:Object(r.jsx)(wn,{prodList:s,currentPage:l})}),Object(r.jsx)(D,{children:"Sort by:"}),Object(r.jsx)(vn,{handleFilters:function(n){!function(n){var r;r=n.target.value,t(Object(d.a)(Object(d.a)({},e),{},{valuePr:r}))}(n)},data:p,name:b,value:j},f),Object(r.jsx)(vn,{handleFilters:function(n){!function(n){var e;e=n.target.value,a(Object(d.a)(Object(d.a)({},c),{},{valueCat:e}))}(n)},data:O,name:m,value:g},h),Object(r.jsx)(Mn,{onClick:function(){t(Object(d.a)(Object(d.a)({},e),{},{valuePr:"Prices"})),a(Object(d.a)(Object(d.a)({},c),{},{valueCat:"Categories"})),o()},children:"Reset filters"})]})};function Sn(){var n=Object(w.a)(["\n  background-color: ",";\n  color: #fdfcfb;\n  font-size: 1rem;\n  border-radius: ",";\n  width: ",";\n  height: 2rem;\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n  z-index: 3;\n  display: flex;\n  align-items: center;\n  justify-content: ",";\n\n  svg {\n    fill: ",";\n    width: 1rem;\n  }\n"]);return Sn=function(){return n},n}var Nn=y.b.span(Sn(),(function(n){return n.Message?"#3D3D3D":"#18689d"}),(function(n){return n.Message?"1rem":"50%"}),(function(n){return n.Message?"55%":"2rem"}),(function(n){return n.Message?"space-around":"center"}),(function(n){return n.color||"white"})),En=t(21),Ln=function(n){var e=n.cost,t=n.points;return void 0===t?Object(r.jsx)(Nn,{Message:!0,children:"Loading..."}):t<e?Object(r.jsxs)(Nn,{Message:!0,children:["You need ",e-t," ",Object(r.jsx)(un.a,{color:"gold"})]}):Object(r.jsx)(Nn,{children:Object(r.jsx)(En.a,{})})};function In(){var n=Object(w.a)(["\n  position: relative;\n  top: 10rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  background-color: #aebfee;\n  padding: 1rem;\n  border-radius: 1rem;\n  width: 300px;\n  height: 300px;\n"]);return In=function(){return n},n}function Gn(){var n=Object(w.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  z-index: 5;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return Gn=function(){return n},n}var Jn=y.b.div(Gn()),Rn=y.b.div(In());var Dn=function(n){return n.isOpen?o.a.createPortal(Object(r.jsx)(Jn,{children:Object(r.jsx)(Rn,{children:n.children})}),document.getElementById("modal")):null};function Un(){var n=Object(w.a)(['\n  padding: 0.5rem;\n  background-color: #fdfcfb;\n  color: #18689d;\n  font-size: 1rem;\n  font-family: "Rubik", sans-serif;\n  border: none;\n  border-radius: 0.5rem;\n  outline: none;\n\n  @media screen and (min-width: 900px) {\n    padding: 1rem 4rem;\n    border-radius: 1.5rem;\n    cursor: pointer;\n  }\n']);return Un=function(){return n},n}function Tn(){var n=Object(w.a)(['\n  color: #fdfcfb;\n  font-size: 1.5rem;\n  font-family: "Rubik", sans-serif;\n\n  @media screen and (min-width: 900px) {\n    font-size: 2.25rem;\n  }\n']);return Tn=function(){return n},n}function An(){var n=Object(w.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  svg {\n    fill: ",";\n    width: 1.5rem;\n    margin-left: 0.5rem;\n  }\n"]);return An=function(){return n},n}function Bn(){var n=Object(w.a)(["\n  @media screen and (min-width: 900px) {\n    &:hover + "," {\n      display: flex;\n    }\n  }\n"]);return Bn=function(){return n},n}function Yn(){var n=Object(w.a)(["\n  background-color: rgba(24, 104, 157, 0.7);\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem 1rem;\n  position: relative;\n\n  @media screen and (min-width: 900px) {\n    display: none;\n    flex-direction: column;\n    justify-content: space-evenly;\n    padding: 0;\n    position: absolute;\n    z-index: 2;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n  }\n"]);return Yn=function(){return n},n}function Hn(){var n=Object(w.a)(["\n  width: 90vw;\n  margin: 1rem;\n  position: relative;\n  background-color: #fdfcfb;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);\n\n  @media screen and (min-width: 900px) {\n    max-width: 20vw;\n  }\n"]);return Hn=function(){return n},n}var Qn=y.b.article(Hn()),_n=y.b.div(Yn()),Xn=y.b.div(Bn(),_n),Zn=y.b.div(An(),(function(n){return n.color})),Vn=y.b.p(Tn()),Wn=y.b.button(Un()),qn=function(n){var e=n.isOpen,t=n.onClose;return Object(r.jsxs)(Dn,{isOpen:e,onClose:t,children:[Object(r.jsx)(T,{Modal:!0,children:"Product redeemed!"}),Object(r.jsx)(U,{Modal:!0,children:"You can see it in your history."}),Object(r.jsx)(Wn,{onClick:t,children:"Continue"})]})};var Kn=function(n){var e=n.isOpen,t=n.onClose;return Object(r.jsxs)(Dn,{isOpen:e,onClose:t,children:[Object(r.jsx)(T,{children:"Error"}),Object(r.jsx)(U,{Modal:!0,children:"Something went wrong."}),Object(r.jsx)(Wn,{onClick:t,children:"Try again"})]})},$n=function(n){var e=n.id,t=n.category,c=n.cost,a=n.photo,o=n.name,s=n.updating,b=n.setUpdating,j=Object(i.useContext)(O),p=j.userPoints,h=j.setUserPoints,m=p.data,x=Object(i.useState)(!1),v=Object(f.a)(x,2),w=v[0],y=v[1],k=Object(i.useState)(!1),C=Object(f.a)(k,2),P=C[0],F=C[1],M=function(){var n=Object(l.a)(u.a.mark((function n(e,t){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,g(e);case 3:h(Object(d.a)(Object(d.a)({},p),{},{data:m-t})),b(!s),y(!0),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),F(!0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e,t){return n.apply(this,arguments)}}();return Object(r.jsxs)(Qn,{children:[Object(r.jsx)(Ln,{cost:c,points:m}),Object(r.jsxs)(Xn,{children:[Object(r.jsx)(A,{src:a,alt:o}),Object(r.jsxs)(Q,{children:[Object(r.jsx)(U,{children:t}),Object(r.jsx)(T,{children:o})]})]}),Object(r.jsxs)(_n,{children:[Object(r.jsxs)(Zn,{children:[Object(r.jsx)(Vn,{children:c}),Object(r.jsx)(un.a,{color:"gold"})]}),m>=c&&Object(r.jsx)(Wn,{onClick:function(){M(e,c)},children:"Redeem now"})]}),Object(r.jsx)(qn,{isOpen:w,onClose:function(){y(!1)}}),Object(r.jsx)(Kn,{isOpen:P,onClose:function(){F(!1)}})]})};function ne(){var n=Object(w.a)(["\n  padding: 1rem;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n\n  @media screen and (min-width: 900px) {\n    padding: 2.5rem;\n  }\n"]);return ne=function(){return n},n}var ee=y.b.section(ne()),te=function(n){var e=n.products,t=n.currentPage,i=n.updating,c=n.setUpdating,a=e.loading,o=e.error,s=e.data;if(!0===a)return Object(r.jsx)(Y,{Centered:!0,children:Object(r.jsx)(T,{Notification:!0,children:"Loading..."})});if(o)return Object(r.jsx)(Y,{Centered:!0,children:Object(r.jsx)(T,{children:o})});var u=function(n,e,t){var r=(t-1)*e,i=r+e;return n.slice(r,i)}(s,16,t);return Object(r.jsx)(ee,{children:u.map((function(n,e){return Object(r.jsx)($n,{id:n._id,category:n.category,cost:n.cost,photo:n.img.hdUrl,name:n.name,updating:i,setUpdating:c},"prod".concat(e))}))})};function re(){var n=Object(w.a)(["\n  display: flex;\n"]);return re=function(){return n},n}function ie(){var n=Object(w.a)(["\n  padding: 1rem;\n  display: flex;\n  justify-content: space-between;\n\n  @media screen and (min-width: 900px) {\n    padding: 1.5rem 15%;\n  }\n"]);return ie=function(){return n},n}var ce=y.b.section(ie()),ae=(y.b.div(re()),t(23)),oe=t(22),se=function(n){var e=n.products,t=n.currentPage,c=n.next,a=n.prev,o=Object(i.useState)(1),s=Object(f.a)(o,2),u=s[0],d=s[1];return Object(r.jsxs)(ce,{children:[Object(r.jsx)(wn,{currentPage:t,prodList:e}),Object(r.jsxs)(Y,{children:[2===u&&Object(r.jsx)(H,{onClick:function(){d(1),a(t)},color:"#18689d",borderColor:"#18689d",bgColor:"transparent",children:Object(r.jsx)(oe.a,{})}),1===u&&void 0!==e&&e.length>16&&Object(r.jsx)(H,{onClick:function(){d(2),c(t,2)},color:"#18689d",borderColor:"#18689d",bgColor:"transparent",children:Object(r.jsx)(ae.a,{})})]})]})};function ue(){var n=Object(w.a)(["\n  border: 1px solid #18689d;\n  display: flex;\n  margin: 0.5rem;\n  width: 70vw;\n\n  @media screen and (min-width: 900px) {\n    width: 30vw;\n  }\n"]);return ue=function(){return n},n}var de=y.b.div(ue()),le=function(n){var e=n.name,t=n.photo,i=n.cost;return Object(r.jsxs)(de,{children:[Object(r.jsx)(A,{Small:!0,src:t,alt:e}),Object(r.jsxs)(Q,{children:[Object(r.jsx)(T,{children:e}),Object(r.jsxs)(U,{children:[i," pts"]})]})]})};function fe(){var n=Object(w.a)(["\n  padding: 2.5rem;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n"]);return fe=function(){return n},n}var be=y.b.div(fe()),je=function(n){var e=n.history,t=e.loading,i=e.error,c=e.data;return!0===t?Object(r.jsx)(Y,{Centered:!0,children:Object(r.jsx)(T,{Notification:!0,children:"Loading..."})}):i?Object(r.jsx)(Y,{Centered:!0,children:Object(r.jsx)(T,{children:i})}):0!==Object.keys(c).length?Object(r.jsx)(be,{children:c.map((function(n,e){return Object(r.jsx)(le,{name:n.name,photo:n.img.url,cost:n.cost},"history".concat(e))}))}):Object(r.jsx)(Y,{Centered:!0,children:Object(r.jsx)(T,{Notification:!0,children:"No products redeemed"})})};function pe(){var n=Object(w.a)(["\n  padding: 1rem;\n  background-color: #fdfcfd;\n\n  @media screen and (min-width: 900px) {\n    padding: 1rem 15%;\n  }\n"]);return pe=function(){return n},n}var he=y.b.section(pe()),me=function(n){var e=n.updating,t=Object(i.useState)({loading:!0,error:null,data:void 0}),c=Object(f.a)(t,2),a=c[0],o=c[1];Object(i.useEffect)((function(){s()}),[]),Object(i.useEffect)((function(){s()}),[e]);var s=function(){var n=Object(l.a)(u.a.mark((function n(){var e;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o({loading:!0,error:null}),n.prev=1,n.next=4,h("https://coding-challenge-api.aerolab.co/user/history",p);case 4:e=n.sent,o({loading:!1,data:e}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),o({loading:!1,error:n.t0});case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(){return n.apply(this,arguments)}}();return Object(r.jsxs)(he,{children:[Object(r.jsx)(D,{children:"Redeem History"}),Object(r.jsx)(je,{history:a})]})};function ge(){var n=Object(w.a)(["\n  text-decoration: none;\n  font-weight: 500;\n  color: #0f4264;\n"]);return ge=function(){return n},n}function Oe(){var n=Object(w.a)(["\n  color: #fdfcfd;\n\n  svg {\n    fill: #fdfcfd;\n    width: 0.9rem;\n  }\n"]);return Oe=function(){return n},n}function xe(){var n=Object(w.a)(["\n  background-color: rgba(24, 104, 157, 0.6);\n  text-align: center;\n  padding: 1.5rem;\n"]);return xe=function(){return n},n}var ve=y.b.footer(xe()),we=y.b.p(Oe()),ye=y.b.a(ge()),ke=t(24),Ce=function(){return Object(r.jsxs)(ve,{children:[Object(r.jsxs)(we,{children:["2020 - Developed with ",Object(r.jsx)(ke.a,{})," by Cynthia Romero."]}),Object(r.jsxs)(we,{children:["Logo made by"," ",Object(r.jsx)(ye,{href:"https://www.flaticon.com/authors/srip",title:"srip",target:"_blank",children:"srip"})," ","from"," ",Object(r.jsx)(ye,{href:"https://www.flaticon.com/",title:"Flaticon",target:"_blank",children:"www.flaticon.com"})]})]})};var Pe=function(){var n=Object(i.useState)({loading:!0,error:null,data:void 0}),e=Object(f.a)(n,2),t=e[0],c=e[1],a=Object(i.useState)(b),o=Object(f.a)(a,2),s=o[0],m=o[1],g=Object(i.useState)(j),O=Object(f.a)(g,2),v=O[0],w=O[1],y=Object(i.useState)(1),k=Object(f.a)(y,2),C=k[0],P=k[1],F=Object(i.useState)(!1),M=Object(f.a)(F,2),z=M[0],S=M[1];Object(i.useEffect)((function(){N()}),[]);var N=function(){var n=Object(l.a)(u.a.mark((function n(){var e;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c(Object(d.a)(Object(d.a)({},t),{},{loading:!0,error:null})),n.prev=1,n.next=4,h("https://coding-challenge-api.aerolab.co/products",p);case 4:e=n.sent,c(Object(d.a)(Object(d.a)({},t),{},{loading:!1,data:e})),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),c(Object(d.a)(Object(d.a)({},t),{},{loading:!1,error:n.t0}));case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(){return n.apply(this,arguments)}}();return Object(r.jsx)(x,{children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(_,{}),Object(r.jsx)(dn,{}),Object(r.jsx)(jn,{sectionName:"Electronics"}),Object(r.jsx)(zn,{priceFilter:s,setPriceFilter:m,categoryFilter:v,setCategoryFilter:w,getData:N,products:t.data,setProducts:c,currentPage:C}),Object(r.jsx)(te,{products:t,currentPage:C,updating:z,setUpdating:S}),Object(r.jsx)(se,{products:t.data,currentPage:C,next:function(n,e){P((function(n){return Math.min(n+1,e)}))},prev:function(n){P((function(n){return Math.max(n-1,1)}))}}),Object(r.jsx)(me,{updating:z}),Object(r.jsx)(Ce,{})]})})},Fe=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,35)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,c=e.getLCP,a=e.getTTFB;t(n),r(n),i(n),c(n),a(n)}))};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(Pe,{})}),document.getElementById("root")),Fe()}},[[34,1,2]]]);
//# sourceMappingURL=main.4d7d873b.chunk.js.map