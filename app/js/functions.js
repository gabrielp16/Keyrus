$(function () {
    const elementAlert = $(".alert");
    const emailField = $('#inputEmail');
    const loginButton = $('button[type=submit]');
    const passField = $('#inputPassword');

    let messageObj = {};

    function emptyFields() {
        let fullFields = true;
        if (_.isEmpty(emailField.val()) || _.isEmpty(passField.val())) {
            fullFields = false;
        }

        return fullFields;
    }

    function emailIsValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validation() {
        let fullFields = emptyFields();
        let emailValid = emailIsValid(emailField.val());

        if (fullFields && emailValid) {
            messageObj = {
                class: 'alert-success',
                icon: 'fas fa-check',
                text: 'Você foi logado com sucesso'
            };
        } else {
            messageObj = {
                class: 'alert-danger',
                icon: 'fas fa-times',
                text: 'Digite seu email e senha'
            };
        }

        showMessage(messageObj);
    }

    function showMessage(messageObj) {
        elementAlert.find("p").text(messageObj.text);
        elementAlert.find("em").removeAttr('class').addClass(messageObj.icon);
        elementAlert
            .removeClass('alert-success alert-danger show hide')
            .addClass(messageObj.class)
            .addClass('show');

        setTimeout(function () {
            elementAlert
                .removeClass('show')
                .addClass('hide');
        }, 4000);
    }

    loginButton.on('click', function () {
        elementAlert
            .removeClass('hide show');

        validation();

        return false;
    });
});