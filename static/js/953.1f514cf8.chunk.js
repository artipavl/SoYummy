"use strict";(self.webpackChunkso_yummy=self.webpackChunkso_yummy||[]).push([[953],{3953:function(n,e,t){t.r(e),t.d(e,{default:function(){return We}});var i=t(9439),o=t(2791);function r(){return r=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},r.apply(this,arguments)}var s=o.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},o.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),c=o.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},o.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function a(n){if(7===n.length)return n;for(var e="#",t=1;t<4;t+=1)e+=n[t]+n[t];return e}function d(n,e,t,i,o){return function(n,e,t,i,o){var r=(n-t)/(e-t);if(0===r)return i;if(1===r)return o;for(var s="#",c=1;c<6;c+=2){var a=parseInt(i.substr(c,2),16),d=parseInt(o.substr(c,2),16),l=Math.round((1-r)*a+r*d).toString(16);1===l.length&&(l="0"+l),s+=l}return s}(n,e,t,a(i),a(o))}var l=function(n){function e(e){n.call(this,e);var t=e.height,i=e.width,o=e.checked;this.t=e.handleDiameter||t-2,this.i=Math.max(i-t,i-(t+this.t)/2),this.o=Math.max(0,(t-this.t)/2),this.state={h:o?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.m=this.m.bind(this),this.M=this.M.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return n&&(e.__proto__=n),(e.prototype=Object.create(n&&n.prototype)).constructor=e,e.prototype.componentDidMount=function(){this.W=!0},e.prototype.componentDidUpdate=function(n){n.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},e.prototype.componentWillUnmount=function(){this.W=!1},e.prototype.I=function(n){this.H.focus(),this.setState({R:n,j:!0,B:Date.now()})},e.prototype.L=function(n){var e=this.state,t=e.R,i=e.h,o=(this.props.checked?this.i:this.o)+n-t;e.N||n===t||this.setState({N:!0});var r=Math.min(this.i,Math.max(this.o,o));r!==i&&this.setState({h:r})},e.prototype.U=function(n){var e=this.state,t=e.h,i=e.N,o=e.B,r=this.props.checked,s=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var c=Date.now()-o;(!i||c<250||r&&t<=s||!r&&t>=s)&&this.A(n),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},e.prototype.p=function(n){n.preventDefault(),"number"==typeof n.button&&0!==n.button||(this.I(n.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},e.prototype.v=function(n){n.preventDefault(),this.L(n.clientX)},e.prototype.g=function(n){this.U(n),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},e.prototype.k=function(n){this.X=null,this.I(n.touches[0].clientX)},e.prototype.m=function(n){this.L(n.touches[0].clientX)},e.prototype.M=function(n){n.preventDefault(),this.U(n)},e.prototype.$=function(n){Date.now()-this.l>50&&(this.A(n),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},e.prototype.C=function(){this.u=Date.now()},e.prototype.D=function(){this.setState({j:!0})},e.prototype.O=function(){this.setState({j:!1})},e.prototype.S=function(n){this.H=n},e.prototype.T=function(n){n.preventDefault(),this.H.focus(),this.A(n),this.W&&this.setState({j:!1})},e.prototype.A=function(n){var e=this.props;(0,e.onChange)(!e.checked,n,e.id)},e.prototype.render=function(){var n=this.props,e=n.checked,t=n.disabled,i=n.className,s=n.offColor,c=n.onColor,a=n.offHandleColor,l=n.onHandleColor,h=n.checkedIcon,p=n.uncheckedIcon,u=n.checkedHandleIcon,m=n.uncheckedHandleIcon,f=n.boxShadow,x=n.activeBoxShadow,g=n.height,b=n.width,v=n.borderRadius,k=function(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&-1===e.indexOf(i)&&(t[i]=n[i]);return t}(n,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),y=this.state,j=y.h,w=y.N,Z=y.j,S={position:"relative",display:"inline-block",textAlign:"left",opacity:t?.5:1,direction:"ltr",borderRadius:g/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},P={height:g,width:b,margin:Math.max(0,(this.t-g)/2),position:"relative",background:d(j,this.i,this.o,s,c),borderRadius:"number"==typeof v?v:g/2,cursor:t?"default":"pointer",WebkitTransition:w?null:"background 0.25s",MozTransition:w?null:"background 0.25s",transition:w?null:"background 0.25s"},V={height:g,width:Math.min(1.5*g,b-(this.t+g)/2+1),position:"relative",opacity:(j-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:w?null:"opacity 0.25s",MozTransition:w?null:"opacity 0.25s",transition:w?null:"opacity 0.25s"},M={height:g,width:Math.min(1.5*g,b-(this.t+g)/2+1),position:"absolute",opacity:1-(j-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:w?null:"opacity 0.25s",MozTransition:w?null:"opacity 0.25s",transition:w?null:"opacity 0.25s"},T={height:this.t,width:this.t,background:d(j,this.i,this.o,a,l),display:"inline-block",cursor:t?"default":"pointer",borderRadius:"number"==typeof v?v-1:"50%",position:"absolute",transform:"translateX("+j+"px)",top:Math.max(0,(g-this.t)/2),outline:0,boxShadow:Z?x:f,border:0,WebkitTransition:w?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:w?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:w?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},C={height:this.t,width:this.t,opacity:Math.max(2*(1-(j-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:w?null:"opacity 0.25s",MozTransition:w?null:"opacity 0.25s",transition:w?null:"opacity 0.25s"},O={height:this.t,width:this.t,opacity:Math.max(2*((j-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:w?null:"opacity 0.25s",MozTransition:w?null:"opacity 0.25s",transition:w?null:"opacity 0.25s"};return o.createElement("div",{className:i,style:S},o.createElement("div",{className:"react-switch-bg",style:P,onClick:t?null:this.T,onMouseDown:function(n){return n.preventDefault()}},h&&o.createElement("div",{style:V},h),p&&o.createElement("div",{style:M},p)),o.createElement("div",{className:"react-switch-handle",style:T,onClick:function(n){return n.preventDefault()},onMouseDown:t?null:this.p,onTouchStart:t?null:this.k,onTouchMove:t?null:this.m,onTouchEnd:t?null:this.M,onTouchCancel:t?null:this.O},m&&o.createElement("div",{style:C},m),u&&o.createElement("div",{style:O},u)),o.createElement("input",r({},{type:"checkbox",role:"switch","aria-checked":e,checked:e,disabled:t,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},k,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},e}(o.Component);l.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:s,checkedIcon:c,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56};var h=t(3329),p=function(n){var e=n.handleChange,t=n.checked;return(0,h.jsx)(l,{checked:t,onChange:e,onColor:"#8BAA36",offColor:"#EFEFEF",handleDiameter:22,uncheckedIcon:!1,checkedIcon:!1,boxShadow:"inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1)",activeBoxShadow:"inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1)",height:27,width:61,id:"material-switch"})};var u,m,f,x,g,b=t.p+"static/media/search_Icon.2d4b1287190860783c7dcfa23feb9e37.svg",v=t(168),k=t(1087),y=t(6444),j=y.ZP.nav(u||(u=(0,v.Z)(["\n@media ","{\n  display: none\n}\n\n@media ","{\n  display: block;\n  margin-left: 187px;\n}\n\n"])),(function(n){return n.theme.device.mobile}),(function(n){return n.theme.device.desktop})),w=y.ZP.ul(m||(m=(0,v.Z)(["\n  display: flex;\n\n"]))),Z=y.ZP.li(f||(f=(0,v.Z)(["\n  :not(:first-child) {\n    margin-left: 30px;\n}\n\n  &.active {\n    color: ",";\n  }\n\n"])),(function(n){return n.theme.colors.accent})),S=(0,y.ZP)(k.OL)(x||(x=(0,v.Z)(["\n  display: flex;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: ",";\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 1.6;\n  transition: color 250ms linear;\n    &:hover, &:focus {\n      color: ",";\n}\n"])),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.accent})),P=y.ZP.img(g||(g=(0,v.Z)(["\nfill: ",";\n  &:hover, &focus {\n    fill: ",";\n}\n"])),(function(n){return n.theme.colors.accentDark}),(function(n){return n.theme.colors.accent})),V=function(){return(0,h.jsx)(j,{children:(0,h.jsxs)(w,{children:[(0,h.jsx)(Z,{children:(0,h.jsx)(S,{to:"/categories",children:"Categories"})}),(0,h.jsx)(Z,{children:(0,h.jsx)(S,{to:"/add",children:"Add recipes"})}),(0,h.jsx)(Z,{children:(0,h.jsx)(S,{to:"/my",children:"My recipes"})}),(0,h.jsx)(Z,{children:(0,h.jsx)(S,{to:"/favorite",children:"Favorites"})}),(0,h.jsx)(Z,{children:(0,h.jsx)(S,{to:"/shopping-list",children:"Shopping list"})}),(0,h.jsx)(Z,{children:(0,h.jsx)(S,{to:"/search",children:(0,h.jsx)(P,{src:b,alt:"search icon",width:24})})})]})})},M=t(2706);var T,C,O,z,W,E,L,R,U,N,q,F=t.p+"static/media/cross.cb141696dc3bbdc6b872eb5777cf3281.svg",Y=t(3832),I=t(4962),B=t(4210),A=t(4955),K=y.ZP.section(T||(T=(0,v.Z)(["\n  box-sizing: border-box;\n  position: absolute;\n  background-color: #EBF3D4;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: 100% 100%;\n\n  /* right:50%;\n  bottom: 50%; */\n  top: 0;\n  left: 0;\n  /* transform: translateX(-50%);\n  transform: translateY(50%); */\n  /* transform:translate(-50%, -50%); */\n  min-height: 85vh;\n  /* min-width: 100vw; */\n  z-index: 999;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;\n\n  &.open {\n    opacity: 1;\n    visibility: visible;\n  }\n\n  @media ","{\n    padding: 18px 16px;\n    width: 375px;\n    background-image: url('","');\n    @media "," {\n      background-image: url('","');\n    }\n  }\n\n  @media ","{\n    padding: 18px 32px;\n    width: 768px;\n    background-image: url('","');\n    @media "," {\n      background-image: url('","');\n    }\n\n  }\n\n@media ","{\n    display: none\n}\n"])),(function(n){return n.theme.device.mobile}),Y,(function(n){return n.theme.retinaBackgroundImage}),I,(function(n){return n.theme.device.tablet}),B,(function(n){return n.theme.retinaBackgroundImage}),A,(function(n){return n.theme.device.desktop})),D=y.ZP.div(C||(C=(0,v.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),H=y.ZP.nav(O||(O=(0,v.Z)(["\n    @media "," {\n    margin-top: 124px;\n    hieght: 100%;\n  }\n\n"])),(function(n){return n.theme.device.mobile})),X=(0,y.ZP)(k.OL)(z||(z=(0,v.Z)(["\n"]))),G=y.ZP.img(W||(W=(0,v.Z)(["\n  @media "," {\n    width: 40px;\n    height: 40px;\n  }\n  @media "," {\n    width: 44px;\n    height: 44px;\n  }\n\n"])),(function(n){return n.theme.device.mobile}),(function(n){return n.theme.device.tablet})),Q=y.ZP.img(E||(E=(0,v.Z)(["\n  width: 32px;\n  height: 32px;\n"]))),J=y.ZP.ul(L||(L=(0,v.Z)(["\n"]))),_=y.ZP.li(R||(R=(0,v.Z)(["\n&.active {\n    color: ",";\n  }\n\n"])),(function(n){return n.theme.colors.accent})),$=(0,y.ZP)(k.OL)(U||(U=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: ",";\n  line-height: 1.6;\n  transition: color 250ms linear;\n\n    &:hover, &focus {\n      color: ",";\n    }\n\n    @media "," {\n      padding-top: 16px;\n      padding-bottom: 16px;\n      font-size: 18px;\n      font-weight: ",";\n\n    @media "," {\n      font-size: 24px;\n    }\n}\n\n"])),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.device.mobile}),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.device.tablet})),nn=y.ZP.img(N||(N=(0,v.Z)(["\n  fill: ",";\n  &:hover, &focus {\n  fill: ",";\n\n  @media "," {\n    width: 20px;\n    height: 20px;\n}\n\n\n"])),(function(n){return n.theme.colors.accentDark}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.device.mobile})),en=y.ZP.p(q||(q=(0,v.Z)(["\n  margin-left: 8px;\n"]))),tn=function(n){var e=n.openState,t=n.handleMenuClick,i=n.children;return(0,h.jsxs)(K,{className:e?"open":"",children:[(0,h.jsxs)(D,{children:[(0,h.jsx)(X,{to:"/main",children:(0,h.jsx)(G,{src:M.Z,alt:"logo",width:40})}),(0,h.jsx)("button",{onClick:t,children:(0,h.jsx)(Q,{src:F,alt:"close menu",width:32})})]}),(0,h.jsxs)(H,{children:[(0,h.jsxs)(J,{children:[(0,h.jsx)(_,{children:(0,h.jsx)($,{to:"/categories",children:"Categories"})}),(0,h.jsx)(_,{children:(0,h.jsx)($,{to:"/add",children:"Add recipes"})}),(0,h.jsx)(_,{children:(0,h.jsx)($,{to:"/my",children:"My recipes"})}),(0,h.jsx)(_,{children:(0,h.jsx)($,{to:"/favorite",children:"Favorites"})}),(0,h.jsx)(_,{children:(0,h.jsx)($,{to:"/shopping-list",children:"Shopping list"})}),(0,h.jsx)(_,{children:(0,h.jsxs)($,{to:"/search",children:[(0,h.jsx)(nn,{src:b,alt:"search icon",width:24,height:24}),(0,h.jsx)(en,{children:"Search"})]})})]}),(0,h.jsx)("div",{style:{position:"absolute",bottom:18},children:i})]})]})};var on=t.p+"static/media/logo-Lite-Icon.9658dffe8063ea286d86fbffd4bda942.svg",rn=t(5344);var sn,cn,an,dn,ln,hn,pn,un,mn,fn,xn=t.p+"static/media/burger.99954b2cb14dc7a13c5ef2896bf6c275.svg",gn=y.ZP.header(sn||(sn=(0,v.Z)(["\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  align-items: center;\n  margin: 0 auto;\n  z-index: 999;\n\n  @media "," {\n    width: 343px;\n    padding-right: 16px;\n    padding-left: 16px;\n    padding-top: 18px;\n  }\n  @media "," {\n    width: 704px;\n    padding-right: 32px;\n    padding-left: 32px;\n\n  }\n   @media "," {\n    width: 1240px;\n    padding-right: 100px;\n    padding-left: 100px;\n  }\n"])),(function(n){return n.theme.device.mobile}),(function(n){return n.theme.device.tablet}),(function(n){return n.theme.device.desktop})),bn=(0,y.ZP)(k.OL)(cn||(cn=(0,v.Z)(["\n"]))),vn=y.ZP.img(an||(an=(0,v.Z)(["\n@media ","{\n    display: none;\n}\n@media ","{\n    display: block;\n}\n\n"])),(function(n){return n.theme.device.mobile}),(function(n){return n.theme.device.tablet})),kn=y.ZP.img(dn||(dn=(0,v.Z)(["\n  @media ","{\n    display: none;\n}\n"])),(function(n){return n.theme.device.tablet})),yn=(y.ZP.p(ln||(ln=(0,v.Z)(["\n    font-size: 18px;\n\n    @media "," {\n      display: none;\n    }\n"])),(function(n){return n.theme.device.tablet})),y.ZP.div(hn||(hn=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n@media "," {\n  margin-left: 166px;\n}\n@media "," {\n  margin-left: 477px;\n}\n@media "," {\n  margin-left: 226px;\n}\n"])),(function(n){return n.theme.device.mobile}),(function(n){return n.theme.device.tablet}),(function(n){return n.theme.device.desktop}))),jn=y.ZP.img(pn||(pn=(0,v.Z)(["\n  @media "," {\n  width: 34px;\n  hieght: 34px;\n}\n @media "," {\n  width: 44px;\n  hieght: 44px;\n}\n"])),(function(n){return n.theme.device.mobile}),(function(n){return n.theme.device.tablet})),wn=y.ZP.p(un||(un=(0,v.Z)(["\n  @media "," {\n  margin-left: 14px;\n  font-size: 12px;\n  font-weight: ",";\n}\n"])),(function(n){return n.theme.device.mobile}),(function(n){return n.theme.fontWeights.bold})),Zn=y.ZP.div(mn||(mn=(0,v.Z)(["\n  @media "," {\n    display: none;\n  }\n  @media "," {\n    display: block;\n    margin-left: auto;\n}\n"])),(function(n){return n.theme.device.mobile}),(function(n){return n.theme.device.desktop})),Sn=y.ZP.button(fn||(fn=(0,v.Z)(["\n  @media "," {\n    width: 28px;\n    height: 28px;\n    margin-left: auto;\n  }\n  @media "," {\n  display: none;\n}\n"])),(function(n){return n.theme.device.mobile}),(function(n){return n.theme.device.desktop})),Pn=function(){var n=(0,o.useState)(!1),e=(0,i.Z)(n,2),t=e[0],r=e[1],s=(0,o.useState)(!1),c=(0,i.Z)(s,2),a=c[0],d=c[1],l=function(n){d(n)},u=function(){r(!t),t&&document.body.classList.add("modal-open"),t||document.body.classList.remove("modal-open")};return(0,h.jsxs)(gn,{children:[(0,h.jsxs)(bn,{to:"/main",children:[(0,h.jsx)(vn,{src:M.Z,alt:"logo"}),(0,h.jsx)(kn,{src:on,alt:"logo",width:40})]}),(0,h.jsx)(V,{}),(0,h.jsx)(tn,{openState:t,handleMenuClick:u,children:(0,h.jsx)(p,{handleChange:l,checked:a})}),(0,h.jsxs)(yn,{children:[(0,h.jsx)(jn,{src:rn,alt:"temp user icon",width:44}),(0,h.jsx)(wn,{children:"Olena"})]}),(0,h.jsx)(Sn,{onClick:u,children:(0,h.jsx)("img",{src:xn,alt:"open mobile menu",width:32})}),(0,h.jsx)(Zn,{children:(0,h.jsx)(p,{handleChange:l,checked:a})})]})};var Vn=t.p+"static/media/facebook-logo.bddff187a269cf93eeec0f7f6eb42b38.svg";var Mn=t.p+"static/media/twitter-logo.925913d1b32befb642c6f0521756109c.svg";var Tn=t.p+"static/media/youtube-logo.bad4e240b793422914a90d5f8f5f1678.svg";var Cn,On,zn,Wn,En,Ln,Rn,Un,Nn,qn,Fn,Yn,In,Bn,An,Kn,Dn,Hn,Xn,Gn,Qn,Jn,_n,$n,ne=t.p+"static/media/instagram-logo.2917ad3f5d671d720905e9543e48f661.svg",ee=t(5140),te=t(3727),ie=t(8808),oe=t(2570),re=t(2254),se=t(5324),ce=t(8308),ae=y.ZP.div(Cn||(Cn=(0,v.Z)(["\n  background-color: ",";\n  padding-top: 28px;\n  padding-bottom: 28px;\n  min-height: 50vh;\n\n    @media  "," {\n      padding-top: 50px;\n      padding-bottom: 24px;\n      padding-left: 32px;\n      padding-right: 32px;\n  }\n   @media  "," {\n      min-height: auto;\n      padding-top: 64px;\n      padding-bottom: 50px;\n      padding-left: 100px;\n      padding-right: 100px;\n  }\n\n\n"])),(function(n){return n.theme.colors.accentDark}),(function(n){return n.theme.device.tablet}),(function(n){return n.theme.device.desktop})),de=y.ZP.div(On||(On=(0,v.Z)(["\n  color: ",";\n\n    @media "," {\n      display: block;\n      margin: 0 auto;\n      width: 375px;\n  }\n\n    @media "," {\n      width: 704px;\n    }\n    @media "," {\n      width: 1240px;\n  }\n\n"])),(function(n){return n.theme.colors.textWhite}),(function(n){return n.theme.device.mobile}),(function(n){return n.theme.device.tablet}),(function(n){return n.theme.device.desktop})),le=y.ZP.div(zn||(zn=(0,v.Z)(["\n  display: block;\n\n  @media "," {\n    display: flex;\n    justify-content: start;\n  }\n"])),(function(n){return n.theme.device.tablet})),he=y.ZP.div(Wn||(Wn=(0,v.Z)(["\n  display: block;\n  @media "," {\n    display: flex;\n    justify-content: space-between;\n  }\n"])),(function(n){return n.theme.device.desktop})),pe=y.ZP.div(En||(En=(0,v.Z)(["\n  display: block;\n"]))),ue=(0,y.ZP)(k.OL)(Ln||(Ln=(0,v.Z)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    @media  "," {\n      justify-content: start;\n    }\n\n"])),(function(n){return n.theme.device.tablet})),me=y.ZP.img(Rn||(Rn=(0,v.Z)(["\n  @media  "," {\n    width: 44px;\n    height: 44px;\n  }\n"])),(function(n){return n.theme.device.tablet})),fe=y.ZP.p(Un||(Un=(0,v.Z)(["\n  color: ",";\n  margin-left: 8px;\n  font-size: 18px;\n  font-weight: ",";\n\n  @media  "," {\n    font-size: 28px;\n    margin-left: 12px;\n  }\n\n"])),(function(n){return n.theme.colors.textWhite}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.device.tablet})),xe=y.ZP.ul(Nn||(Nn=(0,v.Z)(["\n\n  display: none;\n  @media "," {\n    display: block;\n    margin-top: 24px;\n  }\n  @media "," {\n    width: 418px;\n  }\n\n\n"])),(function(n){return n.theme.device.tablet}),(function(n){return n.theme.device.tablet})),ge=y.ZP.li(qn||(qn=(0,v.Z)(["\n  list-style-type: disc;\n  margin-left: 32px;\n  font-size: 14px;\n  letter-spacing: -0.02em;\n  line-height: 1.33;\n  &:not(:first-child) {\n    margin-top: 10px;\n  }\n  @media "," {\n    font-size: 18px;\n    &:not(:first-child) {\n    margin-top: 14px;\n    }\n  }\n"])),(function(n){return n.theme.device.desktop})),be=y.ZP.ul(Fn||(Fn=(0,v.Z)(["\n  margin-top: 32px;\n  text-align: center;\n  @media "," {\n    margin-top: 0;\n    text-align: start;\n    margin-left: 173px;\n  }\n  @media "," {\n    margin-left: 0;\n  }\n"])),(function(n){return n.theme.device.tablet}),(function(n){return n.theme.device.desktop})),ve=(0,y.ZP)(k.OL)(Yn||(Yn=(0,v.Z)(["\n  padding-top: 7px;\n  padding-bottom: 7px;\n  color: ",";\n  font-size: 14px;\n  transition: color 250ms linear;\n  &:hover, &:focus {\n    color: ","\n  }\n\n  .active{\n    color: ",";\n  }\n  @media "," {\n    padding-top: 10px;\n    padding-bottom: 10px;\n  }\n  @media "," {\n    margin-left: 159px;\n  }\n\n"])),(function(n){return n.theme.colors.textWhite}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.device.tablet}),(function(n){return n.theme.device.desktop})),ke=y.ZP.div(In||(In=(0,v.Z)(["\n  @media "," {\n    width: 340px;\n  }\n"])),(function(n){return n.theme.device.desktop})),ye=y.ZP.div(Bn||(Bn=(0,v.Z)(["\ndisplay: none;\n  @media "," {\n    display: block;\n    h4 {\n      font-size: 18px;\n      font-weight: 700;\n    }\n    p {\n      margin-top: 14px;\n      font-size: 14px;\n      line-height: 1.29;\n    }\n  }\n\n"])),(function(n){return n.theme.device.desktop})),je=y.ZP.form(An||(An=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 32px;\n  @media "," {\n    margin-top: 72px;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n  }\n  @media "," {\n    display: block;\n    margin-top: 28px;\n  }\n"])),(function(n){return n.theme.device.tablet}),(function(n){return n.theme.device.desktop})),we=y.ZP.input(Kn||(Kn=(0,v.Z)(["\n  box-sizing: border-box;\n  display: block;\n  margin: 0 auto;\n  padding: 0;\n  padding-left: 42px;\n  width: 204px;\n  height: 38px;\n  background-color: transparent;\n  background-image: url('","');\n  background-repeat: no-repeat;\n  background-position: 15px 13px;\n  background-size: 16px 12px;\n  color: inherit;\n  font-size: inherit;\n  border-radius: 6px;\n  border: 1px solid rgba(236, 236, 236, 0.16);\n\n  &::placeholder {\n    background-image: url('","') no-repeat;\n    font-size: 10px;\n    font-weight: 400;\n    color: ",";\n    opacity: 1;\n\n    @media "," {\n      font-size: 14px;\n    }\n\n    @media "," {\n      font-size: 18px;\n    }\n  }\n\n  @media "," {\n    margin: 0;\n    padding-left: 51px;\n    width: 259px;\n    height: 50px;\n    background-position: 15px 12px;\n    background-size: 20px 16px;\n    background-position: 18px 15px;\n  }\n  @media ","{\n    width: 100%;\n  }\n\n"])),ee.Z,ee.Z,(function(n){return n.theme.colors.textWhite}),(function(n){return n.theme.device.tablet}),(function(n){return n.theme.device.desktop}),(function(n){return n.theme.device.tablet}),(function(n){return n.theme.device.desktop})),Ze=y.ZP.button(Dn||(Dn=(0,v.Z)(["\n  display: block;\n  margin: 0 auto;\n  margin-top: 8px;\n  padding: 11px 71px;\n  font-size: 12px;\n  background-color: "," ;\n  border-radius: 6px;\n  transition: color 250ms linear;\n\n  &:hover, &:focus {\n    color: ","\n  }\n\n  @media "," {\n    margin-top: 0;\n    margin: 0;\n    margin-left: 12px;\n    padding: 16px 50px;\n    font-size: 16px;\n  }\n\n  @media "," {\n    margin-left: 0;\n    margin-top: 16px;\n    width: 100%;\n  }\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accentDark}),(function(n){return n.theme.device.tablet}),(function(n){return n.theme.device.desktop})),Se=y.ZP.ul(Hn||(Hn=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 44px;\n  @media "," {\n    margin-top: 38px;\n  }\n  @media "," {\n    margin-top: 41px;\n  }\n\n"])),(function(n){return n.theme.device.tablet}),(function(n){return n.theme.device.desktop})),Pe=y.ZP.li(Xn||(Xn=(0,v.Z)(["\n  cursor: pointer;\n  &:not(:first-child){\n    margin-left: 10px;\n  }\n\n"]))),Ve=(0,y.ZP)(k.OL)(Gn||(Gn=(0,v.Z)(["\n  color: white;\n"]))),Me=y.ZP.img(Qn||(Qn=(0,v.Z)(["\n fill: inherit;\n\n"]))),Te=(y.ZP.div(Jn||(Jn=(0,v.Z)(["\n\n"]))),y.ZP.div(_n||(_n=(0,v.Z)(["\n  padding-top: 28px;\n  padding-bottom: 28px;\n  background-color: ",";\n  background-image: url('","');\n  background-repeat: no-repeat;\n  background-position: 100% 100%;\n  background-size: 210px 172px;\n\n  @media "," {\n    background-image: url('","');\n  }\n\n  @media "," {\n    padding-top: 32px;\n    padding-bottom: 32px;\n    background-image: url('","');\n    background-size: 353px 290px;\n\n      @media "," {\n        background-image: url('","');\n      }\n  }\n  @media "," {\n    padding-top: 50px;\n    padding-bottom: 50px;\n    background-image: url('","');\n    background-size: 424px 348px;\n    @media "," {\n        background-image: url('","');\n      }\n  }\n\n"])),(function(n){return n.theme.colors.bgWhite}),te,(function(n){return n.theme.retinaBackgroundImage}),ie,(function(n){return n.theme.device.tablet}),oe,(function(n){return n.theme.retinaBackgroundImage}),re,(function(n){return n.theme.device.desktop}),se,(function(n){return n.theme.retinaBackgroundImage}),ce)),Ce=y.ZP.div($n||($n=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: ",";\n  font-size: 10px;\n\n  p:not(:first-child) {\n    margin-left: 14px;\n    @media "," {\n    margin-left: 28px;\n    }\n  }\n\n  @media "," {\n    font-size: 14px;\n  }\n\n"])),(function(n){return n.theme.colors.accentDark}),(function(n){return n.theme.device.tablet}),(function(n){return n.theme.device.tablet})),Oe=function(){var n=(0,o.useState)(""),e=(0,i.Z)(n,2),t=e[0],r=e[1],s=(0,o.useState)(!1),c=(0,i.Z)(s,2),a=c[0],d=c[1];return(0,h.jsxs)("footer",{children:[(0,h.jsx)(ae,{children:(0,h.jsxs)(de,{children:[(0,h.jsxs)(he,{children:[(0,h.jsxs)(le,{children:[(0,h.jsxs)(pe,{children:[(0,h.jsxs)(ue,{to:"/main",children:[(0,h.jsx)(me,{src:on,alt:"logo",width:32}),(0,h.jsx)(fe,{children:"So Yummy"})]}),(0,h.jsxs)(xe,{children:[(0,h.jsx)(ge,{children:(0,h.jsx)("p",{children:"Database of recipes that can be replenished"})}),(0,h.jsx)(ge,{children:(0,h.jsx)("p",{children:"Flexible search for desired and unwanted ingredients"})}),(0,h.jsx)(ge,{children:(0,h.jsx)("p",{children:"Ability to add your own recipes with photos"})}),(0,h.jsx)(ge,{children:(0,h.jsx)("p",{children:"Convenient and easy to use"})})]})]}),(0,h.jsx)("nav",{children:(0,h.jsxs)(be,{children:[(0,h.jsx)("li",{children:(0,h.jsx)(ve,{to:"/",children:"Ingredients"})}),(0,h.jsx)("li",{children:(0,h.jsx)(ve,{to:"/add",children:"Add recipes"})}),(0,h.jsx)("li",{children:(0,h.jsx)(ve,{to:"/my",children:"My recipes"})}),(0,h.jsx)("li",{children:(0,h.jsx)(ve,{to:"/favorite",children:"Favorite"})}),(0,h.jsx)("li",{children:(0,h.jsx)(ve,{to:"/shopping-list",children:"Shopping list"})})]})})]}),(0,h.jsxs)(ke,{children:[(0,h.jsxs)(ye,{children:[(0,h.jsx)("h4",{children:"Subscribe to our Newsletter"}),(0,h.jsx)("p",{children:"Subscribe up to our newsletter. Be in touch with latest news and special offers, etc."})]}),(0,h.jsxs)(je,{onSubmit:function(n){n.preventDefault(),d(!0),a&&(alert("Subscribed Successful"),r(""))},children:[(0,h.jsx)(we,{type:"email",id:"email",value:t,onChange:function(n){return r(n.target.value)},placeholder:"Enter your email address",required:!0}),(0,h.jsx)(Ze,{type:"submit",children:"Subscribe"})]})]})]}),(0,h.jsxs)(Se,{children:[(0,h.jsx)(Pe,{children:(0,h.jsx)(Ve,{to:"https://www.facebook.com/",target:"_blank",children:(0,h.jsx)(Me,{src:Vn,alt:"facebook-logo",width:20})})}),(0,h.jsx)(Pe,{children:(0,h.jsx)(Ve,{to:"https://www.youtube.com/",target:"_blank",children:(0,h.jsx)(Me,{src:Tn,alt:"youtube-logo",width:20})})}),(0,h.jsx)(Pe,{children:(0,h.jsx)(Ve,{to:"https://twitter.com/",target:"_blank",children:(0,h.jsx)(Me,{src:Mn,alt:"twitter-logo",width:20})})}),(0,h.jsx)(Pe,{children:(0,h.jsx)(Ve,{to:"https://www.instagram.com/",target:"_blank",children:(0,h.jsx)(Me,{src:ne,alt:"instagram-logo",width:20})})})]})]})}),(0,h.jsx)(Te,{children:(0,h.jsx)(de,{children:(0,h.jsxs)(Ce,{children:[(0,h.jsx)("p",{children:"\xa9 2023 All Rights Reserved."}),(0,h.jsx)("p",{children:"Terms of Service"})]})})})]})},ze=t(7689),We=function(n){n.children;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(Pn,{}),(0,h.jsx)(o.Suspense,{fallback:(0,h.jsx)("div",{children:"...Loading"}),children:(0,h.jsx)(ze.j3,{})}),(0,h.jsx)(Oe,{})]})}},5324:function(n,e,t){n.exports=t.p+"static/media/footerBG_Desktop.24e198c6d3d05c77b04b.webp"},8308:function(n,e,t){n.exports=t.p+"static/media/footerBG_Desktop@2x.02f799649c1c099632aa.webp"},2570:function(n,e,t){n.exports=t.p+"static/media/footerBG_Tablet.35cece3a57b557c83047.webp"},2254:function(n,e,t){n.exports=t.p+"static/media/footerBG_Tablet@2x.d6c00a70924f0ce22d47.webp"},3727:function(n,e,t){n.exports=t.p+"static/media/footerBG_mobile.e193c6212e48344ae5e2.webp"},8808:function(n,e,t){n.exports=t.p+"static/media/footerBG_mobile@2x.1ac0affd2e63241c6bf2.webp"},3832:function(n,e,t){n.exports=t.p+"static/media/menuBG_Mobile.95c4b4c9bc3dbc0161fe.webp"},4962:function(n,e,t){n.exports=t.p+"static/media/menuBG_Mobile@2x.cdc16ca5e4843eaecc03.webp"},4210:function(n,e,t){n.exports=t.p+"static/media/menuBG_Tablet.de5c9a470d5a5c930761.webp"},4955:function(n,e,t){n.exports=t.p+"static/media/menuBG_Tablet@2x.4634bf88aaa193891cd6.webp"},5344:function(n){n.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=953.1f514cf8.chunk.js.map