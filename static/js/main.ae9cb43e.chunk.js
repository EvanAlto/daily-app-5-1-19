(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(31)},25:function(e,t,a){},26:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(4),c=a.n(r),s=(a(25),a(17)),l=a(12),o=a(13),d=a(18),m=a(14),g=a(19),h=(a(26),a(6)),u=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={leftTextWidth:"0",rightTextWidth:"0",textAndImageStage:"exit",backgroundStage:"exit",index:0,activeTransition:!1},a.leftSpanRef=Object(n.createRef)(),a.rightSpanRef=Object(n.createRef)(),a}return Object(g.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({textAndImageStage:"enter"}),this.setState({leftTextWidth:this.leftSpanRef.current.clientWidth,rightTextWidth:this.rightSpanRef.current.clientWidth}),setInterval(function(){e.setState({textAndImageStage:"exit",backgroundStage:"enter",activeTransition:!0})},4200)}},{key:"componentDidUpdate",value:function(e,t){var a=this;"exit"===this.state.textAndImageStage&&(setTimeout(function(){a.setState({textAndImageStage:"enter",backgroundStage:"exit",index:a.props.sneakers[t.index+1]?t.index+=1:0})},1100),setTimeout(function(){a.setState({activeTransition:!1})},2100)),this.state.index!==t.index&&this.setState({leftTextWidth:this.leftSpanRef.current.clientWidth,rightTextWidth:this.rightSpanRef.current.clientWidth})}},{key:"render",value:function(){var e=this.state,t=e.leftTextWidth,a=e.rightTextWidth,n=e.textAndImageStage,r=e.backgroundStage,c=this.props.sneakers[this.state.index],s=c.backgroundColor,l=c.leftText,o=c.rightText,d=c.imageUrl,m=c.sku,g=c.release,h=c.nickname,u={right:"calc(50% - ".concat(t/2,"px")},f={right:"-".concat(t+25,"px")},x={left:"calc(50% - ".concat(a/2,"px)")},p={left:"-".concat(a+25,"px")},v=this.props.sneakers[this.state.index+1]?this.state.index+1:0;return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"main",style:{backgroundColor:s}},i.a.createElement("img",{className:"image ".concat("enter"===n&&"enter"),alt:"",src:"".concat(d)}),i.a.createElement("div",{className:"background ".concat("enter"===r&&"enter"),style:"enter"===r?{backgroundColor:this.props.sneakers[v].backgroundColor}:{}}),i.a.createElement("div",{className:"left-text"},i.a.createElement("span",{style:"exit"===n?f:u,ref:this.leftSpanRef},l)),i.a.createElement("div",{className:"right-text"},i.a.createElement("span",{style:"exit"===n?p:x,ref:this.rightSpanRef},o))),i.a.createElement("div",{className:"bottom"},i.a.createElement("div",{className:"detail"},i.a.createElement("div",null,i.a.createElement("span",{className:"enter"===n&&"enter"},m)),i.a.createElement("div",null,"SKU")),i.a.createElement("div",{className:"detail"},i.a.createElement("div",null,i.a.createElement("span",{className:"enter"===n&&"enter"},h)),i.a.createElement("div",null,"NICKNAME")),i.a.createElement("div",{className:"detail"},i.a.createElement("div",null,i.a.createElement("span",{className:"enter"===n&&"enter"},g)),i.a.createElement("div",null,"RELEASE"))))}}]),t}(n.Component),f=Object(h.b)(function(e){return Object(s.a)({},e)},null)(u);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=a(2),p=a(16),v={sneakers:[{leftText:"Yeezy",rightText:"700",imageUrl:"./yeezy-700.png",backgroundColor:"#fe703a",release:"2017",nickname:"Wave Runner",sku:"B75571"},{leftText:"Jordan",rightText:"Off-White",imageUrl:"./jordan-1.png",backgroundColor:"#ed1b23",release:"2017",nickname:"Off-White",sku:"AA3834 101"},{leftText:"Nike",rightText:"Adapt",imageUrl:"./nike-adapt.png",backgroundColor:"#7b7e80",release:"2019",nickname:"Self-lacing",sku:"AO2582 001"}]},k=Object(x.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;return(arguments.length>1?arguments[1]:void 0).type,e},Object(x.a)(Object(p.createLogger)()));c.a.render(i.a.createElement(h.a,{store:k},i.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.ae9cb43e.chunk.js.map