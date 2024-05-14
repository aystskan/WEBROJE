window.addEventListener("DOMContentLoaded",event=>{
    var navbarMobile=function(){
        const nCollapsible=document.body.querySelector("#mainNavbar");
        if(!nCollapsible){
            return;
        }if(window.scrollY === 0){
            nCollapsible.classList.remove("navbar-mobile");
        }else{
            nCollapsible.classList.add("navbar-mobile");
        }
    };
    navbarMobile();
    document.addEventListener("scroll",navbarMobile);
    const myNavbar=document.body.querySelector("mainNavbar");
    if(myNavbar){
        new bootstrap.ScrollSpy(document.body,{
            target:"#mainNavbar",
            offset:74
        });
    }
});
var BtnCanvas = document.querySelectorAll(".btn-close-canvas");
for(let i = 0; i < BtnCanvas.length; i++) {
    BtnCanvas[i].addEventListener("click",function()
    {
        document.querySelector('[data-bs-dismiss="offcanvas"]').click();
    });
}

(function () {
  'use strict'
 var myName = document.querySelector("#name");
 var mySurame = document.querySelector("#surname");
 var myEmail = document.querySelector("#email");
 var myPhone = document.querySelector("#phone");
 var myMessage = document.querySelector("#message");
 var myBtn = document.querySelector("#BtnContact");

 if(myMessage.value.length == 0) {
    myBtn.disabled = 1;
 }

 myMessage.addEventListener("keyup", function () {
    document.getElementById("current-character").textContent = myMessage.value.length;
    if (myMessage.value.length >= 7) {
        myBtn.disabled = 0;
    } else {
        myBtn.disabled = 1;
    }
 });
//  var myForms =  document.querySelector(".doğrula");
//  myForms.addEventListener("submit", function(event){
//     if(!myForms.checkVolidity()) {
//         e.preventDefault();
//         e.stopPropagation();
//     }
//  }) form html hata denetlemeleri aktif tutulmasaydı kullanılacaktı 

})();