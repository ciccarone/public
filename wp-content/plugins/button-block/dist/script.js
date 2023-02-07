!function(){"use strict";var t=React,n=ReactDOM,o=function(t){var n=t.width,o=void 0===n?"0px":n,c=t.style,e=void 0===c?"solid":c,a=t.color,i=void 0===a?"#0000":a,l=t.side,r=void 0===l?"all":l,d=t.radius,u=void 0===d?"0px":d,s=function(t){var n=null==r?void 0:r.toLowerCase();return(null==n?void 0:n.includes("all"))||(null==n?void 0:n.includes(t))},v="0px"===o||!o,f="".concat(o," ").concat(e," ").concat(i);return"\n\t\t".concat(v?"":s("top")?"border-top: ".concat(f,";"):"","\n\t\t").concat(v?"":s("right")?"border-right: ".concat(f,";"):"","\n\t\t").concat(v?"":s("bottom")?"border-bottom: ".concat(f,";"):"","\n\t\t").concat(v?"":s("left")?"border-left: ".concat(f,";"):"","\n\t\t").concat(u?"border-radius: ".concat(u,";"):"","\n\t")},c=function(t){var n=t.color,o=void 0===n?"#333":n,c=t.bgType,e=void 0===c?"solid":c,a=t.bg,i=void 0===a?"#0000":a,l=t.gradient,r=void 0===l?"linear-gradient(135deg, #4527a4, #8344c5)":l;return"\n\t\t".concat(o?"color: ".concat(o,";"):"","\n\t\t").concat(r||i?"background: ".concat("gradient"===e?r:i,";"):"","\n\t")},e=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"box",o=t.shadow,c=void 0===o?[{hOffset:"0px",vOffset:"0px",blur:"0px",spreed:"0px",color:"#7090b0",isInset:!1}]:o,e="";return null==c||c.map((function(t,o){var a=t.hOffset,i=void 0===a?"0px":a,l=t.vOffset,r=void 0===l?"0px":l,d=t.blur,u=void 0===d?"0px":d,s=t.spreed,v=void 0===s?"0px":s,f=t.color,p=void 0===f?"#7090b0":f,g=t.isInset,b=void 0!==g&&g?"inset":"",m="".concat(i||""," ").concat(r||""," ").concat(u||""),x=o+1>=c.length?"":", ";e+="text"===n?"".concat(m," ").concat(p||"").concat(x):"".concat(m," ").concat(v||""," ").concat(p||""," ").concat(b).concat(x)})),e},a=function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=t.fontFamily,c=void 0===o?"Default":o,e=t.fontCategory,a=void 0===e?"sans-serif":e,i=t.fontVariant,l=void 0===i?400:i,r=t.fontWeight,d=void 0===r?400:r,u=t.isUploadFont,s=void 0===u||u,v=t.fontSize,f=void 0===v?15:v,p=t.fontStyle,g=void 0===p?"normal":p,b=t.textTransform,m=void 0===b?"none":b,x=t.textDecoration,h=void 0===x?"auto":x,y=t.lineHeight,w=void 0===y?"135%":y,R=t.letterSpace,E=void 0===R?"0px":R,I=function(t,n){return t?"".concat(n,": ").concat(t,";"):""},D="\n\t\t".concat(n&&c&&"Default"!==c?"font-family: '".concat(c,"', ").concat(a,";"):"","\n\t\t").concat(I(d,"font-weight"),"\n\t\t").concat(f?"font-size: ".concat(f,"px;"):"","\n\t\t").concat(I(g,"font-style"),"\n\t\t").concat(I(m,"text-transform"),"\n\t\t").concat(I(h,"text-decoration"),"\n\t\t").concat(I(w,"line-height"),"\n\t\t").concat(I(E,"letter-spacing"),"\n\t"),F=l&&400!==l?"400i"===l?":ital@1":null!=l&&l.includes("00i")?": ital, wght@1, ".concat(null==l?void 0:l.replace("00i","00")," "):": wght@".concat(l," "):"",L="Default"!==c&&c?"https://fonts.googleapis.com/css2?family=".concat(null==c?void 0:c.split(" ").join("+")).concat(F.replace(/ /g,""),"&display=swap"):"";return{styles:D.replace(/\s+/g," ").trim(),googleFontLink:s?L:""}},i=function(t){var n,i,l,r,d,u,s,v,f,p,g,b,m,x,h,y,w,R,E=t.attributes,I=t.clientId,D=E.isFullWidth,F=E.alignment,L=E.typography,O=E.colors,S=E.hovColors,k=E.padding,B=E.border,T=E.shadow;return React.createElement(React.Fragment,null,React.createElement("style",{dangerouslySetInnerHTML:{__html:"\n\t\t\t".concat(null!==(n=a(L))&&void 0!==n&&n.googleFontLink?"@import url(".concat(null===(i=a(L))||void 0===i?void 0:i.googleFontLink,");"):"","\n\n\t\t\t#btnButton-").concat(I,"{\n\t\t\t\ttext-align: ").concat(F,";\n\t\t\t}\n\t\t\t#btnButton-").concat(I," .btnButton{\n\t\t\t\t").concat((null===(l=a(L))||void 0===l?void 0:l.styles)||"font-size: 18px; font-weight: 600; text-decoration: none;","\n\t\t\t\t").concat(c(O)||"color: #fff; background-color: #4527a4;","\n\t\t\t\twidth: ").concat(D?"100%":"auto",";\n\t\t\t\tpadding: ").concat((r=k,d=r.side,u=void 0===d?2:d,s=r.vertical,v=void 0===s?"0px":s,f=r.horizontal,p=void 0===f?"0px":f,g=r.top,b=void 0===g?"0px":g,m=r.right,x=void 0===m?"0px":m,h=r.bottom,y=void 0===h?"0px":h,w=r.left,R=void 0===w?"0px":w,(2===u?"".concat(v," ").concat(p):"".concat(b," ").concat(x," ").concat(y," ").concat(R))||"10px 20px"),";\n\t\t\t\t").concat(o(B)||"border-radius: 5px;","\n\t\t\t\tbox-shadow: ").concat(e(T)||"none",";\n\t\t\t}\n\t\t\t#btnButton-").concat(I," .btnButton:hover{\n\t\t\t\t").concat(c(S)||"color: #fff; background-color: #8344c5;","\n\t\t\t}\n\t\t\t").replace(/\s+/g," ")}}))};document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".wp-block-btn-button").forEach((function(t){var o=JSON.parse(t.dataset.attributes);(0,n.render)(React.createElement(React.Fragment,null,React.createElement(i,{attributes:o,clientId:o.cId}),React.createElement(l,{attributes:o})),t),null==t||t.removeAttribute("data-attributes")}))}));var l=function(n){var o=n.attributes,c=o.text,e=o.url,a=o.target,i=o.tooltip,l=o.isDownload,r=o.isUpIcon,d=o.icon,u=o.upIcon,s=o.animationType,v=o.animationDuration,f=(0,t.useRef)(null);return(0,t.useEffect)((function(){var t,n,o;l?null==f||null===(t=f.current)||void 0===t||t.setAttribute("download",""):null==f||null===(n=f.current)||void 0===n||n.removeAttribute("download"),null===(o=window.AOS)||void 0===o||o.init()}),[]),React.createElement("a",{className:"btnButton","data-aos":s,"data-aos-duration":1e3*v,href:e,target:a,rel:"noopener noreferrer",tooltip:i,position:"top",ref:f},r&&(null==u?void 0:u.url)&&React.createElement("img",{src:null==u?void 0:u.url,alt:null==u?void 0:u.alt}),!r&&(null==d?void 0:d.class)&&React.createElement("i",{className:null==d?void 0:d.class}),React.createElement("span",{className:"btnText",dangerouslySetInnerHTML:{__html:c}}))}}();
//# sourceMappingURL=script.js.map