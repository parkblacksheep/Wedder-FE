const togglePasswordIcon = document.querySelector(".password-invisible");

let isHidden = false;
togglePasswordIcon.addEventListener("click", () => {
    const password_text = document.querySelector(".password input");

    if (!isHidden) {
        password_text.type = "text";
        togglePasswordIcon.src = "../../assets/images/password-visible.png";
        isHidden = true;
    } else {
        password_text.type = "password";
        togglePasswordIcon.src = "../../assets/images/password-invisible.png";
        isHidden = false;
    }
});
