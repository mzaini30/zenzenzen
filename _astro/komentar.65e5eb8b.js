/* empty css                       */function W(){}function De(e){return e()}function _e(){return Object.create(null)}function Y(e){e.forEach(De)}function Ke(e){return typeof e=="function"}function Te(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let Z;function pe(e,t){return Z||(Z=document.createElement("a")),Z.href=t,e===Z.href}function Re(e){return Object.keys(e).length===0}let ne=!1;function Le(){ne=!0}function Ue(){ne=!1}function je(e,t,r,s){for(;e<t;){const c=e+(t-e>>1);r(c)<=s?e=c+1:t=c}return e}function Oe(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const h=[];for(let p=0;p<t.length;p++){const g=t[p];g.claim_order!==void 0&&h.push(g)}t=h}const r=new Int32Array(t.length+1),s=new Int32Array(t.length);r[0]=-1;let c=0;for(let h=0;h<t.length;h++){const p=t[h].claim_order,g=(c>0&&t[r[c]].claim_order<=p?c+1:je(1,c,N=>t[r[N]].claim_order,p))-1;s[h]=r[g]+1;const w=g+1;r[w]=h,c=Math.max(w,c)}const d=[],l=[];let _=t.length-1;for(let h=r[c]+1;h!=0;h=s[h-1]){for(d.push(t[h-1]);_>=h;_--)l.push(t[_]);_--}for(;_>=0;_--)l.push(t[_]);d.reverse(),l.sort((h,p)=>h.claim_order-p.claim_order);for(let h=0,p=0;h<l.length;h++){for(;p<d.length&&l[h].claim_order>=d[p].claim_order;)p++;const g=p<d.length?d[p]:null;e.insertBefore(l[h],g)}}function b(e,t){if(ne){for(Oe(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function X(e,t,r){ne&&!r?b(e,t):(t.parentNode!==e||t.nextSibling!=r)&&e.insertBefore(t,r||null)}function k(e){e.parentNode&&e.parentNode.removeChild(e)}function Be(e,t){for(let r=0;r<e.length;r+=1)e[r]&&e[r].d(t)}function D(e){return document.createElement(e)}function O(e){return document.createTextNode(e)}function L(){return O(" ")}function te(){return O("")}function x(e,t,r,s){return e.addEventListener(t,r,s),()=>e.removeEventListener(t,r,s)}function Pe(e){return function(t){return t.preventDefault(),e.call(this,t)}}function $(e,t,r){r==null?e.removeAttribute(t):e.getAttribute(t)!==r&&e.setAttribute(t,r)}function R(e){return Array.from(e.childNodes)}function qe(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function Me(e,t,r,s,c=!1){qe(e);const d=(()=>{for(let l=e.claim_info.last_index;l<e.length;l++){const _=e[l];if(t(_)){const h=r(_);return h===void 0?e.splice(l,1):e[l]=h,c||(e.claim_info.last_index=l),_}}for(let l=e.claim_info.last_index-1;l>=0;l--){const _=e[l];if(t(_)){const h=r(_);return h===void 0?e.splice(l,1):e[l]=h,c?h===void 0&&e.claim_info.last_index--:e.claim_info.last_index=l,_}}return s()})();return d.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,d}function Ve(e,t,r,s){return Me(e,c=>c.nodeName===t,c=>{const d=[];for(let l=0;l<c.attributes.length;l++){const _=c.attributes[l];r[_.name]||d.push(_.name)}d.forEach(l=>c.removeAttribute(l))},()=>s(t))}function S(e,t,r){return Ve(e,t,r,D)}function P(e,t){return Me(e,r=>r.nodeType===3,r=>{const s=""+t;if(r.data.startsWith(s)){if(r.data.length!==s.length)return r.splitText(s.length)}else r.data=s},()=>O(t),!0)}function U(e){return P(e," ")}function ve(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function V(e,t){e.value=t??""}let ce;function Q(e){ce=e}const F=[],ge=[],ee=[],ye=[],He=Promise.resolve();let ie=!1;function Fe(){ie||(ie=!0,He.then(Se))}function le(e){ee.push(e)}const ae=new Set;let H=0;function Se(){if(H!==0)return;const e=ce;do{try{for(;H<F.length;){const t=F[H];H++,Q(t),Ge(t.$$)}}catch(t){throw F.length=0,H=0,t}for(Q(null),F.length=0,H=0;ge.length;)ge.pop()();for(let t=0;t<ee.length;t+=1){const r=ee[t];ae.has(r)||(ae.add(r),r())}ee.length=0}while(F.length);for(;ye.length;)ye.pop()();ie=!1,ae.clear(),Q(e)}function Ge(e){if(e.fragment!==null){e.update(),Y(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(le)}}const Je=new Set;function Xe(e,t){e&&e.i&&(Je.delete(e),e.i(t))}function Qe(e,t,r,s){const{fragment:c,after_update:d}=e.$$;c&&c.m(t,r),s||le(()=>{const l=e.$$.on_mount.map(De).filter(Ke);e.$$.on_destroy?e.$$.on_destroy.push(...l):Y(l),e.$$.on_mount=[]}),d.forEach(le)}function We(e,t){const r=e.$$;r.fragment!==null&&(Y(r.on_destroy),r.fragment&&r.fragment.d(t),r.on_destroy=r.fragment=null,r.ctx=[])}function ze(e,t){e.$$.dirty[0]===-1&&(F.push(e),Fe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ye(e,t,r,s,c,d,l,_=[-1]){const h=ce;Q(e);const p=e.$$={fragment:null,ctx:[],props:d,update:W,not_equal:c,bound:_e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:_e(),dirty:_,skip_bound:!1,root:t.target||h.$$.root};l&&l(p.root);let g=!1;if(p.ctx=r?r(e,t.props||{},(w,N,...v)=>{const A=v.length?v[0]:N;return p.ctx&&c(p.ctx[w],p.ctx[w]=A)&&(!p.skip_bound&&p.bound[w]&&p.bound[w](A),g&&ze(e,w)),N}):[],p.update(),g=!0,Y(p.before_update),p.fragment=s?s(p.ctx):!1,t.target){if(t.hydrate){Le();const w=R(t.target);p.fragment&&p.fragment.l(w),w.forEach(k)}else p.fragment&&p.fragment.c();t.intro&&Xe(e.$$.fragment),Qe(e,t.target,t.anchor,t.customElement),Ue(),Se()}Q(h)}class Ze{$destroy(){We(this,1),this.$destroy=W}$on(t,r){if(!Ke(r))return W;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(r),()=>{const c=s.indexOf(r);c!==-1&&s.splice(c,1)}}$set(t){this.$$set&&!Re(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const be="https://excalibur.jaddid.my.id/sql.php",we="c6e3894998f0bc7de76108e83437e7dc";async function Ee(e,t){const r=new FormData;for(let c in t)r.append(c,t[c]);return await fetch(e,{method:"post",body:r},{"Content-Type":"application/x-www-form-urlencoded"})}var xe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},re={},et={get exports(){return re},set exports(e){re=e}},ue={},tt={get exports(){return ue},set exports(e){ue=e}},oe={},rt={get exports(){return oe},set exports(e){oe=e}};(function(e){(function(t){function r(n,m){var a=(n&65535)+(m&65535),y=(n>>16)+(m>>16)+(a>>16);return y<<16|a&65535}function s(n,m){return n<<m|n>>>32-m}function c(n,m,a,y,E,C){return r(s(r(r(m,n),r(y,C)),E),a)}function d(n,m,a,y,E,C,M){return c(m&a|~m&y,n,m,E,C,M)}function l(n,m,a,y,E,C,M){return c(m&y|a&~y,n,m,E,C,M)}function _(n,m,a,y,E,C,M){return c(m^a^y,n,m,E,C,M)}function h(n,m,a,y,E,C,M){return c(a^(m|~y),n,m,E,C,M)}function p(n,m){n[m>>5]|=128<<m%32,n[(m+64>>>9<<4)+14]=m;var a,y,E,C,M,u=1732584193,i=-271733879,o=-1732584194,f=271733878;for(a=0;a<n.length;a+=16)y=u,E=i,C=o,M=f,u=d(u,i,o,f,n[a],7,-680876936),f=d(f,u,i,o,n[a+1],12,-389564586),o=d(o,f,u,i,n[a+2],17,606105819),i=d(i,o,f,u,n[a+3],22,-1044525330),u=d(u,i,o,f,n[a+4],7,-176418897),f=d(f,u,i,o,n[a+5],12,1200080426),o=d(o,f,u,i,n[a+6],17,-1473231341),i=d(i,o,f,u,n[a+7],22,-45705983),u=d(u,i,o,f,n[a+8],7,1770035416),f=d(f,u,i,o,n[a+9],12,-1958414417),o=d(o,f,u,i,n[a+10],17,-42063),i=d(i,o,f,u,n[a+11],22,-1990404162),u=d(u,i,o,f,n[a+12],7,1804603682),f=d(f,u,i,o,n[a+13],12,-40341101),o=d(o,f,u,i,n[a+14],17,-1502002290),i=d(i,o,f,u,n[a+15],22,1236535329),u=l(u,i,o,f,n[a+1],5,-165796510),f=l(f,u,i,o,n[a+6],9,-1069501632),o=l(o,f,u,i,n[a+11],14,643717713),i=l(i,o,f,u,n[a],20,-373897302),u=l(u,i,o,f,n[a+5],5,-701558691),f=l(f,u,i,o,n[a+10],9,38016083),o=l(o,f,u,i,n[a+15],14,-660478335),i=l(i,o,f,u,n[a+4],20,-405537848),u=l(u,i,o,f,n[a+9],5,568446438),f=l(f,u,i,o,n[a+14],9,-1019803690),o=l(o,f,u,i,n[a+3],14,-187363961),i=l(i,o,f,u,n[a+8],20,1163531501),u=l(u,i,o,f,n[a+13],5,-1444681467),f=l(f,u,i,o,n[a+2],9,-51403784),o=l(o,f,u,i,n[a+7],14,1735328473),i=l(i,o,f,u,n[a+12],20,-1926607734),u=_(u,i,o,f,n[a+5],4,-378558),f=_(f,u,i,o,n[a+8],11,-2022574463),o=_(o,f,u,i,n[a+11],16,1839030562),i=_(i,o,f,u,n[a+14],23,-35309556),u=_(u,i,o,f,n[a+1],4,-1530992060),f=_(f,u,i,o,n[a+4],11,1272893353),o=_(o,f,u,i,n[a+7],16,-155497632),i=_(i,o,f,u,n[a+10],23,-1094730640),u=_(u,i,o,f,n[a+13],4,681279174),f=_(f,u,i,o,n[a],11,-358537222),o=_(o,f,u,i,n[a+3],16,-722521979),i=_(i,o,f,u,n[a+6],23,76029189),u=_(u,i,o,f,n[a+9],4,-640364487),f=_(f,u,i,o,n[a+12],11,-421815835),o=_(o,f,u,i,n[a+15],16,530742520),i=_(i,o,f,u,n[a+2],23,-995338651),u=h(u,i,o,f,n[a],6,-198630844),f=h(f,u,i,o,n[a+7],10,1126891415),o=h(o,f,u,i,n[a+14],15,-1416354905),i=h(i,o,f,u,n[a+5],21,-57434055),u=h(u,i,o,f,n[a+12],6,1700485571),f=h(f,u,i,o,n[a+3],10,-1894986606),o=h(o,f,u,i,n[a+10],15,-1051523),i=h(i,o,f,u,n[a+1],21,-2054922799),u=h(u,i,o,f,n[a+8],6,1873313359),f=h(f,u,i,o,n[a+15],10,-30611744),o=h(o,f,u,i,n[a+6],15,-1560198380),i=h(i,o,f,u,n[a+13],21,1309151649),u=h(u,i,o,f,n[a+4],6,-145523070),f=h(f,u,i,o,n[a+11],10,-1120210379),o=h(o,f,u,i,n[a+2],15,718787259),i=h(i,o,f,u,n[a+9],21,-343485551),u=r(u,y),i=r(i,E),o=r(o,C),f=r(f,M);return[u,i,o,f]}function g(n){var m,a="",y=n.length*32;for(m=0;m<y;m+=8)a+=String.fromCharCode(n[m>>5]>>>m%32&255);return a}function w(n){var m,a=[];for(a[(n.length>>2)-1]=void 0,m=0;m<a.length;m+=1)a[m]=0;var y=n.length*8;for(m=0;m<y;m+=8)a[m>>5]|=(n.charCodeAt(m/8)&255)<<m%32;return a}function N(n){return g(p(w(n),n.length*8))}function v(n,m){var a,y=w(n),E=[],C=[],M;for(E[15]=C[15]=void 0,y.length>16&&(y=p(y,n.length*8)),a=0;a<16;a+=1)E[a]=y[a]^909522486,C[a]=y[a]^1549556828;return M=p(E.concat(w(m)),512+m.length*8),g(p(C.concat(M),512+128))}function A(n){var m="0123456789abcdef",a="",y,E;for(E=0;E<n.length;E+=1)y=n.charCodeAt(E),a+=m.charAt(y>>>4&15)+m.charAt(y&15);return a}function I(n){return unescape(encodeURIComponent(n))}function j(n){return N(I(n))}function B(n){return A(j(n))}function q(n,m){return v(I(n),I(m))}function G(n,m){return A(q(n,m))}function K(n,m,a){return m?a?q(m,n):G(m,n):a?j(n):B(n)}e.exports?e.exports=K:t.md5=K})(xe)})(rt);var z={};function nt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var at=function(e,t,r,s){t=t||"&",r=r||"=";var c={};if(typeof e!="string"||e.length===0)return c;var d=/\+/g;e=e.split(t);var l=1e3;s&&typeof s.maxKeys=="number"&&(l=s.maxKeys);var _=e.length;l>0&&_>l&&(_=l);for(var h=0;h<_;++h){var p=e[h].replace(d,"%20"),g=p.indexOf(r),w,N,v,A;g>=0?(w=p.substr(0,g),N=p.substr(g+1)):(w=p,N=""),v=decodeURIComponent(w),A=decodeURIComponent(N),nt(c,v)?Array.isArray(c[v])?c[v].push(A):c[v]=[c[v],A]:c[v]=A}return c},J=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}},it=function(e,t,r,s){return t=t||"&",r=r||"=",e===null&&(e=void 0),typeof e=="object"?Object.keys(e).map(function(c){var d=encodeURIComponent(J(c))+r;return Array.isArray(e[c])?e[c].map(function(l){return d+encodeURIComponent(J(l))}).join(t):d+encodeURIComponent(J(e[c]))}).join(t):s?encodeURIComponent(J(s))+r+encodeURIComponent(J(e)):""};z.decode=z.parse=at;z.encode=z.stringify=it;var lt=oe,ut=z,ot=/^[0-9a-f]{32}$/;function ct(e){var t={},r={protocol:1,format:1};for(var s in e)r[s]||(t[s]=e[s]);return t}function Ae(e,t){if(e)return typeof e.protocol=="boolean"?e.protocol:e.protocol==="http"?!1:e.protocol==="https"?!0:void 0}function $e(e){return e=typeof e=="string"?e.trim().toLowerCase():"unspecified",e.match(ot)?e:lt(e)}function Ne(e){var t=ut.stringify(ct(e));return t&&"?"+t||""}tt.exports={url:function(e,t,r){var s="//www.gravatar.com/avatar/";t&&t.cdn?(s=t.cdn+"/avatar/",delete t.cdn):(t&&t.protocol&&(r=Ae(t)),typeof r<"u"&&(s=r?"https://s.gravatar.com/avatar/":"http://www.gravatar.com/avatar/"));var c=Ne(t);return s+$e(e)+c},profile_url:function(e,t,r){var s=t!=null&&t.format!=null?String(t.format):"json",c;if(t&&t.cdn)c=t.cdn+"/",delete t.cdn;else{t&&t.protocol&&(r=Ae(t));var c=r&&"https://secure.gravatar.com/"||"http://www.gravatar.com/"}var d=Ne(t);return c+$e(e)+"."+s+d}};(function(e){e.exports=ue})(et);function Ce(e,t,r){const s=e.slice();return s[10]=t[r],s}function Ie(e){let t,r=e[3],s=[];for(let c=0;c<r.length;c+=1)s[c]=ke(Ce(e,r,c));return{c(){for(let c=0;c<s.length;c+=1)s[c].c();t=te()},l(c){for(let d=0;d<s.length;d+=1)s[d].l(c);t=te()},m(c,d){for(let l=0;l<s.length;l+=1)s[l].m(c,d);X(c,t,d)},p(c,d){if(d&8){r=c[3];let l;for(l=0;l<r.length;l+=1){const _=Ce(c,r,l);s[l]?s[l].p(_,d):(s[l]=ke(_),s[l].c(),s[l].m(t.parentNode,t))}for(;l<s.length;l+=1)s[l].d(1);s.length=r.length}},d(c){Be(s,c),c&&k(t)}}}function ke(e){let t,r,s,c,d,l=e[10].nama+"",_,h,p,g=e[10].komentar+"",w,N;return{c(){t=D("div"),r=D("div"),s=D("img"),d=L(),_=O(l),h=L(),p=D("div"),w=O(g),N=L(),this.h()},l(v){t=S(v,"DIV",{class:!0});var A=R(t);r=S(A,"DIV",{class:!0});var I=R(r);s=S(I,"IMG",{src:!0,alt:!0,class:!0}),d=U(I),_=P(I,l),I.forEach(k),h=U(A),p=S(A,"DIV",{class:!0});var j=R(p);w=P(j,g),j.forEach(k),N=U(A),A.forEach(k),this.h()},h(){pe(s.src,c=re.url(e[10].email))||$(s,"src",c),$(s,"alt",""),$(s,"class","inline-block w-8 h-8 rounded-full mr-2"),$(r,"class","judul bg-gray-500 text-white p-2"),$(p,"class","isi p-2 whitespace-pre-wrap"),$(t,"class","rounded text-sm border border-gray-500 shadow mt-2")},m(v,A){X(v,t,A),b(t,r),b(r,s),b(r,d),b(r,_),b(t,h),b(t,p),b(p,w),b(t,N)},p(v,A){A&8&&!pe(s.src,c=re.url(v[10].email))&&$(s,"src",c),A&8&&l!==(l=v[10].nama+"")&&ve(_,l),A&8&&g!==(g=v[10].komentar+"")&&ve(w,g)},d(v){v&&k(t)}}}function ft(e){let t,r,s,c,d,l,_,h,p,g,w,N,v,A,I,j,B,q,G,K,n,m,a,y,E,C,M,u=e[3]&&Ie(e);return{c(){t=D("div"),r=D("div"),s=O("Tambahkan Komentar Baru"),c=L(),d=D("div"),l=D("form"),_=D("label"),h=O("Nama"),p=L(),g=D("input"),w=L(),N=D("label"),v=O("Email"),A=L(),I=D("input"),j=L(),B=D("label"),q=O("Komentar"),G=L(),K=D("textarea"),n=L(),m=D("div"),a=D("input"),y=L(),u&&u.c(),E=te(),this.h()},l(i){t=S(i,"DIV",{class:!0});var o=R(t);r=S(o,"DIV",{class:!0});var f=R(r);s=P(f,"Tambahkan Komentar Baru"),f.forEach(k),c=U(o),d=S(o,"DIV",{class:!0});var fe=R(d);l=S(fe,"FORM",{action:!0,class:!0});var T=R(l);_=S(T,"LABEL",{for:!0});var se=R(_);h=P(se,"Nama"),se.forEach(k),p=U(T),g=S(T,"INPUT",{type:!0,class:!0}),w=U(T),N=S(T,"LABEL",{for:!0});var de=R(N);v=P(de,"Email"),de.forEach(k),A=U(T),I=S(T,"INPUT",{type:!0,class:!0}),j=U(T),B=S(T,"LABEL",{for:!0});var he=R(B);q=P(he,"Komentar"),he.forEach(k),G=U(T),K=S(T,"TEXTAREA",{name:!0,id:!0,cols:!0,class:!0,rows:!0}),R(K).forEach(k),n=U(T),m=S(T,"DIV",{});var me=R(m);a=S(me,"INPUT",{type:!0,class:!0}),me.forEach(k),T.forEach(k),fe.forEach(k),o.forEach(k),y=U(i),u&&u.l(i),E=te(),this.h()},h(){$(r,"class","judul bg-gray-500 text-white p-2"),$(_,"for",""),$(g,"type","text"),$(g,"class","inputan svelte-1gyqrm5"),g.required=!0,$(N,"for",""),$(I,"type","email"),I.required=!0,$(I,"class","inputan svelte-1gyqrm5"),$(B,"for",""),$(K,"name",""),$(K,"id",""),K.required=!0,$(K,"cols","30"),$(K,"class","inputan svelte-1gyqrm5"),$(K,"rows","10"),$(a,"type","submit"),a.value="Kirim",$(a,"class","bg-black cursor-pointer text-white px-3 py-1 rounded inline-block"),$(l,"action",""),$(l,"class","grid grid-cols-1 gap-2"),$(d,"class","isi p-2"),$(t,"class","rounded text-sm border border-gray-500 shadow")},m(i,o){X(i,t,o),b(t,r),b(r,s),b(t,c),b(t,d),b(d,l),b(l,_),b(_,h),b(l,p),b(l,g),V(g,e[0]),b(l,w),b(l,N),b(N,v),b(l,A),b(l,I),V(I,e[1]),b(l,j),b(l,B),b(B,q),b(l,G),b(l,K),V(K,e[2]),b(l,n),b(l,m),b(m,a),X(i,y,o),u&&u.m(i,o),X(i,E,o),C||(M=[x(g,"input",e[6]),x(I,"input",e[7]),x(K,"input",e[8]),x(l,"submit",Pe(e[4]))],C=!0)},p(i,[o]){o&1&&g.value!==i[0]&&V(g,i[0]),o&2&&I.value!==i[1]&&V(I,i[1]),o&4&&V(K,i[2]),i[3]?u?u.p(i,o):(u=Ie(i),u.c(),u.m(E.parentNode,E)):u&&(u.d(1),u=null)},i:W,o:W,d(i){i&&k(t),i&&k(y),u&&u.d(i),i&&k(E),C=!1,Y(M)}}}function st(e,t,r){let{slug:s}=t;Notification.requestPermission();let c,d,l,_;if(localStorage.dataKomentar){const v=JSON.parse(localStorage.dataKomentar);c=v.nama,d=v.email}async function h(){await Ee(be,{id:we,kunci:"tambah",nama:c,email:d,komentar:l,idnya:s})&&(localStorage.dataKomentar=JSON.stringify({nama:c,email:d}),r(2,l=""),p(),Notification.permission==="granted"&&new Notification("Komentar berhasil dikirim"))}async function p(){let v=await Ee(be,{id:we,kunci:"tampil",idnya:s});v=await v.json(),r(3,_=v)}p();function g(){c=this.value,r(0,c)}function w(){d=this.value,r(1,d)}function N(){l=this.value,r(2,l)}return e.$$set=v=>{"slug"in v&&r(5,s=v.slug)},[c,d,l,_,h,s,g,w,N]}class ht extends Ze{constructor(t){super(),Ye(this,t,st,ft,Te,{slug:5})}}export{ht as default};