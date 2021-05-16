

function formValidation() {
    var uemail = document.login.email;
    var passid = document.login.passid;
    var uname = document.login.username;
    var urollnumber = document.login.rollnumber;
    var ugender = document.login.gender;
    var umobile = document.login.mobileNumber;
    var ubirthday = document.login.birthday;
    var ucourses = document.login.courses;
    if (ValidateEmail(uemail)) {
        if (passid_validation(passid)) {
            if (uname_validation(uname)) {
                if (uroll_validation(urollnumber)) {
                    if (gender_validation(ugender)) {
                        if (mobileNumber_validation(umobile)) {
                            if (birthday_validation(ubirthday)) {
                                if (courses_validation(ucourses)) {
                                    alert("Hooray! Finally,Form is Succesfully Submitted");
                                    return true;
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

function ValidateEmail(uemail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (uemail.value.match(mailformat)) {
        return true;
    }
    else {
        document.getElementById('error-email').innerHTML = "Please Enter Your Email id "
        uemail.focus();
        return false;
    }
}
function passid_validation(passid) {
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (passid.value.match(passw)) {
        // console.log("matched")
        return true;
    }
    else {
        document.getElementById('error-password').innerHTML = "minimum one number,uppercase and lowercase"
        passid.focus();
        return false;
    }
}
function uname_validation(uname) {
    var letterswa = /^[A-Za-z]+$/;
    if (uname.value.match(letterswa)) {
        return true;
    }
    else {
        document.getElementById('error-name').innerHTML = "Username must have alphabet characters only"
        uname.focus();
        return false;
    }
}
function uroll_validation(urollnumber) {
    var i, check = 0;
    var code;
    var str = urollnumber.value
    for (i = 0; i < str.length; i++) {
        code = str.charAt(i);
        if (!(code >= '0' && code <= '9') && // numeric (0-9)
            !(code >= 'a' && code <= 'z') && // upper alpha (A-Z)
            !(code >= 'A' && code <= 'Z')) { // lower alpha (a-z)
            document.getElementById('error-roll').innerHTML = "Rollnumber must be alphanumeric"
            urollnumber.focus();
            return false;
        }
        else {
            check++;
        }
    }
    if (check === 6)
        return true;
    else {
        document.getElementById('error-roll').innerHTML = "Length should be 6"
        urollnumber.focus();
        return false;
    }
}
function gender_validation(ugender) {
    if (ugender.value === "Male" || ugender.value === "Female") {
        return true;
    }
    else {
        document.getElementById('error-gender').innerHTML = "Must Choose An Option!"
        // ugender.focus();
        return false;
    }
}
function mobileNumber_validation(umobile) {
    var phoneno = /^\d{10}$/;
    if (umobile.value.match(phoneno)) {
        return true;
    }
    else {
        document.getElementById('error-mobile').innerHTML = "Not a valid Mobile number"
        umobile.focus();
        return false;
    }
}
function birthday_validation(ubirthday) {
    var date = ubirthday.value;
    if (date != "") {
        return true;
    }
    else {
        document.getElementById('error-birthday').innerHTML = "Invalid date format!"
        ubirthday.focus();
        return false;
    }
}
function courses_validation(ucourses) {
    if (ucourses.value == "Default") {
        document.getElementById('error-courses').innerHTML = "Select your courses from the list"
        ucourses.focus();
        return false;
    }
    else {
        return true;
    }
}

