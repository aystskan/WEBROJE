window.addEventListener("DOMContentLoaded", event => {
    var navbarMobile = function () {
        const nCollapsible = document.body.querySelector("#mainNavbar");
        if (!nCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            nCollapsible.classList.remove("navbar-mobile");
        } else {
            nCollapsible.classList.add("navbar-mobile");
        }
    };
    navbarMobile();
    document.addEventListener("scroll", navbarMobile);
    const myNavbar = document.body.querySelector("#mainNavbar");
    if (myNavbar) {
        new bootstrap.ScrollSpy(document.body, {
            target: "#mainNavbar",
            offset: 74,
        });
    }
});
var BtnCanvas = document.querySelectorAll(".btn-close-canvas");
for (let i = 0; i < BtnCanvas.length; i++) {
    BtnCanvas[i].addEventListener("click", function () {
        document.querySelector('[data-bs-dismiss="offcanvas"]').click();
    });
}

(function () {
  'use strict'
 var myName = document.querySelector("#name");
 var mySurname = document.querySelector("#surname");
 var myEmail = document.querySelector("#email");
 var myPhone = document.querySelector("#phone");
 var myMessage = document.querySelector("#message");
 var myBtn = document.querySelector("#BtnContact");

 if(myMessage.value.length == 0) {
    myBtn.disabled = true;
 }
//düzenli ifadeler
const spacePattern = /^\S*$/;
const NumericPattern = /^([^0-9]*)$/;
const EmailPattern = /^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/;
const OnlyNumberPattern = /^[0-9]*$/;

myName.addEventListener("blur", controlName);
mySurname.addEventListener("blur", controlSurname);
myEmail.addEventListener("blur", controlEmail);
myPhone.addEventListener("blur", controlPhone);
myMessage.addEventListener("blur", controlMessage);

function controlName()
 {
    var myError = document.querySelector("#ErrName");
if (myName.value.length == 0) {
    myName.classList.remove("is-valid");
    myName.classList.add("is-invalid");
    myError.textContent = "İsim alanı boş bırakılamaz";
    return false;
} else if (myName.value.length < 2) {
    myName.classList.remove("is-valid");
    myName.classList.add("is-invalid");
    myError.textContent = "İsminiz 2 karakterden az olamaz";
    return false;
} else if (myName.value.length > 40) {
    myName.classList.remove("is-valid");
    myName.classList.add("is-invalid");
    myError.textContent = "İsminiz 40 karakterden fazla olamaz";
    return false;
} else if (!NumericPattern.test(myName.value)) {
    myName.classList.remove("is-valid");
    myName.classList.add("is-invalid");
    myError.textContent = "İsminizde rakam kullanamazsınız!";
    return false;
} else {
    myName.classList.remove("is-invalid");
    myName.classList.add("is-valid");
    return true;
}
 }
function controlSurname()
 {
    var myError = document.querySelector("#ErrSurname");
if (mySurname.value.length == 0) {
    mySurname.classList.remove("is-valid");
    mySurname.classList.add("is-invalid");
    myError.textContent = "Soyad alanı boş bırakılamaz";
    return false;
} else if (mySurname.value.length > 40) {
    mySurname.classList.remove("is-valid");
    mySurname.classList.add("is-invalid");
    myError.textContent = "Soyadınız 40 karakterden fazla olamaz";
    return false;
}else if (!NumericPattern.test(mySurname.value)) {
    mySurname.classList.remove("is-valid");
    mySurname.classList.add("is-invalid");
    myError.textContent = "Soyadınızda rakam kullanamazsınız!";
    return false;
} else {
    mySurname.classList.remove("is-invalid");
    mySurname.classList.add("is-valid");
    return true;
}
 }
function controlEmail()
 {
    var myError = document.querySelector("#ErrEmail");
if (myEmail.value.length == 0) {
    myEmail.classList.remove("is-valid");
    myEmail.classList.add("is-invalid");
    myError.textContent = "Eposta alanı boş bırakılamaz";
    return false;
} else if (!spacePattern.test(myEmail.value)) {
    myEmail.classList.remove("is-valid");
    myEmail.classList.add("is-invalid");
    myError.textContent = "Eposta adresinizde boşluk bıraktınız";
    return false;
} else if (!EmailPattern.test(myEmail.value)) {
    myEmail.classList.remove("is-valid");
    myEmail.classList.add("is-invalid");
    myError.textContent = "Eposta formatınız yanlış. Tekrardan kontrol edin!";
    return false;
} else {
    myEmail.classList.remove("is-invalid");
    myEmail.classList.add("is-valid");
    return true;
}
 }
function controlPhone()
 {
    var myError = document.querySelector("#ErrPhone");
if (myPhone.value.length == 0) {
    myPhone.classList.remove("is-valid");
    myPhone.classList.add("is-invalid");
    myError.textContent = "Telefon alanı boş bırakılamaz";
    return false;
} else if (!spacePattern.test(myPhone.value)) {
    myPhone.classList.remove("is-valid");
    myPhone.classList.add("is-invalid");
    myError.textContent = "Telefon numaranızda boşluk bıraktınız";
    return false;
} else if (!OnlyNumberPattern.test(myPhone.value)) {
    myPhone.classList.remove("is-valid");
    myPhone.classList.add("is-invalid");
    myError.textContent = "Telefon numaranız sadece rakamlardan oluşmalıdır";
    return false;
} else if (myPhone.value.length < 7) {
    myPhone.classList.remove("is-valid");
    myPhone.classList.add("is-invalid");
    myError.textContent = "Telefon numaranız 7 rakamdan az olamaz";
    return false;
} else if (myPhone.value.length > 13) {
    myPhone.classList.remove("is-valid");
    myPhone.classList.add("is-invalid");
    myError.textContent = "Telefon numaranız 13 rakamdan fazla olamaz";
    return false;
} else {
    myPhone.classList.remove("is-invalid");
    myPhone.classList.add("is-valid");
    return true;
}
 }
function controlMessage()
 {
    var myError = document.querySelector("#ErrMessage");
    if (myMessage.value.length == 0) {
        myMessage.classList.remove("is-valid");
        myMessage.classList.add("is-invalid");
        myError.textContent = "Mesaj alanı boş bırakılamaz";
        return false;
    } else if (myMessage.value.length < 7) {
        myMessage.classList.remove("is-valid");
        myMessage.classList.add("is-invalid");
        myError.textContent = "Mesajınız 7 karakterden az olamaz";
        return false;
    } else {
        myMessage.classList.remove("is-invalid");
        myMessage.classList.add("is-valid");
        return true;
    }
 }

 myMessage.addEventListener("keyup", function () {
    document.getElementById("current-character").textContent = myMessage.value.length;
    if (myMessage.value.length >= 7) {
        myBtn.disabled = false;
    } else {
        myBtn.disabled = true;
    }
 });
 //validation ile doğrulamaya ihtiyacımız var-->form html hata denetlemeleri aktif tutulmadığından (index.html dekii novalidation)
var myForms =  document.querySelector(".needs-validation");
 myForms.addEventListener("submit", function(event){
    if(!myForms.checkValidity() || 
    !controlName() || 
    !controlSurname() || 
    !controlEmail() || 
    !controlPhone() || 
    !controlMessage()) {
        e.preventDefault();
        e.stopPropagation();
    }else{
        document.getElementById("frmContact").reset(); 
    }
 }, false);  

})();


