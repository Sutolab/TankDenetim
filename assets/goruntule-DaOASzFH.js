import{Mt as e,Rt as t,Sn as n,bn as r,n as i,r as a,yn as o}from"./viewPackage-CaWswhp0.js";t(),e();var s=document.getElementById(`app`);function c(){n(s,r`
    <main class="view-open">
      <form class="view-open__card" novalidate>
        <h1 class="t-title-2">${o(`lock`,{size:22})} Tank görüntüleyici</h1>
        <p style="margin:0">Size gönderilen <b>.yama</b> dosyasını ve şifreyi girin.</p>
        <label class="field"><span class="field__label">Dosya</span><input type="file" name="dosya" required></label>
        <label class="field"><span class="field__label">Şifre</span><span class="field__box"><input type="password" name="sifre" autocomplete="off" required></span></label>
        <p role="alert" data-err style="margin:0;color:var(--red)" hidden></p>
        <button class="btn btn--primary btn--block" type="submit">Aç</button>
        <p class="muted" style="margin:0;font-size:14px">Dosya bu cihazdan dışarı çıkmaz, hiçbir yere yüklenmez. Sayfa kapanınca açılan veri silinir.</p>
      </form>
    </main>`);let e=s.querySelector(`form`),t=s.querySelector(`[data-err]`),a=e.querySelector(`button[type=submit]`),c=e=>{t.textContent=e,t.hidden=!1,a.disabled=!1,a.textContent=`Aç`};e.addEventListener(`submit`,async n=>{n.preventDefault();let r=e.elements.dosya.files[0];if(!r)return c(`Dosya seçin.`);if(!e.elements.sifre.value)return c(`Şifreyi girin.`);t.hidden=!0,a.disabled=!0,a.textContent=`Açılıyor…`;try{await l(await i(new Uint8Array(await r.arrayBuffer()),e.elements.sifre.value))}catch(e){c(e.message)}})}async function l({project:e,getBlob:t,logoDataUrl:n}){document.title=`${e.baslik.tankNo} · Tank görüntüleyici`;let r={getProject:async()=>e,getBlob:t,getLogo:async()=>n,markOpened:async e=>e,saveProject:async e=>e};await a(s,{id:e.id,goruntule:!0,musteri:!0,kaynak:r,onClose:()=>location.reload()})}c();