"use strict";(self.webpackChunkkeysee=self.webpackChunkkeysee||[]).push([[616],{7822:function(e,n,t){t.d(n,{Z:function(){return d}});var s=t(549),r="Notification_notification__SfISU",a="Notification_error__IBuVF",i="Notification_success__5+j+a",o="Notification_loaded__1vu5h",c="Notification_ModalOpen__7dETP",u="Notification_ModalClosed__ibOua",l=t(184),d=function(e){var n="";"error"===e.status&&(n=a),"success"===e.status&&(n=i),"loaded"===e.status&&(n=o);var t="".concat(r," ").concat(n);return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(s.Z,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:1e3,classNames:{enter:"",enterActive:c,exit:"",exitActive:u},children:(0,l.jsx)("div",{className:t,children:e.message?(0,l.jsx)("p",{children:e.message}):""})})})}},9616:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var s=t(2791),r=t(4165),a=t(5861),i=t(8152),o=t(1483),c=t(270),u=t(5932),l=t(512),d=t(5998),f=t(4880),h=t(9434),p=t(7822),m=t(8995),w=t(184),g=function(){var e=(0,h.I0)(),n=(0,f.k6)(),t=(0,s.useState)(!1),g=(0,i.Z)(t,2),v=g[0],x=g[1],j=(0,h.v9)((function(e){return e.notification.notification})),N=(0,h.v9)((function(e){return e.notification.showNotification})),_=(0,c.Z)((function(e){return e.trim().length>=6})),Z=_.value,k=_.hasError,y=_.isValid,b=_.valueChangeHandler,C=_.inputBlurHandler,H=_.reset,I=(0,c.Z)((function(e){return e.trim().length>=6})),P=I.value,S=I.hasError,O=I.isValid,T=I.valueChangeHandler,E=I.inputBlurHandler,B=I.reset,V=!1;(k||S)&&(V=!0);var A=!1;y&&Z===P&&(A=!0);return(0,w.jsxs)("div",{className:o.Z.container,children:[(0,w.jsxs)("form",{onSubmit:function(t){t.preventDefault();var s=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBD3lPiWWjbfHBAvg0UlC2IOXOzKqlhSTY",{method:"POST",body:JSON.stringify({password:Z,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}});case 2:if(e.sent.ok){e.next=5;break}throw new Error("Something went wrong...");case 5:x(!0),setTimeout((function(){n.replace("./login")}),4e3);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{s()}catch(i){e((0,m.j)("error",i.message))}},className:o.Z.loginForm,children:[!v&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("h1",{children:"Reset password"}),(0,w.jsxs)("div",{className:"inputsContainer",children:[(0,w.jsx)(d.Z,{enteredPassword:Z,passwordInputHasError:k,enteredPasswordIsValid:y,passwordChangedHandler:b,passwordBlurHandler:C,resetPasswordInput:H,placeholder:"New password"}),(0,w.jsx)(d.Z,{enteredPassword:P,passwordInputHasError:S,enteredPasswordIsValid:O,passwordChangedHandler:T,passwordBlurHandler:E,resetPasswordInput:B,placeholder:"Old password"})]}),V&&(0,w.jsx)("span",{className:o.Z.errorText,children:"Password can't be less then 6 symbols."}),(0,w.jsx)(l.Z,{title:"Confirm",type:"submit",disabled:!A})]}),v&&(0,w.jsx)("span",{className:o.Z.sucessReg,children:"Your password has been reset successfully!"})]}),(0,w.jsx)("img",{src:u,alt:"keysee",className:o.Z.mainLogo,onClick:function(){n.replace("/login")}}),(0,w.jsx)(p.Z,{show:N,status:j.status,message:j.message})]})},v=function(){return(0,w.jsx)(g,{})}},8995:function(e,n,t){t.d(n,{j:function(){return r}});var s=t(8098),r=function(e,n){return function(t){t(s.J.showNotification({status:e,message:n})),setTimeout((function(){t(s.J.hideNotification())}),2500),setTimeout((function(){t(s.J.resetNotification())}),4e3)}}}}]);
//# sourceMappingURL=616.d7b51ade.chunk.js.map