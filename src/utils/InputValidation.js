
function validateEmail(email) {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    const re = /^\D*0(\D*\d){9}\D*$/;
    return re.test(String(phone).toLowerCase());
}

function validateAbn(abn) {
    const re = /^(\d *?){11}/;
    return re.test(String(abn).toLowerCase());
}

function validatePostcode(number) {
    const re = /^[0-9]{4}$/;
    return re.test(String(number).toLowerCase());
}

function showTwoDigits(hourlyrate) {
    return parseFloat(hourlyrate).toFixed(2);
}

const InputValidaton = {
    validateEmail,
    validatePhone,
    validateAbn,
    validatePostcode,
    showTwoDigits
};

export default InputValidaton;