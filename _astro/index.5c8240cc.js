function x(){}function q(e){return e()}function A(){return Object.create(null)}function b(e){e.forEach(q)}function T(e){return typeof e=="function"}function te(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let p;function ne(e,t){return p||(p=document.createElement("a")),p.href=t,e===p.href}function M(e){return Object.keys(e).length===0}let $=!1;function O(){$=!0}function P(){$=!1}function D(e,t,n,a){for(;e<t;){const c=e+(t-e>>1);n(c)<=a?e=c+1:t=c}return e}function H(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const i=[];for(let r=0;r<t.length;r++){const o=t[r];o.claim_order!==void 0&&i.push(o)}t=i}const n=new Int32Array(t.length+1),a=new Int32Array(t.length);n[0]=-1;let c=0;for(let i=0;i<t.length;i++){const r=t[i].claim_order,o=(c>0&&t[n[c]].claim_order<=r?c+1:D(1,c,m=>t[n[m]].claim_order,r))-1;a[i]=n[o]+1;const s=o+1;n[s]=i,c=Math.max(s,c)}const f=[],l=[];let u=t.length-1;for(let i=n[c]+1;i!=0;i=a[i-1]){for(f.push(t[i-1]);u>=i;u--)l.push(t[u]);u--}for(;u>=0;u--)l.push(t[u]);f.reverse(),l.sort((i,r)=>i.claim_order-r.claim_order);for(let i=0,r=0;i<l.length;i++){for(;r<f.length&&l[i].claim_order>=f[r].claim_order;)r++;const o=r<f.length?f[r]:null;e.insertBefore(l[i],o)}}function I(e,t){if($){for(H(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function ie(e,t,n){$&&!n?I(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function W(e){e.parentNode&&e.parentNode.removeChild(e)}function le(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function z(e){return document.createElement(e)}function k(e){return document.createTextNode(e)}function re(){return k(" ")}function ce(){return k("")}function ae(e,t,n,a){return e.addEventListener(t,n,a),()=>e.removeEventListener(t,n,a)}function ue(e){return function(t){return t.preventDefault(),e.call(this,t)}}function fe(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function F(e){return Array.from(e.childNodes)}function G(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function B(e,t,n,a,c=!1){G(e);const f=(()=>{for(let l=e.claim_info.last_index;l<e.length;l++){const u=e[l];if(t(u)){const i=n(u);return i===void 0?e.splice(l,1):e[l]=i,c||(e.claim_info.last_index=l),u}}for(let l=e.claim_info.last_index-1;l>=0;l--){const u=e[l];if(t(u)){const i=n(u);return i===void 0?e.splice(l,1):e[l]=i,c?i===void 0&&e.claim_info.last_index--:e.claim_info.last_index=l,u}}return a()})();return f.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,f}function J(e,t,n,a){return B(e,c=>c.nodeName===t,c=>{const f=[];for(let l=0;l<c.attributes.length;l++){const u=c.attributes[l];n[u.name]||f.push(u.name)}f.forEach(l=>c.removeAttribute(l))},()=>a(t))}function se(e,t,n){return J(e,t,n,z)}function K(e,t){return B(e,n=>n.nodeType===3,n=>{const a=""+t;if(n.data.startsWith(a)){if(n.data.length!==a.length)return n.splitText(a.length)}else n.data=a},()=>k(t),!0)}function oe(e){return K(e," ")}function de(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function _e(e,t){e.value=t??""}function he(e,t,n,a){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,a?"important":"")}let E;function h(e){E=e}const _=[],j=[],y=[],C=[],Q=Promise.resolve();let v=!1;function R(){v||(v=!0,Q.then(L))}function w(e){y.push(e)}const g=new Set;let d=0;function L(){if(d!==0)return;const e=E;do{try{for(;d<_.length;){const t=_[d];d++,h(t),V(t.$$)}}catch(t){throw _.length=0,d=0,t}for(h(null),_.length=0,d=0;j.length;)j.pop()();for(let t=0;t<y.length;t+=1){const n=y[t];g.has(n)||(g.add(n),n())}y.length=0}while(_.length);for(;C.length;)C.pop()();v=!1,g.clear(),h(e)}function V(e){if(e.fragment!==null){e.update(),b(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(w)}}const X=new Set;function Y(e,t){e&&e.i&&(X.delete(e),e.i(t))}function Z(e,t,n,a){const{fragment:c,after_update:f}=e.$$;c&&c.m(t,n),a||w(()=>{const l=e.$$.on_mount.map(q).filter(T);e.$$.on_destroy?e.$$.on_destroy.push(...l):b(l),e.$$.on_mount=[]}),f.forEach(w)}function U(e,t){const n=e.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ee(e,t){e.$$.dirty[0]===-1&&(_.push(e),R(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function me(e,t,n,a,c,f,l,u=[-1]){const i=E;h(e);const r=e.$$={fragment:null,ctx:[],props:f,update:x,not_equal:c,bound:A(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(i?i.$$.context:[])),callbacks:A(),dirty:u,skip_bound:!1,root:t.target||i.$$.root};l&&l(r.root);let o=!1;if(r.ctx=n?n(e,t.props||{},(s,m,...N)=>{const S=N.length?N[0]:m;return r.ctx&&c(r.ctx[s],r.ctx[s]=S)&&(!r.skip_bound&&r.bound[s]&&r.bound[s](S),o&&ee(e,s)),m}):[],r.update(),o=!0,b(r.before_update),r.fragment=a?a(r.ctx):!1,t.target){if(t.hydrate){O();const s=F(t.target);r.fragment&&r.fragment.l(s),s.forEach(W)}else r.fragment&&r.fragment.c();t.intro&&Y(e.$$.fragment),Z(e,t.target,t.anchor,t.customElement),P(),L()}h(i)}class pe{$destroy(){U(this,1),this.$destroy=x}$on(t,n){if(!T(n))return x;const a=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return a.push(n),()=>{const c=a.indexOf(n);c!==-1&&a.splice(c,1)}}$set(t){this.$$set&&!M(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}export{pe as S,ie as a,z as b,re as c,W as d,ce as e,se as f,F as g,K as h,me as i,oe as j,fe as k,I as l,de as m,x as n,le as o,he as p,_e as q,ae as r,te as s,k as t,ue as u,b as v,ne as w};