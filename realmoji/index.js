(function(m,u,l){"use strict";const f=[],{getCustomEmojiById:y}=u.findByStoreName("EmojiStore"),p=u.findByName("RowManager"),a=/https:\/\/cdn.discordapp.com\/emojis\/(\d+)\.\w+/;f.push(l.before("generate",p.prototype,function(s){let[r]=s;if(r.rowType!==1)return;let e=r.message.content;if(!e?.length)return;const n=e.match(a)?.index;if(n===void 0)return;const c=e.slice(n).trim().split(`
`);if(!c.every(function(o){return o.match(a)}))return;for(e=e.slice(0,n);e.indexOf("  ")!==-1;)e=e.replace("  ",` ${c.shift()} `);e=e.trim(),c.length&&(e+=` ${c.join(" ")}`);const t=r.message.embeds;for(let o=0;o<t.length;o++){const i=t[o];i.type==="image"&&i.url.match(a)&&t.splice(o--,1)}r.message.content=e,r.__realmoji=!0})),f.push(l.after("generate",p.prototype,function(s,r){let[e]=s;if(e.rowType!==1||e.__realmoji!==!0)return;const{content:n}=r.message;if(!Array.isArray(n))return;const c=n.every(function(t){return t.type==="link"&&t.target.match(a)||t.type==="text"&&t.content===" "});for(let t=0;t<n.length;t++){const o=n[t];if(o.type!=="link")continue;const i=o.target.match(a);if(!i)continue;const d=`${i[0]}?size=128`,h=y(i[1]);n[t]={type:"customEmoji",id:i[1],alt:h?.name??"<realmoji>",src:d,frozenSrc:d.replace("gif","webp"),jumboable:c?!0:void 0}}}));const g=function(){return f.forEach(function(s){return s()})};return m.onUnload=g,m})({},vendetta.metro,vendetta.patcher);