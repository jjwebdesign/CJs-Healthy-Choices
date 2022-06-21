// Initialize connection with public key
(function(){ emailjs.init("DknL__q9iYDp74hMS"); })();

document.getElementById(`sendMessageButton`).addEventListener(`click`, function () {

    const name = document.getElementById(`nameInput`).value;
    const fromEmail = document.getElementById(`emailInput`).value;
    const fromPhone = document.getElementById(`phoneInput`).value;
    const message  = document.getElementById(`inquiryTextbox`).value;

    if ((name == ``) || (fromEmail == ``) || (fromPhone == ``))
    {
        alert(`Contact information can not be left blank.`);
        return;
    }

    if (message == ``)
    {
        message = `No message sent.`;
    }

    let contents = {

        from_name: name,
        email: fromEmail,
        phone: fromPhone,
        message: message
    };

    emailjs.send(`service_l64lhbp`, `template_g4j1up5`, contents).then(function() {alert(`Message Sent.`)});

});