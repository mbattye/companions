/* app.js
 * Renders all three pages (Home, World View, Curriculum) from the data in js/data/*.js.
 * Routing is hash-based: #/, #/world-view[/domain[/sub]], #/curriculum.
 */
(function(){
const {branches:Q, domains:D, links:LINKDATA, reading:READ, stages:STAGES, spiral:SP, spectrum:SPECTRUM, mixCategories:MIXCAT, resources:RES={}}=window.C;
const $=s=>document.querySelector(s);
const strip=s=>s.replace(/<[^>]+>/g,"");
const esc=s=>String(s).replace(/&(?!\w+;)/g,"&amp;");

/* ---------- indexes ---------- */
const DM={},SUB={};
D.forEach((d,i)=>{d.i=i;DM[d.id]=d;d.subs.forEach(s=>{s.dom=d.id;SUB[s.id]=s;});});
const LINKS={};
LINKDATA.forEach(({a,b,why:w})=>{if(!SUB[a]||!SUB[b])return;(LINKS[a]=LINKS[a]||[]).push({to:b,w});(LINKS[b]=LINKS[b]||[]).push({to:a,w});});
const PAIRS={};
LINKDATA.forEach(({a,b})=>{if(!SUB[a]||!SUB[b])return;const A=SUB[a].dom,B=SUB[b].dom;if(A===B)return;const k=[A,B].sort().join("|");PAIRS[k]=(PAIRS[k]||0)+1;});
const domLinked=id=>{const s=new Set();Object.keys(PAIRS).forEach(k=>{const[a,b]=k.split("|");if(a===id)s.add(b);if(b===id)s.add(a);});return s;};
const qc=d=>Q[d.branch].c;
const HOVER=matchMedia("(hover: hover)").matches;

/* ---------- temple ---------- */
(function(){
  const t=$("#temple");let p="";
  const line=(d,o)=>p+=`<path d="${d}" fill="none" stroke="currentColor" stroke-width="1" vector-effect="non-scaling-stroke"${o?` stroke-opacity="${o}"`:""}/>`;
  line("M70 92 L320 34 L570 92 Z");
  line("M96 88 L320 40 L544 88",.45);
  line("M62 92H578V100H62Z");
  line("M72 100H568V124H72Z");
  for(let x=110;x<=530;x+=42){line(`M${x-6} 100V124M${x-2} 100V124M${x+2} 100V124M${x+6} 100V124`,.55);}
  line("M72 124H568V142H72Z");
  line("M72 128H568",.4);
  [110,194,278,362,446,530].forEach(c=>{
    line(`M${c-22} 142H${c+22}V149H${c-22}Z`);
    line(`M${c-21} 149Q${c-19} 156 ${c-15} 158H${c+15}Q${c+19} 156 ${c+21} 149`);
    line(`M${c-15} 158L${c-18} 262M${c+15} 158L${c+18} 262`);
    [-2/3,-1/3,0,1/3,2/3].forEach(f=>line(`M${c+f*15} 160L${c+f*18} 261`,.32));
  });
  line("M56 262H584V270H56Z");line("M46 270H594V278H46Z");line("M36 278H604V286H36Z");
  line("M0 286H640",.3);
  t.innerHTML=p;
})();

/* ---------- router ---------- */
const PAGES=["home","world-view","curriculum"];
let curPage=null;
const S0={focus:null,sel:null};
let st={...S0};
function parse(){
  const parts=location.hash.replace(/^#\/?/,"").split("/").filter(Boolean);
  const page=PAGES.includes(parts[0])?parts[0]:"home";
  return{page,focus:page==="world-view"&&DM[parts[1]]?parts[1]:null,sel:page==="world-view"&&SUB[parts[2]]&&SUB[parts[2]].dom===parts[1]?parts[2]:null};
}
function go(focus,sel){location.hash="#/world-view"+(focus?"/"+focus:"")+(sel?"/"+sel:"");}
function route(){
  const r=parse();
  document.querySelectorAll(".page").forEach(el=>el.classList.toggle("on",el.id==="p-"+r.page));
  document.querySelectorAll("[data-nav]").forEach(a=>{if(a.dataset.nav===r.page)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current");});
  if(r.page!==curPage){window.scrollTo(0,0);curPage=r.page;}
  if(r.page==="world-view"){st={focus:r.focus,sel:r.sel};renderMap();renderPanel();renderCrumbs();}
  document.title=r.page==="home"?"Companions":(r.page==="world-view"?"World View · Companions":"Curriculum · Companions");
}
window.addEventListener("hashchange",route);
document.addEventListener("click",e=>{
  const a=e.target.closest('a[href^="#c-"]');
  if(a){e.preventDefault();const t=document.querySelector(a.getAttribute("href"));if(t)t.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"});}
});

/* ---------- map ---------- */
const svg=$("#map"),wrap=$("#mapWrap");
const cv=document.createElement("canvas").getContext("2d");
const tw=(t,fs,w)=>{cv.font=`${w||400} ${fs}px Spectral, Georgia, serif`;return cv.measureText(strip(t)).width;};
const ang=i=>(-90+(i+.5)*(360/D.length))*Math.PI/180;
const pt=(a,r,c)=>[c+Math.cos(a)*r,c+Math.sin(a)*r];
const f1=n=>Math.round(n*10)/10;

function label(x,y,a,txt,fs,off,cls,weight){
  const deg=a*180/Math.PI,right=Math.cos(a)>=-1e-6;
  const rot=right?deg:deg+180,tx=right?off:-off,anchor=right?"start":"end";
  return `<text class="${cls||"lbl"}" transform="translate(${f1(x)} ${f1(y)}) rotate(${f1(rot)})" x="${tx}" dy=".35em" text-anchor="${anchor}" font-size="${fs}"${weight?` font-weight="${weight}"`:""} style="paint-order:stroke;stroke:var(--ground);stroke-width:3px;stroke-linejoin:round">${esc(strip(txt))}</text>`;
}
function fitFs(texts,W,minR){
  let fs=W<480?11:W<700?12:13.5;
  const floor=W<480?9.5:10.5;
  while(fs>floor){const m=Math.max(...texts.map(t=>tw(t,fs)));if(W/2-m-22>=minR)return[fs,m];fs-=.5;}
  return[fs,Math.max(...texts.map(t=>tw(t,fs)))];
}
function arc(c,r,a0,a1){const[x0,y0]=pt(a0,r,c),[x1,y1]=pt(a1,r,c);return`M${f1(x0)} ${f1(y0)}A${r} ${r} 0 ${a1-a0>Math.PI?1:0} 1 ${f1(x1)} ${f1(y1)}`;}

function renderMap(){
  const W=Math.round(wrap.clientWidth);if(!W)return;
  const c=W/2;
  svg.setAttribute("viewBox",`0 0 ${W} ${W}`);svg.setAttribute("height",W);
  let h=`<g class="scene">`;
  if(!st.focus){
    const[fs,m]=fitFs(D.map(d=>d.short),W,W<480?52:90);
    const r1=Math.max(48,c-m-22);
    const step=2*Math.PI/D.length;
    // quadrant arcs
    ["org","the","pra","poi"].forEach(q=>{const ix=D.filter(d=>d.branch===q).map(d=>d.i);const a0=ang(Math.min(...ix))-step/2+.04,a1=ang(Math.max(...ix))+step/2-.04;h+=`<path d="${arc(c,r1,a0,a1)}" fill="none" stroke="${Q[q].c}" stroke-width="1.4" stroke-opacity=".55"/>`;});
    // chords
    Object.entries(PAIRS).forEach(([k,n])=>{
      const[a,b]=k.split("|");const[x0,y0]=pt(ang(DM[a].i),r1-6,c),[x1,y1]=pt(ang(DM[b].i),r1-6,c);
      h+=`<path class="chord" data-a="${a}" data-b="${b}" d="M${f1(x0)} ${f1(y0)}Q${c} ${c} ${f1(x1)} ${f1(y1)}" stroke-width="${f1(.6+n*.55)}"/>`;
    });
    // centre
    const rc=Math.min(r1*.3,46);
    h+=`<circle cx="${c}" cy="${c}" r="${f1(rc)}" fill="var(--ground)" stroke="var(--rule)"/>`;
    h+=`<text x="${c}" y="${c}" dy=".35em" text-anchor="middle" font-size="${f1(Math.max(11,rc*.36))}" style="font-family:var(--f-greek);fill:var(--bronze)">Κόσμος</text>`;
    D.forEach(d=>{
      const a=ang(d.i),[x,y]=pt(a,r1,c);
      h+=`<g class="node" data-dom="${d.id}" tabindex="0" role="button" aria-label="${esc(d.name)}"><circle cx="${f1(x)}" cy="${f1(y)}" r="16" fill="transparent"/><circle class="dot" cx="${f1(x)}" cy="${f1(y)}" r="${W<480?4:5}" fill="${qc(d)}"/>${label(x,y,a,d.short,fs,11)}</g>`;
    });
  } else {
    const d=DM[st.focus];
    const rc=Math.max(34,Math.min(W*.13,78));
    const[fs,m]=fitFs(d.subs.map(s=>s.name),W,rc+26);
    const rR=c-5;
    const r2=Math.max(rc+22,c-m-24);
    const n=d.subs.length;
    const sa=i=>(-90+(i+.5)*(360/n))*Math.PI/180;
    const subPos={};d.subs.forEach((s,i)=>{subPos[s.id]=pt(sa(i),r2,c);});
    const linked=domLinked(d.id);
    // rim
    h+=`<circle class="ring" cx="${c}" cy="${c}" r="${f1(rR)}" stroke-dasharray="1 5"/>`;
    // links
    const drawFrom=(sid,strong)=>{
      (LINKS[sid]||[]).forEach(l=>{
        const t=SUB[l.to],td=DM[t.dom];const[x0,y0]=subPos[sid];
        let x1,y1;
        if(t.dom===d.id){[x1,y1]=subPos[t.id];}else{[x1,y1]=pt(ang(td.i),rR,c);}
        const mx=(x0+x1)/2,my=(y0+y1)/2,k=t.dom===d.id?.35:1.12;
        const qx=c+(mx-c)*k,qy=c+(my-c)*k;
        h+=`<path class="link" d="M${f1(x0)} ${f1(y0)}Q${f1(qx)} ${f1(qy)} ${f1(x1)} ${f1(y1)}" stroke="${qc(td)}" stroke-opacity="${strong?.85:.22}" stroke-width="${strong?1.3:.9}"/>`;
      });
    };
    if(st.sel)drawFrom(st.sel,true);else d.subs.forEach(s=>drawFrom(s.id,false));
    // rim domains
    const selTargets=new Set(st.sel?(LINKS[st.sel]||[]).map(l=>SUB[l.to].dom):[]);
    D.forEach(o=>{
      if(o.id===d.id)return;
      const[x,y]=pt(ang(o.i),rR,c);const on=st.sel?selTargets.has(o.id):linked.has(o.id);
      h+=`<g class="node" data-dom="${o.id}" tabindex="0" role="button" aria-label="Open ${esc(o.name)}"><title>${esc(o.name)}</title><circle cx="${f1(x)}" cy="${f1(y)}" r="12" fill="transparent"/><circle class="dot" cx="${f1(x)}" cy="${f1(y)}" r="${on?4.5:2.5}" fill="${qc(o)}" fill-opacity="${on?1:.45}"/></g>`;
    });
    // centre
    h+=`<g class="node" data-home="1" tabindex="0" role="button" aria-label="Back to all domains"><circle cx="${c}" cy="${c}" r="${f1(rc)}" fill="var(--ground-2)" stroke="${qc(d)}" stroke-width="1.2"/>`;
    const words=d.short.split(" ");const lines=d.short.length>11&&words.length>1?[words.slice(0,Math.ceil(words.length/2)).join(" "),words.slice(Math.ceil(words.length/2)).join(" ")]:[d.short];
    const dfs=Math.max(13,Math.min(rc*.3,24));
    lines.forEach((ln,i)=>{h+=`<text x="${c}" y="${f1(c-(lines.length-1)*dfs*.55+i*dfs*1.05-dfs*.25)}" text-anchor="middle" dy=".35em" font-size="${f1(dfs)}" style="font-family:var(--f-display);font-weight:500;fill:var(--ink)">${esc(ln)}</text>`;});
    h+=`<text x="${c}" y="${f1(c+(lines.length)*dfs*.55+dfs*.15)}" text-anchor="middle" dy=".35em" font-size="${f1(dfs*.62)}" style="font-family:var(--f-greek);fill:var(--bronze)">${esc(d.greek)}</text></g>`;
    // subs
    d.subs.forEach((s,i)=>{
      const a=sa(i),[x,y]=subPos[s.id],on=st.sel===s.id;
      h+=`<g class="node${on?" sel":""}" data-sub="${s.id}" tabindex="0" role="button" aria-label="${esc(strip(s.name))}"><circle cx="${f1(x)}" cy="${f1(y)}" r="16" fill="transparent"/>`+
        (on?`<circle cx="${f1(x)}" cy="${f1(y)}" r="9" fill="none" stroke="${qc(d)}"/>`:"")+
        `<circle class="dot" cx="${f1(x)}" cy="${f1(y)}" r="${on?5:4}" fill="${qc(d)}"/>${label(x,y,a,s.name,fs,13,"lbl",on?500:0)}</g>`;
    });
  }
  h+="</g>";
  svg.innerHTML=h;
}

svg.addEventListener("click",e=>{
  const g=e.target.closest(".node");if(!g)return;
  if(g.dataset.home){go(null,null);return;}
  if(g.dataset.dom){go(g.dataset.dom,null);return;}
  if(g.dataset.sub){const same=st.sel===g.dataset.sub;go(st.focus,same?null:g.dataset.sub);
    if(!same)requestAnimationFrame(()=>{const p=$("#panel").getBoundingClientRect();if(p.top>innerHeight*.85)$("#panel").scrollIntoView({behavior:"smooth",block:"start"});});}
});
svg.addEventListener("keydown",e=>{if((e.key==="Enter"||e.key===" ")&&e.target.closest(".node")){e.preventDefault();e.target.closest(".node").dispatchEvent(new MouseEvent("click",{bubbles:true}));}});
svg.addEventListener("mouseover",e=>{
  if(st.focus)return;const g=e.target.closest(".node[data-dom]");if(!g)return;
  const id=g.dataset.dom,ln=domLinked(id);svg.classList.add("hovering");
  svg.querySelectorAll(".chord").forEach(p=>{const on=p.dataset.a===id||p.dataset.b===id;p.classList.toggle("on",on);if(on)p.style.stroke=qc(DM[id]);else p.style.stroke="";});
  svg.querySelectorAll(".node[data-dom]").forEach(n=>n.classList.toggle("dim",n.dataset.dom!==id&&!ln.has(n.dataset.dom)));
});
svg.addEventListener("mouseleave",()=>{svg.classList.remove("hovering");svg.querySelectorAll(".chord").forEach(p=>{p.classList.remove("on");p.style.stroke="";});svg.querySelectorAll(".dim").forEach(n=>n.classList.remove("dim"));});
svg.addEventListener("mouseout",e=>{if(!e.relatedTarget||!e.relatedTarget.closest||!e.relatedTarget.closest(".node[data-dom]")){if(!st.focus&&e.target.closest(".node[data-dom]"))svg.dispatchEvent(new Event("mouseleave"));}});

/* ---------- legend, crumbs, panel ---------- */
$("#legend").innerHTML=Object.values(Q).map(q=>`<div style="--c:${q.c}"><span class="gr">${q.gr}</span><span>${q.en} · ${q.note}</span></div>`).join("");

function renderCrumbs(){
  let h=`<button type="button" data-go="">All domains</button>`;
  if(st.focus)h+=`<span class="sep">/</span>`+(st.sel?`<button type="button" data-go="${st.focus}">${esc(DM[st.focus].short)}</button>`:`<span class="cur">${esc(DM[st.focus].short)}</span>`);
  if(st.sel)h+=`<span class="sep">/</span><span class="cur">${SUB[st.sel].name}</span>`;
  $("#crumbs").innerHTML=h;
}
$("#crumbs").addEventListener("click",e=>{const b=e.target.closest("[data-go]");if(b)go(b.dataset.go||null,null);});

function renderPanel(){
  const p=$("#panel");let h="";
  if(!st.focus){
    const nLinks=LINKDATA.length,nSubs=Object.keys(SUB).length;
    h=`<span class="gr big">Κόσμος</span><h2>The knowable world</h2>
    <p>${D.length} domains, ${nSubs} parts and ${nLinks} cross-connections. The ring runs clockwise from the top through the four branches. Instruments come first because every other branch depends on them. The lines inside show how strongly two domains are linked. ${HOVER?"Hover to trace them, or select a domain to open it.":"Select a domain to open it and see its links."}</p>
    <dl>${Object.values(Q).map(q=>`<div><dt style="color:${q.c}">${q.gr} · ${q.en}</dt><dd>${D.filter(d=>Q[d.branch]===q).map(d=>`<button class="back" style="text-transform:none;letter-spacing:0;font-family:var(--f-text);font-size:.95rem;color:var(--ink-2);border-bottom:1px dotted var(--rule);margin-right:10px" data-open="${d.id}">${esc(d.name)}</button>`).join(" ")}</dd></div>`).join("")}</dl>`;
  } else if(!st.sel){
    const d=DM[st.focus];
    h=`<span class="gr big" style="color:${qc(d)}">${d.greek}</span><h2>${esc(d.name)}</h2><p>${d.desc}</p>
    <dl><div><dt>Branch</dt><dd>${Q[d.branch].gr} · ${Q[d.branch].en}</dd></div><div><dt>In Aristotle</dt><dd>${d.aristotle}</dd></div><div><dt>Modern frontier</dt><dd>${d.frontier}</dd></div></dl>
    <ul class="subs" aria-label="Parts">${d.subs.map(s=>`<li><button type="button" data-sel="${s.id}"><span>${s.name}</span><small>${(LINKS[s.id]||[]).length} link${(LINKS[s.id]||[]).length===1?"":"s"}</small></button></li>`).join("")}</ul>${readList(d.id)}`;
  } else {
    const s=SUB[st.sel],d=DM[s.dom],ls=LINKS[s.id]||[];
    h=`<button class="back" type="button" data-open="${d.id}">← ${esc(d.name)}</button><h2>${s.name}</h2><p>${s.desc}</p>
    <div><dt class="caps" style="color:var(--stone);display:block;margin-bottom:8px">Study</dt><div class="topics">${s.topics.map(t=>`<span>${t}</span>`).join("")}</div></div>
    <div><dt class="caps" style="color:var(--stone);display:block;margin-bottom:8px">Cross-pollinations</dt>${ls.length?`<ul class="xlinks">${ls.map(l=>{const t=SUB[l.to],td=DM[t.dom];return`<li><button type="button" style="--c:${qc(td)}" data-open="${td.id}" data-sel="${t.id}"><b>${t.name} <small>· ${esc(td.short)}</small></b><span>${l.w}</span></button></li>`;}).join("")}</ul>`:`<p class="muted">No mapped links yet.</p>`}</div>${offRamps(s)}`;
  }
  p.innerHTML=h;
}
/* Off-ramps: curated pointers from resources.js, plus an automatic Wikipedia search. */
const RTYPE={video:"Watch",article:"Read",course:"Course",puzzle:"Puzzle",tool:"Tool"};
function offRamps(s){
  const list=RES[s.id]||[];
  const wiki=`https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(strip(s.name))}`;
  return`<div><dt class="caps" style="color:var(--stone);display:block;margin-bottom:8px">Off-ramps</dt><ul class="ramps">${list.map(r=>`<li><a href="${r.url}" target="_blank" rel="noopener noreferrer"><span class="rt">${RTYPE[r.type]||"Link"}</span><span><b>${r.title}</b>${r.by?` <span class="au">${r.by}</span>`:""}</span><span class="arr">↗</span></a></li>`).join("")}<li><a href="${wiki}" target="_blank" rel="noopener noreferrer"><span class="rt">Look up</span><span><b>${strip(s.name)}</b> <span class="au">Wikipedia</span></span><span class="arr">↗</span></a></li></ul><p class="muted" style="font-size:.82rem;margin-top:8px">Pointers, not a syllabus. Find and judge your own sources.</p></div>`;
}
function readList(id){
  const r=READ[id]||[];if(!r.length)return"";
  return`<div class="reading"><dt class="caps">Reading list</dt>${["Begin","Classic","Deeper"].map(t=>{const b=r.filter(x=>x.tier===t);return b.length?`<div class="tier"><span class="tier-n">${t}</span><ul>${b.map(x=>`<li><cite>${x.title}</cite>${x.author?` <span class="au">${x.author}</span>`:""}${x.note?`<small>${x.note}</small>`:""}</li>`).join("")}</ul></div>`:"";}).join("")}</div>`;
}
function panelClick(e){
  const b=e.target.closest("[data-open],[data-sel]");if(!b)return;
  const dom=b.dataset.open||st.focus;go(dom,b.dataset.sel||null);
}
$("#panel").addEventListener("click",panelClick);

/* ---------- index ---------- */
$("#index").innerHTML=Object.entries(Q).map(([k,q])=>`<div class="col" style="--c:${q.c}"><span class="gr">${q.gr} · <span class="caps" style="color:var(--stone)">${q.en}</span></span>${D.filter(d=>d.branch===k).map(d=>`<div><h4><button type="button" data-open="${d.id}">${esc(d.name)}</button></h4><p>${d.subs.map(s=>`<button type="button" data-open="${d.id}" data-sel="${s.id}">${s.name}</button>`).join(" · ")}</p></div>`).join("")}</div>`).join("");
$("#index").addEventListener("click",e=>{const b=e.target.closest("[data-open]");if(!b)return;go(b.dataset.open,b.dataset.sel||null);$("#crumbs").scrollIntoView({behavior:"smooth",block:"center"});});

/* ---------- curriculum ---------- */
$("#spectrum").innerHTML=SPECTRUM.map(([n,s,v,ours])=>`<div class="row${ours?" ours":""}"><div class="nm">${n}<small>${s}</small></div><div class="track"><span class="dot" style="left:${v}%"></span></div></div>`).join("")+`<div class="endrow"><span></span><div class="ends"><span>Rigid structure</span><span>Open curiosity</span></div></div>`;

const mixLabel=m=>MIXCAT.map(k=>k.n+" "+m[k.k]+"%").join(", ");
const mixSegs=(m,labels)=>MIXCAT.map(k=>`<i data-k="${k.k}"${m[k.k]<12?` class="sm"`:""} style="--c:${k.c};width:${m[k.k]}%">${labels?`<span>${m[k.k]}%</span>`:""}</i>`).join("");
const mixBox=m=>`<div class="mixbox"><div class="mix" aria-hidden="true">${mixSegs(m)}</div><ul class="mixlegend">${MIXCAT.map(k=>`<li data-k="${k.k}" style="--c:${k.c}">${esc(k.n)} <b>${m[k.k]}%</b></li>`).join("")}</ul></div>`;
$("#stages").innerHTML=STAGES.map((s,i)=>`<article class="stage" id="stage-${i}">
  <div class="num">${s.numeral}<small>Stage ${i+1}<br>${s.span}</small></div>
  <div>
    <div class="stage-head"><h3>${s.name}</h3><span class="gr">${s.greek}</span></div>
    <p class="aim">${s.aim}</p>
    <dl class="stage-body">
      <div class="full"><dt>Domains in focus</dt><dd class="chips">${s.domains.map(id=>`<a href="#/world-view/${id}" style="--c:${qc(DM[id])}">${esc(DM[id].short)}</a>`).join("")}</dd></div>
      <div><dt>What is studied</dt><dd>${s.what}</dd></div>
      <div><dt>How</dt><dd>${s.how}</dd></div>
      <div><dt>The machine’s role</dt><dd>${s.ai}</dd></div>
      <div class="proof"><dt>Proof of work</dt><dd>${s.proof}</dd></div>
      <div class="full"><dt>Reading for this stage</dt><dd><ul class="stage-read">${s.reading.map(b=>`<li><cite>${b.title}</cite>${b.author?` <span class="au">${b.author}</span>`:""}</li>`).join("")}</ul></dd></div>
      <div class="full"><dt>The week’s balance</dt><dd>${mixBox(s.mix)}</dd></div>
    </dl>
  </div></article>`).join("");

const DEPTH=["absent","touched","substantial","central"];
$("#spiral").innerHTML=`<thead><tr><th></th>${STAGES.map((s,j)=>`<th scope="col" data-c="${j}">${s.numeral}<small>${s.name}</small></th>`).join("")}</tr></thead><tbody>${D.map(d=>`<tr data-r="${d.id}" style="--c:${qc(d)}"><th scope="row"><a href="#/world-view/${d.id}" style="text-decoration:none">${esc(d.short)}</a></th>${SP[d.id].map((v,j)=>`<td data-c="${j}">${v?`<i class="d${v}"></i>`:""}<span class="vh">${DEPTH[v]}</span></td>`).join("")}</tr>`).join("")}</tbody>`;

$("#mixkey").innerHTML=MIXCAT.map(k=>`<button type="button" data-k="${k.k}" aria-pressed="false" style="--c:${k.c}">${esc(k.n)}</button>`).join("");
$("#mixtable").innerHTML=STAGES.map(s=>`<div class="r"><span class="nm"><span class="gr">${s.numeral}</span><small>${s.name}</small></span><div class="mix" role="img" aria-label="Stage ${s.numeral}, ${s.name}: ${esc(mixLabel(s.mix))}">${mixSegs(s.mix,true)}</div></div>`).join("");

/* Mix bars: hover previews a category, click or tap pins it. A stage card's scope is its own bar; the time table's is the whole section. */
function mixHl(scope,k){
  scope.classList.toggle("hl",!!k);
  scope.querySelectorAll("[data-k]").forEach(e=>{e.classList.toggle("on",e.dataset.k===k);if(e.tagName==="BUTTON")e.setAttribute("aria-pressed",String(!!k&&scope.dataset.pin===k));});
}
function mixWire(root,scopeSel){
  root.addEventListener("pointerover",e=>{if(e.pointerType!=="mouse")return;const el=e.target.closest("[data-k]");if(el)mixHl(el.closest(scopeSel),el.dataset.k);});
  root.addEventListener("pointerout",e=>{if(e.pointerType!=="mouse")return;const el=e.target.closest("[data-k]");if(!el||(e.relatedTarget&&el.contains(e.relatedTarget)))return;const s=el.closest(scopeSel);mixHl(s,s.dataset.pin||null);});
  root.addEventListener("click",e=>{const el=e.target.closest("[data-k]");if(!el)return;const s=el.closest(scopeSel),k=el.dataset.k;s.dataset.pin=s.dataset.pin===k?"":k;mixHl(s,s.dataset.pin||null);});
}
mixWire($("#stages"),".mixbox");
mixWire($("#c-time"),"#c-time");

/* Spiral: hover or tap a cell, a stage column or a domain row to read it in words. */
const spiral=$("#spiral"),sread=$("#spiralRead");
let sPin=null;
function spiralShow(t){
  spiral.querySelectorAll(".xr,.xc,.x").forEach(e=>e.classList.remove("xr","xc","x"));
  if(!t){sread.textContent=`${HOVER?"Hover over":"Tap"} a cell or a stage to read it in words.`;return;}
  const S=STAGES[t.c],d=DM[t.r];
  if(t.r)spiral.querySelector(`tr[data-r="${t.r}"]`).classList.add("xr");
  if(S)spiral.querySelectorAll(`[data-c="${t.c}"]`).forEach(e=>e.classList.add("xc"));
  if(d&&S){spiral.querySelector(`tr[data-r="${t.r}"] td[data-c="${t.c}"]`).classList.add("x");sread.innerHTML=`<b>${esc(d.short)}</b> at Stage ${S.numeral}, ${S.name}: <b>${DEPTH[SP[t.r][t.c]]}</b>.`;}
  else if(S){const by=v=>D.filter(x=>SP[x.id][t.c]===v).map(x=>esc(x.short)).join(", ")||"none";sread.innerHTML=`<b>Stage ${S.numeral}, ${S.name}.</b> Central: ${by(3)}. Substantial: ${by(2)}.`;}
  else sread.innerHTML=`<b>${esc(d.short)}</b>: ${SP[t.r].map((v,j)=>`${STAGES[j].numeral} ${DEPTH[v]}`).join(" · ")}.`;
}
const sTarget=e=>{const el=e.target.closest("td,th"),tr=el&&el.closest("tr");if(!tr)return null;const t={r:tr.dataset.r||null,c:el.dataset.c!=null?+el.dataset.c:null};return t.r||t.c!=null?t:null;};
spiral.addEventListener("pointerover",e=>{if(e.pointerType!=="mouse")return;const t=sTarget(e);if(t)spiralShow(t);});
spiral.addEventListener("mouseleave",()=>spiralShow(sPin));
spiral.addEventListener("click",e=>{if(e.target.closest("a"))return;const t=sTarget(e);if(!t)return;sPin=sPin&&sPin.r===t.r&&sPin.c===t.c?null:t;spiralShow(sPin);});
spiral.addEventListener("focusin",e=>{const t=sTarget(e);if(t)spiralShow(t);});
spiral.addEventListener("focusout",()=>spiralShow(sPin));
spiralShow(null);

/* ---------- library ---------- */
$("#library").innerHTML=D.map(d=>`<details class="shelf" style="--c:${qc(d)}"><summary><span class="gr">${d.greek}</span><b>${esc(d.name)}</b><small></small></summary>${readList(d.id)}<p><a class="back" href="#/world-view/${d.id}">Open ${esc(d.short)} in the World View →</a></p></details>`).join("");

/* ---------- boot ---------- */
let rt;new ResizeObserver(()=>{clearTimeout(rt);rt=setTimeout(()=>{if(curPage==="world-view")renderMap();},60);}).observe(wrap);
route();
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(()=>{if(curPage==="world-view")renderMap();});
/* Offline support once installed; not available (or needed) when opened from file:// */
if("serviceWorker" in navigator&&location.protocol!=="file:")navigator.serviceWorker.register("sw.js");
})();
