$(function () {
    const emailField = $('#inputEmail');
    const passField = $('#inputPassword');
    const loginButton = $('button[type=submit]');

    let messageObj = {};

    function emptyFields() {
        if (_.isEmpty(emailField.value || _.isEmpty(passField.value))) {
            isValid = false;
        }
    }

    function emailIsValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    function validation() {

        isValid = emptyFields();

        if (isValid) {
            messageObj = {
                text: 'Você foi logado com sucesso',
                class: 'alert-success',
                type: 'success'
            }
        } else {
            messageObj = {
                text: 'Digite seu email e senha',
                class: 'alert-danger',
                type: 'failure'
            }
        }

        showMessage(messageObj);
    }

    function showMessage(messageObj) {
        $(".alert p").text(messageObj.text);
        $(".alert").toggleClass('show hide').addClass(messageObj.class);
        setTimeout(function () {
            $(".alert").toggleClass('hide show');
        }, 3000);
    }

    loginButton.on('click', validation);
});


