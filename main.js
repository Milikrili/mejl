function formValidation() {
    var uid = document.registration.userid;
    var passid = document.registration.passid;
    var uname = document.registration.username;
    var uadd = document.registration.address;
    var ucountry = document.registration.country;//select form
    var uzip = document.registration.zip;
    var uemail = document.registration.email;
    var phone = document.registration.mobile;
    var upolm = document.registration.pol;
 



    if (userIdValidation(uid)) {
        if (passid_validation(passid, 7, 12)) {
            if (allLetter(uname)) {
                if (countrySelect(ucountry)) {
                    if (allnumeric(uzip)) {
                        if (validateEmail(uemail)) {
                            if (validatePhone(phone)) {
                                if (validsex(upolm)) {
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return false;
}


// validacija userId-a
function userIdValidation(uid) {
    var regUId = /^\d{5}$/;
    if (uid.value.match(regUId)) {
        return true;
    }
    alert("User Id ne moze biti prazan i mora biti tacno 5 cifara");
    uid.focus();
    return false;
}

// validacija passworda
function passid_validation(passid) {
    regPas = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#$&!@?_]).{8,16}$/;

    if (passid.value.match(regPas)) {
        return true;
    }
    alert("Password mora biti duzine 8-16 karaktera sa malim, velikim slovima, spec znakom i brojem");
    passid.focus();
    return false;
}

// provera username-a
function allLetter(uname) {
    var letters = /^[A-Z]{1}[a-z]{2,30}$/;
    if (uname.value.match(letters)) {
        return true;
    }
    else {
        alert('Name mora pocinjati velikim slovom i moze biti maksimalne duzine od 30 karaktera.');
        uname.focus();
        return false;
    }
}

// provera zemlje
function countrySelect(coun) {
    if (coun.value == 'Default') {
        alert("Drzava mora biti odabrana!");
        return false;
    } else {
        return true;
    }

}

// Postanski broj
function allnumeric(uzip) {
    var numbers = /^[0-9]{5}$/;
    if (uzip.value.match(numbers)) {
        return true;
    }
    else {
        alert('Postal code mora biti duzine 5 brojeva');
        uzip.focus();
        return false;
    }
}

// validacija e-mail adrese
function validateEmail(uemail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (uemail.value.match(mailformat)) {
        return true;
    }
    else {
        alert("Email adresa nije validna!");
        uemail.focus();
        return false;
    }
}

// validacija telefona 
function validatePhone(uphone) {
    var phoneFormat = /^0\d{2}\/\d{3}(-\d{2}){2}$/;
    if (uphone.value.match(phoneFormat)) {
        return true;
    }
    else {
        alert("Telefon nije validan! Format telefona mora biti: 0xx/xxx-xx-xx");
        uphone.focus();
        return false;
    }
}

function validsex(umsex) {
    var x = 0;

    if (umsex[0].checked==true) {
        x++;
    } if (umsex[1].checked==true) {
        x++;
    }
    if (x == 0) {
        alert('Selektuj pol');
        umsex[0].focus();
        return false;
    }
    else {
        alert('Forma je uspesno popunjena i prosledjena na server!');
        window.location.reload();
        return true;
    }
}




