import{S as J,i as T,s as U,K as $,e as p,t as q,k as L,l as C,c as m,a as g,h as G,d as o,m as P,b as d,g as k,J as u,L as x,n as v,M as B,N as H}from"../chunks/index-62fbe76e.js";function j(n,t,a){const e=n.slice();return e[3]=t[a],e}function K(n){return{c:v,l:v,m:v,p:v,d:v}}function M(n){let t,a=n[2],e=[];for(let l=0;l<a.length;l+=1)e[l]=D(j(n,a,l));return{c(){t=p("ul");for(let l=0;l<e.length;l+=1)e[l].c()},l(l){t=m(l,"UL",{});var r=g(t);for(let s=0;s<e.length;s+=1)e[s].l(r);r.forEach(o)},m(l,r){k(l,t,r);for(let s=0;s<e.length;s+=1)e[s].m(t,null)},p(l,r){if(r&1){a=l[2];let s;for(s=0;s<a.length;s+=1){const h=j(l,a,s);e[s]?e[s].p(h,r):(e[s]=D(h),e[s].c(),e[s].m(t,null))}for(;s<e.length;s+=1)e[s].d(1);e.length=a.length}},d(l){l&&o(t),H(e,l)}}}function D(n){let t,a,e,l=n[3].name+"",r,s,h,i,c,f,_,w,N,S;function I(){return n[1](n[3])}return{c(){t=p("li"),a=p("label"),e=p("a"),r=q(l),h=L(),i=p("input"),f=L(),_=p("span"),w=L(),this.h()},l(b){t=m(b,"LI",{class:!0});var y=g(t);a=m(y,"LABEL",{class:!0});var E=g(a);e=m(E,"A",{href:!0,target:!0,class:!0});var A=g(e);r=G(A,l),A.forEach(o),h=P(E),i=m(E,"INPUT",{type:!0,class:!0}),f=P(E),_=m(E,"SPAN",{class:!0}),g(_).forEach(o),E.forEach(o),w=P(y),y.forEach(o),this.h()},h(){d(e,"href",s=n[3].link),d(e,"target","_blank"),d(e,"class","svelte-g8q1d"),d(i,"type","checkbox"),i.checked=c=n[3].claimed,d(i,"class","svelte-g8q1d"),d(_,"class","checkmark svelte-g8q1d"),d(a,"class","container svelte-g8q1d"),d(t,"class","svelte-g8q1d")},m(b,y){k(b,t,y),u(t,a),u(a,e),u(e,r),u(a,h),u(a,i),u(a,f),u(a,_),u(t,w),N||(S=B(_,"click",I),N=!0)},p(b,y){n=b},d(b){b&&o(t),N=!1,S()}}}function O(n){let t,a;return{c(){t=p("p"),a=q("Loading Gifts...")},l(e){t=m(e,"P",{});var l=g(t);a=G(l,"Loading Gifts..."),l.forEach(o)},m(e,l){k(e,t,l),u(t,a)},p:v,d(e){e&&o(t)}}}function R(n){let t,a,e,l,r,s,h,i={ctx:n,current:null,token:null,hasCatch:!1,pending:O,then:M,catch:K,value:2};return $(n[0],i),{c(){t=p("h1"),a=q("Denis' Gift List"),e=L(),l=p("p"),r=q("Please leave a tick on the gift you intend to give"),s=L(),h=C(),i.block.c(),this.h()},l(c){t=m(c,"H1",{class:!0});var f=g(t);a=G(f,"Denis' Gift List"),f.forEach(o),e=P(c),l=m(c,"P",{});var _=g(l);r=G(_,"Please leave a tick on the gift you intend to give"),_.forEach(o),s=P(c),h=C(),i.block.l(c),this.h()},h(){d(t,"class","svelte-g8q1d")},m(c,f){k(c,t,f),u(t,a),k(c,e,f),k(c,l,f),u(l,r),k(c,s,f),k(c,h,f),i.block.m(c,i.anchor=f),i.mount=()=>h.parentNode,i.anchor=h},p(c,[f]){n=c,x(i,n,f)},i:v,o:v,d(c){c&&o(t),c&&o(e),c&&o(l),c&&o(s),c&&o(h),i.block.d(c),i.token=null,i=null}}}async function z(){return await(await fetch("/gifts",{})).json()}async function F(n){await fetch("/gifts",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})}function Q(n){return[z(),e=>F(e)]}class W extends J{constructor(t){super(),T(this,t,Q,R,U,{})}}export{W as default};
