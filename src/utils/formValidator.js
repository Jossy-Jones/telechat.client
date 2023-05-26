export const validator = {
    validateForm(id) {
        return _validateForm(id);
    },
    validateElement(id) {
        return _validateElement(id);
    },
    getErrorByKey(errors, key) {
        return _getErrorByKey(errors, key) ?? null;
    },

    validateNumberField(e) {
        onlyNumberKey(e)
    }
};

const _validateForm = (id) => {
    var form = document.getElementById(id);
    if (form.checkValidity()) return [];

    var errors = [];
    Array.prototype.forEach.call(form.elements, (e) => {
        if (!e.reportValidity()) {
            errors.push({
                key: e.getAttribute("id"),
                msg: e.validationMessage,
            });
        }
    });
    return errors;
};

const _validateElement = (id) => {
    var e = document.getElementById(id);
    if (e.checkValidity()) return null;

    if (!e.reportValidity()) {
        return e.validationMessage;
    }
};

const onlyNumberKey = (e) => {
    var keyCode = e.which;
    if ((keyCode !== 8 || keyCode === 32) && (keyCode < 48 || keyCode > 57)) {
        e.preventDefault();
    }
    return true;
}


const _getErrorByKey = (errors, key) => errors?.find((a) => a.key === key)?.msg;

export default validator;
