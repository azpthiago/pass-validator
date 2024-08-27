class PasswordValidator {
    constructor(password) {
        this.password = password;
        this.errors = [];
    }

    validate() {
        this.errors = [];
        if (!this.hasMinLength()) this.errors.push('A senha deve ter mais de 8 caracteres.');
        if (!this.hasUpperCase()) this.errors.push('A senha deve conter pelo menos uma letra maiúscula.');
        if (!this.hasLowerCase()) this.errors.push('A senha deve conter pelo menos uma letra minúscula.');
        if (!this.hasSpecialCharacter()) this.errors.push('A senha deve conter pelo menos um caractere especial (!,@,#,$,% ou .).');

        return this.errors.length === 0;
    }

    hasMinLength() {
        return this.password.length > 8;
    }

    hasUpperCase() {
        return /[A-Z]/.test(this.password);
    }

    hasLowerCase() {
        return /[a-z]/.test(this.password);
    }

    hasSpecialCharacter() {
        return /[!@#$%.]/.test(this.password);
    }

    getErrors() {
        return this.errors;
    }
}

export default PasswordValidator;
