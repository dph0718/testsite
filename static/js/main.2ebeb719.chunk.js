(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(t,e,a){t.exports=a(34)},21:function(t,e,a){},23:function(t,e,a){},25:function(t,e,a){},29:function(t,e,a){},31:function(t,e,a){},34:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),o=a(14),r=a.n(o),l=(a(21),a(2)),s=a(4),c=a(6),p=a(5),h=a(7),u=(a(23),a(36)),m=a(38),d=a(37),f=function t(e,a,n,i,o,r,s){Object(l.a)(this,t),this.title=e,this.githubLink=a,this.alt=n,this.stackOverflowLink=i,this.portfolioImage=o,this.id=r,this.arrayposition=s},g=[new f("Gif Fisher","https://dph0718.github.io/fishy-gif/","Gif Fisher","blah","images/fishygif.png","1"),new f("Desktop Fighter","https://dph0718.github.io/The-Weak-Four/","Desktop Figher","blah","images/week4.png","2"),new f("Tiki Trivia","https://dph0718.github.io/Tiki-Trivia/","Tiki Trivia","blah","images/tikitrivia.png","3"),new f("Frender","https://github.com/dph0718/frender","Frender","blah","images/frender.png","4"),new f("Commodore Amiga Photo Carousel","https://github.com/dph0718/portfolio-react","You're lookin' at it, bud.","blah","images/amiga.png","5"),new f("Hangman","https://dph0718.github.io/Hangman-Game/","Hangman","blah","images/hangman.png","6"),new f("LIRI, the Cable Guy","https://github.com/dph0718/liri-node-app","Liri, the Cable Guy","blah","images/liri.png","7"),new f("Karmadillo","https://github.com/dph0718/Karmadillo","Karmadillo","blah","images/karmadillo.png","8"),new f("MeetPie","https://github.com/tspatek/Project-1","Meetpie","blah","images/meetpie.png","9")];var b=function(t,e,a){var n,i,o,r=t.length,l=2+Math.floor(r/2);if("front-row-item"==(i="front"===a?"front-row-item":"back-row-item")&&(n=72*e-95+"%",o=e),"back-row-item"==i){var s=Math.floor(l/2);n=-33*(o=(e+s+r)%r)+33*s+"%"}return{display:o===r-1?"none":"block",distance:n,className:i}},v=function(t){function e(){return Object(l.a)(this,e),Object(c.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.row,e=this.props.position,a=this.props.portfolioImage,n=this.props.alt,o=b(g,e,t),r=o.distance,l={className:o.className+" portfolio-card",left:r,color:"limegreen",display:o.display};return i.a.createElement("div",{className:l.className,style:l},i.a.createElement("h4",null,this.props.title),i.a.createElement("a",{href:this.props.githubLink,target:"_blank"},i.a.createElement("img",{src:a,alt:"good picture",title:n,className:"portfolio-pic"})))}}]),e}(n.Component);var w=function(t){return g.map(function(e){return i.a.createElement(v,{title:e.title,githubLink:e.githubLink,alt:e.alt,stackOverflowLink:e.stackOverflowLink,portfolioImage:e.portfolioImage,key:e.id,position:e.position,row:t})})},k={initializePositions:function(t){t.forEach(function(t,e){t.position=e})},increasePositions:function(t){t.forEach(function(e,a){e.position==t.length-1?e.position=0:e.position++})},decreasePositions:function(t){t.forEach(function(e,a){0==e.position?e.position=t.length-1:e.position--})}},y=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(c.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(i)))).state={carouselComponentsArray:[]},a.componentWillMount=function(){k.initializePositions(g),a.setState({carouselComponentsArray:g})},a.scrollLeft=function(){k.increasePositions(g),a.setState({carouselComponentsArray:g})},a.scrollRight=function(){k.decreasePositions(g),a.setState({carouselComponentsArray:g})},a}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return console.log(this),i.a.createElement("div",{className:"carousel-container"},i.a.createElement("h1",{id:"left-arrow",className:"nav-arrow",onClick:this.scrollLeft},"<"),i.a.createElement("h1",{id:"right-arrow",className:"nav-arrow",onClick:this.scrollRight},">"),i.a.createElement("div",{id:"carousel-back-row"},w("back")),i.a.createElement("div",{id:"carousel-front-row"},w("front")))}}]),e}(n.Component),x=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(c.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(i)))).state={},a}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"Folio"},i.a.createElement("img",{id:"old-computer",src:"images/oldcomputer.png"}),i.a.createElement(y,null))}}]),e}(n.Component),O=a(35),S=(a(25),function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(c.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(i)))).state={active:!1},a.toggleActive=function(){a.setState({active:!a.state.active})},a.textToHTML=function(){return{__html:a.props.text}},a}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t,e,a,n,o={cardStyle:{height:"70vh",width:"20vw",zIndex:"2",left:this.props.xDisplace},imageStyle:{backgroundImage:"url(".concat(this.props.backgroundImage,")"),height:"100%",width:"100%",filter:"blur(5px) sepia(90%) brightness(50%) hue-rotate(".concat(this.props.hue,")")},titleStyle:{fontSize:"2em",filter:"blur(0px)",textShadow:"8px 8px 12px black, -8px -8px 12px black"},textStyle:{fontSize:"1em",filter:"blur(3px)",fontWeight:"normal",textShadow:"1.5px 1.5px 1.5px black, -1.5px -1.5px 1.5px black"}},r={cardStyle:{height:"77vh",width:"22vw",zIndex:"4",left:this.props.xDisplace},imageStyle:{backgroundImage:"url(".concat(this.props.backgroundImage,")"),height:"100%",width:"100%",filter:"blur(1px) sepia(0%) brightness(140%) hue-rotate(0) "},titleStyle:{fontSize:"1.7em",filter:"blur(2px)",textShadow:"2px 2px 4px black, -2px -2px 4px black"},textStyle:{top:"30%",filter:"blur(0px)",fontSize:"1.5em",fontWeight:"bolder",textShadow:"8px 8px 8px rgba(2, 2, 2, 0.3), -8px -8px 8px rgba(2, 2, 2, 0.3)"}};return this.state.active?(t=r.cardStyle,e=r.imageStyle,a=r.titleStyle,n=r.textStyle):(t=o.cardStyle,e=o.imageStyle,a=o.titleStyle,n=o.textStyle),i.a.createElement(O.a,{to:this.props.link},i.a.createElement("div",{className:"Card ",id:this.props.id,onMouseEnter:this.toggleActive,onMouseLeave:this.toggleActive,style:t},i.a.createElement("div",{className:"backgroundDiv ",style:e}),i.a.createElement("h2",{className:"cardTitle ",style:a},this.props.title),i.a.createElement("p",{className:"cardText ",dangerouslySetInnerHTML:this.textToHTML(),style:n})))}}]),e}(n.Component)),E=function t(e,a,n,i,o){Object(l.a)(this,t),this.title=e,this.text=a,this.backgroundImage=n,this.link=i,this.id=o},j=[new E("Portfolio","See all the great <br> relevant things <br> I've done.","/testsite../../images/portfolioCompy.png","portfolio","card01"),new E("About Me",'Who is this<br><span> "<em>David</em>" <br>character?',"../images/david.png","aboutme","card02"),new E("Contact","Give me a holler.","../images/oldTelefono.png","card03"),new E("Other lives","See all the great<br>irrelevant things<br>I've done.","../images/meetpie.png","otherlives","card04")];var I=function(){return j.map(function(t,e){return i.a.createElement(S,{link:t.link,backgroundImage:t.backgroundImage,title:t.title,text:t.text,id:t.id,xDisplace:20+20*e+"%",hue:90*e+45+"deg"})})},C=(a(29),function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(c.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(i)))).state={},a}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"Home"},i.a.createElement("div",{id:"navCardContainer"},I()))}}]),e}(n.Component)),L=(a(31),function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(c.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(o)))).state={seconds:2,pullBarState:"down",interval:""},a.handleMouseEnter=function(){clearInterval(a.state.interval),"hidden"==a.state.pullBarState&&a.setState({pullBarState:"down"})},a.timedHide=function(){0===a.state.seconds&&(clearInterval(a.state.interval),a.setState({seconds:1,pullBarState:"hidden"}))},a.handleMouseLeave=function(){a.setState({seconds:1,interval:setInterval(function(){a.setState({seconds:a.state.seconds-1},a.timedHide)},1e3)})},a.stylePullBar=function(){0===a.state.seconds&&(clearInterval(a.state.interval),a.setState({seconds:1,pullBarState:"hidden"}))},a.doOurOptions=function(){return a.props.options.map(function(t){return i.a.createElement("div",null,i.a.createElement(O.a,{className:"navLink",to:t.link}," ",t.name," "))})},a}return Object(h.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.setState({interval:setInterval(function(){t.setState({seconds:t.state.seconds-1},t.timedHide)},1e3)})}},{key:"render",value:function(){var t;return"down"===this.state.pullBarState?t={position:"fixed",top:"-5%"}:"hidden"===this.state.pullBarState&&(t={position:"fixed",top:"-17%"}),i.a.createElement("div",{className:"pullDownBar",onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,style:t},this.doOurOptions())}}]),e}(n.Component)),M=function t(e,a){Object(l.a)(this,t),this.name=e,this.link=a},N=[new M("Home","home"),new M("Portfolio","portfolio"),new M("About Me","aboutme"),new M("Contact","contact"),new M("Other lives","extra")],A=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(c.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(i)))).state={},a}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(u.a,null,i.a.createElement("div",null,i.a.createElement(L,{options:N}),console.log(" DOTS DOTS!, with more dot dots."),i.a.createElement(m.a,null,i.a.createElement(d.a,{exact:!0,path:"/testsite(/|/home)",component:C}),i.a.createElement(d.a,{exact:!0,path:"/testsiteportfolio",component:x})))))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.2ebeb719.chunk.js.map