// jQuery validation
$(document).ready(function() {
    $('#BtnValidateJQ').click(function(event) {
        event.preventDefault();
        var isValid = true;

        // Validate name
        if ($('#name').val().trim() === '') {
            $('#ErrName').text('Adınız zorunludur.');
            $('#name').addClass('is-invalid');
            isValid = false;
        } else {
            $('#ErrName').text('');
            $('#name').removeClass('is-invalid');
        }

        // Validate surname
        if ($('#surname').val().trim() === '') {
            $('#ErrSurname').text('Soyadınız zorunludur.');
            $('#surname').addClass('is-invalid');
            isValid = false;
        } else {
            $('#ErrSurname').text('');
            $('#surname').removeClass('is-invalid');
        }

        // Validate email
        var email = $('#email').val().trim();
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '' || !emailRegex.test(email)) {
            $('#ErrEmail').text('Geçerli bir e-posta adresi giriniz.');
            $('#email').addClass('is-invalid');
            isValid = false;
        } else {
            $('#ErrEmail').text('');
            $('#email').removeClass('is-invalid');
        }

        // Validate phone
        if ($('#phone').val().trim() === '') {
            $('#ErrPhone').text('Telefon numaranız zorunludur.');
            $('#phone').addClass('is-invalid');
            isValid = false;
        } else {
            $('#ErrPhone').text('');
            $('#phone').removeClass('is-invalid');
        }

        // Validate message
        if ($('#message').val().trim() === '') {
            $('#ErrMessage').text('Mesajınız zorunludur.');
            $('#message').addClass('is-invalid');
            isValid = false;
        } else {
            $('#ErrMessage').text('');
            $('#message').removeClass('is-invalid');
        }

        if (isValid) {
            // tüm alanlar geçerliyse formu gönder
            $('#frmContect').submit();
        }
    });
});

