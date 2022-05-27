import{S as Ne,i as Ae,s as De,K as Pe,l as we,g as r,L as ze,n as L,d as l,e as h,k as w,t as b,c as v,a as d,m as C,h as E,b as n,J as p,M as Ce,N as Be,j as Ge,O as Te,x as Ue,y as je,z as He,r as x,p as ce,C as Ke,q as Me,P as Oe,w as Re,o as Se}from"../chunks/index-a47acaee.js";function qe(o){return{c:L,l:L,m:L,p:L,d:L}}function Je(o){let s,f,t,a,c,y,g,I,N;return{c(){s=h("li"),f=h("form"),t=h("label"),a=h("input"),c=w(),y=h("a"),g=b(o[1]),this.h()},l(k){s=v(k,"LI",{class:!0});var m=d(s);f=v(m,"FORM",{action:!0,class:!0});var z=d(f);t=v(z,"LABEL",{class:!0});var P=d(t);a=v(P,"INPUT",{type:!0,name:!0,class:!0}),c=C(P),y=v(P,"A",{href:!0,target:!0,class:!0});var B=d(y);g=E(B,o[1]),B.forEach(l),P.forEach(l),z.forEach(l),m.forEach(l),this.h()},h(){n(a,"type","checkbox"),n(a,"name","checkbox"),n(a,"class","svelte-19z444"),n(y,"href",o[3]),n(y,"target","_blank"),n(y,"class","svelte-19z444"),n(t,"class","form-control svelte-19z444"),n(f,"action",""),n(f,"class","svelte-19z444"),n(s,"class","svelte-19z444")},m(k,m){r(k,s,m),p(s,f),p(f,t),p(t,a),a.checked=o[0],p(t,c),p(t,y),p(y,g),I||(N=[Ce(a,"change",o[6]),Ce(a,"click",Be(o[7]))],I=!0)},p(k,m){m&1&&(a.checked=k[0]),m&2&&Ge(g,k[1]),m&8&&n(y,"href",k[3])},d(k){k&&l(s),I=!1,Te(N)}}}function Qe(o){return{c:L,l:L,m:L,p:L,d:L}}function Ve(o){let s,f,t={ctx:o,current:null,token:null,hasCatch:!1,pending:Qe,then:Je,catch:qe,value:8};return Pe(f=o[5](o[4]),t),{c(){s=we(),t.block.c()},l(a){s=we(),t.block.l(a)},m(a,c){r(a,s,c),t.block.m(a,t.anchor=c),t.mount=()=>s.parentNode,t.anchor=s},p(a,[c]){o=a,t.ctx=o,c&16&&f!==(f=o[5](o[4]))&&Pe(f,t)||ze(t,o,c)},i:L,o:L,d(a){a&&l(s),t.block.d(a),t.token=null,t=null}}}async function We(o){await fetch("/gifts",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})}function Xe(o,s,f){let{giftClaimed:t}=s,{giftName:a}=s,{giftId:c}=s,{giftLink:y}=s;const g=async m=>{};let I=0;function N(){t=this.checked,f(0,t)}const k=()=>{confirm(`${t?"Unclaim":"Claim"} ${a}`)&&(We({claimed:t,name:a,link:y,id:c}),f(0,t=!t),f(4,I++,I))};return o.$$set=m=>{"giftClaimed"in m&&f(0,t=m.giftClaimed),"giftName"in m&&f(1,a=m.giftName),"giftId"in m&&f(2,c=m.giftId),"giftLink"in m&&f(3,y=m.giftLink)},[t,a,c,y,I,g,N,k]}class Ye extends Ne{constructor(s){super(),Ae(this,s,Xe,Ve,De,{giftClaimed:0,giftName:1,giftId:2,giftLink:3})}}function Le(o,s,f){const t=o.slice();return t[2]=s[f],t}function Ie(o){let s,f;return s=new Ye({props:{giftClaimed:o[2].claimed,giftName:o[2].name,giftId:o[2].id,giftLink:o[2].link}}),{c(){Ue(s.$$.fragment)},l(t){je(s.$$.fragment,t)},m(t,a){He(s,t,a),f=!0},p(t,a){const c={};a&1&&(c.giftClaimed=t[2].claimed),a&1&&(c.giftName=t[2].name),a&1&&(c.giftId=t[2].id),a&1&&(c.giftLink=t[2].link),s.$set(c)},i(t){f||(x(s.$$.fragment,t),f=!0)},o(t){ce(s.$$.fragment,t),f=!1},d(t){Ke(s,t)}}}function Ze(o){let s,f,t,a,c,y,g,I,N,k,m,z,P,B,G,A,$,q,T,D,ee,J,U,te,Q,j,le,V,H,se,W,K,ae,X,M,ie,Y,F,oe,O,fe,Z,R=o[0],u=[];for(let e=0;e<R.length;e+=1)u[e]=Ie(Le(o,R,e));const Fe=e=>ce(u[e],1,1,()=>{u[e]=null});return{c(){s=h("h1"),f=b("Denis' Gift List"),t=w(),a=h("p"),c=b("Please leave a tick on the gift(s) you wish to give"),y=w(),g=h("p"),I=b("If you have not yet found your gifts, here are some suggestions ;)"),N=w(),k=h("p"),m=b("Don't hesitate to pick one, or two, or three or donate to charities listed below on my behalf."),z=w(),P=h("ul");for(let e=0;e<u.length;e+=1)u[e].c();B=w(),G=h("p"),A=h("a"),$=b("Help the dogs!"),q=w(),T=h("p"),D=h("a"),ee=b("Feed the people!"),J=w(),U=h("p"),te=b("Address For Delivery:"),Q=w(),j=h("p"),le=b("Denis Kiselev"),V=w(),H=h("p"),se=b("37, Avenue Commandant Bret"),W=w(),K=h("p"),ae=b("06400, Cannes, France"),X=w(),M=h("p"),ie=b("T\xE9l: 06 50 56 81 16"),Y=w(),F=h("p"),oe=b("Please send all notifications to: "),O=h("a"),fe=b("dakiselev@gmail.com"),this.h()},l(e){s=v(e,"H1",{class:!0});var i=d(s);f=E(i,"Denis' Gift List"),i.forEach(l),t=C(e),a=v(e,"P",{class:!0});var _=d(a);c=E(_,"Please leave a tick on the gift(s) you wish to give"),_.forEach(l),y=C(e),g=v(e,"P",{class:!0});var S=d(g);I=E(S,"If you have not yet found your gifts, here are some suggestions ;)"),S.forEach(l),N=C(e),k=v(e,"P",{class:!0});var ue=d(k);m=E(ue,"Don't hesitate to pick one, or two, or three or donate to charities listed below on my behalf."),ue.forEach(l),z=C(e),P=v(e,"UL",{class:!0});var me=d(P);for(let re=0;re<u.length;re+=1)u[re].l(me);me.forEach(l),B=C(e),G=v(e,"P",{class:!0});var _e=d(G);A=v(_e,"A",{target:!0,class:!0,href:!0});var pe=d(A);$=E(pe,"Help the dogs!"),pe.forEach(l),_e.forEach(l),q=C(e),T=v(e,"P",{class:!0});var he=d(T);D=v(he,"A",{target:!0,class:!0,href:!0});var ve=d(D);ee=E(ve,"Feed the people!"),ve.forEach(l),he.forEach(l),J=C(e),U=v(e,"P",{class:!0});var de=d(U);te=E(de,"Address For Delivery:"),de.forEach(l),Q=C(e),j=v(e,"P",{class:!0});var ke=d(j);le=E(ke,"Denis Kiselev"),ke.forEach(l),V=C(e),H=v(e,"P",{class:!0});var ye=d(H);se=E(ye,"37, Avenue Commandant Bret"),ye.forEach(l),W=C(e),K=v(e,"P",{class:!0});var ge=d(K);ae=E(ge,"06400, Cannes, France"),ge.forEach(l),X=C(e),M=v(e,"P",{class:!0});var be=d(M);ie=E(be,"T\xE9l: 06 50 56 81 16"),be.forEach(l),Y=C(e),F=v(e,"P",{class:!0});var ne=d(F);oe=E(ne,"Please send all notifications to: "),O=v(ne,"A",{href:!0,class:!0});var Ee=d(O);fe=E(Ee,"dakiselev@gmail.com"),Ee.forEach(l),ne.forEach(l),this.h()},h(){n(s,"class","svelte-7d5yo4"),n(a,"class","svelte-7d5yo4"),n(g,"class","svelte-7d5yo4"),n(k,"class","svelte-7d5yo4"),n(P,"class","svelte-7d5yo4"),n(A,"target","_blank"),n(A,"class","donate-link svelte-7d5yo4"),n(A,"href","https://rolda.org/breaking-news-ukraine/#donation-box"),n(G,"class","svelte-7d5yo4"),n(D,"target","_blank"),n(D,"class","donate-link svelte-7d5yo4"),n(D,"href","https://wck.org/"),n(T,"class","svelte-7d5yo4"),n(U,"class","big svelte-7d5yo4"),n(j,"class","big svelte-7d5yo4"),n(H,"class","big svelte-7d5yo4"),n(K,"class","big svelte-7d5yo4"),n(M,"class","big svelte-7d5yo4"),n(O,"href","mailto:dakiselev@gmail.com"),n(O,"class","svelte-7d5yo4"),n(F,"class","big svelte-7d5yo4")},m(e,i){r(e,s,i),p(s,f),r(e,t,i),r(e,a,i),p(a,c),r(e,y,i),r(e,g,i),p(g,I),r(e,N,i),r(e,k,i),p(k,m),r(e,z,i),r(e,P,i);for(let _=0;_<u.length;_+=1)u[_].m(P,null);r(e,B,i),r(e,G,i),p(G,A),p(A,$),r(e,q,i),r(e,T,i),p(T,D),p(D,ee),r(e,J,i),r(e,U,i),p(U,te),r(e,Q,i),r(e,j,i),p(j,le),r(e,V,i),r(e,H,i),p(H,se),r(e,W,i),r(e,K,i),p(K,ae),r(e,X,i),r(e,M,i),p(M,ie),r(e,Y,i),r(e,F,i),p(F,oe),p(F,O),p(O,fe),Z=!0},p(e,[i]){if(i&1){R=e[0];let _;for(_=0;_<R.length;_+=1){const S=Le(e,R,_);u[_]?(u[_].p(S,i),x(u[_],1)):(u[_]=Ie(S),u[_].c(),x(u[_],1),u[_].m(P,null))}for(Se(),_=R.length;_<u.length;_+=1)Fe(_);Me()}},i(e){if(!Z){for(let i=0;i<R.length;i+=1)x(u[i]);Z=!0}},o(e){u=u.filter(Boolean);for(let i=0;i<u.length;i+=1)ce(u[i]);Z=!1},d(e){e&&l(s),e&&l(t),e&&l(a),e&&l(y),e&&l(g),e&&l(N),e&&l(k),e&&l(z),e&&l(P),Oe(u,e),e&&l(B),e&&l(G),e&&l(q),e&&l(T),e&&l(J),e&&l(U),e&&l(Q),e&&l(j),e&&l(V),e&&l(H),e&&l(W),e&&l(K),e&&l(X),e&&l(M),e&&l(Y),e&&l(F)}}}function xe(o,s,f){let t=[];async function a(){const c=await fetch("/gifts",{});f(0,t=await c.json())}return Re(a),[t]}class et extends Ne{constructor(s){super(),Ae(this,s,xe,Ze,De,{})}}export{et as default};
