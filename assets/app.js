const d=document.querySelector('#search'),q=document.querySelector('#q'),r=document.querySelector('#results'),lang=document.documentElement.lang||'en',root=lang==='ja'?'../':'';let data=[];fetch(root+'assets/search-index.json').then(x=>x.json()).then(x=>data=x.filter(y=>y.lang===lang));document.querySelector('.search-open')?.addEventListener('click',()=>{d.showModal();q.focus()});document.addEventListener('keydown',e=>{if(e.key==='/'&&!['INPUT','TEXTAREA'].includes(document.activeElement.tagName)){e.preventDefault();d.showModal();q.focus()}if(e.key==='Escape'&&d.open)d.close()});q?.addEventListener('input',()=>{let s=q.value.toLowerCase().trim(),none=lang==='ja'?'該当する概念がありません。より広い語句をお試しください。':'No matching concept. Try a broader phrase.';r.innerHTML=s?data.filter(x=>Object.values(x).join(' ').toLowerCase().includes(s)).map(x=>`<a href="${x.slug}${lang==='ja'?'-ja':''}.html"><strong>${x.title}</strong><small>${x.question}</small></a>`).join('')||`<p>${none}</p>`:''});document.querySelector('.menu')?.addEventListener('click',()=>document.querySelector('.navlinks').classList.toggle('open'));
(function(){
  const lang=document.documentElement.lang||'en';
  const nav=document.querySelector('.top nav');
  if(!nav||document.getElementById('l30-theme-select')) return;
  const box=document.createElement('div');
  box.className='l30-theme-control';
  box.setAttribute('role','group');
  box.setAttribute('aria-label',lang==='ja'?'表示設定':'Display settings');
  box.innerHTML=
    '<button type="button" id="l30-back" aria-label="'+(lang==='ja'?'Wiki内で戻る':'Back within Wiki')+'">'+(lang==='ja'?'← 戻る':'← Back')+'</button>'+
    '<button type="button" id="l30-reload" aria-label="'+(lang==='ja'?'再読み込み':'Reload')+'">↻</button>'+
    '<label for="l30-theme-select">'+(lang==='ja'?'表示':'Theme')+'</label>'+
    '<select id="l30-theme-select" aria-label="'+(lang==='ja'?'表示テーマ':'Color theme')+'">'+
      '<option value="auto">'+(lang==='ja'?'自動':'Auto')+'</option>'+
      '<option value="light">'+(lang==='ja'?'ライト':'Light')+'</option>'+
      '<option value="dark">'+(lang==='ja'?'ダーク':'Dark')+'</option>'+
    '</select>';
  const menu=nav.querySelector('.menu');
  nav.insertBefore(box,menu||nav.querySelector('.navlinks')||null);

  const root=document.documentElement;
  const select=box.querySelector('#l30-theme-select');
  const back=box.querySelector('#l30-back');
  const reload=box.querySelector('#l30-reload');
  const key='l30-color-theme';
  let saved='auto';
  try{
    const v=localStorage.getItem(key);
    if(v==='light'||v==='dark') saved=v;
  }catch(e){}
  function applyTheme(theme){
    if(theme==='light'||theme==='dark'){
      root.setAttribute('data-l30-theme',theme);
      try{localStorage.setItem(key,theme)}catch(e){}
    }else{
      root.removeAttribute('data-l30-theme');
      try{localStorage.removeItem(key)}catch(e){}
    }
  }
  select.value=saved;
  applyTheme(saved);
  select.addEventListener('change',()=>applyTheme(select.value));
  back.addEventListener('click',()=>{
    const wikiBase=location.origin+'/lumina30-wiki/';
    const ref=document.referrer||'';
    if(ref.startsWith(wikiBase)){
      history.back();
    }else{
      location.href=lang==='ja'?wikiBase+'ja/index-ja.html':wikiBase;
    }
  });
  reload.addEventListener('click',()=>location.reload());
})();
