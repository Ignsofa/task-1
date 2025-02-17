document.getElementById("user-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const inputs = document.getElementsByClassName("form-input");

    const userData = {
        name: inputs[0].value,
        surname: inputs[1].value,
        email: inputs[2].value,
        password: inputs[3].value
    };

    console.log(userData);
});