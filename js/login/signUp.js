/* 비밀번호 on&off */
document.querySelectorAll(".password-invisible").forEach((toggleIcon) => {
    toggleIcon.addEventListener("click", () => {
        const passwordInput = toggleIcon.previousElementSibling;

        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            toggleIcon.src = "../../assets/images/password-visible.png";
        } else {
            passwordInput.type = "password";
            toggleIcon.src = "../../assets/images/password-invisible.png";
        }
    });
});
