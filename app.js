let submit = document.getElementById("claim"),
    firstnameField = document.getElementsByName("firstName")[0],
    lastNameField = document.getElementsByName("lastName")[0],
    emailField = document.getElementsByName("email")[0],
    passwordField = document.getElementsByName("password")[0];


submit.addEventListener("click",()=>{
    checkLabel(firstnameField,".error-text.firstname",".icon-error.firstname");
    checkLabel(lastNameField,".error-text.lastname",".icon-error.lastname");
    checkLabel(passwordField,".error-text.password",".icon-error.password");
    // checkLabel(emailField,".error-text.email",".icon-error.email");
    checkEmail(emailField);
})


function checkLabel(labelName,error_text,error_img){
    if(labelName.value == ""){
        document.querySelector(error_text).style = "display : block";
        document.querySelector(error_img).style = "display : block";
        labelName.style.border = "1px solid red";
    }
    else{
        document.querySelector(error_text).style = "display : none";
        document.querySelector(error_img).style = "display : none";
        labelName.style.border = "1px solid rgba(90, 90, 90, 0.432);";
    }
}

function checkEmail(emailField){
    let mail = emailField.value;
    characters = ['@','.'];
    let is_valid = false;
    if(mail.lenght < 5){

    }
    else {
        for(let j = 0 ; j <2 ; ++j ) {
            for( let i = 0 ; i <= mail.length;++i) {
                if(mail[i] == characters[j])
                {
                    is_valid = true;
                    break;
                }
                else {
                    is_valid = false;
                }
            }
        }
    }

    if(!is_valid){
        document.querySelector(".error-text.email").style = "display : block";
        document.querySelector(".icon-error.email").style = "display : block";
        emailField.style.border = "1px solid red";
        emailField.value = "email@example/com"
        emailField.style.color = "red";
    }
    else{
        document.querySelector(".error-text.email").style = "display : none";
        document.querySelector(".icon-error.email").style = "display : none";
        emailField.style.border = "1px solid rgba(90, 90, 90, 0.432);";
        emailField.value = emailField.value;
        emailField.style.color = "hsl(249, 10%, 26%);";   
    }
}