import{An as e,Bt as t,Dn as n,Kt as r,On as i,n as a,r as o}from"./viewPackage-D3euzUt7.js";r(),t();var s=document.getElementById(`app`);function c(){e(s,i`
    <main class="view-open">
      <form class="view-open__card" novalidate>
        <h1 class="t-title-2">${n(`lock`,{size:22})} Tank görüntüleyici</h1>
        <p style="margin:0">Size gönderilen <b>.yama</b> dosyasını ve şifreyi girin.</p>
        <label class="field"><span class="field__label">Dosya</span><input type="file" name="dosya" required></label>
        <label class="field"><span class="field__label">Şifre</span><span class="field__box"><input type="password" name="sifre" autocomplete="off" required></span></label>
        <p role="alert" data-err style="margin:0;color:var(--red)" hidden></p>
        <button class="btn btn--primary btn--block" type="submit">Aç</button>
        <p class="muted" style="margin:0;font-size:14px">Dosya bu cihazdan dışarı çıkmaz, hiçbir yere yüklenmez. Sayfa kapanınca açılan veri silinir.</p>
      </form>
    </main>`);let t=s.querySelector(`form`),r=s.querySelector(`[data-err]`),o=t.querySelector(`button[type=submit]`),c=e=>{r.textContent=e,r.hidden=!1,o.disabled=!1,o.textContent=`Aç`};t.addEventListener(`submit`,async e=>{e.preventDefault();let n=t.elements.dosya.files[0];if(!n)return c(`Dosya seçin.`);if(!t.elements.sifre.value)return c(`Şifreyi girin.`);r.hidden=!0,o.disabled=!0,o.textContent=`Açılıyor…`;try{await l(await a(new Uint8Array(await n.arrayBuffer()),t.elements.sifre.value))}catch(e){c(e.message)}})}async function l({project:e,getBlob:t,logoDataUrl:n}){document.title=`${e.baslik.tankNo} · Tank görüntüleyici`;let r={getProject:async()=>e,getBlob:t,getLogo:async()=>n,markOpened:async e=>e,saveProject:async e=>e};await o(s,{id:e.id,goruntule:!0,musteri:!0,kaynak:r,onClose:()=>location.reload()})}c();