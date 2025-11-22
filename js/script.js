welcomeMessage();

// function welcome message to display by js
function welcomeMessage() {
    let userName = prompt("please enter your name:");
    if (userName === '') {
        userName = "Guest";
    }
    document.getElementById("welcome-speech").innerText = "Welcome, " + userName + "!";
    // console.log("welcome, " + userName + "!");
}

// validation popup 
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("myForm").addEventListener("submit", function(e) {
        e.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;
        let birth = document.getElementById("birth").value;
        let gender = document.querySelector('input[name="gender"]:checked').value;

        // masukkan data ke popup

        document.getElementById("popupName").innerText = "Name: " + name;
        document.getElementById("popupEmail").innerText = "Email: " + email;
        document.getElementById("popupMessage").innerText = "Message: " + message;
        document.getElementById("popupBirth").innerText = "Birth: " + birth;
        document.getElementById("popupGender").innerText = "Gender: " + gender;

        // tampilkan popup
        document.getElementById("popupModal").classList.remove("hidden");
        document.getElementById("popupModal").classList.add("flex");
    });

    // tombol close
    document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("popupModal").classList.add("hidden");
    document.getElementById("popupModal").classList.remove("flex");
    });
});