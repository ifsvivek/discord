(function(t,f,g,m,h,o,e,a,s){"use strict";const{ScrollView:v}=s.General,{FormSection:B,FormRow:n}=s.Forms;function D(){return e.React.createElement(v,null,e.React.createElement(B,null,e.React.createElement(n,{label:"Discord Server",leading:e.React.createElement(n.Icon,{source:a.getAssetIDByName("Discord")}),trailing:n.Arrow}),e.React.createElement(n,{label:"Reload DB",leading:e.React.createElement(n.Icon,{source:a.getAssetIDByName("ic_message_retry")}),onPress:async function(){return await c()?o.showToast("Reloaded DB",a.getAssetIDByName("check")):o.showToast("Failed to reload DB",a.getAssetIDByName("small"))}})))}const w=g.findByProps("default","getUserBannerURL");let r,l;const c=async function(){try{return r=await(await h.safeFetch("https://raw.githubusercontent.com/ifsvivek/discordpfp/main/main.json",{cache:"no-store"})).json(),r}catch(i){f.logger.error("Failed to fetch userBG data",i)}},R=async function(){if(await c(),!r)return o.showToast("Failed to load DB");l=m.after("getUserBannerURL",w,function(i){let[d]=i;const u=r?.find(function(E){return E.uid===d?.id});if(d?.banner===void 0&&u)return u.img})},y=function(){return l?.()},F=D;return t.fetchData=c,t.onLoad=R,t.onUnload=y,t.settings=F,t})({},vendetta,vendetta.metro,vendetta.patcher,vendetta.utils,vendetta.ui.toasts,vendetta.metro.common,vendetta.ui.assets,vendetta.ui.components);
