(this.webpackJsonpcoby=this.webpackJsonpcoby||[]).push([[0],{10:function(A,e,t){},41:function(A,e,t){"use strict";t.r(e);var a=t(0),i=t.n(a),g=t(11),n=t.n(g),r=(t(10),t(17)),s=t.n(r),o=t(21),c=t(26),C=t(22),l=t(23),I=t(28),h=t(25),B=i.a.createContext(),j=t(1),Q=function(A){A.imgSrc,A.onImgChange;var e=Object(a.useContext)(B),t=e.src,i=e.setImage;return Object(j.jsx)("div",{className:"img-box-wrapper",children:Object(j.jsxs)("div",{className:"img-box",children:[Object(j.jsx)("img",{alt:"",src:t?URL.createObjectURL(t):""}),Object(j.jsx)("input",{name:"file-dropbox",type:"file",accept:".png, .jpeg, .jpg",onChange:function(A){i(A.target.files[0])}})]})})},u=t(27),w=i.a.createContext(),E=function(A){var e=A.id,t=Object(a.useContext)(w).setMatrixValue;return Object(j.jsx)("input",{type:"number",step:"0.1",className:"matrix-grid-tile",onChange:function(A){return t(A.target.value,e[0],e[1])}})},D=function(A){return{gridTemplateRows:"1fr ".repeat(A),gridTemplateColumns:"1fr ".repeat(A)}},b=function(A){var e=A.gridSize,t=Object(a.useState)(1),i=Object(u.a)(t,2),g=i[0],n=i[1];Object(a.useEffect)((function(){n(e||1)}),[e]);for(var r=Object(a.useContext)(w).matrix,s=[],o=0;o<r.length;o++)for(var c=0;c<r.length;c++)s.push(Object(j.jsx)(E,{id:[o,c],className:"matrix-grid-tile"},"grid-tile".concat(o,"-").concat(c)));return Object(j.jsx)("div",{className:"matrix-grid-wrapper",children:Object(j.jsx)("div",{className:"matrix-grid",style:D(g),children:s})})},d=function(A){var e=A.onChange,t=A.value,a=A.min,i=A.max;return Object(j.jsxs)("div",{className:"grid-selector",children:[Object(j.jsx)("button",{className:"btn",onClick:function(){t>a&&e(t-2)},children:"-"}),Object(j.jsx)("h3",{children:t}),Object(j.jsx)("button",{className:"btn",onClick:function(){t<i&&e(t+2)},children:"+"})]})},m=function(A){for(var e=A.onChange,t=A.options,a=A.defaultMode,i=[],g=0;g<t.length;g++)i.push(Object(j.jsx)("option",{className:"mode-selector-option",children:t[g]},t[g]));return Object(j.jsxs)("div",{className:"mode-selector",children:[Object(j.jsx)("h4",{children:"Select Mode:"}),Object(j.jsx)("select",{defaultValue:a,onChange:function(A){e(A.target.value)},className:"mode-selector-select",children:i})]})},O=function(A){var e=A.gridSize,t=A.setGridSize,a=A.onModeChange,i=A.defaultMode;return Object(j.jsxs)("div",{className:"matrix-box",children:[Object(j.jsx)(m,{defaultMode:i,options:["Convolution","Greyscale","Filter"],onChange:function(A){return a(A)}}),Object(j.jsx)(b,{gridSize:e}),Object(j.jsxs)("h2",{children:[e,"x",e]}),Object(j.jsx)(d,{onChange:t,value:e,min:1,max:7})]})},p=function(){return Object(j.jsx)("div",{className:"intro-wrapper",children:Object(j.jsx)("div",{className:"intro-page",children:Object(j.jsx)("h1",{className:"main-heading",children:"Visualize the Math Behind Neural Networks."})})})},x=t.p+"static/media/cobylogo.48786a8b.png",M=t(13),F=function(){return Object(j.jsx)("div",{className:"navbar",children:Object(j.jsx)("div",{className:"nav-img-wrapper",children:Object(j.jsx)(M.b,{to:"/about",children:Object(j.jsx)("img",{alt:"coby logo",src:x})})})})},K=function(){return Object(j.jsxs)("div",{className:"homepage-wrapper",children:[Object(j.jsx)(F,{}),Object(j.jsx)(p,{})]})},k=t(14);k.a.configure();var Y=function(A){Object(I.a)(t,A);var e=Object(h.a)(t);function t(){var A;Object(C.a)(this,t);for(var a=arguments.length,i=new Array(a),g=0;g<a;g++)i[g]=arguments[g];return(A=e.call.apply(e,[this].concat(i))).state={gridSize:2,matrix:[],image:void 0,original_image:void 0,loading:!1,mode:"Convolution"},A.setGridSize=function(e){if(!(!e%2||e<1)){A.setState({gridSize:e});var t=A.createMatrixZeros(e);A.setState({matrix:t})}},A.createMatrixZeros=function(A){for(var e=[],t=0;t<A;t++){e.push([]);for(var a=0;a<A;a++)e[t].push(0)}return e},A.onModeChange=function(e){A.setState({mode:e})},A.setMatrixValue=function(e,t,a){var i=Object(c.a)(A.state.matrix);i[t][a]=parseInt(e),A.setState({matrix:i})},A.submitImage=Object(o.a)(s.a.mark((function e(){var t,a,i,g;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(A.state.image){e.next=2;break}return e.abrupt("return");case 2:return(t=new FormData).append("image",A.state.image),t.append("matrix",A.state.matrix),t.append("size",A.state.gridSize),t.append("mode",A.state.mode),A.setState({loading:!0}),e.next=10,fetch("/upload",{mode:"cors",method:"post",body:t}).catch((function(A){return k.a.error("There was an error connecting to the server")}));case 10:if(200===(a=e.sent).status){e.next=13;break}return e.abrupt("return",k.a.error("There was an error"));case 13:return i=JSON.parse(JSON.stringify(a)),e.prev=14,e.next=17,i.json();case 17:e.sent,e.next=26;break;case 20:return e.prev=20,e.t0=e.catch(14),e.next=24,a.blob();case 24:g=e.sent,A.setState({image:g});case 26:A.setState({loading:!1});case 27:case"end":return e.stop()}}),e,null,[[14,20]])}))),A.setImage=function(e){A.setState({image:e}),A.setState({original_image:e})},A.revertImage=function(){var e=A.state.original_image;A.setState({image:e})},A}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setGridSize(3)}},{key:"render",value:function(){return this.state.loading?Object(j.jsxs)("div",{className:"loading-box",children:[Object(j.jsx)("img",{src:"data:image/gif;base64,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",alt:"Loading"}),"Loading..."]}):Object(j.jsx)(B.Provider,{value:{src:this.state.image,setImage:this.setImage},children:Object(j.jsxs)(w.Provider,{value:{matrix:this.state.matrix,setMatrixValue:this.setMatrixValue},children:[Object(j.jsx)(K,{}),Object(j.jsxs)("div",{className:"main-content-wrapper",children:[Object(j.jsxs)("div",{className:"main-component-wrapper",children:[Object(j.jsx)(O,{defaultMode:this.state.mode,gridSize:this.state.gridSize,setGridSize:this.setGridSize,onModeChange:this.onModeChange}),Object(j.jsx)(Q,{})]}),Object(j.jsxs)("div",{className:"main-button-wrapper",children:[Object(j.jsx)("button",{className:"btn",onClick:this.submitImage,children:"Submit"}),Object(j.jsx)("button",{className:"btn",onClick:this.revertImage,children:"Revert"})]})]})]})})}}]),t}(a.Component),N=function(){return Object(j.jsxs)(i.a.Fragment,{children:[Object(j.jsx)(F,{}),Object(j.jsxs)("div",{className:"main-content",children:[Object(j.jsxs)("div",{className:"about-section",children:[Object(j.jsx)("h2",{className:"about-page-heading",children:"About COBY"}),Object(j.jsx)("p",{className:"about-page-paragraph",children:"Coby is an online image editing/matrix convolution visualizer tool. It was created using React.js and the Flask framework for python 3. The tool allows you to be able to manipulate images quickly and reactively with matrices. The tool accepts JPEG and PNG images and returns uncompressed .PNG format files (This is done to preserve quality)."})]}),Object(j.jsxs)("div",{className:"creator-section",children:[Object(j.jsx)("h2",{className:"about-page-heading",children:"About the Creator"}),Object(j.jsxs)("p",{className:"about-page-paragraph",children:["My name is ",Object(j.jsx)("a",{href:"https://saadkhalid.ca",children:"Saad Khalid"}),", I'm a high school student interested in machine learning and computational image processing. I created this web app as a side project to better understand the steps taken by CNN's (Convolutional Neural Networks) to extract features from images. This project is open source and there is a public ",Object(j.jsx)("a",{href:"https://github.com/Saadkhalid913/coby",children:"GitHub"})," repository that you can fork or contribute to."]})]}),Object(j.jsxs)("div",{className:"license-section",children:[Object(j.jsx)("h2",{className:"about-page-heading",children:"License"}),Object(j.jsxs)("p",{className:"about-page-paragraph",children:["This software is licensed under the ",Object(j.jsx)("a",{href:"https://www.mit.edu/~amini/LICENSE.md",children:"MIT licence"})]})]})]})]})},U=t(2);t(40);var G=function(){return Object(j.jsxs)(M.a,{children:[Object(j.jsx)(U.a,{path:"/about",component:N}),Object(j.jsx)(U.a,{path:"/",exact:!0,component:Y})]})};n.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(G,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.69f3c959.chunk.js.map