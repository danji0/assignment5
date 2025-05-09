document.addEventListener( "DOMContentLoaded", () => {
    const welcomeText =
    document.querySelector("welcome-section h1"

    );
    welcomeText.style.opacity = "0";
    welcomeText.style.transform = "translateY(-20px)";

    setTimeout(() => {
        welcomeText.style.transition
        ="opacity is ease-out, transform is ease-out";
        welcomeText.style.opacity = "1";
        welcomeText.style.transform = "translateY(0)";
    }, 500);

    document.querySelector("#loginBtn")?.
    addEventListener("click", () => {
        window.location.href =
        "login.html";
    });

    document.querySelector("#registerBtn"
)?.addEventListener("click", () => {
    window.location.href =
    "register.html";
     });
  });
