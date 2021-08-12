var errorMessages = [];

var Username = $("#Username");
var Password = $("#Password");
$("#form").submit(function (e) {
    if (Username.val() === "" || Username.val() === null) {
        Username.addClass("error");
        errorMessages.push("Username is required");
    }

    if (Password.val() === "" || Password.val() === null) {
        Password.addClass("error");
        errorMessages.push("Password is required");
    }
    if (errorMessages.length > 0) {
        e.preventDefault(); 
        $("#error-message").text(errorMessages.join(" | "));
        errorMessages = [];
    }
});

$(Password).change(function () {
    Password.removeClass("error");
});

$(Username).change(function () {
    Username.removeClass("error");
});

$("#reset-button").click(function () {
    errorMessages = [];
    Username.removeClass("error");
   Password.removeClass("error");

    $("#error-message").text(null);
});