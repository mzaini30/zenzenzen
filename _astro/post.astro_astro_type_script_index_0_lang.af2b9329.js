const t=document.querySelector(".tombol-cari");t.addEventListener("click",()=>{const o=prompt("Cari apa?");o&&(window.location.href=`/cari?${encodeURIComponent(o)}`)});
