import{e as l,S as k,i as f,s as b}from"./index.b9ded43e.js";let i="8fbf69c3daa49234acc91d6e1d97774c",s="https://excalibur.primasolutions.my.id/sql.php",p=new Date,u=p.getFullYear();var o=new Date,w=new Date(o.getFullYear(),0,1),y=o-w,r=Math.ceil(y/(1e3*60*60*24*7));let t;async function h({judul:e,tipe:a}){t=await l(s,{id:i,kunci:"cek",judul:e,pekan:r,tahun:u,tipe:a}),t=await t.json(),t?await l(s,{id:i,kunci:"update-dulu",banyak:+t[0].banyak+1,judul:e,pekan:r,tahun:u,tipe:a}):await l(s,{id:i,kunci:"tambah-baru",judul:e,banyak:"1",pekan:r,tahun:u,tipe:a})}function m(e,a,d){let{judul:n}=a;return h({judul:n,tipe:"Blog Zen Zen"}),e.$$set=c=>{"judul"in c&&d(0,n=c.judul)},[n]}class v extends k{constructor(a){super(),f(this,a,m,null,b,{judul:0})}}export{v as default};
