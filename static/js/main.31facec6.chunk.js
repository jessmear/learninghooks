(window["webpackJsonphooks-examples"]=window["webpackJsonphooks-examples"]||[]).push([[0],{10:function(e,t,r){},11:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(2),c=r.n(a),s=(r(10),r(4)),i=r(3);var l=function(e){var t=Object(n.useContext)(b);return o.a.createElement("div",{id:"header"},o.a.createElement("h1",{className:t.bigwords?"bigwords":"smallwords"},e.children))};var u=function(e){var t=Object(n.useContext)(b);return o.a.createElement("div",{id:"count"},o.a.createElement("p",{className:t.bigwords?"bigwords":"smallwords"},"The theme has been toggled ",t.count," times and is currently set to ",t.darktheme?"darktheme":"lighttheme","."))};function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(r,!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=function(e,t){switch(t.type){case"theme":return d({},e,{count:e.count+1,darktheme:!e.darktheme});case"bigwords":return d({},e,{bigwords:!e.bigwords});default:return e}},p={darktheme:!0,bigwords:!0,count:0},b=o.a.createContext();c.a.render(o.a.createElement((function(){var e=Object(n.useReducer)(m,p),t=Object(s.a)(e,2),r=t[0],a=t[1];return o.a.createElement(b.Provider,{value:r},o.a.createElement("div",{id:r.darktheme?"darktheme":"lighttheme",className:"MyHooksApp"},o.a.createElement(l,null,"My Super Awesome useContext and useReducer Hooks App"),o.a.createElement("button",{onClick:function(){a({type:"theme"})}},"Toggle Colors"),o.a.createElement(u,null),o.a.createElement("button",{onClick:function(){a({type:"bigwords"})}},"Toggle Text Size"),o.a.createElement("p",null,o.a.createElement("em",null,"useContext")," is a hook that allows the coder to create a named context, then surround a small or large peice of the app with thatContext.Provider, which also passes a value, which is (usually) a state object. That gives everything inside the provider, including other components, access to the state object."),o.a.createElement("p",null,"Components which inherit the context must import the context, and create a variable to hold the contents of the context. Then that variable can be used to display or otherwise use the contents of the context."),o.a.createElement("p",null,o.a.createElement("em",null,"useReducer")," is a hook that holds state and updates it through dispatches. The dispatch sends a type of action to the reducer, which uses a switch statement to decide what to do. It is good practice to use the 'default' case to just return the state.")))}),null),document.getElementById("root"))},5:function(e,t,r){e.exports=r(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.31facec6.chunk.js.map